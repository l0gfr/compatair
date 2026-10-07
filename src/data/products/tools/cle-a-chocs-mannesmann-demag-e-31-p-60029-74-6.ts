import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-mannesmann-demag-e-31-p-60029-74-6",
	"slug": "cle-a-chocs-mannesmann-demag-e-31-p-60029-74-6",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Mannesmann DEMAG E 31 P (réf. 60029-74-6)",
	"brand": "Mannesmann DEMAG",
	"model": "E 31 P",
	"mpn": "60029-74-6",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-mannesmann-demag-e-31-p-60029-74-6.webp",
		"alt": "Repères techniques : Mannesmann DEMAG E 31 P (réf. 60029-74-6)",
		"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "mannesmann-demag-e-31-p",
		"label": "Référence 60029-74-6",
		"distinguishingAttributes": {
			"reference": "60029-74-6",
			"Masse publiée": "5.6 kg",
			"Référence fabricant": "60029-74-6"
		}
	},
	"editorial": {
		"overview": "Mannesmann DEMAG E 31 P (réf. 60029-74-6). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 5.6 kg. Référence fabricant : 60029-74-6.",
		"verifiedFacts": [
			"Masse publiée : 5.6 kg.",
			"Référence fabricant : 60029-74-6.",
			"Vitesse à vide : 6 800 tr/min.",
			"Longueur publiée : 266 mm."
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
			"value": "5.6 kg",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p72"
			]
		},
		{
			"label": "Référence fabricant",
			"value": "60029-74-6",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p72"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "6 800 tr/min",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p72"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "266 mm",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p72"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Power and free speed at 6 bar operating pressure. Compressed air quality: lubricated.",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p72"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "1.10 m3/min",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p72"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-mannesmann-0-p72",
			"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download#page=72",
			"sourceLabel": "ProfiToolsNext, catalogue fabricant anglais 05/2017, page PDF 72",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9de8eb77aad6c7412b390db54a16646c71c0a4f9925ddf3ddfba1048b1779f3b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-mannesmann-0-p72"
		],
		"workingPressureBar": [
			"october2-tools-mannesmann-0-p72"
		],
		"demandExplanation": [
			"october2-tools-mannesmann-0-p72"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
