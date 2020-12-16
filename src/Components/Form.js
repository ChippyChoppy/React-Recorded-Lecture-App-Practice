import React from 'react'

class Form extends React.Component {

    state = {
        name: "",
        mod: ""
    }

    changeHandler = (e) => {
        console.log("event", e.target.value)

        this.setState({ [e.target.name]: e.target.value })
        // if (e.target.name === "name") {
        //     this.setState({ name: e.target.value })
        // } else {
        //     this.setState({ mod: e.target.value })
        // }

    }

    render() {
        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                this.props.submitHandler({ name: e.target[0].value })
                this.setState({name: "", mod: ""})
            }}>

                <input type="text" name="name" placeholder="enter instructor name" value={this.state.name} onChange={this.changeHandler} />
                <input type="number" name="mod" placeholder="enter mod number" value={this.state.mod} onChange={this.changeHandler} />

                <input type="submit" value="create instructor" />
            </form>
        )
    }

}

//uncontrolled component - single source of input is the DOM, lazy/dirty way of creating a form. Form doesn't know what you're typing while you're typing it.
// want to use controlled components for 99% b/c we want to keep ssot inside of our application. It is also a much more powerful way of creating forms inside react.

export default Form