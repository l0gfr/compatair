import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "polisseuse-tranmax-tpt-416",
	"slug": "polisseuse-tranmax-tpt-416",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "Tranmax TPT-416",
	"brand": "Tranmax",
	"model": "TPT-416",
	"mpn": "TPT-416",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques mécaniques sont déclarées dans le tableau constructeur ; aucun débit de compatibilité n’est déduit du couple, de la vitesse ou de la masse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/polisseuse-tranmax-tpt-416.webp",
		"alt": "Repères techniques : Tranmax TPT-416",
		"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "tranmax-tpt-416",
		"label": "Référence TPT-416",
		"distinguishingAttributes": {
			"reference": "TPT-416",
			"Masse publiée": "0.8 kg (1.8 lb)",
			"Longueur hors tout publiée": "160 mm (6.3 inch)"
		}
	},
	"editorial": {
		"overview": "Tranmax TPT-416. La TPT-416 est une mini-polisseuse 3 pouces à flexible arrière, 2 500 tr/min, 160 mm et 0,8 kg. La TPT-413 annonce le même régime mais 0,7 kg et 1,5 mm sous Orbital Diameter contre 0,75 mm ici. Ce libellé documentaire est conservé sans assimiler les mouvements ; les 600 L/min sont moyens en charge.",
		"verifiedFacts": [
			"Masse publiée : 0.8 kg (1.8 lb).",
			"Longueur hors tout publiée : 160 mm (6.3 inch).",
			"Plateau : 3 pouces.",
			"Vitesse à vide : 2 500 tr/min.",
			"Colonne diamètre orbital : 0,75 mm.",
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
			"value": "0.8 kg (1.8 lb)",
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
			"label": "Plateau",
			"value": "3 pouces",
			"evidenceIds": [
				"polisseuse-tranmax-tpt-416-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2 500 tr/min",
			"evidenceIds": [
				"polisseuse-tranmax-tpt-416-reserved-20261103-1"
			]
		},
		{
			"label": "Colonne diamètre orbital",
			"value": "0,75 mm",
			"evidenceIds": [
				"polisseuse-tranmax-tpt-416-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne en charge",
			"value": "600 L/min",
			"evidenceIds": [
				"polisseuse-tranmax-tpt-416-reserved-20261103-1"
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
			"id": "polisseuse-tranmax-tpt-416-reserved-20261103-1",
			"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf#page=26",
			"sourceLabel": "Tranmax : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 c2e29dbb1f9d433e1d65568bc327d3ea21eadd7d39f8edbb0d98145850f7c7d2. La TPT-416 est une mini-polisseuse 3 pouces à flexible arrière, 2 500 tr/min, 160 mm et 0,8 kg. La TPT-413 annonce le même régime mais 0,7 kg et 1,5 mm sous Orbital Diameter contre 0,75 mm ici. Ce libellé documentaire est conservé sans assimiler les mouvements ; les 600 L/min sont moyens en charge."
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
			"polisseuse-tranmax-tpt-416-reserved-20261103-1"
		],
		"specifications": [
			"polisseuse-tranmax-tpt-416-reserved-20261103-1"
		]
	},
	"notes": [
		"Les caractéristiques mécaniques sont déclarées dans le tableau constructeur ; aucun débit de compatibilité n’est déduit du couple, de la vitesse ou de la masse."
	]
};

export default product;
