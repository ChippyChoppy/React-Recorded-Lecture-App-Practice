import React from 'react'
import Bline from './Bline'

// when a component needs to be refactored to keep track of it's own state that's usually the moment when that component now needs to be a class-based component (there are exceptions, but that's for later). 

// If a component has to maintain state then it must be a class based component.

class Header extends React.Component {
    // like initialize in ruby, constructor will run first every time an instance of this class is being created.

// constructor is a more archaic way to create "state", (ES4, ES5, because you'll still see a lot in the wild. Then we'll refactor it up to a more current version (ES6))
    // constructor(props){
    //     super(props)
    //     this.state = { color: "pink" }
    //     // the purpose of state is for us to manage information inside this component that is not coming from it's parent. We want the header component to have full control over these parts of itself. No need to communicate up to the parents.
    //     //any code that you need to make sure runs before you component is rendered you put that code inside your constructor.
    //     console.log("Console log in Constructor")
    // }

// another way to create state, create a variable (this is specific to React ES6), setting state == to an empty object. 
    state = {color: "black"}

    instructors = () => {
        return this.props.instructors.map(function (instructor_name) { return <Bline name={instructor_name} /> })
    }
       
        // event handlers in React need to take a callback function. Primary way to effect state in react is to use an event handler. It's changing in response to something that my user did, or something that my app did. (ex. Make a fetch request, change color when fetch resolved.)
    clickHandler = () => {
        console.log("Been clicked!", this.state)
         // this.state.color = "blue" 
            // ^^^ this doesn't automatically change the render, just the color in state in the console.log. We need to tell the site to re-render

            // if/else is the brute force method to toggle
        if (this.state.color == "black"){
            this.setState({ color: "blue" })
        }else{
            this.setState({ color: "black" })
        }
            
         // old state: {color: "black" }
        
            // ^^^ this not only creates the new object, it calls on the render method again. When we click we change to blue, but we do not have an option to change it back. Don't just add another onClick, don't add 2 event listeners to the same tag!
        
        console.log("After state change in clicked!", this.state) 
    }
    
    render() {
        console.log("State in Render", this.state)
        // let instructors = this.props.instructors.map(function (instructor_name) { return <Bline name={instructor_name} /> })
        let color = this.state.color // without declaring this we can instead just tell it to look for this.state.color in the curlies.
        return (
            <div>
                    
                <h1 onClick={this.clickHandler} style={{"border-style": "dashed", "border-color": `${color}`}}>Welcome to Our App!</h1>
                {this.instructors()}
            </div>
        )
    }
}
// if we invoke our clickHandler callback it runs the function immediately, as soon as the onClick event is created. Since we don't want the function to be invoked until we click we just pass a reference (no parens()). this.instructors() we want invoked upon loading, which is why we invoke it (using the parens()).
export default Header