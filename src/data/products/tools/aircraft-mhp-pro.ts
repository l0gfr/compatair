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
		"overview": "Aircraft MHP PRO. Le passage Aircraft cité indique un besoin d’air (éventuellement approximatif), sans le qualifier de moyenne ni de maximum en charge. Le libellé « moyen » est retiré ; la consommation reste non dimensionnante. Référence fabricant : 2402550. Mandrin ou entraînement publié : 14.7 mm. Cadence de frappe : 2400 min¯¹. Énergie de frappe : 28 J.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Référence fabricant : 2402550.",
			"Mandrin ou entraînement publié : 14.7 mm.",
			"Cadence de frappe : 2400 min¯¹.",
			"Énergie de frappe : 28 J.",
			"Consommation de régime non précisé publiée : 600 L/min."
		],
		"limitations": [
			"Le besoin réel dépend de la charge, du cycle et des pertes de pression dans le flexible. Aucune mesure physique CompatAir.",
			"Une consommation moyenne ne constitue pas un débit maximal en usage continu. Vérifier le régime réel auprès du fabricant avant dimensionnement.",
			"Le passage Aircraft cité indique un besoin d’air (éventuellement approximatif), sans le qualifier de moyenne ni de maximum en charge. Le libellé « moyen » est retiré ; la consommation reste non dimensionnante."
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
			"value": "Consommation de régime non précisé publiée : 600 L/min.",
			"evidenceIds": [
				"aircraft-mhp-pro-reserved-20261031-1"
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
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":600,\"typical\":600,\"max\":600},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"aircraft-2402550-20260927",
				"aircraft-mhp-pro-reserved-20261031-1"
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
		},
		{
			"id": "aircraft-mhp-pro-reserved-20261031-1",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=249",
			"sourceLabel": "Aircraft MHP PRO : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 caab06d8abda88bf05b158856a266f0a30e3ba7134e2ed08bc918b82ab4fb7f7. Le passage Aircraft cité indique un besoin d’air (éventuellement approximatif), sans le qualifier de moyenne ni de maximum en charge. Le libellé « moyen » est retiré ; la consommation reste non dimensionnante."
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
			"aircraft-mhp-pro-reserved-20261031-1"
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
	"airflowBasis": "unqualified"
};

export default product;
