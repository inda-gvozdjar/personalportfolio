import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {

   constructor(props) {
      super(props);
      this.state = {
         name: '',
         email: "",
         message: ""
      };

   }



   handleFormSubmit(e) {
      e.preventDefault();

      fetch('http://localhost:3002/send', {
         method: "POST",
         body: JSON.stringify(this.state),
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
      }).then(
         (response) => (response.json())
      ).then((response) => {
         if (response.status === 'success') {
            alert("Message Sent.");
            this.resetForm()
         } else if (response.status === 'fail') {
            alert("Message failed to send.")
         }
      })
   }
   resetForm() {
      this.setState({ name: "", email: "", message: "" })
   }
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var message = this.props.data.contactmessage;
      }

      return (
         <section id="contact">

            <div className="row section-head">

               <div className="two columns header-col">

                  <h1><span>Get In Touch.</span></h1>

               </div>

               <div className="ten columns">

                  <p className="lead">{message}</p>

               </div>

            </div>

            <div className="row">
               <div className="eight columns">

                  <form method="post" id="contact-form" name="contact-form" onSubmit={this.handleFormSubmit.bind(this)}>
                     <fieldset>

                        <div>
                           <label htmlFor="contactName">Name <span className="required">*</span></label>
                           <input type="text" name="name" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                        </div>

                        <div>
                           <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                           <input type="text" name="email" id="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                        </div>



                        <div>
                           <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                           <textarea cols="50" rows="15" name="message" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} ></textarea>
                        </div>

                        <div>
                           <button type="submit" className="submit">Submit</button>
                           <span id="image-loader">
                              <img alt="" src="images/loader.gif" />
                           </span>
                        </div>
                     </fieldset>
                  </form>

                  <div id="message-warning"> Error</div>
                  <div id="message-success">
                  </div>
               </div>


               <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">

                     <h4>Address and Phone</h4>
                     <p className="address">
                        {name}<br />
                        {street} <br />
                        {city}, {state} {zip}<br />
                        <span>{phone}</span>
                     </p>
                  </div>


               </aside>
            </div>
         </section>
      );
   }
   onNameChange(event) {
      this.setState({ name: event.target.value })
   }

   onEmailChange(event) {
      this.setState({ email: event.target.value })
   }

   onMessageChange(event) {
      this.setState({ message: event.target.value })
   }
}

export default Contact;
