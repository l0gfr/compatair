import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-sp-pro",
	"slug": "aircraft-sp-pro",
	"brand": "Aircraft",
	"model": "SP PRO",
	"mpn": "2102290",
	"categoryId": "pistolet-cartouche",
	"category": "pistolet-cartouche",
	"label": "Aircraft SP PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 8,
		"typical": 8,
		"max": 8
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-sp-pro.webp",
		"alt": "Repères techniques Aircraft SP PRO, référence 2102290",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft SP PRO. Le SP PRO est le pistolet pour poches de mastic jusqu’à 600 ml, avec décompression rapide et réglage progressif. Le KP PRO reçoit les cartouches 310 ml, avec le même chiffre de débit 100 L/min dans cette édition. Le contenant distingue les usages. La source ne précise ni moyenne ni débit par extrusion ; ces régimes ne sont pas inventés.",
		"verifiedFacts": [
			"Contenant : Poches de mastic jusqu’à 600 ml.",
			"Réglage : Progressif, avec décompression rapide.",
			"Masse approximative du catalogue : 1,3 kg.",
			"Consommation, régime non précisé : 100 L/min.",
			"Pression de service : 8 bar."
		],
		"limitations": [
			"Aucune moyenne, aucun maximum ni aucune pression de mesure supplémentaires ne sont déduits d’un simple débit approximatif ou d’une consigne de service.",
			"Source fabricant et édition identifiées ; équipement actuel à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Contenant",
			"value": "Poches de mastic jusqu’à 600 ml",
			"evidenceIds": [
				"aircraft-sp-pro-reserved-20261103-1"
			]
		},
		{
			"label": "Réglage",
			"value": "Progressif, avec décompression rapide",
			"evidenceIds": [
				"aircraft-sp-pro-reserved-20261103-1"
			]
		},
		{
			"label": "Masse approximative du catalogue",
			"value": "1,3 kg",
			"evidenceIds": [
				"aircraft-sp-pro-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation, régime non précisé",
			"value": "100 L/min",
			"evidenceIds": [
				"aircraft-sp-pro-reserved-20261103-1"
			]
		},
		{
			"label": "Pression de service",
			"value": "8 bar",
			"evidenceIds": [
				"aircraft-sp-pro-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2102290-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2102290, réf. 2102290 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 100 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2102290-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=282",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 282 (article 2102290)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : 09fc54df17fbb94185f0f908c05f730839632d33ab4ece61184455e12ea2469d. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		},
		{
			"id": "aircraft-sp-pro-reserved-20261103-1",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=282#page=1",
			"sourceLabel": "Aircraft : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 09fc54df17fbb94185f0f908c05f730839632d33ab4ece61184455e12ea2469d. Le SP PRO est le pistolet pour poches de mastic jusqu’à 600 ml, avec décompression rapide et réglage progressif. Le KP PRO reçoit les cartouches 310 ml, avec le même chiffre de débit 100 L/min dans cette édition. Le contenant distingue les usages. La source ne précise ni moyenne ni débit par extrusion ; ces régimes ne sont pas inventés."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2102290-20260927"
		],
		"workingPressureBar": [
			"aircraft-2102290-20260927"
		],
		"airflowLpm": [
			"aircraft-2102290-20260927"
		],
		"airflowBasis": [
			"aircraft-sp-pro-reserved-20261103-1"
		],
		"editorial": [
			"aircraft-sp-pro-reserved-20261103-1"
		],
		"specifications": [
			"aircraft-sp-pro-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 100,
		"typical": 100,
		"max": 100
	},
	"airflowBasis": "unqualified"
};

export default product;
