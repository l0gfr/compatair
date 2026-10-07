import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-uryu-ux-1000s-18082",
	"slug": "cle-a-chocs-uryu-ux-1000s-18082",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "URYU UX-1000S (réf. 18082)",
	"brand": "URYU",
	"model": "UX-1000S",
	"mpn": "18082",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 510,
		"typical": 510,
		"max": 510
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-uryu-ux-1000s-18082.webp",
		"alt": "Repères techniques : URYU UX-1000S (réf. 18082)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P30_34.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-ux-1000s",
		"label": "Code constructeur 18082",
		"distinguishingAttributes": {
			"codeCatalogue": "18082",
			"reference": "18082"
		}
	},
	"editorial": {
		"overview": "URYU UX-1000S, code 18082. Le tableau publie une consommation moyenne de 0,51 m³/min, soit 510 L/min. Pression de référence retenue : 6 bar.",
		"verifiedFacts": [
			"Référence complète imprimée : 18082, page PDF 5.",
			"Consommation moyenne publiée : 510 L/min après conversion de l’unité originale.",
			"SPECIFICATIONS                                       Recommended Air Pressure : 0.6MPa (85psi)\nSPECIFICATIONS                                       Recommended Air Pressure : 0.6MPa (85psi)\nSPECIFICATIONS                                       Recommended Air Pressure : 0.6MPa (85psi)"
		],
		"limitations": [
			"Une moyenne ne permet pas de conclure sur le débit continu ou la pointe : le moteur conserve insufficient_data tant que le régime de consommation n’est pas documenté.",
			"La disponibilité actuelle, les accessoires inclus et les conditions de sécurité doivent être confirmés sur la notice de cette référence."
		]
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 5",
			"evidenceIds": [
				"documented-20260930-uryu-p30-34"
			]
		},
		{
			"label": "Code URYU du tableau",
			"value": "18082",
			"evidenceIds": [
				"documented-20260930-uryu-p30-34"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.51 m³/min ; 17.9 ft³/min",
			"evidenceIds": [
				"documented-20260930-uryu-p30-34"
			]
		},
		{
			"label": "Pression recommandée dans le tableau",
			"value": "0.6 MPa",
			"evidenceIds": [
				"documented-20260930-uryu-p30-34"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-20260930-uryu-p30-34",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P30_34.pdf",
			"sourceLabel": "URYU, catalogue 2020 : uryu-P30_34",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "Document constructeur consulté le 2026-09-30. SHA-256 bfedea87f312ccc461b6512e0086d674afcec922db3881306259e050187bb373. La transcription et les pages PDF sont versionnées dans le lot documentaire. Le lieu d’hébergement ne constitue pas une validation indépendante."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-20260930-uryu-p30-34"
		],
		"airflowLpm": [
			"documented-20260930-uryu-p30-34"
		],
		"workingPressureBar": [
			"documented-20260930-uryu-p30-34"
		],
		"airflowBasis": [
			"documented-20260930-uryu-p30-34"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.6."
	]
};

export default product;
