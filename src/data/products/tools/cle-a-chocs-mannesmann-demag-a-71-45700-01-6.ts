import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-mannesmann-demag-a-71-45700-01-6",
	"slug": "cle-a-chocs-mannesmann-demag-a-71-45700-01-6",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Mannesmann DEMAG A 71 (réf. 45700-01-6)",
	"brand": "Mannesmann DEMAG",
	"model": "A 71",
	"mpn": "45700-01-6",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-mannesmann-demag-a-71-45700-01-6.webp",
		"alt": "Repères techniques : Mannesmann DEMAG A 71 (réf. 45700-01-6)",
		"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "mannesmann-demag-a-71",
		"label": "Référence 45700-01-6",
		"distinguishingAttributes": {
			"reference": "45700-01-6",
			"Masse publiée": "32 kg",
			"Référence fabricant": "45700-01-6"
		}
	},
	"editorial": {
		"overview": "Mannesmann DEMAG A 71 (réf. 45700-01-6). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 32 kg. Référence fabricant : 45700-01-6.",
		"verifiedFacts": [
			"Masse publiée : 32 kg.",
			"Référence fabricant : 45700-01-6.",
			"Vitesse à vide : 2 300 tr/min.",
			"Longueur publiée : 448 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"La pression de 6 bar est donnée pour la puissance et la vitesse ; son application à la consommation n’est pas supposée.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "32 kg",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p73"
			]
		},
		{
			"label": "Référence fabricant",
			"value": "45700-01-6",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p73"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2 300 tr/min",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p73"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "448 mm",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p73"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Power and free speed at 6 bar operating pressure. Compressed air quality: lubricated.",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p73"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "2.80 m3/min",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p73"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-mannesmann-0-p73",
			"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download#page=73",
			"sourceLabel": "ProfiToolsNext, catalogue fabricant anglais 05/2017, page PDF 73",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9de8eb77aad6c7412b390db54a16646c71c0a4f9925ddf3ddfba1048b1779f3b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-mannesmann-0-p73"
		],
		"workingPressureBar": [
			"october2-tools-mannesmann-0-p73"
		],
		"demandExplanation": [
			"october2-tools-mannesmann-0-p73"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
