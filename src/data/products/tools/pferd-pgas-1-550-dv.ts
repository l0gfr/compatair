import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pferd-pgas-1-550-dv",
	"slug": "pferd-pgas-1-550-dv",
	"brand": "PFERD",
	"model": "PGAS 1/550 DV",
	"mpn": "80105100",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "PFERD PGAS 1/550 DV",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/pferd-pgas-1-550-dv.webp",
		"alt": "Repères techniques PFERD PGAS 1/550 DV, référence 80105100",
		"sourceUrl": "https://fr.pferd.com/fr/meuleuse-droite-pneumatique-pgas-1550-dv",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "PFERD PGAS 1/550 DV, référence 80105100. Le dimensionnement utilise 250 L/min à 6,3 bar, selon les régimes publiés par le fabricant. Longueur : 153 mm. Pince de serrage Ø comprise [mm] : 3 mm. Poids net de la machine : 0.091 kg.",
		"verifiedFacts": [
			"Pression de service publiée sur cette fiche : 6.3 bar. Aucune autre pression de fonctionnement n’est déduite.",
			"Consommation sous charge : 0.12 m³/min ; à vide : 0.25 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 250 L/min (m³/min × 1 000).",
			"Référence fabricant : 80105100.",
			"Longueur : 153 mm.",
			"Pince de serrage Ø comprise [mm] : 3 mm.",
			"Poids net de la machine : 0.091 kg."
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
				"pferd-80105100-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation sous charge : 0.12 m³/min ; à vide : 0.25 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 250 L/min (m³/min × 1 000).",
			"evidenceIds": [
				"pferd-80105100-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "153 mm",
			"evidenceIds": [
				"pferd-80105100-20260927"
			]
		},
		{
			"label": "Pince de serrage Ø comprise [mm]",
			"value": "3 mm",
			"evidenceIds": [
				"pferd-80105100-20260927"
			]
		},
		{
			"label": "Poids net de la machine",
			"value": "0.091 kg",
			"evidenceIds": [
				"pferd-80105100-20260927"
			]
		},
		{
			"label": "Puissance",
			"value": "100 Watt",
			"evidenceIds": [
				"pferd-80105100-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "55000 t/min",
			"evidenceIds": [
				"pferd-80105100-20260927"
			]
		},
		{
			"label": "Échappement d'air",
			"value": "Arrière",
			"evidenceIds": [
				"pferd-80105100-20260927"
			]
		},
		{
			"label": "ø intérieur flexible d'alimentation",
			"value": "4.8 mm",
			"evidenceIds": [
				"pferd-80105100-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "pferd-80105100-20260927",
			"sourceUrl": "https://fr.pferd.com/fr/meuleuse-droite-pneumatique-pgas-1550-dv",
			"sourceLabel": "PFERD TOOLS, fiche technique PGAS 1/550 DV, réf. 80105100",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation sous charge : 0.12 m³/min ; à vide : 0.25 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 250 L/min (m³/min × 1 000)."
		}
	],
	"fieldSources": {
		"mpn": [
			"pferd-80105100-20260927"
		],
		"workingPressureBar": [
			"pferd-80105100-20260927"
		],
		"airflowLpm": [
			"pferd-80105100-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 250,
		"typical": 250,
		"max": 250
	}
};

export default product;
