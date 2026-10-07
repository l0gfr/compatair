import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rodcraft-rc4770",
	"slug": "rodcraft-rc4770",
	"brand": "Rodcraft",
	"model": "RC4770",
	"mpn": "8951000427",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Rodcraft RC4770",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rodcraft-rc4770.webp",
		"alt": "Repères techniques Rodcraft RC4770, référence 8951000427",
		"sourceUrl": "https://www.rodcraft.com/en/products/8951000427",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Rodcraft RC4770, référence 8951000427. Le dimensionnement utilise 660 L/min à 6,3 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 2000 rpm. Masse : 1.69 kg. Longueur : 258 mm.",
		"verifiedFacts": [
			"Pression dynamique de travail maximale publiée : 6.3 bar, retenue comme point de fonctionnement. Respecter cette limite à l’entrée de l’outil.",
			"Consommation en charge publiée : 11 L/s. Consommation à vide publiée : 10 L/s. Valeur retenue : 660 L/min (maximum des régimes documentés, L/s × 60).",
			"Référence fabricant : 8951000427.",
			"Vitesse à vide : 2000 rpm.",
			"Masse : 1.69 kg.",
			"Longueur : 258 mm."
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
				"rodcraft-8951000427-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation en charge publiée : 11 L/s. Consommation à vide publiée : 10 L/s. Valeur retenue : 660 L/min (maximum des régimes documentés, L/s × 60).",
			"evidenceIds": [
				"rodcraft-8951000427-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2000 rpm",
			"evidenceIds": [
				"rodcraft-8951000427-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "1.69 kg",
			"evidenceIds": [
				"rodcraft-8951000427-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "258 mm",
			"evidenceIds": [
				"rodcraft-8951000427-20260927"
			]
		},
		{
			"label": "Diamètre intérieur du tuyau (longueur 5 m)",
			"value": "10 mm",
			"evidenceIds": [
				"rodcraft-8951000427-20260927"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "1/4",
			"evidenceIds": [
				"rodcraft-8951000427-20260927"
			]
		},
		{
			"label": "Filetage d’entrée d’air",
			"value": "1/4",
			"evidenceIds": [
				"rodcraft-8951000427-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "rodcraft-8951000427-20260927",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951000427",
			"sourceLabel": "Rodcraft, fiche technique officielle RC4770, réf. 8951000427",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 11 L/s. Consommation à vide publiée : 10 L/s. Valeur retenue : 660 L/min (maximum des régimes documentés, L/s × 60)."
		}
	],
	"fieldSources": {
		"mpn": [
			"rodcraft-8951000427-20260927"
		],
		"workingPressureBar": [
			"rodcraft-8951000427-20260927"
		],
		"airflowLpm": [
			"rodcraft-8951000427-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 660,
		"typical": 660,
		"max": 660
	}
};

export default product;
