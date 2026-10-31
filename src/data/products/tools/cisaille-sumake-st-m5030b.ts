import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-sumake-st-m5030b",
	"slug": "cisaille-sumake-st-m5030b",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "Sumake ST-M5030B",
	"brand": "Sumake",
	"model": "ST-M5030B",
	"mpn": "ST-M5030B",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 340,
		"typical": 340,
		"max": 340
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-sumake-st-m5030b.webp",
		"alt": "Repères techniques : Sumake ST-M5030B",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-st-m5030b",
		"label": "Référence ST-M5030B",
		"distinguishingAttributes": {
			"reference": "ST-M5030B",
			"Consommation dans les unités du tableau": "340 L/min ; 12 cfm",
			"Configuration complète publiée": "ST-M5030B",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "Sumake ST-M5030B. Capacité de coupe inox / acier / aluminium : 0,8 / 1,6 / 2,0 mm. Largeur de coupe : 5,5 mm. Vitesse à vide : 2 500 tr/min. Le catalogue publie 340 L/min, sans préciser le régime de consommation.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 17.",
			"Consommation dans les unités du tableau : 340 L/min ; 12 cfm.",
			"Configuration complète publiée : ST-M5030B.",
			"Régime de consommation : Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé.",
			"Capacité de coupe inox / acier / aluminium : 0,8 / 1,6 / 2,0 mm.",
			"Largeur de coupe : 5,5 mm.",
			"Vitesse à vide : 2 500 tr/min."
		],
		"limitations": [
			"Le régime de consommation n’est pas indiqué. Aucun débit maximal ou en charge n’est inventé ; le verdict reste insufficient_data.",
			"Caractéristiques déclarées par le fabricant. Aucun essai physique réalisé par CompatAir.",
			"La disponibilité locale, les raccords, les accessoires et la notice de sécurité de la référence livrée restent à vérifier."
		]
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 17",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p17"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "340 L/min ; 12 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p17"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-M5030B",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p17"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p17"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-M5030B 0.8 1.6 2.0 5.5 1/4 2,500 1/4” 3/8” 340 12 1.28 2.83 10Pcs/Ctn/16/1.2'",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p17"
			]
		},
		{
			"label": "Capacité de coupe inox / acier / aluminium",
			"value": "0,8 / 1,6 / 2,0 mm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p17",
				"cisaille-sumake-st-m5030b-reserved-20261031-1"
			]
		},
		{
			"label": "Largeur de coupe",
			"value": "5,5 mm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p17",
				"cisaille-sumake-st-m5030b-reserved-20261031-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2 500 tr/min",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p17",
				"cisaille-sumake-st-m5030b-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p17",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=17",
			"sourceLabel": "sumake-na-2024, page PDF 17",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "cisaille-sumake-st-m5030b-reserved-20261031-1",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=17",
			"sourceLabel": "Sumake ST-M5030B : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Table Sumake relue : enrichissement avec les caractéristiques propres à ce modèle, en conservant la consommation de régime non précisé hors verdict conclusif."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p17"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p17"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p17"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p17"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 340 L/min à 6,2 bar."
	]
};

export default product;
