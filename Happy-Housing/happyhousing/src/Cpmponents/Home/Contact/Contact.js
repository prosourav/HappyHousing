import React, { useState } from 'react';
import './Contact.css';
const Contact = () => {
    const [contact, setcontact] = useState({
        email:'',
        subject:'',
        email:''
    })
    const handleChange = (e) =>{
        const newContact = {...contact}
        newContact[e.target.name] = e.target.value;
        setcontact(newContact);
    }
    const handleSubmit = (e) =>{
        const newcontact = {...contact}
        newcontact.time = new Date().toLocaleString();
        const url = 'https://shrouded-caverns-99745.herokuapp.com/contact';
        fetch(url,{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
              },
              body:JSON.stringify(newcontact)
        })
        .then(res=> console.log('server side response : ',res));
         alert('your contact details send successfully'); 
    }



    return (
        <div>
        <section className="contact">
        <div className="container">
            <div className="section-header text-center text-white mb-5">
                 <h1>Always  Connect With Us</h1>
            </div>
            <div className="col-md-6 mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="form-group mt-3">
                        <input type="text" className="form-control" name="email" onChange={handleChange} required placeholder="Email Address *"/>
                    </div>
                    <div className="form-group mt-3">
                        <input type="text" className="form-control" name="subject" onChange={handleChange}  required  placeholder="Subject *"/>
                    </div>
                    <div className="form-group mt-3">
                        <textarea name="messege" className="form-control" id="" cols="30" rows="10"  onChange={handleChange}  required placeholder="Message *"></textarea>
                    </div>
                    <div className="form-group text-center mt-4">
                        <button type='submit' disabled={contact.email.trim()==='' || !contact.subject || !contact.messege} className="btn" style={{backgroundColor:'rgb(110, 95, 187)',width:'100px', color:'white'}}> Submit </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
        </div>
    );
};

export default Contact;
