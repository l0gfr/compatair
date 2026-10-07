import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-ata-spm45r",
	"slug": "meuleuse-ata-spm45r",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "ATA SPM45R",
	"brand": "ATA",
	"model": "SPM45R",
	"mpn": "SPM45R",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-ata-spm45r.webp",
		"alt": "Repères techniques : ATA SPM45R",
		"sourceUrl": "https://catalogue.atagroup.com/international/2022/1313/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ata-spm45r",
		"label": "Référence SPM45R",
		"distinguishingAttributes": {
			"reference": "SPM45R",
			"Vitesse déclarée (tr/min)": "45,000",
			"Puissance déclarée (W)": "85"
		}
	},
	"editorial": {
		"overview": "ATA SPM45R. La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques. Vitesse déclarée (tr/min) : 45,000. Puissance déclarée (W) : 85.",
		"verifiedFacts": [
			"Vitesse déclarée (tr/min) : 45,000.",
			"Puissance déclarée (W) : 85.",
			"Masse (kg) : 0.17.",
			"Longueur (mm) : 135.00.",
			"Hauteur (mm) : 22.00.",
			"Consommation publiée (m³/min), régime non précisé : 0.23.",
			"Niveau sonore déclaré, champ fabricant (dB(A)) : 68."
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
			"value": "45,000",
			"evidenceIds": [
				"october3c-tools-ata-page-1313-p1313"
			]
		},
		{
			"label": "Puissance déclarée (W)",
			"value": "85",
			"evidenceIds": [
				"october3c-tools-ata-page-1313-p1313"
			]
		},
		{
			"label": "Masse (kg)",
			"value": "0.17",
			"evidenceIds": [
				"october3c-tools-ata-page-1313-p1313"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "135.00",
			"evidenceIds": [
				"october3c-tools-ata-page-1313-p1313"
			]
		},
		{
			"label": "Hauteur (mm)",
			"value": "22.00",
			"evidenceIds": [
				"october3c-tools-ata-page-1313-p1313"
			]
		},
		{
			"label": "Consommation publiée (m³/min), régime non précisé",
			"value": "0.23",
			"evidenceIds": [
				"october3c-tools-ata-page-1313-p1313"
			]
		},
		{
			"label": "Niveau sonore déclaré, champ fabricant (dB(A))",
			"value": "68",
			"evidenceIds": [
				"october3c-tools-ata-page-1313-p1313"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La page de cette référence ne donne pas le point de pression de la consommation.",
			"evidenceIds": [
				"october3c-tools-ata-page-1313-p1313"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "0.23 m3/min",
			"evidenceIds": [
				"october3c-tools-ata-page-1313-p1313"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-ata-page-1313-p1313",
			"sourceUrl": "https://catalogue.atagroup.com/international/2022/1313/",
			"sourceLabel": "ATA International Product Catalogue 2022/23, page 1313",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c52ff9fb3800227bad93451023adb6c80249199d57f13425004f2db2bb283471. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-ata-page-1313-p1313"
		],
		"workingPressureBar": [
			"october3c-tools-ata-page-1313-p1313"
		],
		"demandExplanation": [
			"october3c-tools-ata-page-1313-p1313"
		]
	},
	"notes": [
		"La consommation du modèle est publiée sans régime et sans pression de mesure. Aucun débit en charge n’est établi à partir de ces seules caractéristiques."
	]
};

export default product;
