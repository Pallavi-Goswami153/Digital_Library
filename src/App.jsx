import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Navbarr } from './Components/Navbar/Navbar'
import { Footer } from './Components/Footer/Footer'
import { Home } from './Screens/Home/Home'
import { About } from './Screens/About/About'
import { Rules } from './Screens/Rules/Rules'
import { Syllabus } from './Screens/Syllabus/Syllabus'
import { EBooks } from './Screens/EBooks/EBooks'
import { Papers } from './Screens/Papers/Papers'
import { Contact } from './Screens/Contact/Contact'
import { Timetable } from './Screens/Timetable/Timetable'
import { Journal } from './Screens/Journal/Journal'
import { Course } from './Screens/Course/Course'
import { Login } from './Screens/Admin/Login'
function App() {
  return (
    <>
      {/* pull krli */}
      {/* navbar and footer maine apne vale hi lga diye . ab tu changes kr diyo inme */}
      <Navbarr />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/papers" element={<Papers/>}/>
        <Route path="/syllabus" element={<Syllabus/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/ebooks" element={<EBooks/>}/>
        <Route path="/rules" element={<Rules/>}/>
        <Route path="/timetable" element={<Timetable/>}/>
        <Route path="/journal" element={<Journal/>}/>
<<<<<<< HEAD
        <Route path="/ebooks/:cls" element={<Course/>}/>
        <Route path="/admin" element={<Login/>}/>

=======
        <Route path="/ebooks/:courseId" element={<Course/>}/>
>>>>>>> 879edb0c06bf297ca1b06bc6474271bc0ecdcc45

      </Routes>
      <Footer />
    </>
  )
}

export default App
