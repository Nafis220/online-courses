import React from 'react';

const Courses = (props) => {
    const {picture,name,price} = props.courses
    return (
        <div className='text-primary d-flex flex-column p-5 '>
            <img style={{height:'200px'}} src={picture} alt=""/>
            <p>${price}</p>
            <h2>{name}</h2>
            <button  onClick={() => {props.handleCourses(props.courses)}} className="btn btn-primary">Enroll Now </button>
        </div>
    );
};

export default Courses;