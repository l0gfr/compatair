import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-kuken-kag-40",
	"slug": "meuleuse-kuken-kag-40",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "KUKEN KAG-40",
	"brand": "KUKEN",
	"model": "KAG-40",
	"mpn": "KAG-40",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation est publiée en m³/min « Normal » sans régime de charge explicite ni état de référence détaillé. Elle reste documentaire et la compatibilité demeure indéterminée.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-kuken-kag-40-technical-20261115-followup.svg",
		"alt": "Repères techniques : KUKEN KAG-40",
		"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"variant": {
		"familyId": "kuken-kag-40",
		"label": "Référence KAG-40",
		"distinguishingAttributes": {
			"reference": "KAG-40",
			"Masse publiée": "1.0 kg (2.2 lb)",
			"Longueur publiée": "190.0 mm"
		}
	},
	"editorial": {
		"overview": "KUKEN KAG-40 : meuleuse à levier pour disque 100 mm, alésage 16 mm et vitesse à vide 12 000 tr/min. La KAG-40G change la commande pour une poignée rotative et pèse 0,95 kg au lieu de 1 kg ; la KAG-20 réduit le disque à 50 mm. Vérifier le montage et la vitesse admissible de l’abrasif.",
		"verifiedFacts": [
			"Disque, diamètre extérieur : 100 mm.",
			"Disque, alésage : 16 mm.",
			"Commande : Levier.",
			"Vitesse à vide : 12 000 tr/min.",
			"Longueur sans disque : 190 mm.",
			"Masse sans disque : 1 kg.",
			"Consommation documentaire : 0,35 m³/min Normal ; 12,4 cfm.",
			"Condition générale de performance : 0,62 MPa selon le pied de tableau."
		],
		"limitations": [
			"La consommation est publiée en m³/min « Normal » sans régime de charge explicite ni état de référence détaillé. Elle reste documentaire et la compatibilité demeure indéterminée.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Disque, diamètre extérieur",
			"value": "100 mm",
			"evidenceIds": [
				"review:2026-11-12-technical:meuleuse-kuken-kag-40:0"
			]
		},
		{
			"label": "Disque, alésage",
			"value": "16 mm",
			"evidenceIds": [
				"review:2026-11-12-technical:meuleuse-kuken-kag-40:0"
			]
		},
		{
			"label": "Commande",
			"value": "Levier",
			"evidenceIds": [
				"review:2026-11-12-technical:meuleuse-kuken-kag-40:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"review:2026-11-12-technical:meuleuse-kuken-kag-40:0"
			]
		},
		{
			"label": "Longueur sans disque",
			"value": "190 mm",
			"evidenceIds": [
				"review:2026-11-12-technical:meuleuse-kuken-kag-40:0"
			]
		},
		{
			"label": "Masse sans disque",
			"value": "1 kg",
			"evidenceIds": [
				"review:2026-11-12-technical:meuleuse-kuken-kag-40:0"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "0,35 m³/min Normal ; 12,4 cfm",
			"evidenceIds": [
				"review:2026-11-12-technical:meuleuse-kuken-kag-40:0"
			]
		},
		{
			"label": "Condition générale de performance",
			"value": "0,62 MPa selon le pied de tableau",
			"evidenceIds": [
				"review:2026-11-12-technical:meuleuse-kuken-kag-40:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-kuken-best-selection-pdf-p27",
			"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf#page=27",
			"sourceLabel": "KUKEN, Best Selection, catalogue constructeur, page PDF 27",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 0da76488e568242877887f713ecd81203eaa9f2322c20eb65648d25bb7e71cc7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-12-technical:meuleuse-kuken-kag-40:0",
			"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf",
			"sourceLabel": "KUKEN, document fabricant, pages PDF 27",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "KUKEN KAG-40 : meuleuse à levier pour disque 100 mm, alésage 16 mm et vitesse à vide 12 000 tr/min. La KAG-40G change la commande pour une poignée rotative et pèse 0,95 kg au lieu de 1 kg ; la KAG-20 réduit le disque à 50 mm. Vérifier le montage et la vitesse admissible de l’abrasif. GET complet : SHA-256 0da76488e568242877887f713ecd81203eaa9f2322c20eb65648d25bb7e71cc7. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-12-technical:meuleuse-kuken-kag-40:0"
		],
		"demandExplanation": [
			"review:2026-11-12-technical:meuleuse-kuken-kag-40:0"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:meuleuse-kuken-kag-40:0"
		]
	},
	"notes": [
		"La consommation est publiée en m³/min « Normal » sans régime de charge explicite ni état de référence détaillé. Elle reste documentaire et la compatibilité demeure indéterminée."
	]
};

export default product;
