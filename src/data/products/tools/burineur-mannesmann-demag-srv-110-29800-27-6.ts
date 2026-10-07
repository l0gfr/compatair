import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-mannesmann-demag-srv-110-29800-27-6",
	"slug": "burineur-mannesmann-demag-srv-110-29800-27-6",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Mannesmann DEMAG SRV 110 (réf. 29800-27-6)",
	"brand": "Mannesmann DEMAG",
	"model": "SRV 110",
	"mpn": "29800-27-6",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-mannesmann-demag-srv-110-29800-27-6.webp",
		"alt": "Repères techniques : Mannesmann DEMAG SRV 110 (réf. 29800-27-6)",
		"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "mannesmann-demag-srv-110",
		"label": "Référence 29800-27-6",
		"distinguishingAttributes": {
			"reference": "29800-27-6",
			"Masse sans tuyau": "1.15 kg",
			"Référence fabricant": "29800-27-6"
		}
	},
	"editorial": {
		"overview": "Mannesmann DEMAG SRV 110 (réf. 29800-27-6). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse sans tuyau : 1.15 kg. Référence fabricant : 29800-27-6.",
		"verifiedFacts": [
			"Masse sans tuyau : 1.15 kg.",
			"Référence fabricant : 29800-27-6.",
			"Longueur publiée : 210 mm."
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
			"value": "1.15 kg",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p65"
			]
		},
		{
			"label": "Référence fabricant",
			"value": "29800-27-6",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p65"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "210 mm",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p65"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Power and free speed at 6 bar operating pressure.  ",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p65"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "1.5 L/s",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p65"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-mannesmann-0-p65",
			"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download#page=65",
			"sourceLabel": "ProfiToolsNext, catalogue fabricant anglais 05/2017, page PDF 65",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9de8eb77aad6c7412b390db54a16646c71c0a4f9925ddf3ddfba1048b1779f3b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-mannesmann-0-p65"
		],
		"workingPressureBar": [
			"october2-tools-mannesmann-0-p65"
		],
		"demandExplanation": [
			"october2-tools-mannesmann-0-p65"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
