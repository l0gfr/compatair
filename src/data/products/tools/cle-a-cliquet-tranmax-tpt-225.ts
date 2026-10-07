import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-tranmax-tpt-225",
	"slug": "cle-a-cliquet-tranmax-tpt-225",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Tranmax TPT-225",
	"brand": "Tranmax",
	"model": "TPT-225",
	"mpn": "TPT-225",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques mécaniques sont déclarées dans le tableau constructeur ; aucun débit de compatibilité n’est déduit du couple, de la vitesse ou de la masse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-tranmax-tpt-225.webp",
		"alt": "Repères techniques : Tranmax TPT-225",
		"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "tranmax-tpt-225",
		"label": "Référence TPT-225",
		"distinguishingAttributes": {
			"reference": "TPT-225",
			"Masse publiée": "1.2 kg (2.6 lb)",
			"Longueur hors tout publiée": "260 mm (10.2 inch)"
		}
	},
	"editorial": {
		"overview": "Tranmax TPT-225. Les caractéristiques mécaniques sont déclarées dans le tableau constructeur ; aucun débit de compatibilité n’est déduit du couple, de la vitesse ou de la masse. Masse publiée : 1.2 kg (2.6 lb). Longueur hors tout publiée : 260 mm (10.2 inch).",
		"verifiedFacts": [
			"Masse publiée : 1.2 kg (2.6 lb).",
			"Longueur hors tout publiée : 260 mm (10.2 inch)."
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
				"october2b-tools-oct2b-tranmax-tp-pdf-p15"
			]
		},
		{
			"label": "Longueur hors tout publiée",
			"value": "260 mm (10.2 inch)",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-tp-pdf-p15"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucun point de pression de consommation n’est établi pour cette ligne.",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-tp-pdf-p15"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-tranmax-tp-pdf-p15",
			"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf#page=15",
			"sourceLabel": "Tranmax, catalogue pneumatique officiel publié par Tranmax, page PDF 15",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c2e29dbb1f9d433e1d65568bc327d3ea21eadd7d39f8edbb0d98145850f7c7d2. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-tranmax-tp-pdf-p15"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-tranmax-tp-pdf-p15"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-tranmax-tp-pdf-p15"
		]
	},
	"notes": [
		"Les caractéristiques mécaniques sont déclarées dans le tableau constructeur ; aucun débit de compatibilité n’est déduit du couple, de la vitesse ou de la masse."
	]
};

export default product;
