import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pferd-pg-3-500-s",
	"slug": "pferd-pg-3-500-s",
	"brand": "PFERD",
	"model": "PG 3/500 S",
	"mpn": "80107050",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "PFERD PG 3/500 S",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/pferd-pg-3-500-s.webp",
		"alt": "Repères techniques PFERD PG 3/500 S, référence 80107050",
		"sourceUrl": "https://fr.pferd.com/fr/meuleuse-droite-pneumatique-pg-3500",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "PFERD PG 3/500 S. La PG 3/500 S est la meuleuse à pince 6 mm et 50 000 tr/min, distincte de la PG 3/250 S de la même famille. L’ancienne demande 450 L/min utilisait le débit à vide ; le fabricant publie 240 L/min en charge. Aucune extrapolation de pression ni consommation maximale n’est ajoutée à partir de la seule consigne de service 6,3 bar.",
		"verifiedFacts": [
			"Pince fournie : 6 mm.",
			"Vitesse : 50 000 tr/min.",
			"Longueur : 162 mm.",
			"Masse : 0,37 kg.",
			"Consommation en charge : 0,24 m³/min (240 L/min).",
			"Consommation à vide distincte : 0,45 m³/min (450 L/min)."
		],
		"limitations": [
			"Le débit en charge et le débit à vide sont séparés ; la pression de service ne suffit pas à établir leur pression de mesure."
		]
	},
	"specifications": [
		{
			"label": "Pince fournie",
			"value": "6 mm",
			"evidenceIds": [
				"pferd-pg-3-500-s-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse",
			"value": "50 000 tr/min",
			"evidenceIds": [
				"pferd-pg-3-500-s-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "162 mm",
			"evidenceIds": [
				"pferd-pg-3-500-s-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,37 kg",
			"evidenceIds": [
				"pferd-pg-3-500-s-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation en charge",
			"value": "0,24 m³/min (240 L/min)",
			"evidenceIds": [
				"pferd-pg-3-500-s-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation à vide distincte",
			"value": "0,45 m³/min (450 L/min)",
			"evidenceIds": [
				"pferd-pg-3-500-s-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "pferd-80107050-20260927",
			"sourceUrl": "https://fr.pferd.com/fr/meuleuse-droite-pneumatique-pg-3500",
			"sourceLabel": "PFERD TOOLS, fiche technique PG 3/500 S, réf. 80107050",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation sous charge : 0.24 m³/min ; à vide : 0.45 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 450 L/min (m³/min × 1 000)."
		},
		{
			"id": "pferd-pg-3-500-s-reserved-20261103-1",
			"sourceUrl": "https://fr.pferd.com/fr/meuleuse-droite-pneumatique-pg-3500",
			"sourceLabel": "PFERD : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 073c560be48db88b2cfa267f36d05752d3029a12123b117a255e77525bde866d. La PG 3/500 S est la meuleuse à pince 6 mm et 50 000 tr/min, distincte de la PG 3/250 S de la même famille. L’ancienne demande 450 L/min utilisait le débit à vide ; le fabricant publie 240 L/min en charge. Aucune extrapolation de pression ni consommation maximale n’est ajoutée à partir de la seule consigne de service 6,3 bar."
		}
	],
	"fieldSources": {
		"mpn": [
			"pferd-80107050-20260927"
		],
		"workingPressureBar": [
			"pferd-pg-3-500-s-reserved-20261103-1"
		],
		"demandModel": [
			"pferd-pg-3-500-s-reserved-20261103-1"
		],
		"demandExplanation": [
			"pferd-pg-3-500-s-reserved-20261103-1"
		],
		"editorial": [
			"pferd-pg-3-500-s-reserved-20261103-1"
		],
		"specifications": [
			"pferd-pg-3-500-s-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Débits documentés selon leur régime, sans pression de mesure explicitement appariée par la fiche."
};

export default product;
