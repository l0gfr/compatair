import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-ps-c-pro",
	"slug": "aircraft-ps-c-pro",
	"brand": "Aircraft",
	"model": "PS-C PRO",
	"mpn": "2404125",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Aircraft PS-C PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-ps-c-pro.webp",
		"alt": "Repères techniques Aircraft PS-C PRO, référence 2404125",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft PS-C PRO. Le passage Aircraft cité indique un besoin d’air (éventuellement approximatif), sans le qualifier de moyenne ni de maximum en charge. Le libellé « moyen » est retiré ; la consommation reste non dimensionnante. Référence fabricant : 2404125. Diamètre intérieur du flexible : 10 mm. Vitesse de rotation : 1800 min¯¹. Mandrin ou entraînement publié : Hexagon ¼ \".",
		"verifiedFacts": [
			"Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Référence fabricant : 2404125.",
			"Diamètre intérieur du flexible : 10 mm.",
			"Vitesse de rotation : 1800 min¯¹.",
			"Mandrin ou entraînement publié : Hexagon ¼ \".",
			"Consommation de régime non précisé publiée : 238 L/min."
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
			"value": "Pression de travail publiée : 6,2 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"evidenceIds": [
				"aircraft-2404125-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation de régime non précisé publiée : 238 L/min.",
			"evidenceIds": [
				"aircraft-ps-c-pro-reserved-20261031-1"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "10 mm",
			"evidenceIds": [
				"aircraft-2404125-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1800 min¯¹",
			"evidenceIds": [
				"aircraft-2404125-20260927"
			]
		},
		{
			"label": "Mandrin ou entraînement publié",
			"value": "Hexagon ¼ \"",
			"evidenceIds": [
				"aircraft-2404125-20260927"
			]
		},
		{
			"label": "Couple maximal de serrage",
			"value": "8 Nm",
			"evidenceIds": [
				"aircraft-2404125-20260927"
			]
		},
		{
			"label": "Couple maximal de desserrage",
			"value": "8 Nm",
			"evidenceIds": [
				"aircraft-2404125-20260927"
			]
		},
		{
			"label": "Longueur approximative",
			"value": "210 mm",
			"evidenceIds": [
				"aircraft-2404125-20260927"
			]
		},
		{
			"label": "Largeur approximative",
			"value": "43 mm",
			"evidenceIds": [
				"aircraft-2404125-20260927"
			]
		},
		{
			"label": "Hauteur approximative",
			"value": "157 mm",
			"evidenceIds": [
				"aircraft-2404125-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Pistol screwdriver",
			"evidenceIds": [
				"aircraft-2404125-20260927"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":238,\"typical\":238,\"max\":238},\"workingPressureBar\":{\"min\":6.2,\"typical\":6.2,\"max\":6.2}}",
			"evidenceIds": [
				"aircraft-2404125-20260927",
				"aircraft-ps-c-pro-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2404125-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2404125, réf. 2404125 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 238 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2404125-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=256",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 256 (article 2404125)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : e3ca2a3d0dbf91da0d41d1d29da77616bc5fba9826ada579bb5dc849ccb08ac7. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		},
		{
			"id": "aircraft-ps-c-pro-reserved-20261031-1",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=256",
			"sourceLabel": "Aircraft PS-C PRO : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 e3ca2a3d0dbf91da0d41d1d29da77616bc5fba9826ada579bb5dc849ccb08ac7. Le passage Aircraft cité indique un besoin d’air (éventuellement approximatif), sans le qualifier de moyenne ni de maximum en charge. Le libellé « moyen » est retiré ; la consommation reste non dimensionnante."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2404125-20260927"
		],
		"workingPressureBar": [
			"aircraft-2404125-20260927"
		],
		"airflowLpm": [
			"aircraft-2404125-20260927"
		],
		"airflowBasis": [
			"aircraft-ps-c-pro-reserved-20261031-1"
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
