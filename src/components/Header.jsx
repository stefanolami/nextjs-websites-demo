import Link from 'next/link'

export default function Header() {
	return (
		<header className="bg-slate-800 w-full h-20 flex items-center justify-between fixed top-0 left-0 z-50">
			<p className="text-xl text-yellow-100 ml-20 text-left">Header</p>
			<nav className="flex items-center mr-20 gap-10">
				<Link
					href="/"
					className="text-yellow-100"
				>
					Home
				</Link>
				<Link
					href="/cms"
					className="text-yellow-100"
				>
					CMS
				</Link>
				<Link
					href="/animations"
					className="text-yellow-100"
				>
					Animations
				</Link>
			</nav>
		</header>
	)
}
