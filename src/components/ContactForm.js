/* global emailjs */
import React, { Component } from 'react'
//import gmailApi from '../api/gapi'

import Button from './Button'

class ContactForm extends Component {

    constructor() {
        super()
        this.state = {
            type: null,
            label: "Envoyer"
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        //gmailApi.handleClientLoad()
   }

    handleSubmit(firstname, lastname, email, phone, message) {
        const data = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            message: message
        }
        this.setState({ type: "sending", label: "Envoi en cours" }, this.sendFormData(data))
    }

    sendFormData(data) {
        const that = this
        emailjs.send("gmail", "quentin-dufour", {
            from_name: data.firstname + " " + data.lastname,
            from_email: data.email,
            phone: data.phone,
            message_html: data.message
        }).then(function() {
            that.setState({ type: "send", label: "Message envoyé" })
        }).catch(function(error) {
            that.setState({ type: null, label: "Envoyer" })
        })
        //gmailApi.sendMessage("quentdufour@gmail.com", data, () => { console.log("Message envoyé") })
    }

    render() {
        return (
            <div className="container checkout-form">
                <div className="field-line">
                    <input className="field-input"
                        ref={ (input) => this.firstname = input }
                        placeholder="Prénom"
                        type="text"
                    />
                    <input className="field-input"
                        ref={ (input) => this.lastname = input }
                        placeholder="Nom"
                        type="text"
                    />
                </div>

                <div className="field-line">
                    <input className="field-input"
                        ref={ (input) => this.email = input }
                        placeholder="Email"
                        type="email"
                    />
                </div>

                <div className="field-line">
                    <input className="field-input"
                        ref={ (input) => this.phone = input }
                        placeholder="Téléphone"
                        type="phone"
                    />
                </div>

                <div className="field-line">
                    <textarea className="field-input"
                        ref={ (input) => this.message = input }
                        placeholder="Message"
                    />
                </div>

                <div className="confirm-contact">
                    <Button onClick={ () => this.handleSubmit(
                        this.firstname.value,
                        this.lastname.value,
                        this.email.value,
                        this.phone.value,
                        this.message.value,
                    ) } label={ this.state.label } />
                </div>
            </div>
        )
    }
}

export default ContactForm
