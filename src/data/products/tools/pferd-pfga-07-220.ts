import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pferd-pfga-07-220",
	"slug": "pferd-pfga-07-220",
	"brand": "PFERD",
	"model": "PFGA 07/220",
	"mpn": "80600200",
	"categoryId": "lime-alternative",
	"category": "lime-alternative",
	"label": "PFERD PFGA 07/220",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 4,
		"typical": 4,
		"max": 4
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/pferd-pfga-07-220-20261106.svg",
		"alt": "Repères techniques PFERD PFGA 07/220, référence 80600200",
		"sourceUrl": "https://fr.pferd.com/fr/appareil-a-limer-pneumatique-pfga-07220",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "PFERD PFGA 07/220, référence 80600200. Le dimensionnement utilise 50 L/min à 4 bar, selon les régimes publiés par le fabricant. Longueur : 220 mm. Poids net de la machine : 0.18 kg. Échappement d'air : Arrière.",
		"verifiedFacts": [
			"Pression de service publiée sur cette fiche : 4 bar. Aucune autre pression de fonctionnement n’est déduite.",
			"Consommation sous charge : 0.03 m³/min ; à vide : 0.05 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 50 L/min (m³/min × 1 000).",
			"Référence fabricant : 80600200.",
			"Longueur : 220 mm.",
			"Poids net de la machine : 0.18 kg.",
			"Échappement d'air : Arrière."
		],
		"limitations": [
			"Caractéristiques déclarées par le constructeur ; aucune mesure physique réalisée par CompatAir.",
			"La présence au catalogue fabricant ne prouve ni le stock d’un distributeur, ni un volume de ventes.",
			"La valeur la plus élevée à vide ou en charge couvre les deux régimes documentés ; aucune moyenne de cycle n’est substituée à ces valeurs.",
			"La pression de mesure de la consommation publiée reste à documenter. Les valeurs et leur régime sont conservés dans les spécifications, hors calcul de compatibilité."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de service publiée sur cette fiche : 4 bar. Aucune autre pression de fonctionnement n’est déduite.",
			"evidenceIds": [
				"pferd-80600200-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation sous charge : 0.03 m³/min ; à vide : 0.05 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 50 L/min (m³/min × 1 000).",
			"evidenceIds": [
				"pferd-80600200-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "220 mm",
			"evidenceIds": [
				"pferd-80600200-20260927"
			]
		},
		{
			"label": "Poids net de la machine",
			"value": "0.18 kg",
			"evidenceIds": [
				"pferd-80600200-20260927"
			]
		},
		{
			"label": "Échappement d'air",
			"value": "Arrière",
			"evidenceIds": [
				"pferd-80600200-20260927"
			]
		},
		{
			"label": "ø intérieur flexible d'alimentation",
			"value": "4 mm",
			"evidenceIds": [
				"pferd-80600200-20260927"
			]
		},
		{
			"label": "Consommation publiée, hors dimensionnement",
			"value": "50 L/min ; La pression de mesure de la consommation publiée reste à documenter. Les valeurs et leur régime sont conservés dans les spécifications, hors calcul de compatibilité.",
			"evidenceIds": [
				"review:2026-11-06-followup:pferd-pfga-07-220:1"
			]
		}
	],
	"evidence": [
		{
			"id": "pferd-80600200-20260927",
			"sourceUrl": "https://fr.pferd.com/fr/appareil-a-limer-pneumatique-pfga-07220",
			"sourceLabel": "PFERD TOOLS, fiche technique PFGA 07/220, réf. 80600200",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation sous charge : 0.03 m³/min ; à vide : 0.05 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 50 L/min (m³/min × 1 000)."
		},
		{
			"id": "review:2026-11-06-followup:pferd-pfga-07-220:1",
			"sourceUrl": "https://fr.pferd.com/fr/appareil-a-limer-pneumatique-pfga-07220",
			"sourceLabel": "PFERD, revue documentaire du 6 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Fiche 80600200 : course 0,7 mm, 22000 courses/min, 0,18 kg, charge 0,03 m³/min et vide 0,05. Les 50 L/min à vide ne dimensionnent pas la charge ; service 4 bar conservé sans en faire le point de mesure du débit. SHA-256 du document complet : 2c1833b535a8a082dd6dce117504329b1c242098a30dd3af0dbf1bc530656dce."
		}
	],
	"fieldSources": {
		"mpn": [
			"pferd-80600200-20260927"
		],
		"workingPressureBar": [
			"pferd-80600200-20260927"
		],
		"demandExplanation": [
			"review:2026-11-06-followup:pferd-pfga-07-220:1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La pression de mesure de la consommation publiée reste à documenter. Les valeurs et leur régime sont conservés dans les spécifications, hors calcul de compatibilité."
};

export default product;
