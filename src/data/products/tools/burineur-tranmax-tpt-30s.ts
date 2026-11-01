import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-tranmax-tpt-30s",
	"slug": "burineur-tranmax-tpt-30s",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Tranmax TPT-30S",
	"brand": "Tranmax",
	"model": "TPT-30S",
	"mpn": "TPT-30S",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques mécaniques sont déclarées dans le tableau constructeur ; aucun débit de compatibilité n’est déduit du couple, de la vitesse ou de la masse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-tranmax-tpt-30s.webp",
		"alt": "Repères techniques : Tranmax TPT-30S",
		"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "tranmax-tpt-30s",
		"label": "Référence TPT-30S",
		"distinguishingAttributes": {
			"reference": "TPT-30S",
			"Masse publiée": "24.6 kg (54.2 lb)",
			"Longueur hors tout publiée": "880 mm (34.6 inch)"
		}
	},
	"editorial": {
		"overview": "Tranmax TPT-30S. TPT-10S utilise une queue ronde 26 mm,une course 151 mm et 1300 coups/min pour 14,1 kg ; TPT-30S reçoit 30 mm et 235 mm pour 24,6 kg. La table exprime une consommation moyenne en charge, sans en faire une pointe maximale. Queue d’outil : Ronde, 30 mm. Course : 235 mm. Cadence : 1 000 coups/min.",
		"verifiedFacts": [
			"Masse publiée : 24.6 kg (54.2 lb).",
			"Longueur hors tout publiée : 880 mm (34.6 inch).",
			"Queue d’outil : Ronde, 30 mm.",
			"Course : 235 mm.",
			"Cadence : 1 000 coups/min.",
			"Masse nette : 24,6 kg.",
			"Longueur totale : 880 mm."
		],
		"limitations": [
			"Les caractéristiques mécaniques sont déclarées dans le tableau constructeur ; aucun débit de compatibilité n’est déduit du couple, de la vitesse ou de la masse.",
			"Référence physique explicitement imprimée dans un tableau constructeur ; aucune référence n’est créée à partir d’une nomenclature de suffixes.",
			"Les conversions de contrôle de masse et longueur servent à relire le tableau ; elles ne reconstituent aucune consommation d’air.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "24.6 kg (54.2 lb)",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-tp-pdf-p35"
			]
		},
		{
			"label": "Longueur hors tout publiée",
			"value": "880 mm (34.6 inch)",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-tp-pdf-p35"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucun point de pression de consommation n’est établi pour cette ligne.",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-tp-pdf-p35"
			]
		},
		{
			"label": "Queue d’outil",
			"value": "Ronde, 30 mm",
			"evidenceIds": [
				"burineur-tranmax-tpt-30s-reserved-20261101-1"
			]
		},
		{
			"label": "Course",
			"value": "235 mm",
			"evidenceIds": [
				"burineur-tranmax-tpt-30s-reserved-20261101-1"
			]
		},
		{
			"label": "Cadence",
			"value": "1 000 coups/min",
			"evidenceIds": [
				"burineur-tranmax-tpt-30s-reserved-20261101-1"
			]
		},
		{
			"label": "Masse nette",
			"value": "24,6 kg",
			"evidenceIds": [
				"burineur-tranmax-tpt-30s-reserved-20261101-1"
			]
		},
		{
			"label": "Longueur totale",
			"value": "880 mm",
			"evidenceIds": [
				"burineur-tranmax-tpt-30s-reserved-20261101-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-tranmax-tp-pdf-p35",
			"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf#page=35",
			"sourceLabel": "Tranmax, catalogue pneumatique officiel publié par Tranmax, page PDF 35",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c2e29dbb1f9d433e1d65568bc327d3ea21eadd7d39f8edbb0d98145850f7c7d2. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "burineur-tranmax-tpt-30s-reserved-20261101-1",
			"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf#page=35",
			"sourceLabel": "Tranmax : revue factuelle du 1 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 c2e29dbb1f9d433e1d65568bc327d3ea21eadd7d39f8edbb0d98145850f7c7d2. Passage page=35. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-tranmax-tp-pdf-p35"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-tranmax-tp-pdf-p35"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-tranmax-tp-pdf-p35"
		],
		"editorial": [
			"burineur-tranmax-tpt-30s-reserved-20261101-1"
		],
		"specifications": [
			"burineur-tranmax-tpt-30s-reserved-20261101-1"
		]
	},
	"notes": [
		"Les caractéristiques mécaniques sont déclarées dans le tableau constructeur ; aucun débit de compatibilité n’est déduit du couple, de la vitesse ou de la masse."
	]
};

export default product;
