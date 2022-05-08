import React from 'react';
import Link from 'next/link';

export default function Nav() {
	return (
		<nav className='sticky bg-clip-padding backdrop-filter backdrop-blur-xl top-0 z-50 py-4 bg-opacity-40 bg-gray-900 text-gray-100'>
			<div className='text-center'>
				<Link href='/'>
					<a className='font-bold uppercase'>Ghibli Dictionary</a>
				</Link>
			</div>
		</nav>
	);
}
