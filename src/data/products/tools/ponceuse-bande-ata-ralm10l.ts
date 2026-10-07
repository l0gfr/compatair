import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-bande-ata-ralm10l",
	"slug": "ponceuse-bande-ata-ralm10l",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "ATA RALM10L",
	"brand": "ATA",
	"model": "RALM10L",
	"mpn": "RALM10L",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-bande-ata-ralm10l.webp",
		"alt": "Repères techniques : ATA RALM10L",
		"sourceUrl": "https://catalogue.atagroup.com/international/2022/1344/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ata-ralm10l",
		"label": "Référence RALM10L",
		"distinguishingAttributes": {
			"reference": "RALM10L",
			"Vitesse déclarée (tr/min)": "12,000",
			"Puissance déclarée (W)": "300"
		}
	},
	"editorial": {
		"overview": "ATA RALM10L. La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques. Vitesse déclarée (tr/min) : 12,000. Puissance déclarée (W) : 300.",
		"verifiedFacts": [
			"Vitesse déclarée (tr/min) : 12,000.",
			"Puissance déclarée (W) : 300.",
			"Masse (kg) : 0.79.",
			"Longueur (mm) : 278.00.",
			"Hauteur (mm) : 79.00.",
			"Consommation publiée (m³/min), régime non précisé : 0.57.",
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
			"value": "12,000",
			"evidenceIds": [
				"october3c-tools-ata-page-1344-p1344"
			]
		},
		{
			"label": "Puissance déclarée (W)",
			"value": "300",
			"evidenceIds": [
				"october3c-tools-ata-page-1344-p1344"
			]
		},
		{
			"label": "Masse (kg)",
			"value": "0.79",
			"evidenceIds": [
				"october3c-tools-ata-page-1344-p1344"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "278.00",
			"evidenceIds": [
				"october3c-tools-ata-page-1344-p1344"
			]
		},
		{
			"label": "Hauteur (mm)",
			"value": "79.00",
			"evidenceIds": [
				"october3c-tools-ata-page-1344-p1344"
			]
		},
		{
			"label": "Consommation publiée (m³/min), régime non précisé",
			"value": "0.57",
			"evidenceIds": [
				"october3c-tools-ata-page-1344-p1344"
			]
		},
		{
			"label": "Niveau sonore déclaré, champ fabricant (dB(A))",
			"value": "74",
			"evidenceIds": [
				"october3c-tools-ata-page-1344-p1344"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page de cette référence ne donne pas le point de pression de la consommation.",
			"evidenceIds": [
				"october3c-tools-ata-page-1344-p1344"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "0.57 m3/min",
			"evidenceIds": [
				"october3c-tools-ata-page-1344-p1344"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-ata-page-1344-p1344",
			"sourceUrl": "https://catalogue.atagroup.com/international/2022/1344/",
			"sourceLabel": "ATA International Product Catalogue 2022/23, page 1344",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b705ee512cb2a95d37566288f688fc0a4a068824e94d31f1921971e7c40c00c8. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-ata-page-1344-p1344"
		],
		"workingPressureBar": [
			"october3c-tools-ata-page-1344-p1344"
		],
		"demandExplanation": [
			"october3c-tools-ata-page-1344-p1344"
		]
	},
	"notes": [
		"La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques."
	]
};

export default product;
