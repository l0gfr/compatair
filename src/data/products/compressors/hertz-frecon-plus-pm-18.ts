import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "hertz-frecon-plus-pm-18",
	"slug": "hertz-frecon-plus-pm-18",
	"brand": "Hertz",
	"model": "FRECON PLUS PM 18",
	"variant": {
		"familyId": "hertz-frecon-plus-pm-18",
		"label": "Base Mounted, stockage d’air externe",
		"distinguishingAttributes": {
			"équipement": "Base Mounted, stockage d’air externe",
			"pressionDeConfiguration": "13 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 13,
	"maxPressureBasis": "selected-working-pressure-ceiling",
	"fadCurve": [
		{
			"pressureBar": 13,
			"litersPerMinute": 2390
		}
	],
	"powerKw": 18.5,
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/hertz-frecon-plus-pm-18.svg",
		"alt": "Repères techniques : Hertz FRECON PLUS PM 18",
		"sourceUrl": "https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Base Mounted, stockage d’air externe",
			"evidenceIds": [
				"october4-hertz-catalog-p20"
			]
		},
		{
			"label": "Pression de la configuration retenue",
			"value": "13 bar",
			"evidenceIds": [
				"october4-hertz-catalog-p20"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Stockage intégré absent, montage constructeur documenté",
			"evidenceIds": [
				"october4-hertz-catalog-p20"
			]
		},
		{
			"label": "FAD maximal de modulation à 13 bar",
			"value": "2390 L/min (2,39 m³/min)",
			"evidenceIds": [
				"october4-hertz-catalog-p20"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "18,5 kW",
			"evidenceIds": [
				"october4-hertz-catalog-p20"
			]
		},
		{
			"label": "FAD minimal de modulation à 13 bar",
			"value": "660 L/min (0,66 m³/min)",
			"evidenceIds": [
				"october4-hertz-catalog-p20"
			]
		}
	],
	"editorial": {
		"overview": "FRECON PLUS PM 18, montage Base Mounted de 18,5 kW : plage de FAD publiée de 660 à 2 390 L/min à 13 bar. La courbe conserve le maximum disponible, avec le minimum de modulation séparé. Le PM 15 annonce 590 à 1 360 L/min à cette pression avec 15 kW.",
		"verifiedFacts": [
			"Plage FAD publiée à 13 bar : 0,66 à 2,39 m³/min selon ISO 1217:2009 annexe E.",
			"Montage Base Mounted sans réservoir de stockage intégré ; puissance de 18,5 kW."
		],
		"limitations": [
			"La note de capacité cite ISO 1217:2009 annexe E, à 1 bar absolu à l’aspiration, 20 °C et 0 % d’humidité relative. Le maximum est une capacité publiée, sans simulation d’une charge réelle d’atelier.",
			"Le groupe au sol mesure 870 × 905 × 1400 mm et pèse 350 kg. Le montage Tank + Dryer est distinct : 2 × 270 L, 766 kg et 2150 × 1225 × 1950 mm.",
			"Le minimum de 660 L/min décrit la borne basse de modulation. Il ne suffit pas à définir une consommation moyenne ou un régime de marche.",
			"Le taux de marche demeure inconnu ; raccordement, refroidissement et disponibilité doivent être confirmés pour l’installation."
		]
	},
	"evidence": [
		{
			"id": "october4-hertz-catalog-p20",
			"sourceUrl": "https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf#page=20",
			"sourceLabel": "Hertz, catalogue constructeur, page PDF 20",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-04",
			"confidence": "B",
			"notes": "SHA-256 e35f62157b67dcb57d28a0a30b4a0984c996af066a85d60939c70ad4529b6339 de la réponse HTTP originale. Données constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october4-hertz-catalog-p17",
			"sourceUrl": "https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf#page=17",
			"sourceLabel": "Hertz, catalogue constructeur, page PDF 17",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-04",
			"confidence": "B",
			"notes": "SHA-256 e35f62157b67dcb57d28a0a30b4a0984c996af066a85d60939c70ad4529b6339 de la réponse HTTP originale. Données constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"maxPressureBasis": [
			"october4-hertz-catalog-p20"
		],
		"model": [
			"october4-hertz-catalog-p20"
		],
		"maxPressureBar": [
			"october4-hertz-catalog-p20"
		],
		"tankLiters": [
			"october4-hertz-catalog-p20"
		],
		"fadCurve": [
			"october4-hertz-catalog-p20"
		],
		"powerKw": [
			"october4-hertz-catalog-p20"
		],
		"oilType": [
			"october4-hertz-catalog-p17"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
