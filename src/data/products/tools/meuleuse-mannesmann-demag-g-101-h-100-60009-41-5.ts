const product = {
	"id": "meuleuse-mannesmann-demag-g-101-h-100-60009-41-5",
	"slug": "meuleuse-mannesmann-demag-g-101-h-100-60009-41-5",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Mannesmann DEMAG G 101 H-100 (réf. 60009-41-5)",
	"brand": "Mannesmann DEMAG",
	"model": "G 101 H-100",
	"mpn": "60009-41-5",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-mannesmann-demag-g-101-h-100-60009-41-5.webp",
		"alt": "Repères techniques : Mannesmann DEMAG G 101 H-100 (réf. 60009-41-5)",
		"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "mannesmann-demag-g-101-h-100",
		"label": "Référence 60009-41-5",
		"distinguishingAttributes": {
			"reference": "60009-41-5",
			"Masse sans tuyau": "3.5 kg",
			"Référence fabricant": "60009-41-5"
		}
	},
	"editorial": {
		"overview": "Mannesmann DEMAG G 101 H-100 (réf. 60009-41-5). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse sans tuyau : 3.5 kg. Référence fabricant : 60009-41-5.",
		"verifiedFacts": [
			"Masse sans tuyau : 3.5 kg.",
			"Référence fabricant : 60009-41-5.",
			"Vitesse à vide : 10 000 tr/min."
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
			"value": "3.5 kg",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p16"
			]
		},
		{
			"label": "Référence fabricant",
			"value": "60009-41-5",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p16"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "10 000 tr/min",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p16"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Power and free speed at 6 bar operating pressure. Compressed air quality: lubricated.",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p16"
			]
		},
		{
			"label": "Consommation en charge, hors calcul",
			"value": "27.7 L/s",
			"evidenceIds": [
				"october2-tools-mannesmann-0-p16"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-mannesmann-0-p16",
			"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download#page=16",
			"sourceLabel": "ProfiToolsNext, catalogue fabricant anglais 05/2017, page PDF 16",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9de8eb77aad6c7412b390db54a16646c71c0a4f9925ddf3ddfba1048b1779f3b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-mannesmann-0-p16"
		],
		"workingPressureBar": [
			"october2-tools-mannesmann-0-p16"
		],
		"demandExplanation": [
			"october2-tools-mannesmann-0-p16"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
