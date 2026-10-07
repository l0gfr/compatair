import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-atlas-copco-twist12-hrf4-8431026940",
	"slug": "visseuse-atlas-copco-twist12-hrf4-8431026940",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Atlas Copco TWIST12 HRF4 (réf. 8431026940)",
	"brand": "Atlas Copco",
	"model": "TWIST12 HRF4",
	"mpn": "8431026940",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 390,
		"typical": 390,
		"max": 390
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-atlas-copco-twist12-hrf4-8431026940.webp",
		"alt": "Repères techniques : Atlas Copco TWIST12 HRF4 (réf. 8431026940)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-twist12-hrf4",
		"label": "Référence 8431026940",
		"distinguishingAttributes": {
			"reference": "8431026940",
			"Plage de couple sur assemblage tendre": "0.5-4.4 Nm",
			"Vitesse à vide": "850 tr/min"
		}
	},
	"editorial": {
		"overview": "Atlas Copco TWIST12 HRF4 (réf. 8431026940). Consommation maximale : 390 L/min à 6,3 bar. Plage de couple sur assemblage tendre : 0.5-4.4 Nm. Vitesse à vide : 850 tr/min.",
		"verifiedFacts": [
			"Plage de couple sur assemblage tendre : 0.5-4.4 Nm.",
			"Vitesse à vide : 850 tr/min.",
			"Masse publiée : 0.7 kg.",
			"Longueur : 200 mm.",
			"Tuyau recommandé : 6 mm."
		],
		"limitations": [
			"La consommation maximale est déclarée dans les conventions du fabricant ; les exceptions explicites du modèle restent prioritaires.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Plage de couple sur assemblage tendre",
			"value": "0.5-4.4 Nm",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p13"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "850 tr/min",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p13"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.7 kg",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p13"
			]
		},
		{
			"label": "Longueur",
			"value": "200 mm",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p13"
			]
		},
		{
			"label": "Tuyau recommandé",
			"value": "6 mm",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p13"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "6.3 bar : point de consommation maximale déclaré dans les conventions fabricant, page PDF 4, sauf exception explicite.",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p13",
				"october2-tools-atlas-industrial-p4"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "6.5 L/s",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p13",
				"october2-tools-atlas-industrial-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-atlas-industrial-p13",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf#page=13",
			"sourceLabel": "Industrial Tools and Solutions, catalogue fabricant Atlas Copco, édition identifiée par empreinte, page PDF 13",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 03eb69cef54f9a52be2a2bd73342620448907b5706ed365db2b3c8a4ca9d3617. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "october2-tools-atlas-industrial-p4",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf#page=4",
			"sourceLabel": "Industrial Tools and Solutions, catalogue fabricant Atlas Copco, édition identifiée par empreinte, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 03eb69cef54f9a52be2a2bd73342620448907b5706ed365db2b3c8a4ca9d3617. Document complémentaire de la référence exacte, sans essai CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-atlas-industrial-p13"
		],
		"workingPressureBar": [
			"october2-tools-atlas-industrial-p13",
			"october2-tools-atlas-industrial-p4"
		],
		"airflowLpm": [
			"october2-tools-atlas-industrial-p13",
			"october2-tools-atlas-industrial-p4"
		]
	},
	"notes": [
		"Consommation maximale : 390 L/min à 6,3 bar."
	]
};

export default product;
