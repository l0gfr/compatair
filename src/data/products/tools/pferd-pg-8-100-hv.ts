import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pferd-pg-8-100-hv",
	"slug": "pferd-pg-8-100-hv",
	"brand": "PFERD",
	"model": "PG 8/100 HV",
	"mpn": "80107011",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "PFERD PG 8/100 HV",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/pferd-pg-8-100-hv-20261106.svg",
		"alt": "Repères techniques PFERD PG 8/100 HV, référence 80107011",
		"sourceUrl": "https://fr.pferd.com/fr/meuleuse-droite-pneumatique-pg-8100?a%5Btype-tds%5D=sans+prolongateur&a%5Bthrottle-type-tds%5D=Levier&a%5Bpferd-type-tds%5D=PG+8%2F100+HV",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "PFERD PG 8/100 HV, référence 80107011. Consommations documentaires conservées séparément ; pression de mesure à confirmer avant dimensionnement. Longueur : 184 mm. Pince de serrage Ø comprise [mm] : 6 mm. Poids net de la machine : 0.95 kg.",
		"verifiedFacts": [
			"Pression de service publiée sur cette fiche : 6.3 bar. Aucune autre pression de fonctionnement n’est déduite.",
			"Consommation sous charge : 0.85 m³/min ; à vide : 0.17 m³/min. La pression de mesure de ces consommations reste à confirmer ; aucune des deux valeurs ne dimensionne le besoin en charge.",
			"Référence fabricant : 80107011.",
			"Longueur : 184 mm.",
			"Pince de serrage Ø comprise [mm] : 6 mm.",
			"Poids net de la machine : 0.95 kg."
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
				"pferd-80107011-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation sous charge : 0.85 m³/min ; à vide : 0.17 m³/min. La pression de mesure de ces consommations reste à confirmer ; aucune des deux valeurs ne dimensionne le besoin en charge.",
			"evidenceIds": [
				"pferd-80107011-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "184 mm",
			"evidenceIds": [
				"pferd-80107011-20260927"
			]
		},
		{
			"label": "Pince de serrage Ø comprise [mm]",
			"value": "6 mm",
			"evidenceIds": [
				"pferd-80107011-20260927"
			]
		},
		{
			"label": "Poids net de la machine",
			"value": "0.95 kg",
			"evidenceIds": [
				"pferd-80107011-20260927"
			]
		},
		{
			"label": "Puissance",
			"value": "600 Watt",
			"evidenceIds": [
				"pferd-80107011-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "10000 t/min",
			"evidenceIds": [
				"pferd-80107011-20260927"
			]
		},
		{
			"label": "Échappement d'air",
			"value": "Avant",
			"evidenceIds": [
				"pferd-80107011-20260927"
			]
		},
		{
			"label": "ø intérieur flexible d'alimentation",
			"value": "8.5 mm",
			"evidenceIds": [
				"pferd-80107011-20260927"
			]
		},
		{
			"label": "Consommation publiée, hors dimensionnement",
			"value": "850 L/min ; La pression de mesure de la consommation publiée reste à documenter. Les valeurs et leur régime sont conservés dans les spécifications, hors calcul de compatibilité.",
			"evidenceIds": [
				"review:2026-11-06-followup:pferd-pg-8-100-hv:1"
			]
		}
	],
	"evidence": [
		{
			"id": "pferd-80107011-20260927",
			"sourceUrl": "https://fr.pferd.com/fr/meuleuse-droite-pneumatique-pg-8100?a%5Btype-tds%5D=sans+prolongateur&a%5Bthrottle-type-tds%5D=Levier&a%5Bpferd-type-tds%5D=PG+8%2F100+HV",
			"sourceLabel": "PFERD TOOLS, fiche technique PG 8/100 HV, réf. 80107011",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation sous charge : 0.85 m³/min ; à vide : 0.17 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 850 L/min (m³/min × 1 000)."
		},
		{
			"id": "review:2026-11-06-followup:pferd-pg-8-100-hv:1",
			"sourceUrl": "https://fr.pferd.com/fr/meuleuse-droite-pneumatique-pg-8100?a%5Btype-tds%5D=sans+prolongateur&a%5Bthrottle-type-tds%5D=Levier&a%5Bpferd-type-tds%5D=PG+8%2F100+HV",
			"sourceLabel": "PFERD, revue documentaire du 6 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Fiche 80107011 : pince 6 mm, 10000 tr/min, 600 W, 0,95 kg ; charge 0,85 m³/min et vide 0,17. Débits à conserver dans les spécifications, sans pression de mesure démontrée par le seul champ service 6,3 bar. SHA-256 du document complet : 9be88e7262cff0c6846f6633d0ecb67992a67c4de12de41c4b1e90900dc3ac70."
		},
		{
			"id": "review:2026-11-06-copy:pferd-pg-8-100-hv",
			"sourceUrl": "https://fr.pferd.com/fr/meuleuse-droite-pneumatique-pg-8100?a%5Btype-tds%5D=sans+prolongateur&a%5Bthrottle-type-tds%5D=Levier&a%5Bpferd-type-tds%5D=PG+8%2F100+HV",
			"sourceLabel": "PFERD, clarification des conditions de dimensionnement",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Alignement des textes sur le régime non dimensionnant déjà utilisé par le moteur. Valeurs documentaires et conditions de service conservées ; SHA-256 9be88e7262cff0c6846f6633d0ecb67992a67c4de12de41c4b1e90900dc3ac70."
		}
	],
	"fieldSources": {
		"mpn": [
			"pferd-80107011-20260927"
		],
		"workingPressureBar": [
			"pferd-80107011-20260927"
		],
		"demandExplanation": [
			"review:2026-11-06-followup:pferd-pg-8-100-hv:1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La pression de mesure de la consommation publiée reste à documenter. Les valeurs et leur régime sont conservés dans les spécifications, hors calcul de compatibilité."
};

export default product;
