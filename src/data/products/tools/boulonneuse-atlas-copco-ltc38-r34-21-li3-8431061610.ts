import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-atlas-copco-ltc38-r34-21-li3-8431061610",
	"slug": "boulonneuse-atlas-copco-ltc38-r34-21-li3-8431061610",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "Atlas Copco LTC38 R34-21-LI3 (réf. 8431061610)",
	"brand": "Atlas Copco",
	"model": "LTC38 R34-21-LI3",
	"mpn": "8431061610",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/boulonneuse-atlas-copco-ltc38-r34-21-li3-8431061610.webp",
		"alt": "Repères techniques : Atlas Copco LTC38 R34-21-LI3 (réf. 8431061610)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-ltc38-r34-21-li3",
		"label": "Référence 8431061610",
		"distinguishingAttributes": {
			"reference": "8431061610",
			"Plage de couple publiée": "16-34 Nm",
			"Vitesse publiée": "390 tr/min"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LTC38 R34-21-LI3 (réf. 8431061610). Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Plage de couple publiée : 16-34 Nm. Vitesse publiée : 390 tr/min.",
		"verifiedFacts": [
			"Plage de couple publiée : 16-34 Nm.",
			"Vitesse publiée : 390 tr/min.",
			"Masse publiée : 3.7 kg.",
			"Longueur : 578 mm.",
			"Ouverture de tête A/F : 21 mm."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Plage de couple publiée",
			"value": "16-34 Nm",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p38"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "390 tr/min",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p38"
			]
		},
		{
			"label": "Masse publiée",
			"value": "3.7 kg",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p38"
			]
		},
		{
			"label": "Longueur",
			"value": "578 mm",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p38"
			]
		},
		{
			"label": "Ouverture de tête A/F",
			"value": "21 mm",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p38"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression non établie dans le tableau sans consommation.",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p38"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-atlas-industrial-p38",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf#page=38",
			"sourceLabel": "Industrial Tools and Solutions, catalogue fabricant Atlas Copco, édition identifiée par empreinte, page PDF 38",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 03eb69cef54f9a52be2a2bd73342620448907b5706ed365db2b3c8a4ca9d3617. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-atlas-industrial-p38"
		],
		"workingPressureBar": [
			"october2-tools-atlas-industrial-p38"
		],
		"demandExplanation": [
			"october2-tools-atlas-industrial-p38"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
