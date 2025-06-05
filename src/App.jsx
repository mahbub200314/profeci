import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Layout from './Layout'
import Contact from './pages/contact/Contact'
import Nested from './Nested'
import Hero from './pages/hero/Hero'
import NestedCaseStudy from './pages/nestedCaseStudy/NestedCaseStudy'
import DetailsCase from './pages/nestedCaseDetails/DetailsCase'
import NotFound from './pages/notFound/NotFound'

function App() {
  

  return (
     <div>

        <Routes>
          <Route path='/' element={<Layout/>} >
             <Route path='hero' element={<Hero></Hero>}/>
          </Route>
          

             <Route element={<Nested/>}>
                  <Route path='contact' element={<Contact></Contact>} ></Route>
                  <Route path="nestedCaseStudy" element={<NestedCaseStudy/>}/>
                  <Route path='nestedCaseDetails' element={<DetailsCase/>}></Route>
              </Route>      

          <Route path='*' element={<NotFound/>}/>
        </Routes>



     </div>
    
  )
}

export default App
