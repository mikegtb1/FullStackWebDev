import { useState, useEffect } from 'react';
import './List.css';

const initialContacts = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
    },
    {
        id: 2,
        firstName: 'Erica',
        lastName: 'Doe',
        email: 'ericadoe@example.com',
    }
];

const contacts1 = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
    },
    {
        id: 2,
        firstName: 'Erica',
        lastName: 'Doe',
        email: 'ericadoe@example.com',
    },
    {
        id: 3,
        firstName: 'Eri',
        lastName: 'Donny',
        email: 'ericadoe@example.com',
    },
    {
        id: 4,
        firstName: 'Tom2',
        lastName: 'Hardy',
        email: 'ericadoe@example.com',
    }
];
function List() {
    const [contacts, setContacts] = useState([]); 
/*  useEffect(() => {
        fetch('http://localhost:8001/api/contacts')
            .then((response) => response.json())
            .then((data) => setContacts(data));
    }, []); */
    useEffect(() =>  setContacts(contacts1));

    return (
        <>
            <h2 style={{ textDecoration: 'underline' }}>Contact list</h2>
            <table className='contactTable'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>{contact.id}</td>
                            <td>{contact.firstName}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
export default List;