import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pferd-pgs-3-300-hv",
	"slug": "pferd-pgs-3-300-hv",
	"brand": "PFERD",
	"model": "PGS 3/300 HV",
	"mpn": "80106029",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "PFERD PGS 3/300 HV",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/pferd-pgs-3-300-hv.webp",
		"alt": "Repères techniques PFERD PGS 3/300 HV, référence 80106029",
		"sourceUrl": "https://fr.pferd.com/fr/meuleuse-droite-pneumatique-pgs-3300?a%5Bthrottle-type-tds%5D=Levier&a%5Bpferd-type-tds%5D=PGS+3%2F300+HV",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "PFERD PGS 3/300 HV, référence 80106029. Le dimensionnement utilise 600 L/min à 6,3 bar, selon les régimes publiés par le fabricant. Longueur : 160 mm. Pince de serrage Ø comprise [mm] : 6 mm. Poids net de la machine : 0.384 kg.",
		"verifiedFacts": [
			"Pression de service publiée sur cette fiche : 6.3 bar. Aucune autre pression de fonctionnement n’est déduite.",
			"Consommation sous charge : 0.5 m³/min ; à vide : 0.6 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 600 L/min (m³/min × 1 000).",
			"Référence fabricant : 80106029.",
			"Longueur : 160 mm.",
			"Pince de serrage Ø comprise [mm] : 6 mm.",
			"Poids net de la machine : 0.384 kg."
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
				"pferd-80106029-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation sous charge : 0.5 m³/min ; à vide : 0.6 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 600 L/min (m³/min × 1 000).",
			"evidenceIds": [
				"pferd-80106029-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "160 mm",
			"evidenceIds": [
				"pferd-80106029-20260927"
			]
		},
		{
			"label": "Pince de serrage Ø comprise [mm]",
			"value": "6 mm",
			"evidenceIds": [
				"pferd-80106029-20260927"
			]
		},
		{
			"label": "Poids net de la machine",
			"value": "0.384 kg",
			"evidenceIds": [
				"pferd-80106029-20260927"
			]
		},
		{
			"label": "Puissance",
			"value": "240 Watt",
			"evidenceIds": [
				"pferd-80106029-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "30000 t/min",
			"evidenceIds": [
				"pferd-80106029-20260927"
			]
		},
		{
			"label": "Échappement d'air",
			"value": "Avant",
			"evidenceIds": [
				"pferd-80106029-20260927"
			]
		},
		{
			"label": "ø intérieur flexible d'alimentation",
			"value": "8 mm",
			"evidenceIds": [
				"pferd-80106029-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "pferd-80106029-20260927",
			"sourceUrl": "https://fr.pferd.com/fr/meuleuse-droite-pneumatique-pgs-3300?a%5Bthrottle-type-tds%5D=Levier&a%5Bpferd-type-tds%5D=PGS+3%2F300+HV",
			"sourceLabel": "PFERD TOOLS, fiche technique PGS 3/300 HV, réf. 80106029",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation sous charge : 0.5 m³/min ; à vide : 0.6 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 600 L/min (m³/min × 1 000)."
		}
	],
	"fieldSources": {
		"mpn": [
			"pferd-80106029-20260927"
		],
		"workingPressureBar": [
			"pferd-80106029-20260927"
		],
		"airflowLpm": [
			"pferd-80106029-20260927"
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
