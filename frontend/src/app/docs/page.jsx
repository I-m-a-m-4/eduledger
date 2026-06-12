"use client";

import { motion } from "framer-motion";
import { FiBookOpen, FiKey, FiCpu, FiCompass, FiExternalLink } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DocsPage() {
	const fadeUp = {
		hidden: { opacity: 0, y: 30 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
	};

	const guides = [
		{ title: "Connecting Your Wallet", step: "01", desc: "Click the 'Connect Wallet' button in the navbar. Select MetaMask or Coinbase Wallet, approve the connection in your browser extension." },
		{ title: "Minting Your First NFT", step: "02", desc: "Go to upload page, fill in the metadata, select price in CELO, upload your document. Click 'Mint' to execute smart contract transaction." },
		{ title: "Withdrawing Royalties", step: "03", desc: "Whenever other students buy your notes, your wallet address receives CELO instantly. No manually requested payouts needed." },
	];

	return (
		<main className="min-h-screen bg-white">
			{/* SECTION 1: Navbar */}
			<Navbar />

			{/* 🔳 Background Grid Pattern */}
			<div
				className="absolute inset-0 bg-[linear-gradient(to_right,#f2ede8_1px,transparent_1px),linear-gradient(to_bottom,#f2ede8_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none -z-1"
				aria-hidden="true"
			></div>

			{/* SECTION 2: Docs Hero */}
			<section className="relative py-20 px-6 text-center overflow-hidden bg-[#fffaf6] border-b border-gray-100">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="max-w-3xl mx-auto"
				>
					<span className="bg-primary-light text-primary text-xs font-semibold px-4 py-1.5 rounded-full mb-6 inline-block">
						Documentation Center
					</span>
					<h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
						Welcome to the EduVault Docs
					</h1>
					<p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
						Everything you need to know about publishing, buying, and protecting intellectual assets on the Celo network.
					</p>
				</motion.div>
			</section>

			{/* SECTION 3: Core Concepts Grid */}
			<section className="py-20 px-6 md:px-20 bg-white border-b border-gray-100">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
							Platform Core Concepts
						</h2>
						<p className="text-gray-500 text-sm max-w-md mx-auto">
							Learn how we integrate decentralized tools to construct the ultimate student network.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="border border-gray-100 p-6 rounded-2xl bg-[#fffaf6]/50">
							<div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
								<FiKey size={20} />
							</div>
							<h3 className="text-lg font-bold text-gray-800 mb-2">Web3 Wallets</h3>
							<p className="text-gray-600 text-sm leading-relaxed">
								Instead of traditional emails/passwords, your account is powered by public keys, giving you total sovereign identity.
							</p>
						</div>

						<div className="border border-gray-100 p-6 rounded-2xl bg-[#fffaf6]/50">
							<div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
								<FiCpu size={20} />
							</div>
							<h3 className="text-lg font-bold text-gray-800 mb-2">Smart Contracts</h3>
							<p className="text-gray-600 text-sm leading-relaxed">
								Payments are executed directly via blockchain triggers. Creators get paid instantly on every transaction.
							</p>
						</div>

						<div className="border border-gray-100 p-6 rounded-2xl bg-[#fffaf6]/50">
							<div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
								<FiBookOpen size={20} />
							</div>
							<h3 className="text-lg font-bold text-gray-800 mb-2">IPFS & NFTs</h3>
							<p className="text-gray-600 text-sm leading-relaxed">
								Files are split, encrypted, and pinned across decentralized servers so there is no single point of failure or loss.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* SECTION 4: Step-by-Step Guides */}
			<section className="py-20 px-6 md:px-20 bg-[#fffaf6] border-b border-gray-100">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
							Step-by-Step User Guides
						</h2>
						<p className="text-gray-500 text-sm">
							Follow these workflows to master the platform.
						</p>
					</div>

					<div className="space-y-6">
						{guides.map((guide, i) => (
							<div key={i} className="flex gap-6 items-start bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
								<span className="text-3xl font-extrabold text-primary-hover/30">{guide.step}</span>
								<div>
									<h3 className="text-lg font-bold text-gray-800 mb-2">{guide.title}</h3>
									<p className="text-gray-600 text-sm leading-relaxed">{guide.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* SECTION 5: Developer API Reference & Footer CTA */}
			<section className="py-20 px-6 md:px-20 bg-white">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
						Developer API & Contracts
					</h2>
					<p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
						Are you interested in building on top of the EduVault platform? Access our smart contract ABI documentation, developer endpoints, and Celo deploy addresses on GitHub.
					</p>

					<div className="flex justify-center gap-4">
						<a
							href="https://github.com/I-m-a-m-4/eduledger"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-primary hover:bg-primary-hover text-white text-sm font-bold px-6 py-3 rounded-full flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
						>
							View Smart Contracts <FiExternalLink />
						</a>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
