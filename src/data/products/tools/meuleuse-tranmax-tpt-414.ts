import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-tranmax-tpt-414",
	"slug": "meuleuse-tranmax-tpt-414",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Tranmax TPT-414",
	"brand": "Tranmax",
	"model": "TPT-414",
	"mpn": "TPT-414",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques mécaniques sont déclarées dans le tableau constructeur ; aucun débit de compatibilité n’est déduit du couple, de la vitesse ou de la masse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-tranmax-tpt-414.webp",
		"alt": "Repères techniques : Tranmax TPT-414",
		"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "tranmax-tpt-414",
		"label": "Référence TPT-414",
		"distinguishingAttributes": {
			"reference": "TPT-414",
			"Masse publiée": "0.7 kg (1.5 lb)",
			"Longueur hors tout publiée": "160 mm (6.3 inch)"
		}
	},
	"editorial": {
		"overview": "Tranmax TPT-414. La TPT-414 est une mini-meuleuse à disque 3 pouces, 15 000 tr/min et 0,7 kg. La TPT-413 est une polisseuse à 2 500 tr/min ; leurs abrasifs et régimes ne sont pas interchangeables. Le tableau imprime 3,5 mm dans une colonne Orbital Diameter sans expliquer le mouvement de cette meuleuse ; aucune nouvelle cinématique n’est inventée.",
		"verifiedFacts": [
			"Masse publiée : 0.7 kg (1.5 lb).",
			"Longueur hors tout publiée : 160 mm (6.3 inch).",
			"Disque : 3 pouces.",
			"Vitesse à vide : 15 000 tr/min.",
			"Colonne diamètre orbital : 3,5 mm, libellé du tableau.",
			"Consommation moyenne en charge : 600 L/min."
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
				"october2b-tools-oct2b-tranmax-tp-pdf-p26"
			]
		},
		{
			"label": "Longueur hors tout publiée",
			"value": "160 mm (6.3 inch)",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-tp-pdf-p26"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucun point de pression de consommation n’est établi pour cette ligne.",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-tp-pdf-p26"
			]
		},
		{
			"label": "Disque",
			"value": "3 pouces",
			"evidenceIds": [
				"meuleuse-tranmax-tpt-414-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "15 000 tr/min",
			"evidenceIds": [
				"meuleuse-tranmax-tpt-414-reserved-20261103-1"
			]
		},
		{
			"label": "Colonne diamètre orbital",
			"value": "3,5 mm, libellé du tableau",
			"evidenceIds": [
				"meuleuse-tranmax-tpt-414-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne en charge",
			"value": "600 L/min",
			"evidenceIds": [
				"meuleuse-tranmax-tpt-414-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-tranmax-tp-pdf-p26",
			"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf#page=26",
			"sourceLabel": "Tranmax, catalogue pneumatique officiel publié par Tranmax, page PDF 26",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c2e29dbb1f9d433e1d65568bc327d3ea21eadd7d39f8edbb0d98145850f7c7d2. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "meuleuse-tranmax-tpt-414-reserved-20261103-1",
			"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf#page=26",
			"sourceLabel": "Tranmax : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 c2e29dbb1f9d433e1d65568bc327d3ea21eadd7d39f8edbb0d98145850f7c7d2. La TPT-414 est une mini-meuleuse à disque 3 pouces, 15 000 tr/min et 0,7 kg. La TPT-413 est une polisseuse à 2 500 tr/min ; leurs abrasifs et régimes ne sont pas interchangeables. Le tableau imprime 3,5 mm dans une colonne Orbital Diameter sans expliquer le mouvement de cette meuleuse ; aucune nouvelle cinématique n’est inventée."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-tranmax-tp-pdf-p26"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-tranmax-tp-pdf-p26"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-tranmax-tp-pdf-p26"
		],
		"editorial": [
			"meuleuse-tranmax-tpt-414-reserved-20261103-1"
		],
		"specifications": [
			"meuleuse-tranmax-tpt-414-reserved-20261103-1"
		]
	},
	"notes": [
		"Les caractéristiques mécaniques sont déclarées dans le tableau constructeur ; aucun débit de compatibilité n’est déduit du couple, de la vitesse ou de la masse."
	]
};

export default product;
