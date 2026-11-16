import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "hertz-h-5-5-500-t",
	"slug": "hertz-h-5-5-500-t",
	"brand": "Hertz",
	"model": "H 5.5-500 T",
	"variant": {
		"familyId": "hertz-h-5-5-500-t",
		"label": "Groupe sur cuve 500 L",
		"distinguishingAttributes": {
			"équipement": "Groupe sur cuve 500 L",
			"pressionDeConfiguration": "12,5 bar",
			"cuve": "500 L"
		}
	},
	"tankLiters": 500,
	"maxPressureBar": 12.5,
	"maxPressureBasis": "selected-working-pressure-ceiling",
	"fadCurve": [],
	"intakeFlowLpm": 324,
	"powerKw": 4,
	"oilType": "unknown",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/hertz-h-5-5-500-t-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Hertz H 5.5-500 T",
		"sourceUrl": "https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe sur cuve 500 L",
			"evidenceIds": [
				"october4-hertz-catalog-p52"
			]
		},
		{
			"label": "Pression de la configuration retenue",
			"value": "12,5 bar",
			"evidenceIds": [
				"october4-hertz-catalog-p52"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "500 L",
			"evidenceIds": [
				"october4-hertz-catalog-p52"
			]
		},
		{
			"label": "FAD sous pression",
			"value": "Non qualifié par la source retenue",
			"evidenceIds": [
				"october4-hertz-catalog-p52"
			]
		},
		{
			"label": "Débit aspiré / déplacement publié, distinct du FAD",
			"value": "324 L/min",
			"evidenceIds": [
				"october4-hertz-catalog-p52"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "4 kW",
			"evidenceIds": [
				"october4-hertz-catalog-p52"
			]
		}
	],
	"editorial": {
		"overview": "Le H5.5-500T est le compresseur à pistons deux étages, moteur 4 kW, sur réservoir 500 L pour 12,5 bar. Les 324 L/min sont du déplacement aspiré, pas un FAD. Le H5.5-500 sans T utilise un autre groupe à 7 bar et annonce 649 L/min aspirés ; le 300T change le stockage. Sans débit restitué et cycle du groupe, le calcul reste non conclusif.",
		"verifiedFacts": [
			"Configuration de pression documentée : 12,5 bar.",
			"Cuve de stockage documentée : 500 L."
		],
		"limitations": [
			"La colonne Piston Displacement décrit le déplacement du piston. Aucun débit restitué sous pression n’est qualifié dans ce tableau.",
			"Le cycle de service n’est pas indiqué ; la compatibilité ne devient pas conclusive par la seule capacité de cuve.",
			"Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
			"Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
			"Le plafond CompatAir correspond à la pression de travail de la version retenue. Il ne décrit ni la soupape ni le maximum de toutes les versions de la famille."
		]
	},
	"evidence": [
		{
			"id": "october4-hertz-catalog-p52",
			"sourceUrl": "https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf#page=52",
			"sourceLabel": "Hertz, catalogue constructeur, page PDF 52",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-04",
			"confidence": "B",
			"notes": "SHA-256 e35f62157b67dcb57d28a0a30b4a0984c996af066a85d60939c70ad4529b6339 de la réponse HTTP originale. Données constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:hertz-h-5-5-500-t:0",
			"sourceUrl": "https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf",
			"sourceLabel": "Hertz, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le H5.5-500T est le compresseur à pistons deux étages, moteur 4 kW, sur réservoir 500 L pour 12,5 bar. Les 324 L/min sont du déplacement aspiré, pas un FAD. Le H5.5-500 sans T utilise un autre groupe à 7 bar et annonce 649 L/min aspirés ; le 300T change le stockage. Sans débit restitué et cycle du groupe, le calcul reste non conclusif. GET complet SHA-256 e35f62157b67dcb57d28a0a30b4a0984c996af066a85d60939c70ad4529b6339. Pages PDF lues : 52."
		}
	],
	"fieldSources": {
		"maxPressureBasis": [
			"october4-hertz-catalog-p52"
		],
		"model": [
			"october4-hertz-catalog-p52"
		],
		"maxPressureBar": [
			"october4-hertz-catalog-p52"
		],
		"tankLiters": [
			"october4-hertz-catalog-p52"
		],
		"fadCurve": [
			"october4-hertz-catalog-p52"
		],
		"intakeFlowLpm": [
			"october4-hertz-catalog-p52"
		],
		"powerKw": [
			"october4-hertz-catalog-p52"
		]
	},
	"notes": [
		"Portée de la source : piston-displacement-only.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
