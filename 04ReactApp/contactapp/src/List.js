import { useState } from 'react';
import ListItem from './ListItem';
import Form from './Form';
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
    },
    {
        id: 3,
        firstName: 'Jack',
        lastName: 'Dommic',
        email: 'jackdommic@example.com',
    },
];

function List() {

    const [contacts, setContacts] = useState(initialContacts);

    async function handleDelete(contact) {

        setContacts((prevState) =>
            prevState.filter((prevContact) => prevContact.id !== contact.id),);
    }

    async function handleSave(contact) {
            var contacts2 = contacts;
            const id = contacts2[contacts2.length - 1].id + 1;
            setContacts((prevContacts) => [...prevContacts, { ...contact, id }]);
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
                    <ListItem
                    key={contact.id}
                    contact={contact}
                    onDelete={handleDelete}
                    />
                ))}
            </tbody>
        </table>
        <Form onSave={handleSave} />
        </>
    );
}
export default List;