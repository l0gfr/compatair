import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-impulsions-uryu-u-350d-19242",
	"slug": "cle-a-impulsions-uryu-u-350d-19242",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "URYU U-350D (réf. 19242)",
	"brand": "URYU",
	"model": "U-350D",
	"mpn": "19242",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 150,
		"typical": 150,
		"max": 150
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-uryu-u-350d-19242.webp",
		"alt": "Repères techniques : URYU U-350D (réf. 19242)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P30_34.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-u-350d",
		"label": "Code constructeur 19242",
		"distinguishingAttributes": {
			"codeCatalogue": "19242",
			"reference": "19242"
		}
	},
	"editorial": {
		"overview": "URYU U-350D. La U-350D mesure 154 mm contre 238 mm pour la U-350SD, à plages de couple publiées identiques. La U-310SD de 222 mm vise une plage de couple inférieure. Les deux pressions de couple restent séparées et les 150 L/min sont une moyenne.",
		"verifiedFacts": [
			"Référence complète imprimée : 19242, page PDF 5.",
			"Consommation moyenne publiée : 150 L/min après conversion de l’unité originale.",
			"SPECIFICATIONS                                       Recommended Air Pressure : 0.6MPa (85 psi)\nSPECIFICATIONS                                       Recommended Air Pressure : 0.6MPa (85 psi)\nSPECIFICATIONS                                       Recommended Air Pressure : 0.6MPa (85 psi)",
			"Capacité nominale de vis : 3–4 mm.",
			"Longueur totale : 154 mm.",
			"Masse hors douille ou embout : 0,77 kg.",
			"Sortie hexagonale rapide : 6,35 mm (1/4\").",
			"Couple indicatif à 0,5 MPa : 3,0–5,0 Nm.",
			"Couple indicatif à 0,6 MPa : 3,5–5,8 Nm."
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
			"value": "19242",
			"evidenceIds": [
				"documented-20260930-uryu-p30-34"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.15 m³/min ; 5.3 ft³/min",
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
		},
		{
			"label": "Capacité nominale de vis",
			"value": "3–4 mm",
			"evidenceIds": [
				"cle-a-impulsions-uryu-u-350d-19242-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur totale",
			"value": "154 mm",
			"evidenceIds": [
				"cle-a-impulsions-uryu-u-350d-19242-reserved-20261103-1"
			]
		},
		{
			"label": "Masse hors douille ou embout",
			"value": "0,77 kg",
			"evidenceIds": [
				"cle-a-impulsions-uryu-u-350d-19242-reserved-20261103-1"
			]
		},
		{
			"label": "Sortie hexagonale rapide",
			"value": "6,35 mm (1/4\")",
			"evidenceIds": [
				"cle-a-impulsions-uryu-u-350d-19242-reserved-20261103-1"
			]
		},
		{
			"label": "Couple indicatif à 0,5 MPa",
			"value": "3,0–5,0 Nm",
			"evidenceIds": [
				"cle-a-impulsions-uryu-u-350d-19242-reserved-20261103-1"
			]
		},
		{
			"label": "Couple indicatif à 0,6 MPa",
			"value": "3,5–5,8 Nm",
			"evidenceIds": [
				"cle-a-impulsions-uryu-u-350d-19242-reserved-20261103-1"
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
		},
		{
			"id": "cle-a-impulsions-uryu-u-350d-19242-reserved-20261103-1",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P30_34.pdf",
			"sourceLabel": "URYU : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 bfedea87f312ccc461b6512e0086d674afcec922db3881306259e050187bb373. La U-350D mesure 154 mm contre 238 mm pour la U-350SD, à plages de couple publiées identiques. La U-310SD de 222 mm vise une plage de couple inférieure. Les deux pressions de couple restent séparées et les 150 L/min sont une moyenne."
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
		],
		"editorial": [
			"cle-a-impulsions-uryu-u-350d-19242-reserved-20261103-1"
		],
		"specifications": [
			"cle-a-impulsions-uryu-u-350d-19242-reserved-20261103-1"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.6."
	]
};

export default product;
