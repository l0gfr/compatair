import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-bs-c-20-pro-vs",
	"slug": "aircraft-bs-c-20-pro-vs",
	"brand": "Aircraft",
	"model": "BS-C 20 PRO VS",
	"mpn": "2403780",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "Aircraft BS-C 20 PRO VS",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-bs-c-20-pro-vs.webp",
		"alt": "Repères techniques Aircraft BS-C 20 PRO VS, référence 2403780",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft BS-C 20 PRO VS, référence 2403780. Consommation moyenne publiée : 400 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Longueur de bande : 520 mm. Largeur de bande : 20 mm.",
		"verifiedFacts": [
			"Pression de travail publiée : 6 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 400 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2403780.",
			"Longueur de bande : 520 mm.",
			"Largeur de bande : 20 mm.",
			"Longueur approximative : 396 mm."
		],
		"limitations": [
			"Le besoin réel dépend de la charge, du cycle et des pertes de pression dans le flexible. Aucune mesure physique CompatAir.",
			"Une consommation moyenne ne constitue pas un débit maximal en usage continu. Vérifier le régime réel auprès du fabricant avant dimensionnement."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de travail publiée : 6 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"evidenceIds": [
				"aircraft-2403780-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 400 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2403780-20260927"
			]
		},
		{
			"label": "Longueur de bande",
			"value": "520 mm",
			"evidenceIds": [
				"aircraft-2403780-20260927"
			]
		},
		{
			"label": "Largeur de bande",
			"value": "20 mm",
			"evidenceIds": [
				"aircraft-2403780-20260927"
			]
		},
		{
			"label": "Longueur approximative",
			"value": "396 mm",
			"evidenceIds": [
				"aircraft-2403780-20260927"
			]
		},
		{
			"label": "Largeur approximative",
			"value": "85 mm",
			"evidenceIds": [
				"aircraft-2403780-20260927"
			]
		},
		{
			"label": "Hauteur approximative",
			"value": "95 mm",
			"evidenceIds": [
				"aircraft-2403780-20260927"
			]
		},
		{
			"label": "Masse approximative",
			"value": "0,96 kg",
			"evidenceIds": [
				"aircraft-2403780-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Belt sander",
			"evidenceIds": [
				"aircraft-2403780-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2403780-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2403780, réf. 2403780 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 400 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2403780-documentation-20261023",
			"sourceUrl": "https://www.vaentek.de/WebRoot/Store22/Shops/93216177/61FD/808C/7F37/57EE/46D3/0A0C/6D10/7775/AC_BA_BS-C_10_20-PRO-VS_10_20-PRO-15-VS_DE.pdf#page=6",
			"sourceLabel": "AIRCRAFT Kompressorenbau und Maschinenhandel GmbH, Hohenzell, Austria, Notice du 23/11/2021, version 1.04 (pied de page 1.03), p. 6 (article 2403780)",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : Public retailer mirror vaentek.de; document publisher explicitly AIRCRAFT on page2. Empreinte PDF SHA-256 : 016c91679a5160feb528bfaa49ff8c37f9f7ef4d672d5884a8ca49d96250ff1d. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2403780-20260927"
		],
		"workingPressureBar": [
			"aircraft-2403780-20260927"
		],
		"airflowLpm": [
			"aircraft-2403780-20260927"
		],
		"airflowBasis": [
			"aircraft-2403780-20260927"
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
