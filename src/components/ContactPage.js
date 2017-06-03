import React, { Component } from 'react'

import Nav from './Nav'
import ContactForm from './ContactForm'

class ContactPage extends Component {

    render() {
        return(
            <div>
                <Nav />
                <ContactForm />
            </div>
        )
    }
}

export default ContactPage
