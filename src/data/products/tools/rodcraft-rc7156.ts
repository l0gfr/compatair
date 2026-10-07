import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rodcraft-rc7156",
	"slug": "rodcraft-rc7156",
	"brand": "Rodcraft",
	"model": "RC7156",
	"mpn": "8951072051",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "Rodcraft RC7156",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rodcraft-rc7156.webp",
		"alt": "Repères techniques Rodcraft RC7156, référence 8951072051",
		"sourceUrl": "https://www.rodcraft.com/en/products/8951072051",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Rodcraft RC7156, référence 8951072051. Le dimensionnement utilise 522 L/min à 6,3 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 17000 rpm. Masse : 1.15 kg. Longueur : 353 mm.",
		"verifiedFacts": [
			"Pression dynamique de travail maximale publiée : 6.3 bar, retenue comme point de fonctionnement. Respecter cette limite à l’entrée de l’outil.",
			"Consommation en charge publiée : 8.7 L/s. Consommation à vide publiée : 6.7 L/s. Valeur retenue : 522 L/min (maximum des régimes documentés, L/s × 60).",
			"Référence fabricant : 8951072051.",
			"Vitesse à vide : 17000 rpm.",
			"Masse : 1.15 kg.",
			"Longueur : 353 mm."
		],
		"limitations": [
			"Caractéristiques déclarées par le constructeur ; aucune mesure physique réalisée par CompatAir.",
			"La présence au catalogue fabricant ne prouve ni le stock d’un distributeur, ni un volume de ventes."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression dynamique de travail maximale publiée : 6.3 bar, retenue comme point de fonctionnement. Respecter cette limite à l’entrée de l’outil.",
			"evidenceIds": [
				"rodcraft-8951072051-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation en charge publiée : 8.7 L/s. Consommation à vide publiée : 6.7 L/s. Valeur retenue : 522 L/min (maximum des régimes documentés, L/s × 60).",
			"evidenceIds": [
				"rodcraft-8951072051-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "17000 rpm",
			"evidenceIds": [
				"rodcraft-8951072051-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "1.15 kg",
			"evidenceIds": [
				"rodcraft-8951072051-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "353 mm",
			"evidenceIds": [
				"rodcraft-8951072051-20260927"
			]
		},
		{
			"label": "Diamètre intérieur du tuyau (longueur 5 m)",
			"value": "8 mm",
			"evidenceIds": [
				"rodcraft-8951072051-20260927"
			]
		},
		{
			"label": "Filetage d’entrée d’air",
			"value": "1/4",
			"evidenceIds": [
				"rodcraft-8951072051-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "rodcraft-8951072051-20260927",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951072051",
			"sourceLabel": "Rodcraft, fiche technique officielle RC7156, réf. 8951072051",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 8.7 L/s. Consommation à vide publiée : 6.7 L/s. Valeur retenue : 522 L/min (maximum des régimes documentés, L/s × 60)."
		}
	],
	"fieldSources": {
		"mpn": [
			"rodcraft-8951072051-20260927"
		],
		"workingPressureBar": [
			"rodcraft-8951072051-20260927"
		],
		"airflowLpm": [
			"rodcraft-8951072051-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 522,
		"typical": 522,
		"max": 522
	}
};

export default product;
