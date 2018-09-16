const express = require('express')
const {MongoClient, ObjectID} = require('mongodb')
const assert = require('assert')
const bodyParser = require ('body-parser')

const app = express()
app.use(bodyParser.json())

const MongoUrl="mongodb://localhost:27017"
const database = 'fscontact'

 
MongoClient.connect(MongoUrl,{ useNewUrlParser: true },(err,client)=>{
        assert.equal(err, null, 'connection to database failed')
        const db = client.db(database)
 
  //add new contact
  app.post("/add-contact", (req, res)=>{
      let contact = req.body
      db.collection('contacts').insertOne(contact,(err,data)=>{
            if (err) res.send('add contact failed')
           else res.send(data)
      });
    });

   //get all contacts
   app.get('/contacts', (req,res)=>{
    db.collection('contacts').find().toArray((err,data)=>{
        if (err) res.send('getting contacts failed')
         else res.send(data)
});
   });

   //Get one contact
   app.get('/contact/:id', (req,res)=>{
    let id=ObjectID(req.params.id)
    db.collection('contacts').findOne({_id:id},(err, data)=>{
     if (err) res.send('getting this contact failed')
     else res.send(data)
    })
})

   //delete Contact
   app.delete('/delete-contact/:id', (req,res)=>{
       let id=ObjectID(req.params.id)
       db.collection('contacts').findOneAndDelete({_id:id},(err, data)=>{
        if (err) res.send('deleting contacts failed')
        else res.send(data)
       })
   })
  
   //Updating new contact 
   app.put('/modify-contact/:id',(req,res)=>{
       let id=ObjectID(req.params.id)
       let reqUpdate = req.body
       db.collection('contacts').findOneAndUpdate({_id:id},{$set:{...reqUpdate}},(err,data)=>{
           assert.equal(err,null,'Updating contact failed')
           res.send(data)
       })
   })


  })


app.listen(5001, (err)=>{
    assert.equal(err, null,'connection to server failed')
    console.log('server running at _PORT 5001')
})
