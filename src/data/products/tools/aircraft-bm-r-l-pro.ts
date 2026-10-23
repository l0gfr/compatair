import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-bm-r-l-pro",
	"slug": "aircraft-bm-r-l-pro",
	"brand": "Aircraft",
	"model": "BM R + L PRO",
	"mpn": "2404100",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Aircraft BM R + L PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-bm-r-l-pro.webp",
		"alt": "Repères techniques Aircraft BM R + L PRO, référence 2404100",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft BM R + L PRO, référence 2404100. Consommation moyenne publiée : 360 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Capacité de perçage dans l’acier : 10 mm. Capacité de perçage dans le bois : 20 mm.",
		"verifiedFacts": [
			"Pression de travail publiée : 6 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 360 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : 2404100.",
			"Capacité de perçage dans l’acier : 10 mm.",
			"Capacité de perçage dans le bois : 20 mm.",
			"Vitesse de rotation : 1800 min¯¹."
		],
		"limitations": [
			"Le besoin réel dépend de la charge, du cycle et des pertes de pression dans le flexible. Aucune mesure physique CompatAir.",
			"Une consommation moyenne ne constitue pas un débit maximal en usage continu. Vérifier le régime réel auprès du fabricant avant dimensionnement.",
			"Écarts entre documents fabricant : Masse approximative : relevé de fiche du 27/09/2026 = 1.1 kg ; AIRCRAFT Hauptkatalog 2026/27 = 1kg."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de travail publiée : 6 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"evidenceIds": [
				"aircraft-2404100-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 360 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"aircraft-2404100-20260927"
			]
		},
		{
			"label": "Capacité de perçage dans l’acier",
			"value": "10 mm",
			"evidenceIds": [
				"aircraft-2404100-20260927"
			]
		},
		{
			"label": "Capacité de perçage dans le bois",
			"value": "20 mm",
			"evidenceIds": [
				"aircraft-2404100-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1800 min¯¹",
			"evidenceIds": [
				"aircraft-2404100-20260927"
			]
		},
		{
			"label": "Masse approximative",
			"value": "1.1 kg",
			"evidenceIds": [
				"aircraft-2404100-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Pistol drill",
			"evidenceIds": [
				"aircraft-2404100-20260927"
			]
		},
		{
			"label": "Écart documentaire fabricant",
			"value": "Masse approximative : relevé de fiche du 27/09/2026 = 1.1 kg ; AIRCRAFT Hauptkatalog 2026/27 = 1kg.",
			"evidenceIds": [
				"aircraft-2404100-20260927",
				"aircraft-2404100-documentation-20261023"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2404100-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2404100, réf. 2404100 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 360 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2404100-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=246",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 246 (article 2404100)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : 74986b13a5fe1d6a43ebba75e5673e8acd1a9dc3e6fd9998b11bd2c982039485. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2404100-20260927"
		],
		"workingPressureBar": [
			"aircraft-2404100-20260927"
		],
		"airflowLpm": [
			"aircraft-2404100-20260927"
		],
		"airflowBasis": [
			"aircraft-2404100-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 360,
		"typical": 360,
		"max": 360
	},
	"airflowBasis": "average"
};

export default product;
