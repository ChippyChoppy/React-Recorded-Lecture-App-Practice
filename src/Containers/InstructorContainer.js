import React from 'react'
import Instructor from '../Components/Instructor'
import Form from '../Components/Form'

class InstructorContainer extends React.Component {

    state = {
           instructors: [{ id: 1, name: "Steven" }, { id: 2, name: "Caryn" }, { id: 3, name: "Greg" }, { id: 4, name: "Tashawn" }]
 
    }

    submitHandler = (obj) => {
        //async action in JS
        let newArray = [...this.state.instructors, obj]
        console.log("old State:", this.state.instructors)
        this.setState({ instructors: newArray }, () => console.log("new State:", this.state.instructors)
)
        // setState resolution
    }

    render() {
        console.log("state in render", this.state.instructors)
        let instructors = this.state.instructors.map(instructorObj => <Instructor key={instructorObj.id} instructor={instructorObj} appClickHandler={this.props.appClickHandler} />)
        return (
            <div>
                <Form submitHandler={this.submitHandler} />
                {instructors}
            </div>
        )
    }

}

export default InstructorContainer