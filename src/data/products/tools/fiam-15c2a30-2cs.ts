import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-15c2a30-2cs",
	"slug": "fiam-15c2a30-2cs",
	"brand": "Fiam",
	"model": "15C2A30-2CS",
	"mpn": "112509903",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam 15C2A30-2CS",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-15c2a30-2cs.webp",
		"alt": "Repères techniques Fiam 15C2A30-2CS, référence 112509903",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/15c2a30-2cs/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "15C2A30-2CS 112509903 : visseuse d’angle à 30°, carré mâle de 1/4 pouce et double signal pneumatique pour un suivi de cycle avec unité TOM. La 15C2A30 voisine ne porte pas ce suffixe de signalisation. La table conserve 0,8–2 Nm, 2 000 tr/min et 4 L/s à 6,3 bar, soit 240 L/min. Les raccords de suivi, le contrôleur et le cycle doivent être définis dans l’installation.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 4 L/s, soit 240 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 112509903.",
			"Couple de serrage indicatif : 0.8÷2 Nm.",
			"Vitesse à vide : 2000 tr/min.",
			"Masse publiée : 0.7 kg."
		],
		"limitations": [
			"Les 240 L/min n’ont pas de régime qualifié. Le double signal n’est pas à lui seul une preuve de serrage conforme sur un assemblage réel ni une mesure du besoin de tous les auxiliaires.",
			"Le couple éventuel est indicatif : l’assemblage, l’accessoire et la pression dynamique influencent le résultat.",
			"Consommation déclarée par le fabricant, sans essai indépendant ni garantie d’un maximum à tous les régimes."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"evidenceIds": [
				"fiam-112509903-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 4 L/s, soit 240 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-112509903-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "0.8÷2 Nm",
			"evidenceIds": [
				"fiam-112509903-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2000 tr/min",
			"evidenceIds": [
				"fiam-112509903-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.7 kg",
			"evidenceIds": [
				"fiam-112509903-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "MALE SQUARE DRIVE 1/4\"",
			"evidenceIds": [
				"fiam-112509903-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Lever start",
			"evidenceIds": [
				"fiam-112509903-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-112509903-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/15c2a30-2cs/",
			"sourceLabel": "Fiam, fiche technique 15C2A30-2CS, réf. 112509903",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 4 L/s, soit 240 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-112509903-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-85.pdf#page=15",
			"sourceLabel": "Fiam, brochure technique en-85, p. 15",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		},
		{
			"id": "fiam-112533942-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/15c2a30/",
			"sourceLabel": "Fiam, fiche technique 15C2A30, réf. 112533942",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 4 L/s, soit 240 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-112533942-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-26.pdf#page=8",
			"sourceLabel": "Fiam, brochure technique en-26, p. 8",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-112509903-20260926"
		],
		"workingPressureBar": [
			"fiam-112509903-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-112509903-20260926"
		],
		"airflowBasis": [
			"fiam-112509903-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 240,
		"typical": 240,
		"max": 240
	},
	"airflowBasis": "unqualified"
};

export default product;
