import { useState, useEffect } from 'react';

import './styles.css'

import Form from './Form';
import List from './List';

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullName: "Gizem",
            phoneNumber: "123123"
        }, {
            fullName: "Ahmet",
            phoneNumber: "456456"
        }, {
            fullName: "Yasemin",
            phoneNumber: "789789"
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);

    return (
        <div id="container">
            <p style={{ fontSize: "40px", textAlign: "center", color: "gray" }}><b>_______</b></p>
            <div id="screen">
                <h1 style={{ color: "rebeccapurple" }}>Contacts</h1>
                <List contacts={contacts} />
                <Form addContact={setContacts} contacts={contacts} />
            </div>
            <center><div className="tus"></div></center>
        </div>
    )
}

export default Contacts;
