import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-mhp-pro",
	"slug": "aircraft-mhp-pro",
	"brand": "Aircraft",
	"model": "MHP PRO",
	"mpn": "2402550",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Aircraft MHP PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-mhp-pro.webp",
		"alt": "Repères techniques Aircraft MHP PRO, référence 2402550",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft MHP PRO, référence 2402550. Consommation moyenne publiée : 600 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Mandrin ou entraînement publié : 14.7 mm. Cadence de frappe : 2400 min¯¹.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 600 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2402550.",
			"Mandrin ou entraînement publié : 14.7 mm.",
			"Cadence de frappe : 2400 min¯¹.",
			"Énergie de frappe : 28 J."
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
				"aircraft-2402550-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 600 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2402550-20260927"
			]
		},
		{
			"label": "Mandrin ou entraînement publié",
			"value": "14.7 mm",
			"evidenceIds": [
				"aircraft-2402550-20260927"
			]
		},
		{
			"label": "Cadence de frappe",
			"value": "2400 min¯¹",
			"evidenceIds": [
				"aircraft-2402550-20260927"
			]
		},
		{
			"label": "Énergie de frappe",
			"value": "28 J",
			"evidenceIds": [
				"aircraft-2402550-20260927"
			]
		},
		{
			"label": "Masse approximative",
			"value": "6.9 kg",
			"evidenceIds": [
				"aircraft-2402550-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Chipping hammer",
			"evidenceIds": [
				"aircraft-2402550-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2402550-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2402550, réf. 2402550 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 600 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2402550-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=249",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 249 (article 2402550)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : caab06d8abda88bf05b158856a266f0a30e3ba7134e2ed08bc918b82ab4fb7f7. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2402550-20260927"
		],
		"workingPressureBar": [
			"aircraft-2402550-20260927"
		],
		"airflowLpm": [
			"aircraft-2402550-20260927"
		],
		"airflowBasis": [
			"aircraft-2402550-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 600,
		"typical": 600,
		"max": 600
	},
	"airflowBasis": "average"
};

export default product;
