'use client';

import React from 'react';
import { ContactApi } from '../../components/contact-API';
import { useParams } from 'next/navigation';
import Link from 'next/link';

//interface for contact showing what each parameter should be
interface Contact {
	id: number;
	name: string;
	image_url: string;
	email: string;
	phone_number: number;
}

export default function Contact(): JSX.Element {
	const params = useParams<{ id: string }>();
	//changes the useParams id to a number so it can be used in the Contactapi.get function
	const id = Number(params.id);
	const contact: Contact | undefined = ContactApi.get(id);
	//if statement in case the contact isnt found
	if (!contact) {
		return <div> Sorry, but the Contact was not found</div>;
	}
	//html for individual contact information
	return (
		<main>
			<div className='col-6 offset-3 text-center'>
				<h1 className='fw-bold'>Contact Info</h1>
				<br />
				<Link href='/contacts'>Back</Link>
				<br />
				<h1>{contact.name}</h1>
				<br />
				<img className='img-fluid ' src={contact.image_url} />
				<br />
				<br />
				<h5>{contact.email}</h5>
				<br />
				<h5>{contact.phone_number}</h5>
			</div>
		</main>
	);
}
