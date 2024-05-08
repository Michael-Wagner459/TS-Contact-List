'use client';
import { useState } from 'react';
import { ContactApi } from '../components/contact-API';
import Link from 'next/link';
import DisplayContacts from '../components/displayContact';

interface Contact {
	id: number;
	name: string;
	image_url: string;
	email: string;
	phone_number: number;
}

export default function Contacts(): JSX.Element {
	//displays all contacts
	const [allContacts, _] = useState<Contact[]>(ContactApi.all());

	//html for the Main page and a list of the contacts in table format from the DisplayContacts component.
	return (
		<div className='text-center'>
			<br />
			<br />
			<h1>All Contacts</h1>
			<Link href='/contacts/new'>
				<button type='button' className='btn btn-primary'>
					New Contact
				</button>
			</Link>
			<br />
			<br />
			<DisplayContacts allContacts={allContacts} />
		</div>
	);
}
