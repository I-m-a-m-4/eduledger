"use client";

import { motion } from "framer-motion";
import { FiBookOpen, FiShield, FiPercent, FiTrendingUp } from "react-icons/fi";

export default function FeaturesGrid() {
	const features = [
		{
			icon: <FiBookOpen className="text-2xl text-primary" />,
			title: "Decentralized Storage",
			desc: "Your academic materials are stored securely using decentralized protocol IPFS/Pinata, keeping them safe and robust.",
		},
		{
			icon: <FiShield className="text-2xl text-primary" />,
			title: "User-Owned IP",
			desc: "Minting notes as NFTs means you prove ownership of your original materials, avoiding unauthorized resale.",
		},
		{
			icon: <FiPercent className="text-2xl text-primary" />,
			title: "Micro-Payments & Royalties",
			desc: "Direct payouts are executed instantly via smart contracts on the Celo network when students download your documents.",
		},
		{
			icon: <FiTrendingUp className="text-2xl text-primary" />,
			title: "Low Network Fees",
			desc: "Forget high transaction costs. Deployments and downloads cost less than a fraction of a cent on Celo.",
		},
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
		<section className="relative py-20 px-6 md:px-20 bg-[#fffaf6] overflow-hidden">
			{/* Grid pattern background */}
			<div
				className="absolute inset-0 bg-[linear-gradient(to_right,#f2ede8_1px,transparent_1px),linear-gradient(to_bottom,#f2ede8_1px,transparent_1px)] bg-[size:30px_30px] opacity-40 pointer-events-none"
				aria-hidden="true"
			></div>

			<div className="max-w-6xl mx-auto relative z-10">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Why Choose EduLedger?
					</h2>
					<p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
						A Web3-powered student-owned platform designed to simplify sharing and monetization of academic resources.
					</p>
				</div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
				>
					{features.map((feat, i) => (
						<motion.div
							key={i}
							variants={itemVariants}
							whileHover={{ y: -6, boxShadow: "0 12px 30px rgba(249, 115, 22, 0.08)" }}
							className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm transition-all duration-300 flex flex-col"
						>
							<div className="w-12 h-12 rounded-xl bg-primary-light/40 flex items-center justify-center mb-5">
								{feat.icon}
							</div>
							<h3 className="text-lg font-bold text-gray-800 mb-3">
								{feat.title}
							</h3>
							<p className="text-gray-600 text-sm leading-relaxed flex-grow">
								{feat.desc}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
