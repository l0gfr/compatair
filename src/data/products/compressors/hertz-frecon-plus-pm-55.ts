import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "hertz-frecon-plus-pm-55",
	"slug": "hertz-frecon-plus-pm-55",
	"brand": "Hertz",
	"model": "FRECON PLUS PM 55",
	"variant": {
		"familyId": "hertz-frecon-plus-pm-55",
		"label": "Base Mounted, stockage d’air externe",
		"distinguishingAttributes": {
			"équipement": "Base Mounted, stockage d’air externe",
			"pressionDeConfiguration": "10 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10,
	"maxPressureBasis": "selected-working-pressure-ceiling",
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 8760
		}
	],
	"powerKw": 55,
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/hertz-frecon-plus-pm-55.svg",
		"alt": "Repères techniques : Hertz FRECON PLUS PM 55",
		"sourceUrl": "https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Montage",
			"value": "Base Mounted, sans cuve intégrée",
			"evidenceIds": [
				"hertz-frecon-plus-pm-55-reserved-20261103-1"
			]
		},
		{
			"label": "FAD min–max à 10 bar",
			"value": "2,42–8,76 m³/min",
			"evidenceIds": [
				"hertz-frecon-plus-pm-55-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "55 kW",
			"evidenceIds": [
				"hertz-frecon-plus-pm-55-reserved-20261103-1"
			]
		},
		{
			"label": "Masse sur socle",
			"value": "910 kg",
			"evidenceIds": [
				"hertz-frecon-plus-pm-55-reserved-20261103-1"
			]
		},
		{
			"label": "Mesure",
			"value": "ISO 1217:2009 annexe E ; entrée 1 bar absolu, 20 °C, humidité 0 %",
			"evidenceIds": [
				"hertz-frecon-plus-pm-55-reserved-20261103-1"
			]
		}
	],
	"editorial": {
		"overview": "Hertz FRECON PLUS PM 55. La PM 55 publie 2,42–8,76 m³/min à 10 bar ; PM 45 : 1,37–7,22 m³/min à 10 bar. Le moteur utilise désormais le maximum documenté de ce régime et conserve le minimum de modulation dans les spécifications. La masse retenue appartient au montage sur socle, distinct du montage cuve et sécheur.",
		"verifiedFacts": [
			"Montage : Base Mounted, sans cuve intégrée.",
			"FAD min–max à 10 bar : 2,42–8,76 m³/min.",
			"Puissance : 55 kW.",
			"Masse sur socle : 910 kg.",
			"Mesure : ISO 1217:2009 annexe E ; entrée 1 bar absolu, 20 °C, humidité 0 %."
		],
		"limitations": [
			"Le FAD maximal est une borne publiée du variateur, pas une moyenne d’atelier. Aucun taux de marche du groupe n’est déduit de cette plage."
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
		},
		{
			"id": "hertz-frecon-plus-pm-55-reserved-20261103-1",
			"sourceUrl": "https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf#page=20",
			"sourceLabel": "Hertz : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 e35f62157b67dcb57d28a0a30b4a0984c996af066a85d60939c70ad4529b6339. La PM 55 publie 2,42–8,76 m³/min à 10 bar ; PM 45 : 1,37–7,22 m³/min à 10 bar. Le moteur utilise désormais le maximum documenté de ce régime et conserve le minimum de modulation dans les spécifications. La masse retenue appartient au montage sur socle, distinct du montage cuve et sécheur."
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
			"hertz-frecon-plus-pm-55-reserved-20261103-1"
		],
		"powerKw": [
			"october4-hertz-catalog-p20"
		],
		"oilType": [
			"october4-hertz-catalog-p17"
		],
		"weightKg": [
			"hertz-frecon-plus-pm-55-reserved-20261103-1"
		],
		"editorial": [
			"hertz-frecon-plus-pm-55-reserved-20261103-1"
		],
		"specifications": [
			"hertz-frecon-plus-pm-55-reserved-20261103-1"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	],
	"weightKg": 910
};

export default product;
