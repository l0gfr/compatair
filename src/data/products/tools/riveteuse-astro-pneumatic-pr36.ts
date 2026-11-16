import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-astro-pneumatic-pr36",
	"slug": "riveteuse-astro-pneumatic-pr36",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "Astro Pneumatic PR36",
	"brand": "Astro Pneumatic",
	"model": "PR36",
	"mpn": "PR36",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La notice publie « 2.320 Liter/Stroke » et une pression de service de 90 à 120 psi, sans appariement explicite de la mesure. La fiche donne aussi 4 cfm moyens ; aucun volume normalisé ni débit n’est dérivé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-astro-pneumatic-pr36-technical-20261116-reserves.svg",
		"alt": "Repères techniques : Astro Pneumatic PR36",
		"sourceUrl": "https://www.astrotools.com/product/air-riveter-3-32-1-8-5-32-3-16-capacity/?attachment_id=6156&download_file=efv4nxoancz5g",
		"sourceLabel": "Carte technique CompatAir, document constructeur relu le16novembre2026"
	},
	"variant": {
		"familyId": "astro-pneumatic-pr36",
		"label": "Référence PR36",
		"distinguishingAttributes": {
			"reference": "PR36",
			"Course publiée": "16mm",
			"Consommations documentaires": "4cfm moyens / 2.320 Liter/Stroke, régimes non fusionnés",
			"Traction": "1938 /380lb, contradiction non arbitrée"
		}
	},
	"editorial": {
		"overview": "La PR36 est documentée avec des embouts de 3/32, 1/8, 5/32 et 3/16 pouce, et une course de 16 mm. La notice ajoute une consommation de « 2.320 Liter/Stroke », alors que la fiche présente 4 cfm moyens. Ces données ne décrivent pas automatiquement le même régime. La traction de la fiche reste contradictoire, 1 938 et 380 lb ; les dimensions diffèrent aussi entre fiche et notice. La référence reste en réserve.",
		"verifiedFacts": [
			"Notice PR36 : embouts 3/32, 1/8, 5/32 et 3/16 pouce.",
			"Course de 5/8 pouce (16 mm) et entrée 1/4 pouce NPT dans la notice.",
			"Valeur publiée « 2.320 Liter/Stroke », sans pression de mesure explicitement appariée."
		],
		"limitations": [
			"La réserve de traction de 1938/380 lb n’est pas levée par cette notice.",
			"La notice indique280mm et1,6kg ; la fiche indique270mm et des valeurs différentes. La version applicable reste à confirmer.",
			"La plage de 90 à 120 psi est une plage de service, pas un point de mesure choisi pour le volume.",
			"Aucun essai physique ou débit moyen de cadence inventée."
		]
	},
	"specifications": [
		{
			"label": "Volume documentaire par coup, hors calcul",
			"value": "2.320 Liter/Stroke, libellé Avg. Air Consumption de la notice",
			"evidenceIds": [
				"review:2026-11-16-reserves:riveteuse-astro-pneumatic-pr36:1"
			]
		},
		{
			"label": "Consommation de la fiche, hors calcul",
			"value": "4 cfm moyens",
			"evidenceIds": [
				"review:2026-11-16-reserves:riveteuse-astro-pneumatic-pr36:0"
			]
		},
		{
			"label": "Pression de service de la notice",
			"value": "90–120 psi ; pression de mesure du volume non précisée",
			"evidenceIds": [
				"review:2026-11-16-reserves:riveteuse-astro-pneumatic-pr36:1"
			]
		},
		{
			"label": "Embouts et course de la notice",
			"value": "3/32,1/8,5/32,3/16pouce ; course5/8pouce (16mm)",
			"evidenceIds": [
				"review:2026-11-16-reserves:riveteuse-astro-pneumatic-pr36:1"
			]
		},
		{
			"label": "Dimensions et masse de la notice",
			"value": "10-7/8pouces (280mm),3-1/2lb (1,6kg) ; différences avec la fiche non arbitrées",
			"evidenceIds": [
				"review:2026-11-16-reserves:riveteuse-astro-pneumatic-pr36:1"
			]
		},
		{
			"label": "Traction : contradiction non résolue",
			"value": "Pulling Pressure1938lbs et Pulling Force380lbs dans la fiche ; aucune force unique attribuée",
			"evidenceIds": [
				"review:2026-11-16-reserves:riveteuse-astro-pneumatic-pr36:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-astro-product-pr36-p1",
			"sourceUrl": "https://www.astrotools.com/product/air-riveter-3-32-1-8-5-32-3-16-capacity/",
			"sourceLabel": "Astro Pneumatic, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 59805a2e20d03480b87a86129a183b2bc4dc00f4d562b6dd80a8eef3353e08b4. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:riveteuse-astro-pneumatic-pr36:0",
			"sourceUrl": "https://www.astrotools.com/product/air-riveter-3-32-1-8-5-32-3-16-capacity/",
			"sourceLabel": "Astro Pneumatic, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La PR36 est la riveteuse hydropneumatique de 270 mm et course 16 mm. La page donne simultanément « Pulling Pressure 1938 lbs » et « Pulling Force 380 lbs » : le libellé ne permet pas d’identifier une traction unique. Les deux chiffres restent visibles, sans capacité déduite. Les 4 cfm moyens et la plage 90–120 psi ne qualifient pas un volume par tir. La réserve porte sur la traction et les conditions d’air. GET complet SHA-256 eb4ee09633e9454415ce0dc4af84574ee2f60dcd9a73a198a22a18c4c29b203d. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		},
		{
			"id": "review:2026-11-16-reserves:riveteuse-astro-pneumatic-pr36:0",
			"sourceUrl": "https://www.astrotools.com/product/air-riveter-3-32-1-8-5-32-3-16-capacity/",
			"sourceLabel": "Astro Pneumatic PR36, document relu le16novembre2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Fiche PR36 et notice complète relues, avec contrôle visuel de la page1. La notice donne 2.320 Liter/Stroke, sans pression de mesure appariée : valeur documentaire, pas nouveau paramètre per-action. La traction1938/380lb reste contradictoire et les dimensions270/280mm divergent ; aucune qualification ni admission pour cette page. GET complet SHA-256 eb4ee09633e9454415ce0dc4af84574ee2f60dcd9a73a198a22a18c4c29b203d."
		},
		{
			"id": "review:2026-11-16-reserves:riveteuse-astro-pneumatic-pr36:1",
			"sourceUrl": "https://www.astrotools.com/product/air-riveter-3-32-1-8-5-32-3-16-capacity/?attachment_id=6156&download_file=efv4nxoancz5g",
			"sourceLabel": "Astro Pneumatic PR36, document relu le16novembre2026 ; pagesPDF 1, 2, 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Fiche PR36 et notice complète relues, avec contrôle visuel de la page1. La notice donne 2.320 Liter/Stroke, sans pression de mesure appariée : valeur documentaire, pas nouveau paramètre per-action. La traction1938/380lb reste contradictoire et les dimensions270/280mm divergent ; aucune qualification ni admission pour cette page. GET complet SHA-256 69d806829bbc60a6476dd991fa86281120de73b305e521febcab30ee5d5bdf3b."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-astro-product-pr36-p1"
		],
		"workingPressureBar": [
			"review:2026-11-16-reserves:riveteuse-astro-pneumatic-pr36:0",
			"review:2026-11-16-reserves:riveteuse-astro-pneumatic-pr36:1"
		],
		"demandExplanation": [
			"review:2026-11-16-reserves:riveteuse-astro-pneumatic-pr36:0",
			"review:2026-11-16-reserves:riveteuse-astro-pneumatic-pr36:1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"Fiche PR36 et notice complète relues, avec contrôle visuel de la page1. La notice donne 2.320 Liter/Stroke, sans pression de mesure appariée : valeur documentaire, pas nouveau paramètre per-action. La traction1938/380lb reste contradictoire et les dimensions270/280mm divergent ; aucune qualification ni admission pour cette page."
	]
};

export default product;
