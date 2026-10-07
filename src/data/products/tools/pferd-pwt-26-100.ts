import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pferd-pwt-26-100",
	"slug": "pferd-pwt-26-100",
	"brand": "PFERD",
	"model": "PWT 26/100",
	"mpn": "80201020",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "PFERD PWT 26/100",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/pferd-pwt-26-100.webp",
		"alt": "Repères techniques PFERD PWT 26/100, référence 80201020",
		"sourceUrl": "https://fr.pferd.com/fr/meuleuse-dangle-pneumatique-pwt-26100",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "PFERD PWT 26/100, référence 80201020. Le dimensionnement utilise 2 250 L/min à 6,3 bar, selon les régimes publiés par le fabricant. Longueur : 295 mm. Poids net de la machine : 2.58 kg. Échappement d'air : dessous.",
		"verifiedFacts": [
			"Pression de service publiée sur cette fiche : 6.3 bar. Aucune autre pression de fonctionnement n’est déduite.",
			"Consommation sous charge : 2.25 m³/min ; à vide : 0.9 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 2250 L/min (m³/min × 1 000).",
			"Référence fabricant : 80201020.",
			"Longueur : 295 mm.",
			"Poids net de la machine : 2.58 kg.",
			"Échappement d'air : dessous."
		],
		"limitations": [
			"Caractéristiques déclarées par le constructeur ; aucune mesure physique réalisée par CompatAir.",
			"La présence au catalogue fabricant ne prouve ni le stock d’un distributeur, ni un volume de ventes.",
			"La valeur la plus élevée à vide ou en charge couvre les deux régimes documentés ; aucune moyenne de cycle n’est substituée à ces valeurs."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de service publiée sur cette fiche : 6.3 bar. Aucune autre pression de fonctionnement n’est déduite.",
			"evidenceIds": [
				"pferd-80201020-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation sous charge : 2.25 m³/min ; à vide : 0.9 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 2250 L/min (m³/min × 1 000).",
			"evidenceIds": [
				"pferd-80201020-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "295 mm",
			"evidenceIds": [
				"pferd-80201020-20260927"
			]
		},
		{
			"label": "Poids net de la machine",
			"value": "2.58 kg",
			"evidenceIds": [
				"pferd-80201020-20260927"
			]
		},
		{
			"label": "Échappement d'air",
			"value": "dessous",
			"evidenceIds": [
				"pferd-80201020-20260927"
			]
		},
		{
			"label": "ø intérieur flexible d'alimentation",
			"value": "16 mm",
			"evidenceIds": [
				"pferd-80201020-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "pferd-80201020-20260927",
			"sourceUrl": "https://fr.pferd.com/fr/meuleuse-dangle-pneumatique-pwt-26100",
			"sourceLabel": "PFERD TOOLS, fiche technique PWT 26/100, réf. 80201020",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation sous charge : 2.25 m³/min ; à vide : 0.9 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 2250 L/min (m³/min × 1 000)."
		}
	],
	"fieldSources": {
		"mpn": [
			"pferd-80201020-20260927"
		],
		"workingPressureBar": [
			"pferd-80201020-20260927"
		],
		"airflowLpm": [
			"pferd-80201020-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 2250,
		"typical": 2250,
		"max": 2250
	}
};

export default product;
