import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-mannesmann-demag-mdexz-150-5-0-8280-0305",
	"slug": "ponceuse-orbitale-mannesmann-demag-mdexz-150-5-0-8280-0305",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Mannesmann DEMAG MDEXZ 150/5.0 (réf. 8280 0305)",
	"brand": "Mannesmann DEMAG",
	"model": "MDEXZ 150/5.0",
	"mpn": "8280 0305",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-mannesmann-demag-mdexz-150-5-0-8280-0305.webp",
		"alt": "Repères techniques : Mannesmann DEMAG MDEXZ 150/5.0 (réf. 8280 0305)",
		"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "mannesmann-demag-mdexz-150-5-0",
		"label": "Référence 8280 0305",
		"distinguishingAttributes": {
			"reference": "8280 0305",
			"Masse sans tuyau": "0.79 kg",
			"Référence fabricant": "8280 0305"
		}
	},
	"editorial": {
		"overview": "Mannesmann DEMAG MDEXZ 150/5.0 (réf. 8280 0305). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse sans tuyau : 0.79 kg. Référence fabricant : 8280 0305.",
		"verifiedFacts": [
			"Masse sans tuyau : 0.79 kg.",
			"Référence fabricant : 8280 0305.",
			"Vitesse à vide : 12 000 tr/min.",
			"Longueur publiée : 162 mm."
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
			"value": "0.79 kg",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p35"
			]
		},
		{
			"label": "Référence fabricant",
			"value": "8280 0305",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p35"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p35"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "162 mm",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p35"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Power and free speed at 6 bar operating pressure. Compressed air quality: lubricated.",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p35"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "5.8 L/s",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p35"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-mannesmann-0-p35",
			"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download#page=35",
			"sourceLabel": "ProfiToolsNext, catalogue fabricant anglais 05/2017, page PDF 35",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9de8eb77aad6c7412b390db54a16646c71c0a4f9925ddf3ddfba1048b1779f3b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-mannesmann-0-p35"
		],
		"workingPressureBar": [
			"october2-tools-mannesmann-0-p35"
		],
		"demandExplanation": [
			"october2-tools-mannesmann-0-p35"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
