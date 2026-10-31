import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-atlas-copco-ltd13-r05-rr-8431053305",
	"slug": "boulonneuse-atlas-copco-ltd13-r05-rr-8431053305",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "Atlas Copco LTD13 R05-RR (réf. 8431053305)",
	"brand": "Atlas Copco",
	"model": "LTD13 R05-RR",
	"mpn": "8431053305",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 420,
		"typical": 420,
		"max": 420
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/boulonneuse-atlas-copco-ltd13-r05-rr-8431053305.webp",
		"alt": "Repères techniques : Atlas Copco LTD13 R05-RR (réf. 8431053305)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-ltd13-r05-rr",
		"label": "Référence 8431053305",
		"distinguishingAttributes": {
			"reference": "8431053305",
			"Consommations originales": "7 L/s ; 15 cfm",
			"Vitesse à vide": "850 tr/min",
			"Masse": "0.7 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LTD13 R05-RR. Le tableau Atlas Copco nomme explicitement cette colonne « Air consumption at free speed ». La convention générale de consommation maximale ne remplace pas cette exception ; le débit reste à vide. Désignation et configuration documentées à la page PDF 50. Vitesse à vide : 850 tr/min. Masse : 0.7 kg.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 50.",
			"Vitesse à vide : 850 tr/min.",
			"Masse : 0.7 kg.",
			"Consommation à vide publiée : 420 L/min."
		],
		"limitations": [
			"Le débit publié conserve son régime de mesure ; aucun cycle supposé ne réduit la consommation.",
			"Caractéristiques déclarées par le fabricant. Aucun essai physique réalisé par CompatAir.",
			"La disponibilité locale, les raccords, les accessoires et la notice de sécurité de la référence livrée restent à vérifier.",
			"Le tableau Atlas Copco nomme explicitement cette colonne « Air consumption at free speed ». La convention générale de consommation maximale ne remplace pas cette exception ; le débit reste à vide."
		]
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 50",
			"evidenceIds": [
				"documented-d-atlas-tools-p50"
			]
		},
		{
			"label": "Consommations originales",
			"value": "7 L/s ; 15 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p50"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "850 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p50"
			]
		},
		{
			"label": "Masse",
			"value": "0.7 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p50"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":420,\"typical\":420,\"max\":420},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"documented-d-atlas-tools-p50",
				"boulonneuse-atlas-copco-ltd13-r05-rr-8431053305-reserved-20261031-1",
				"boulonneuse-atlas-copco-ltd13-r05-rr-8431053305-reserved-20261031-2"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p50",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=50",
			"sourceLabel": "atlas-tools, page PDF 50",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 1e22ac35e18dfbe166f86a825fb5f9b33d152e6eddd3601c658fd39f20195e21. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "documented-d-atlas-tools-p3",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=3",
			"sourceLabel": "atlas-tools, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 1e22ac35e18dfbe166f86a825fb5f9b33d152e6eddd3601c658fd39f20195e21. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "boulonneuse-atlas-copco-ltd13-r05-rr-8431053305-reserved-20261031-1",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=50",
			"sourceLabel": "Atlas Copco LTD13 R05-RR : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 1e22ac35e18dfbe166f86a825fb5f9b33d152e6eddd3601c658fd39f20195e21. Le tableau Atlas Copco nomme explicitement cette colonne « Air consumption at free speed ». La convention générale de consommation maximale ne remplace pas cette exception ; le débit reste à vide."
		},
		{
			"id": "boulonneuse-atlas-copco-ltd13-r05-rr-8431053305-reserved-20261031-2",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=3",
			"sourceLabel": "Atlas Copco LTD13 R05-RR : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 1e22ac35e18dfbe166f86a825fb5f9b33d152e6eddd3601c658fd39f20195e21. Le tableau Atlas Copco nomme explicitement cette colonne « Air consumption at free speed ». La convention générale de consommation maximale ne remplace pas cette exception ; le débit reste à vide."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-atlas-tools-p50"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p50",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p50"
		],
		"airflowBasis": [
			"boulonneuse-atlas-copco-ltd13-r05-rr-8431053305-reserved-20261031-1",
			"boulonneuse-atlas-copco-ltd13-r05-rr-8431053305-reserved-20261031-2"
		]
	},
	"notes": [],
	"airflowBasis": "free-speed"
};

export default product;
