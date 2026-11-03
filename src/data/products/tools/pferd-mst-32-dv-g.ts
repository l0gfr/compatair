import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pferd-mst-32-dv-g",
	"slug": "pferd-mst-32-dv-g",
	"brand": "PFERD",
	"model": "MST 32 DV G",
	"mpn": "80600150",
	"categoryId": "graveur",
	"category": "graveur",
	"label": "PFERD MST 32 DV G",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/pferd-mst-32-dv-g.webp",
		"alt": "Repères techniques PFERD MST 32 DV G, référence 80600150",
		"sourceUrl": "https://fr.pferd.com/fr/crayon-de-marquage-pneumatique-mst-32-dv?a%5Bwidth-needle-tds%5D=G+%28grossi%C3%A8re%29",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "PFERD MST 32 DV G. La MST 32 DV G est le crayon de marquage à pointe grossière ; les versions F et M sont d’autres pointes de la même famille. Le travail sur métal, verre et plastique est décrit par le fabricant. L’ancienne demande de 30 L/min sélectionnait le débit à vide plutôt que les 20 L/min en charge. Les deux valeurs sont maintenant distinctes et restent hors calcul faute de pression de mesure explicitement appariée.",
		"verifiedFacts": [
			"Pointe : Gravure grossière, version G.",
			"Cadence : 32 000 courses/min.",
			"Longueur : 162 mm.",
			"Masse : 0,152 kg.",
			"Consommation en charge : 0,02 m³/min (20 L/min).",
			"Consommation à vide distincte : 0,03 m³/min (30 L/min)."
		],
		"limitations": [
			"Le débit en charge et le débit à vide sont séparés ; la pression de service ne suffit pas à établir leur pression de mesure."
		]
	},
	"specifications": [
		{
			"label": "Pointe",
			"value": "Gravure grossière, version G",
			"evidenceIds": [
				"pferd-mst-32-dv-g-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "32 000 courses/min",
			"evidenceIds": [
				"pferd-mst-32-dv-g-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "162 mm",
			"evidenceIds": [
				"pferd-mst-32-dv-g-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,152 kg",
			"evidenceIds": [
				"pferd-mst-32-dv-g-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation en charge",
			"value": "0,02 m³/min (20 L/min)",
			"evidenceIds": [
				"pferd-mst-32-dv-g-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation à vide distincte",
			"value": "0,03 m³/min (30 L/min)",
			"evidenceIds": [
				"pferd-mst-32-dv-g-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "pferd-80600150-20260927",
			"sourceUrl": "https://fr.pferd.com/fr/crayon-de-marquage-pneumatique-mst-32-dv?a%5Bwidth-needle-tds%5D=G+%28grossi%C3%A8re%29",
			"sourceLabel": "PFERD TOOLS, fiche technique MST 32 DV G, réf. 80600150",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation sous charge : 0.02 m³/min ; à vide : 0.03 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 30 L/min (m³/min × 1 000)."
		},
		{
			"id": "pferd-mst-32-dv-g-reserved-20261103-1",
			"sourceUrl": "https://fr.pferd.com/fr/crayon-de-marquage-pneumatique-mst-32-dv?a%5Bwidth-needle-tds%5D=G+%28grossi%C3%A8re%29",
			"sourceLabel": "PFERD : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 34459108dc913f38e554fb1f41576be4ae25f06192c876c0d6850825d3f868f9. La MST 32 DV G est le crayon de marquage à pointe grossière ; les versions F et M sont d’autres pointes de la même famille. Le travail sur métal, verre et plastique est décrit par le fabricant. L’ancienne demande de 30 L/min sélectionnait le débit à vide plutôt que les 20 L/min en charge. Les deux valeurs sont maintenant distinctes et restent hors calcul faute de pression de mesure explicitement appariée."
		}
	],
	"fieldSources": {
		"mpn": [
			"pferd-80600150-20260927"
		],
		"workingPressureBar": [
			"pferd-mst-32-dv-g-reserved-20261103-1"
		],
		"demandModel": [
			"pferd-mst-32-dv-g-reserved-20261103-1"
		],
		"demandExplanation": [
			"pferd-mst-32-dv-g-reserved-20261103-1"
		],
		"editorial": [
			"pferd-mst-32-dv-g-reserved-20261103-1"
		],
		"specifications": [
			"pferd-mst-32-dv-g-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Débits documentés selon leur régime, sans pression de mesure explicitement appariée par la fiche."
};

export default product;
