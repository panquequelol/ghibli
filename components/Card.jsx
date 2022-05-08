import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeInUp } from '../utils/varients';

export default function Card({ title, image, filmId }) {
	return (
		<Link href={`/film/${filmId}`}>
			<motion.a
				variants={fadeInUp}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				href='#'
				className='p-1 group space-y-2 flex flex-col items-center'
			>
				<div className='w-40 group-hover:shadow-lg rounded'>
					<Image
						className='rounded group-hover:brightness-75 transition-all'
						src={image}
						layout='responsive'
						objectFit='cover'
						width={2}
						height={3}
					/>
				</div>
				<p className='text-center text-gray-100 group-hover:text-gray-400 uppercase text-sm font-semibold transition-all'>
					{title}
				</p>
			</motion.a>
		</Link>
	);
}
