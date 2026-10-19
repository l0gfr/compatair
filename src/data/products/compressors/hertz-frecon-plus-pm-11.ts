import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "hertz-frecon-plus-pm-11",
	"slug": "hertz-frecon-plus-pm-11",
	"brand": "Hertz",
	"model": "FRECON PLUS PM 11",
	"variant": {
		"familyId": "hertz-frecon-plus-pm-11",
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
			"litersPerMinute": 1130
		}
	],
	"powerKw": 11,
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/hertz-frecon-plus-pm-11.svg",
		"alt": "Repères techniques : Hertz FRECON PLUS PM 11",
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
			"value": "1 130 L/min (1,13 m³/min)",
			"evidenceIds": [
				"october4-hertz-catalog-p20"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "11 kW",
			"evidenceIds": [
				"october4-hertz-catalog-p20"
			]
		},
		{
			"label": "FAD minimal de modulation à 13 bar",
			"value": "510 L/min (0,51 m³/min)",
			"evidenceIds": [
				"october4-hertz-catalog-p20"
			]
		}
	],
	"editorial": {
		"overview": "FRECON PLUS PM 11, montage Base Mounted à 13 bar : plage FAD publiée de 510 à 1 130 L/min, pour un moteur de 11 kW. La courbe CompatAir retient la capacité maximale de 1 130 L/min ; le minimum de modulation reste séparé. Le PM 15 voisin annonce de 590 à 1 360 L/min à 13 bar pour 15 kW.",
		"verifiedFacts": [
			"Configuration de pression documentée : 13 bar.",
			"Montage Base Mounted sans réservoir de stockage intégré.",
			"Plage FAD à 13 bar : 0,51 à 1,13 m³/min, soit 510 à 1 130 L/min, selon ISO 1217:2009 annexe E."
		],
		"limitations": [
			"La capacité maximale ne constitue pas un débit garanti à tout régime. Le taux de marche du groupe complet reste non documenté.",
			"La plage est donnée selon ISO 1217:2009 annexe E, avec pression d’aspiration de 1 bar absolu, air à 20 °C et 0 % d’humidité relative ; la note mentionne une vanne thermostatique de 71 °C et l’huile Smartoil.",
			"Le montage Base Mounted indique 210 kg et 835 × 730 × 1 200 mm. La version Tank + Dryer sur 250 L constitue un autre équipement.",
			"Une seule configuration de pression est retenue ; les lignes 7,5, 8,5, 10 et 13 bar ne sont pas assemblées en une courbe de mesure.",
			"Le plafond correspond à la pression de travail retenue, distincte de la soupape. Raccordement, refroidissement et disponibilité locale restent à confirmer."
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
