import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pferd-pwas-1-800-hv-90",
	"slug": "pferd-pwas-1-800-hv-90",
	"brand": "PFERD",
	"model": "PWAS 1/800 HV 90°",
	"mpn": "80205015",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "PFERD PWAS 1/800 HV 90°",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/pferd-pwas-1-800-hv-90.webp",
		"alt": "Repères techniques PFERD PWAS 1/800 HV 90°, référence 80205015",
		"sourceUrl": "https://fr.pferd.com/fr/meuleuse-dangle-pneumatique-pwas-1800?a%5Bthrottle-type-tds%5D=Levier",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "PFERD PWAS 1/800 HV 90°, référence 80205015. Le dimensionnement utilise 150 L/min à 6,3 bar, selon les régimes publiés par le fabricant. Longueur : 139 mm. Pince de serrage Ø comprise [mm] : 3 mm. Poids net de la machine : 0.134 kg.",
		"verifiedFacts": [
			"Pression de service publiée sur cette fiche : 6.3 bar. Aucune autre pression de fonctionnement n’est déduite.",
			"Consommation sous charge : 0.14 m³/min ; à vide : 0.15 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 150 L/min (m³/min × 1 000).",
			"Référence fabricant : 80205015.",
			"Longueur : 139 mm.",
			"Pince de serrage Ø comprise [mm] : 3 mm.",
			"Poids net de la machine : 0.134 kg."
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
				"pferd-80205015-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation sous charge : 0.14 m³/min ; à vide : 0.15 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 150 L/min (m³/min × 1 000).",
			"evidenceIds": [
				"pferd-80205015-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "139 mm",
			"evidenceIds": [
				"pferd-80205015-20260927"
			]
		},
		{
			"label": "Pince de serrage Ø comprise [mm]",
			"value": "3 mm",
			"evidenceIds": [
				"pferd-80205015-20260927"
			]
		},
		{
			"label": "Poids net de la machine",
			"value": "0.134 kg",
			"evidenceIds": [
				"pferd-80205015-20260927"
			]
		},
		{
			"label": "Puissance",
			"value": "75 Watt",
			"evidenceIds": [
				"pferd-80205015-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "80000 t/min",
			"evidenceIds": [
				"pferd-80205015-20260927"
			]
		},
		{
			"label": "Échappement d'air",
			"value": "Arrière",
			"evidenceIds": [
				"pferd-80205015-20260927"
			]
		},
		{
			"label": "ø intérieur flexible d'alimentation",
			"value": "4.8 mm",
			"evidenceIds": [
				"pferd-80205015-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "pferd-80205015-20260927",
			"sourceUrl": "https://fr.pferd.com/fr/meuleuse-dangle-pneumatique-pwas-1800?a%5Bthrottle-type-tds%5D=Levier",
			"sourceLabel": "PFERD TOOLS, fiche technique PWAS 1/800 HV 90°, réf. 80205015",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation sous charge : 0.14 m³/min ; à vide : 0.15 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 150 L/min (m³/min × 1 000)."
		}
	],
	"fieldSources": {
		"mpn": [
			"pferd-80205015-20260927"
		],
		"workingPressureBar": [
			"pferd-80205015-20260927"
		],
		"airflowLpm": [
			"pferd-80205015-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 150,
		"typical": 150,
		"max": 150
	}
};

export default product;
