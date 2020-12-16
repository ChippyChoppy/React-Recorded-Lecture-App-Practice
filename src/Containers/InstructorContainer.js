import React from 'react'
import Instructor from '../Components/Instructor'
import Form from '../Components/Form'
import Search from '../Components/Search'

class InstructorContainer extends React.Component {

    state = {
        instructors: [{ id: 1, name: "Steven", mod: 3 }, { id: 2, name: "Caryn", mod: 1 }, { id: 3, name: "Greg", mod: 2 }, { id: 4, name: "Tashawn", mod: 4 }],
        searchValue: "s"
    }

    searchHandler = (e) => {
        this.setState({ searchValue: e.target.value })
    }

    filteredInstructors = () => {
        return this.state.instructors.filter(inst => inst.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
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
        let instructors = this.filteredInstructors().map(instructorObj => <Instructor key={instructorObj.id} instructor={instructorObj} appClickHandler={this.props.appClickHandler} />)
        return (
            <div>
                <Form submitHandler={this.submitHandler} />
                <br />
                <Search searchValue={this.state.searchValue} searchHandler={this.searchHandler} />
                {instructors}
            </div>
        )
    }

}

export default InstructorContainer