import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-senco-coilpro90",
	"slug": "agrafeuse-cloueuse-senco-coilpro90",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Senco CoilPro90",
	"brand": "Senco",
	"model": "CoilPro90",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4.8,
		"max": 8.3
	},
	"demandExplanation": "La fiche fabricant publie157 L/min à60 tirs/min mais ne donne pas la pression de cette mesure. La plage de service4,8–8,3 bar ne suffit pas à créer un point de dimensionnement.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-senco-coilpro90.webp",
		"alt": "Repères techniques : Senco CoilPro90",
		"sourceUrl": "https://www.senco.eu/en/products/tools/nailers/coil-nailers/p/1VS2001N",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "senco-coilpro90",
		"label": "CoilPro90",
		"distinguishingAttributes": {
			"Longueur": "306 mm",
			"Largeur": "128 mm",
			"Hauteur": "317 mm"
		}
	},
	"editorial": {
		"overview": "Senco CoilPro90. La fiche actuelle du CoilPro90 identifie l’article 1VS2001N et rattache les 157 L/min à60 tirs/min. La pression de cette mesure reste inconnue ; la plage4,8–8,3 bar est une consigne de service. Les dimensions et la masse courantes remplacent celles de l’ancienne transcription, conservée dans l’historique.",
		"verifiedFacts": [
			"Référence constructeur publiée : 1VS2001N.",
			"Consommation et cadence : 157,0 L/min à60 tirs/min ; pression de mesure non précisée.",
			"Plage de service : 4,8–8,3 bar.",
			"Clous lisses : Longueur45–90 mm ; diamètre2,5–3,3 mm.",
			"Assemblage : Fil soudé ou plastique16 mm, angle16°.",
			"Magasin : 300 clous.",
			"Dimensions publiées D×W×H : 128 × 305 × 373 mm.",
			"Masse nette : 3,345 kg."
		],
		"limitations": [
			"Consommation conservée avec sa cadence ; aucune division par60 n’est utilisée par le moteur sans pression de mesure.",
			"La notice liée à l’exemplaire livré reste nécessaire pour les consignes de sécurité et le choix des clous."
		]
	},
	"specifications": [
		{
			"label": "Référence constructeur publiée",
			"value": "1VS2001N",
			"evidenceIds": [
				"agrafeuse-cloueuse-senco-coilpro90-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation et cadence",
			"value": "157,0 L/min à60 tirs/min ; pression de mesure non précisée",
			"evidenceIds": [
				"agrafeuse-cloueuse-senco-coilpro90-reserved-20261103-1"
			]
		},
		{
			"label": "Plage de service",
			"value": "4,8–8,3 bar",
			"evidenceIds": [
				"agrafeuse-cloueuse-senco-coilpro90-reserved-20261103-1"
			]
		},
		{
			"label": "Clous lisses",
			"value": "Longueur45–90 mm ; diamètre2,5–3,3 mm",
			"evidenceIds": [
				"agrafeuse-cloueuse-senco-coilpro90-reserved-20261103-1"
			]
		},
		{
			"label": "Assemblage",
			"value": "Fil soudé ou plastique16 mm, angle16°",
			"evidenceIds": [
				"agrafeuse-cloueuse-senco-coilpro90-reserved-20261103-1"
			]
		},
		{
			"label": "Magasin",
			"value": "300 clous",
			"evidenceIds": [
				"agrafeuse-cloueuse-senco-coilpro90-reserved-20261103-1"
			]
		},
		{
			"label": "Dimensions publiées D×W×H",
			"value": "128 × 305 × 373 mm",
			"evidenceIds": [
				"agrafeuse-cloueuse-senco-coilpro90-reserved-20261103-1"
			]
		},
		{
			"label": "Masse nette",
			"value": "3,345 kg",
			"evidenceIds": [
				"agrafeuse-cloueuse-senco-coilpro90-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-senco-eu-p64",
			"sourceUrl": "https://www.kyocera-senco.eu/wp-content/uploads/2018/11/Senco_catalogue_EN.pdf#page=64",
			"sourceLabel": "senco-eu, page PDF 64",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 486db6a8ac1ac3006777646b0c524feafaa214151ad503f0588120bef1780229. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "agrafeuse-cloueuse-senco-coilpro90-reserved-20261103-1",
			"sourceUrl": "https://www.senco.eu/en/products/tools/nailers/coil-nailers/p/1VS2001N",
			"sourceLabel": "Senco : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 1d69d6ad545e440db7a9eb44ea1adc03576bc0e692559ab8eeb822ec6802b492. La fiche actuelle du CoilPro90 identifie l’article 1VS2001N et rattache les 157 L/min à60 tirs/min. La pression de cette mesure reste inconnue ; la plage4,8–8,3 bar est une consigne de service. Les dimensions et la masse courantes remplacent celles de l’ancienne transcription, conservée dans l’historique."
		}
	],
	"fieldSources": {
		"workingPressureBar": [
			"agrafeuse-cloueuse-senco-coilpro90-reserved-20261103-1"
		],
		"demandExplanation": [
			"agrafeuse-cloueuse-senco-coilpro90-reserved-20261103-1"
		],
		"image": [
			"agrafeuse-cloueuse-senco-coilpro90-reserved-20261103-1"
		],
		"editorial": [
			"agrafeuse-cloueuse-senco-coilpro90-reserved-20261103-1"
		],
		"specifications": [
			"agrafeuse-cloueuse-senco-coilpro90-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée sans cadence ni pression de mesure : demander ces deux conditions au fabricant avant de dimensionner."
	]
};

export default product;
