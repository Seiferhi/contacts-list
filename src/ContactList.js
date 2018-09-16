import React, { Component } from 'react';
import ContactItem from './ContactItem'
import {Link} from 'react-router-dom'

import axios from 'axios'

class ContactList extends Component {
    constructor(props){
        super(props)
        this.state={
            contacts:[]
        }
    }

    componentDidMount(){
        axios.get('/contacts')
        .then(res=>{
            this.setState({
                contacts:res.data
            })
            })
        .catch(err=>console.log(err))
    }

    render() {
        return (
            <div className="list-cont">
              {this.state.contacts.map((elm,i)=>{
                  return <ContactItem key={i} item={elm}/>
              })} 
              <Link to="/">
                 <span>Home</span>
                 </Link> 
            </div>
        );
    }
}

export default ContactList;