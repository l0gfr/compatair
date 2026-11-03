import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-iss-1-pro-l",
	"slug": "aircraft-iss-1-pro-l",
	"brand": "Aircraft",
	"model": "ISS 1\" PRO L",
	"mpn": "2401495",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Aircraft ISS 1\" PRO L",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-iss-1-pro-l.webp",
		"alt": "Repères techniques Aircraft ISS 1\" PRO L, référence 2401495",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft ISS 1\" PRO L. La ISS 1 pouce PRO L est la clé à broche longue, avec réglage du couple en trois positions dans les deux sens. La ISS 1 pouce PRO standard conserve le maximum 2 441 Nm mais annonce 411 L/min moyens, contre 405 ici. L’extension facilite un autre accès, sans justifier une estimation de débit de pointe à partir de la moyenne.",
		"verifiedFacts": [
			"Carré : 1 pouce.",
			"Version : Broche longue, suffixe L.",
			"Couple de serrage maximal : 2 441 Nm.",
			"Vitesse : 6 000 tr/min.",
			"Consommation moyenne approximative : 405 L/min."
		],
		"limitations": [
			"Aucune moyenne, aucun maximum ni aucune pression de mesure supplémentaires ne sont déduits d’un simple débit approximatif ou d’une consigne de service.",
			"Source fabricant et édition identifiées ; équipement actuel à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "1 pouce",
			"evidenceIds": [
				"aircraft-iss-1-pro-l-reserved-20261103-1"
			]
		},
		{
			"label": "Version",
			"value": "Broche longue, suffixe L",
			"evidenceIds": [
				"aircraft-iss-1-pro-l-reserved-20261103-1"
			]
		},
		{
			"label": "Couple de serrage maximal",
			"value": "2 441 Nm",
			"evidenceIds": [
				"aircraft-iss-1-pro-l-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse",
			"value": "6 000 tr/min",
			"evidenceIds": [
				"aircraft-iss-1-pro-l-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne approximative",
			"value": "405 L/min",
			"evidenceIds": [
				"aircraft-iss-1-pro-l-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2401495-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2401495, réf. 2401495 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 405 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2401495-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=239",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 239 (article 2401495)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : ce01fe8e9602f08edb86c6bc98f59d7dca1cbb3e622f24218a434a4e2af51070. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		},
		{
			"id": "aircraft-iss-1-pro-l-reserved-20261103-1",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=239#page=1",
			"sourceLabel": "Aircraft : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 ce01fe8e9602f08edb86c6bc98f59d7dca1cbb3e622f24218a434a4e2af51070. La ISS 1 pouce PRO L est la clé à broche longue, avec réglage du couple en trois positions dans les deux sens. La ISS 1 pouce PRO standard conserve le maximum 2 441 Nm mais annonce 411 L/min moyens, contre 405 ici. L’extension facilite un autre accès, sans justifier une estimation de débit de pointe à partir de la moyenne."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2401495-20260927"
		],
		"workingPressureBar": [
			"aircraft-2401495-20260927"
		],
		"airflowLpm": [
			"aircraft-2401495-20260927"
		],
		"airflowBasis": [
			"aircraft-2401495-20260927"
		],
		"editorial": [
			"aircraft-iss-1-pro-l-reserved-20261103-1"
		],
		"specifications": [
			"aircraft-iss-1-pro-l-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 405,
		"typical": 405,
		"max": 405
	},
	"airflowBasis": "average"
};

export default product;
