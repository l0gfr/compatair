import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pferd-mst-32-dv-f",
	"slug": "pferd-mst-32-dv-f",
	"brand": "PFERD",
	"model": "MST 32 DV F",
	"mpn": "80600130",
	"categoryId": "graveur",
	"category": "graveur",
	"label": "PFERD MST 32 DV F",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/pferd-mst-32-dv-f.webp",
		"alt": "Repères techniques PFERD MST 32 DV F, référence 80600130",
		"sourceUrl": "https://fr.pferd.com/fr/crayon-de-marquage-pneumatique-mst-32-dv?a%5Bwidth-needle-tds%5D=F+%28fine%29",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "PFERD MST 32 DV F. La fiche PFERD distingue la consommation à vide de la consommation sous charge. Le débit actuellement retenu correspond à la colonne à vide et conserve cette qualification ; la pression est indiquée comme pression de service. Référence fabricant : 80600130. Longueur : 162 mm. Poids net de la machine : 0.152 kg. Échappement d'air : Avant.",
		"verifiedFacts": [
			"Pression de service publiée sur cette fiche : 6.3 bar. Aucune autre pression de fonctionnement n’est déduite.",
			"Consommation sous charge : 0.02 m³/min ; à vide : 0.03 m³/min.",
			"Référence fabricant : 80600130.",
			"Longueur : 162 mm.",
			"Poids net de la machine : 0.152 kg.",
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
				"pferd-80600130-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation sous charge : 0.02 m³/min ; à vide : 0.03 m³/min.",
			"evidenceIds": [
				"pferd-mst-32-dv-f-reserved-20261031-1"
			]
		},
		{
			"label": "Longueur",
			"value": "162 mm",
			"evidenceIds": [
				"pferd-80600130-20260927"
			]
		},
		{
			"label": "Poids net de la machine",
			"value": "0.152 kg",
			"evidenceIds": [
				"pferd-80600130-20260927"
			]
		},
		{
			"label": "Échappement d'air",
			"value": "Avant",
			"evidenceIds": [
				"pferd-80600130-20260927"
			]
		},
		{
			"label": "ø intérieur flexible d'alimentation",
			"value": "4 mm",
			"evidenceIds": [
				"pferd-80600130-20260927"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":30,\"typical\":30,\"max\":30},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"pferd-80600130-20260927",
				"pferd-mst-32-dv-f-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "pferd-80600130-20260927",
			"sourceUrl": "https://fr.pferd.com/fr/crayon-de-marquage-pneumatique-mst-32-dv?a%5Bwidth-needle-tds%5D=F+%28fine%29",
			"sourceLabel": "PFERD TOOLS, fiche technique MST 32 DV F, réf. 80600130",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation sous charge : 0.02 m³/min ; à vide : 0.03 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 30 L/min (m³/min × 1 000)."
		},
		{
			"id": "pferd-mst-32-dv-f-reserved-20261031-1",
			"sourceUrl": "https://fr.pferd.com/fr/crayon-de-marquage-pneumatique-mst-32-dv?a%5Bwidth-needle-tds%5D=F+%28fine%29",
			"sourceLabel": "PFERD MST 32 DV F : relecture documentaire du 31 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 26b579eeab169777d7bd79094c8ba45585129fa50d1f6fc93db6f0c4690e25ae. La fiche PFERD distingue la consommation à vide de la consommation sous charge. Le débit actuellement retenu correspond à la colonne à vide et conserve cette qualification ; la pression est indiquée comme pression de service."
		}
	],
	"fieldSources": {
		"mpn": [
			"pferd-80600130-20260927"
		],
		"workingPressureBar": [
			"pferd-80600130-20260927"
		],
		"airflowLpm": [
			"pferd-80600130-20260927"
		],
		"airflowBasis": [
			"pferd-mst-32-dv-f-reserved-20261031-1"
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
