import React, { useRef } from 'react';

const ContactForm = ({ onAddContact }) => {

    const name = useRef('');
    const email = useRef('');

    function addContact(e) {
        e.preventDefault();

        const newContact = { name: name.current.value, email: email.current.value, connected: true };

        onAddContact(newContact);
        name.current.value = '';
        email.current.value = '';
    }

    return (
        <form onSubmit={addContact} className="contact-component">
            <h2>Add contact: </h2>
            <input ref={name} name="name" placeholder="Contact name" className="form-control mb-2" />
            <input ref={email} name="email" type="email" placeholder="Email contact" />
            <button onClick={addContact} type="submit" className="submit-button">
                Add
            </button>
        </form>
    );
};

export default ContactForm;

