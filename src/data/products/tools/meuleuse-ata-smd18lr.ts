import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-ata-smd18lr",
	"slug": "meuleuse-ata-smd18lr",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "ATA SMD18LR",
	"brand": "ATA",
	"model": "SMD18LR",
	"mpn": "SMD18LR",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-ata-smd18lr.webp",
		"alt": "Repères techniques : ATA SMD18LR",
		"sourceUrl": "https://catalogue.atagroup.com/international/2022/1320/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ata-smd18lr",
		"label": "Référence SMD18LR",
		"distinguishingAttributes": {
			"reference": "SMD18LR",
			"Vitesse déclarée (tr/min)": "18,000",
			"Puissance déclarée (W)": "820"
		}
	},
	"editorial": {
		"overview": "ATA SMD18LR. La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques. Vitesse déclarée (tr/min) : 18,000. Puissance déclarée (W) : 820.",
		"verifiedFacts": [
			"Vitesse déclarée (tr/min) : 18,000.",
			"Puissance déclarée (W) : 820.",
			"Masse (kg) : 0.80.",
			"Longueur (mm) : 208.00.",
			"Hauteur (mm) : 46.00.",
			"Consommation publiée (m³/min), régime non précisé : 0.62.",
			"Niveau sonore déclaré, champ fabricant (dB(A)) : 75."
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
			"value": "18,000",
			"evidenceIds": [
				"october3c-tools-ata-page-1320-p1320"
			]
		},
		{
			"label": "Puissance déclarée (W)",
			"value": "820",
			"evidenceIds": [
				"october3c-tools-ata-page-1320-p1320"
			]
		},
		{
			"label": "Masse (kg)",
			"value": "0.80",
			"evidenceIds": [
				"october3c-tools-ata-page-1320-p1320"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "208.00",
			"evidenceIds": [
				"october3c-tools-ata-page-1320-p1320"
			]
		},
		{
			"label": "Hauteur (mm)",
			"value": "46.00",
			"evidenceIds": [
				"october3c-tools-ata-page-1320-p1320"
			]
		},
		{
			"label": "Consommation publiée (m³/min), régime non précisé",
			"value": "0.62",
			"evidenceIds": [
				"october3c-tools-ata-page-1320-p1320"
			]
		},
		{
			"label": "Niveau sonore déclaré, champ fabricant (dB(A))",
			"value": "75",
			"evidenceIds": [
				"october3c-tools-ata-page-1320-p1320"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page de cette référence ne donne pas le point de pression de la consommation.",
			"evidenceIds": [
				"october3c-tools-ata-page-1320-p1320"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "0.62 m3/min",
			"evidenceIds": [
				"october3c-tools-ata-page-1320-p1320"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-ata-page-1320-p1320",
			"sourceUrl": "https://catalogue.atagroup.com/international/2022/1320/",
			"sourceLabel": "ATA International Product Catalogue 2022/23, page 1320",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 14c0af1b516b8b0c33b761f721076bf44ff8732abbcfb0755d439a9382468735. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-ata-page-1320-p1320"
		],
		"workingPressureBar": [
			"october3c-tools-ata-page-1320-p1320"
		],
		"demandExplanation": [
			"october3c-tools-ata-page-1320-p1320"
		]
	},
	"notes": [
		"La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques."
	]
};

export default product;
