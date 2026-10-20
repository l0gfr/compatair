import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-len17u",
	"slug": "fiam-len17u",
	"brand": "Fiam",
	"model": "LEN17U",
	"mpn": "146095103",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Fiam LEN17U",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-len17u.webp",
		"alt": "Repères techniques Fiam LEN17U, référence 146095103",
		"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/len17u/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "LEN17U 146095103 : ponceuse d’angle avec robinet d’arrivée d’eau, pare-éclaboussures et sortie filetée 5/8 W. La LEN17 voisine est décrite sans cet équipement d’eau. Les deux donnent 1 700 tr/min et 10 L/s à 6,3 bar, soit 600 L/min ; le circuit d’eau reste un dossier distinct de l’air moteur.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 146095103.",
			"Vitesse à vide : 1700 tr/min.",
			"Masse publiée : 2.6 kg.",
			"Dimensions publiées : Ø 51 x L 280 x H 112 mm."
		],
		"limitations": [
			"La pression et le débit d’eau ne sont pas publiés dans cette ligne. Le régime d’air n’est pas qualifié en charge ; aucun besoin d’eau n’est déduit des 6,3 bar pneumatiques.",
			"Le couple éventuel est indicatif : l’assemblage, l’accessoire et la pression dynamique influencent le résultat.",
			"Consommation déclarée par le fabricant, sans essai indépendant ni garantie d’un maximum à tous les régimes."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"evidenceIds": [
				"fiam-146095103-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-146095103-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1700 tr/min",
			"evidenceIds": [
				"fiam-146095103-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2.6 kg",
			"evidenceIds": [
				"fiam-146095103-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 51 x L 280 x H 112 mm",
			"evidenceIds": [
				"fiam-146095103-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "With lever with safety device",
			"evidenceIds": [
				"fiam-146095103-20260926"
			]
		},
		{
			"label": "Puissance",
			"value": "375 W",
			"evidenceIds": [
				"fiam-146095103-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-146095103-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/len17u/",
			"sourceLabel": "Fiam, fiche technique LEN17U, réf. 146095103",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-146095103-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-44.pdf#page=13",
			"sourceLabel": "Fiam, brochure technique en-44, p. 13",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		},
		{
			"id": "fiam-146095100-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/len17/",
			"sourceLabel": "Fiam, fiche technique LEN17, réf. 146095100",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-146095100-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-44.pdf#page=13",
			"sourceLabel": "Fiam, brochure technique en-44, p. 13",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		},
		{
			"id": "fiam-144695400-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/les45/",
			"sourceLabel": "Fiam, fiche technique LES45, réf. 144695400",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-144695400-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-44.pdf#page=13",
			"sourceLabel": "Fiam, brochure technique en-44, p. 13",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-146095103-20260926"
		],
		"workingPressureBar": [
			"fiam-146095103-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-146095103-20260926"
		],
		"airflowBasis": [
			"fiam-146095103-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 600,
		"typical": 600,
		"max": 600
	},
	"airflowBasis": "unqualified"
};

export default product;
