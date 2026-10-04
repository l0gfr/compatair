const product: unknown = {
	"id": "hertz-hsc-30",
	"slug": "hertz-hsc-30",
	"brand": "Hertz",
	"model": "HSC 30",
	"variant": {
		"familyId": "hertz-hsc-30",
		"label": "Base Mounted, stockage d’air externe",
		"distinguishingAttributes": {
			"équipement": "Base Mounted, stockage d’air externe",
			"pressionDeConfiguration": "13 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 13,
	"fadCurve": [
		{
			"pressureBar": 13,
			"litersPerMinute": 3910
		}
	],
	"dutyCycle": 1,
	"powerKw": 30,
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/hertz-hsc-30.svg",
		"alt": "Repères techniques : Hertz HSC 30",
		"sourceUrl": "https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Base Mounted, stockage d’air externe",
			"evidenceIds": [
				"october4-hertz-catalog-p26"
			]
		},
		{
			"label": "Pression de la configuration retenue",
			"value": "13 bar",
			"evidenceIds": [
				"october4-hertz-catalog-p26"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Stockage intégré absent, montage constructeur documenté",
			"evidenceIds": [
				"october4-hertz-catalog-p26"
			]
		},
		{
			"label": "Air livré à 13 bar",
			"value": "3 910 L/min",
			"evidenceIds": [
				"october4-hertz-catalog-p26"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "30 kW",
			"evidenceIds": [
				"october4-hertz-catalog-p26"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "100 %",
			"evidenceIds": [
				"october4-hertz-catalog-p23"
			]
		}
	],
	"editorial": {
		"overview": "Hertz HSC 30. 3 910 L/min déclarés à 13 bar. Base Mounted, stockage d’air externe.",
		"verifiedFacts": [
			"Configuration de pression documentée : 13 bar.",
			"Montage sans réservoir de stockage intégré explicitement documenté.",
			"FAD sous pression identifié séparément des valeurs d’aspiration : 3 910 L/min déclarés à 13 bar."
		],
		"limitations": [
			"Une seule configuration de pression est retenue par modèle. Les autres lignes de pression ne sont pas assemblées en une courbe mesurée.",
			"La cuve optionnelle Tank + Dryer est distincte du montage Base Mounted retenu.",
			"Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
			"Le plafond CompatAir correspond à la pression de travail de la version retenue. Il ne décrit ni la soupape ni le maximum de toutes les versions de la famille."
		]
	},
	"evidence": [
		{
			"id": "october4-hertz-catalog-p26",
			"sourceUrl": "https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf#page=26",
			"sourceLabel": "Hertz, catalogue constructeur, page PDF 26",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-04",
			"confidence": "B",
			"notes": "SHA-256 e35f62157b67dcb57d28a0a30b4a0984c996af066a85d60939c70ad4529b6339 de la réponse HTTP originale. Données constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october4-hertz-catalog-p23",
			"sourceUrl": "https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf#page=23",
			"sourceLabel": "Hertz, catalogue constructeur, page PDF 23",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-04",
			"confidence": "B",
			"notes": "SHA-256 e35f62157b67dcb57d28a0a30b4a0984c996af066a85d60939c70ad4529b6339 de la réponse HTTP originale. Données constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october4-hertz-catalog-p26"
		],
		"maxPressureBar": [
			"october4-hertz-catalog-p26"
		],
		"tankLiters": [
			"october4-hertz-catalog-p26"
		],
		"fadCurve": [
			"october4-hertz-catalog-p26"
		],
		"powerKw": [
			"october4-hertz-catalog-p26"
		],
		"oilType": [
			"october4-hertz-catalog-p23"
		],
		"dutyCycle": [
			"october4-hertz-catalog-p23"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
