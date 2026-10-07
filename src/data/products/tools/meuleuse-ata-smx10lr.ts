import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-ata-smx10lr",
	"slug": "meuleuse-ata-smx10lr",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "ATA SMX10LR",
	"brand": "ATA",
	"model": "SMX10LR",
	"mpn": "SMX10LR",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-ata-smx10lr.webp",
		"alt": "Repères techniques : ATA SMX10LR",
		"sourceUrl": "https://catalogue.atagroup.com/international/2022/1322/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ata-smx10lr",
		"label": "Référence SMX10LR",
		"distinguishingAttributes": {
			"reference": "SMX10LR",
			"Vitesse déclarée (tr/min)": "10,000",
			"Puissance déclarée (W)": "820"
		}
	},
	"editorial": {
		"overview": "ATA SMX10LR. La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques. Vitesse déclarée (tr/min) : 10,000. Puissance déclarée (W) : 820.",
		"verifiedFacts": [
			"Vitesse déclarée (tr/min) : 10,000.",
			"Puissance déclarée (W) : 820.",
			"Masse (kg) : 1.30.",
			"Longueur (mm) : 345.00.",
			"Hauteur (mm) : 40.00.",
			"Consommation publiée (m³/min), régime non précisé : 0.62.",
			"Niveau sonore déclaré, champ fabricant (dB(A)) : 74."
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
			"value": "10,000",
			"evidenceIds": [
				"october3c-tools-ata-page-1322-p1322"
			]
		},
		{
			"label": "Puissance déclarée (W)",
			"value": "820",
			"evidenceIds": [
				"october3c-tools-ata-page-1322-p1322"
			]
		},
		{
			"label": "Masse (kg)",
			"value": "1.30",
			"evidenceIds": [
				"october3c-tools-ata-page-1322-p1322"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "345.00",
			"evidenceIds": [
				"october3c-tools-ata-page-1322-p1322"
			]
		},
		{
			"label": "Hauteur (mm)",
			"value": "40.00",
			"evidenceIds": [
				"october3c-tools-ata-page-1322-p1322"
			]
		},
		{
			"label": "Consommation publiée (m³/min), régime non précisé",
			"value": "0.62",
			"evidenceIds": [
				"october3c-tools-ata-page-1322-p1322"
			]
		},
		{
			"label": "Niveau sonore déclaré, champ fabricant (dB(A))",
			"value": "74",
			"evidenceIds": [
				"october3c-tools-ata-page-1322-p1322"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page de cette référence ne donne pas le point de pression de la consommation.",
			"evidenceIds": [
				"october3c-tools-ata-page-1322-p1322"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "0.62 m3/min",
			"evidenceIds": [
				"october3c-tools-ata-page-1322-p1322"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-ata-page-1322-p1322",
			"sourceUrl": "https://catalogue.atagroup.com/international/2022/1322/",
			"sourceLabel": "ATA International Product Catalogue 2022/23, page 1322",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9a2691bb2b106f72b8c18e6d653c1222c47f992f3936d6880a6f02a2d75385fd. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-ata-page-1322-p1322"
		],
		"workingPressureBar": [
			"october3c-tools-ata-page-1322-p1322"
		],
		"demandExplanation": [
			"october3c-tools-ata-page-1322-p1322"
		]
	},
	"notes": [
		"La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques."
	]
};

export default product;
