import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "alup-allegretto-2",
	"slug": "alup-allegretto-2",
	"brand": "ALUP",
	"model": "Allegretto 2",
	"variant": {
		"familyId": "alup-allegretto-2",
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
			"litersPerMinute": 293.333
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 2.2,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/alup-allegretto-2.svg",
		"alt": "Repères techniques : ALUP Allegretto 2",
		"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/Product%20Portfolio/Screw%20Compressors/allegretto-2023/leaflet/Alup-Allegretto%202-7%20Sonetto%203-9-Sales%20leaflet-6999640532-EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe sur socle sans réservoir de stockage intégré",
			"evidenceIds": [
				"october3d-alup-pdf-02-p7"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "10 bar relatifs",
			"evidenceIds": [
				"october3d-alup-pdf-02-p7"
			]
		},
		{
			"label": "Air livré à 9,5 bar",
			"value": "293,333 L/min",
			"evidenceIds": [
				"october3d-alup-pdf-02-p7"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "0 L",
			"evidenceIds": [
				"october3d-alup-pdf-02-p7"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "Service continu déclaré sous les conditions constructeur",
			"evidenceIds": [
				"october3d-alup-pdf-02-p2"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "Alimentation non précisée dans les extraits retenus",
			"evidenceIds": [
				"october3d-alup-pdf-02-p7"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "non précisée",
			"evidenceIds": [
				"october3d-alup-pdf-02-p7"
			]
		},
		{
			"label": "Régulation et condition du FAD",
			"value": "Vitesse variable ; capacité nominale publiée selon ISO 1217 annexe E, minimum de modulation non précisé",
			"evidenceIds": [
				"october3d-alup-pdf-02-p7",
				"october3d-alup-pdf-02-p2"
			]
		}
	],
	"editorial": {
		"overview": "Allegretto 2 sur socle : compresseur à vis lubrifié à vitesse variable de 2,2 kW, sans cuve. La ligne 10 bar publie 17,6 m³/h à 9,5 bar, soit 293,333 L/min. L’Allegretto 3 conserve le montage sur socle et publie 21,6 m³/h à 9,5 bar avec 3 kW.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 0 L.",
			"Pression maximale de fonctionnement publiée : 10 bar."
		],
		"limitations": [
			"Le tableau imprime aussi 293 L/min pour l’Allegretto 2 ; la conversion retenue part de 17,6 m³/h. Les minima de modulation ne sont pas publiés, ce point reste une capacité nominale de la version VSD.",
			"Le socle mesure 620 × 630 × 975 mm ; les masses publiées sont de 110 kg pour le 2 et 115 kg pour le 3. Les réservoirs et sécheurs intégrés correspondent à d’autres montages.",
			"La note propre à Allegretto cite ISO 1217 annexe E ; celle de Sonetto cite l’annexe C. Ces deux familles ne sont pas fusionnées.",
			"Le service continu est explicite pour Allegretto 2-7. La tension et la fréquence de cette version restent à confirmer sur le devis."
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
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october3d-alup-pdf-02-p7"
		],
		"oilType": [
			"october3d-alup-pdf-02-p1"
		],
		"dutyCycle": [
			"october3d-alup-pdf-02-p2"
		],
		"maxPressureBar": [
			"october3d-alup-pdf-02-p7"
		],
		"fadCurve": [
			"october3d-alup-pdf-02-p7"
		],
		"powerKw": [
			"october3d-alup-pdf-02-p7"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
