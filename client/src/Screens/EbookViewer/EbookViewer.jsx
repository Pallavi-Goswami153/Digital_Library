import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const EbookViewer = () => {
  const { category } = useParams();
  const [ebooks, setEbooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

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

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center">{category.charAt(0).toUpperCase() + category.slice(1)} Ebooks</h3>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Title</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {ebooks.map((ebook, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{ebook.title}</td>
              <td>
                <a href={ebook.link} target="_blank" rel="noopener noreferrer">View</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
