import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-15c2a90-2cs",
	"slug": "fiam-15c2a90-2cs",
	"brand": "Fiam",
	"model": "15C2A90-2CS",
	"mpn": "112509907",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam 15C2A90-2CS",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-15c2a90-2cs.webp",
		"alt": "Repères techniques Fiam 15C2A90-2CS, référence 112509907",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/15c2a90-2cs/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "15C2A90-2CS : visseuse d’angle à tête de 90° et double signal pneumatique pour le suivi de cycle TOM. Le modèle 15C2A30-2CS porte une tête de 30° ; les deux annoncent 0,8–2 Nm, 2 000 tr/min et 4 L/s. Le code de commande de la version 90° est 112509907.",
		"verifiedFacts": [
			"15C2A90-2CS et 15C2A30-2CS : têtes à 90° et 30°, double signal pneumatique 2CS ; même plage indicative 0,8–2 Nm, 2 000 tr/min, 0,70 kg et 4 L/s. La tête, pas le besoin d’air, est la différence documentée.",
			"Le régime de la consommation publiée n’est pas précisé ; cette valeur n’est pas assimilée à un maximum de travail."
		],
		"limitations": [
			"La note ISO 2787 appaire les valeurs à 6,3 bar, mais ne qualifie pas ici le régime de consommation de 4 L/s.",
			"Le double signal et le suivi de cycle ne constituent pas une mesure indépendante du couple."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"evidenceIds": [
				"fiam-112509907-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 4 L/s, soit 240 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-112509907-20260926"
			]
		},
		{
			"label": "Couple de serrage indicatif",
			"value": "0.8÷2 Nm",
			"evidenceIds": [
				"fiam-112509907-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2000 tr/min",
			"evidenceIds": [
				"fiam-112509907-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.7 kg",
			"evidenceIds": [
				"fiam-112509907-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "MALE SQUARE DRIVE 1/4\"",
			"evidenceIds": [
				"fiam-112509907-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Lever start",
			"evidenceIds": [
				"fiam-112509907-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-112509907-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/15c2a90-2cs/",
			"sourceLabel": "Fiam, fiche technique 15C2A90-2CS, réf. 112509907",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 4 L/s, soit 240 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-112509907-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-85.pdf#page=15",
			"sourceLabel": "Fiam, brochure technique en-85, p. 15",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		},
		{
			"id": "review-20261025-fiam-15c2a90-2cs-s047",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/15c2a90-2cs/",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s047, section technique de la référence",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:36.230312+00:00, SHA-256 de7ac08c4b4aa82b3a9659114ac19bdea0c774b4d8c8b775d45edd93902f6b1a. 15C2A90-2CS et 15C2A30-2CS : têtes à 90° et 30°, double signal pneumatique 2CS ; même plage indicative 0,8–2 Nm, 2 000 tr/min, 0,70 kg et 4 L/s. La tête, pas le besoin d’air, est la différence documentée. Limite : La note ISO 2787 appaire les valeurs à 6,3 bar, mais ne qualifie pas ici le régime de consommation de 4 L/s ; ajouter unqualified."
		},
		{
			"id": "review-20261025-fiam-15c2a90-2cs-s048",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-85.pdf#page=15",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s048, pages PDF 15",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:36.548994+00:00, SHA-256 e1c8db38588668ff2347c0005a43ac3067609b0b280d80dc3548f0d8043dccce. 15C2A90-2CS et 15C2A30-2CS : têtes à 90° et 30°, double signal pneumatique 2CS ; même plage indicative 0,8–2 Nm, 2 000 tr/min, 0,70 kg et 4 L/s. La tête, pas le besoin d’air, est la différence documentée. Limite : La note ISO 2787 appaire les valeurs à 6,3 bar, mais ne qualifie pas ici le régime de consommation de 4 L/s ; ajouter unqualified."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-112509907-20260926"
		],
		"workingPressureBar": [
			"fiam-112509907-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-112509907-20260926",
			"review-20261025-fiam-15c2a90-2cs-s047",
			"review-20261025-fiam-15c2a90-2cs-s048"
		],
		"airflowBasis": [
			"review-20261025-fiam-15c2a90-2cs-s047",
			"review-20261025-fiam-15c2a90-2cs-s048"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : La note ISO 2787 appaire les valeurs à 6,3 bar, mais ne qualifie pas ici le régime de consommation de 4 L/s ; ajouter unqualified."
	],
	"airflowLpm": {
		"min": 240,
		"typical": 240,
		"max": 240
	},
	"airflowBasis": "unqualified"
};

export default product;
