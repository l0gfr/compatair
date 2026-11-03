import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-rs-1-2-vt-pro",
	"slug": "aircraft-rs-1-2-vt-pro",
	"brand": "Aircraft",
	"model": "RS 1/2\" VT PRO",
	"mpn": "2401565",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Aircraft RS 1/2\" VT PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-rs-1-2-vt-pro.webp",
		"alt": "Repères techniques Aircraft RS 1/2\" VT PRO, référence 2401565",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft RS 1/2\" VT PRO. Le RS 1/2 VT PRO est le cliquet carré 1/2 pouce, 150 tr/min et 68 Nm en serrage comme en desserrage. Le RS 1/4 VT PRO possède un autre carré et une autre moyenne publiée, 122 contre 124 L/min. Une consommation moyenne ne confirme pas le débit maximal pendant le serrage.",
		"verifiedFacts": [
			"Carré : 1/2 pouce.",
			"Couples maximal de serrage et desserrage : 68 Nm.",
			"Vitesse : 150 tr/min.",
			"Dimensions approximatives : 256 × 47,8 × 56,3 mm.",
			"Masse approximative : 1,2 kg.",
			"Consommation moyenne explicite : 124 L/min."
		],
		"limitations": [
			"Aucune moyenne, aucun maximum ni aucune pression de mesure supplémentaires ne sont déduits d’un simple débit approximatif ou d’une consigne de service.",
			"Source fabricant et édition identifiées ; équipement actuel à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "1/2 pouce",
			"evidenceIds": [
				"aircraft-rs-1-2-vt-pro-reserved-20261103-1"
			]
		},
		{
			"label": "Couples maximal de serrage et desserrage",
			"value": "68 Nm",
			"evidenceIds": [
				"aircraft-rs-1-2-vt-pro-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse",
			"value": "150 tr/min",
			"evidenceIds": [
				"aircraft-rs-1-2-vt-pro-reserved-20261103-1"
			]
		},
		{
			"label": "Dimensions approximatives",
			"value": "256 × 47,8 × 56,3 mm",
			"evidenceIds": [
				"aircraft-rs-1-2-vt-pro-reserved-20261103-1"
			]
		},
		{
			"label": "Masse approximative",
			"value": "1,2 kg",
			"evidenceIds": [
				"aircraft-rs-1-2-vt-pro-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne explicite",
			"value": "124 L/min",
			"evidenceIds": [
				"aircraft-rs-1-2-vt-pro-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2401565-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2401565, réf. 2401565 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 124 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2401565-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=254",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 254 (article 2401565)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : d3ff1227dfeec8ba33219f229723e8cbd9f1ae309a7d5950cdadd05cecc9eee3. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		},
		{
			"id": "aircraft-rs-1-2-vt-pro-reserved-20261103-1",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=254#page=1",
			"sourceLabel": "Aircraft : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 d3ff1227dfeec8ba33219f229723e8cbd9f1ae309a7d5950cdadd05cecc9eee3. Le RS 1/2 VT PRO est le cliquet carré 1/2 pouce, 150 tr/min et 68 Nm en serrage comme en desserrage. Le RS 1/4 VT PRO possède un autre carré et une autre moyenne publiée, 122 contre 124 L/min. Une consommation moyenne ne confirme pas le débit maximal pendant le serrage."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2401565-20260927"
		],
		"workingPressureBar": [
			"aircraft-2401565-20260927"
		],
		"airflowLpm": [
			"aircraft-2401565-20260927"
		],
		"airflowBasis": [
			"aircraft-2401565-20260927"
		],
		"editorial": [
			"aircraft-rs-1-2-vt-pro-reserved-20261103-1"
		],
		"specifications": [
			"aircraft-rs-1-2-vt-pro-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 124,
		"typical": 124,
		"max": 124
	},
	"airflowBasis": "average"
};

export default product;
