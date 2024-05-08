import { imageConfigDefault } from 'next/dist/shared/lib/image-config';

//contact interface to determine types that will be in the contact

interface Contact {
	id: number;
	name: string;
	image_url: string;
	email: string;
	phone_number: number;
}

//contactAPi interface that determines what each part of the api is getting and returning
interface ContactApi {
	contacts: Contact[];
	all: () => Contact[];
	addContact: (contact: Contact) => void;
	get: (id: number) => Contact | undefined;
	delete: (id: number) => void;
	edit: (
		id: number,
		name: string,
		image_url: string,
		email: string,
		phone_number: number
	) => void;
}

export let ContactApi: ContactApi = {
	//list of make shift contacts and where the contact info will be pushed
	contacts: [
		{
			id: 70219577,
			name: 'Albert Einstein',
			image_url:
				'https://images.squarespace-cdn.com/content/v1/62ec2bc76a27db7b37a2b32f/625c7248-8056-4505-a1da-a1058c830d92/albert-einstein-with-blue-hair-large.jpg',
			email: 'aeinstein@example.com',
			phone_number: 333333,
		},
		{
			id: 12345678,
			name: 'Snoopy',
			image_url:
				'https://upload.wikimedia.org/wikipedia/en/5/53/Snoopy_Peanuts.png',
			email: 'snoopy@example.com',
			phone_number: 222222,
		},
	],
	//function to get all contacts
	all: function (): Contact[] {
		return this.contacts;
	},
	//function to add contacts
	addContact: function (contact: Contact): void {
		this.contacts.push(contact);
	},
	//function to get a specific contact
	get: function (id: number): Contact | undefined {
		return this.contacts.find((contact) => contact.id === id);
	},
	//function to delete a contact
	delete: function (id: number) {
		this.contacts.splice(
			this.contacts.findIndex((a) => a.id === id),
			1
		);
	},
	//function to edit an existing contact
	edit: function (
		id: number,
		name: string,
		image_url: string,
		email: string,
		phone_number: number
	): void {
		const isContact = (contact: Contact) => contact.id === +id;
		const contact = this.contacts.find(isContact);
		if (!contact) {
			return;
		}

		contact.name = name;
		contact.image_url = image_url;
		contact.email = email;
		contact.phone_number = phone_number;
	},
};
