import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-astro-pneumatic-1114a",
	"slug": "cle-a-cliquet-astro-pneumatic-1114a",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Astro Pneumatic 1114A",
	"brand": "Astro Pneumatic",
	"model": "1114A",
	"mpn": "1114A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-astro-pneumatic-1114a.svg",
		"alt": "Repères techniques : Astro Pneumatic 1114A",
		"sourceUrl": "https://www.astrotools.com/product/onyx-1-4-stubby-air-ratchet-wrench/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "astro-pneumatic-1114a",
		"label": "Référence 1114A",
		"distinguishingAttributes": {
			"reference": "1114A",
			"Carré d’entraînement": "1/4\"",
			"Vitesse à vide": "270 RPM"
		}
	},
	"editorial": {
		"overview": "Astro Pneumatic 1114A. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Carré d’entraînement : 1/4\".",
			"Vitesse à vide : 270 RPM.",
			"Masse : 1-1/5 lb. (0.54 kgs)."
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
			"label": "Carré d’entraînement",
			"value": "1/4\"",
			"evidenceIds": [
				"october3d-tools-astro-product-1114a-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "270 RPM",
			"evidenceIds": [
				"october3d-tools-astro-product-1114a-p1"
			]
		},
		{
			"label": "Masse",
			"value": "1-1/5 lb. (0.54 kgs)",
			"evidenceIds": [
				"october3d-tools-astro-product-1114a-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La fiche ne relie pas une pression de mesure à la consommation publiée.",
			"evidenceIds": [
				"october3d-tools-astro-product-1114a-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-astro-product-1114a-p1",
			"sourceUrl": "https://www.astrotools.com/product/onyx-1-4-stubby-air-ratchet-wrench/",
			"sourceLabel": "Astro Pneumatic, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 42b4dd41dcdd0c52011457bf47482598de1cb88ca9f27f24b31933680f130bac. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-astro-product-1114a-p1"
		],
		"workingPressureBar": [
			"october3d-tools-astro-product-1114a-p1"
		],
		"demandExplanation": [
			"october3d-tools-astro-product-1114a-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
