import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-bp-pro-exl",
	"slug": "aircraft-bp-pro-exl",
	"brand": "Aircraft",
	"model": "BP PRO EXL",
	"mpn": "2102185",
	"categoryId": "soufflette",
	"category": "soufflette",
	"label": "Aircraft BP PRO EXL",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-bp-pro-exl.webp",
		"alt": "Repères techniques Aircraft BP PRO EXL, référence 2102185",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft BP PRO EXL. La BP PRO EXL comprend le tube de 1 000 mm, une buse Venturi et une buse à jet latéral. Les BP PRO L, XL et XXL sont d’autres configurations de la même page ; leurs accessoires ne sont pas supposés identiques. Les 150 L/min sont approximatifs, sans mention de moyenne ni de régime de mesure dans la source allemande.",
		"verifiedFacts": [
			"Tube de soufflage : 1 000 mm.",
			"Buses fournies : Venturi et jet latéral.",
			"Raccordement : Au choix à la tête ou à la poignée.",
			"Masse approximative : 0,5 kg.",
			"Consommation approximative, régime non précisé : 150 L/min."
		],
		"limitations": [
			"Aucune moyenne, aucun maximum ni aucune pression de mesure supplémentaires ne sont déduits d’un simple débit approximatif ou d’une consigne de service.",
			"Source fabricant et édition identifiées ; équipement actuel à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Tube de soufflage",
			"value": "1 000 mm",
			"evidenceIds": [
				"aircraft-bp-pro-exl-reserved-20261103-1"
			]
		},
		{
			"label": "Buses fournies",
			"value": "Venturi et jet latéral",
			"evidenceIds": [
				"aircraft-bp-pro-exl-reserved-20261103-1"
			]
		},
		{
			"label": "Raccordement",
			"value": "Au choix à la tête ou à la poignée",
			"evidenceIds": [
				"aircraft-bp-pro-exl-reserved-20261103-1"
			]
		},
		{
			"label": "Masse approximative",
			"value": "0,5 kg",
			"evidenceIds": [
				"aircraft-bp-pro-exl-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation approximative, régime non précisé",
			"value": "150 L/min",
			"evidenceIds": [
				"aircraft-bp-pro-exl-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2102185-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2102185, réf. 2102185 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 150 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2102185-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=231",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 231 (article 2102185)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : bc60546f310ec633fe500c22a71abb07b8a23499e7359d7ef6a8a505c786fa2f. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		},
		{
			"id": "aircraft-bp-pro-exl-reserved-20261103-1",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=231#page=1",
			"sourceLabel": "Aircraft : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 bc60546f310ec633fe500c22a71abb07b8a23499e7359d7ef6a8a505c786fa2f. La BP PRO EXL comprend le tube de 1 000 mm, une buse Venturi et une buse à jet latéral. Les BP PRO L, XL et XXL sont d’autres configurations de la même page ; leurs accessoires ne sont pas supposés identiques. Les 150 L/min sont approximatifs, sans mention de moyenne ni de régime de mesure dans la source allemande."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2102185-20260927"
		],
		"workingPressureBar": [
			"aircraft-2102185-20260927"
		],
		"airflowLpm": [
			"aircraft-2102185-20260927"
		],
		"airflowBasis": [
			"aircraft-bp-pro-exl-reserved-20261103-1"
		],
		"editorial": [
			"aircraft-bp-pro-exl-reserved-20261103-1"
		],
		"specifications": [
			"aircraft-bp-pro-exl-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 150,
		"typical": 150,
		"max": 150
	},
	"airflowBasis": "unqualified"
};

export default product;
