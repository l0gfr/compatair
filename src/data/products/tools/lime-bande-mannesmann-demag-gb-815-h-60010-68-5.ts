import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "lime-bande-mannesmann-demag-gb-815-h-60010-68-5",
	"slug": "lime-bande-mannesmann-demag-gb-815-h-60010-68-5",
	"categoryId": "lime-bande",
	"category": "lime-bande",
	"label": "Mannesmann DEMAG GB 815 H (réf. 60010-68-5)",
	"brand": "Mannesmann DEMAG",
	"model": "GB 815 H",
	"mpn": "60010-68-5",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/lime-bande-mannesmann-demag-gb-815-h-60010-68-5.webp",
		"alt": "Repères techniques : Mannesmann DEMAG GB 815 H (réf. 60010-68-5)",
		"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "mannesmann-demag-gb-815-h",
		"label": "Référence 60010-68-5",
		"distinguishingAttributes": {
			"reference": "60010-68-5",
			"Masse sans tuyau": "0.95 kg",
			"Référence fabricant": "60010-68-5"
		}
	},
	"editorial": {
		"overview": "Mannesmann DEMAG GB 815 H (réf. 60010-68-5). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse sans tuyau : 0.95 kg. Référence fabricant : 60010-68-5.",
		"verifiedFacts": [
			"Masse sans tuyau : 0.95 kg.",
			"Référence fabricant : 60010-68-5.",
			"Vitesse à vide : 20 000 tr/min.",
			"Longueur publiée : 295 mm."
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
			"value": "0.95 kg",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p25"
			]
		},
		{
			"label": "Référence fabricant",
			"value": "60010-68-5",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p25"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "20 000 tr/min",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p25"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "295 mm",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p25"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Power and free speed at 6 bar operating pressure. Compressed air quality: lubricated.",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p25"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "10.0 L/s",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p25"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-mannesmann-0-p25",
			"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download#page=25",
			"sourceLabel": "ProfiToolsNext, catalogue fabricant anglais 05/2017, page PDF 25",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9de8eb77aad6c7412b390db54a16646c71c0a4f9925ddf3ddfba1048b1779f3b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-mannesmann-0-p25"
		],
		"workingPressureBar": [
			"october2-tools-mannesmann-0-p25"
		],
		"demandExplanation": [
			"october2-tools-mannesmann-0-p25"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
