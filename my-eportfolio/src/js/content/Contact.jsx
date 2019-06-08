import React, { Component } from 'react';

class Contact extends Component{
    render() {
        return (
            <div class="pagecontent">
                <h1>Contact Form</h1>
                <form>
                    <label>
                        Name: <br/>
                        <input type="text" name="name" /><br/>
                    </label>
                    <label>
                        E-Mail: <br/>
                        <input type="text" name="email" /><br/>
                    </label>
                    <label>
                        Company/Organization: <br/>
                        <input type="text" name="Company" /><br/>
                    </label>
                    <label>
                        Message: <br/>
                        <textarea/><br/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    };
}

export default Contact;