import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-mannesmann-demag-bs-500-p-29500-32-5",
	"slug": "perceuse-mannesmann-demag-bs-500-p-29500-32-5",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Mannesmann DEMAG BS 500 P (réf. 29500-32-5)",
	"brand": "Mannesmann DEMAG",
	"model": "BS 500 P",
	"mpn": "29500-32-5",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-mannesmann-demag-bs-500-p-29500-32-5.webp",
		"alt": "Repères techniques : Mannesmann DEMAG BS 500 P (réf. 29500-32-5)",
		"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "mannesmann-demag-bs-500-p",
		"label": "Référence 29500-32-5",
		"distinguishingAttributes": {
			"reference": "29500-32-5",
			"Masse sans tuyau": "0.78 kg",
			"Référence fabricant": "29500-32-5"
		}
	},
	"editorial": {
		"overview": "Mannesmann DEMAG BS 500 P (réf. 29500-32-5). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse sans tuyau : 0.78 kg. Référence fabricant : 29500-32-5.",
		"verifiedFacts": [
			"Masse sans tuyau : 0.78 kg.",
			"Référence fabricant : 29500-32-5.",
			"Vitesse à vide : 500 tr/min.",
			"Longueur publiée : 190 mm."
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
			"value": "0.78 kg",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p61"
			]
		},
		{
			"label": "Référence fabricant",
			"value": "29500-32-5",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p61"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "500 tr/min",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p61"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "190 mm",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p61"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Power and free speed at 6 bar operating pressure. Compressed air quality: lubricated.",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p61"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "5.0 L/s",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p61"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-mannesmann-0-p61",
			"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download#page=61",
			"sourceLabel": "ProfiToolsNext, catalogue fabricant anglais 05/2017, page PDF 61",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9de8eb77aad6c7412b390db54a16646c71c0a4f9925ddf3ddfba1048b1779f3b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-mannesmann-0-p61"
		],
		"workingPressureBar": [
			"october2-tools-mannesmann-0-p61"
		],
		"demandExplanation": [
			"october2-tools-mannesmann-0-p61"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
