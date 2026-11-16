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
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-astro-pneumatic-pr36-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Astro Pneumatic PR36",
		"sourceUrl": "https://www.astrotools.com/product/air-riveter-3-32-1-8-5-32-3-16-capacity/",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "astro-pneumatic-pr36",
		"label": "Référence PR36",
		"distinguishingAttributes": {
			"reference": "PR36",
			"Longueur hors tout": "10-5/8\" (270mm)",
			"Force de traction": "Deux libellés contradictoires : 1938 / 380 lbs"
		}
	},
	"editorial": {
		"overview": "La PR36 est la riveteuse hydropneumatique de 270 mm et course 16 mm. La page donne simultanément « Pulling Pressure 1938 lbs » et « Pulling Force 380 lbs » : le libellé ne permet pas d’identifier une traction unique. Les deux chiffres restent visibles, sans capacité déduite. Les 4 cfm moyens et la plage 90–120 psi ne qualifient pas un volume par tir. La réserve porte sur la traction et les conditions d’air.",
		"verifiedFacts": [
			"Longueur hors tout : 10-5/8\" (270mm).",
			"Course : 5/8\" (16mm).",
			"Filetage d’arrivée d’air : 1/4\".",
			"Diamètre intérieur du flexible : 3/8\" (10mm).",
			"Consommation moyenne, hors calcul : 4cfm.",
			"Pression d’air publiée : 90-120psi."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"La consommation moyenne ou sans régime publié reste hors calcul ; aucun débit en charge à pression de mesure connue n’est extrapolé.",
			"Une pression recommandée ou de service n’est pas un point de mesure de la consommation.",
			"Cellules écartées sans arbitrage en raison d’une incohérence d’unité, de conversion ou de libellé : Rivet Capacity: 3/16\"3/16 ; Net Weight: 3lbs. (1.41k). Les originaux sont conservés pour vérification.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué.",
			"Traction contradictoire dans la fiche actuelle : 1938 lbs / 380 lbs, sans arbitrage constructeur."
		]
	},
	"specifications": [
		{
			"label": "Longueur hors tout",
			"value": "10-5/8\" (270mm)",
			"evidenceIds": [
				"october3d-tools-astro-product-pr36-p1"
			]
		},
		{
			"label": "Traction : écart de libellé constructeur",
			"value": "Pulling Pressure 1938 lbs / Pulling Force 380 lbs ; non arbitré",
			"evidenceIds": [
				"review:2026-11-16-reviews:riveteuse-astro-pneumatic-pr36:0"
			]
		},
		{
			"label": "Course",
			"value": "5/8\" (16mm)",
			"evidenceIds": [
				"october3d-tools-astro-product-pr36-p1"
			]
		},
		{
			"label": "Filetage d’arrivée d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"october3d-tools-astro-product-pr36-p1"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "3/8\" (10mm)",
			"evidenceIds": [
				"october3d-tools-astro-product-pr36-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-pr36-p1"
			]
		},
		{
			"label": "Pression d’air publiée",
			"value": "90-120psi",
			"evidenceIds": [
				"october3d-tools-astro-product-pr36-p1"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-pr36-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90-120psi",
			"evidenceIds": [
				"october3d-tools-astro-product-pr36-p1"
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
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-astro-product-pr36-p1"
		],
		"workingPressureBar": [
			"october3d-tools-astro-product-pr36-p1"
		],
		"demandExplanation": [
			"october3d-tools-astro-product-pr36-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
