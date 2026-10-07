import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "graveur-mannesmann-demag-gst-540-29903-91-6",
	"slug": "graveur-mannesmann-demag-gst-540-29903-91-6",
	"categoryId": "graveur",
	"category": "graveur",
	"label": "Mannesmann DEMAG GST 540 (réf. 29903-91-6)",
	"brand": "Mannesmann DEMAG",
	"model": "GST 540",
	"mpn": "29903-91-6",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/graveur-mannesmann-demag-gst-540-29903-91-6.webp",
		"alt": "Repères techniques : Mannesmann DEMAG GST 540 (réf. 29903-91-6)",
		"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "mannesmann-demag-gst-540",
		"label": "Référence 29903-91-6",
		"distinguishingAttributes": {
			"reference": "29903-91-6",
			"Masse sans tuyau": "0.15 kg",
			"Référence fabricant": "29903-91-6"
		}
	},
	"editorial": {
		"overview": "Mannesmann DEMAG GST 540 (réf. 29903-91-6). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse sans tuyau : 0.15 kg. Référence fabricant : 29903-91-6.",
		"verifiedFacts": [
			"Masse sans tuyau : 0.15 kg.",
			"Référence fabricant : 29903-91-6.",
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
			"value": "0.15 kg",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p32"
			]
		},
		{
			"label": "Référence fabricant",
			"value": "29903-91-6",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p32"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "162 mm",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p32"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Power and free speed at 6 bar operating pressure. Compressed air quality: lubricated.",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p32"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "0.85 L/s",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p32"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-mannesmann-0-p32",
			"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download#page=32",
			"sourceLabel": "ProfiToolsNext, catalogue fabricant anglais 05/2017, page PDF 32",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9de8eb77aad6c7412b390db54a16646c71c0a4f9925ddf3ddfba1048b1779f3b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-mannesmann-0-p32"
		],
		"workingPressureBar": [
			"october2-tools-mannesmann-0-p32"
		],
		"demandExplanation": [
			"october2-tools-mannesmann-0-p32"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
