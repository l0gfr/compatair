const product: unknown = {
	"id": "hertz-h-7-5-500",
	"slug": "hertz-h-7-5-500",
	"brand": "Hertz",
	"model": "H 7.5-500",
	"variant": {
		"familyId": "hertz-h-7-5-500",
		"label": "Groupe sur cuve 500 L",
		"distinguishingAttributes": {
			"équipement": "Groupe sur cuve 500 L",
			"pressionDeConfiguration": "7 bar",
			"cuve": "500 L"
		}
	},
	"tankLiters": 500,
	"maxPressureBar": 7,
	"fadCurve": [],
	"intakeFlowLpm": 971,
	"powerKw": 5.5,
	"oilType": "unknown",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/hertz-h-7-5-500.svg",
		"alt": "Repères techniques : Hertz H 7.5-500",
		"sourceUrl": "https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
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
			"value": "7 bar",
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
			"value": "971 L/min",
			"evidenceIds": [
				"october4-hertz-catalog-p52"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "5,5 kW",
			"evidenceIds": [
				"october4-hertz-catalog-p52"
			]
		}
	],
	"editorial": {
		"overview": "Hertz H 7.5-500. Le débit restitué sous pression reste non qualifié. Groupe sur cuve 500 L.",
		"verifiedFacts": [
			"Configuration de pression documentée : 7 bar.",
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
		}
	],
	"fieldSources": {
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
