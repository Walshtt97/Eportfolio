import React, { Component } from 'react';

const sgMail = require('@sendgrid/mail');
class Contact extends Component{
    constructor(props) {
        super(props);
        this.state ={
            name: '',
            email: '',
            message: ''
        }
        const SENDGRID_API_KEY = "";
        sgMail.setApiKey(SENDGRID_API_KEY);

        this.changeValue = this.changeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeValue = event => {
        this.setState({
            [event.target.name]: event.target.value
        });

    };
     onSubmit = event => {
         event.preventDefault();

        const msg = {
            to: 'myEmail',
            from: this.state.email,
            subject: 'Tim I saw you E-portfolio',
            text: this.state.message,
            html: '<div style="text-align:center;font-size:22px">' +
            '<h2>You have received a new lead!</h2>' +
            '<ul style="text-align: left;font-size:16px">' +
            '<li>First Name: ' + this.state.fName + '</li>' +
            '<li>Last Name: ' + this.state.lName + '</li>' +
            '<li>Mail Address: ' + this.state.email + '</li>' +
            '</ul></div>'
        };
        sgMail.send(msg);
    }

    render() {
        return (
            <div class="pagecontent">
                <h1>Contact Form</h1>
                <h1>This page is not yet working please if you would like to contact me please email walshtt@mail.uc.edu</h1>
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