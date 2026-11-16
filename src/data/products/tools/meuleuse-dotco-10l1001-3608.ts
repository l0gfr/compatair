import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-dotco-10l1001-3608",
	"slug": "meuleuse-dotco-10l1001-3608",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Dotco 10L1001-3608",
	"brand": "Dotco",
	"model": "10L1001-3608",
	"mpn": "10L1001-3608",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation d’air manque dans le tableau de la référence. Les performances mécaniques à 90 psi / 620 kPa ne permettent pas de calculer son besoin en air.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-dotco-10l1001-3608-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Dotco 10L1001-3608",
		"sourceUrl": "https://cptmarketing.paperturn-view.com/en-cleco-catalog-sp-1081-online?pid=ODg8808063&p=216",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "dotco-10l1001-3608",
		"label": "Référence 10L1001-3608",
		"distinguishingAttributes": {
			"reference": "10L1001-3608",
			"Terminaison publiée": "1/4 in",
			"Échappement": "Avant"
		}
	},
	"editorial": {
		"overview": "La 10L1001-3608 reçoit une pince de 1/8 pouce et un échappement avant à 34 000 tr/min. La 10L1001-36 accepte 1/4 pouce ; la 10L1000-3608 garde 1/8 pouce à 30 000 tr/min. Le suffixe 08 ne désigne pas 8 mm.",
		"verifiedFacts": [
			"Pince standard : 1/8 pouce.",
			"Vitesse à vide : 34 000 tr/min.",
			"Échappement : Avant.",
			"Puissance de famille : 0,3 hp ; 0,22 kW.",
			"Longueur et masse de cette édition : 4,6 pouces ; 0,66 lb.",
			"Consommation : Absente du tableau ; demande indéterminée."
		],
		"limitations": [
			"La consommation d’air manque dans le tableau de la référence. Les performances mécaniques à 90 psi / 620 kPa ne permettent pas de calculer son besoin en air.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Pince standard",
			"value": "1/8 pouce",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-dotco-10l1001-3608:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "34 000 tr/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-dotco-10l1001-3608:0"
			]
		},
		{
			"label": "Échappement",
			"value": "Avant",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-dotco-10l1001-3608:0"
			]
		},
		{
			"label": "Puissance de famille",
			"value": "0,3 hp ; 0,22 kW",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-dotco-10l1001-3608:0"
			]
		},
		{
			"label": "Longueur et masse de cette édition",
			"value": "4,6 pouces ; 0,66 lb",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-dotco-10l1001-3608:0"
			]
		},
		{
			"label": "Consommation",
			"value": "Absente du tableau ; demande indéterminée",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-dotco-10l1001-3608:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october-cleco-p216-p216",
			"sourceUrl": "https://cptmarketing.paperturn-view.com/en-cleco-catalog-sp-1081-online?pid=ODg8808063&p=216#page=216",
			"sourceLabel": "Cleco, catalogue SP-1081, page 216",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 dd695b3d5449614c24c96b193e71d25636915f9979aee32ab89dfb843f20f5d6. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:meuleuse-dotco-10l1001-3608:0",
			"sourceUrl": "https://cptmarketing.paperturn-view.com/en-cleco-catalog-sp-1081-online?pid=ODg8808063&p=216",
			"sourceLabel": "Dotco, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La 10L1001-3608 reçoit une pince de 1/8 pouce et un échappement avant à 34 000 tr/min. La 10L1001-36 accepte 1/4 pouce ; la 10L1000-3608 garde 1/8 pouce à 30 000 tr/min. Le suffixe 08 ne désigne pas 8 mm. GET complet SHA-256 8d7e4ee130bef4bd13331d6393e04f3928bb26d43548fdd53fdb52d771f32a78. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reviews:meuleuse-dotco-10l1001-3608:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:meuleuse-dotco-10l1001-3608:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:meuleuse-dotco-10l1001-3608:0"
		]
	},
	"notes": [
		"La consommation d’air manque dans le tableau de la référence. Les performances mécaniques à 90 psi / 620 kPa ne permettent pas de calculer son besoin en air."
	]
};

export default product;
