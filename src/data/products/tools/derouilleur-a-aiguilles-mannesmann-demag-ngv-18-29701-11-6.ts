import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-mannesmann-demag-ngv-18-29701-11-6",
	"slug": "derouilleur-a-aiguilles-mannesmann-demag-ngv-18-29701-11-6",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Mannesmann DEMAG NGV 18 (réf. 29701-11-6)",
	"brand": "Mannesmann DEMAG",
	"model": "NGV 18",
	"mpn": "29701-11-6",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/derouilleur-a-aiguilles-mannesmann-demag-ngv-18-29701-11-6.webp",
		"alt": "Repères techniques : Mannesmann DEMAG NGV 18 (réf. 29701-11-6)",
		"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "mannesmann-demag-ngv-18",
		"label": "Référence 29701-11-6",
		"distinguishingAttributes": {
			"reference": "29701-11-6",
			"Masse publiée": "1.95 kg",
			"Référence fabricant": "29701-11-6"
		}
	},
	"editorial": {
		"overview": "Mannesmann DEMAG NGV 18. Le NGV 18 utilise dix-huit aiguilles 3 × 127 mm à 8 700 coups/min. Le GNV 19 reçoit dix-neuf aiguilles de diamètre 3,2 mm à 6 600 coups/min, tandis que le GNV 28 passe à vingt-huit. La note 6 bar concerne puissance et cadence, sans extension implicite à la mesure des 1,6 L/s.",
		"verifiedFacts": [
			"Aiguilles : 18, diamètre 3,0 mm × longueur 127 mm.",
			"Cadence : 8 700 coups/min.",
			"Longueur : 310 mm.",
			"Masse : 1,95 kg.",
			"Consommation, régime non précisé : 1,6 L/s."
		],
		"limitations": [
			"La note constructeur à 6 bar concerne explicitement puissance et vitesse/cadence ; elle n’est pas étendue à la consommation sans preuve."
		]
	},
	"specifications": [
		{
			"label": "Aiguilles",
			"value": "18, diamètre 3,0 mm × longueur 127 mm",
			"evidenceIds": [
				"derouilleur-a-aiguilles-mannesmann-demag-ngv-18-29701-11-6-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "8 700 coups/min",
			"evidenceIds": [
				"derouilleur-a-aiguilles-mannesmann-demag-ngv-18-29701-11-6-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "310 mm",
			"evidenceIds": [
				"derouilleur-a-aiguilles-mannesmann-demag-ngv-18-29701-11-6-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,95 kg",
			"evidenceIds": [
				"derouilleur-a-aiguilles-mannesmann-demag-ngv-18-29701-11-6-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation, régime non précisé",
			"value": "1,6 L/s",
			"evidenceIds": [
				"derouilleur-a-aiguilles-mannesmann-demag-ngv-18-29701-11-6-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-mannesmann-0-p67",
			"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download#page=67",
			"sourceLabel": "ProfiToolsNext, catalogue fabricant anglais 05/2017, page PDF 67",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9de8eb77aad6c7412b390db54a16646c71c0a4f9925ddf3ddfba1048b1779f3b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "derouilleur-a-aiguilles-mannesmann-demag-ngv-18-29701-11-6-reserved-20261103-1",
			"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download#page=67",
			"sourceLabel": "Mannesmann DEMAG : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9de8eb77aad6c7412b390db54a16646c71c0a4f9925ddf3ddfba1048b1779f3b. Le NGV 18 utilise dix-huit aiguilles 3 × 127 mm à 8 700 coups/min. Le GNV 19 reçoit dix-neuf aiguilles de diamètre 3,2 mm à 6 600 coups/min, tandis que le GNV 28 passe à vingt-huit. La note 6 bar concerne puissance et cadence, sans extension implicite à la mesure des 1,6 L/s."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-mannesmann-0-p67"
		],
		"workingPressureBar": [
			"october2-tools-mannesmann-0-p67"
		],
		"demandExplanation": [
			"october2-tools-mannesmann-0-p67"
		],
		"editorial": [
			"derouilleur-a-aiguilles-mannesmann-demag-ngv-18-29701-11-6-reserved-20261103-1"
		],
		"specifications": [
			"derouilleur-a-aiguilles-mannesmann-demag-ngv-18-29701-11-6-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
