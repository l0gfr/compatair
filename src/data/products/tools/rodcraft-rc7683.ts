import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rodcraft-rc7683",
	"slug": "rodcraft-rc7683",
	"brand": "Rodcraft",
	"model": "RC7683",
	"mpn": "8951000004",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "Rodcraft RC7683",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rodcraft-rc7683.webp",
		"alt": "Repères techniques Rodcraft RC7683, référence 8951000004",
		"sourceUrl": "https://www.rodcraft.com/en/products/8951000004",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Rodcraft RC7683, référence 8951000004. Le dimensionnement utilise 480 L/min à 6,3 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 5500 rpm. Masse : 0.6 kg. Longueur : 120 mm.",
		"verifiedFacts": [
			"Pression dynamique de travail maximale publiée : 6.3 bar, retenue comme point de fonctionnement. Respecter cette limite à l’entrée de l’outil.",
			"Consommation en charge publiée : 8 L/s. Consommation à vide publiée : 6 L/s. Valeur retenue : 480 L/min (maximum des régimes documentés, L/s × 60).",
			"Référence fabricant : 8951000004.",
			"Vitesse à vide : 5500 rpm.",
			"Masse : 0.6 kg.",
			"Longueur : 120 mm."
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
				"rodcraft-8951000004-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation en charge publiée : 8 L/s. Consommation à vide publiée : 6 L/s. Valeur retenue : 480 L/min (maximum des régimes documentés, L/s × 60).",
			"evidenceIds": [
				"rodcraft-8951000004-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "5500 rpm",
			"evidenceIds": [
				"rodcraft-8951000004-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "0.6 kg",
			"evidenceIds": [
				"rodcraft-8951000004-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "120 mm",
			"evidenceIds": [
				"rodcraft-8951000004-20260927"
			]
		},
		{
			"label": "Diamètre intérieur du tuyau (longueur 5 m)",
			"value": "8 mm",
			"evidenceIds": [
				"rodcraft-8951000004-20260927"
			]
		},
		{
			"label": "Filetage d’entrée d’air",
			"value": "1/4",
			"evidenceIds": [
				"rodcraft-8951000004-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "rodcraft-8951000004-20260927",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951000004",
			"sourceLabel": "Rodcraft, fiche technique officielle RC7683, réf. 8951000004",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 8 L/s. Consommation à vide publiée : 6 L/s. Valeur retenue : 480 L/min (maximum des régimes documentés, L/s × 60)."
		}
	],
	"fieldSources": {
		"mpn": [
			"rodcraft-8951000004-20260927"
		],
		"workingPressureBar": [
			"rodcraft-8951000004-20260927"
		],
		"airflowLpm": [
			"rodcraft-8951000004-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 480,
		"typical": 480,
		"max": 480
	}
};

export default product;
