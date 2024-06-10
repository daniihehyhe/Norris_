// src/app/pages/index.js

import { useTranslations } from 'next-intl';
import React from 'react';

const Home = () => {
	const t = useTranslations();

	return (
		<div>
			<h1>{t('system')}</h1>
			<p>{t('services')}</p>
		</div>
	);
};

export default Home;
