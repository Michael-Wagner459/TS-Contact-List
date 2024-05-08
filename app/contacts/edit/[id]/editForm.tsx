'use client';
import React, { useState } from 'react';
import { ContactApi } from '../../../components/contact-API';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

//interface for contact showing what each parameter should be
interface Contact {
	id: number;
	name: string;
	email: string;
	image_url: string;
	phone_number: number;
}

export default function EditForm({ contact }: { contact: Contact }) {
	//useState to keep track of each parameter
	const [name, setName] = useState<string>(contact.name);
	const [email, setEmail] = useState<string>(contact.email);
	const [image_url, setImage_Url] = useState<string>(contact.image_url);
	const [phone_number, setPhone_Number] = useState<number>(
		contact.phone_number
	);
	const router = useRouter();

	//function for the edit button
	const handleEditContactClick = () => {
		//allows the app to validate if the email is formatted correctly
		const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		//if statement to make sure all fields were entered and the email is formatted correctly
		if (
			!name ||
			!email ||
			!image_url ||
			!phone_number ||
			!isEmail.test(email)
		) {
			alert('Please fill in all fields of data and have a valid email');
		} else {
			//edits the contacts with the information provided then sends user back to the main page
			ContactApi.edit(contact.id, name, email, image_url, phone_number);
			router.push('/contacts');
		}
	};

	//html of input section prefilled with Contacts information so they can edit accordingly
	return (
		<div>
			<div className='text-center'>
				<h1 className='text-center'>Edit Contact</h1>
				<br />
				<Link href='/contacts'>Back</Link>
			</div>
			<div className='container'>
				<form>
					<div className='mb-3'>
						<label className='form-label text-center'>Name</label>
						<input
							type='text'
							required
							value={name}
							className='form-control'
							onChange={(event) => setName(event.target.value)}
						/>
					</div>

					<br />

					<div className='mb-3'>
						<label className='form-label text-center'>Email</label>
						<input
							type='email'
							required
							value={email}
							className='form-control'
							onChange={(event) => setEmail(event.target.value)}
						/>
					</div>

					<br />

					<div className='mb-3'>
						<label className='form-label text-center'>
							Profile Picture URL
						</label>
						<input
							type='url'
							required
							value={image_url}
							className='form-control'
							onChange={(event) =>
								setImage_Url(event.target.value)
							}
						/>
					</div>

					<br />

					<div className='mb-3'>
						<label className='form-label text-center'>
							Phone Number
						</label>
						<input
							required
							value={phone_number}
							type='number'
							className='form-control'
							onChange={(event) =>
								//changes the string to a number so the phone number is in the right format
								setPhone_Number(Number(event.target.value))
							}
						/>
					</div>
				</form>
				<button
					type='button'
					className='btn btn-primary'
					onClick={handleEditContactClick}
				>
					Submit
				</button>
			</div>
		</div>
	);
}
