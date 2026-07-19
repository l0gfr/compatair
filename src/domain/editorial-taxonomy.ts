export const guideAudienceIds = ['particulier', 'professionnel'] as const;

export type GuideAudienceId = (typeof guideAudienceIds)[number];

export const guideAudiences: Record<GuideAudienceId, { label: string; title: string; seoTitle: string; description: string }> = {
	particulier: {
		label: 'Particuliers',
		title: 'Guides air comprimé pour les particuliers',
		seoTitle: 'Guides compresseur pour particuliers | CompatAir',
		description: 'Choisir un compresseur et vérifier un outil pour le garage, la rénovation, l’entretien et la peinture, sans déduire le débit utile de la taille de cuve.',
	},
	professionnel: {
		label: 'Professionnels',
		title: 'Guides air comprimé pour les professionnels',
		seoTitle: 'Guides air comprimé professionnels | CompatAir',
		description: 'Dimensionner un poste ou un réseau à partir des usages simultanés, des données fabricant, des pertes mesurées et des exigences de qualité d’air.',
	},
};

export const guideMetierIds = [
	'garage-automobile',
	'atelier-poids-lourds',
	'carrosserie-peinture',
	'menuiserie-agencement',
	'btp-chantier',
	'maintenance-industrielle',
] as const;

export type GuideMetierId = (typeof guideMetierIds)[number];

export const guideMetiers: Record<GuideMetierId, { label: string; title: string; seoTitle: string; description: string }> = {
	'garage-automobile': {
		label: 'Garage automobile',
		title: 'Air comprimé pour le garage automobile',
		seoTitle: 'Guides garage automobile et air comprimé | CompatAir',
		description: 'Relier chaque poste, outil et flexible à son besoin documenté, puis traiter la simultanéité et les pertes du réseau.',
	},
	'atelier-poids-lourds': {
		label: 'Atelier poids lourds',
		title: 'Air comprimé pour l’atelier poids lourds',
		seoTitle: 'Air comprimé pour atelier poids lourds | CompatAir',
		description: 'Dimensionner les postes roues, le gonflage et les outils à forte demande à partir des références exactes, des séquences de travail et des mesures sous débit.',
	},
	'carrosserie-peinture': {
		label: 'Carrosserie et peinture',
		title: 'Air comprimé pour la carrosserie et la peinture',
		seoTitle: 'Guides carrosserie et peinture | CompatAir',
		description: 'Vérifier séparément le débit du pistolet, sa pression dynamique et la qualité d’air requise au point d’utilisation.',
	},
	'menuiserie-agencement': {
		label: 'Menuiserie et agencement',
		title: 'Air comprimé pour la menuiserie et l’agencement',
		seoTitle: 'Guides air comprimé pour menuiserie | CompatAir',
		description: 'Dimensionner les usages de clouage, d’agrafage, de finition et d’atelier à partir des références réellement utilisées.',
	},
	'btp-chantier': {
		label: 'BTP et chantier',
		title: 'Air comprimé pour le BTP et le chantier',
		seoTitle: 'Air comprimé pour BTP et chantier | CompatAir',
		description: 'Relier outils percussifs, clouage et postes mobiles à une production réellement transportable, un flexible adapté et un plan de contrôle au point d’usage.',
	},
	'maintenance-industrielle': {
		label: 'Maintenance industrielle',
		title: 'Air comprimé pour la maintenance industrielle',
		seoTitle: 'Air comprimé maintenance industrielle | CompatAir',
		description: 'Documenter les usages, surveiller les pertes, organiser la maintenance et conserver une chaîne de preuve exploitable.',
	},
};

export function guideAudiencePath(audience: GuideAudienceId) {
	return `/guides/${guideAudiences[audience].label.toLocaleLowerCase('fr-FR')}/`;
}

export function guideMetierPath(metier: GuideMetierId) {
	return `/guides/metiers/${metier}/`;
}
