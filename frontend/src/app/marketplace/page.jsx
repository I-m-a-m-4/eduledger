"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaStar } from "react-icons/fa";
import { FiFilter, FiTrendingUp } from "react-icons/fi";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MarketPage() {
	const materials = [
		{
			title: "CHM 112 – Lab Report Template (UNN)",
			author: "Chijioke M.",
			likes: "21.5K",
			price: "0.25 CELO",
			image: "/images/image5.jpg",
		},
		{
			title: "MTH 101 – Calculus Cheat Sheet",
			author: "Ada O.",
			likes: "9.2K",
			price: "0.10 CELO",
			image: "/images/image1.jpg",
		},
		{
			title: "BIO 201 – Anatomy Notes",
			author: "Ngozi A.",
			likes: "4.8K",
			price: "0.15 CELO",
			image: "/images/image2.jpg",
		},
		{
			title: "ENG 305 – Research Paper Guide",
			author: "Emeka K.",
			likes: "1.2K",
			price: "0.05 CELO",
			image: "/images/image3.jpg",
		},
		{
			title: "PHY 110 – Problem Sets",
			author: "Uche N.",
			likes: "12.3K",
			price: "0.20 CELO",
			image: "/images/image4.jpg",
		},
		{
			title: "COM 210 – Software Eng. Slides",
			author: "Tunde L.",
			likes: "8.6K",
			price: "0.30 CELO",
			image: "/images/image5.jpg",
		},
		{
			title: "ECO 102 – Microeconomics Past Questions",
			author: "Funmi S.",
			likes: "3.4K",
			price: "0.08 CELO",
			image: "/images/image6.jpg",
		},
		{
			title: "MED 401 – Pharmacology Summary",
			author: "Dr. Amina",
			likes: "6.7K",
			price: "0.35 CELO",
			image: "/images/image7.jpg",
		},
		{
			title: "PSY 100 – Study Tips & Mnemonics",
			author: "Kemi R.",
			likes: "2.1K",
			price: "0.03 CELO",
			image: "/images/image8.jpg",
		},
		{
			title: "PSY 101 – Study Tips & Mnemonics",
			author: "Emma R.",
			likes: "2.1K",
			price: "0.03 CELO",
			image: "/images/image9.jpg",
		},
	];

	const categories = [
		"Past Questions & Exam Papers",
		"Project & School Development",
		"Social Sciences",
		"Education & Languages",
		"Medical & Biological Sciences",
		"Engineering & Tech",
		"Entrepreneurship",
		"Study Tools",
		"Faculty Notes",
		"Community and Learning Resources",
	];

	return (
		<main className="min-h-screen bg-[#fffaf6] relative">
			{/* SECTION 1: Navbar */}
			<Navbar />

			{/* 🔹 Background Grid Pattern */}
			<div
				className="absolute inset-0 bg-[linear-gradient(to_right,#f2ede8_1px,transparent_1px),linear-gradient(to_bottom,#f2ede8_1px,transparent_1px)] bg-[size:40px_40px] opacity-70 pointer-events-none -z-1"
				aria-hidden="true"
			></div>

			{/* SECTION 2: Marketplace Hero Banner */}
			<section className="px-6 md:px-16 pt-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="bg-gradient-to-br from-primary-light/40 to-primary/15 border border-primary-light/50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto shadow-sm"
				>
					<div className="max-w-xl text-center md:text-left">
						<span className="bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full mb-4 inline-block">
							EduVault Hub
						</span>
						<h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
							Discover Verified Student Material
						</h1>
						<p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
							Own your knowledge. Earn from your notes. Buy study notes, project work, and lab templates directly from their creators on-chain.
						</p>
						<Link href="/dashboard/upload">
							<button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all">
								Become a Creator
							</button>
						</Link>
					</div>

					<div className="w-48 h-48 mt-8 md:mt-0 flex items-center justify-center relative">
						<div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
						<Image
							src="/images/celo.png"
							alt="Celo Token"
							width={160}
							height={160}
							className="object-contain relative z-10 animate-bounce-slow"
						/>
					</div>
				</motion.div>
			</section>

			{/* SECTION 3: Featured Spotlight Spotlight */}
			<section className="px-6 md:px-16 py-12">
				<div className="max-w-6xl mx-auto">
					<div className="flex items-center gap-2 mb-6 text-gray-800">
						<FiTrendingUp className="text-primary font-bold text-lg" />
						<h2 className="text-lg font-bold">Featured Spotlight of the Week</h2>
					</div>
					<div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row items-center gap-8 shadow-sm">
						<div className="relative w-full lg:w-96 h-56 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
							<Image
								src="/images/image1.jpg"
								alt="Featured Document Preview"
								fill
								className="object-cover"
							/>
						</div>
						<div className="flex-1 text-center lg:text-left">
							<span className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block">
								Top Rated (4.9 ★)
							</span>
							<h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
								ECN 101 – Principles of Microeconomics (Year 1)
							</h3>
							<p className="text-gray-500 text-sm mb-6 max-w-xl">
								Comprehensive microeconomics notes covering consumer utility theories, market equilibrium, perfect competition models, and pricing strategies.
							</p>
							<div className="flex items-center justify-center lg:justify-start gap-4">
								<span className="text-lg font-extrabold text-gray-800">0.25 CELO</span>
								<Link href="/marketplace/0">
									<button className="bg-primary hover:bg-primary-hover text-white text-xs font-semibold py-2.5 px-6 rounded-full shadow-md transition-all">
										Get Featured Asset
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SECTION 4: Marketplace Explorer (Main Grid) */}
			<section className="px-6 md:px-16 py-8">
				<div className="max-w-6xl mx-auto flex gap-10">
					{/* Sidebar Categories */}
					<aside className="hidden lg:block w-64 bg-white border border-gray-100 rounded-3xl p-6 h-fit shadow-sm flex-shrink-0">
						<h3 className="text-sm font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">
							Categories
						</h3>
						<ul className="space-y-3 text-xs font-medium text-gray-600">
							{categories.map((category, i) => (
								<li
									key={i}
									className="cursor-pointer hover:text-primary transition-all py-1"
								>
									<Link href="/marketplace">{category}</Link>
								</li>
							))}
						</ul>
					</aside>

					{/* Explorer Area */}
					<div className="flex-1">
						{/* Filters */}
						<div className="flex flex-wrap items-center justify-between mb-8 bg-white border border-gray-100 p-4 rounded-2xl shadow-sm gap-4">
							<div className="flex items-center gap-2 text-gray-600 text-xs">
								<span className="font-semibold text-gray-700">Filters:</span>
								<select className="border border-gray-200 bg-white rounded-lg px-3 py-1.5 text-xs focus:ring-1 focus:ring-primary focus:outline-none">
									<option>Category: All</option>
									<option>Social Sciences</option>
									<option>Engineering</option>
									<option>Pharmacy</option>
								</select>
								<select className="border border-gray-200 bg-white rounded-lg px-3 py-1.5 text-xs focus:ring-1 focus:ring-primary focus:outline-none">
									<option>Price Range</option>
								</select>
							</div>

							<div className="text-xs text-gray-600 flex items-center gap-1">
								<span>Sort by:</span>
								<select className="border border-gray-200 bg-white rounded-lg px-3 py-1.5 text-xs focus:ring-1 focus:ring-primary focus:outline-none">
									<option>Most Popular</option>
									<option>Newest</option>
								</select>
							</div>
						</div>

						{/* Document cards grid */}
						<div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
							{materials.map((material, i) => (
								<Link
									href={`/marketplace/${i}`}
									key={i}
									className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 block hover:-translate-y-1"
								>
									{/* Thumbnail */}
									<div className="relative w-full h-40 bg-gray-100">
										<Image
											src={material.image}
											alt={material.title}
											fill
											className="object-cover"
										/>
										<button className="absolute top-3 left-3 bg-white text-[10px] px-3 py-1 rounded-full shadow-sm text-gray-700 font-bold hover:bg-gray-50 transition border border-gray-100">
											Get This!
										</button>
									</div>

									{/* Info */}
									<div className="p-4">
										<h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-1">
											{material.title}
										</h3>
										<p className="text-xs text-gray-500 mb-3">
											by {material.author}
										</p>

										<div className="flex justify-between items-center text-[10px] text-gray-500 border-t border-gray-100/50 pt-2.5">
											<div className="flex items-center gap-1">
												<FaHeart className="text-pink-500" />
												<span>{material.likes} Likes</span>
											</div>
											<span className="font-bold text-gray-800">{material.price}</span>
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* SECTION 5: Creator Onboarding / Footer CTA */}
			<section className="py-20 px-6 bg-white border-t border-gray-100">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
						Join the Creator Economy for Students
					</h2>
					<p className="text-gray-500 text-sm md:text-base mb-8 max-w-xl mx-auto">
						Start earning in CELO for uploading lecture summaries and homework reference keys. Your assets are forever yours.
					</p>
					<Link href="/dashboard/upload">
						<button className="bg-primary hover:bg-primary-hover text-white text-sm font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all">
							Launch Your Vault Upload →
						</button>
					</Link>
				</div>
			</section>

			<Footer />
		</main>
	);
}
