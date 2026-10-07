import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-ata-ra12m-sm14",
	"slug": "ponceuse-rotative-ata-ra12m-sm14",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "ATA RA12M-SM14",
	"brand": "ATA",
	"model": "RA12M-SM14",
	"mpn": "RA12M-SM14",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-ata-ra12m-sm14.webp",
		"alt": "Repères techniques : ATA RA12M-SM14",
		"sourceUrl": "https://catalogue.atagroup.com/international/2022/1338/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ata-ra12m-sm14",
		"label": "Référence RA12M-SM14",
		"distinguishingAttributes": {
			"reference": "RA12M-SM14",
			"Vitesse déclarée (tr/min)": "12,000",
			"Puissance déclarée (W)": "675"
		}
	},
	"editorial": {
		"overview": "ATA RA12M-SM14. La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques. Vitesse déclarée (tr/min) : 12,000. Puissance déclarée (W) : 675.",
		"verifiedFacts": [
			"Vitesse déclarée (tr/min) : 12,000.",
			"Puissance déclarée (W) : 675.",
			"Masse (kg) : 1.19.",
			"Longueur (mm) : 206.",
			"Hauteur (mm) : 71.",
			"Consommation publiée (m³/min), régime non précisé : 0.71.",
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
			"value": "12,000",
			"evidenceIds": [
				"october3c-tools-ata-page-1338-p1338"
			]
		},
		{
			"label": "Puissance déclarée (W)",
			"value": "675",
			"evidenceIds": [
				"october3c-tools-ata-page-1338-p1338"
			]
		},
		{
			"label": "Masse (kg)",
			"value": "1.19",
			"evidenceIds": [
				"october3c-tools-ata-page-1338-p1338"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "206",
			"evidenceIds": [
				"october3c-tools-ata-page-1338-p1338"
			]
		},
		{
			"label": "Hauteur (mm)",
			"value": "71",
			"evidenceIds": [
				"october3c-tools-ata-page-1338-p1338"
			]
		},
		{
			"label": "Consommation publiée (m³/min), régime non précisé",
			"value": "0.71",
			"evidenceIds": [
				"october3c-tools-ata-page-1338-p1338"
			]
		},
		{
			"label": "Niveau sonore déclaré, champ fabricant (dB(A))",
			"value": "77",
			"evidenceIds": [
				"october3c-tools-ata-page-1338-p1338"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page de cette référence ne donne pas le point de pression de la consommation.",
			"evidenceIds": [
				"october3c-tools-ata-page-1338-p1338"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "0.71 m3/min",
			"evidenceIds": [
				"october3c-tools-ata-page-1338-p1338"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-ata-page-1338-p1338",
			"sourceUrl": "https://catalogue.atagroup.com/international/2022/1338/",
			"sourceLabel": "ATA International Product Catalogue 2022/23, page 1338",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : bc719937beb9addb14de0a1f476f6d84490eeb510543c2cb7fa57f2eb141a694. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-ata-page-1338-p1338"
		],
		"workingPressureBar": [
			"october3c-tools-ata-page-1338-p1338"
		],
		"demandExplanation": [
			"october3c-tools-ata-page-1338-p1338"
		]
	},
	"notes": [
		"La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques."
	]
};

export default product;
