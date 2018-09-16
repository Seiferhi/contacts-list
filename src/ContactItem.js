import React from 'react';
import {Link,Redirect} from 'react-router-dom'
import axios from 'axios'

    function deleteContact(i){
          axios.delete(`/delete-contact/${i}`)
          .then(res=>res.data)
          .catch(err=>console.log(err))
        // alert(i)
        }

const ContactItem = (props) => {
 
    const item=props.item
    console.log(item)
    return (
        <div className="cont-item-Contain">
           <h1> Contact Name : {item.name} </h1>
           <h2> Contact age : {item.age} </h2>
           <h3> Contact email : {item.email} </h3>

           <Link to={`/modifycontact/${item._id}`}>
           <input type="button" value="Modify"/>
           </Link>
           <Link to='/'>
           <input type="button" value="Delete" onClick={()=>deleteContact(item._id)}/>
            </Link>
        </div>
    );
};

export default ContactItem;