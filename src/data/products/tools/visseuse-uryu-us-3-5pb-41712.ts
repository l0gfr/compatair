import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-uryu-us-3-5pb-41712",
	"slug": "visseuse-uryu-us-3-5pb-41712",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "URYU US-3.5PB (réf. 41712)",
	"brand": "URYU",
	"model": "US-3.5PB",
	"mpn": "41712",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 4,
		"typical": 4,
		"max": 4
	},
	"airflowLpm": {
		"min": 200,
		"typical": 200,
		"max": 200
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-uryu-us-3-5pb-41712-technical-20261116-reviews.svg",
		"alt": "Repères techniques : URYU US-3.5PB (réf. 41712)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P52_54.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "uryu-us-3-5pb",
		"label": "Code constructeur 41712",
		"distinguishingAttributes": {
			"codeCatalogue": "41712",
			"reference": "41712"
		}
	},
	"editorial": {
		"overview": "US-3.5PB, code 41712 : capacité nominale de vis 4 mm, porte-embout hexagonal 6,35 mm et environ 2 000 tr/min, longueur 200 mm et masse 0,75 kg sans embout. La US-3.5B mesure 214 mm pour 0,63 kg et la US-3.5A utilise un hexagone de 5 mm. Les embouts ne sont pas transférés d’une version à l’autre.",
		"verifiedFacts": [
			"Référence complète imprimée : 41712, page PDF 1.",
			"Consommation moyenne publiée : 200 L/min après conversion de l’unité originale.",
			"SPECIFICATIONS                                       Recommended Air Pressure : 0.4MPa (57psi)\nSPECIFICATIONS                                       Recommended Air Pressure : 0.4MPa (57psi)\nSPECIFICATIONS                                       Recommended Air Pressure : 0.4MPa (57psi)\nSPECIFICATIONS                                       Recommended Air Pressure : 0.4MPa (57psi)",
			"Capacité nominale de vis : 4 mm (No.8).",
			"Hexagone de l’embout : 6,35 mm (1/4 pouce).",
			"Vitesse à vide approximative : 2 000 tr/min.",
			"Longueur sans embout : 200 mm.",
			"Masse sans embout : 0,75 kg."
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
				"documented-20260930-uryu-p52-54"
			]
		},
		{
			"label": "Code URYU du tableau",
			"value": "41712",
			"evidenceIds": [
				"documented-20260930-uryu-p52-54"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.2 m³/min ; 7.0 ft³/min",
			"evidenceIds": [
				"documented-20260930-uryu-p52-54"
			]
		},
		{
			"label": "Pression recommandée dans le tableau",
			"value": "0.4 MPa",
			"evidenceIds": [
				"documented-20260930-uryu-p52-54"
			]
		},
		{
			"label": "Capacité nominale de vis",
			"value": "4 mm (No.8)",
			"evidenceIds": [
				"review:2026-11-16-reviews:visseuse-uryu-us-3-5pb-41712:0"
			]
		},
		{
			"label": "Hexagone de l’embout",
			"value": "6,35 mm (1/4 pouce)",
			"evidenceIds": [
				"review:2026-11-16-reviews:visseuse-uryu-us-3-5pb-41712:0"
			]
		},
		{
			"label": "Vitesse à vide approximative",
			"value": "2 000 tr/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:visseuse-uryu-us-3-5pb-41712:0"
			]
		},
		{
			"label": "Longueur sans embout",
			"value": "200 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:visseuse-uryu-us-3-5pb-41712:0"
			]
		},
		{
			"label": "Masse sans embout",
			"value": "0,75 kg",
			"evidenceIds": [
				"review:2026-11-16-reviews:visseuse-uryu-us-3-5pb-41712:0"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-20260930-uryu-p52-54",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P52_54.pdf",
			"sourceLabel": "URYU, catalogue 2020 : uryu-P52_54",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "Document constructeur consulté le 2026-09-30. SHA-256 15cc571b3d9bc9b5a4542ac02a3a00b86fd1d9f6b42e32a6d6aae70d357b8ae5. La transcription et les pages PDF sont versionnées dans le lot documentaire. Le lieu d’hébergement ne constitue pas une validation indépendante."
		},
		{
			"id": "review:2026-11-16-reviews:visseuse-uryu-us-3-5pb-41712:0",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P52_54.pdf",
			"sourceLabel": "URYU, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "US-3.5PB, code 41712 : capacité nominale de vis 4 mm, porte-embout hexagonal 6,35 mm et environ 2 000 tr/min, longueur 200 mm et masse 0,75 kg sans embout. La US-3.5B mesure 214 mm pour 0,63 kg et la US-3.5A utilise un hexagone de 5 mm. Les embouts ne sont pas transférés d’une version à l’autre. GET complet SHA-256 15cc571b3d9bc9b5a4542ac02a3a00b86fd1d9f6b42e32a6d6aae70d357b8ae5. Pages PDF lues : 1."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-20260930-uryu-p52-54"
		],
		"airflowLpm": [
			"documented-20260930-uryu-p52-54"
		],
		"workingPressureBar": [
			"documented-20260930-uryu-p52-54"
		],
		"airflowBasis": [
			"documented-20260930-uryu-p52-54"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.4."
	]
};

export default product;
