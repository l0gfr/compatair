import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "marteau-a-river-uryu-brh-5ud-70942",
	"slug": "marteau-a-river-uryu-brh-5ud-70942",
	"categoryId": "marteau-a-river",
	"category": "marteau-a-river",
	"label": "URYU BRH-5UD (réf. 70942)",
	"brand": "URYU",
	"model": "BRH-5UD",
	"mpn": "70942",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 370,
		"typical": 370,
		"max": 370
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/marteau-a-river-uryu-brh-5ud-70942-technical-20261116-reviews.svg",
		"alt": "Repères techniques : URYU BRH-5UD (réf. 70942)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P70_71.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "uryu-brh-5ud",
		"label": "Code constructeur 70942",
		"distinguishingAttributes": {
			"codeCatalogue": "70942",
			"reference": "70942"
		}
	},
	"editorial": {
		"overview": "Le BRH-5UD de code 70942 correspond à la version R à emmanchement rond ; la colonne H du catalogue porte un autre code et un autre équipement de rivetage. Le 5UD annonce 1 800 coups/min et une course de 100 mm, contre 2 800 coups/min et 38 mm pour le 1UD. Les 0,37 m³/min sont une moyenne. La pression de 0,6 MPa est une recommandation de service, pas un point de consommation en charge établi.",
		"verifiedFacts": [
			"Référence complète imprimée : 70942, page PDF 1.",
			"Consommation moyenne publiée : 370 L/min après conversion de l’unité originale.",
			"SPECIFICATIONS                                       Recommended Air Pressure : 0.6MPa (85psi)\nSPECIFICATIONS                                       Recommended Air Pressure : 0.6MPa (85psi)"
		],
		"limitations": [
			"Une moyenne ne permet pas de conclure sur le débit continu ou la pointe : le moteur conserve insufficient_data tant que le régime de consommation n’est pas documenté.",
			"La disponibilité actuelle, les accessoires inclus et les conditions de sécurité doivent être confirmés sur la notice de cette référence."
		]
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 1",
			"evidenceIds": [
				"documented-20260930-uryu-p70-71"
			]
		},
		{
			"label": "Code URYU du tableau",
			"value": "70942",
			"evidenceIds": [
				"documented-20260930-uryu-p70-71"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.37 m³/min ; 13.0 ft³/min",
			"evidenceIds": [
				"documented-20260930-uryu-p70-71"
			]
		},
		{
			"label": "Pression recommandée dans le tableau",
			"value": "0.6 MPa",
			"evidenceIds": [
				"documented-20260930-uryu-p70-71"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-20260930-uryu-p70-71",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P70_71.pdf",
			"sourceLabel": "URYU, catalogue 2020 : uryu-P70_71",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "Document constructeur consulté le 2026-09-30. SHA-256 51a1fe7622e1fe09d10ce44fc0fdbe4bc87c11f14d72836a26e18c2a733d7884. La transcription et les pages PDF sont versionnées dans le lot documentaire. Le lieu d’hébergement ne constitue pas une validation indépendante."
		},
		{
			"id": "review:2026-11-16-reviews:marteau-a-river-uryu-brh-5ud-70942:0",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P70_71.pdf",
			"sourceLabel": "URYU, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le BRH-5UD de code 70942 correspond à la version R à emmanchement rond ; la colonne H du catalogue porte un autre code et un autre équipement de rivetage. Le 5UD annonce 1 800 coups/min et une course de 100 mm, contre 2 800 coups/min et 38 mm pour le 1UD. Les 0,37 m³/min sont une moyenne. La pression de 0,6 MPa est une recommandation de service, pas un point de consommation en charge établi. GET complet SHA-256 51a1fe7622e1fe09d10ce44fc0fdbe4bc87c11f14d72836a26e18c2a733d7884. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-20260930-uryu-p70-71"
		],
		"airflowLpm": [
			"documented-20260930-uryu-p70-71"
		],
		"workingPressureBar": [
			"documented-20260930-uryu-p70-71"
		],
		"airflowBasis": [
			"documented-20260930-uryu-p70-71"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.6."
	]
};

export default product;
