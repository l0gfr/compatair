import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pferd-pf-8-90",
	"slug": "pferd-pf-8-90",
	"brand": "PFERD",
	"model": "PF 8/90",
	"mpn": "80600205",
	"categoryId": "lime-alternative",
	"category": "lime-alternative",
	"label": "PFERD PF 8/90",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/pferd-pf-8-90.webp",
		"alt": "Repères techniques PFERD PF 8/90, référence 80600205",
		"sourceUrl": "https://fr.pferd.com/fr/appareil-a-limer-pneumatique-pf-890",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "PFERD PF 8/90. La PF 8/90 est décrite comme PF 8/90 HV sur la fiche actuelle de l’article 80600205, à 9 000 courses/min. La PF 4/84 et la PFGA 07/220 sont d’autres références, dont les réglages ne sont pas transférés. Les consommations à vide et en charge valent toutes deux 78 L/min, mais l’égalité ne prouve pas leur pression de mesure ; la consigne 6,3 bar reste distincte.",
		"verifiedFacts": [
			"Désignation de la fiche actuelle : PF 8/90 HV, article 80600205.",
			"Cadence : 9 000 courses/min.",
			"Longueur : 180 mm.",
			"Masse : 1,038 kg.",
			"Consommation en charge : 0,078 m³/min (78 L/min).",
			"Consommation à vide distincte : 0,078 m³/min (78 L/min)."
		],
		"limitations": [
			"Le débit en charge et le débit à vide sont séparés ; la pression de service ne suffit pas à établir leur pression de mesure."
		]
	},
	"specifications": [
		{
			"label": "Désignation de la fiche actuelle",
			"value": "PF 8/90 HV, article 80600205",
			"evidenceIds": [
				"pferd-pf-8-90-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "9 000 courses/min",
			"evidenceIds": [
				"pferd-pf-8-90-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "180 mm",
			"evidenceIds": [
				"pferd-pf-8-90-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,038 kg",
			"evidenceIds": [
				"pferd-pf-8-90-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation en charge",
			"value": "0,078 m³/min (78 L/min)",
			"evidenceIds": [
				"pferd-pf-8-90-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation à vide distincte",
			"value": "0,078 m³/min (78 L/min)",
			"evidenceIds": [
				"pferd-pf-8-90-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "pferd-80600205-20260927",
			"sourceUrl": "https://fr.pferd.com/fr/appareil-a-limer-pneumatique-pf-890",
			"sourceLabel": "PFERD TOOLS, fiche technique PF 8/90, réf. 80600205",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation sous charge : 0.078 m³/min ; à vide : 0.078 m³/min. La valeur la plus élevée est retenue pour le dimensionnement : 78 L/min (m³/min × 1 000)."
		},
		{
			"id": "pferd-pf-8-90-reserved-20261103-1",
			"sourceUrl": "https://fr.pferd.com/fr/appareil-a-limer-pneumatique-pf-890",
			"sourceLabel": "PFERD : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 d5cb5c440562581d832b437c4823d198698fffed2e0557dbe21a1764b53875b3. La PF 8/90 est décrite comme PF 8/90 HV sur la fiche actuelle de l’article 80600205, à 9 000 courses/min. La PF 4/84 et la PFGA 07/220 sont d’autres références, dont les réglages ne sont pas transférés. Les consommations à vide et en charge valent toutes deux 78 L/min, mais l’égalité ne prouve pas leur pression de mesure ; la consigne 6,3 bar reste distincte."
		}
	],
	"fieldSources": {
		"mpn": [
			"pferd-80600205-20260927"
		],
		"workingPressureBar": [
			"pferd-pf-8-90-reserved-20261103-1"
		],
		"demandModel": [
			"pferd-pf-8-90-reserved-20261103-1"
		],
		"demandExplanation": [
			"pferd-pf-8-90-reserved-20261103-1"
		],
		"editorial": [
			"pferd-pf-8-90-reserved-20261103-1"
		],
		"specifications": [
			"pferd-pf-8-90-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Débits documentés selon leur régime, sans pression de mesure explicitement appariée par la fiche."
};

export default product;
