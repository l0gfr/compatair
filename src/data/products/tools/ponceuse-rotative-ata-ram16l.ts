import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-ata-ram16l",
	"slug": "ponceuse-rotative-ata-ram16l",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "ATA RAM16L",
	"brand": "ATA",
	"model": "RAM16L",
	"mpn": "RAM16L",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-ata-ram16l.webp",
		"alt": "Repères techniques : ATA RAM16L",
		"sourceUrl": "https://catalogue.atagroup.com/international/2022/1336/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ata-ram16l",
		"label": "Référence RAM16L",
		"distinguishingAttributes": {
			"reference": "RAM16L",
			"Vitesse déclarée (tr/min)": "16,000",
			"Puissance déclarée (W)": "370"
		}
	},
	"editorial": {
		"overview": "ATA RAM16L. La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques. Vitesse déclarée (tr/min) : 16,000. Puissance déclarée (W) : 370.",
		"verifiedFacts": [
			"Vitesse déclarée (tr/min) : 16,000.",
			"Puissance déclarée (W) : 370.",
			"Masse (kg) : 1.30.",
			"Longueur (mm) : 177.00.",
			"Hauteur (mm) : 175.00.",
			"Consommation publiée (m³/min), régime non précisé : 0.60.",
			"Niveau sonore déclaré, champ fabricant (dB(A)) : 73."
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
			"value": "16,000",
			"evidenceIds": [
				"october3c-tools-ata-page-1336-p1336"
			]
		},
		{
			"label": "Puissance déclarée (W)",
			"value": "370",
			"evidenceIds": [
				"october3c-tools-ata-page-1336-p1336"
			]
		},
		{
			"label": "Masse (kg)",
			"value": "1.30",
			"evidenceIds": [
				"october3c-tools-ata-page-1336-p1336"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "177.00",
			"evidenceIds": [
				"october3c-tools-ata-page-1336-p1336"
			]
		},
		{
			"label": "Hauteur (mm)",
			"value": "175.00",
			"evidenceIds": [
				"october3c-tools-ata-page-1336-p1336"
			]
		},
		{
			"label": "Consommation publiée (m³/min), régime non précisé",
			"value": "0.60",
			"evidenceIds": [
				"october3c-tools-ata-page-1336-p1336"
			]
		},
		{
			"label": "Niveau sonore déclaré, champ fabricant (dB(A))",
			"value": "73",
			"evidenceIds": [
				"october3c-tools-ata-page-1336-p1336"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page de cette référence ne donne pas le point de pression de la consommation.",
			"evidenceIds": [
				"october3c-tools-ata-page-1336-p1336"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "0.60 m3/min",
			"evidenceIds": [
				"october3c-tools-ata-page-1336-p1336"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-ata-page-1336-p1336",
			"sourceUrl": "https://catalogue.atagroup.com/international/2022/1336/",
			"sourceLabel": "ATA International Product Catalogue 2022/23, page 1336",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 48caf6348df9490ec2dcb4045ac03c12b592ec222d9bb5a355473bb209c5be40. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-ata-page-1336-p1336"
		],
		"workingPressureBar": [
			"october3c-tools-ata-page-1336-p1336"
		],
		"demandExplanation": [
			"october3c-tools-ata-page-1336-p1336"
		]
	},
	"notes": [
		"La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques."
	]
};

export default product;
