import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pferd-pgas-2-800-e-dv",
	"slug": "pferd-pgas-2-800-e-dv",
	"brand": "PFERD",
	"model": "PGAS 2/800 E-DV",
	"mpn": "80105021",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "PFERD PGAS 2/800 E-DV",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/pferd-pgas-2-800-e-dv.webp",
		"alt": "Repères techniques PFERD PGAS 2/800 E-DV, référence 80105021",
		"sourceUrl": "https://fr.pferd.com/fr/meuleuse-droite-pneumatique-pgas-2800-e?a%5Bthrottle-type-tds%5D=Lime+pour+tour&a%5Bpferd-type-tds%5D=PGAS+2%2F800+E-DV",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "PFERD PGAS 2/800 E-DV, référence 80105021. Le dimensionnement utilise 270 L/min à 6,3 bar, selon les régimes publiés par le fabricant. Longueur : 145 mm. Pince de serrage Ø comprise [mm] : 3 mm. Poids net de la machine : 0.136 kg.",
		"verifiedFacts": [
			"Pression de service publiée sur cette fiche : 6.3 bar. Aucune autre pression de fonctionnement n’est déduite.",
			"Consommation sous charge : 0.26 m³/min ; à vide : 0.27 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 270 L/min (m³/min × 1 000).",
			"Référence fabricant : 80105021.",
			"Longueur : 145 mm.",
			"Pince de serrage Ø comprise [mm] : 3 mm.",
			"Poids net de la machine : 0.136 kg."
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
				"pferd-80105021-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation sous charge : 0.26 m³/min ; à vide : 0.27 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 270 L/min (m³/min × 1 000).",
			"evidenceIds": [
				"pferd-80105021-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "145 mm",
			"evidenceIds": [
				"pferd-80105021-20260927"
			]
		},
		{
			"label": "Pince de serrage Ø comprise [mm]",
			"value": "3 mm",
			"evidenceIds": [
				"pferd-80105021-20260927"
			]
		},
		{
			"label": "Poids net de la machine",
			"value": "0.136 kg",
			"evidenceIds": [
				"pferd-80105021-20260927"
			]
		},
		{
			"label": "Puissance",
			"value": "110 Watt",
			"evidenceIds": [
				"pferd-80105021-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "80000 t/min",
			"evidenceIds": [
				"pferd-80105021-20260927"
			]
		},
		{
			"label": "Échappement d'air",
			"value": "Arrière",
			"evidenceIds": [
				"pferd-80105021-20260927"
			]
		},
		{
			"label": "ø intérieur flexible d'alimentation",
			"value": "4.8 mm",
			"evidenceIds": [
				"pferd-80105021-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "pferd-80105021-20260927",
			"sourceUrl": "https://fr.pferd.com/fr/meuleuse-droite-pneumatique-pgas-2800-e?a%5Bthrottle-type-tds%5D=Lime+pour+tour&a%5Bpferd-type-tds%5D=PGAS+2%2F800+E-DV",
			"sourceLabel": "PFERD TOOLS, fiche technique PGAS 2/800 E-DV, réf. 80105021",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation sous charge : 0.26 m³/min ; à vide : 0.27 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 270 L/min (m³/min × 1 000)."
		}
	],
	"fieldSources": {
		"mpn": [
			"pferd-80105021-20260927"
		],
		"workingPressureBar": [
			"pferd-80105021-20260927"
		],
		"airflowLpm": [
			"pferd-80105021-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 270,
		"typical": 270,
		"max": 270
	}
};

export default product;
