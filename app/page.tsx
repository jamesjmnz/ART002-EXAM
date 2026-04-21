import { ArrowDownRight } from 'lucide-react';

import InfiniteGallery from '@/components/InfiniteGallery';
import ExhibitSection from '@/components/ExhibitSection';
import MuseumNav from '@/components/MuseumNav';

export default function Home() {
	const sampleImages = [
		{
			src: '/heritage/spoliarium.jpg',
			alt: "Juan Luna's Spoliarium",
			targetId: 'spoliarium',
		},
		{
			src: '/heritage/bustamante.jpg',
			alt: "Felix Resurreccion Hidalgo's El Asesinato del Gobernador Bustamante",
			targetId: 'bustamante',
		},
		{
			src: '/heritage/first-mass-in-limasawa.jpg',
			alt: 'Carlos Botong Francisco’s The First Mass in Limasawa',
			targetId: 'first-mass',
		},
		{
			src: '/heritage/i-believe-in-god.jpg',
			alt: "Vicente Manansala's I Believe in God",
			targetId: 'i-believe-in-god',
		},
		{
			src: '/heritage/dalagang-bukid.jpg',
			alt: "Fernando Amorsolo's Dalagang Bukid",
			targetId: 'dalagang-bukid',
		},
		{
			src: '/heritage/progress-of-medicine.jpg',
			alt: 'Carlos Botong Francisco’s The Progress of Medicine in the Philippines',
			targetId: 'progress-of-medicine',
		},
	];

	return (
		<main className="min-h-screen bg-[#050505] text-white">
			<MuseumNav />

			<section id="hero" className="relative h-screen scroll-mt-32">
				<InfiniteGallery
					images={sampleImages}
					speed={1.2}
					zSpacing={3}
					visibleCount={12}
					falloff={{ near: 0.8, far: 14 }}
					className="h-screen w-full rounded-lg overflow-hidden"
				/>
				<div className="pointer-events-none absolute inset-0 flex h-screen items-center justify-center px-3 text-center mix-blend-exclusion text-white">
					<div className="max-w-5xl">
						<p className="museum-kicker mb-4">Philippine Art and Cultural Heritage</p>
						<h1 className="font-serif text-4xl tracking-tight md:text-7xl">
							<span className="italic">We remember;</span> therefore we become
						</h1>
					</div>
				</div>

				<div className="pointer-events-none absolute bottom-10 left-0 right-0 flex justify-center px-3 pb-5">
					<a
						href="#exhibit"
						className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-5 py-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition hover:bg-white/16"
					>
						Enter Exhibit
						<ArrowDownRight className="h-4 w-4" />
					</a>
				</div>
			</section>

			<ExhibitSection />
		</main>
	);
}
