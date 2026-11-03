import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-bm-c-13-pro",
	"slug": "aircraft-bm-c-13-pro",
	"brand": "Aircraft",
	"model": "BM-C 13 PRO",
	"mpn": "2404115",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Aircraft BM-C 13 PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-bm-c-13-pro.webp",
		"alt": "Repères techniques Aircraft BM-C 13 PRO, référence 2404115",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft BM-C 13 PRO. La BM-C 13 PRO est la perceuse à basse vitesse, 800 tr/min et 12,5 Nm, mandrin 2–13 mm et poignée latérale. La BM-C 10 PRO donne 2 000 tr/min, 5 Nm et mandrin 1–10 mm, avec le même débit publié 238 L/min. Le document allemand dit Luftbedarf ca., pas consommation moyenne ; la qualification de régime devient non précisée.",
		"verifiedFacts": [
			"Mandrin sans clé : 2–13 mm.",
			"Capacité acier / bois : 13 / 25 mm.",
			"Vitesse : 800 tr/min.",
			"Couple : 12,5 Nm.",
			"Masse approximative : 1,3 kg.",
			"Consommation approximative, régime non précisé : 238 L/min."
		],
		"limitations": [
			"Aucune moyenne, aucun maximum ni aucune pression de mesure supplémentaires ne sont déduits d’un simple débit approximatif ou d’une consigne de service.",
			"Source fabricant et édition identifiées ; équipement actuel à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Mandrin sans clé",
			"value": "2–13 mm",
			"evidenceIds": [
				"aircraft-bm-c-13-pro-reserved-20261103-1"
			]
		},
		{
			"label": "Capacité acier / bois",
			"value": "13 / 25 mm",
			"evidenceIds": [
				"aircraft-bm-c-13-pro-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse",
			"value": "800 tr/min",
			"evidenceIds": [
				"aircraft-bm-c-13-pro-reserved-20261103-1"
			]
		},
		{
			"label": "Couple",
			"value": "12,5 Nm",
			"evidenceIds": [
				"aircraft-bm-c-13-pro-reserved-20261103-1"
			]
		},
		{
			"label": "Masse approximative",
			"value": "1,3 kg",
			"evidenceIds": [
				"aircraft-bm-c-13-pro-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation approximative, régime non précisé",
			"value": "238 L/min",
			"evidenceIds": [
				"aircraft-bm-c-13-pro-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2404115-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2404115, réf. 2404115 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 238 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2404115-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=246",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 246 (article 2404115)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : 74986b13a5fe1d6a43ebba75e5673e8acd1a9dc3e6fd9998b11bd2c982039485. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		},
		{
			"id": "aircraft-bm-c-13-pro-reserved-20261103-1",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=246#page=1",
			"sourceLabel": "Aircraft : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 74986b13a5fe1d6a43ebba75e5673e8acd1a9dc3e6fd9998b11bd2c982039485. La BM-C 13 PRO est la perceuse à basse vitesse, 800 tr/min et 12,5 Nm, mandrin 2–13 mm et poignée latérale. La BM-C 10 PRO donne 2 000 tr/min, 5 Nm et mandrin 1–10 mm, avec le même débit publié 238 L/min. Le document allemand dit Luftbedarf ca., pas consommation moyenne ; la qualification de régime devient non précisée."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2404115-20260927"
		],
		"workingPressureBar": [
			"aircraft-2404115-20260927"
		],
		"airflowLpm": [
			"aircraft-2404115-20260927"
		],
		"airflowBasis": [
			"aircraft-bm-c-13-pro-reserved-20261103-1"
		],
		"editorial": [
			"aircraft-bm-c-13-pro-reserved-20261103-1"
		],
		"specifications": [
			"aircraft-bm-c-13-pro-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 238,
		"typical": 238,
		"max": 238
	},
	"airflowBasis": "unqualified"
};

export default product;
