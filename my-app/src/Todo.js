import React, { Component } from 'react'

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            course: '',
            courses: []
        }
    }
    readCourse =(e)=>{
        this.setState({course: e.target.value})
        console.log(e.target.value)

    }
    addCourse =()=>{
        this.setState((preState)=>({
            courses:[...preState.courses, preState.course],
            course: ''
        }))
        console.log(this.state.courses);
    }
    deleteCourse =(index)=>{
        this.setState(
          (preState)=>({
            courses: preState.courses.filter((c,i)=> i!==index)
        }))
    }
    editCourse=(index)=>{
      const newValue = prompt('Enter new Course: ', this.state.courses[index]);
      if(newValue){
        this.setState((preState)=>{
          const updated= [...preState.courses];
          updated[index]=newValue;
          return {courses: updated};
        })
      }
    }
  render() {
    return (
      <div>
        <label>Course: </label>
        <input type ="text" name="course" value={this.state.course} onChange={this.readCourse}/>
        <button onClick={this.addCourse}>Add</button>
        <ol>
            {this.state.courses.map((c,index)=>
             <li key={index}>{c}<button onClick={()=>{this.deleteCourse(index)}}> Delete </button><button onClick={()=>{this.editCourse(index)}}> Edit </button></li>)}
        </ol>
      </div>
    )
  }
}

export default Todo;
