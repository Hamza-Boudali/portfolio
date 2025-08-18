import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Hamza Boudali — Web Developer',
	description:
		'I build fast landing pages & small web apps that get customers calling. Contact: boudali.hamz@gmail.com',
	keywords: [
		'Frontend Developer',
		'Web Developer',
		'React Developer',
		'Next.js',
		'TypeScript',
		'JavaScript',
		'Landing pages',
		'Responsive Design',
		'Performance Optimization',
		'Hamza Boudali',
	],
	authors: [{ name: 'Hamza Boudali' }],
	creator: 'Hamza Boudali',
	openGraph: {
		title: 'Hamza Boudali — Web Developer',
		description:
			'I build fast landing pages & small web apps that get customers calling. See demos and contact me to get a landing page in 72 hours.',
		url: 'https://hamza-portfolio.vercel.app', // replace with your real domain later
		siteName: 'Hamza Boudali — Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Hamza Boudali — Web Developer',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Hamza Boudali — Web Developer',
		description:
			'I build fast landing pages & small web apps that get customers calling.', // replace or remove if you don't have a Twitter handle
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
