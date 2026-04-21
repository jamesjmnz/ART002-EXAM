'use client';

import { useEffect, useState } from 'react';
import { ArrowDownRight, Menu, X } from 'lucide-react';

import { philippineArtExhibit } from '@/lib/philippine-art-exhibit';
import { cn } from '@/lib/utils';

const primaryLinks = [
	{ href: '#hero', label: 'Hero' },
	{ href: '#exhibit', label: 'Exhibit' },
];

export default function MuseumNav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navLinks = [
		...primaryLinks,
		...philippineArtExhibit.chapters.map((chapter) => ({
			href: `#${chapter.id}`,
			label: chapter.label,
		})),
	];

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setIsMenuOpen(false);
			}
		};

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setIsMenuOpen(false);
			}
		};

		window.addEventListener('resize', handleResize);
		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
			<div className="pointer-events-auto mx-auto max-w-7xl rounded-[1.75rem] border border-white/12 bg-black/45 px-3 py-3 text-white shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:px-5">
				<div className="flex items-center gap-3 md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center md:gap-5">
					<div className="min-w-0 shrink-0 pr-1 md:justify-self-start">
						<p className="museum-kicker">Virtual Museum</p>
						<p className="truncate font-serif text-lg md:text-2xl">
							{philippineArtExhibit.title}
						</p>
					</div>

					<nav
						aria-label="Primary navigation"
						className="hidden items-center justify-center gap-2 px-1 md:flex md:justify-self-center"
					>
						{navLinks.map((link, index) => (
							<div key={link.href} className="flex items-center">
								<a
									href={link.href}
									className="px-2 py-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.24em] text-white/78 transition hover:text-white"
								>
									{link.label}
								</a>
								{index < navLinks.length - 1 ? (
									<span className="px-1 text-white/34">•</span>
								) : null}
							</div>
						))}
					</nav>

					<div className="hidden md:flex md:justify-self-end">
						<a
							href="#exhibit"
							className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white transition hover:bg-white/16"
						>
							Enter Exhibit
							<ArrowDownRight className="h-4 w-4" />
						</a>
					</div>

					<button
						type="button"
						aria-expanded={isMenuOpen}
						aria-controls="mobile-museum-menu"
						aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
						className="ml-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white transition hover:bg-white/16 md:hidden"
						onClick={() => setIsMenuOpen((current) => !current)}
					>
						Menu
						{isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
					</button>
				</div>

				<div
					id="mobile-museum-menu"
					className={cn(
						'grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-300 ease-out md:hidden',
						isMenuOpen
							? 'mt-4 grid-rows-[1fr] opacity-100'
							: 'mt-0 grid-rows-[0fr] opacity-0',
					)}
				>
					<div className="overflow-hidden">
						<div className="rounded-[1.4rem] border border-white/10 bg-white/6 p-3">
							<nav aria-label="Mobile navigation" className="flex flex-col gap-2">
								{navLinks.map((link) => (
									<a
										key={link.href}
										href={link.href}
										className="rounded-2xl border border-transparent px-4 py-3 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-white/80 transition hover:border-white/12 hover:bg-white/8 hover:text-white"
										onClick={() => setIsMenuOpen(false)}
									>
										{link.label}
									</a>
								))}
							</nav>

							<a
								href="#exhibit"
								className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-3 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white transition hover:bg-white/16"
								onClick={() => setIsMenuOpen(false)}
							>
								Enter Exhibit
								<ArrowDownRight className="h-4 w-4" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
