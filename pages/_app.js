import React, { useState, useEffect } from 'react';

import { Layout } from '../components';

import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	const [isSSR, setIsSSR] = useState(true);

	// prevent SSR
	useEffect(() => {
		setIsSSR(false);
	}, []);
	if (isSSR) return null;

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
