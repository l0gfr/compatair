import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-tranmax-tpt-640c",
	"slug": "meuleuse-tranmax-tpt-640c",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Tranmax TPT-640C",
	"brand": "Tranmax",
	"model": "TPT-640C",
	"mpn": "TPT-640C",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques mécaniques sont déclarées dans le tableau constructeur ; aucun débit de compatibilité n’est déduit du couple, de la vitesse ou de la masse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-tranmax-tpt-640c.webp",
		"alt": "Repères techniques : Tranmax TPT-640C",
		"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "tranmax-tpt-640c",
		"label": "Référence TPT-640C",
		"distinguishingAttributes": {
			"reference": "TPT-640C",
			"Masse publiée": "0.7 kg (1.5 lb)",
			"Longueur hors tout publiée": "300 mm (11.8 inch)"
		}
	},
	"editorial": {
		"overview": "Tranmax TPT-640C. Les caractéristiques mécaniques sont déclarées dans le tableau constructeur ; aucun débit de compatibilité n’est déduit du couple, de la vitesse ou de la masse. Masse publiée : 0.7 kg (1.5 lb). Longueur hors tout publiée : 300 mm (11.8 inch).",
		"verifiedFacts": [
			"Masse publiée : 0.7 kg (1.5 lb).",
			"Longueur hors tout publiée : 300 mm (11.8 inch)."
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
			"value": "0.7 kg (1.5 lb)",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-tp-pdf-p23"
			]
		},
		{
			"label": "Longueur hors tout publiée",
			"value": "300 mm (11.8 inch)",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-tp-pdf-p23"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucun point de pression de consommation n’est établi pour cette ligne.",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-tp-pdf-p23"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-tranmax-tp-pdf-p23",
			"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf#page=23",
			"sourceLabel": "Tranmax, catalogue pneumatique officiel publié par Tranmax, page PDF 23",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c2e29dbb1f9d433e1d65568bc327d3ea21eadd7d39f8edbb0d98145850f7c7d2. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-tranmax-tp-pdf-p23"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-tranmax-tp-pdf-p23"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-tranmax-tp-pdf-p23"
		]
	},
	"notes": [
		"Les caractéristiques mécaniques sont déclarées dans le tableau constructeur ; aucun débit de compatibilité n’est déduit du couple, de la vitesse ou de la masse."
	]
};

export default product;
