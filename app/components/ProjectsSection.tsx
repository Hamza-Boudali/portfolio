'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Business Landing (Demo)',
    description:
      'Responsive one-page landing for local businesses — click-to-call, fast load, and mobile-first. Perfect for local client outreach.',
    image: '/images/landing.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    link: '/landing2.html',
    repo: 'https://github.com/Hamza-Boudali/portfolio' // change if different
  },
  {
    title: 'Personal Portfolio',
    description: 'This portfolio site — Next.js + Tailwind, deployed on Vercel. Shows demos, contact, and resume.',
    image: '/images/portfolio.png',
    tags: ['Next.js', 'Tailwind', 'Deployment'],
    link: '/',
    repo: 'https://github.com/Hamza-Boudali/portfolio' // change if different
  },
];


export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 text-center text-gray-900"
				>
					Featured Projects
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="group relative bg-white rounded-xl overflow-hidden backdrop-blur-sm border border-gray-200 shadow-lg"
						>
							<div className="aspect-video relative overflow-hidden">
								<Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
								<div className="absolute inset-0 bg-gradient-to-t from-white via-white/0 to-transparent transition-transform duration-300 group-hover:scale-105" />
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
								<p className="text-gray-600 mb-4">{project.description}</p>

								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
										{tag}
									</span>
									))}
								</div>

								{/* ===== Buttons: View demo + View code ===== */}
								<div className="mt-4 flex flex-wrap gap-3">
									<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-blue-700 transition"
									>
									View demo
									</a>

									{project.repo && (
									<a
										href={project.repo}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-block px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-50 transition"
									>
										View code
									</a>
								)}
							</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}