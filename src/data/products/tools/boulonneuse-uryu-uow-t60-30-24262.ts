import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-uryu-uow-t60-30-24262",
	"slug": "boulonneuse-uryu-uow-t60-30-24262",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "URYU UOW-T60-30 (réf. 24262)",
	"brand": "URYU",
	"model": "UOW-T60-30",
	"mpn": "24262",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 300,
		"typical": 300,
		"max": 300
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/boulonneuse-uryu-uow-t60-30-24262.webp",
		"alt": "Repères techniques : URYU UOW-T60-30 (réf. 24262)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P36.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-uow-t60-30",
		"label": "Code constructeur 24262",
		"distinguishingAttributes": {
			"codeCatalogue": "24262",
			"reference": "24262"
		}
	},
	"editorial": {
		"overview": "URYU UOW-T60-30, code 24262. Le tableau publie une consommation moyenne de 0,3 m³/min, soit 300 L/min. Pression de référence retenue : 6 bar.",
		"verifiedFacts": [
			"Référence complète imprimée : 24262, page PDF 1.",
			"Consommation moyenne publiée : 300 L/min après conversion de l’unité originale.",
			"S（HP）ECIFICATI（OWN）S                                 Recommended Air Pressure : 0.6MPa (85psi)"
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
				"documented-20260930-uryu-p36"
			]
		},
		{
			"label": "Code URYU du tableau",
			"value": "24262",
			"evidenceIds": [
				"documented-20260930-uryu-p36"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.3 m³/min ; 10.5 ft³/min",
			"evidenceIds": [
				"documented-20260930-uryu-p36"
			]
		},
		{
			"label": "Pression recommandée dans le tableau",
			"value": "0.6 MPa",
			"evidenceIds": [
				"documented-20260930-uryu-p36"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-20260930-uryu-p36",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P36.pdf",
			"sourceLabel": "URYU, catalogue 2020 : uryu-P36",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "Document constructeur consulté le 2026-09-30. SHA-256 d68ef749daf32453f5f3b74c1e8f253ae4933d47624fa291939224a7515a0b4f. La transcription et les pages PDF sont versionnées dans le lot documentaire. Le lieu d’hébergement ne constitue pas une validation indépendante."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-20260930-uryu-p36"
		],
		"airflowLpm": [
			"documented-20260930-uryu-p36"
		],
		"workingPressureBar": [
			"documented-20260930-uryu-p36"
		],
		"airflowBasis": [
			"documented-20260930-uryu-p36"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.6."
	]
};

export default product;
