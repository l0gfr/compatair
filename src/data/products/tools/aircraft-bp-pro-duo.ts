import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "aircraft-bp-pro-duo",
	"slug": "aircraft-bp-pro-duo",
	"brand": "Aircraft",
	"model": "BP PRO Duo",
	"mpn": "2102190",
	"categoryId": "soufflette",
	"category": "soufflette",
	"label": "Aircraft BP PRO Duo",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/aircraft-bp-pro-duo.webp",
		"alt": "Repères techniques Aircraft BP PRO Duo, référence 2102190",
		"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit ; fondée sur le relevé fabricant historique conservé par CompatAir"
	},
	"editorial": {
		"overview": "Aircraft BP PRO Duo. Le passage Aircraft cité indique un besoin d’air (éventuellement approximatif), sans le qualifier de moyenne ni de maximum en charge. Le libellé « moyen » est retiré ; la consommation reste non dimensionnante. Référence fabricant : 2102190. Longueur du tube de soufflage : 110 mm. Diamètre extérieur du tube : 6 mm. Diamètre de sortie de buse : 2.5 mm.",
		"verifiedFacts": [
			"Pression de travail publiée : 6 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Référence fabricant : 2102190.",
			"Longueur du tube de soufflage : 110 mm.",
			"Diamètre extérieur du tube : 6 mm.",
			"Diamètre de sortie de buse : 2.5 mm.",
			"Consommation de régime non précisé publiée : 150 L/min."
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
			"value": "Pression de travail publiée : 6 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"evidenceIds": [
				"aircraft-2102190-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation de régime non précisé publiée : 150 L/min.",
			"evidenceIds": [
				"aircraft-bp-pro-duo-reserved-20261031-1"
			]
		},
		{
			"label": "Longueur du tube de soufflage",
			"value": "110 mm",
			"evidenceIds": [
				"aircraft-2102190-20260927"
			]
		},
		{
			"label": "Diamètre extérieur du tube",
			"value": "6 mm",
			"evidenceIds": [
				"aircraft-2102190-20260927"
			]
		},
		{
			"label": "Diamètre de sortie de buse",
			"value": "2.5 mm",
			"evidenceIds": [
				"aircraft-2102190-20260927"
			]
		},
		{
			"label": "Masse approximative",
			"value": "0,2 kg",
			"evidenceIds": [
				"aircraft-2102190-20260927"
			]
		},
		{
			"label": "Type indiqué par le fabricant",
			"value": "Professional blow gun",
			"evidenceIds": [
				"aircraft-2102190-20260927"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":150,\"typical\":150,\"max\":150},\"workingPressureBar\":{\"min\":6,\"typical\":6,\"max\":6}}",
			"evidenceIds": [
				"aircraft-2102190-20260927",
				"aircraft-bp-pro-duo-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "aircraft-2102190-20260927",
			"sourceUrl": "https://raw.githubusercontent.com/l0gfr/compatair/6205a81599051d10cd378ed8e73f66a0e5f47e86/src/data/imports/catalog-tools-2026-09-27.json",
			"sourceLabel": "Aircraft / Stürmer, fiche constructeur 2102190, réf. 2102190 ; relevé historique, archive CompatAir",
			"sourceType": "manufacturer",
			"sourceRole": "secondary",
			"retrievedAt": "2026-10-01",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 150 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Archive secondaire : transcription de la fiche fabricant relevée le 27/09/2026, conservée dans le fichier JSON immuable du catalogue tools. La fiche d’origine est hors ligne au 23/10/2026. SHA-256 de l’archive : 22da35f9dfdf45646a1c9769247d976d34730e51aa9af02d9b5f12d55257222c. La date de consultation historique est conservée ; cette réparation de lien ne constitue pas une nouvelle vérification de ses valeurs."
		},
		{
			"id": "aircraft-2102190-documentation-20261023",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=229",
			"sourceLabel": "AIRCRAFT / Stürmer Maschinen, AIRCRAFT Hauptkatalog 2026/27, p. 229 (article 2102190)",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-23",
			"confidence": "A",
			"notes": "Document fabricant consulté le 23/10/2026. Diffusion : OXOMI, portail public MROSE, fournisseur Stürmer 702076. Empreinte PDF SHA-256 : bdb8a0fa31482b570e5d3ef86e569fc3cef3f5e14976ae7c490826db0beb07dd. Identité exacte vérifiée. Périmètre et écarts consignés dans le registre de revue du 23/10/2026 ; les caractéristiques de la fiche web de septembre gardent leur preuve historique distincte."
		},
		{
			"id": "aircraft-bp-pro-duo-reserved-20261031-1",
			"sourceUrl": "https://oxomi.com/portals/api/v1/documents/download?document=10714317&portal=3001205&pageNumber=229",
			"sourceLabel": "Aircraft BP PRO Duo : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 bdb8a0fa31482b570e5d3ef86e569fc3cef3f5e14976ae7c490826db0beb07dd. Le passage Aircraft cité indique un besoin d’air (éventuellement approximatif), sans le qualifier de moyenne ni de maximum en charge. Le libellé « moyen » est retiré ; la consommation reste non dimensionnante."
		}
	],
	"fieldSources": {
		"mpn": [
			"aircraft-2102190-20260927"
		],
		"workingPressureBar": [
			"aircraft-2102190-20260927"
		],
		"airflowLpm": [
			"aircraft-2102190-20260927"
		],
		"airflowBasis": [
			"aircraft-bp-pro-duo-reserved-20261031-1"
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
