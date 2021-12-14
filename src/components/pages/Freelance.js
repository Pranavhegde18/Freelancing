import React from 'react';
import '../../App.css';
import Navbar1 from '../Navbar1';
import axios from 'axios';
import './feedback.css'

class Freelance extends React.Component{
  constructor(props) {
      super(props)
  
      this.state = { 
          title:"",
          name2:"",
          mobile:"",
          jobd:"",
          salary:""
      }
  }    
  handletxt1=(e)=>{
      this.setState({title:e.target.value})
  }
  handletxt2=(e)=>{
      this.setState({name2:e.target.value})
  }
  handletxt3=(e)=>{
      this.setState({mobile:e.target.value})
  }
  handletxt4=(e)=>{
      this.setState({jobd:e.target.value})
  }
  handletxt5=(e)=>{
    this.setState({salary:e.target.value})
  }



  render(){
      var obj={title:this.state.title,name2:this.state.name2,mobile:this.state.mobile,jobd:this.state.jobd,salary:this.state.salary}
      const submitt = () => {
              const {title,name2,mobile,jobd,salary} = obj
              axios.post("http://localhost:3001/freelance",obj)
              .then( res => {
                  alert(res.data.message)
              })
              window.location.reload()
          }

      return(
           <>
             <Navbar1/>
             <div class="container">
               <span className="logo">
               <h1 class='fab fa-typo3'><i><b>FR33LANCER</b></i></h1>
               </span>
               <div class="text">
                   <h1>Post a Project</h1>
                   <h2>Stay Updated on your Projects for Freelancing</h2>
               </div>
               <div class="your-input">
                   <div class="input">
                      <input type='text' name="title"id='1' placeholder='Enter your Title..' value={this.state.title} onChange={this.handletxt1}/>
                      <br/>
                   </div>
                   <div class="input">
                       <input type='text' name="name2" id='2' placeholder='Enter the Name..' value={this.state.name2} onChange={this.handletxt2}/>
                       <br/>
                   </div>
                  
                   <div class="input">
                       <input type='text' name="mobile" id='3' placeholder='Enter your Mobile Number..' value={this.state.mobile} onChange={this.handletxt3}/>
                       <br/>
                   </div>
                   <div class="input">
                         <input type='text' name="jobd" id='5' placeholder='Enter the Description here..' value={this.state.jobd} onChange={this.handletxt4}/>
                       <br/><br/>
                   </div>
                   <div class="input">
                         <input type='text' name="salary" id='5' placeholder='Enter the Salary here..' value={this.state.salary} onChange={this.handletxt5}/>
                       <br/><br/>
                   </div>
      
                 {/* <textarea rows="10" cols="152" id="jobd" name="jobd" placeholder="Feedback" ></textarea> */}
      
               </div>
              
               <input className="button" type="button" value="Submit" onClick={submitt}/>
           </div>
         </>
      )
  }
}

export default Freelance