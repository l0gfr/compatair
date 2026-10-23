import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-wb-mini-pro",
	"slug": "aircraft-wb-mini-pro",
	"brand": "Aircraft",
	"model": "WB Mini PRO",
	"mpn": "2406405",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Aircraft WB Mini PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-wb-mini-pro.webp",
		"alt": "Repères techniques Aircraft WB Mini PRO, référence 2406405",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft WB Mini PRO, référence 2406405. Consommation moyenne publiée : 84 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Diamètre intérieur du flexible : 10 mm. Vitesse de rotation : 4500 min¯¹.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 84 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2406405.",
			"Diamètre intérieur du flexible : 10 mm.",
			"Vitesse de rotation : 4500 min¯¹.",
			"Longueur approximative : 141 mm."
		],
		"limitations": [
			"Le besoin réel dépend de la charge, du cycle et des pertes de pression dans le flexible. Aucune mesure physique CompatAir.",
			"Une consommation moyenne ne constitue pas un débit maximal en usage continu. Vérifier le régime réel auprès du fabricant avant dimensionnement."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"evidenceIds": [
				"aircraft-2406405-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 84 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2406405-20260927"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "10 mm",
			"evidenceIds": [
				"aircraft-2406405-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "4500 min¯¹",
			"evidenceIds": [
				"aircraft-2406405-20260927"
			]
		},
		{
			"label": "Longueur approximative",
			"value": "141 mm",
			"evidenceIds": [
				"aircraft-2406405-20260927"
			]
		},
		{
			"label": "Largeur approximative",
			"value": "66 mm",
			"evidenceIds": [
				"aircraft-2406405-20260927"
			]
		},
		{
			"label": "Hauteur approximative",
			"value": "80 mm",
			"evidenceIds": [
				"aircraft-2406405-20260927"
			]
		},
		{
			"label": "Masse approximative",
			"value": "0,6 kg",
			"evidenceIds": [
				"aircraft-2406405-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Angle drill",
			"evidenceIds": [
				"aircraft-2406405-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2406405-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2406405, réf. 2406405 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 84 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2406405-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=245",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 245 (article 2406405)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : 527567fc8a4c727b8d4e799507260aa310d26decb7e15621f040b3df4e71c8bb. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2406405-20260927"
		],
		"workingPressureBar": [
			"aircraft-2406405-20260927"
		],
		"airflowLpm": [
			"aircraft-2406405-20260927"
		],
		"airflowBasis": [
			"aircraft-2406405-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 84,
		"typical": 84,
		"max": 84
	},
	"airflowBasis": "average"
};

export default product;
