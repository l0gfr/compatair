import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-ws-125-pro",
	"slug": "aircraft-ws-125-pro",
	"brand": "Aircraft",
	"model": "WS 125 PRO",
	"mpn": "2403470",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Aircraft WS 125 PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-ws-125-pro.webp",
		"alt": "Repères techniques Aircraft WS 125 PRO, référence 2403470",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft WS 125 PRO. La WS 125 PRO publie 10 000 tr/min et 1,7 kg. Le tableau indique Aufnahme 3/4 pouce sans préciser carré ou filetage : l’ancienne mention Square est retirée, et aucun filetage M14 n’est supposé. L’IWS 125-2 PRO est une autre référence avec son propre tableau. Les 490 L/min approximatifs restent de régime non précisé.",
		"verifiedFacts": [
			"Type : Meuleuse d’angle.",
			"Vitesse : 10 000 tr/min.",
			"Masse approximative : 1,7 kg.",
			"Montage, libellé littéral du tableau : Aufnahme 3/4 pouce, forme non précisée.",
			"Consommation approximative, régime non précisé : 490 L/min."
		],
		"limitations": [
			"Aucune moyenne, aucun maximum ni aucune pression de mesure supplémentaires ne sont déduits d’un simple débit approximatif ou d’une consigne de service.",
			"Source fabricant et édition identifiées ; équipement actuel à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Type",
			"value": "Meuleuse d’angle",
			"evidenceIds": [
				"aircraft-ws-125-pro-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse",
			"value": "10 000 tr/min",
			"evidenceIds": [
				"aircraft-ws-125-pro-reserved-20261103-1"
			]
		},
		{
			"label": "Masse approximative",
			"value": "1,7 kg",
			"evidenceIds": [
				"aircraft-ws-125-pro-reserved-20261103-1"
			]
		},
		{
			"label": "Montage, libellé littéral du tableau",
			"value": "Aufnahme 3/4 pouce, forme non précisée",
			"evidenceIds": [
				"aircraft-ws-125-pro-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation approximative, régime non précisé",
			"value": "490 L/min",
			"evidenceIds": [
				"aircraft-ws-125-pro-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2403470-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2403470, réf. 2403470 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 490 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2403470-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=258",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 258 (article 2403470)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : 6a7136e5780ad551227d2378d940de7431077324181b3a3b23435803482cb56c. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		},
		{
			"id": "aircraft-ws-125-pro-reserved-20261103-1",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=258#page=1",
			"sourceLabel": "Aircraft : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 6a7136e5780ad551227d2378d940de7431077324181b3a3b23435803482cb56c. La WS 125 PRO publie 10 000 tr/min et 1,7 kg. Le tableau indique Aufnahme 3/4 pouce sans préciser carré ou filetage : l’ancienne mention Square est retirée, et aucun filetage M14 n’est supposé. L’IWS 125-2 PRO est une autre référence avec son propre tableau. Les 490 L/min approximatifs restent de régime non précisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2403470-20260927"
		],
		"workingPressureBar": [
			"aircraft-2403470-20260927"
		],
		"airflowLpm": [
			"aircraft-2403470-20260927"
		],
		"airflowBasis": [
			"aircraft-ws-125-pro-reserved-20261103-1"
		],
		"editorial": [
			"aircraft-ws-125-pro-reserved-20261103-1"
		],
		"specifications": [
			"aircraft-ws-125-pro-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 490,
		"typical": 490,
		"max": 490
	},
	"airflowBasis": "unqualified"
};

export default product;
