import React from 'react';
import Header from './Components/Header'
import './App.css';
import InstructorContainer from './Containers/InstructorContainer'
import AnimeContainer from './Containers/AnimeContainer';

class App extends React.Component {

  state={instructor: {}}

  appClickHandler = (instructor_obj) => {  
    console.log("%c In app!", 'color: red', instructor_obj)
    this.setState({ instructor: instructor_obj })
  }

  render() {
    return (
      <div>
        <Header />
        <InstructorContainer appClickHandler={this.appClickHandler} />
        <AnimeContainer instructor={this.state.instructor} />
      </div>
    )
  }
}

export default App;