import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-atlas-copco-ltv28-r07-6-8431060165",
	"slug": "boulonneuse-atlas-copco-ltv28-r07-6-8431060165",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "Atlas Copco LTV28 R07-6 (réf. 8431060165)",
	"brand": "Atlas Copco",
	"model": "LTV28 R07-6",
	"mpn": "8431060165",
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
		"src": "/images/products/boulonneuse-atlas-copco-ltv28-r07-6-8431060165-technical-20261116-followup.svg",
		"alt": "Repères techniques : Atlas Copco LTV28 R07-6 (réf. 8431060165)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "atlas-copco-ltv28-r07-6",
		"label": "Référence 8431060165",
		"distinguishingAttributes": {
			"reference": "8431060165",
			"Consommations originales": "8 L/s ; 17 cfm",
			"Vitesse à vide": "1100 tr/min",
			"Masse": "1.3 kg"
		}
	},
	"editorial": {
		"overview": "La LTV28 R07-6, référence 8431060165, publie 8 L/s (480 L/min) à vide. Sa plage de couple sur assemblage souple est de 2,5 à 7 Nm ; la vitesse à vide est 1 100 tr/min. Cette consommation ne qualifie pas le besoin maximal pendant un serrage : le moteur conserve un état non conclusif.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 35.",
			"Consommations originales : 8 L/s ; 17 cfm.",
			"Vitesse à vide : 1100 tr/min.",
			"Masse : 1.3 kg.",
			"Tableau page PDF 35 : Air consumption at free speed ; 8 L/s, soit 480 L/min."
		],
		"limitations": [
			"Le débit publié conserve son régime de mesure ; aucun cycle supposé ne réduit la consommation.",
			"Caractéristiques déclarées par le fabricant. Aucun essai physique réalisé par CompatAir.",
			"La disponibilité locale, les raccords, les accessoires et la notice de sécurité de la référence livrée restent à vérifier.",
			"La pression générale de service 6,3 bar n’est pas une mesure de consommation maximale en serrage. Le débit à vide reste documentaire et hors dimensionnement."
		]
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 35",
			"evidenceIds": [
				"documented-d-atlas-tools-p35"
			]
		},
		{
			"label": "Consommations originales",
			"value": "8 L/s ; 17 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p35"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1100 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p35"
			]
		},
		{
			"label": "Masse",
			"value": "1.3 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p35"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "8 L/s = 480 L/min ; tableau Air consumption at free speed, page PDF 35",
			"evidenceIds": [
				"review:2026-11-16-technical:boulonneuse-atlas-copco-ltv28-r07-6-8431060165:0"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p35",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=35",
			"sourceLabel": "atlas-tools, page PDF 35",
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
			"id": "review:2026-11-16-technical:boulonneuse-atlas-copco-ltv28-r07-6-8431060165:0",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
			"sourceLabel": "Atlas Copco, document constructeur vérifié le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La LTV28 R07-6, référence 8431060165, publie 8 L/s (480 L/min) à vide. Sa plage de couple sur assemblage souple est de 2,5 à 7 Nm ; la vitesse à vide est 1 100 tr/min. Cette consommation ne qualifie pas le besoin maximal pendant un serrage : le moteur conserve un état non conclusif. GET complet SHA-256 1e22ac35e18dfbe166f86a825fb5f9b33d152e6eddd3601c658fd39f20195e21. Pages PDF lues : 3, 35."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-atlas-tools-p35"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p35",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p35",
			"review:2026-11-16-technical:boulonneuse-atlas-copco-ltv28-r07-6-8431060165:0"
		],
		"airflowBasis": [
			"review:2026-11-16-technical:boulonneuse-atlas-copco-ltv28-r07-6-8431060165:0"
		]
	},
	"notes": [
		"Consommation à vide : 480 L/min ; aucun besoin en charge déduit."
	],
	"airflowBasis": "free-speed"
};

export default product;
