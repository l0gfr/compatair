import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "taraudeuse-sumake-st-tt130",
	"slug": "taraudeuse-sumake-st-tt130",
	"categoryId": "taraudeuse",
	"category": "taraudeuse",
	"label": "Sumake ST-TT130",
	"brand": "Sumake",
	"model": "ST-TT130",
	"mpn": "ST-TT130",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 396,
		"typical": 396,
		"max": 396
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/taraudeuse-sumake-st-tt130-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Sumake ST-TT130",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "sumake-st-tt130",
		"label": "Référence ST-TT130",
		"distinguishingAttributes": {
			"reference": "ST-TT130",
			"Consommation dans les unités du tableau": "396 L/min ; 14 cfm",
			"Configuration complète publiée": "ST-TT130",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "La ST-TT130 est la taraudeuse M3–M8 à cône B12 et échappement arrière, 350 tr/min et 370 mm. La ST-TT120 conserve la capacité et la vitesse mais évacue l’air par la poignée et mesure 267 mm ; la ST-TT140 passe au cône B16 pour M3–M12. L’interface et l’espace disponible guident le choix. Les 396 L/min n’ont pas de régime de consommation établi.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 27.",
			"Consommation dans les unités du tableau : 396 L/min ; 14 cfm.",
			"Configuration complète publiée : ST-TT130.",
			"Régime de consommation : Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé."
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
			"value": "Page PDF 27",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p27"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "396 L/min ; 14 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p27"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-TT130",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p27"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p27"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-TT130 M3-M8 350 B12 396 14 370 14-4/7 1/4\" 2.3 5.07 10Pcs/Ctn/28.64/1.1'",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p27"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p27",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=27",
			"sourceLabel": "sumake-na-2024, page PDF 27",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "review:2026-11-16-reviews:taraudeuse-sumake-st-tt130:0",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
			"sourceLabel": "Sumake, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La ST-TT130 est la taraudeuse M3–M8 à cône B12 et échappement arrière, 350 tr/min et 370 mm. La ST-TT120 conserve la capacité et la vitesse mais évacue l’air par la poignée et mesure 267 mm ; la ST-TT140 passe au cône B16 pour M3–M12. L’interface et l’espace disponible guident le choix. Les 396 L/min n’ont pas de régime de consommation établi. GET complet SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Pages PDF lues : 27."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p27"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p27"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p27"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p27"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 396 L/min à 6,2 bar."
	]
};

export default product;
