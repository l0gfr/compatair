import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "alup-allegretto-7",
	"slug": "alup-allegretto-7",
	"brand": "ALUP",
	"model": "Allegretto 7",
	"variant": {
		"familyId": "alup-allegretto-7",
		"label": "Groupe sur socle sans réservoir de stockage intégré",
		"distinguishingAttributes": {
			"équipement": "Groupe sur socle sans réservoir de stockage intégré",
			"pressionMaximale": "10 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 9.5,
			"litersPerMinute": 966.667
		}
	],
	"oilType": "oil",
	"powerKw": 7.5,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/alup-allegretto-7.svg",
		"alt": "Repères techniques : ALUP Allegretto 7",
		"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/Product%20Portfolio/Screw%20Compressors/allegretto-2023/leaflet/Alup-Allegretto%202-7%20Sonetto%203-9-Sales%20leaflet-6999640532-EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Régulation",
			"value": "Allegretto 7, vitesse variable",
			"evidenceIds": [
				"alup-allegretto-7-reserved-20261103-1"
			]
		},
		{
			"label": "FAD à 9,5 bar",
			"value": "58 m³/h ; colonne arrondie 966 L/min",
			"evidenceIds": [
				"alup-allegretto-7-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "7,5 kW",
			"evidenceIds": [
				"alup-allegretto-7-reserved-20261103-1"
			]
		},
		{
			"label": "Masse au sol",
			"value": "140 kg",
			"evidenceIds": [
				"alup-allegretto-7-reserved-20261103-1"
			]
		},
		{
			"label": "Mesure",
			"value": "ISO 1217 annexe E",
			"evidenceIds": [
				"alup-allegretto-7-reserved-20261103-1"
			]
		}
	],
	"editorial": {
		"overview": "ALUP Allegretto 7. La Allegretto 7 sur socle pèse 140 kg ; les versions 200 L et 200 L avec sécheur pèsent 195 et 225 kg. La Allegretto 5 donne 45,4 m³/h à 9,5 bar contre 58 ici. Le service continu de l’élément de compression ne documente pas un cycle numérique du groupe complet.",
		"verifiedFacts": [
			"Régulation : Allegretto 7, vitesse variable.",
			"FAD à 9,5 bar : 58 m³/h ; colonne arrondie 966 L/min.",
			"Puissance : 7,5 kW.",
			"Masse au sol : 140 kg.",
			"Mesure : ISO 1217 annexe E."
		],
		"limitations": [
			"Taux de marche du groupe complet non établi ; la déclaration relative à l’élément de compression ne devient pas un taux de 100 %."
		]
	},
	"evidence": [
		{
			"id": "october3d-alup-pdf-02-p7",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/Product%20Portfolio/Screw%20Compressors/allegretto-2023/leaflet/Alup-Allegretto%202-7%20Sonetto%203-9-Sales%20leaflet-6999640532-EN.pdf#page=7",
			"sourceLabel": "ALUP, documentation constructeur, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 f1bacd0d7a6c5e66d6a8137febef22fe654b4ed1679b2c90f1492999931a453b de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-alup-pdf-02-p1",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/Product%20Portfolio/Screw%20Compressors/allegretto-2023/leaflet/Alup-Allegretto%202-7%20Sonetto%203-9-Sales%20leaflet-6999640532-EN.pdf#page=1",
			"sourceLabel": "ALUP, documentation constructeur, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 f1bacd0d7a6c5e66d6a8137febef22fe654b4ed1679b2c90f1492999931a453b de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-alup-pdf-02-p2",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/Product%20Portfolio/Screw%20Compressors/allegretto-2023/leaflet/Alup-Allegretto%202-7%20Sonetto%203-9-Sales%20leaflet-6999640532-EN.pdf#page=2",
			"sourceLabel": "ALUP, documentation constructeur, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 f1bacd0d7a6c5e66d6a8137febef22fe654b4ed1679b2c90f1492999931a453b de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "alup-allegretto-7-reserved-20261103-1",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/Product%20Portfolio/Screw%20Compressors/allegretto-2023/leaflet/Alup-Allegretto%202-7%20Sonetto%203-9-Sales%20leaflet-6999640532-EN.pdf#page=7",
			"sourceLabel": "ALUP : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 f1bacd0d7a6c5e66d6a8137febef22fe654b4ed1679b2c90f1492999931a453b. La Allegretto 7 sur socle pèse 140 kg ; les versions 200 L et 200 L avec sécheur pèsent 195 et 225 kg. La Allegretto 5 donne 45,4 m³/h à 9,5 bar contre 58 ici. Le service continu de l’élément de compression ne documente pas un cycle numérique du groupe complet."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october3d-alup-pdf-02-p7"
		],
		"oilType": [
			"october3d-alup-pdf-02-p1"
		],
		"maxPressureBar": [
			"october3d-alup-pdf-02-p7"
		],
		"fadCurve": [
			"october3d-alup-pdf-02-p7"
		],
		"powerKw": [
			"october3d-alup-pdf-02-p7"
		],
		"weightKg": [
			"alup-allegretto-7-reserved-20261103-1"
		],
		"editorial": [
			"alup-allegretto-7-reserved-20261103-1"
		],
		"specifications": [
			"alup-allegretto-7-reserved-20261103-1"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	],
	"weightKg": 140
};

export default product;
