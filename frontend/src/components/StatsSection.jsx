"use client";

import { motion } from "framer-motion";

export default function StatsSection() {
	const stats = [
		{ value: "10,000+", label: "Materials Shared", desc: "Lecture notes, guides & summaries" },
		{ value: "$50,000+", label: "Student Earnings", desc: "Paid directly in CELO & Stablecoins" },
		{ value: "50+", label: "Universities Active", desc: "Connecting students globally" },
		{ value: "99.9%", label: "Transaction Uptime", desc: "Fast, secure, and low gas fees" },
	];

	const containerVariants = {
		hidden: {},
		show: { transition: { staggerChildren: 0.1 } },
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
	};

	return (
		<section className="relative py-16 px-6 md:px-20 bg-white border-y border-gray-100 overflow-hidden">
			{/* Orange accent glow */}
			<div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

			<div className="max-w-6xl mx-auto relative z-10">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-2 md:grid-cols-4 gap-8"
				>
					{stats.map((stat, i) => (
						<motion.div
							key={i}
							variants={itemVariants}
							className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-primary-light/10 transition-colors duration-300"
						>
							<span className="text-3xl md:text-4xl font-extrabold text-primary mb-2">
								{stat.value}
							</span>
							<span className="text-sm font-bold text-gray-800 mb-1">
								{stat.label}
							</span>
							<span className="text-xs text-gray-500 max-w-[150px]">
								{stat.desc}
							</span>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
