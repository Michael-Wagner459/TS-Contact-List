'use client';

import React from 'react';
import { ContactApi } from '../../../components/contact-API';

import { useParams } from 'next/navigation';

import EditForm from './editForm';

//interface for contact showing what each parameter should be
interface Contact {
	id: number;
	name: string;
	email: string;
	image_url: string;
	phone_number: number;
}

//function that is a failsafe in case the user manually enters an id into the URL that doesnt exist
export default function Edit(): JSX.Element {
	const params = useParams<{ id: string }>();
	const id = Number(params.id);
	const contact: Contact | undefined = ContactApi.get(id);

	if (contact == undefined) {
		return <h1>This Contact Does Not exist</h1>;
	} else {
		return <EditForm contact={contact} />;
	}
}
