import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-ata-rpm25r",
	"slug": "ponceuse-rotative-ata-rpm25r",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "ATA RPM25R",
	"brand": "ATA",
	"model": "RPM25R",
	"mpn": "RPM25R",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-ata-rpm25r.webp",
		"alt": "Repères techniques : ATA RPM25R",
		"sourceUrl": "https://catalogue.atagroup.com/international/2022/1314/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ata-rpm25r",
		"label": "Référence RPM25R",
		"distinguishingAttributes": {
			"reference": "RPM25R",
			"Vitesse déclarée (tr/min)": "25,000",
			"Puissance déclarée (W)": "85"
		}
	},
	"editorial": {
		"overview": "ATA RPM25R. La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques. Vitesse déclarée (tr/min) : 25,000. Puissance déclarée (W) : 85.",
		"verifiedFacts": [
			"Vitesse déclarée (tr/min) : 25,000.",
			"Puissance déclarée (W) : 85.",
			"Masse (kg) : 0.23.",
			"Longueur (mm) : 141.00.",
			"Hauteur (mm) : 33.50.",
			"Consommation publiée (m³/min), régime non précisé : 0.23.",
			"Niveau sonore déclaré, champ fabricant (dB(A)) : 69."
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
			"value": "25,000",
			"evidenceIds": [
				"october3c-tools-ata-page-1314-p1314"
			]
		},
		{
			"label": "Puissance déclarée (W)",
			"value": "85",
			"evidenceIds": [
				"october3c-tools-ata-page-1314-p1314"
			]
		},
		{
			"label": "Masse (kg)",
			"value": "0.23",
			"evidenceIds": [
				"october3c-tools-ata-page-1314-p1314"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "141.00",
			"evidenceIds": [
				"october3c-tools-ata-page-1314-p1314"
			]
		},
		{
			"label": "Hauteur (mm)",
			"value": "33.50",
			"evidenceIds": [
				"october3c-tools-ata-page-1314-p1314"
			]
		},
		{
			"label": "Consommation publiée (m³/min), régime non précisé",
			"value": "0.23",
			"evidenceIds": [
				"october3c-tools-ata-page-1314-p1314"
			]
		},
		{
			"label": "Niveau sonore déclaré, champ fabricant (dB(A))",
			"value": "69",
			"evidenceIds": [
				"october3c-tools-ata-page-1314-p1314"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page de cette référence ne donne pas le point de pression de la consommation.",
			"evidenceIds": [
				"october3c-tools-ata-page-1314-p1314"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "0.23 m3/min",
			"evidenceIds": [
				"october3c-tools-ata-page-1314-p1314"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-ata-page-1314-p1314",
			"sourceUrl": "https://catalogue.atagroup.com/international/2022/1314/",
			"sourceLabel": "ATA International Product Catalogue 2022/23, page 1314",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 31a004cded5637b7f169f101b85ca78f9b53bebe126e90fce482be26772d58e5. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-ata-page-1314-p1314"
		],
		"workingPressureBar": [
			"october3c-tools-ata-page-1314-p1314"
		],
		"demandExplanation": [
			"october3c-tools-ata-page-1314-p1314"
		]
	},
	"notes": [
		"La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques."
	]
};

export default product;
