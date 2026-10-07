import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-astro-pneumatic-4320",
	"slug": "derouilleur-a-aiguilles-astro-pneumatic-4320",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Astro Pneumatic 4320",
	"brand": "Astro Pneumatic",
	"model": "4320",
	"mpn": "4320",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/derouilleur-a-aiguilles-astro-pneumatic-4320.svg",
		"alt": "Repères techniques : Astro Pneumatic 4320",
		"sourceUrl": "https://www.astrotools.com/product/in-line-needle-scaler/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "astro-pneumatic-4320",
		"label": "Référence 4320",
		"distinguishingAttributes": {
			"reference": "4320",
			"Cadence de frappe": "4200bpm",
			"Longueur": "12-1/4\" (313mm)"
		}
	},
	"editorial": {
		"overview": "Astro Pneumatic 4320. Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Cadence de frappe : 4200bpm.",
			"Longueur : 12-1/4\" (313mm).",
			"Consommation publiée, hors calcul : 0.12m³/min."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"La consommation moyenne ou sans régime publié reste hors calcul ; aucun débit en charge à pression de mesure connue n’est extrapolé.",
			"Une pression recommandée ou de service n’est pas un point de mesure de la consommation.",
			"Cellules écartées sans arbitrage en raison d’une incohérence d’unité, de conversion ou de libellé : Net Weight: 12-1/3lbs. (1.14kg). Les originaux sont conservés pour vérification.",
			"La fiche publie 0,12 m³/min ; le régime en charge et la pression de mesure ne sont pas établis. La valeur et son unité restent documentées, sans demande d’air calculable.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Cadence de frappe",
			"value": "4200bpm",
			"evidenceIds": [
				"october3d-tools-astro-product-4320-p1"
			]
		},
		{
			"label": "Longueur",
			"value": "12-1/4\" (313mm)",
			"evidenceIds": [
				"october3d-tools-astro-product-4320-p1"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "0.12m³/min",
			"evidenceIds": [
				"october3d-tools-astro-product-4320-p1"
			]
		},
		{
			"label": "Consommation publiée, hors calcul",
			"value": "0.12 m3/min",
			"evidenceIds": [
				"october3d-tools-astro-product-4320-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La fiche ne relie pas une pression de mesure à la consommation publiée.",
			"evidenceIds": [
				"october3d-tools-astro-product-4320-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-astro-product-4320-p1",
			"sourceUrl": "https://www.astrotools.com/product/in-line-needle-scaler/",
			"sourceLabel": "Astro Pneumatic, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 b9b0a25189d5adf610d857fd342d5b0b940df157451869d967ca9294e09c05b7. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-astro-product-4320-p1"
		],
		"workingPressureBar": [
			"october3d-tools-astro-product-4320-p1"
		],
		"demandExplanation": [
			"october3d-tools-astro-product-4320-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
