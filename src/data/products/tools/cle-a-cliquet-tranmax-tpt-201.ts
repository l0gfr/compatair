import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-tranmax-tpt-201",
	"slug": "cle-a-cliquet-tranmax-tpt-201",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Tranmax TPT-201",
	"brand": "Tranmax",
	"model": "TPT-201",
	"mpn": "TPT-201",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques mécaniques sont déclarées dans le tableau constructeur ; aucun débit de compatibilité n’est déduit du couple, de la vitesse ou de la masse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-tranmax-tpt-201.webp",
		"alt": "Repères techniques : Tranmax TPT-201",
		"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "tranmax-tpt-201",
		"label": "Référence TPT-201",
		"distinguishingAttributes": {
			"reference": "TPT-201",
			"Masse publiée": "0.7 kg (1.6 lb)",
			"Longueur hors tout publiée": "190 mm (7.5 inch)"
		}
	},
	"editorial": {
		"overview": "Tranmax TPT-201. La TPT-201 est le cliquet aluminium 1/4 pouce de 190 mm, 0,7 kg et 600 tr/min. La TPT-201-3 utilise le carré 3/8 ; la TPT-202 est plus longue et plus lourde. Les 68 L/min moyens en charge restent distincts d’un débit maximal à pression documentée.",
		"verifiedFacts": [
			"Masse publiée : 0.7 kg (1.6 lb).",
			"Longueur hors tout publiée : 190 mm (7.5 inch).",
			"Carré : 1/4 pouce.",
			"Vitesse à vide : 600 tr/min.",
			"Couple maximal inverse : 54 Nm.",
			"Consommation moyenne en charge : 68 L/min."
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
			"value": "0.7 kg (1.6 lb)",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-tp-pdf-p16"
			]
		},
		{
			"label": "Longueur hors tout publiée",
			"value": "190 mm (7.5 inch)",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-tp-pdf-p16"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucun point de pression de consommation n’est établi pour cette ligne.",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-tp-pdf-p16"
			]
		},
		{
			"label": "Carré",
			"value": "1/4 pouce",
			"evidenceIds": [
				"cle-a-cliquet-tranmax-tpt-201-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "600 tr/min",
			"evidenceIds": [
				"cle-a-cliquet-tranmax-tpt-201-reserved-20261103-1"
			]
		},
		{
			"label": "Couple maximal inverse",
			"value": "54 Nm",
			"evidenceIds": [
				"cle-a-cliquet-tranmax-tpt-201-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne en charge",
			"value": "68 L/min",
			"evidenceIds": [
				"cle-a-cliquet-tranmax-tpt-201-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-tranmax-tp-pdf-p16",
			"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf#page=16",
			"sourceLabel": "Tranmax, catalogue pneumatique officiel publié par Tranmax, page PDF 16",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c2e29dbb1f9d433e1d65568bc327d3ea21eadd7d39f8edbb0d98145850f7c7d2. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "cle-a-cliquet-tranmax-tpt-201-reserved-20261103-1",
			"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113224_2212-Professional-Power-Tools-TP.pdf#page=16",
			"sourceLabel": "Tranmax : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 c2e29dbb1f9d433e1d65568bc327d3ea21eadd7d39f8edbb0d98145850f7c7d2. La TPT-201 est le cliquet aluminium 1/4 pouce de 190 mm, 0,7 kg et 600 tr/min. La TPT-201-3 utilise le carré 3/8 ; la TPT-202 est plus longue et plus lourde. Les 68 L/min moyens en charge restent distincts d’un débit maximal à pression documentée."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-tranmax-tp-pdf-p16"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-tranmax-tp-pdf-p16"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-tranmax-tp-pdf-p16"
		],
		"editorial": [
			"cle-a-cliquet-tranmax-tpt-201-reserved-20261103-1"
		],
		"specifications": [
			"cle-a-cliquet-tranmax-tpt-201-reserved-20261103-1"
		]
	},
	"notes": [
		"Les caractéristiques mécaniques sont déclarées dans le tableau constructeur ; aucun débit de compatibilité n’est déduit du couple, de la vitesse ou de la masse."
	]
};

export default product;
