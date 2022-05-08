import axios from 'axios';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Card from '../components/Card';
import Layout from '../components/Layout';

export async function getServerSideProps() {
	const res = await axios.get('https://ghibliapi.herokuapp.com/films', {
		params: { limit: 250 },
	});
	return {
		props: {
			films: res.data,
		},
	};
}

export default function Home({ films }) {
	return (
		<Layout>
			<div className='max-w-4xl lg:max-w-7xl mx-auto py-8 grid gap-2 grid-cols-2 sm:grid-cols-4 lg:grid-cols-6'>
				{films.map((film, index) => (
					<Card key={index} image={film.image} title={film.title} filmId={film.id} />
				))}
			</div>
		</Layout>
	);
}
