import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "taraudeuse-mannesmann-demag-g-14-6-p-47650-53-5",
	"slug": "taraudeuse-mannesmann-demag-g-14-6-p-47650-53-5",
	"categoryId": "taraudeuse",
	"category": "taraudeuse",
	"label": "Mannesmann DEMAG G 14-6 P (réf. 47650-53-5)",
	"brand": "Mannesmann DEMAG",
	"model": "G 14-6 P",
	"mpn": "47650-53-5",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/taraudeuse-mannesmann-demag-g-14-6-p-47650-53-5.webp",
		"alt": "Repères techniques : Mannesmann DEMAG G 14-6 P (réf. 47650-53-5)",
		"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "mannesmann-demag-g-14-6-p",
		"label": "Référence 47650-53-5",
		"distinguishingAttributes": {
			"reference": "47650-53-5",
			"Masse sans tuyau": "2.2 kg",
			"Référence fabricant": "47650-53-5"
		}
	},
	"editorial": {
		"overview": "Mannesmann DEMAG G 14-6 P (réf. 47650-53-5). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse sans tuyau : 2.2 kg. Référence fabricant : 47650-53-5.",
		"verifiedFacts": [
			"Masse sans tuyau : 2.2 kg.",
			"Référence fabricant : 47650-53-5.",
			"Vitesse à vide : 600 tr/min.",
			"Longueur publiée : 318 mm."
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
			"value": "2.2 kg",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p63"
			]
		},
		{
			"label": "Référence fabricant",
			"value": "47650-53-5",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p63"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "600 tr/min",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p63"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "318 mm",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p63"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Power and free speed at 6 bar operating pressure. Compressed air quality: lubricated.",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p63"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "9.0 L/s",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p63"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-mannesmann-0-p63",
			"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download#page=63",
			"sourceLabel": "ProfiToolsNext, catalogue fabricant anglais 05/2017, page PDF 63",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9de8eb77aad6c7412b390db54a16646c71c0a4f9925ddf3ddfba1048b1779f3b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-mannesmann-0-p63"
		],
		"workingPressureBar": [
			"october2-tools-mannesmann-0-p63"
		],
		"demandExplanation": [
			"october2-tools-mannesmann-0-p63"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
