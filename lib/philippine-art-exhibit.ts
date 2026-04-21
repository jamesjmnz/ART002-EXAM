export interface ExhibitArtwork {
  id: string;
  title: string;
  artist: string;
  year: string;
  location: string;
  hall: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  visualCue: string;
  background: string;
  subject: string;
  content: string;
  context: string;
  sourceLabel: string;
  sourceHref: string;
}

export interface ExhibitChapter {
  id: string;
  label: string;
  title: string;
  summary: string;
  artworks: ExhibitArtwork[];
}

interface PhilippineArtExhibit {
  title: string;
  subtitle: string;
  introduction: string;
  chapters: ExhibitChapter[];
}

export const philippineArtExhibit = {
  title: 'Pagtanaw sa Bayan',
  subtitle: 'Power, memory, and becoming in Philippine art',
  introduction:
    'This curated sequence turns the site into a virtual museum passage, tracing how Philippine artists pictured colonial pressure, collective ritual, intimate faith, and modern civic imagination without disturbing the original immersive opening.',
  chapters: [
    {
      id: 'witness',
      label: 'Act I',
      title: 'Witnessing Empire',
      summary:
        'These monumental canvases refuse to let violence stay invisible. Their drama is historical, but their real force lies in how they convert spectacle into political seeing.',
      artworks: [
        {
          id: 'spoliarium',
          title: 'Spoliarium',
          artist: 'Juan Luna',
          year: '1884',
          location: 'National Museum of Fine Arts, Manila',
          hall: 'Spoliarium Hall',
          imageSrc: '/heritage/spoliarium.jpg',
          imageAlt:
            "Juan Luna's Spoliarium, a monumental painting showing fallen gladiators dragged from an arena.",
          imagePosition: 'center center',
          visualCue: 'Bodies recede into shadow while the arena keeps consuming them.',
          background:
            'Painted in Rome and awarded a gold medal in Madrid, Luna\'s enormous canvas became a landmark of Filipino artistic excellence under Spanish rule and a touchstone for reformist imagination.',
          subject:
            'Fallen gladiators are dragged out of the Roman arena under a heavy, blood-dark atmosphere.',
          content:
            'The painting turns public entertainment into a study of humiliation, grief, and dignity under spectacle.',
          context:
            'In Philippine art history, it is often read as an allegory of a colonized people stripped by empire yet still capable of awakening national consciousness.',
          sourceLabel: 'National Museum: Spoliarium Hall',
          sourceHref:
            'https://www.nationalmuseum.gov.ph/exhibitions/fine-arts/gallery-spoliarium-hall/',
        },
        {
          id: 'bustamante',
          title: 'El Asesinato del Gobernador Bustamante',
          artist: 'Felix Resurreccion Hidalgo',
          year: 'c. 1904',
          location: 'National Museum of Fine Arts, Manila',
          hall: 'Spoliarium Hall',
          imageSrc: '/heritage/bustamante.jpg',
          imageAlt:
            "Felix Resurreccion Hidalgo's El Asesinato del Gobernador Bustamante, a dramatic historical painting of a colonial assassination.",
          imagePosition: 'center 28%',
          visualCue:
            'A crowded interior collapses into accusation, panic, and irreversible force.',
          background:
            'Hidalgo revisits the 1719 killing of Governor Fernando Bustamante inside the Archbishop\'s Palace, scaling a colonial crisis into one of Philippine painting\'s most charged historical dramas.',
          subject:
            'Clergy, officials, and bodies press into a compressed interior at the instant authority breaks down.',
          content:
            'Instead of isolating a hero, the work stages power as confusion, moral fracture, and contested legitimacy.',
          context:
            'Its monumentality allows viewers to read colonial order as unstable from within, already cracking under its own violence and contradictions.',
          sourceLabel: 'National Museum: Spoliarium Hall',
          sourceHref:
            'https://www.nationalmuseum.gov.ph/exhibitions/fine-arts/gallery-spoliarium-hall/',
        },
      ],
    },
    {
      id: 'ritual',
      label: 'Act II',
      title: 'Ritual and Resilience',
      summary:
        'Here, ceremony does double work: it records moments of contact and it steadies everyday life. Faith appears not as ornament, but as a structure for survival and memory.',
      artworks: [
        {
          id: 'first-mass',
          title: 'The First Mass in Limasawa',
          artist: 'Carlos "Botong" Francisco',
          year: '1965',
          location: 'National Museum of Fine Arts, Manila',
          hall: 'Pillars of Philippine Modernism Hall',
          imageSrc: '/heritage/first-mass-in-limasawa.jpg',
          imageAlt:
            'Carlos Botong Francisco painting of the First Mass in Limasawa with Magellan, Pigafetta, and local rulers gathered around an altar.',
          imagePosition: 'center 35%',
          visualCue:
            'An altar of bamboo becomes a meeting point for empire, diplomacy, and belief.',
          background:
            'Commissioned by the Philippine government for the 400th anniversary of Christianity in the archipelago, Francisco renders a foundational scene that merges history painting with cinematic staging.',
          subject:
            'Fr. Pedro Valderrama celebrates Mass while Magellan, Pigafetta, Rajah Kolambo, and Rajah Siagu gather around an improvised altar.',
          content:
            'The image frames ritual as encounter, where faith, politics, and translation enter the same visual field.',
          context:
            'Francisco treats history not as static record but as a living national memory, open to reflection about how beginnings are narrated.',
          sourceLabel: 'National Museum feature',
          sourceHref:
            'https://www.nationalmuseum.gov.ph/2022/11/04/110th-birth-anniversary-of-carlos-botong-francisco/',
        },
        {
          id: 'i-believe-in-god',
          title: 'I Believe in God',
          artist: 'Vicente Manansala',
          year: '1948',
          location: 'National Museum of Fine Arts, Manila',
          hall: 'GSIS Northwest Hall',
          imageSrc: '/heritage/i-believe-in-god.jpg',
          imageAlt:
            'Vicente Manansala painting of a family pausing from pounding rice to pray the Angelus.',
          imagePosition: 'center 22%',
          visualCue:
            'Labor pauses for prayer, and the quiet interruption becomes the whole point.',
          background:
            'Painted three years after World War II, this early Manansala work predates his mature transparent cubism while already showing his interest in ordinary Filipino life under pressure.',
          subject:
            'A family pauses from pounding rice to pray the Angelus in the middle of rural work.',
          content:
            'Devotion briefly suspends survival labor, making faith feel less ornamental than deeply practical.',
          context:
            'Seen after the war, the painting reads as a portrait of recovery: fragile, communal, and held together by ritual repetition.',
          sourceLabel: 'National Museum feature',
          sourceHref:
            'https://www.nationalmuseum.gov.ph/2022/05/06/art-stroll-sunday-feature-i-believe-in-god-1948/',
        },
      ],
    },
    {
      id: 'figures',
      label: 'Act III',
      title: 'Figures of Nationhood',
      summary:
        'The nation also gets imagined through faces, bodies, professions, and public care. These works show how identity can be idealized, debated, and rebuilt through image-making.',
      artworks: [
        {
          id: 'dalagang-bukid',
          title: 'Dalagang Bukid',
          artist: 'Fernando Amorsolo',
          year: '1928',
          location: 'National Museum of Fine Arts, Manila',
          hall: 'Early 20th Century Philippine Portrait Hall',
          imageSrc: '/heritage/dalagang-bukid.jpg',
          imageAlt:
            "Fernando Amorsolo's Dalagang Bukid, a portrait of a smiling Filipina in baro't saya.",
          imagePosition: 'center 12%',
          visualCue:
            'Sunlit poise transforms a rural portrait into a national ideal.',
          background:
            'Amorsolo\'s celebrated country lass distills an idealized vision of Filipina beauty during the American colonial period through radiant light, polished costume, and pastoral calm.',
          subject:
            'A smiling young woman in baro\'t saya faces the viewer with bright color and composed confidence.',
          content:
            'The portrait turns femininity, grace, and countryside imagery into an emblem of cultural identity.',
          context:
            'Its popularity also invites a critical reading, since the painting beautifies rural life while helping define who counted as the picturesque Filipino subject.',
          sourceLabel: 'National Museum feature',
          sourceHref:
            'https://www.nationalmuseum.gov.ph/2021/12/12/17th-to-early-20th-century-national-fine-arts-collection-dalagang-bukid/',
        },
        {
          id: 'progress-of-medicine',
          title: 'The Progress of Medicine in the Philippines',
          artist: 'Carlos "Botong" Francisco',
          year: '1953',
          location: 'National Museum of Fine Arts, Manila',
          hall: 'Philippine General Hospital Hall',
          imageSrc: '/heritage/progress-of-medicine.jpg',
          imageAlt:
            'Carlos Botong Francisco mural cycle The Progress of Medicine in the Philippines showing healers, doctors, and institutions across time.',
          imagePosition: 'center center',
          visualCue:
            'Healing unfolds as a civic panorama, from indigenous knowledge to modern medicine.',
          background:
            'Originally commissioned for the entrance hall of the Philippine General Hospital, this four-panel cycle was later declared a National Cultural Treasure and transferred to the National Museum for preservation.',
          subject:
            'Healers, doctors, patients, rituals, laboratories, and institutions unfold across a wide historical sequence.',
          content:
            'Medicine becomes more than science here; it becomes a story of collective care, education, and national self-making.',
          context:
            'Because it belongs both to art history and public health memory, the work bridges cultural heritage with the daily project of building humane institutions.',
          sourceLabel: 'National Museum: Gallery XVI',
          sourceHref:
            'https://www.nationalmuseum.gov.ph/exhibitions/fine-arts/gallery-16/',
        },
      ],
    },
  ],
} satisfies PhilippineArtExhibit;
