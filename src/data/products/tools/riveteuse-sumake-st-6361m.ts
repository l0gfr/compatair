import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-sumake-st-6361m",
	"slug": "riveteuse-sumake-st-6361m",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "Sumake ST-6361M",
	"brand": "Sumake",
	"model": "ST-6361M",
	"mpn": "ST-6361M",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 450,
		"typical": 450,
		"max": 450
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-sumake-st-6361m-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Sumake ST-6361M",
		"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "sumake-st-6361m",
		"label": "Référence ST-6361M",
		"distinguishingAttributes": {
			"reference": "ST-6361M",
			"Consommation dans les unités du tableau": "450 L/min ; 16 cfm",
			"Configuration complète publiée": "ST-6361M",
			"Régime de consommation": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé"
		}
	},
	"editorial": {
		"overview": "La ST-6361M pose les écrous à riveter métriques M4 à M12, contre M3 à M8 pour la 6360M et des filetages impériaux pour la 6361S. La table donne une course de 7 mm et une traction de 2 724 kgf pour la 6361M ; le matériau et le mandrin doivent correspondre à la fixation. Les 450 L/min ne sont pas un volume par cycle et restent hors calcul.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 62.",
			"Consommation dans les unités du tableau : 450 L/min ; 16 cfm.",
			"Configuration complète publiée : ST-6361M.",
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
			"value": "Page PDF 62",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p62"
			]
		},
		{
			"label": "Consommation dans les unités du tableau",
			"value": "450 L/min ; 16 cfm",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p62"
			]
		},
		{
			"label": "Configuration complète publiée",
			"value": "ST-6361M",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p62"
			]
		},
		{
			"label": "Régime de consommation",
			"value": "Non précisé par le tableau ; aucun équivalent en charge ou maximal calculé",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p62"
			]
		},
		{
			"label": "Ligne technique originale du modèle",
			"value": "ST-6361M ■: M4, M5, M6, M8, M10, M12 7 0.28 2,724 6,000 450 16 2.1 4.6 5Pcs/Ctn/20.5/2.8'",
			"evidenceIds": [
				"documented-d-sumake-na-2024-p62"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-sumake-na-2024-p62",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf#page=62",
			"sourceLabel": "sumake-na-2024, page PDF 62",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "review:2026-11-16-reviews:riveteuse-sumake-st-6361m:0",
			"sourceUrl": "https://sumakenorthamerica.com/wp-content/uploads/2024/06/2024-Pneumatic-Tools-Catalog.pdf",
			"sourceLabel": "Sumake, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La ST-6361M pose les écrous à riveter métriques M4 à M12, contre M3 à M8 pour la 6360M et des filetages impériaux pour la 6361S. La table donne une course de 7 mm et une traction de 2 724 kgf pour la 6361M ; le matériau et le mandrin doivent correspondre à la fixation. Les 450 L/min ne sont pas un volume par cycle et restent hors calcul. GET complet SHA-256 9ad8de928d1401a57c1094677b32441ea89915e2248ef4e7950148ac1d955299. Pages PDF lues : 62."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-sumake-na-2024-p62"
		],
		"workingPressureBar": [
			"documented-d-sumake-na-2024-p62"
		],
		"airflowLpm": [
			"documented-d-sumake-na-2024-p62"
		],
		"airflowBasis": [
			"documented-d-sumake-na-2024-p62"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 450 L/min à 6,2 bar."
	]
};

export default product;
