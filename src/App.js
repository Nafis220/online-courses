import React from 'react';
import logo from './logo.svg';
import './App.css';
import courses from './components/fakedata';
import Courses from './components/courses/courses';
import Cart from './components/cart/cart';
import { useState } from 'react';

function App() {
  const [course, setCourse] = useState(courses);
  const [cart, setCart] = useState([]);

  const handleCourses = (course) => {
    const newCart = [...cart,course];
    setCart(newCart)
  }
   return (
    <div className="App d-flex container" >
     <div>
     {
        course.map(courses => <Courses handleCourses={handleCourses} courses = {courses}></Courses> 
        )
     }
     </div>
      <Cart cart={cart}></Cart>
     
    </div>
  );
}

export default App;
