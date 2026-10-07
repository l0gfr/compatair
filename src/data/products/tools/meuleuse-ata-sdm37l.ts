import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-ata-sdm37l",
	"slug": "meuleuse-ata-sdm37l",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "ATA SDM37L",
	"brand": "ATA",
	"model": "SDM37L",
	"mpn": "SDM37L",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-ata-sdm37l.webp",
		"alt": "Repères techniques : ATA SDM37L",
		"sourceUrl": "https://catalogue.atagroup.com/international/2022/1318/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ata-sdm37l",
		"label": "Référence SDM37L",
		"distinguishingAttributes": {
			"reference": "SDM37L",
			"Vitesse déclarée (tr/min)": "37,000",
			"Puissance déclarée (W)": "300"
		}
	},
	"editorial": {
		"overview": "ATA SDM37L. La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques. Vitesse déclarée (tr/min) : 37,000. Puissance déclarée (W) : 300.",
		"verifiedFacts": [
			"Vitesse déclarée (tr/min) : 37,000.",
			"Puissance déclarée (W) : 300.",
			"Masse (kg) : 0.52.",
			"Longueur (mm) : 167.00.",
			"Hauteur (mm) : 37.00.",
			"Consommation publiée (m³/min), régime non précisé : 0.57.",
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
			"value": "37,000",
			"evidenceIds": [
				"october3c-tools-ata-page-1318-p1318"
			]
		},
		{
			"label": "Puissance déclarée (W)",
			"value": "300",
			"evidenceIds": [
				"october3c-tools-ata-page-1318-p1318"
			]
		},
		{
			"label": "Masse (kg)",
			"value": "0.52",
			"evidenceIds": [
				"october3c-tools-ata-page-1318-p1318"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "167.00",
			"evidenceIds": [
				"october3c-tools-ata-page-1318-p1318"
			]
		},
		{
			"label": "Hauteur (mm)",
			"value": "37.00",
			"evidenceIds": [
				"october3c-tools-ata-page-1318-p1318"
			]
		},
		{
			"label": "Consommation publiée (m³/min), régime non précisé",
			"value": "0.57",
			"evidenceIds": [
				"october3c-tools-ata-page-1318-p1318"
			]
		},
		{
			"label": "Niveau sonore déclaré, champ fabricant (dB(A))",
			"value": "75",
			"evidenceIds": [
				"october3c-tools-ata-page-1318-p1318"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page de cette référence ne donne pas le point de pression de la consommation.",
			"evidenceIds": [
				"october3c-tools-ata-page-1318-p1318"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "0.57 m3/min",
			"evidenceIds": [
				"october3c-tools-ata-page-1318-p1318"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-ata-page-1318-p1318",
			"sourceUrl": "https://catalogue.atagroup.com/international/2022/1318/",
			"sourceLabel": "ATA International Product Catalogue 2022/23, page 1318",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 921063144e05c801cffd0bd399ffd8f88d07d298152595b2085cd96c105177e6. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-ata-page-1318-p1318"
		],
		"workingPressureBar": [
			"october3c-tools-ata-page-1318-p1318"
		],
		"demandExplanation": [
			"october3c-tools-ata-page-1318-p1318"
		]
	},
	"notes": [
		"La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques."
	]
};

export default product;
