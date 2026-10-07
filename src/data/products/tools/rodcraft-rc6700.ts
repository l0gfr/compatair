import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rodcraft-rc6700",
	"slug": "rodcraft-rc6700",
	"brand": "Rodcraft",
	"model": "RC6700",
	"mpn": "8951074001",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "Rodcraft RC6700",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rodcraft-rc6700.webp",
		"alt": "Repères techniques Rodcraft RC6700, référence 8951074001",
		"sourceUrl": "https://www.rodcraft.com/en/products/8951074001",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Rodcraft RC6700, référence 8951074001. Le dimensionnement utilise 102 L/min à 6,3 bar, selon les régimes publiés par le fabricant. Masse : 1.6 kg. Longueur : 225 mm. Diamètre intérieur du tuyau (longueur 5 m) : 8 mm.",
		"verifiedFacts": [
			"Pression dynamique de travail maximale publiée : 6.3 bar, retenue comme point de fonctionnement. Respecter cette limite à l’entrée de l’outil.",
			"Consommation en charge publiée : 1.7 L/s. Valeur retenue : 102 L/min (maximum des régimes documentés, L/s × 60).",
			"Référence fabricant : 8951074001.",
			"Masse : 1.6 kg.",
			"Longueur : 225 mm.",
			"Diamètre intérieur du tuyau (longueur 5 m) : 8 mm."
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
				"rodcraft-8951074001-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation en charge publiée : 1.7 L/s. Valeur retenue : 102 L/min (maximum des régimes documentés, L/s × 60).",
			"evidenceIds": [
				"rodcraft-8951074001-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "1.6 kg",
			"evidenceIds": [
				"rodcraft-8951074001-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "225 mm",
			"evidenceIds": [
				"rodcraft-8951074001-20260927"
			]
		},
		{
			"label": "Diamètre intérieur du tuyau (longueur 5 m)",
			"value": "8 mm",
			"evidenceIds": [
				"rodcraft-8951074001-20260927"
			]
		},
		{
			"label": "Filetage d’entrée d’air",
			"value": "1/4",
			"evidenceIds": [
				"rodcraft-8951074001-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "rodcraft-8951074001-20260927",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951074001",
			"sourceLabel": "Rodcraft, fiche technique officielle RC6700, réf. 8951074001",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 1.7 L/s. Valeur retenue : 102 L/min (maximum des régimes documentés, L/s × 60)."
		}
	],
	"fieldSources": {
		"mpn": [
			"rodcraft-8951074001-20260927"
		],
		"workingPressureBar": [
			"rodcraft-8951074001-20260927"
		],
		"airflowLpm": [
			"rodcraft-8951074001-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 102,
		"typical": 102,
		"max": 102
	}
};

export default product;
