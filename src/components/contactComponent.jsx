import React from 'react';

const ContactComponent = ({ contact, changeState, remove }) => {
    return (
        <div className="contact-component">
        <h2>{contact.name}</h2>
        <span>{contact.email}</span>

        <button
            style={{ backgroundColor: contact.state ? 'green' : 'red' }}
            className="state-button"
            onClick={() => {
                changeState(contact);
        }}
        >
        {contact.state ? 'Connected' : 'Offline'}
        </button>

        <button className="remove-button" onClick={() => remove(contact)}>
            Borrar
        </button>
        </div>
    );
};

export default ContactComponent;
