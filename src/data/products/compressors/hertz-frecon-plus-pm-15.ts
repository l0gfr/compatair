import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "hertz-frecon-plus-pm-15",
	"slug": "hertz-frecon-plus-pm-15",
	"brand": "Hertz",
	"model": "FRECON PLUS PM 15",
	"variant": {
		"familyId": "hertz-frecon-plus-pm-15",
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
			"litersPerMinute": 1360
		}
	],
	"powerKw": 15,
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/hertz-frecon-plus-pm-15.svg",
		"alt": "Repères techniques : Hertz FRECON PLUS PM 15",
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
			"value": "1360 L/min (1,36 m³/min)",
			"evidenceIds": [
				"october4-hertz-catalog-p20"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "15 kW",
			"evidenceIds": [
				"october4-hertz-catalog-p20"
			]
		},
		{
			"label": "FAD minimal de modulation à 13 bar",
			"value": "590 L/min (0,59 m³/min)",
			"evidenceIds": [
				"october4-hertz-catalog-p20"
			]
		}
	],
	"editorial": {
		"overview": "FRECON PLUS PM 15, Base Mounted à 13 bar : plage FAD de 590 à 1360 L/min pour 15 kW. La courbe CompatAir retient le maximum 1360 L/min ; le minimum est conservé séparément. Le PM 11 voisin publie 510–1130 L/min à 13 bar pour 11 kW.",
		"verifiedFacts": [
			"Configuration de pression retenue : 13 bar.",
			"PlageFAD publiée : 0,59–1,36 m³/min à 13 bar, selonISO 1217:2009 annexe E.",
			"MontageBase Mounted sans réservoir de stockage intégré ; puissance 15 kW."
		],
		"limitations": [
			"Le maximum publié ne décrit pas un débit garanti à tout régime. Le taux de marche du groupe complet reste non documenté.",
			"La note ISO 1217:2009 annexe E indique 1 bar absolu à l’aspiration, 20 °C et 0 % HR, vanne thermostatique 71 °C et huile Smartoil.",
			"Le Base Mounted 15 indique 236 kg et 835 × 730 × 1200 mm ; le montage Tank + Dryer 250 L constitue une autre configuration, de 423 kg.",
			"Les autres lignes de pression restent des versions distinctes. Raccordement, refroidissement et disponibilité locale sont à confirmer."
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
