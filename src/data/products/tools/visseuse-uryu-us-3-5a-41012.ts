import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-uryu-us-3-5a-41012",
	"slug": "visseuse-uryu-us-3-5a-41012",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "URYU US-3.5A (réf. 41012)",
	"brand": "URYU",
	"model": "US-3.5A",
	"mpn": "41012",
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
		"src": "/images/products/visseuse-uryu-us-3-5a-41012.webp",
		"alt": "Repères techniques : URYU US-3.5A (réf. 41012)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P52_54.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-us-3-5a",
		"label": "Code constructeur 41012",
		"distinguishingAttributes": {
			"codeCatalogue": "41012",
			"reference": "41012"
		}
	},
	"editorial": {
		"overview": "URYU US-3.5A. US-3.5B utilise un embout 6,35 mm et mesure 214 mm pour 0,63 kg. US-3.5A est bien la sortie 5,00 mm ; ne pas transférer l’embout 1/4 pouce de la version B. La moyenne 0,20 m³/min est commune. Capacité de vis publiée : 4 mm (No.8). Vitesse à vide approximative : 2 000 tr/min. Longueur sans embout : 196 mm.",
		"verifiedFacts": [
			"Référence complète imprimée : 41012, page PDF 1.",
			"Consommation moyenne publiée : 200 L/min après conversion de l’unité originale.",
			"Capacité de vis publiée : 4 mm (No.8).",
			"Vitesse à vide approximative : 2 000 tr/min.",
			"Longueur sans embout : 196 mm.",
			"Masse sans embout : 0,60 kg.",
			"Hexagone de l’embout : 5,00 mm."
		],
		"limitations": [
			"Une moyenne ne permet pas de conclure sur le débit continu ou la pointe : le moteur conserve insufficient_data tant que le régime de consommation n’est pas documenté.",
			"La disponibilité actuelle, les accessoires inclus et les conditions de sécurité doivent être confirmés sur la notice de cette référence.",
			"La pression recommandée du tableau n’est pas une attestation de pression de mesure d’un maximum de consommation. La moyenne reste hors verdict conclusif."
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
			"value": "41012",
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
			"label": "Capacité de vis publiée",
			"value": "4 mm (No.8)",
			"evidenceIds": [
				"visseuse-uryu-us-3-5a-41012-reserved-20261101-1"
			]
		},
		{
			"label": "Vitesse à vide approximative",
			"value": "2 000 tr/min",
			"evidenceIds": [
				"visseuse-uryu-us-3-5a-41012-reserved-20261101-1"
			]
		},
		{
			"label": "Longueur sans embout",
			"value": "196 mm",
			"evidenceIds": [
				"visseuse-uryu-us-3-5a-41012-reserved-20261101-1"
			]
		},
		{
			"label": "Masse sans embout",
			"value": "0,60 kg",
			"evidenceIds": [
				"visseuse-uryu-us-3-5a-41012-reserved-20261101-1"
			]
		},
		{
			"label": "Hexagone de l’embout",
			"value": "5,00 mm",
			"evidenceIds": [
				"visseuse-uryu-us-3-5a-41012-reserved-20261101-1"
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
			"id": "visseuse-uryu-us-3-5a-41012-reserved-20261031-1",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P52_54.pdf",
			"sourceLabel": "URYU US-3.5A : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 15cc571b3d9bc9b5a4542ac02a3a00b86fd1d9f6b42e32a6d6aae70d357b8ae5. La table URYU distingue Average Consumption et Recommended Air Pressure. Nettoyer les lignes OCR répétées et qualifier la pression comme une recommandation de service, sans maximum en charge déduit."
		},
		{
			"id": "visseuse-uryu-us-3-5a-41012-reserved-20261101-1",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P52_54.pdf",
			"sourceLabel": "URYU : revue factuelle du 1 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 15cc571b3d9bc9b5a4542ac02a3a00b86fd1d9f6b42e32a6d6aae70d357b8ae5. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
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
			"visseuse-uryu-us-3-5a-41012-reserved-20261101-1"
		],
		"specifications": [
			"visseuse-uryu-us-3-5a-41012-reserved-20261101-1"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.4."
	]
};

export default product;
