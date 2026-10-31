import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pferd-pba-2-200-hv-ova",
	"slug": "pferd-pba-2-200-hv-ova",
	"brand": "PFERD",
	"model": "PBA 2/200 HV oVA",
	"mpn": "80705052",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "PFERD PBA 2/200 HV oVA",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/pferd-pba-2-200-hv-ova.webp",
		"alt": "Repères techniques PFERD PBA 2/200 HV oVA, référence 80705052",
		"sourceUrl": "https://fr.pferd.com/fr/ponceuse-a-bande-pneumatique-pba-2200-hv-ova",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "PFERD PBA 2/200 HV oVA. La fiche PFERD distingue la consommation à vide de la consommation sous charge. Le débit actuellement retenu correspond à la colonne à vide et conserve cette qualification ; la pression est indiquée comme pression de service. Référence fabricant : 80705052. Longueur : 210 mm. Poids net de la machine : 0.604 kg. Puissance délivrée : 230 Watt.",
		"verifiedFacts": [
			"Pression de service publiée sur cette fiche : 6.3 bar. Aucune autre pression de fonctionnement n’est déduite.",
			"Consommation sous charge : 0.45 m³/min ; à vide : 0.55 m³/min.",
			"Référence fabricant : 80705052.",
			"Longueur : 210 mm.",
			"Poids net de la machine : 0.604 kg.",
			"Puissance délivrée : 230 Watt.",
			"Consommation à vide publiée : 550 L/min."
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
				"pferd-80705052-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation sous charge : 0.45 m³/min ; à vide : 0.55 m³/min.",
			"evidenceIds": [
				"pferd-pba-2-200-hv-ova-reserved-20261031-1"
			]
		},
		{
			"label": "Longueur",
			"value": "210 mm",
			"evidenceIds": [
				"pferd-80705052-20260927"
			]
		},
		{
			"label": "Poids net de la machine",
			"value": "0.604 kg",
			"evidenceIds": [
				"pferd-80705052-20260927"
			]
		},
		{
			"label": "Puissance délivrée",
			"value": "230 Watt",
			"evidenceIds": [
				"pferd-80705052-20260927"
			]
		},
		{
			"label": "Échappement d'air",
			"value": "Arrière",
			"evidenceIds": [
				"pferd-80705052-20260927"
			]
		},
		{
			"label": "ø intérieur flexible d'alimentation",
			"value": "6 mm",
			"evidenceIds": [
				"pferd-80705052-20260927"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":550,\"typical\":550,\"max\":550},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"pferd-80705052-20260927",
				"pferd-pba-2-200-hv-ova-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "pferd-80705052-20260927",
			"sourceUrl": "https://fr.pferd.com/fr/ponceuse-a-bande-pneumatique-pba-2200-hv-ova",
			"sourceLabel": "PFERD TOOLS, fiche technique PBA 2/200 HV oVA, réf. 80705052",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation sous charge : 0.45 m³/min ; à vide : 0.55 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 550 L/min (m³/min × 1 000)."
		},
		{
			"id": "pferd-pba-2-200-hv-ova-reserved-20261031-1",
			"sourceUrl": "https://fr.pferd.com/fr/ponceuse-a-bande-pneumatique-pba-2200-hv-ova",
			"sourceLabel": "PFERD PBA 2/200 HV oVA : relecture documentaire du 31 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 9b9899992bb900430ce7ef5549586d22010c118677bb276982448904f4553ebd. La fiche PFERD distingue la consommation à vide de la consommation sous charge. Le débit actuellement retenu correspond à la colonne à vide et conserve cette qualification ; la pression est indiquée comme pression de service."
		}
	],
	"fieldSources": {
		"mpn": [
			"pferd-80705052-20260927"
		],
		"workingPressureBar": [
			"pferd-80705052-20260927"
		],
		"airflowLpm": [
			"pferd-80705052-20260927"
		],
		"airflowBasis": [
			"pferd-pba-2-200-hv-ova-reserved-20261031-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 550,
		"typical": 550,
		"max": 550
	},
	"airflowBasis": "free-speed"
};

export default product;
