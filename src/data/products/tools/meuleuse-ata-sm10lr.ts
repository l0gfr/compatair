import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-ata-sm10lr",
	"slug": "meuleuse-ata-sm10lr",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "ATA SM10LR",
	"brand": "ATA",
	"model": "SM10LR",
	"mpn": "SM10LR",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-ata-sm10lr.webp",
		"alt": "Repères techniques : ATA SM10LR",
		"sourceUrl": "https://catalogue.atagroup.com/international/2022/1321/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ata-sm10lr",
		"label": "Référence SM10LR",
		"distinguishingAttributes": {
			"reference": "SM10LR",
			"Vitesse déclarée (tr/min)": "10,000",
			"Puissance déclarée (W)": "820"
		}
	},
	"editorial": {
		"overview": "ATA SM10LR. La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques. Vitesse déclarée (tr/min) : 10,000. Puissance déclarée (W) : 820.",
		"verifiedFacts": [
			"Vitesse déclarée (tr/min) : 10,000.",
			"Puissance déclarée (W) : 820.",
			"Masse (kg) : 0.73.",
			"Longueur (mm) : 213.00.",
			"Hauteur (mm) : 40.00.",
			"Consommation publiée (m³/min), régime non précisé : 0.62.",
			"Niveau sonore déclaré, champ fabricant (dB(A)) : 77."
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
				"october3c-tools-ata-page-1321-p1321"
			]
		},
		{
			"label": "Puissance déclarée (W)",
			"value": "820",
			"evidenceIds": [
				"october3c-tools-ata-page-1321-p1321"
			]
		},
		{
			"label": "Masse (kg)",
			"value": "0.73",
			"evidenceIds": [
				"october3c-tools-ata-page-1321-p1321"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "213.00",
			"evidenceIds": [
				"october3c-tools-ata-page-1321-p1321"
			]
		},
		{
			"label": "Hauteur (mm)",
			"value": "40.00",
			"evidenceIds": [
				"october3c-tools-ata-page-1321-p1321"
			]
		},
		{
			"label": "Consommation publiée (m³/min), régime non précisé",
			"value": "0.62",
			"evidenceIds": [
				"october3c-tools-ata-page-1321-p1321"
			]
		},
		{
			"label": "Niveau sonore déclaré, champ fabricant (dB(A))",
			"value": "77",
			"evidenceIds": [
				"october3c-tools-ata-page-1321-p1321"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page de cette référence ne donne pas le point de pression de la consommation.",
			"evidenceIds": [
				"october3c-tools-ata-page-1321-p1321"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "0.62 m3/min",
			"evidenceIds": [
				"october3c-tools-ata-page-1321-p1321"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-ata-page-1321-p1321",
			"sourceUrl": "https://catalogue.atagroup.com/international/2022/1321/",
			"sourceLabel": "ATA International Product Catalogue 2022/23, page 1321",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 1c2d6581ca20cd37afae5fe5ce74d70e92e3add8546933a095ce4372213bc3da. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-ata-page-1321-p1321"
		],
		"workingPressureBar": [
			"october3c-tools-ata-page-1321-p1321"
		],
		"demandExplanation": [
			"october3c-tools-ata-page-1321-p1321"
		]
	},
	"notes": [
		"La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques."
	]
};

export default product;
