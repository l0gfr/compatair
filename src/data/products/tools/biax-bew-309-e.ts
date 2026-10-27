import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-bew-309-e",
	"slug": "biax-bew-309-e",
	"brand": "BIAX",
	"model": "BEW 309 E",
	"mpn": "150800726",
	"categoryId": "ebavureuse",
	"category": "ebavureuse",
	"label": "BIAX BEW 309 E",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-bew-309-e.webp",
		"alt": "Repères techniques BIAX BEW 309 E, référence 150800726",
		"sourceUrl": "https://biax.de/en/product/bew-309-e-bis-senk-o-11-mm/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "La BEW 309 E, réf. 150800726, est une ébavureuse d’angle réglable de 0 à 900 tr/min, avec queue hexagonale de 3 mm et masse de 240 g. La hauteur de tête avec fraise est publiée à 20 ou 21,5 mm selon l’accessoire, contre 40 ou 48 mm pour la BEW 605 à pince de 6 mm. Ce sont des différences de passage disponible et de porte-outil à confronter à la pièce. Les 150 L/min publiés ne sont pas qualifiés de consommation en charge et ne permettent pas de dimensionner automatiquement le compresseur.",
		"verifiedFacts": [
			"Référence fabricant 150800726; 20 W; vitesse réglable de 0 à 900 tr/min; masse 240 g.",
			"Queue hexagonale de 3 mm, distincte de la pince de 6 mm de la BEW 605.",
			"Hauteur avec fraise : 20 ou 21,5 mm selon l’accessoire; le choix dépend de la géométrie réelle de la pièce."
		],
		"limitations": [
			"Consigne de fonctionnement à 6 bar; le catalogue ne précise pas le régime de mesure des 150 L/min. Le calcul reste insuffisant.",
			"Le diamètre maximal du trou diffère entre sources : 11 mm sur la fiche web, 10 mm dans le catalogue page 41. Faire confirmer la capacité pour la référence et la fraise choisies.",
			"Aucun essai physique CompatAir; respecter la vitesse et les prescriptions de l’accessoire."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"evidenceIds": [
				"biax-150800726-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 150 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150800726-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "20 W",
			"evidenceIds": [
				"biax-150800726-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "Réglable de 0 à 900 tr/min",
			"evidenceIds": [
				"biax-150800726-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "240 g",
			"evidenceIds": [
				"biax-150800726-20260926"
			]
		},
		{
			"label": "Queue d’outil publiée",
			"value": "3 mm hexagonal",
			"evidenceIds": [
				"biax-150800726-20260926"
			]
		},
		{
			"label": "Encombrement de tête avec fraise",
			"value": "BEW 309 E : 20 / 21,5 mm selon la fraise; BEW 605 : 40 / 48 mm. La hauteur sans fraise de 15 mm ne doit pas remplacer ces cotes de travail.",
			"evidenceIds": [
				"reserved-20261025-biax-bew309",
				"reserved-20261025-biax-bew605",
				"reserved-20261025-biax-catalog-current-p40",
				"reserved-20261025-biax-catalog-current-p41"
			]
		},
		{
			"label": "Capacité de trou : divergence documentaire",
			"value": "BEW 309 E : maximum 11 mm sur la fiche web; 10 mm dans le catalogue page 41. Capacité non arbitrée.",
			"evidenceIds": [
				"reserved-20261025-biax-bew309",
				"reserved-20261025-biax-catalog-current-p41"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150800726-20260926",
			"sourceUrl": "https://biax.de/en/product/bew-309-e-bis-senk-o-11-mm/",
			"sourceLabel": "BIAX, fiche technique BEW 309 E – up to sink-Ø 11 mm, réf. 150800726",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 150 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150800726-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=40",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 40",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		},
		{
			"id": "reserved-20261025-biax-bew309",
			"sourceUrl": "https://biax.de/en/product/bew-309-e-bis-senk-o-11-mm/",
			"sourceLabel": "Relecture primaire du 25 octobre 2026 : biax-bew309",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps complet SHA-256 7177738118ee779691b3cfca59e07f067821072d84527c374977ebe9702f8862. Bloc technique BEW 309 E: 20 W, 150 L/min, réglage 0–900 tr/min, 240 g, queue hexagonale 3 mm; diamètre maximal du trou 11 mm; hauteur avec fraise 20/21,5 mm. Le régime de consommation est non qualifié. Données déclarées, aucun essai physique CompatAir."
		},
		{
			"id": "reserved-20261025-biax-bew605",
			"sourceUrl": "https://biax.de/en/product/bew-605-bis-senk-o-24-mm/",
			"sourceLabel": "Relecture primaire du 25 octobre 2026 : biax-bew605",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps complet SHA-256 5571002e748aad205d697dca124aadbd353d9694cedee1b88373dfe88ed88f48. Bloc technique BEW 605: 80 W, 300 L/min, 0–500 tr/min, 820 g, pince 6 mm; hauteur avec fraise 40/48 mm. Comparaison documentaire de géométrie et interface uniquement. Données déclarées, aucun essai physique CompatAir."
		},
		{
			"id": "reserved-20261025-biax-catalog-current-p40",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=40",
			"sourceLabel": "Relecture primaire du 25 octobre 2026 : biax-catalog-current, page PDF 40",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps complet SHA-256 318971fb9ba951f395b81cbca3d1e57938ce23b74db3aef25ff98bb8f0edc6c8. Page 24: SBRD 820 réf. 150021135, 310 W, conflit avec 300 W HTML conservé. Pages 40–41: BEW 309 E réf. 150800726, 150 L/min, 20 W, 0–900 tr/min; fonctionnement/lubrification à 6 bar, sans qualification de consommation en charge; diamètre maximal du trou 10 mm, conflit avec 11 mm HTML. Ne pas mélanger BEW 309 EL150 ou SBRH avec les références étudiées. Données déclarées, aucun essai physique CompatAir."
		},
		{
			"id": "reserved-20261025-biax-catalog-current-p41",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=41",
			"sourceLabel": "Relecture primaire du 25 octobre 2026 : biax-catalog-current, page PDF 41",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps complet SHA-256 318971fb9ba951f395b81cbca3d1e57938ce23b74db3aef25ff98bb8f0edc6c8. Page 24: SBRD 820 réf. 150021135, 310 W, conflit avec 300 W HTML conservé. Pages 40–41: BEW 309 E réf. 150800726, 150 L/min, 20 W, 0–900 tr/min; fonctionnement/lubrification à 6 bar, sans qualification de consommation en charge; diamètre maximal du trou 10 mm, conflit avec 11 mm HTML. Ne pas mélanger BEW 309 EL150 ou SBRH avec les références étudiées. Données déclarées, aucun essai physique CompatAir."
		},
		{
			"id": "review-20261027-biax-deburring-category",
			"sourceUrl": "https://biax.de/en/product/bew-309-e-bis-senk-o-11-mm/",
			"sourceLabel": "BIAX BEW309E, classement Angled Deburrers",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-27",
			"confidence": "B",
			"notes": "Corps relu le27octobre2026, SHA-256 a11b53f80358d4226e2c0045ecffcc0ed61becd67055424b508342b2fc83e990. Correction limitée à la catégorie de l’outil ; les150L/min restent de régime non précisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150800726-20260926"
		],
		"workingPressureBar": [
			"biax-150800726-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"reserved-20261025-biax-bew309",
			"reserved-20261025-biax-catalog-current-p41"
		],
		"airflowBasis": [
			"reserved-20261025-biax-bew309",
			"reserved-20261025-biax-catalog-current-p41"
		],
		"categoryId": [
			"review-20261027-biax-deburring-category"
		],
		"category": [
			"review-20261027-biax-deburring-category"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 150,
		"typical": 150,
		"max": 150
	},
	"airflowBasis": "unqualified"
};

export default product;
