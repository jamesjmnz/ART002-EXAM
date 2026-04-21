import InfiniteGallery from '@/components/InfiniteGallery';
import ExhibitSection from '@/components/ExhibitSection';

export default function Home() {
	const sampleImages = [
		{ src: '/1.webp', alt: 'Atmospheric gallery image 1' },
		{
			src: '/heritage/spoliarium.jpg',
			alt: "Juan Luna's Spoliarium",
		},
		{ src: '/2.webp', alt: 'Atmospheric gallery image 2' },
		{
			src: '/heritage/bustamante.jpg',
			alt: "Felix Resurreccion Hidalgo's El Asesinato del Gobernador Bustamante",
		},
		{ src: '/3.webp', alt: 'Atmospheric gallery image 3' },
		{
			src: '/heritage/first-mass-in-limasawa.jpg',
			alt: 'Carlos Botong Francisco’s The First Mass in Limasawa',
		},
		{ src: '/4.webp', alt: 'Atmospheric gallery image 4' },
		{
			src: '/heritage/i-believe-in-god.jpg',
			alt: "Vicente Manansala's I Believe in God",
		},
		{ src: '/5.webp', alt: 'Atmospheric gallery image 5' },
		{
			src: '/heritage/dalagang-bukid.jpg',
			alt: "Fernando Amorsolo's Dalagang Bukid",
		},
		{ src: '/6.webp', alt: 'Atmospheric gallery image 6' },
		{
			src: '/heritage/progress-of-medicine.jpg',
			alt: 'Carlos Botong Francisco’s The Progress of Medicine in the Philippines',
		},
		{ src: '/7.webp', alt: 'Atmospheric gallery image 7' },
		{ src: '/8.webp', alt: 'Atmospheric gallery image 8' },
	];

	return (
		<main className="min-h-screen bg-[#050505] text-white">
			<section className="relative h-screen">
				<InfiniteGallery
					images={sampleImages}
					speed={1.2}
					zSpacing={3}
					visibleCount={12}
					falloff={{ near: 0.8, far: 14 }}
					className="h-screen w-full rounded-lg overflow-hidden"
				/>
				<div className="pointer-events-none absolute inset-0 flex h-screen items-center justify-center px-3 text-center mix-blend-exclusion text-white">
					<h1 className="font-serif text-4xl tracking-tight md:text-7xl">
						<span className="italic">We remember;</span> therefore we become
					</h1>
				</div>

				<div className="pointer-events-none absolute bottom-10 left-0 right-0 text-center font-mono text-[11px] font-semibold uppercase">
					<p>Use mouse wheel, arrow keys, or touch to navigate</p>
					<p className="opacity-60">
						Auto-play resumes after 3 seconds of inactivity
					</p>
				</div>
			</section>

			<ExhibitSection />
		</main>
	);
}
