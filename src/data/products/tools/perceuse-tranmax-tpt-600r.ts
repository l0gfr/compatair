import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-tranmax-tpt-600r",
	"slug": "perceuse-tranmax-tpt-600r",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Tranmax TPT-600R",
	"brand": "Tranmax",
	"model": "TPT-600R",
	"mpn": "TPT-600R",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques mécaniques sont déclarées dans le tableau constructeur ; aucun débit de compatibilité n’est déduit du couple, de la vitesse ou de la masse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-tranmax-tpt-600r.webp",
		"alt": "Repères techniques : Tranmax TPT-600R",
		"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "tranmax-tpt-600r",
		"label": "Référence TPT-600R",
		"distinguishingAttributes": {
			"reference": "TPT-600R",
			"Masse publiée": "13 kg (29 lb)",
			"Longueur hors tout publiée": "177 mm (7.0 inch)"
		}
	},
	"editorial": {
		"overview": "Tranmax TPT-600R. La TPT-600R est une perceuse réversible 3/8 pouce de 177 mm et 1,3 kg : le précédent 13 kg venait d’une transcription erronée. La TPT-610R passe à 1/2 pouce, 750 tr/min et 1,8 kg. Les 240 L/min moyens en charge ne sont pas appariés à une pression de mesure exacte.",
		"verifiedFacts": [
			"Mandrin : 3/8 pouce.",
			"Vitesse à vide : 1 800 tr/min.",
			"Masse publiée : 1,3 kg (2,9 lb).",
			"Consommation moyenne en charge : 240 L/min."
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
			"label": "Mandrin",
			"value": "3/8 pouce",
			"evidenceIds": [
				"perceuse-tranmax-tpt-600r-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1 800 tr/min",
			"evidenceIds": [
				"perceuse-tranmax-tpt-600r-reserved-20261103-1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,3 kg (2,9 lb)",
			"evidenceIds": [
				"perceuse-tranmax-tpt-600r-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne en charge",
			"value": "240 L/min",
			"evidenceIds": [
				"perceuse-tranmax-tpt-600r-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-tranmax-tp-pdf-p28",
			"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf#page=28",
			"sourceLabel": "Tranmax, catalogue pneumatique officiel publié par Tranmax, page PDF 28",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c2e29dbb1f9d433e1d65568bc327d3ea21eadd7d39f8edbb0d98145850f7c7d2. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "perceuse-tranmax-tpt-600r-reserved-20261103-1",
			"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf#page=28",
			"sourceLabel": "Tranmax : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 c2e29dbb1f9d433e1d65568bc327d3ea21eadd7d39f8edbb0d98145850f7c7d2. La TPT-600R est une perceuse réversible 3/8 pouce de 177 mm et 1,3 kg : le précédent 13 kg venait d’une transcription erronée. La TPT-610R passe à 1/2 pouce, 750 tr/min et 1,8 kg. Les 240 L/min moyens en charge ne sont pas appariés à une pression de mesure exacte."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-tranmax-tp-pdf-p28"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-tranmax-tp-pdf-p28"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-tranmax-tp-pdf-p28"
		],
		"editorial": [
			"perceuse-tranmax-tpt-600r-reserved-20261103-1"
		],
		"specifications": [
			"perceuse-tranmax-tpt-600r-reserved-20261103-1"
		]
	},
	"notes": [
		"Les caractéristiques mécaniques sont déclarées dans le tableau constructeur ; aucun débit de compatibilité n’est déduit du couple, de la vitesse ou de la masse."
	]
};

export default product;
