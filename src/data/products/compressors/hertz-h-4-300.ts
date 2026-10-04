const product: unknown = {
	"id": "hertz-h-4-300",
	"slug": "hertz-h-4-300",
	"brand": "Hertz",
	"model": "H 4-300",
	"variant": {
		"familyId": "hertz-h-4-300",
		"label": "Groupe sur cuve 250 L",
		"distinguishingAttributes": {
			"équipement": "Groupe sur cuve 250 L",
			"pressionDeConfiguration": "7 bar",
			"cuve": "250 L"
		}
	},
	"tankLiters": 250,
	"maxPressureBar": 7,
	"fadCurve": [],
	"intakeFlowLpm": 501,
	"powerKw": 3,
	"oilType": "unknown",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/hertz-h-4-300.svg",
		"alt": "Repères techniques : Hertz H 4-300",
		"sourceUrl": "https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe sur cuve 250 L",
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
			"value": "250 L",
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
			"value": "501 L/min",
			"evidenceIds": [
				"october4-hertz-catalog-p52"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "3 kW",
			"evidenceIds": [
				"october4-hertz-catalog-p52"
			]
		}
	],
	"editorial": {
		"overview": "Hertz H 4-300. Le débit restitué sous pression reste non qualifié. Groupe sur cuve 250 L.",
		"verifiedFacts": [
			"Configuration de pression documentée : 7 bar.",
			"Cuve de stockage documentée : 250 L."
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
