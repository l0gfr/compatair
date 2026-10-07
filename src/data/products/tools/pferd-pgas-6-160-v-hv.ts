import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pferd-pgas-6-160-v-hv",
	"slug": "pferd-pgas-6-160-v-hv",
	"brand": "PFERD",
	"model": "PGAS 6/160 V-HV",
	"mpn": "80706071",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "PFERD PGAS 6/160 V-HV",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/pferd-pgas-6-160-v-hv.webp",
		"alt": "Repères techniques PFERD PGAS 6/160 V-HV, référence 80706071",
		"sourceUrl": "https://fr.pferd.com/fr/meuleuse-droite-pneumatique-pgas-6160",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "PFERD PGAS 6/160 V-HV, référence 80706071. Le dimensionnement utilise 710 L/min à 6,3 bar, selon les régimes publiés par le fabricant. Longueur : 380 mm. Pince de serrage Ø comprise [mm] : 6 mm. Poids net de la machine : 1.091 kg.",
		"verifiedFacts": [
			"Pression de service publiée sur cette fiche : 6.3 bar. Aucune autre pression de fonctionnement n’est déduite.",
			"Consommation sous charge : 0.71 m³/min ; à vide : 0.39 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 710 L/min (m³/min × 1 000).",
			"Référence fabricant : 80706071.",
			"Longueur : 380 mm.",
			"Pince de serrage Ø comprise [mm] : 6 mm.",
			"Poids net de la machine : 1.091 kg."
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
				"pferd-80706071-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation sous charge : 0.71 m³/min ; à vide : 0.39 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 710 L/min (m³/min × 1 000).",
			"evidenceIds": [
				"pferd-80706071-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "380 mm",
			"evidenceIds": [
				"pferd-80706071-20260927"
			]
		},
		{
			"label": "Pince de serrage Ø comprise [mm]",
			"value": "6 mm",
			"evidenceIds": [
				"pferd-80706071-20260927"
			]
		},
		{
			"label": "Poids net de la machine",
			"value": "1.091 kg",
			"evidenceIds": [
				"pferd-80706071-20260927"
			]
		},
		{
			"label": "Puissance",
			"value": "650 Watt",
			"evidenceIds": [
				"pferd-80706071-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "16000 t/min",
			"evidenceIds": [
				"pferd-80706071-20260927"
			]
		},
		{
			"label": "Échappement d'air",
			"value": "Arrière",
			"evidenceIds": [
				"pferd-80706071-20260927"
			]
		},
		{
			"label": "ø intérieur flexible d'alimentation",
			"value": "8 mm",
			"evidenceIds": [
				"pferd-80706071-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "pferd-80706071-20260927",
			"sourceUrl": "https://fr.pferd.com/fr/meuleuse-droite-pneumatique-pgas-6160",
			"sourceLabel": "PFERD TOOLS, fiche technique PGAS 6/160 V-HV, réf. 80706071",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation sous charge : 0.71 m³/min ; à vide : 0.39 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 710 L/min (m³/min × 1 000)."
		}
	],
	"fieldSources": {
		"mpn": [
			"pferd-80706071-20260927"
		],
		"workingPressureBar": [
			"pferd-80706071-20260927"
		],
		"airflowLpm": [
			"pferd-80706071-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 710,
		"typical": 710,
		"max": 710
	}
};

export default product;
