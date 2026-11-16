import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-astro-pneumatic-936",
	"slug": "scie-astro-pneumatic-936",
	"categoryId": "scie",
	"category": "scie",
	"label": "Astro Pneumatic 936",
	"brand": "Astro Pneumatic",
	"model": "936",
	"mpn": "936",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-astro-pneumatic-936-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Astro Pneumatic 936",
		"sourceUrl": "https://www.astrotools.com/product/onyx-gear-driven-heavy-duty-air-saw/",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "astro-pneumatic-936",
		"label": "Référence 936",
		"distinguishingAttributes": {
			"reference": "936",
			"Cadence mécanique": "7,000",
			"Arrivée d’air": "1/4\""
		}
	},
	"editorial": {
		"overview": "La 936 est une scie alternative de 310 mm et 3 lb, à course 10 mm et cadence 7 000/min. La capacité publiée de 1/4 pouce ne doit pas être étendue à tout matériau sans prescription de lame. L’AF7 et la SA347 ont d’autres gabarits et cadences. La fiche ne fournit pas de point consommation–pression utilisable ; le moteur reste non conclusif.",
		"verifiedFacts": [
			"Cadence mécanique : 7,000.",
			"Arrivée d’air : 1/4\".",
			"Masse nette : 3.0 lbs.",
			"Longueur : 12.2\" (310mm).",
			"Course : Length: 10mm.",
			"Capacité de coupe : 1/4\" (6.4mm)."
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
			"label": "Cadence mécanique",
			"value": "7,000",
			"evidenceIds": [
				"october3d-tools-astro-product-936-p1"
			]
		},
		{
			"label": "Arrivée d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"october3d-tools-astro-product-936-p1"
			]
		},
		{
			"label": "Masse nette",
			"value": "3.0 lbs",
			"evidenceIds": [
				"october3d-tools-astro-product-936-p1"
			]
		},
		{
			"label": "Longueur",
			"value": "12.2\" (310mm)",
			"evidenceIds": [
				"october3d-tools-astro-product-936-p1"
			]
		},
		{
			"label": "Course",
			"value": "Length: 10mm",
			"evidenceIds": [
				"october3d-tools-astro-product-936-p1"
			]
		},
		{
			"label": "Capacité de coupe",
			"value": "1/4\" (6.4mm)",
			"evidenceIds": [
				"october3d-tools-astro-product-936-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La fiche ne relie pas une pression de mesure à la consommation publiée.",
			"evidenceIds": [
				"october3d-tools-astro-product-936-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-astro-product-936-p1",
			"sourceUrl": "https://www.astrotools.com/product/onyx-gear-driven-heavy-duty-air-saw/",
			"sourceLabel": "Astro Pneumatic, fiche constructeur officielle",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 4b1dda85f66db0d963b75f1d8e5bb60449afe665b1b527d7a1320f2ae19efeef. Déclaration constructeur, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:scie-astro-pneumatic-936:0",
			"sourceUrl": "https://www.astrotools.com/product/onyx-gear-driven-heavy-duty-air-saw/",
			"sourceLabel": "Astro Pneumatic, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La 936 est une scie alternative de 310 mm et 3 lb, à course 10 mm et cadence 7 000/min. La capacité publiée de 1/4 pouce ne doit pas être étendue à tout matériau sans prescription de lame. L’AF7 et la SA347 ont d’autres gabarits et cadences. La fiche ne fournit pas de point consommation–pression utilisable ; le moteur reste non conclusif. GET complet SHA-256 ed0b363e6bae2945c915930c69b711e9439ad99b7fa3e6dac1e609fdb76dbf66. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-astro-product-936-p1"
		],
		"workingPressureBar": [
			"october3d-tools-astro-product-936-p1"
		],
		"demandExplanation": [
			"october3d-tools-astro-product-936-p1"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;
