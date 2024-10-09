import { useState } from 'react';
import ListItem from './ListItem';

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


var contacts2 = [
    {
        id: 1,
        firstName: 'John222',
        lastName: 'Doe',
        email: 'johndoe@example.com',
    },
    {
        id: 2,
        firstName: 'Erica222',
        lastName: 'Doe',
        email: 'ericadoe@example.com',
    },
    {
        id: 3,
        firstName: 'Jack222',
        lastName: 'Dommic',
        email: 'jackdommic@example.com',
    },
];

var contacts3 = [];

function List() {

    const [contacts, setContacts] = useState(initialContacts);

    function handleDelete(contact) {

        console.log('before delete');
        console.log(contacts);


        setContacts((prevState) =>
            prevState.filter((prevContact) => prevContact.id !== contact.id),);

//        contacts.splice(contact.id - 1, 1);

        console.log('after delete');
        console.log(contacts);


    }

    return (
        <table>
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
    );
}
export default List;