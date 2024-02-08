'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import Image from 'next/image'

export default function Animations() {
	const [isVisible, setIsVisible] = useState(true)
	return (
		<div>
			<h1 className="text-center text-3xl text-slate-800 mt-16">
				Animations
			</h1>
			<div className="mt-40 mx-auto grid grid-cols-[144px_144px_144px_144px_144px_144px] grid-rows-[216px] grid-flow-row justify-center gap-10 mb-40">
				{/* FIRST - ANIMATION ON MOUNT AND EXIT*/}
				<div className="animation-wrapper">
					<button
						onClick={() => setIsVisible(!isVisible)}
						className="animation-button"
					>
						Show/Hide
					</button>
					<AnimatePresence>
						{isVisible && (
							<motion.div
								className="animation-square"
								initial={{
									rotate: '0deg',
									scale: 0,
									y: 0,
								}}
								animate={{
									rotate: '180deg',
									scale: 1,
									y: [0, 50, -50, 0],
								}}
								exit={{
									rotate: '0deg',
									scale: 0,
									y: [0, -50, 50, 0],
								}}
								transition={{
									duration: 2,
									ease: 'backInOut',
									times: [0, 0.4, 0.7, 1],
								}}
							></motion.div>
						)}
					</AnimatePresence>
				</div>
				{/* SECOND - GESTURES and MOTIONCONFIG */}
				<div className="animation-wrapper">
					<MotionConfig
						transition={{
							duration: 0.2,
							type: 'spring',
						}}
					>
						<motion.button
							className="animation-button select-none"
							whileHover={{
								scale: 1.05,
								transition: { duration: 0.3 },
							}}
							whileTap={{ rotate: 180 }}
						>
							Tap me!
						</motion.button>
						<motion.button
							className="animation-button select-none"
							whileHover={{
								scale: 1.05,
								transition: { duration: 0.3 },
							}}
							whileTap={{ rotate: 180 }}
						>
							Tap me!
						</motion.button>
					</MotionConfig>
					{/* THIRD - ANIMATION CONTROLS */}
					<div className="animation-wrapper"></div>
				</div>
			</div>
		</div>
	)
}
