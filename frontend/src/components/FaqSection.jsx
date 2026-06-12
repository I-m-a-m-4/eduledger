"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function FaqSection() {
	const faqs = [
		{
			question: "How do I earn rewards on EduLedger?",
			answer: "You upload high-quality study documents, summaries, or reports, and mint them as NFTs. You set a download fee. Whenever another student pays the fee to download your document, the smart contract automatically routes the payment directly to your connected Web3 wallet.",
		},
		{
			question: "Why does the platform use blockchain?",
			answer: "By utilizing smart contracts on the Celo blockchain, we ensure direct, instant, and transparent royalty payouts without intermediates taking high fees. Additionally, minting your documents as NFTs verifies you as the original author of the content.",
		},
		{
			question: "What format of documents can I upload?",
			answer: "EduLedger supports standard PDF documents. Make sure your upload is readable, accurate, and provides real value to other students. Low-quality or plagiarized materials can be flagged and hidden from the marketplace.",
		},
		{
			question: "Is there any cost to deploy or download?",
			answer: "Yes, transactions on the Celo network require a tiny amount of gas fee (typically less than $0.001 per transaction). The download fee you pay goes directly to the document's creator, ensuring they get rewarded for their hard work.",
		},
	];

	const [activeIndex, setActiveIndex] = useState(null);

	const toggleAccordion = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<section className="relative py-20 px-6 md:px-20 bg-white overflow-hidden" id="faq">
			<div className="max-w-3xl mx-auto relative z-10">
				<div className="text-center mb-14">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						Frequently Asked Questions
					</h2>
					<p className="text-gray-600 text-sm md:text-base">
						Find quick answers to common questions about document minting, payouts, and Web3 interactions.
					</p>
				</div>

				<div className="space-y-4">
					{faqs.map((faq, i) => {
						const isOpen = activeIndex === i;
						return (
							<div
								key={i}
								className="border border-gray-100 rounded-2xl bg-[#fffaf6]/50 hover:bg-[#fffaf6] transition-colors duration-200 overflow-hidden"
							>
								<button
									onClick={() => toggleAccordion(i)}
									className="w-full flex items-center justify-between text-left p-5 focus:outline-none"
								>
									<span className="font-semibold text-gray-800 text-sm md:text-base">
										{faq.question}
									</span>
									<span className="p-1.5 rounded-full bg-white border border-gray-100 text-primary transition-transform">
										{isOpen ? <FiMinus /> : <FiPlus />}
									</span>
								</button>

								<AnimatePresence initial={false}>
									{isOpen && (
										<motion.div
											initial={{ height: 0 }}
											animate={{ height: "auto" }}
											exit={{ height: 0 }}
											transition={{ duration: 0.3, ease: "easeInOut" }}
											className="overflow-hidden"
										>
											<div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100/50 pt-3">
												{faq.answer}
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
