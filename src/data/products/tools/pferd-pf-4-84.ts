import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pferd-pf-4-84",
	"slug": "pferd-pf-4-84",
	"brand": "PFERD",
	"model": "PF 4/84",
	"mpn": "80600210",
	"categoryId": "lime-alternative",
	"category": "lime-alternative",
	"label": "PFERD PF 4/84",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/pferd-pf-4-84.webp",
		"alt": "Repères techniques PFERD PF 4/84, référence 80600210",
		"sourceUrl": "https://fr.pferd.com/fr/appareil-a-limer-pneumatique-pf-484",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "PFERD PF 4/84. La fiche PFERD distingue la consommation à vide de la consommation sous charge. Le débit actuellement retenu correspond à la colonne à vide et conserve cette qualification ; la pression est indiquée comme pression de service. Référence fabricant : 80600210. Longueur : 200 mm. Poids net de la machine : 0.3 kg. Échappement d'air : Avant.",
		"verifiedFacts": [
			"Pression de service publiée sur cette fiche : 6.3 bar. Aucune autre pression de fonctionnement n’est déduite.",
			"Consommation sous charge : 0.03 m³/min ; à vide : 0.03 m³/min.",
			"Référence fabricant : 80600210.",
			"Longueur : 200 mm.",
			"Poids net de la machine : 0.3 kg.",
			"Échappement d'air : Avant.",
			"Consommation à vide publiée : 30 L/min."
		],
		"limitations": [
			"Caractéristiques déclarées par le constructeur ; aucune mesure physique réalisée par CompatAir.",
			"La présence au catalogue fabricant ne prouve ni le stock d’un distributeur, ni un volume de ventes.",
			"La fiche PFERD distingue la consommation à vide de la consommation sous charge. Le débit actuellement retenu correspond à la colonne à vide et conserve cette qualification ; la pression est indiquée comme pression de service."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de service publiée sur cette fiche : 6.3 bar. Aucune autre pression de fonctionnement n’est déduite.",
			"evidenceIds": [
				"pferd-80600210-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation sous charge : 0.03 m³/min ; à vide : 0.03 m³/min.",
			"evidenceIds": [
				"pferd-pf-4-84-reserved-20261031-1"
			]
		},
		{
			"label": "Longueur",
			"value": "200 mm",
			"evidenceIds": [
				"pferd-80600210-20260927"
			]
		},
		{
			"label": "Poids net de la machine",
			"value": "0.3 kg",
			"evidenceIds": [
				"pferd-80600210-20260927"
			]
		},
		{
			"label": "Échappement d'air",
			"value": "Avant",
			"evidenceIds": [
				"pferd-80600210-20260927"
			]
		},
		{
			"label": "ø intérieur flexible d'alimentation",
			"value": "3 mm",
			"evidenceIds": [
				"pferd-80600210-20260927"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":30,\"typical\":30,\"max\":30},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"pferd-80600210-20260927",
				"pferd-pf-4-84-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "pferd-80600210-20260927",
			"sourceUrl": "https://fr.pferd.com/fr/appareil-a-limer-pneumatique-pf-484",
			"sourceLabel": "PFERD TOOLS, fiche technique PF 4/84, réf. 80600210",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation sous charge : 0.03 m³/min ; à vide : 0.03 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 30 L/min (m³/min × 1 000)."
		},
		{
			"id": "pferd-pf-4-84-reserved-20261031-1",
			"sourceUrl": "https://fr.pferd.com/fr/appareil-a-limer-pneumatique-pf-484",
			"sourceLabel": "PFERD PF 4/84 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 ff0e5e8411117c272827c10be27ab51a859bff1605dd1c1c7aef50720feab136. La fiche PFERD distingue la consommation à vide de la consommation sous charge. Le débit actuellement retenu correspond à la colonne à vide et conserve cette qualification ; la pression est indiquée comme pression de service."
		}
	],
	"fieldSources": {
		"mpn": [
			"pferd-80600210-20260927"
		],
		"workingPressureBar": [
			"pferd-80600210-20260927"
		],
		"airflowLpm": [
			"pferd-80600210-20260927"
		],
		"airflowBasis": [
			"pferd-pf-4-84-reserved-20261031-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 30,
		"typical": 30,
		"max": 30
	},
	"airflowBasis": "free-speed"
};

export default product;
