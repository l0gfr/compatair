import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-ata-ra14-125ds1",
	"slug": "meuleuse-ata-ra14-125ds1",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "ATA RA14-125DS1",
	"brand": "ATA",
	"model": "RA14-125DS1",
	"mpn": "RA14-125DS1",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-ata-ra14-125ds1.webp",
		"alt": "Repères techniques : ATA RA14-125DS1",
		"sourceUrl": "https://catalogue.atagroup.com/international/2022/1327/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ata-ra14-125ds1",
		"label": "Référence RA14-125DS1",
		"distinguishingAttributes": {
			"reference": "RA14-125DS1",
			"Vitesse déclarée (tr/min)": "12,000",
			"Puissance déclarée (W)": "1100"
		}
	},
	"editorial": {
		"overview": "ATA RA14-125DS1. La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques. Vitesse déclarée (tr/min) : 12,000. Puissance déclarée (W) : 1100.",
		"verifiedFacts": [
			"Vitesse déclarée (tr/min) : 12,000.",
			"Puissance déclarée (W) : 1100.",
			"Masse (kg) : 1.90.",
			"Longueur (mm) : 261.00.",
			"Hauteur (mm) : 96.00.",
			"Consommation publiée (m³/min), régime non précisé : 1.13.",
			"Niveau sonore déclaré, champ fabricant (dB(A)) : 79."
		],
		"limitations": [
			"La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques.",
			"Édition 2022/23 publiée par ATA ; la disponibilité actuelle reste à confirmer.",
			"La consommation ne précise pas de régime en charge et la page ne fixe pas sa pression de mesure. Les conversions d’unité restent documentaires, sans débit de compatibilité confirmé.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse déclarée (tr/min)",
			"value": "12,000",
			"evidenceIds": [
				"october3c-tools-ata-page-1327-p1327"
			]
		},
		{
			"label": "Puissance déclarée (W)",
			"value": "1100",
			"evidenceIds": [
				"october3c-tools-ata-page-1327-p1327"
			]
		},
		{
			"label": "Masse (kg)",
			"value": "1.90",
			"evidenceIds": [
				"october3c-tools-ata-page-1327-p1327"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "261.00",
			"evidenceIds": [
				"october3c-tools-ata-page-1327-p1327"
			]
		},
		{
			"label": "Hauteur (mm)",
			"value": "96.00",
			"evidenceIds": [
				"october3c-tools-ata-page-1327-p1327"
			]
		},
		{
			"label": "Consommation publiée (m³/min), régime non précisé",
			"value": "1.13",
			"evidenceIds": [
				"october3c-tools-ata-page-1327-p1327"
			]
		},
		{
			"label": "Niveau sonore déclaré, champ fabricant (dB(A))",
			"value": "79",
			"evidenceIds": [
				"october3c-tools-ata-page-1327-p1327"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page de cette référence ne donne pas le point de pression de la consommation.",
			"evidenceIds": [
				"october3c-tools-ata-page-1327-p1327"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "1.13 m3/min",
			"evidenceIds": [
				"october3c-tools-ata-page-1327-p1327"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-ata-page-1327-p1327",
			"sourceUrl": "https://catalogue.atagroup.com/international/2022/1327/",
			"sourceLabel": "ATA International Product Catalogue 2022/23, page 1327",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 3bfe2f66adc928f2c6ecbee404ec37f57cca785bef1f81dbed27689232550e09. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-ata-page-1327-p1327"
		],
		"workingPressureBar": [
			"october3c-tools-ata-page-1327-p1327"
		],
		"demandExplanation": [
			"october3c-tools-ata-page-1327-p1327"
		]
	},
	"notes": [
		"La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques."
	]
};

export default product;
