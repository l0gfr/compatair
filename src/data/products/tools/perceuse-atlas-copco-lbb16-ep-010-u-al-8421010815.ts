import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-atlas-copco-lbb16-ep-010-u-al-8421010815",
	"slug": "perceuse-atlas-copco-lbb16-ep-010-u-al-8421010815",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Atlas Copco LBB16 EP-010-U-AL (réf. 8421010815)",
	"brand": "Atlas Copco",
	"model": "LBB16 EP-010-U-AL",
	"mpn": "8421010815",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 480,
		"typical": 480,
		"max": 480
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-atlas-copco-lbb16-ep-010-u-al-8421010815-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Atlas Copco LBB16 EP-010-U-AL (réf. 8421010815)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "atlas-copco-lbb16-ep-010-u-al",
		"label": "Référence 8421010815",
		"distinguishingAttributes": {
			"reference": "8421010815",
			"Consommations originales": "8 L/s ; 17 cfm",
			"Vitesse à vide": "1000 tr/min",
			"Masse": "0.7 kg"
		}
	},
	"editorial": {
		"overview": "La LBB16 EP-010-U-AL 8421010815 est la version à nez aluminium non peint de la perceuse non réversible 1 000 tr/min. Le tableau donne 10 mm de capacité et 290 W, contre 2 400 tr/min et 6,5 mm pour l’EP-024. Les 8 L/s à vide à 6,3 bar restent documentaires ; les versions U sans mandrin sont distinguées par leur référence.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 248.",
			"Consommations originales : 8 L/s ; 17 cfm.",
			"Vitesse à vide : 1000 tr/min.",
			"Masse : 0.7 kg."
		],
		"limitations": [
			"Le débit publié conserve son régime de mesure ; aucun cycle supposé ne réduit la consommation.",
			"Caractéristiques déclarées par le fabricant. Aucun essai physique réalisé par CompatAir.",
			"La disponibilité locale, les raccords, les accessoires et la notice de sécurité de la référence livrée restent à vérifier."
		]
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 248",
			"evidenceIds": [
				"documented-d-atlas-tools-p248"
			]
		},
		{
			"label": "Consommations originales",
			"value": "8 L/s ; 17 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p248"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1000 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p248"
			]
		},
		{
			"label": "Masse",
			"value": "0.7 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p248"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p248",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=248",
			"sourceLabel": "atlas-tools, page PDF 248",
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
			"id": "review:2026-11-16-reviews:perceuse-atlas-copco-lbb16-ep-010-u-al-8421010815:0",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
			"sourceLabel": "Atlas Copco, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La LBB16 EP-010-U-AL 8421010815 est la version à nez aluminium non peint de la perceuse non réversible 1 000 tr/min. Le tableau donne 10 mm de capacité et 290 W, contre 2 400 tr/min et 6,5 mm pour l’EP-024. Les 8 L/s à vide à 6,3 bar restent documentaires ; les versions U sans mandrin sont distinguées par leur référence. GET complet SHA-256 1e22ac35e18dfbe166f86a825fb5f9b33d152e6eddd3601c658fd39f20195e21. Pages PDF lues : 3, 248."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-atlas-tools-p248"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p248",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p248"
		],
		"airflowBasis": [
			"review:2026-11-16-reviews:perceuse-atlas-copco-lbb16-ep-010-u-al-8421010815:0"
		]
	},
	"notes": [
		"Consommation maximale : 480 L/min à 6,3 bar."
	],
	"airflowBasis": "free-speed"
};

export default product;
