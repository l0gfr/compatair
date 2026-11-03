import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-uryu-us-3-5b-41412",
	"slug": "visseuse-uryu-us-3-5b-41412",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "URYU US-3.5B (réf. 41412)",
	"brand": "URYU",
	"model": "US-3.5B",
	"mpn": "41412",
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
		"src": "/images/products/visseuse-uryu-us-3-5b-41412.webp",
		"alt": "Repères techniques : URYU US-3.5B (réf. 41412)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P52_54.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-us-3-5b",
		"label": "Code constructeur 41412",
		"distinguishingAttributes": {
			"codeCatalogue": "41412",
			"reference": "41412"
		}
	},
	"editorial": {
		"overview": "URYU US-3.5B. La US-3.5B donne une sortie hexagonale de 6,35 mm et une longueur de 214 mm ; la US-3.5A utilise 5 mm et mesure 196 mm. La US-3.5PB de même vitesse mesure 200 mm et pèse 0,75 kg. Les 200 L/min restent une moyenne et ne chiffrent pas la pointe.",
		"verifiedFacts": [
			"Référence complète imprimée : 41412, page PDF 1.",
			"Consommation moyenne publiée : 200 L/min après conversion de l’unité originale.",
			"SPECIFICATIONS                                       Recommended Air Pressure : 0.4MPa (57 psi)\nSPECIFICATIONS                                       Recommended Air Pressure : 0.4MPa (57 psi)\nSPECIFICATIONS                                       Recommended Air Pressure : 0.4MPa (57 psi)\nSPECIFICATIONS                                       Recommended Air Pressure : 0.4MPa (57 psi)",
			"Capacité nominale de vis : 4 mm.",
			"Vitesse à vide : 2 000 tr/min.",
			"Longueur totale : 214 mm.",
			"Masse hors douille ou embout : 0,63 kg.",
			"Sortie hexagonale : 6,35 mm (1/4\")."
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
			"value": "41412",
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
			"value": "4 mm",
			"evidenceIds": [
				"visseuse-uryu-us-3-5b-41412-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2 000 tr/min",
			"evidenceIds": [
				"visseuse-uryu-us-3-5b-41412-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur totale",
			"value": "214 mm",
			"evidenceIds": [
				"visseuse-uryu-us-3-5b-41412-reserved-20261103-1"
			]
		},
		{
			"label": "Masse hors douille ou embout",
			"value": "0,63 kg",
			"evidenceIds": [
				"visseuse-uryu-us-3-5b-41412-reserved-20261103-1"
			]
		},
		{
			"label": "Sortie hexagonale",
			"value": "6,35 mm (1/4\")",
			"evidenceIds": [
				"visseuse-uryu-us-3-5b-41412-reserved-20261103-1"
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
			"id": "visseuse-uryu-us-3-5b-41412-reserved-20261103-1",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P52_54.pdf",
			"sourceLabel": "URYU : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 15cc571b3d9bc9b5a4542ac02a3a00b86fd1d9f6b42e32a6d6aae70d357b8ae5. La US-3.5B donne une sortie hexagonale de 6,35 mm et une longueur de 214 mm ; la US-3.5A utilise 5 mm et mesure 196 mm. La US-3.5PB de même vitesse mesure 200 mm et pèse 0,75 kg. Les 200 L/min restent une moyenne et ne chiffrent pas la pointe."
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
		],
		"editorial": [
			"visseuse-uryu-us-3-5b-41412-reserved-20261103-1"
		],
		"specifications": [
			"visseuse-uryu-us-3-5b-41412-reserved-20261103-1"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.4."
	]
};

export default product;
