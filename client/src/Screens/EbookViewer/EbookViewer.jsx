import React, { useEffect, useState } from 'react';
import { Row,Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { FiEye } from 'react-icons/fi';
import { FiDownload } from 'react-icons/fi';
import { Search } from '../../Components/SearchBar/SearchBar';

// import { PDFViewer } from '../../Components/PDFviewer/Pdf';



export const EbookViewer = () => {
  const { category } = useParams();
  const [ebooks, setEbooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  //values match krne ke liye
   const [input,setInput]=useState("");
      let inputhandler=(e)=>{
          const lowercase=e.target.value.toLowerCase();
          setInput(lowercase);
      }

  useEffect(() => {
    setLoading(true);
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        const filtered = [];

        const matchingCourses = data.courses.filter(course =>
          course.category?.toLowerCase() === category.toLowerCase()
        );

        if (matchingCourses.length === 0) {
          setNotFound(true);
          setEbooks([]);
          setLoading(false);
          return;
        }

        matchingCourses.forEach(course => {
          course.semesters.forEach(sem => {
            sem.subjects.forEach(subject => {
              subject.ebooks.forEach(ebook => {
                filtered.push({
                  title: ebook.book_title,
                  link: ebook.link
                });
              });
            });
          });
        });

        setEbooks(filtered);
        setNotFound(false);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data.json:", error);
        setNotFound(true);
        setLoading(false);
      });
  }, [category]);

  if (loading) return <div className="text-center mt-4">Loading ebooks...</div>;

  if (notFound) {
    return (
      <div className="text-center text-danger mt-4">
        No ebooks found for category: "{category}"
      </div>
    );
  }


   const filteredData = ebooks.filter((el) => {
        //if no input the return the original
        if (input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.title.toLowerCase().includes(input)  //title match krega
        }
    })
  return (
    <div className="container mt-4" style={{marginBottom:"500px"}}>
      <Row className='m-3'>
        <Col>
      <h3 
      // className=" text-center"
      >{category.charAt(0).toUpperCase() + category.slice(1)} Ebooks</h3>
        </Col>
        <Col className="text-end">
      <Search op={inputhandler} input={input}/>
      
        </Col>
      </Row>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Title</th>
            <th>View</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((ebook, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{ebook.title}</td>
              <td>
                <a href={ebook.link} target="_blank" rel="noopener noreferrer"><FiEye size={20}  style={{ cursor: "pointer" }} /></a>
              </td>
              <td>
                <a href={ebook.link} target="_blank" rel="noopener noreferrer"><FiDownload size={20} style={{ cursor: "pointer" }} /></a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
