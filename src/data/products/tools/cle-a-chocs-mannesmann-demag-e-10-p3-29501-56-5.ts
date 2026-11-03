import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-mannesmann-demag-e-10-p3-29501-56-5",
	"slug": "cle-a-chocs-mannesmann-demag-e-10-p3-29501-56-5",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Mannesmann DEMAG E 10 P3 (réf. 29501-56-5)",
	"brand": "Mannesmann DEMAG",
	"model": "E 10 P3",
	"mpn": "29501-56-5",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-mannesmann-demag-e-10-p3-29501-56-5.webp",
		"alt": "Repères techniques : Mannesmann DEMAG E 10 P3 (réf. 29501-56-5)",
		"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "mannesmann-demag-e-10-p3",
		"label": "Référence 29501-56-5",
		"distinguishingAttributes": {
			"reference": "29501-56-5",
			"Masse publiée": "1.2 kg",
			"Référence fabricant": "29501-56-5"
		}
	},
	"editorial": {
		"overview": "Mannesmann DEMAG E 10 P3. La E 10 P3 est la clé à chocs carré 3/8 pouce, plage 30–110 Nm et maximum 140 Nm. La E 10 PS3 possède un mandrin rapide hexagonal 1/4 pouce, plage 15–60 Nm et maximum 80 Nm. Ces montages ne sont pas fusionnés malgré une vitesse commune de 10 000 tr/min. La consommation demeure hors calcul faute de pression de mesure appariée.",
		"verifiedFacts": [
			"Carré : 3/8 pouce.",
			"Plage de travail : 30–110 Nm.",
			"Couple maximal distinct : 140 Nm.",
			"Vitesse à vide : 10 000 tr/min.",
			"Longueur : 155 mm."
		],
		"limitations": [
			"La note constructeur à 6 bar concerne explicitement puissance et vitesse/cadence ; elle n’est pas étendue à la consommation sans preuve."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "3/8 pouce",
			"evidenceIds": [
				"cle-a-chocs-mannesmann-demag-e-10-p3-29501-56-5-reserved-20261103-1"
			]
		},
		{
			"label": "Plage de travail",
			"value": "30–110 Nm",
			"evidenceIds": [
				"cle-a-chocs-mannesmann-demag-e-10-p3-29501-56-5-reserved-20261103-1"
			]
		},
		{
			"label": "Couple maximal distinct",
			"value": "140 Nm",
			"evidenceIds": [
				"cle-a-chocs-mannesmann-demag-e-10-p3-29501-56-5-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "10 000 tr/min",
			"evidenceIds": [
				"cle-a-chocs-mannesmann-demag-e-10-p3-29501-56-5-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "155 mm",
			"evidenceIds": [
				"cle-a-chocs-mannesmann-demag-e-10-p3-29501-56-5-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-mannesmann-0-p71",
			"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download#page=71",
			"sourceLabel": "ProfiToolsNext, catalogue fabricant anglais 05/2017, page PDF 71",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9de8eb77aad6c7412b390db54a16646c71c0a4f9925ddf3ddfba1048b1779f3b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "cle-a-chocs-mannesmann-demag-e-10-p3-29501-56-5-reserved-20261103-1",
			"sourceUrl": "https://www.mannesmann-demag.com/bilder-und-dateien/downloads/kataloge/md_airtools_05_2017_e.pdf?type=download#page=71",
			"sourceLabel": "Mannesmann DEMAG : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9de8eb77aad6c7412b390db54a16646c71c0a4f9925ddf3ddfba1048b1779f3b. La E 10 P3 est la clé à chocs carré 3/8 pouce, plage 30–110 Nm et maximum 140 Nm. La E 10 PS3 possède un mandrin rapide hexagonal 1/4 pouce, plage 15–60 Nm et maximum 80 Nm. Ces montages ne sont pas fusionnés malgré une vitesse commune de 10 000 tr/min. La consommation demeure hors calcul faute de pression de mesure appariée."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-mannesmann-0-p71"
		],
		"workingPressureBar": [
			"october2-tools-mannesmann-0-p71"
		],
		"demandExplanation": [
			"october2-tools-mannesmann-0-p71"
		],
		"editorial": [
			"cle-a-chocs-mannesmann-demag-e-10-p3-29501-56-5-reserved-20261103-1"
		],
		"specifications": [
			"cle-a-chocs-mannesmann-demag-e-10-p3-29501-56-5-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
