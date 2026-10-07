import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-mannesmann-demag-d-13-380-p-46920-39-5",
	"slug": "perceuse-mannesmann-demag-d-13-380-p-46920-39-5",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Mannesmann DEMAG D 13-380 P (réf. 46920-39-5)",
	"brand": "Mannesmann DEMAG",
	"model": "D 13-380 P",
	"mpn": "46920-39-5",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-mannesmann-demag-d-13-380-p-46920-39-5.webp",
		"alt": "Repères techniques : Mannesmann DEMAG D 13-380 P (réf. 46920-39-5)",
		"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "mannesmann-demag-d-13-380-p",
		"label": "Référence 46920-39-5",
		"distinguishingAttributes": {
			"reference": "46920-39-5",
			"Masse sans tuyau": "1.3 kg",
			"Référence fabricant": "46920-39-5"
		}
	},
	"editorial": {
		"overview": "Mannesmann DEMAG D 13-380 P (réf. 46920-39-5). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse sans tuyau : 1.3 kg. Référence fabricant : 46920-39-5.",
		"verifiedFacts": [
			"Masse sans tuyau : 1.3 kg.",
			"Référence fabricant : 46920-39-5.",
			"Vitesse à vide : 380 tr/min.",
			"Longueur publiée : 240 mm."
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
			"value": "1.3 kg",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p56"
			]
		},
		{
			"label": "Référence fabricant",
			"value": "46920-39-5",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p56"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "380 tr/min",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p56"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "240 mm",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p56"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Power and free speed at 6 bar operating pressure. Compressed air quality: lubricated.",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p56"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "7.0 L/s",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p56"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-mannesmann-0-p56",
			"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download#page=56",
			"sourceLabel": "ProfiToolsNext, catalogue fabricant anglais 05/2017, page PDF 56",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9de8eb77aad6c7412b390db54a16646c71c0a4f9925ddf3ddfba1048b1779f3b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-mannesmann-0-p56"
		],
		"workingPressureBar": [
			"october2-tools-mannesmann-0-p56"
		],
		"demandExplanation": [
			"october2-tools-mannesmann-0-p56"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
