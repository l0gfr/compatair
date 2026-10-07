import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-atlas-copco-combi22-hr2-8431025589",
	"slug": "visseuse-atlas-copco-combi22-hr2-8431025589",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Atlas Copco COMBI22 HR2 (réf. 8431025589)",
	"brand": "Atlas Copco",
	"model": "COMBI22 HR2",
	"mpn": "8431025589",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-atlas-copco-combi22-hr2-8431025589.webp",
		"alt": "Repères techniques : Atlas Copco COMBI22 HR2 (réf. 8431025589)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-combi22-hr2",
		"label": "Référence 8431025589",
		"distinguishingAttributes": {
			"reference": "8431025589",
			"Plage de couple sur assemblage tendre": "2.0-2.7 Nm",
			"Vitesse à vide": "3600 tr/min"
		}
	},
	"editorial": {
		"overview": "Atlas Copco COMBI22 HR2 (réf. 8431025589). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Plage de couple sur assemblage tendre : 2.0-2.7 Nm. Vitesse à vide : 3600 tr/min.",
		"verifiedFacts": [
			"Plage de couple sur assemblage tendre : 2.0-2.7 Nm.",
			"Vitesse à vide : 3600 tr/min.",
			"Masse publiée : 0.9 kg.",
			"Longueur : 205 mm.",
			"Tuyau recommandé : 8 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Les 3 à 6 bar du tableau définissent l’obtention de la plage de couple. Cette note ne devient pas une pression nominale ni une borne d’alimentation de la fiche.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Plage de couple sur assemblage tendre",
			"value": "2.0-2.7 Nm",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p12"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3600 tr/min",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p12"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.9 kg",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p12"
			]
		},
		{
			"label": "Longueur",
			"value": "205 mm",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p12"
			]
		},
		{
			"label": "Tuyau recommandé",
			"value": "8 mm",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p12"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La plage de couple est obtenue entre 3 bar et 6 bar ; aucune pression du point de consommation n’est indiquée.",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p12"
			]
		},
		{
			"label": "Consommation maximale, hors calcul",
			"value": "7 L/s",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p12"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-atlas-industrial-p12",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf#page=12",
			"sourceLabel": "Industrial Tools and Solutions, catalogue fabricant Atlas Copco, édition identifiée par empreinte, page PDF 12",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 03eb69cef54f9a52be2a2bd73342620448907b5706ed365db2b3c8a4ca9d3617. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-atlas-industrial-p12"
		],
		"workingPressureBar": [
			"october2-tools-atlas-industrial-p12"
		],
		"demandExplanation": [
			"october2-tools-atlas-industrial-p12"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
