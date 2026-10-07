import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "pistolet-peinture-astro-pneumatic-as6s",
	"slug": "pistolet-peinture-astro-pneumatic-as6s",
	"categoryId": "pistolet-peinture",
	"category": "pistolet-peinture",
	"label": "Astro Pneumatic AS6S",
	"brand": "Astro Pneumatic",
	"model": "AS6S",
	"mpn": "AS6S",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/pistolet-peinture-astro-pneumatic-as6s.svg",
		"alt": "Repères techniques : Astro Pneumatic AS6S",
		"sourceUrl": "https://www.astrotools.com/product/touch-up-gun-with-cup-1-4mm-nozzle/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "astro-pneumatic-as6s",
		"label": "Référence AS6S",
		"distinguishingAttributes": {
			"reference": "AS6S",
			"Buse": "1.4mm",
			"Pression de fonctionnement": "30-50psi"
		}
	},
	"editorial": {
		"overview": "Astro Pneumatic AS6S. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Buse : 1.4mm.",
			"Pression de fonctionnement : 30-50psi.",
			"Masse nette : 1lbs. (.45kg).",
			"Consommation moyenne, hors calcul : 4cfm.",
			"Filetage d’arrivée d’air : 1/4\".",
			"Diamètre intérieur du flexible : 6-8mm."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"La consommation moyenne ou sans régime publié reste hors calcul ; aucun débit en charge à pression de mesure connue n’est extrapolé.",
			"Une pression recommandée ou de service n’est pas un point de mesure de la consommation.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Buse",
			"value": "1.4mm",
			"evidenceIds": [
				"october3d-tools-astro-product-as6s-p1"
			]
		},
		{
			"label": "Pression de fonctionnement",
			"value": "30-50psi",
			"evidenceIds": [
				"october3d-tools-astro-product-as6s-p1"
			]
		},
		{
			"label": "Masse nette",
			"value": "1lbs. (.45kg)",
			"evidenceIds": [
				"october3d-tools-astro-product-as6s-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-as6s-p1"
			]
		},
		{
			"label": "Filetage d’arrivée d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"october3d-tools-astro-product-as6s-p1"
			]
		},
		{
			"label": "Diamètre intérieur du flexible",
			"value": "6-8mm",
			"evidenceIds": [
				"october3d-tools-astro-product-as6s-p1"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-as6s-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operation Pressure: 30-50psi",
			"evidenceIds": [
				"october3d-tools-astro-product-as6s-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-astro-product-as6s-p1",
			"sourceUrl": "https://www.astrotools.com/product/touch-up-gun-with-cup-1-4mm-nozzle/",
			"sourceLabel": "Astro Pneumatic, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 2fc678c0700e22e33c3c8101bcecddee3684131175e7ba96fce748fff7c2baa3. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-astro-product-as6s-p1"
		],
		"workingPressureBar": [
			"october3d-tools-astro-product-as6s-p1"
		],
		"demandExplanation": [
			"october3d-tools-astro-product-as6s-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
