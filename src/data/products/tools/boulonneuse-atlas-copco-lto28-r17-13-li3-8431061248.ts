import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-atlas-copco-lto28-r17-13-li3-8431061248",
	"slug": "boulonneuse-atlas-copco-lto28-r17-13-li3-8431061248",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "Atlas Copco LTO28 R17-13-LI3 (réf. 8431061248)",
	"brand": "Atlas Copco",
	"model": "LTO28 R17-13-LI3",
	"mpn": "8431061248",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/boulonneuse-atlas-copco-lto28-r17-13-li3-8431061248.webp",
		"alt": "Repères techniques : Atlas Copco LTO28 R17-13-LI3 (réf. 8431061248)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lto28-r17-13-li3",
		"label": "Référence 8431061248",
		"distinguishingAttributes": {
			"reference": "8431061248",
			"Plage de couple publiée": "8-17 Nm",
			"Vitesse publiée": "350 tr/min"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LTO28 R17-13-LI3 (réf. 8431061248). Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Plage de couple publiée : 8-17 Nm. Vitesse publiée : 350 tr/min.",
		"verifiedFacts": [
			"Plage de couple publiée : 8-17 Nm.",
			"Vitesse publiée : 350 tr/min.",
			"Masse publiée : 1.9 kg.",
			"Longueur : 415 mm.",
			"Ouverture de tête A/F : 13 mm."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Plage de couple publiée",
			"value": "8-17 Nm",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p39"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "350 tr/min",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p39"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.9 kg",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p39"
			]
		},
		{
			"label": "Longueur",
			"value": "415 mm",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p39"
			]
		},
		{
			"label": "Ouverture de tête A/F",
			"value": "13 mm",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p39"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression non établie dans le tableau sans consommation.",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p39"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-atlas-industrial-p39",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf#page=39",
			"sourceLabel": "Industrial Tools and Solutions, catalogue fabricant Atlas Copco, édition identifiée par empreinte, page PDF 39",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 03eb69cef54f9a52be2a2bd73342620448907b5706ed365db2b3c8a4ca9d3617. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-atlas-industrial-p39"
		],
		"workingPressureBar": [
			"october2-tools-atlas-industrial-p39"
		],
		"demandExplanation": [
			"october2-tools-atlas-industrial-p39"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
