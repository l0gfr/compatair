import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rrb-280",
	"slug": "red-rooster-rrb-280",
	"brand": "Red Rooster",
	"model": "RRB-280",
	"mpn": "RRB-280",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Red Rooster RRB-280",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rrb-280.webp",
		"alt": "Repères techniques Red Rooster RRB-280, référence RRB-280",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=47",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RRB-280 : outil rotatif pour brosse métallique de 80 mm, axe M14 × 2, 0,45 kW et 8 000 tr/min. La brosse est fournie sur commande selon la note du catalogue. Pour comparaison, la Fiam LES34 utilise des accessoires jusqu’à 75 mm à 3 400 tr/min et annonce 9 L/s, contre 9,6 L/s pour la RRB-280.",
		"verifiedFacts": [
			"RRB-280 est une brosse métallique rotative de 80 mm, axe M14 × 2, 8 000 tr/min, 0,45 kW et 9,6 L/s. La LES34 est une ponceuse rotative d’angle à sortie M14, accessoire maximal 75 mm, 3 400 tr/min, 0,30 kW et 9 L/s ; sa fiche autorise notamment les brosses. Ce sont deux usages rotatifs proches, pas une comparaison avec une perceuse ou une orbitale.",
			"Le régime de la consommation publiée n’est pas précisé ; cette valeur n’est pas assimilée à un maximum de travail."
		],
		"limitations": [
			"Il s’agit d’une brosse rotative : la colonne Course est un tiret et aucun mouvement orbital n’est publié.",
			"Le régime des 9,6 L/s n’est pas donné.",
			"La sortie M14 de LES34 n’établit pas à elle seule un interchangeabilité de toutes les brosses : diamètre, vitesse admissible et filetage exact restent à contrôler."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"evidenceIds": [
				"red-rooster-rrb-280-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 9.6 L/s, convertis en 576 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rrb-280-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "8000 tr/min",
			"evidenceIds": [
				"red-rooster-rrb-280-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,5 kg",
			"evidenceIds": [
				"red-rooster-rrb-280-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"red-rooster-rrb-280-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"red-rooster-rrb-280-20260926"
			]
		},
		{
			"label": "Mécanisme et accessoire documentés",
			"value": "Brosse métallique rotative de 80 mm, axe M14 × 2 ; aucune course orbitale publiée.",
			"evidenceIds": [
				"review-20261025-red-rooster-rrb-280-s068",
				"review-20261025-red-rooster-rrb-280-s054",
				"review-20261025-red-rooster-rrb-280-s055"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rrb-280-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=47",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 47, réf. RRB-280",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 9.6 L/s, convertis en 576 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rrb-280-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review-20261025-red-rooster-rrb-280-s068",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=47",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s068, pages PDF 47, 106",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:38.623086+00:00, SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. RRB-280 est une brosse métallique rotative de 80 mm, axe M14 × 2, 8 000 tr/min, 0,45 kW et 9,6 L/s. La LES34 est une ponceuse rotative d’angle à sortie M14, accessoire maximal 75 mm, 3 400 tr/min, 0,30 kW et 9 L/s ; sa fiche autorise notamment les brosses. Ce sont deux usages rotatifs proches, pas une comparaison avec une perceuse ou une orbitale. Limite : Corriger la catégorie orbitale : la colonne Course est un tiret et aucun mouvement orbital n’est publié. Utiliser la catégorie existante ponceuse-rotative avec la désignation brosse métallique explicite."
		},
		{
			"id": "review-20261025-red-rooster-rrb-280-s054",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-44.pdf#page=13",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s054, pages PDF 13",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:37.715254+00:00, SHA-256 01b152f269aeae367daa8a9524f083a1679707b0a3eff4daa59bcec83635f6de. RRB-280 est une brosse métallique rotative de 80 mm, axe M14 × 2, 8 000 tr/min, 0,45 kW et 9,6 L/s. La LES34 est une ponceuse rotative d’angle à sortie M14, accessoire maximal 75 mm, 3 400 tr/min, 0,30 kW et 9 L/s ; sa fiche autorise notamment les brosses. Ce sont deux usages rotatifs proches, pas une comparaison avec une perceuse ou une orbitale. Limite : Corriger la catégorie orbitale : la colonne Course est un tiret et aucun mouvement orbital n’est publié. Utiliser la catégorie existante ponceuse-rotative avec la désignation brosse métallique explicite."
		},
		{
			"id": "review-20261025-red-rooster-rrb-280-s055",
			"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/les34/",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s055, section technique de la référence",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:37.746552+00:00, SHA-256 a97c674c4d97a178f739bff463b8d18d08c081831e9acb7eb0d0ca9a28077284. RRB-280 est une brosse métallique rotative de 80 mm, axe M14 × 2, 8 000 tr/min, 0,45 kW et 9,6 L/s. La LES34 est une ponceuse rotative d’angle à sortie M14, accessoire maximal 75 mm, 3 400 tr/min, 0,30 kW et 9 L/s ; sa fiche autorise notamment les brosses. Ce sont deux usages rotatifs proches, pas une comparaison avec une perceuse ou une orbitale. Limite : Corriger la catégorie orbitale : la colonne Course est un tiret et aucun mouvement orbital n’est publié. Utiliser la catégorie existante ponceuse-rotative avec la désignation brosse métallique explicite."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rrb-280-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rrb-280-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rrb-280-20260926",
			"review-20261025-red-rooster-rrb-280-s068",
			"review-20261025-red-rooster-rrb-280-s054",
			"review-20261025-red-rooster-rrb-280-s055"
		],
		"recommendedHose": [
			"red-rooster-rrb-280-20260926"
		],
		"connectorSize": [
			"red-rooster-rrb-280-20260926"
		],
		"airflowBasis": [
			"review-20261025-red-rooster-rrb-280-s068",
			"review-20261025-red-rooster-rrb-280-s054",
			"review-20261025-red-rooster-rrb-280-s055"
		],
		"categoryId": [
			"review-20261025-red-rooster-rrb-280-s068",
			"review-20261025-red-rooster-rrb-280-s054",
			"review-20261025-red-rooster-rrb-280-s055"
		],
		"category": [
			"review-20261025-red-rooster-rrb-280-s068",
			"review-20261025-red-rooster-rrb-280-s054",
			"review-20261025-red-rooster-rrb-280-s055"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : Corriger la catégorie orbitale : la colonne Course est un tiret et aucun mouvement orbital n’est publié. Utiliser la catégorie existante ponceuse-rotative avec la désignation brosse métallique explicite."
	],
	"airflowLpm": {
		"min": 576,
		"typical": 576,
		"max": 576
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;
