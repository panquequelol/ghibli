import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Nav from './Nav';
import { stagger } from '../utils/varients';

const Layout = ({ children, title, description }) => {
	return (
		<motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
			</Head>
			<Nav />
			<motion.main
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				variants={stagger}
			>
				{children}
			</motion.main>
		</motion.div>
	);
};

Layout.defaultProps = {
	title: 'Ghibli Dictionary',
	description: '...',
};

export default Layout;
