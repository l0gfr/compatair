import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pferd-pba-2-200-hv",
	"slug": "pferd-pba-2-200-hv",
	"brand": "PFERD",
	"model": "PBA 2/200 HV",
	"mpn": "80705051",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "PFERD PBA 2/200 HV",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/pferd-pba-2-200-hv.webp",
		"alt": "Repères techniques PFERD PBA 2/200 HV, référence 80705051",
		"sourceUrl": "https://fr.pferd.com/fr/ponceuse-a-bande-pneumatique-pba-2200-hv",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "PFERD PBA 2/200 HV. La PBA 2/200 HV est fournie avec le bras BSVAK 9/9 × 305, pour une famille de bandes 305 mm et largeurs 3–16 mm selon bras. La version oVA est sans le bras fourni. Les 550 L/min précédemment retenus sont à vide ; les 450 L/min sont en charge. La pression de service 6,3 bar n’est pas présentée comme une preuve de pression de mesure.",
		"verifiedFacts": [
			"Bande : Longueur 305 mm, largeur 3–16 mm selon bras.",
			"Bras fourni : BSVAK 9/9 × 305.",
			"Vitesse de bande : 22 m/s.",
			"Puissance : 230 W.",
			"Consommation en charge : 0,45 m³/min (450 L/min).",
			"Consommation à vide distincte : 0,55 m³/min (550 L/min)."
		],
		"limitations": [
			"Le débit en charge et le débit à vide sont séparés ; la pression de service ne suffit pas à établir leur pression de mesure."
		]
	},
	"specifications": [
		{
			"label": "Bande",
			"value": "Longueur 305 mm, largeur 3–16 mm selon bras",
			"evidenceIds": [
				"pferd-pba-2-200-hv-reserved-20261103-1"
			]
		},
		{
			"label": "Bras fourni",
			"value": "BSVAK 9/9 × 305",
			"evidenceIds": [
				"pferd-pba-2-200-hv-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse de bande",
			"value": "22 m/s",
			"evidenceIds": [
				"pferd-pba-2-200-hv-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "230 W",
			"evidenceIds": [
				"pferd-pba-2-200-hv-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation en charge",
			"value": "0,45 m³/min (450 L/min)",
			"evidenceIds": [
				"pferd-pba-2-200-hv-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation à vide distincte",
			"value": "0,55 m³/min (550 L/min)",
			"evidenceIds": [
				"pferd-pba-2-200-hv-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "pferd-80705051-20260927",
			"sourceUrl": "https://fr.pferd.com/fr/ponceuse-a-bande-pneumatique-pba-2200-hv",
			"sourceLabel": "PFERD TOOLS, fiche technique PBA 2/200 HV, réf. 80705051",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation sous charge : 0.45 m³/min ; à vide : 0.55 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 550 L/min (m³/min × 1 000)."
		},
		{
			"id": "pferd-pba-2-200-hv-reserved-20261103-1",
			"sourceUrl": "https://fr.pferd.com/fr/ponceuse-a-bande-pneumatique-pba-2200-hv",
			"sourceLabel": "PFERD : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 cc3b31cbe9721903a3b82e2800a0f8c725f38f9f2d8f7f473dff3e36e33dbc6a. La PBA 2/200 HV est fournie avec le bras BSVAK 9/9 × 305, pour une famille de bandes 305 mm et largeurs 3–16 mm selon bras. La version oVA est sans le bras fourni. Les 550 L/min précédemment retenus sont à vide ; les 450 L/min sont en charge. La pression de service 6,3 bar n’est pas présentée comme une preuve de pression de mesure."
		}
	],
	"fieldSources": {
		"mpn": [
			"pferd-80705051-20260927"
		],
		"workingPressureBar": [
			"pferd-pba-2-200-hv-reserved-20261103-1"
		],
		"demandModel": [
			"pferd-pba-2-200-hv-reserved-20261103-1"
		],
		"demandExplanation": [
			"pferd-pba-2-200-hv-reserved-20261103-1"
		],
		"editorial": [
			"pferd-pba-2-200-hv-reserved-20261103-1"
		],
		"specifications": [
			"pferd-pba-2-200-hv-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Débits documentés selon leur régime, sans pression de mesure explicitement appariée par la fiche."
};

export default product;
