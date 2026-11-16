import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-atlas-copco-rvm07b-8425010525",
	"slug": "burineur-atlas-copco-rvm07b-8425010525",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Atlas Copco RVM07B (réf. 8425010525)",
	"brand": "Atlas Copco",
	"model": "RVM07B",
	"mpn": "8425010525",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 228,
		"typical": 228,
		"max": 228
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-atlas-copco-rvm07b-8425010525-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Atlas Copco RVM07B (réf. 8425010525)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "atlas-copco-rvm07b",
		"label": "Référence 8425010525",
		"distinguishingAttributes": {
			"reference": "8425010525",
			"Fréquence de frappe": "100 Hz",
			"Masse avec burin standard": "1.7 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco RVM07B, code 8425 0105 25 : burineur à 100 Hz, masse 1,7 kg avec burin standard et dispositif de soufflage de nettoyage. Le RRC13B du même catalogue conserve cette fonction de soufflage avec 73 Hz et 1,6 kg. La consommation RVM07B est publiée à 3,8 L/s selon les conventions de mesure à 6,3 bar.",
		"verifiedFacts": [
			"Fréquence de frappe : 100 Hz.",
			"Masse avec burin standard : 1.7 kg.",
			"Diamètre de tuyau recommandé : 6.3 mm.",
			"Cadence : 100 Hz.",
			"Masse avec burin standard : 1,7 kg.",
			"Fonction complémentaire : Soufflage de nettoyage.",
			"Dimensions, unités de l’édition US : Longueur 10,7 pouces ; diamètre 1,5 pouce.",
			"Consommation maximale déclarée : 3,8 L/s ; 228 L/min à 6,3 bar."
		],
		"limitations": [
			"La consommation maximale est déclarée dans les conventions du fabricant ; les exceptions explicites du modèle restent prioritaires.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Fréquence de frappe",
			"value": "100 Hz",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p232"
			]
		},
		{
			"label": "Diamètre de tuyau recommandé",
			"value": "6.3 mm",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p232"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "6.3 bar : point de consommation maximale déclaré dans les conventions fabricant, page PDF 4, sauf exception explicite.",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p232",
				"october2-tools-atlas-industrial-p4"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "3.8 L/s",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p232",
				"october2-tools-atlas-industrial-p4"
			]
		},
		{
			"label": "Cadence",
			"value": "100 Hz",
			"evidenceIds": [
				"review:2026-11-16-reviews:burineur-atlas-copco-rvm07b-8425010525:0"
			]
		},
		{
			"label": "Masse avec burin standard",
			"value": "1,7 kg",
			"evidenceIds": [
				"review:2026-11-16-reviews:burineur-atlas-copco-rvm07b-8425010525:0"
			]
		},
		{
			"label": "Fonction complémentaire",
			"value": "Soufflage de nettoyage",
			"evidenceIds": [
				"review:2026-11-16-reviews:burineur-atlas-copco-rvm07b-8425010525:0"
			]
		},
		{
			"label": "Dimensions, unités de l’édition US",
			"value": "Longueur 10,7 pouces ; diamètre 1,5 pouce",
			"evidenceIds": [
				"review:2026-11-16-reviews:burineur-atlas-copco-rvm07b-8425010525:0"
			]
		},
		{
			"label": "Consommation maximale déclarée",
			"value": "3,8 L/s ; 228 L/min à 6,3 bar",
			"evidenceIds": [
				"review:2026-11-16-reviews:burineur-atlas-copco-rvm07b-8425010525:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-atlas-industrial-p232",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf#page=232",
			"sourceLabel": "Industrial Tools and Solutions, catalogue fabricant Atlas Copco, édition identifiée par empreinte, page PDF 232",
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
		},
		{
			"id": "review:2026-11-16-reviews:burineur-atlas-copco-rvm07b-8425010525:0",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf",
			"sourceLabel": "Atlas Copco, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Atlas Copco RVM07B, code 8425 0105 25 : burineur à 100 Hz, masse 1,7 kg avec burin standard et dispositif de soufflage de nettoyage. Le RRC13B du même catalogue conserve cette fonction de soufflage avec 73 Hz et 1,6 kg. La consommation RVM07B est publiée à 3,8 L/s selon les conventions de mesure à 6,3 bar. GET complet SHA-256 03eb69cef54f9a52be2a2bd73342620448907b5706ed365db2b3c8a4ca9d3617. Pages PDF lues : 232, 4."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-atlas-industrial-p232"
		],
		"workingPressureBar": [
			"october2-tools-atlas-industrial-p232",
			"october2-tools-atlas-industrial-p4"
		],
		"airflowLpm": [
			"october2-tools-atlas-industrial-p232",
			"october2-tools-atlas-industrial-p4"
		]
	},
	"notes": [
		"Consommation maximale : 228 L/min à 6,3 bar."
	]
};

export default product;
