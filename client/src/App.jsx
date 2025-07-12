import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Navbarr } from './Components/Navbar/Navbar'
import { Footer } from './Components/Footer/Footer'
import { Home } from './Screens/Home/Home'
import { About } from './Screens/About/About'
import { Rules } from './Screens/Rules/Rules'
import { Syllabus } from './Screens/Syllabus/Syllabus'

import { Papers } from './Screens/Papers/Papers'
import { Contact } from './Screens/Contact/Contact'
import { Timetable } from './Screens/Timetable/Timetable'
import { Journal } from './Screens/Journal/Journal'
import { Course } from './Screens/Course/Course'
import { Login } from './Screens/Admin/Login'
import { EbookViewer } from './Screens/EbookViewer/EbookViewer'
import { AdminHome } from './Screens/Adminpages/AdminHome'
function App() {
  return (
    <>
      {/* pull krli */}
      {/* navbar and footer maine apne vale hi lga diye . ab tu changes kr diyo inme */}
      <Navbarr />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/papers/:courseId" element={<Papers/>}/>
        <Route path="/syllabus/:courseId" element={<Syllabus/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/rules" element={<Rules/>}/>
        <Route path="/timetable/:courseId" element={<Timetable/>}/>
        <Route path="/journal" element={<Journal/>}/>
        <Route path="/ebooks/:courseId" element={<Course/>}/>
        <Route path="/admin" element={<Login/>}/>
        {/* <Route path="/technology" element={<Technology/>}/> */}
        <Route path="/allebooks/:category" element={<EbookViewer/>}/>
        <Route path="/admin/home" element={<AdminHome/>}/>

      </Routes>
      <Footer />
    </>
  )
}

export default App
