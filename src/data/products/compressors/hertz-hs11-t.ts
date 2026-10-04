const product: unknown = {
	"id": "hertz-hs11-t",
	"slug": "hertz-hs11-t",
	"brand": "Hertz",
	"model": "HS11-T",
	"variant": {
		"familyId": "hertz-hs11-t",
		"label": "Base Mounted, stockage d’air externe",
		"distinguishingAttributes": {
			"équipement": "Base Mounted, stockage d’air externe",
			"pressionDeConfiguration": "10 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/hertz-hs11-t.svg",
		"alt": "Repères techniques : Hertz HS11-T",
		"sourceUrl": "https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Base Mounted, stockage d’air externe",
			"evidenceIds": [
				"october4-hertz-catalog-p36"
			]
		},
		{
			"label": "Pression de la configuration retenue",
			"value": "10 bar",
			"evidenceIds": [
				"october4-hertz-catalog-p36"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Stockage intégré absent, montage constructeur documenté",
			"evidenceIds": [
				"october4-hertz-catalog-p36"
			]
		},
		{
			"label": "FAD sous pression",
			"value": "Non qualifié par la source retenue",
			"evidenceIds": [
				"october4-hertz-catalog-p36"
			]
		},
		{
			"label": "Capacité publiée sous pression, méthode FAD non qualifiée",
			"value": "1 020 L/min à 10 bar",
			"evidenceIds": [
				"october4-hertz-catalog-p36"
			]
		}
	],
	"editorial": {
		"overview": "Hertz HS11-T. Le débit restitué sous pression reste non qualifié. Base Mounted, stockage d’air externe.",
		"verifiedFacts": [
			"Configuration de pression documentée : 10 bar.",
			"Montage sans réservoir de stockage intégré explicitement documenté."
		],
		"limitations": [
			"La colonne Capacity est donnée sous pression avec des conditions ambiantes, mais sans qualification explicite FAD dans cette table. Elle ne devient pas une courbe FAD.",
			"Une seule pression de configuration est retenue ; cycle de service non documenté.",
			"Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
			"Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
			"Le plafond CompatAir correspond à la pression de travail de la version retenue. Il ne décrit ni la soupape ni le maximum de toutes les versions de la famille."
		]
	},
	"evidence": [
		{
			"id": "october4-hertz-catalog-p36",
			"sourceUrl": "https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf#page=36",
			"sourceLabel": "Hertz, catalogue constructeur, page PDF 36",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-04",
			"confidence": "B",
			"notes": "SHA-256 e35f62157b67dcb57d28a0a30b4a0984c996af066a85d60939c70ad4529b6339 de la réponse HTTP originale. Données constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october4-hertz-catalog-p35",
			"sourceUrl": "https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf#page=35",
			"sourceLabel": "Hertz, catalogue constructeur, page PDF 35",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-04",
			"confidence": "B",
			"notes": "SHA-256 e35f62157b67dcb57d28a0a30b4a0984c996af066a85d60939c70ad4529b6339 de la réponse HTTP originale. Données constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october4-hertz-catalog-p36"
		],
		"maxPressureBar": [
			"october4-hertz-catalog-p36"
		],
		"tankLiters": [
			"october4-hertz-catalog-p36"
		],
		"fadCurve": [
			"october4-hertz-catalog-p36"
		],
		"oilType": [
			"october4-hertz-catalog-p35"
		]
	},
	"notes": [
		"Portée de la source : capacity-at-pressure-method-unqualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
