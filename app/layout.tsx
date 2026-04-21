import type { Metadata } from 'next';
import { Geist_Mono, Instrument_Serif } from 'next/font/google';
import { philippineArtExhibit } from '@/lib/philippine-art-exhibit';
import "./globals.css"

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const instrumentSerif = Instrument_Serif({
	variable: '--font-instrument',
	subsets: ['latin'],
	weight: '400',
	style: ['italic', 'normal'],
});

export const metadata: Metadata = {
	title: `${philippineArtExhibit.title} | Virtual Museum`,
	description: 'A virtual museum of Philippine art, memory, and cultural heritage.',
    generator: 'v0.app'
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistMono.variable} ${instrumentSerif.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
