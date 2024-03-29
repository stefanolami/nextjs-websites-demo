'use client'

import { useState, useRef, useEffect } from 'react'
import {
	motion,
	AnimatePresence,
	MotionConfig,
	useAnimationControls,
	useInView,
	useScroll,
	useSpring,
	useTransform,
} from 'framer-motion'
import Image from 'next/image'

export default function Animations() {
	const [isVisible, setIsVisible] = useState(true)
	const flipControls = useAnimationControls()
	const ref = useRef(null)
	const isInView = useInView(ref)

	const { scrollYProgress } = useScroll()

	const background = useTransform(
		scrollYProgress,
		[0, 1],
		['#fef9c3', '#1e293b']
	)

	useEffect(() => {
		console.log('is in view =>', isInView)
	}, [isInView])

	const handleClick = () => {
		flipControls.start('flip')
	}

	return (
		<div>
			{/* FIFTH - SCROLL BASED ANIMATIONS */}
			<motion.div
				className="h-4 w-full top-20 sticky origin-left z-50"
				style={{
					scaleX: scrollYProgress,
					background,
				}}
			></motion.div>
			<h1 className="text-center text-3xl text-slate-800 mt-16">
				Animations
			</h1>
			<div className="mt-40 mx-auto grid grid-cols-[144px_144px_144px_144px_144px_144px] grid-rows-[216px] grid-flow-row justify-center gap-10 mb-52">
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
				{/* SECOND - GESTURES (normal events catchers) and MOTIONCONFIG */}
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
				</div>
				{/* THIRD - ANIMATION CONTROLS (used to fire or manage animations of a component through external functions) */}
				<div className="animation-wrapper">
					<div className="animation-wrapper">
						<button
							className="animation-button"
							onClick={handleClick}
						>
							Click me!
						</button>
						<motion.div
							className="animation-square"
							variants={{
								initial: { rotate: 0 },
								flip: { rotate: 360 },
							}}
							initial="initial"
							animate={flipControls}
						></motion.div>
					</div>
				</div>
			</div>
			{/* FOURTH - whilwInView useInView */}
			<motion.div
				className="animation-square w-full"
				initial={{ backgroundColor: '#1E293B' }}
				whileInView={{ backgroundColor: '#FFFFFF' }}
				transition={{ delay: 1, duration: 1 }}
			></motion.div>
			<div
				className="mx-auto px-64 text-lg mb-40 w-full"
				ref={ref}
			>
				<p className="mb-8">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum
				</p>
				<p className="mb-8">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum
				</p>
				<p className="mb-8">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum
				</p>
				<p className="mb-8">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum
				</p>
			</div>
		</div>
	)
}
