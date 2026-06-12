"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CommunityCta() {
	return (
		<section className="relative py-20 px-6 md:px-20 overflow-hidden bg-primary text-white">
			{/* Floating Background Glows */}
			<div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
			<div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

			<div className="max-w-4xl mx-auto text-center relative z-10">
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="flex flex-col items-center"
				>
					<span className="bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
						Get Started Today
					</span>

					<h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight max-w-2xl">
						Ready to Turn Your Study Materials Into Digital Assets?
					</h2>

					<p className="text-white/80 max-w-xl text-sm md:text-base mb-10 leading-relaxed">
						Join thousands of students who are sharing knowledge, protecting their intellectual property, and earning direct rewards on Celo.
					</p>

					<div className="flex flex-col sm:flex-row gap-4">
						<Link
							href="/dashboard/upload"
							className="bg-white text-primary hover:bg-orange-50 font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm"
						>
							Upload and Mint Now
						</Link>
						<a
							href="https://discord.gg"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-transparent border border-white/40 hover:bg-white/10 font-bold px-8 py-3.5 rounded-full transition-all duration-300 text-sm"
						>
							Join Student Community
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
