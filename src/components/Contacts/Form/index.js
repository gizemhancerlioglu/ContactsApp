import { useState, useEffect } from 'react';

import  '../styles.css';

const initialFormValues = { fullName: "", phoneNumber: "" };

function Form({ addContact, contacts }) {
    const [form, setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues);
    }, [contacts])

    const onChangeInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.fullName === '' || form.phoneNumber === '') {
            return false;
        }

        addContact([...contacts, form]);
    }

    return (
        <form onSubmit={onSubmit}>
            <hr/>
            <h3 style={{color:"rebeccapurple"}}>Add Contact</h3>
            <div>
                <input
                    name="fullName"
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={onChangeInput} />
            </div>
            <div>
                <input
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={form.phoneNumber}
                    onChange={onChangeInput} />
            </div>
            <div className="btn">
                <button><strong>ADD</strong></button>
            </div>
            
        </form>
    )
}

export default Form
