import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-tranmax-tpt-523",
	"slug": "meuleuse-tranmax-tpt-523",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Tranmax TPT-523",
	"brand": "Tranmax",
	"model": "TPT-523",
	"mpn": "TPT-523",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques mécaniques sont déclarées dans le tableau constructeur ; aucun débit de compatibilité n’est déduit du couple, de la vitesse ou de la masse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-tranmax-tpt-523.webp",
		"alt": "Repères techniques : Tranmax TPT-523",
		"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "tranmax-tpt-523",
		"label": "Référence TPT-523",
		"distinguishingAttributes": {
			"reference": "TPT-523",
			"Masse publiée": "0.9 kg (2.0 lb)",
			"Longueur hors tout publiée": "218 mm (8.6 inch)"
		}
	},
	"editorial": {
		"overview": "Tranmax TPT-523. Les caractéristiques mécaniques sont déclarées dans le tableau constructeur ; aucun débit de compatibilité n’est déduit du couple, de la vitesse ou de la masse. Masse publiée : 0.9 kg (2.0 lb). Longueur hors tout publiée : 218 mm (8.6 inch).",
		"verifiedFacts": [
			"Masse publiée : 0.9 kg (2.0 lb).",
			"Longueur hors tout publiée : 218 mm (8.6 inch)."
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
			"value": "0.9 kg (2.0 lb)",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-tp-pdf-p19"
			]
		},
		{
			"label": "Longueur hors tout publiée",
			"value": "218 mm (8.6 inch)",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-tp-pdf-p19"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucun point de pression de consommation n’est établi pour cette ligne.",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-tp-pdf-p19"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-tranmax-tp-pdf-p19",
			"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf#page=19",
			"sourceLabel": "Tranmax, catalogue pneumatique officiel publié par Tranmax, page PDF 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c2e29dbb1f9d433e1d65568bc327d3ea21eadd7d39f8edbb0d98145850f7c7d2. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-tranmax-tp-pdf-p19"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-tranmax-tp-pdf-p19"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-tranmax-tp-pdf-p19"
		]
	},
	"notes": [
		"Les caractéristiques mécaniques sont déclarées dans le tableau constructeur ; aucun débit de compatibilité n’est déduit du couple, de la vitesse ou de la masse."
	]
};

export default product;
