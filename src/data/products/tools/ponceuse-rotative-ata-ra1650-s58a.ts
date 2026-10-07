import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-ata-ra1650-s58a",
	"slug": "ponceuse-rotative-ata-ra1650-s58a",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "ATA RA1650-S58A",
	"brand": "ATA",
	"model": "RA1650-S58A",
	"mpn": "RA1650-S58A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-ata-ra1650-s58a.webp",
		"alt": "Repères techniques : ATA RA1650-S58A",
		"sourceUrl": "https://catalogue.atagroup.com/international/2022/1339/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ata-ra1650-s58a",
		"label": "Référence RA1650-S58A",
		"distinguishingAttributes": {
			"reference": "RA1650-S58A",
			"Vitesse déclarée (tr/min)": "12,000",
			"Puissance déclarée (W)": "1650"
		}
	},
	"editorial": {
		"overview": "ATA RA1650-S58A. La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques. Vitesse déclarée (tr/min) : 12,000. Puissance déclarée (W) : 1650.",
		"verifiedFacts": [
			"Vitesse déclarée (tr/min) : 12,000.",
			"Puissance déclarée (W) : 1650.",
			"Masse (kg) : 1.92.",
			"Longueur (mm) : 217.00.",
			"Hauteur (mm) : 89.00.",
			"Consommation publiée (m³/min), régime non précisé : 0.99.",
			"Niveau sonore déclaré, champ fabricant (dB(A)) : 91."
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
				"october3c-tools-ata-page-1339-p1339"
			]
		},
		{
			"label": "Puissance déclarée (W)",
			"value": "1650",
			"evidenceIds": [
				"october3c-tools-ata-page-1339-p1339"
			]
		},
		{
			"label": "Masse (kg)",
			"value": "1.92",
			"evidenceIds": [
				"october3c-tools-ata-page-1339-p1339"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "217.00",
			"evidenceIds": [
				"october3c-tools-ata-page-1339-p1339"
			]
		},
		{
			"label": "Hauteur (mm)",
			"value": "89.00",
			"evidenceIds": [
				"october3c-tools-ata-page-1339-p1339"
			]
		},
		{
			"label": "Consommation publiée (m³/min), régime non précisé",
			"value": "0.99",
			"evidenceIds": [
				"october3c-tools-ata-page-1339-p1339"
			]
		},
		{
			"label": "Niveau sonore déclaré, champ fabricant (dB(A))",
			"value": "91",
			"evidenceIds": [
				"october3c-tools-ata-page-1339-p1339"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page de cette référence ne donne pas le point de pression de la consommation.",
			"evidenceIds": [
				"october3c-tools-ata-page-1339-p1339"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "0.99 m3/min",
			"evidenceIds": [
				"october3c-tools-ata-page-1339-p1339"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-ata-page-1339-p1339",
			"sourceUrl": "https://catalogue.atagroup.com/international/2022/1339/",
			"sourceLabel": "ATA International Product Catalogue 2022/23, page 1339",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 2846c3ebfda98c7200e433690faf041b4535647775a89eb61ec2130ff7138230. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-ata-page-1339-p1339"
		],
		"workingPressureBar": [
			"october3c-tools-ata-page-1339-p1339"
		],
		"demandExplanation": [
			"october3c-tools-ata-page-1339-p1339"
		]
	},
	"notes": [
		"La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques."
	]
};

export default product;
