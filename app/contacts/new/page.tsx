'use client';

import React, { useState } from 'react';
import { ContactApi } from '../../components/contact-API';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function NewContact(): JSX.Element {
	//sets useState for each contact parameter
	const [name, setName] = useState<string | null>(null);
	const [email, setEmail] = useState<string | null>(null);
	const [image_url, setImage_Url] = useState<string | null>(null);
	const [phone_number, setPhone_Number] = useState<number | null>(null);
	const router = useRouter();

	//function for the submit button
	const handleSubmitContactClick = (): void => {
		//is used to verify the email is formatted correctly
		const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		//if statement to make sure that all fields of data are entered and that the email is formatted correctly
		if (
			!name ||
			!email ||
			!image_url ||
			!phone_number ||
			!isEmail.test(email)
		) {
			alert('Please fill in all fields of data and have a valid email');
		} else {
			//adds new contact information to the API then returns the user to the main page
			ContactApi.addContact({
				name,
				email,
				image_url,
				phone_number,
				id: Math.round(Math.random() * 100000000),
			});
			router.push('/contacts');
		}
	};

	//Empty input fields that the user inputs new contact data in.
	return (
		<div>
			<div className='text-center'>
				<h1 className='text-center'>Add New Contact</h1>
				<br />
				<Link className='text-center' href='/contacts'>
					Back
				</Link>
			</div>
			<div className='container'>
				<form>
					<div className='mb-3'>
						<label className='form-label text-center'>Name</label>
						<input
							type='text'
							required
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
							type='number'
							required
							className='form-control'
							onChange={(event) =>
								setPhone_Number(Number(event.target.value))
							}
						/>
					</div>
				</form>
				<button
					type='button'
					className='btn btn-primary'
					onClick={handleSubmitContactClick}
				>
					Submit
				</button>
			</div>
		</div>
	);
}

export default NewContact;
