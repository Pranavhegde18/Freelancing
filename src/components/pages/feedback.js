import React from 'react';
//import { Link } from 'react-router-dom';
import axios from "axios"
import Navbar1 from '../Navbar1'
import './feedback.css'
//import { useHistory } from "react-router-dom"

class Feedback extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = { 
            name1:"",
            email1:"",
            mobile:"",
            feedback:"",
        }
        this.handeltxt1=this.handeltxt1.bind(this);
        this.handeltxt2=this.handeltxt2.bind(this);
        this.handeltxt3=this.handeltxt3.bind(this);
        this.handeltxt4=this.handeltxt4.bind(this);
    }    
    handeltxt1=(e)=>{
        this.setState({name1:e.target.value})
    }
    handeltxt2=(e)=>{
        this.setState({email1:e.target.value})
    }
    handeltxt3=(e)=>{
        this.setState({mobile:e.target.value})
    }
    handeltxt4=(e)=>{
        this.setState({feedback:e.target.value})
    }

    render(){
        var obj={name1:this.state.name1,email1:this.state.email1,mobile:this.state.mobile,feedback:this.state.feedback}
        const submitt = () => {
                const {name1,email1,mobile,feedback} = obj
                axios.post("http://localhost:3001/feedback",obj)
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
                     <h1>Feedback</h1>
                     <h2>Let us stay Updated on your Valuable Feedback</h2>
                 </div>
                 <div class="your-input">
                     <div class="input">
                        <input type='text' name="name1"id='1' placeholder='Enter your Name..' value={this.state.name1} onChange={this.handeltxt1}/>
                        <br/>
                     </div>
                     <div class="input">
                         <input type='text' name="email1" id='2' placeholder='Enter your E-mail..' value={this.state.email1} onChange={this.handeltxt2}/>
                         <br/>
                     </div>
                    
                     <div class="input">
                         <input type='text' name="mobile" id='3' placeholder='Enter your Mobile Number..' value={this.state.mobile} onChange={this.handeltxt3}/>
                         <br/>
                     </div>
                       <div class="input">
                           <input type='text' name="feedback" id='5' placeholder='Enter your comment here..' value={this.state.feedback} onChange={this.handeltxt4}/>
                         <br/><br/>
                     </div>
        
                   {/* <textarea rows="10" cols="152" id="feedback" name="feedback" placeholder="Feedback" ></textarea> */}
        
                 </div>
                
                 <input className="button" type="button" value="Submit" onClick={submitt}/>
             </div>
           </>
        )
    }
}

export default Feedback