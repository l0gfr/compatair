import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-astro-pneumatic-205ql",
	"slug": "meuleuse-astro-pneumatic-205ql",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Astro Pneumatic 205QL",
	"brand": "Astro Pneumatic",
	"model": "205QL",
	"mpn": "205QL",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-astro-pneumatic-205ql.svg",
		"alt": "Repères techniques : Astro Pneumatic 205QL",
		"sourceUrl": "https://www.astrotools.com/product/onyx-quick-lock-1-4-90-quiet-die-grinder/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "astro-pneumatic-205ql",
		"label": "Référence 205QL",
		"distinguishingAttributes": {
			"reference": "205QL",
			"Pince": "1/4\"",
			"Vitesse à vide": "20000 rpm"
		}
	},
	"editorial": {
		"overview": "Astro Pneumatic 205QL. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Pince : 1/4\".",
			"Vitesse à vide : 20000 rpm.",
			"Longueur hors tout : 6.65”.",
			"Niveau sonore déclaré : 78dB.",
			"Masse : 1.3lbs.",
			"Puissance : 0.35 HP.",
			"Consommation moyenne, hors calcul : 2.4CFM.",
			"Pression d’air publiée : (psi): 90."
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
				"october3d-tools-astro-product-205ql-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "20000 rpm",
			"evidenceIds": [
				"october3d-tools-astro-product-205ql-p1"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "6.65”",
			"evidenceIds": [
				"october3d-tools-astro-product-205ql-p1"
			]
		},
		{
			"label": "Niveau sonore déclaré",
			"value": "78dB",
			"evidenceIds": [
				"october3d-tools-astro-product-205ql-p1"
			]
		},
		{
			"label": "Masse",
			"value": "1.3lbs",
			"evidenceIds": [
				"october3d-tools-astro-product-205ql-p1"
			]
		},
		{
			"label": "Puissance",
			"value": "0.35 HP",
			"evidenceIds": [
				"october3d-tools-astro-product-205ql-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "2.4CFM",
			"evidenceIds": [
				"october3d-tools-astro-product-205ql-p1"
			]
		},
		{
			"label": "Pression d’air publiée",
			"value": "(psi): 90",
			"evidenceIds": [
				"october3d-tools-astro-product-205ql-p1"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "2.4 cfm",
			"evidenceIds": [
				"october3d-tools-astro-product-205ql-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure (psi): 90",
			"evidenceIds": [
				"october3d-tools-astro-product-205ql-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-astro-product-205ql-p1",
			"sourceUrl": "https://www.astrotools.com/product/onyx-quick-lock-1-4-90-quiet-die-grinder/",
			"sourceLabel": "Astro Pneumatic, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 84d54ebca46555f97e8745eba2d604546ca0831e286c9db6d51854f13aa2d147. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-astro-product-205ql-p1"
		],
		"workingPressureBar": [
			"october3d-tools-astro-product-205ql-p1"
		],
		"demandExplanation": [
			"october3d-tools-astro-product-205ql-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
