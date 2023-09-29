import React, {Component} from 'react';
import {Button} from 'reactstrap';
import AddCourseModal from '../modals/new-course-modal';

export default class Courses extends Component {
    constructor(){
      super();
      this.state = {
            isModalOpen: false,
            isLoading: true,
            courses: [],
            error: null
        };

        this.handleNewCourseClick=this.handleNewCourseClick.bind(this);
        this.handleModalClose=this.handleModalClose.bind(this);
    }

    handleNewCourseClick(){
        this.setState({isModalOpen: true})
    }

    handleModalClose(){
        this.setState({isModalOpen: false})
    }
    
        getFetchCourses() {
            this.setState({
                loading: true
            }, () => {
                fetch("http://localhost:3000/courses").then(res => res.json()).then(result => this.setState({
                    loading: false,
                    courses: result
                })).catch(console.log);
            });
        }
        componentDidMount() {
            this.getFetchCourses();
        };

        render() {
          const {
              courses,
              error
          } = this.state;
          return (
            
            <React.Fragment>
                <AddCourseModal 
                handleModalClose={this.handleModalClose}
                modalIsOpen={this.state.isModalOpen}/>
            <div className='listing-courses'> 
            <h1>All Courses</h1>
            <Button className="btn" onClick= {this.handleNewCourseClick}>
            Add New Course
            </Button>
            {error ? <p>{error.message}</p> : null}
            <table className='courses-table'>
               <thead>
                <tr>
                    <th>Course</th>
                    <th>Hours</th>
                    <th>Description</th>
                    <th>Delete</th>
                </tr>
                </thead> 
            </table>
            
            {courses.map(course => {
                          const {
                              info,
                              name,
                              hours
                          } = course;
                          return (
                            <table className='courses-table'>

                            <tbody>
                            <tr  key={name}>
                              <td>{name}</td>
                              <td>{hours}</td>
                              <td>{info}</td>
                              <td className="operation">
                                <Button className="btn-remove" onClick={() => removeData(id)}>
                                    Delete
                                </Button>
                                </td>
                            </tr>
                            </tbody>
                          
                          </table>
                          );
                     })
            
            }
            </div> 
            </React.Fragment> );
           }

    };