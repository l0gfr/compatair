import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pferd-mst-32-dv-m",
	"slug": "pferd-mst-32-dv-m",
	"brand": "PFERD",
	"model": "MST 32 DV M",
	"mpn": "80600140",
	"categoryId": "graveur",
	"category": "graveur",
	"label": "PFERD MST 32 DV M",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/pferd-mst-32-dv-m-20261106.svg",
		"alt": "Repères techniques PFERD MST 32 DV M, référence 80600140",
		"sourceUrl": "https://fr.pferd.com/fr/crayon-de-marquage-pneumatique-mst-32-dv?a%5Bwidth-needle-tds%5D=M+%28moyenne%29",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "PFERD MST 32 DV M, référence 80600140. Le dimensionnement utilise 30 L/min à 6,3 bar, selon les régimes publiés par le fabricant. Longueur : 162 mm. Poids net de la machine : 0.152 kg. Échappement d'air : Avant.",
		"verifiedFacts": [
			"Pression de service publiée sur cette fiche : 6.3 bar. Aucune autre pression de fonctionnement n’est déduite.",
			"Consommation sous charge : 0.02 m³/min ; à vide : 0.03 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 30 L/min (m³/min × 1 000).",
			"Référence fabricant : 80600140.",
			"Longueur : 162 mm.",
			"Poids net de la machine : 0.152 kg.",
			"Échappement d'air : Avant."
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
			"value": "Pression de service publiée sur cette fiche : 6.3 bar. Aucune autre pression de fonctionnement n’est déduite.",
			"evidenceIds": [
				"pferd-80600140-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation sous charge : 0.02 m³/min ; à vide : 0.03 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 30 L/min (m³/min × 1 000).",
			"evidenceIds": [
				"pferd-80600140-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "162 mm",
			"evidenceIds": [
				"pferd-80600140-20260927"
			]
		},
		{
			"label": "Poids net de la machine",
			"value": "0.152 kg",
			"evidenceIds": [
				"pferd-80600140-20260927"
			]
		},
		{
			"label": "Échappement d'air",
			"value": "Avant",
			"evidenceIds": [
				"pferd-80600140-20260927"
			]
		},
		{
			"label": "ø intérieur flexible d'alimentation",
			"value": "4 mm",
			"evidenceIds": [
				"pferd-80600140-20260927"
			]
		},
		{
			"label": "Consommation publiée, hors dimensionnement",
			"value": "30 L/min ; La pression de mesure de la consommation publiée reste à documenter. Les valeurs et leur régime sont conservés dans les spécifications, hors calcul de compatibilité.",
			"evidenceIds": [
				"review:2026-11-06-followup:pferd-mst-32-dv-m:1"
			]
		}
	],
	"evidence": [
		{
			"id": "pferd-80600140-20260927",
			"sourceUrl": "https://fr.pferd.com/fr/crayon-de-marquage-pneumatique-mst-32-dv?a%5Bwidth-needle-tds%5D=M+%28moyenne%29",
			"sourceLabel": "PFERD TOOLS, fiche technique MST 32 DV M, réf. 80600140",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation sous charge : 0.02 m³/min ; à vide : 0.03 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 30 L/min (m³/min × 1 000)."
		},
		{
			"id": "review:2026-11-06-followup:pferd-mst-32-dv-m:1",
			"sourceUrl": "https://fr.pferd.com/fr/crayon-de-marquage-pneumatique-mst-32-dv?a%5Bwidth-needle-tds%5D=M+%28moyenne%29",
			"sourceLabel": "PFERD, revue documentaire du 6 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Fiche 80600140 : charge 0,02 m³/min et vide 0,03, pointe M et 32000 courses/min. Le moteur utilise le débit à vide de 30 L/min comme besoin en charge. Conserver les deux valeurs, exclure le débit à vide du calcul ; la pression de service 6,3 bar ne prouve pas leur point de mesure. SHA-256 du document complet : 8e423d6100e7ed0f6ffdbe362be63a510f23149cd2d28120568be728ec2ee25d."
		}
	],
	"fieldSources": {
		"mpn": [
			"pferd-80600140-20260927"
		],
		"workingPressureBar": [
			"pferd-80600140-20260927"
		],
		"demandExplanation": [
			"review:2026-11-06-followup:pferd-mst-32-dv-m:1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La pression de mesure de la consommation publiée reste à documenter. Les valeurs et leur régime sont conservés dans les spécifications, hors calcul de compatibilité."
};

export default product;
