import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-vessel-gt-h30-360211",
	"slug": "cisaille-vessel-gt-h30-360211",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "VESSEL GT-H30 (réf. 360211)",
	"brand": "VESSEL",
	"model": "GT-H30",
	"mpn": "360211",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 3
	},
	"demandExplanation": "Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée.",
	"recommendedHose": {
		"innerDiameterMm": 5
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-vessel-gt-h30-360211.webp",
		"alt": "Repères techniques : VESSEL GT-H30 (réf. 360211)",
		"sourceUrl": "https://www.vessel.co.jp/english/product/airnippers/360211",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-h30",
		"label": "Référence 360211",
		"distinguishingAttributes": {
			"reference": "360211",
			"Capacity (max) (mm) Kevlar": "1",
			"Air consumption (cm3 /str.)": "584"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-H30. Le GT-H30, code 360211, est le corps de ciseaux pneumatiques présenté avec une lame d’exemple. Le fabricant propose les lames H30ME/H30MEL et une capacité Kevlar 1 mm, sans étendre cette capacité à d’autres matières. Le GT-HS30 reste un autre corps. Les 584 cm³/course ne précisent pas la base volumique ni une pression de mesure ; aucune demande d’air normalisée n’en est déduite. Le champ contenant R1/4/Rc1/8 est traité comme filetage, pas comme un diamètre de flexible en millimètres.",
		"verifiedFacts": [
			"Type : Ciseaux pneumatiques, corps GT-H30.",
			"Capacité Kevlar publiée : 1 mm selon configuration de lame.",
			"Lames proposées séparément : H30ME et H30MEL.",
			"Volume documentaire : 584 cm³ par course.",
			"Pression de service : 0,3 MPa.",
			"Raccords filetés littéraux : R1/4, corps Rc1/8.",
			"Longueur : 280 mm.",
			"Masse : 1 030 g."
		],
		"limitations": [
			"Corps et lame constituent une configuration : choisir la lame selon la matière.",
			"Volume par course de base non précisée, maintenu hors calcul conclusif."
		]
	},
	"specifications": [
		{
			"label": "Type",
			"value": "Ciseaux pneumatiques, corps GT-H30",
			"evidenceIds": [
				"cisaille-vessel-gt-h30-360211-reserved-20261103-1"
			]
		},
		{
			"label": "Capacité Kevlar publiée",
			"value": "1 mm selon configuration de lame",
			"evidenceIds": [
				"cisaille-vessel-gt-h30-360211-reserved-20261103-1"
			]
		},
		{
			"label": "Lames proposées séparément",
			"value": "H30ME et H30MEL",
			"evidenceIds": [
				"cisaille-vessel-gt-h30-360211-reserved-20261103-1"
			]
		},
		{
			"label": "Volume documentaire",
			"value": "584 cm³ par course",
			"evidenceIds": [
				"cisaille-vessel-gt-h30-360211-reserved-20261103-1"
			]
		},
		{
			"label": "Pression de service",
			"value": "0,3 MPa",
			"evidenceIds": [
				"cisaille-vessel-gt-h30-360211-reserved-20261103-1"
			]
		},
		{
			"label": "Raccords filetés littéraux",
			"value": "R1/4, corps Rc1/8",
			"evidenceIds": [
				"cisaille-vessel-gt-h30-360211-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "280 mm",
			"evidenceIds": [
				"cisaille-vessel-gt-h30-360211-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1 030 g",
			"evidenceIds": [
				"cisaille-vessel-gt-h30-360211-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-gt-h30-html-p1",
			"sourceUrl": "https://www.vessel.co.jp/english/product/airnippers/360211",
			"sourceLabel": "VESSEL, fiche constructeur individuelle GT-H30",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 0aa05fb2dff6e3c0ec06dd7787e4f07b8d641cdcd66bf97eef6bb9ffabcfb754. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "cisaille-vessel-gt-h30-360211-reserved-20261103-1",
			"sourceUrl": "https://www.vessel.co.jp/english/product/airnippers/360211",
			"sourceLabel": "VESSEL : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 952e080a62034b9cbd69265c30168bd16ce2a02b0d5e536ecc3f3fc2858f3f84. Le GT-H30, code 360211, est le corps de ciseaux pneumatiques présenté avec une lame d’exemple. Le fabricant propose les lames H30ME/H30MEL et une capacité Kevlar 1 mm, sans étendre cette capacité à d’autres matières. Le GT-HS30 reste un autre corps. Les 584 cm³/course ne précisent pas la base volumique ni une pression de mesure ; aucune demande d’air normalisée n’en est déduite. Le champ contenant R1/4/Rc1/8 est traité comme filetage, pas comme un diamètre de flexible en millimètres."
		}
	],
	"fieldSources": {
		"recommendedHose": [
			"october2b-tools-oct2b-gt-h30-html-p1"
		],
		"mpn": [
			"october2b-tools-oct2b-gt-h30-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-gt-h30-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-gt-h30-html-p1"
		],
		"editorial": [
			"cisaille-vessel-gt-h30-360211-reserved-20261103-1"
		],
		"specifications": [
			"cisaille-vessel-gt-h30-360211-reserved-20261103-1"
		]
	},
	"notes": [
		"Le volume par course ne précise pas sa base d’air ni sa pression de mesure ; aucune demande normalisée n’est reconstituée."
	]
};

export default product;
