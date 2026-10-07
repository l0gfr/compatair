import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pferd-pg-8-100-v-hv",
	"slug": "pferd-pg-8-100-v-hv",
	"brand": "PFERD",
	"model": "PG 8/100 V-HV",
	"mpn": "80107003",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "PFERD PG 8/100 V-HV",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/pferd-pg-8-100-v-hv.webp",
		"alt": "Repères techniques PFERD PG 8/100 V-HV, référence 80107003",
		"sourceUrl": "https://fr.pferd.com/fr/meuleuse-droite-pneumatique-pg-8100?a%5Btype-tds%5D=avec+prolongateur&a%5Bthrottle-type-tds%5D=Levier&a%5Bpferd-type-tds%5D=PG+8%2F100+V-HV",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "PFERD PG 8/100 V-HV, référence 80107003. Le dimensionnement utilise 850 L/min à 6,3 bar, selon les régimes publiés par le fabricant. Longueur : 310 mm. Pince de serrage Ø comprise [mm] : 6 mm. Poids net de la machine : 1.4 kg.",
		"verifiedFacts": [
			"Pression de service publiée sur cette fiche : 6.3 bar. Aucune autre pression de fonctionnement n’est déduite.",
			"Consommation sous charge : 0.85 m³/min ; à vide : 0.17 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 850 L/min (m³/min × 1 000).",
			"Référence fabricant : 80107003.",
			"Longueur : 310 mm.",
			"Pince de serrage Ø comprise [mm] : 6 mm.",
			"Poids net de la machine : 1.4 kg."
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
				"pferd-80107003-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation sous charge : 0.85 m³/min ; à vide : 0.17 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 850 L/min (m³/min × 1 000).",
			"evidenceIds": [
				"pferd-80107003-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "310 mm",
			"evidenceIds": [
				"pferd-80107003-20260927"
			]
		},
		{
			"label": "Pince de serrage Ø comprise [mm]",
			"value": "6 mm",
			"evidenceIds": [
				"pferd-80107003-20260927"
			]
		},
		{
			"label": "Poids net de la machine",
			"value": "1.4 kg",
			"evidenceIds": [
				"pferd-80107003-20260927"
			]
		},
		{
			"label": "Puissance",
			"value": "600 Watt",
			"evidenceIds": [
				"pferd-80107003-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "10000 t/min",
			"evidenceIds": [
				"pferd-80107003-20260927"
			]
		},
		{
			"label": "Échappement d'air",
			"value": "Avant",
			"evidenceIds": [
				"pferd-80107003-20260927"
			]
		},
		{
			"label": "ø intérieur flexible d'alimentation",
			"value": "8.5 mm",
			"evidenceIds": [
				"pferd-80107003-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "pferd-80107003-20260927",
			"sourceUrl": "https://fr.pferd.com/fr/meuleuse-droite-pneumatique-pg-8100?a%5Btype-tds%5D=avec+prolongateur&a%5Bthrottle-type-tds%5D=Levier&a%5Bpferd-type-tds%5D=PG+8%2F100+V-HV",
			"sourceLabel": "PFERD TOOLS, fiche technique PG 8/100 V-HV, réf. 80107003",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation sous charge : 0.85 m³/min ; à vide : 0.17 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 850 L/min (m³/min × 1 000)."
		}
	],
	"fieldSources": {
		"mpn": [
			"pferd-80107003-20260927"
		],
		"workingPressureBar": [
			"pferd-80107003-20260927"
		],
		"airflowLpm": [
			"pferd-80107003-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 850,
		"typical": 850,
		"max": 850
	}
};

export default product;
