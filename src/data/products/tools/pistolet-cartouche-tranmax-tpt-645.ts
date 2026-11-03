import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-cartouche-tranmax-tpt-645",
	"slug": "pistolet-cartouche-tranmax-tpt-645",
	"categoryId": "pistolet-cartouche",
	"category": "pistolet-cartouche",
	"label": "Tranmax TPT-645",
	"brand": "Tranmax",
	"model": "TPT-645",
	"mpn": "TPT-645",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques mécaniques sont déclarées dans le tableau constructeur ; aucun débit de compatibilité n’est déduit du couple, de la vitesse ou de la masse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-cartouche-tranmax-tpt-645.webp",
		"alt": "Repères techniques : Tranmax TPT-645",
		"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "tranmax-tpt-645",
		"label": "Référence TPT-645",
		"distinguishingAttributes": {
			"reference": "TPT-645",
			"Masse publiée": "1.2 kg (2.6 lb)",
			"Longueur hors tout publiée": "386 mm (15.2 inch)"
		}
	},
	"editorial": {
		"overview": "Tranmax TPT-645. La TPT-645 accepte le sachet 500 ml et les cartouches 310–500 ml selon sa table. La TPT-646 annonce 400 ml, longueur 305 mm contre 386 mm et 1,2 kg ici. Vérifier le conditionnement du mastic avant achat ; les 57 L/min moyens en charge ne donnent pas un volume par pression de gâchette.",
		"verifiedFacts": [
			"Masse publiée : 1.2 kg (2.6 lb).",
			"Longueur hors tout publiée : 386 mm (15.2 inch).",
			"Capacité : 500 ml en sachet, cartouches 310–500 ml.",
			"Usages annoncés : Pulvérisation, joints et mastic.",
			"Consommation moyenne en charge : 57 L/min."
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
			"value": "1.2 kg (2.6 lb)",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-tp-pdf-p34"
			]
		},
		{
			"label": "Longueur hors tout publiée",
			"value": "386 mm (15.2 inch)",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-tp-pdf-p34"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucun point de pression de consommation n’est établi pour cette ligne.",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-tp-pdf-p34"
			]
		},
		{
			"label": "Capacité",
			"value": "500 ml en sachet, cartouches 310–500 ml",
			"evidenceIds": [
				"pistolet-cartouche-tranmax-tpt-645-reserved-20261103-1"
			]
		},
		{
			"label": "Usages annoncés",
			"value": "Pulvérisation, joints et mastic",
			"evidenceIds": [
				"pistolet-cartouche-tranmax-tpt-645-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne en charge",
			"value": "57 L/min",
			"evidenceIds": [
				"pistolet-cartouche-tranmax-tpt-645-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-tranmax-tp-pdf-p34",
			"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf#page=34",
			"sourceLabel": "Tranmax, catalogue pneumatique officiel publié par Tranmax, page PDF 34",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c2e29dbb1f9d433e1d65568bc327d3ea21eadd7d39f8edbb0d98145850f7c7d2. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "pistolet-cartouche-tranmax-tpt-645-reserved-20261103-1",
			"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf#page=34",
			"sourceLabel": "Tranmax : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 c2e29dbb1f9d433e1d65568bc327d3ea21eadd7d39f8edbb0d98145850f7c7d2. La TPT-645 accepte le sachet 500 ml et les cartouches 310–500 ml selon sa table. La TPT-646 annonce 400 ml, longueur 305 mm contre 386 mm et 1,2 kg ici. Vérifier le conditionnement du mastic avant achat ; les 57 L/min moyens en charge ne donnent pas un volume par pression de gâchette."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-tranmax-tp-pdf-p34"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-tranmax-tp-pdf-p34"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-tranmax-tp-pdf-p34"
		],
		"editorial": [
			"pistolet-cartouche-tranmax-tpt-645-reserved-20261103-1"
		],
		"specifications": [
			"pistolet-cartouche-tranmax-tpt-645-reserved-20261103-1"
		]
	},
	"notes": [
		"Les caractéristiques mécaniques sont déclarées dans le tableau constructeur ; aucun débit de compatibilité n’est déduit du couple, de la vitesse ou de la masse."
	]
};

export default product;
