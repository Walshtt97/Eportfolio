import React, { Component } from 'react';
import Axios from 'axios';

class Contact extends Component{
    constructor(props) {
        super(props);
        this.state ={
            name: '',
            email: '',
            message: ''
        }
        

        this.changeValue = this.changeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeValue = event => {
        this.setState({
            [event.target.name]: event.target.value
        });

    };
    clearValues(){
        this.setState({name: '', email: '', message: ''});
    }
     onSubmit = event => {
         event.preventDefault();

         
        
         var data = JSON.stringify({
             "name": this.state.name,
             "email": this.state.email,
             "message": this.state.message
         });
         let url = 'api/Email/SendEmail';
         Axios.post(url, data, {
             headers: { 'Content-Type': 'application/json' }
         }).catch(err => {
             console.log(err)
         });
        //console.log(body);
        this.clearValues();
    }

    render() {
        return (
            <div className="pagecontent">
                <h1>Contact Form</h1>
                <form>
                    <label>
                        Name: <br/>
                        <input placeholder="name" type="text" name="name" value={this.state.name} onChange={event => this.changeValue(event)} /><br/>
                    </label>
                    <label>
                        E-Mail: <br/>
                        <input placeholder="email" type="text" name="email" value={this.state.email} onChange={event => this.changeValue(event)}/><br/>
                    </label>
                    <label>
                        Message: <br/>
                        <textarea placeholder="please provide a detailed message" name="message" value={this.state.message} onChange={event => this.changeValue(event)}/><br/>
                    </label>
                    <input type="submit" value="Submit" onClick={(event)=> this.onSubmit(event)} />
                </form>
            </div>
        );
    };
}

export default Contact;