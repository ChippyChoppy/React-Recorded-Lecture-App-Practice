import React from 'react'
import Instructor from '../Components/Instructor'




function InstructorContainer(props) {
    
const instructor_names = [{ id: 1, name: "Steven" }, { id: 2, name: "Caryn" }, {id: 3, name: "Greg"}, {id: 4, name: "Tashawn" }]

    let instructors = instructor_names.map(instructorObj => <Instructor key={instructorObj.id} instructor={instructorObj} appClickHandler={props.appClickHandler}/>)
    return (
        <div>
            {instructors}
        </div>
    )
}

export default InstructorContainer