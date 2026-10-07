import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-mannesmann-demag-mdws-4-200-82600-10-3",
	"slug": "meuleuse-mannesmann-demag-mdws-4-200-82600-10-3",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Mannesmann DEMAG MDWS 4 200 (réf. 82600-10-3)",
	"brand": "Mannesmann DEMAG",
	"model": "MDWS 4 200",
	"mpn": "82600-10-3",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-mannesmann-demag-mdws-4-200-82600-10-3.webp",
		"alt": "Repères techniques : Mannesmann DEMAG MDWS 4 200 (réf. 82600-10-3)",
		"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "mannesmann-demag-mdws-4-200",
		"label": "Référence 82600-10-3",
		"distinguishingAttributes": {
			"reference": "82600-10-3",
			"Masse sans tuyau": "1.6 kg",
			"Référence fabricant": "82600-10-3"
		}
	},
	"editorial": {
		"overview": "Mannesmann DEMAG MDWS 4 200 (réf. 82600-10-3). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse sans tuyau : 1.6 kg. Référence fabricant : 82600-10-3.",
		"verifiedFacts": [
			"Masse sans tuyau : 1.6 kg.",
			"Référence fabricant : 82600-10-3.",
			"Vitesse à vide : 12 000 tr/min.",
			"Longueur publiée : 220 mm."
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
			"value": "1.6 kg",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p23"
			]
		},
		{
			"label": "Référence fabricant",
			"value": "82600-10-3",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p23"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p23"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "220 mm",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p23"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Power and free speed at 6 bar operating pressure. Compressed air quality: lubricated.",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p23"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "19.9 L/s",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p23"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-mannesmann-0-p23",
			"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download#page=23",
			"sourceLabel": "ProfiToolsNext, catalogue fabricant anglais 05/2017, page PDF 23",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9de8eb77aad6c7412b390db54a16646c71c0a4f9925ddf3ddfba1048b1779f3b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-mannesmann-0-p23"
		],
		"workingPressureBar": [
			"october2-tools-mannesmann-0-p23"
		],
		"demandExplanation": [
			"october2-tools-mannesmann-0-p23"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
