import React, {Component} from 'react';
import PanelCourses from "./campus_courses";
/* import axios from "axios"; */


export default class CampusContainer extends Component {
  constructor(){
    super()
    this.state={
      pagetitle: 'Welcome to Durango Campus',
      data:[
        {title: 'Matematicas'},
        {title: 'Ingles comercial'},
        {title: 'Igualdad'},
        {title: 'Dibujo tecnico'},
      ]
    };
  }

campusCourses(){

  return this.state.data.map(item=>{
    return <PanelCourses title={item.title} url={'www.google.com'}/>;
  })
}

  render() {
    return (
    <div>
      {this.campusCourses()}
      <h2>{this.state.pagetitle}</h2>
    </div>
    
    );  
  }
  
}

