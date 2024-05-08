import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { ContactApi } from './contact-API';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

//interface for contact showing what each parameter should be
interface Contact {
	id: number;
	name: string;
	image_url: string;
	email: string;
	phone_number: number;
}
//what the prop allContacts should be
interface DisplayContactsProps {
	allContacts: Contact[];
}
//function to display all contacts
const DisplayContacts: React.FC<DisplayContactsProps> = ({
	allContacts,
}): JSX.Element => {
	//useState to keep track of the contacts and update them when necessary
	const [contacts, setContacts] = useState<Contact[]>(allContacts);
	const router = useRouter();
	//function for the edit button the redirects the user to the edit page
	const handleEdit = (id: number) => {
		router.push(`/contacts/edit/${id}`);
	};
	//function for the delete button that calls the ContactApi.delete and updates the useState
	const handleDelete = (id: number) => {
		ContactApi.delete(id);
		setContacts(contacts.filter((contact) => contact.id !== id));
	};
	//html that displays the list of contacts in table format
	return (
		<table className='table'>
			<thead className='table-primary'>
				<tr>
					<th scope='col'>Profile Pic</th>
					<th scope='col'>Name</th>
					<th scope='col'>Email</th>
					<th scope='col'>Phone</th>
					<th scope='col'></th>
					<th scope='col'></th>
				</tr>
			</thead>
			<tbody className='table'>
				{contacts.map((contact) => (
					<tr key={contact.id}>
						<td className='col'>
							<img
								style={{
									height: 120,
									width: 120,
									borderRadius: '50%',
								}}
								src={contact.image_url}
							></img>
						</td>
						<td className='col'>
							<Link id='blue' href={`/contacts/${contact.id}`}>
								{contact.name}
							</Link>
						</td>
						<td className='col'>{contact.email}</td>
						<td className='col'>{contact.phone_number}</td>
						<td className='col text-primary'>
							<button
								className='btn btn-primary'
								onClick={() => handleEdit(contact.id)}
							>
								Edit
							</button>
						</td>
						<td className='col'>
							<button
								className='btn btn-danger'
								onClick={() => handleDelete(contact.id)}
							>
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default DisplayContacts;
