import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-bs-c-10-pro-15-vs",
	"slug": "aircraft-bs-c-10-pro-15-vs",
	"brand": "Aircraft",
	"model": "BS-C 10 PRO 15 VS",
	"mpn": "2403730",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "Aircraft BS-C 10 PRO 15 VS",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-bs-c-10-pro-15-vs.webp",
		"alt": "Repères techniques Aircraft BS-C 10 PRO 15 VS, référence 2403730",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft BS-C 10 PRO 15 VS. La BS-C 10 PRO 15 VS utilise la bande 330 × 10 mm ; la BS-C 20 PRO 15 VS utilise 520 × 20 mm et pèse 0,96 kg contre 0,77 kg dans cette notice. Les 400 L/min sont explicitement moyens et les 520 L/min maximaux. Le maximum reste documentaire faute de pression de mesure explicitement appariée ; les 8 bar d’entrée ne sont pas une mesure de débit.",
		"verifiedFacts": [
			"Bande : 330 × 10 mm.",
			"Vitesse à vide : 18 000 tr/min.",
			"Masse, notice : 0,77 kg.",
			"Consommation moyenne explicite : 400 L/min.",
			"Consommation maximale distincte : 520 L/min.",
			"Pression de service : 6 bar.",
			"Pression maximale d’entrée : 8 bar."
		],
		"limitations": [
			"Aucune moyenne, aucun maximum ni aucune pression de mesure supplémentaires ne sont déduits d’un simple débit approximatif ou d’une consigne de service.",
			"Source fabricant et édition identifiées ; équipement actuel à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Bande",
			"value": "330 × 10 mm",
			"evidenceIds": [
				"aircraft-bs-c-10-pro-15-vs-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "18 000 tr/min",
			"evidenceIds": [
				"aircraft-bs-c-10-pro-15-vs-reserved-20261103-1"
			]
		},
		{
			"label": "Masse, notice",
			"value": "0,77 kg",
			"evidenceIds": [
				"aircraft-bs-c-10-pro-15-vs-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne explicite",
			"value": "400 L/min",
			"evidenceIds": [
				"aircraft-bs-c-10-pro-15-vs-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation maximale distincte",
			"value": "520 L/min",
			"evidenceIds": [
				"aircraft-bs-c-10-pro-15-vs-reserved-20261103-1"
			]
		},
		{
			"label": "Pression de service",
			"value": "6 bar",
			"evidenceIds": [
				"aircraft-bs-c-10-pro-15-vs-reserved-20261103-1"
			]
		},
		{
			"label": "Pression maximale d’entrée",
			"value": "8 bar",
			"evidenceIds": [
				"aircraft-bs-c-10-pro-15-vs-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2403730-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2403730, réf. 2403730 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 400 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2403730-documentation-20261023",
			"sourceUrl": "https://www.vaentek.de/WebRoot/Store22/Shops/93216177/61FD/808C/7F37/57EE/46D3/0A0C/6D10/7775/AC_BA_BS-C_10_20-PRO-VS_10_20-PRO-15-VS_DE.pdf#page=6",
			"sourceLabel": "AIRCRAFT Kompressorenbau und Maschinenhandel GmbH, Hohenzell, Austria, Notice du 23/11/2021, version 1.04 (pied de page 1.03), p. 6 (article 2403730)",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : Public retailer mirror vaentek.de; document publisher explicitly AIRCRAFT on page2. Empreinte PDF SHA-256 : 016c91679a5160feb528bfaa49ff8c37f9f7ef4d672d5884a8ca49d96250ff1d. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		},
		{
			"id": "aircraft-bs-c-10-pro-15-vs-reserved-20261103-1",
			"sourceUrl": "https://www.vaentek.de/WebRoot/Store22/Shops/93216177/61FD/808C/7F37/57EE/46D3/0A0C/6D10/7775/AC_BA_BS-C_10_20-PRO-VS_10_20-PRO-15-VS_DE.pdf#page=6",
			"sourceLabel": "Aircraft : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 016c91679a5160feb528bfaa49ff8c37f9f7ef4d672d5884a8ca49d96250ff1d. La BS-C 10 PRO 15 VS utilise la bande 330 × 10 mm ; la BS-C 20 PRO 15 VS utilise 520 × 20 mm et pèse 0,96 kg contre 0,77 kg dans cette notice. Les 400 L/min sont explicitement moyens et les 520 L/min maximaux. Le maximum reste documentaire faute de pression de mesure explicitement appariée ; les 8 bar d’entrée ne sont pas une mesure de débit."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2403730-20260927"
		],
		"workingPressureBar": [
			"aircraft-2403730-20260927"
		],
		"airflowLpm": [
			"aircraft-2403730-20260927"
		],
		"airflowBasis": [
			"aircraft-2403730-20260927"
		],
		"editorial": [
			"aircraft-bs-c-10-pro-15-vs-reserved-20261103-1"
		],
		"specifications": [
			"aircraft-bs-c-10-pro-15-vs-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 400,
		"typical": 400,
		"max": 400
	},
	"airflowBasis": "average"
};

export default product;
