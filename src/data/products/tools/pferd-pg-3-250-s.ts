import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pferd-pg-3-250-s",
	"slug": "pferd-pg-3-250-s",
	"brand": "PFERD",
	"model": "PG 3/250 S",
	"mpn": "80107060",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "PFERD PG 3/250 S",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/pferd-pg-3-250-s.webp",
		"alt": "Repères techniques PFERD PG 3/250 S, référence 80107060",
		"sourceUrl": "https://fr.pferd.com/fr/meuleuse-droite-pneumatique-pg-3250",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "PFERD PG 3/250 S. La fiche PFERD publie 0,49 m³/min sous charge et 0,21 m³/min à vide. Les 6,3 bar sont une pression de service ; la pression de mesure du débit en charge reste à documenter. Référence fabricant : 80107060. Longueur : 162 mm. Pince de serrage Ø comprise [mm] : 6 mm. Poids net de la machine : 0.37 kg.",
		"verifiedFacts": [
			"Pression de service publiée sur cette fiche : 6.3 bar. Aucune autre pression de fonctionnement n’est déduite.",
			"Référence fabricant : 80107060.",
			"Longueur : 162 mm.",
			"Pince de serrage Ø comprise [mm] : 6 mm.",
			"Poids net de la machine : 0.37 kg.",
			"Valeur documentaire conservée : 490 L/min. La fiche PFERD publie 0,49 m³/min sous charge et 0,21 m³/min à vide. Les 6,3 bar sont une pression de service ; la pression de mesure du débit en charge reste à documenter."
		],
		"limitations": [
			"Caractéristiques déclarées par le constructeur ; aucune mesure physique réalisée par CompatAir.",
			"La présence au catalogue fabricant ne prouve ni le stock d’un distributeur, ni un volume de ventes.",
			"La fiche PFERD publie 0,49 m³/min sous charge et 0,21 m³/min à vide. Les 6,3 bar sont une pression de service ; la pression de mesure du débit en charge reste à documenter."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de service publiée sur cette fiche : 6.3 bar. Aucune autre pression de fonctionnement n’est déduite.",
			"evidenceIds": [
				"pferd-80107060-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation sous charge : 0.49 m³/min ; à vide : 0.21 m³/min. Pression de mesure à confirmer ; valeurs conservées hors calcul.",
			"evidenceIds": [
				"pferd-pg-3-250-s-reserved-20261031-1"
			]
		},
		{
			"label": "Longueur",
			"value": "162 mm",
			"evidenceIds": [
				"pferd-80107060-20260927"
			]
		},
		{
			"label": "Pince de serrage Ø comprise [mm]",
			"value": "6 mm",
			"evidenceIds": [
				"pferd-80107060-20260927"
			]
		},
		{
			"label": "Poids net de la machine",
			"value": "0.37 kg",
			"evidenceIds": [
				"pferd-80107060-20260927"
			]
		},
		{
			"label": "Puissance",
			"value": "225 Watt",
			"evidenceIds": [
				"pferd-80107060-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "25000 t/min",
			"evidenceIds": [
				"pferd-80107060-20260927"
			]
		},
		{
			"label": "Échappement d'air",
			"value": "Avant",
			"evidenceIds": [
				"pferd-80107060-20260927"
			]
		},
		{
			"label": "ø intérieur flexible d'alimentation",
			"value": "8.5 mm",
			"evidenceIds": [
				"pferd-80107060-20260927"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":490,\"typical\":490,\"max\":490},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"pferd-80107060-20260927",
				"pferd-pg-3-250-s-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "pferd-80107060-20260927",
			"sourceUrl": "https://fr.pferd.com/fr/meuleuse-droite-pneumatique-pg-3250",
			"sourceLabel": "PFERD TOOLS, fiche technique PG 3/250 S, réf. 80107060",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation sous charge : 0.49 m³/min ; à vide : 0.21 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 490 L/min (m³/min × 1 000)."
		},
		{
			"id": "pferd-pg-3-250-s-reserved-20261031-1",
			"sourceUrl": "https://fr.pferd.com/fr/meuleuse-droite-pneumatique-pg-3250",
			"sourceLabel": "PFERD PG 3/250 S : relecture documentaire du 31 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 a23485bc41a41db7bc9afa36a4ae9811744e07eeb0a845e164c08e31d1d0bf2f. La fiche PFERD publie 0,49 m³/min sous charge et 0,21 m³/min à vide. Les 6,3 bar sont une pression de service ; la pression de mesure du débit en charge reste à documenter."
		}
	],
	"fieldSources": {
		"mpn": [
			"pferd-80107060-20260927"
		],
		"workingPressureBar": [
			"pferd-80107060-20260927"
		],
		"demandModel": [
			"pferd-pg-3-250-s-reserved-20261031-1"
		],
		"demandExplanation": [
			"pferd-pg-3-250-s-reserved-20261031-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La fiche PFERD publie 0,49 m³/min sous charge et 0,21 m³/min à vide. Les 6,3 bar sont une pression de service ; la pression de mesure du débit en charge reste à documenter."
};

export default product;
