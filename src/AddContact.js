import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

class AddContact extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            age:"",
            email:""
        }
    }
     handleChange = e =>{
         this.setState({
             [e.target.name] : e.target.value
         })
     }

     addContact =()=>{
        axios.post("/add-contact",{...this.state})
        .then(res=>(res.data))
        .catch(err=>console.log(err))
     }
 
    render() { 
        return (
            <div className="add-contact-Container">
               <h1>Add contact</h1>
                <form style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
                     <label> Name : </label>
                     <input name="name" onChange={this.handleChange}/>
                     <label> Age : </label>
                     <input name="age" onChange={this.handleChange}/>
                     <label>email :</label>
                     <input name="email" onChange={this.handleChange}/>
                <Link to="/contacts">
                 <input type="button" value="Add" onClick={this.addContact}/>
                 </Link>
            </form>  
            </div>
        );
    }
}

export default AddContact;