import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pferd-pwa-1-5-v-hv",
	"slug": "pferd-pwa-1-5-v-hv",
	"brand": "PFERD",
	"model": "PWA 1/5 V-HV",
	"mpn": "80700493",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "PFERD PWA 1/5 V-HV",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/pferd-pwa-1-5-v-hv.webp",
		"alt": "Repères techniques PFERD PWA 1/5 V-HV, référence 80700493",
		"sourceUrl": "https://fr.pferd.com/fr/meuleuse-dangle-pneumatique-pwa-15-v-hv",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "PFERD PWA 1/5 V-HV, référence 80700493. Le dimensionnement utilise 350 L/min à 6,3 bar, selon les régimes publiés par le fabricant. Longueur : 340 mm. Poids net de la machine : 0.85 kg. Puissance : 65 Watt.",
		"verifiedFacts": [
			"Pression de service publiée sur cette fiche : 6.3 bar. Aucune autre pression de fonctionnement n’est déduite.",
			"Consommation sous charge : 0.3 m³/min ; à vide : 0.35 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 350 L/min (m³/min × 1 000).",
			"Référence fabricant : 80700493.",
			"Longueur : 340 mm.",
			"Poids net de la machine : 0.85 kg.",
			"Puissance : 65 Watt."
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
				"pferd-80700493-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation sous charge : 0.3 m³/min ; à vide : 0.35 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 350 L/min (m³/min × 1 000).",
			"evidenceIds": [
				"pferd-80700493-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "340 mm",
			"evidenceIds": [
				"pferd-80700493-20260927"
			]
		},
		{
			"label": "Poids net de la machine",
			"value": "0.85 kg",
			"evidenceIds": [
				"pferd-80700493-20260927"
			]
		},
		{
			"label": "Puissance",
			"value": "65 Watt",
			"evidenceIds": [
				"pferd-80700493-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "500 t/min",
			"evidenceIds": [
				"pferd-80700493-20260927"
			]
		},
		{
			"label": "Échappement d'air",
			"value": "Arrière",
			"evidenceIds": [
				"pferd-80700493-20260927"
			]
		},
		{
			"label": "ø intérieur flexible d'alimentation",
			"value": "6 mm",
			"evidenceIds": [
				"pferd-80700493-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "pferd-80700493-20260927",
			"sourceUrl": "https://fr.pferd.com/fr/meuleuse-dangle-pneumatique-pwa-15-v-hv",
			"sourceLabel": "PFERD TOOLS, fiche technique PWA 1/5 V-HV, réf. 80700493",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation sous charge : 0.3 m³/min ; à vide : 0.35 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 350 L/min (m³/min × 1 000)."
		}
	],
	"fieldSources": {
		"mpn": [
			"pferd-80700493-20260927"
		],
		"workingPressureBar": [
			"pferd-80700493-20260927"
		],
		"airflowLpm": [
			"pferd-80700493-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 350,
		"typical": 350,
		"max": 350
	}
};

export default product;
