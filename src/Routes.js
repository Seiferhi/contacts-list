import React from 'react'
import {Route} from 'react-router-dom'
import ModifyContact from './ModifyContact'
import Addcontact from './AddContact'
import ContactList from './ContactList'
import Home from './Home'

const Routes = () =>{
    return(
       <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/contacts" component={ContactList} />
        <Route exact path="/addContact" component={Addcontact} />
        {/*use render dans la cas que jai des variabla a passe render={(props)=><Modifycontact props={props}/>}*/ }
        <Route exact path="/modifycontact/:id" render={(props)=><ModifyContact props={props.match.params.id}/>} />
        </div>
    )
}

export default Routes