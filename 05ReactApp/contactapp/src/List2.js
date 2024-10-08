import { useState, useEffect } from 'react';
import './List.css';
import ListItem from './ListItem';

const contacts = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
    },
    {
        id: 2,
        firstName: 'Erica2',
        lastName: 'Doe',
        email: 'ericadoe@example.com',
    },
    {
        id: 3,
        firstName: 'Eri',
        lastName: 'Donny',
        email: 'ericadoe@example.com',
    }
];

const contacts2 = [
    {
        id: 1,
        firstName: 'John33',
        lastName: 'Doe',
        email: 'johndoe@example.com',
    },
    {
        id: 2,
        firstName: 'Erica33',
        lastName: 'Doe',
        email: 'ericadoe@example.com',
    },
    {
        id: 3,
        firstName: 'Eri33',
        lastName: 'Donny',
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
 //       const contacts2 = contacts1.pop();

    useEffect(() => setContacts(contacts2));
//    contacts1.splice(2,1);
//    useEffect(() => setContacts(contacts2));

    function handleDelete(contact) {
        contacts2.splice(2,1);
        console.log(contacts2);
        return contacts2;
    }

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
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <ListItem key={contact.id} contact={contact} onDelete={handleDelete} />
                    ))}
                </tbody>
            </table>
        </>
    );
}
export default List;