'use client';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Contacts from './contacts/page';

//reroutes to /contacts on startup
const Home = () => (
	<Router>
		<Contacts />
	</Router>
);

export default Home;
