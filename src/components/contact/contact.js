import React, { Component } from 'react';
import './contact.css';
import axios from 'axios';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
        
            emailName: '',
            emailAddress: '',
            emailMessage: '',
            submitAlert:false
        
        }

    }

  handleChange(event){
    var targetName = event.target.name;
    var value = event.target.value;

    if(targetName === "contactName"){
      this.setState({emailName: value})
    }
    else if(targetName === "contactAddress"){
      this.setState({emailAddress: value})
    }
    else if(targetName === "contactMessage"){
      this.setState({emailMessage: value})
    }
  }

  submitContact(event){
    var ename = this.state.emailName;
    var eaddress = this.state.emailAddress;
    var emessage = this.state.emailMessage;
    event.preventDefault();

    if(ename !== null && eaddress !== null && emessage != null){
      axios.post('/email',{
        name: ename,
        address: eaddress,
        message: emessage
      })
      .then((response)=>{
        this.setState({
          emailName: '',
          emailAddress: '',
          emailMessage: ''
        });
      })
      .catch((error) => console.log(error.message));
    } else{
      this.setState({submitAlert:true});
    }
  }

    render(){
        return(
            <section id="contact">
              <a className="back-button back-button-left top right">Back {/*<span><img src="" alt="r-arr"/></span>*/}</a>

              <div className="contact-container">
                <div className="form-container">
                  <form className="contact-form" onSubmit={this.submitContact.bind(this)}>
                      <div className="form-top-row">
                        <div className="form-half-container">
                            <label>Name:</label>
                            <input className="email-name" type="text" name="contactName" placeholder="Name" onChange={this.handleChange.bind(this)}></input>
                        </div>

                        <div className="form-half-container">
                            <label className="label-email">Email:</label><br />
                            <input className="email-address" type="text" name="contactAddress" placeholder="Email" onChange={this.handleChange.bind(this)}></input>
                        </div>
                      </div>

                      <div className="form-bottom-row">
                        <label>Message:</label><br/>
                        <textarea className="email-message" type="text" name="contactMessage" placeholder="Message" onChange={this.handleChange.bind(this)}></textarea><br/>
                        <input className="email-submit" type="submit" value="Submit"/>
                      </div>
                  </form>
                </div>

                <div className="contact-info-container">
                  <div className="">
                      <a className="contact-email-link" href="mailto:jhen103093@gmail.com">jhen103093@gmail.com</a>
                  </div>
                </div>
              </div>
            </section>
        );
    }
}

export default Contact;