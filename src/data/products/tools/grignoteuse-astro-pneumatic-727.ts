import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "grignoteuse-astro-pneumatic-727",
	"slug": "grignoteuse-astro-pneumatic-727",
	"categoryId": "grignoteuse",
	"category": "grignoteuse",
	"label": "Astro Pneumatic 727",
	"brand": "Astro Pneumatic",
	"model": "727",
	"mpn": "727",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/grignoteuse-astro-pneumatic-727.svg",
		"alt": "Repères techniques : Astro Pneumatic 727",
		"sourceUrl": "https://www.astrotools.com/product/onyx-heavy-duty-air-nibbler/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "astro-pneumatic-727",
		"label": "Référence 727",
		"distinguishingAttributes": {
			"reference": "727",
			"Vitesse publiée": "RPM: 3,500 CPM",
			"Capacité de coupe": "Steel : 18-gauge"
		}
	},
	"editorial": {
		"overview": "Astro Pneumatic 727. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Vitesse publiée : RPM: 3,500 CPM.",
			"Capacité de coupe : Steel : 18-gauge.",
			"Consommation publiée, hors calcul : 2 cfm.",
			"Arrivée d’air : 1/4\".",
			"Longueur hors tout : 7.7\".",
			"Masse : 1.79 lbs."
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
			"label": "Vitesse publiée",
			"value": "RPM: 3,500 CPM",
			"evidenceIds": [
				"october3d-tools-astro-product-727-p1"
			]
		},
		{
			"label": "Capacité de coupe",
			"value": "Steel : 18-gauge",
			"evidenceIds": [
				"october3d-tools-astro-product-727-p1"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "2 cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-727-p1"
			]
		},
		{
			"label": "Arrivée d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"october3d-tools-astro-product-727-p1"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "7.7\"",
			"evidenceIds": [
				"october3d-tools-astro-product-727-p1"
			]
		},
		{
			"label": "Masse",
			"value": "1.79 lbs",
			"evidenceIds": [
				"october3d-tools-astro-product-727-p1"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "2 cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-727-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La fiche ne relie pas une pression de mesure à la consommation publiée.",
			"evidenceIds": [
				"october3d-tools-astro-product-727-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-astro-product-727-p1",
			"sourceUrl": "https://www.astrotools.com/product/onyx-heavy-duty-air-nibbler/",
			"sourceLabel": "Astro Pneumatic, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 b42746c7e95b335b53ff0ae19ef0ede8f41f0f78cd90f271984fcc8505f95a4e. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-astro-product-727-p1"
		],
		"workingPressureBar": [
			"october3d-tools-astro-product-727-p1"
		],
		"demandExplanation": [
			"october3d-tools-astro-product-727-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
