import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-sms30dc",
	"slug": "fiam-sms30dc",
	"brand": "Fiam",
	"model": "SMS30DC",
	"mpn": "144613001",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Fiam SMS30DC",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-sms30dc.webp",
		"alt": "Repères techniques Fiam SMS30DC, référence 144613001",
		"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/sms30dc/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SMS30DC : meuleuse droite de 300 W à échappement avant, 24 000 tr/min et pince livrée de 6 mm. La SMS30DCZ évacue l’air à l’arrière et tourne à 22 000 tr/min, pour la même masse de 0,62 kg et les mêmes 9 L/s publiés. La capacité maximale de pince annoncée est de 7 mm.",
		"verifiedFacts": [
			"SMS30DC contre SMS30DCZ : échappement avant contre arrière, vitesses 24 000 contre 22 000 tr/min ; mêmes 300 W, 0,62 kg, 40 × 190 mm et 9 L/s.",
			"Le régime de la consommation publiée n’est pas précisé ; cette valeur n’est pas assimilée à un maximum de travail."
		],
		"limitations": [
			"9 L/s à la pression de mesure de 6,3 bar restent de régime non qualifié.",
			"La pince livrée de 6 mm est distincte de la capacité maximale de 7 mm.",
			"Le flexible intérieur de 9,5 mm est prescrit par la ligne SMS30DC de la brochure."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"evidenceIds": [
				"fiam-144613001-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-144613001-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "24000 tr/min",
			"evidenceIds": [
				"fiam-144613001-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.62 kg",
			"evidenceIds": [
				"fiam-144613001-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 40 x L 190 mm",
			"evidenceIds": [
				"fiam-144613001-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "With lever with safety device",
			"evidenceIds": [
				"fiam-144613001-20260926"
			]
		},
		{
			"label": "Puissance",
			"value": "300 W",
			"evidenceIds": [
				"fiam-144613001-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-144613001-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/sms30dc/",
			"sourceLabel": "Fiam, fiche technique SMS30DC, réf. 144613001",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-144613001-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-44.pdf#page=7",
			"sourceLabel": "Fiam, brochure technique en-44, p. 7",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		},
		{
			"id": "review-20261025-fiam-sms30dc-s056",
			"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/sms30dc/",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s056, section technique de la référence",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:37.845921+00:00, SHA-256 0b1520cf1ec8616cf7c0eec6afe8efbcf5559256415489e6597e0018e29d2f56. SMS30DC contre SMS30DCZ : échappement avant contre arrière, vitesses 24 000 contre 22 000 tr/min ; mêmes 300 W, 0,62 kg, 40 × 190 mm et 9 L/s. Limite : 9 L/s à la pression de mesure de 6,3 bar restent de régime non qualifié ; ajouter unqualified."
		},
		{
			"id": "review-20261025-fiam-sms30dc-s054",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-44.pdf#page=7",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s054, pages PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:37.715254+00:00, SHA-256 01b152f269aeae367daa8a9524f083a1679707b0a3eff4daa59bcec83635f6de. SMS30DC contre SMS30DCZ : échappement avant contre arrière, vitesses 24 000 contre 22 000 tr/min ; mêmes 300 W, 0,62 kg, 40 × 190 mm et 9 L/s. Limite : 9 L/s à la pression de mesure de 6,3 bar restent de régime non qualifié ; ajouter unqualified."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-144613001-20260926"
		],
		"workingPressureBar": [
			"fiam-144613001-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-144613001-20260926",
			"review-20261025-fiam-sms30dc-s056",
			"review-20261025-fiam-sms30dc-s054"
		],
		"airflowBasis": [
			"review-20261025-fiam-sms30dc-s056",
			"review-20261025-fiam-sms30dc-s054"
		],
		"connectorSize": [
			"review-20261025-fiam-sms30dc-s056",
			"review-20261025-fiam-sms30dc-s054"
		],
		"recommendedHose": [
			"review-20261025-fiam-sms30dc-s056",
			"review-20261025-fiam-sms30dc-s054"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : 9 L/s à la pression de mesure de 6,3 bar restent de régime non qualifié ; ajouter unqualified."
	],
	"airflowLpm": {
		"min": 540,
		"typical": 540,
		"max": 540
	},
	"airflowBasis": "unqualified",
	"connectorSize": "1/4\" gas F",
	"recommendedHose": {
		"innerDiameterMm": 9.5
	}
};

export default product;
