import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-astro-pneumatic-206ql",
	"slug": "meuleuse-astro-pneumatic-206ql",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Astro Pneumatic 206QL",
	"brand": "Astro Pneumatic",
	"model": "206QL",
	"mpn": "206QL",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-astro-pneumatic-206ql.svg",
		"alt": "Repères techniques : Astro Pneumatic 206QL",
		"sourceUrl": "https://www.astrotools.com/product/onyx-quick-lock-1-4-straight-quiet-die-grinder/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "astro-pneumatic-206ql",
		"label": "Référence 206QL",
		"distinguishingAttributes": {
			"reference": "206QL",
			"Pince": "1/4\"",
			"Vitesse à vide": "25000 RPM"
		}
	},
	"editorial": {
		"overview": "Astro Pneumatic 206QL. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Pince : 1/4\".",
			"Vitesse à vide : 25000 RPM.",
			"Longueur hors tout : 7.28\".",
			"Niveau sonore déclaré : 78 dB.",
			"Masse : 1.2 lbs.",
			"Puissance : 0.35 HP.",
			"Consommation moyenne, hors calcul : 2.8 CFM.",
			"Pression d’air publiée : 90 psi."
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
			"label": "Pince",
			"value": "1/4\"",
			"evidenceIds": [
				"october3d-tools-astro-product-206ql-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "25000 RPM",
			"evidenceIds": [
				"october3d-tools-astro-product-206ql-p1"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "7.28\"",
			"evidenceIds": [
				"october3d-tools-astro-product-206ql-p1"
			]
		},
		{
			"label": "Niveau sonore déclaré",
			"value": "78 dB",
			"evidenceIds": [
				"october3d-tools-astro-product-206ql-p1"
			]
		},
		{
			"label": "Masse",
			"value": "1.2 lbs",
			"evidenceIds": [
				"october3d-tools-astro-product-206ql-p1"
			]
		},
		{
			"label": "Puissance",
			"value": "0.35 HP",
			"evidenceIds": [
				"october3d-tools-astro-product-206ql-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "2.8 CFM",
			"evidenceIds": [
				"october3d-tools-astro-product-206ql-p1"
			]
		},
		{
			"label": "Pression d’air publiée",
			"value": "90 psi",
			"evidenceIds": [
				"october3d-tools-astro-product-206ql-p1"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "2.8 cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-206ql-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure : 90 psi",
			"evidenceIds": [
				"october3d-tools-astro-product-206ql-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-astro-product-206ql-p1",
			"sourceUrl": "https://www.astrotools.com/product/onyx-quick-lock-1-4-straight-quiet-die-grinder/",
			"sourceLabel": "Astro Pneumatic, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 59ff5c6849f7ace182148beb5c132425e567bc0f7a9b7e2b5be3103791fc521b. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-astro-product-206ql-p1"
		],
		"workingPressureBar": [
			"october3d-tools-astro-product-206ql-p1"
		],
		"demandExplanation": [
			"october3d-tools-astro-product-206ql-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
