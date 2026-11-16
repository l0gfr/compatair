import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "taraudeuse-mannesmann-demag-may-12-136-309-016",
	"slug": "taraudeuse-mannesmann-demag-may-12-136-309-016",
	"categoryId": "taraudeuse",
	"category": "taraudeuse",
	"label": "Mannesmann DEMAG MAY 12 (réf. 136 309 016)",
	"brand": "Mannesmann DEMAG",
	"model": "MAY 12",
	"mpn": "136 309 016",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/taraudeuse-mannesmann-demag-may-12-136-309-016-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Mannesmann DEMAG MAY 12 (réf. 136 309 016)",
		"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "mannesmann-demag-may-12",
		"label": "Référence 136 309 016",
		"distinguishingAttributes": {
			"reference": "136 309 016",
			"Masse sans tuyau": "1.82 kg",
			"Référence fabricant": "136 309 016"
		}
	},
	"editorial": {
		"overview": "La taraudeuse MAY12 couvre M12 dans l’acier et M14 dans l’aluminium, à220 tr/min au vissage et470 au retour. La MAY10 tourne plus vite pour des filetages plus petits ; la MAS8 est plus courte et légère. L’inversion s’effectue en tirant l’outil, avec porte-taraud à changement rapide.",
		"verifiedFacts": [
			"Masse sans tuyau : 1.82 kg.",
			"Référence fabricant : 136 309 016.",
			"Vitesse à vide : 220 tr/min.",
			"Longueur publiée : 335 mm.",
			"Taraudage : Acier M12 ; aluminium M14.",
			"Vitesses à vide : Sens horaire220 tr/min ; antihoraire470 tr/min.",
			"Commande : Démarrage par levier ; inversion en tirant la machine.",
			"Porte-taraud : Changement rapide ; accessoires à choisir selon queue et carré du taraud."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"La pression de 6 bar est donnée pour la puissance et la vitesse ; son application à la consommation n’est pas supposée.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse sans tuyau",
			"value": "1.82 kg",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p64"
			]
		},
		{
			"label": "Référence fabricant",
			"value": "136 309 016",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p64"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "220 tr/min",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p64"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "335 mm",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p64"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Power and free speed at 6 bar operating pressure. Compressed air quality: lubricated.",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p64"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "11 L/s",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p64"
			]
		},
		{
			"label": "Taraudage",
			"value": "Acier M12 ; aluminium M14",
			"evidenceIds": [
				"review:2026-11-16-reviews:taraudeuse-mannesmann-demag-may-12-136-309-016:0"
			]
		},
		{
			"label": "Vitesses à vide",
			"value": "Sens horaire220 tr/min ; antihoraire470 tr/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:taraudeuse-mannesmann-demag-may-12-136-309-016:0"
			]
		},
		{
			"label": "Commande",
			"value": "Démarrage par levier ; inversion en tirant la machine",
			"evidenceIds": [
				"review:2026-11-16-reviews:taraudeuse-mannesmann-demag-may-12-136-309-016:0"
			]
		},
		{
			"label": "Porte-taraud",
			"value": "Changement rapide ; accessoires à choisir selon queue et carré du taraud",
			"evidenceIds": [
				"review:2026-11-16-reviews:taraudeuse-mannesmann-demag-may-12-136-309-016:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-mannesmann-0-p64",
			"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download#page=64",
			"sourceLabel": "ProfiToolsNext, catalogue fabricant anglais 05/2017, page PDF 64",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9de8eb77aad6c7412b390db54a16646c71c0a4f9925ddf3ddfba1048b1779f3b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:taraudeuse-mannesmann-demag-may-12-136-309-016:0",
			"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download",
			"sourceLabel": "Mannesmann DEMAG, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La taraudeuse MAY12 couvre M12 dans l’acier et M14 dans l’aluminium, à220 tr/min au vissage et470 au retour. La MAY10 tourne plus vite pour des filetages plus petits ; la MAS8 est plus courte et légère. L’inversion s’effectue en tirant l’outil, avec porte-taraud à changement rapide. GET complet SHA-256 9de8eb77aad6c7412b390db54a16646c71c0a4f9925ddf3ddfba1048b1779f3b. Pages PDF lues : 64."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-mannesmann-0-p64"
		],
		"workingPressureBar": [
			"october2-tools-mannesmann-0-p64"
		],
		"demandExplanation": [
			"october2-tools-mannesmann-0-p64"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
