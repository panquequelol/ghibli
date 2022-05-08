import React from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import axios from 'axios';
import Image from 'next/image';
import IconStar from '../../components/IconStar';

export async function getServerSideProps({ params }) {
	const res = await axios.get(
		`https://ghibliapi.herokuapp.com/films/${params.id}`
	);
	return {
		props: {
			film: res.data,
		},
	};
}

export default function film({ film }) {
	// getting url params
	return (
		<Layout>
			<header className='w-full top-0 left-0 -translate-y-14'>
				<div className='h-52 center md:h-96 relative'>
					<Image
						className='brightness-50'
						src={film.movie_banner}
						width='100%'
						height='100%'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='max-w-7xl mx-auto grid sm:grid-cols-4'>
					<div className='w-32 sm:w-48 lg:w-64 -translate-y-16 sm:-translate-y-28 translate-x-4 shadow-lg h-fit'>
						<Image
							className='rounded'
							src={film.image}
							layout='responsive'
							objectFit='cover'
							width={2}
							height={3}
						/>
					</div>
					<div className='col-span-3 md:mt-6 mx-4'>
						<h1 className='text-2xl font-bold'>{film.title}</h1>
						<h2 className='text-sm text-gray-400'>{film.original_title} ({film.original_title_romanised})</h2>
						<p>{film.description}</p>
						<br />
						<p>
							Director: <span className='text-gray-400'>{film.director}</span>
						</p>
						<p>
							Producer: <span className='text-gray-400'>{film.producer}</span>
						</p>
						<p>
							Release date: <span className='text-gray-400'>{film.release_date}</span>
						</p>
					</div>
				</div>
			</header>
		</Layout>
	);
}
