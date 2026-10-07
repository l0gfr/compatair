import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pferd-pba-4-160-hv",
	"slug": "pferd-pba-4-160-hv",
	"brand": "PFERD",
	"model": "PBA 4/160 HV",
	"mpn": "80705011",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "PFERD PBA 4/160 HV",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/pferd-pba-4-160-hv.webp",
		"alt": "Repères techniques PFERD PBA 4/160 HV, référence 80705011",
		"sourceUrl": "https://fr.pferd.com/fr/ponceuse-a-bande-pneumatique-pba-4160-hv",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "PFERD PBA 4/160 HV, référence 80705011. Le dimensionnement utilise 600 L/min à 6,3 bar, selon les régimes publiés par le fabricant. Longueur : 460 mm. Poids net de la machine : 1.286 kg. Puissance délivrée : 370 Watt.",
		"verifiedFacts": [
			"Pression de service publiée sur cette fiche : 6.3 bar. Aucune autre pression de fonctionnement n’est déduite.",
			"Consommation sous charge : 0.6 m³/min ; à vide : 0.55 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 600 L/min (m³/min × 1 000).",
			"Référence fabricant : 80705011.",
			"Longueur : 460 mm.",
			"Poids net de la machine : 1.286 kg.",
			"Puissance délivrée : 370 Watt."
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
				"pferd-80705011-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation sous charge : 0.6 m³/min ; à vide : 0.55 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 600 L/min (m³/min × 1 000).",
			"evidenceIds": [
				"pferd-80705011-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "460 mm",
			"evidenceIds": [
				"pferd-80705011-20260927"
			]
		},
		{
			"label": "Poids net de la machine",
			"value": "1.286 kg",
			"evidenceIds": [
				"pferd-80705011-20260927"
			]
		},
		{
			"label": "Puissance délivrée",
			"value": "370 Watt",
			"evidenceIds": [
				"pferd-80705011-20260927"
			]
		},
		{
			"label": "Échappement d'air",
			"value": "Arrière",
			"evidenceIds": [
				"pferd-80705011-20260927"
			]
		},
		{
			"label": "ø intérieur flexible d'alimentation",
			"value": "8 mm",
			"evidenceIds": [
				"pferd-80705011-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "pferd-80705011-20260927",
			"sourceUrl": "https://fr.pferd.com/fr/ponceuse-a-bande-pneumatique-pba-4160-hv",
			"sourceLabel": "PFERD TOOLS, fiche technique PBA 4/160 HV, réf. 80705011",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation sous charge : 0.6 m³/min ; à vide : 0.55 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 600 L/min (m³/min × 1 000)."
		}
	],
	"fieldSources": {
		"mpn": [
			"pferd-80705011-20260927"
		],
		"workingPressureBar": [
			"pferd-80705011-20260927"
		],
		"airflowLpm": [
			"pferd-80705011-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 600,
		"typical": 600,
		"max": 600
	}
};

export default product;
