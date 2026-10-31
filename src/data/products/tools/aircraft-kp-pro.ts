import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-kp-pro",
	"slug": "aircraft-kp-pro",
	"brand": "Aircraft",
	"model": "KP PRO",
	"mpn": "2102270",
	"categoryId": "pistolet-cartouche",
	"category": "pistolet-cartouche",
	"label": "Aircraft KP PRO",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 8,
		"typical": 8,
		"max": 8
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-kp-pro.webp",
		"alt": "Repères techniques Aircraft KP PRO, référence 2102270",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft KP PRO. Le passage Aircraft cité indique un besoin d’air (éventuellement approximatif), sans le qualifier de moyenne ni de maximum en charge. Le libellé « moyen » est retiré ; la consommation reste non dimensionnante. Référence fabricant : 2102270. Capacité maximale de cartouche : 310 ml. Masse approximative : 1.04 kg. Type indiqué par le fabricant : Caulking gun.",
		"verifiedFacts": [
			"Pression de travail publiée : 8 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Référence fabricant : 2102270.",
			"Capacité maximale de cartouche : 310 ml.",
			"Masse approximative : 1.04 kg.",
			"Type indiqué par le fabricant : Caulking gun.",
			"Consommation de régime non précisé publiée : 100 L/min."
		],
		"limitations": [
			"Le besoin réel dépend de la charge, du cycle et des pertes de pression dans le flexible. Aucune mesure physique CompatAir.",
			"Une consommation moyenne ne constitue pas un débit maximal en usage continu. Vérifier le régime réel auprès du fabricant avant dimensionnement.",
			"Écarts entre documents fabricant : Masse approximative : relevé de fiche du 27/09/2026 = 1.04 kg ; AIRCRAFT Hauptkatalog 2026/27 = 1kg.",
			"Le passage Aircraft cité indique un besoin d’air (éventuellement approximatif), sans le qualifier de moyenne ni de maximum en charge. Le libellé « moyen » est retiré ; la consommation reste non dimensionnante."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de travail publiée : 8 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"evidenceIds": [
				"aircraft-2102270-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation de régime non précisé publiée : 100 L/min.",
			"evidenceIds": [
				"aircraft-kp-pro-reserved-20261031-1"
			]
		},
		{
			"label": "Capacité maximale de cartouche",
			"value": "310 ml",
			"evidenceIds": [
				"aircraft-2102270-20260927"
			]
		},
		{
			"label": "Masse approximative",
			"value": "1.04 kg",
			"evidenceIds": [
				"aircraft-2102270-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Caulking gun",
			"evidenceIds": [
				"aircraft-2102270-20260927"
			]
		},
		{
			"label": "Écart documentaire fabricant",
			"value": "Masse approximative : relevé de fiche du 27/09/2026 = 1.04 kg ; AIRCRAFT Hauptkatalog 2026/27 = 1kg.",
			"evidenceIds": [
				"aircraft-2102270-20260927",
				"aircraft-2102270-documentation-20261023"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":100,\"typical\":100,\"max\":100},\"workingPressureBar\":{\"min\":8,\"typical\":8,\"max\":8}}",
			"evidenceIds": [
				"aircraft-2102270-20260927",
				"aircraft-kp-pro-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2102270-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2102270, réf. 2102270 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 100 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2102270-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=282",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 282 (article 2102270)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : 09fc54df17fbb94185f0f908c05f730839632d33ab4ece61184455e12ea2469d. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		},
		{
			"id": "aircraft-kp-pro-reserved-20261031-1",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=282",
			"sourceLabel": "Aircraft KP PRO : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 09fc54df17fbb94185f0f908c05f730839632d33ab4ece61184455e12ea2469d. Le passage Aircraft cité indique un besoin d’air (éventuellement approximatif), sans le qualifier de moyenne ni de maximum en charge. Le libellé « moyen » est retiré ; la consommation reste non dimensionnante."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2102270-20260927"
		],
		"workingPressureBar": [
			"aircraft-2102270-20260927"
		],
		"airflowLpm": [
			"aircraft-2102270-20260927"
		],
		"airflowBasis": [
			"aircraft-kp-pro-reserved-20261031-1"
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
