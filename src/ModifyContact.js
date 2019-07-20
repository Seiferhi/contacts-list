import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class ModifyContact extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            age:"",
            email:""
        }
    }

    componentDidMount(){
        axios.get(`/contact/${this.props.match.params.id}`)
        .then(res=>{
           this.setState({
            name:res.data.name,
            age: res.data.age,
            email:res.data.email
           })

            })
        .catch(err=>console.log(err))
    }
    contactUpdate =()=>{
        axios.put(`/modify-contact/${this.props.match.params.idonChan}`,{
            name:this.state.name,
            age:this.state.age,
            email:this.state.email
        })
        .then(res=>res.data)
        .catch(err=>console.log(err))
    }

    render() {
        console.log(this.props.match.params.id)
        return (
            <div className="add-contact-Container">
               <h1>Modify contact</h1>
                <form style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
                     <label> Name : </label>
                     <input name="name" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
                     <label> Age : </label>
                     <input name="age" value={this.state.age} onChange={(e)=>this.setState({age:e.target.value})}/>
                     <label>email :</label>
                     <input name="email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>
                    <Link to="/contacts">
                    <input type="button" value="Modify" onClick={this.contactUpdate}/>
                    </Link>
            </form>  
            </div>
        );
    }
}

export default ModifyContact;