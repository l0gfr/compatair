import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "fiac-ax-203bd-dry-10-400-50-ce",
	"slug": "fiac-ax-203bd-dry-10-400-50-ce",
	"brand": "FIAC",
	"model": "AX 203BD DRY 10 400/50 CE",
	"mpn": "4152026242",
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/fiac-ax-203bd-dry-10-400-50-ce.webp",
		"alt": "Repères techniques FIAC AX 203BD DRY 10 400/50 CE, référence 4152026242",
		"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026242/ax-203bd-dry-10-40050-ce",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "La référence FIAC 4152026242 est la version DRY de 15 kW, sans cuve intégrée, annoncée pour un maximum de 10 bar. La fiche web publie 2 100 L/min ; le catalogue AIRBLOK donne 2 110 L/min pour ce même code. La version 4152026243 est annoncée pour 13 bar et 1 690 L/min. Ces débits ne sont pas associés explicitement à une pression de mesure dans les blocs lus : ils ne constituent pas ici une courbe FAD utilisable pour dimensionner un poste.",
		"verifiedFacts": [
			"Débits publiés non qualifiés pour le calcul : 2 100 L/min sur le web, 2 110 L/min au catalogue; pression de mesure non établie.",
			"Compresseur rotatif à vis lubrifié à vitesse fixe. Puissance moteur publiée : 15 kW.",
			"Masse nette publiée : 297 kg.",
			"Alimentation publiée : 400 V, 50 Hz, triphasée."
		],
		"limitations": [
			"Écart entre sources primaires conservé : 2 100 L/min sur le web, 2 110 L/min au catalogue. Aucune valeur n’est choisie arbitrairement.",
			"Le maximum de 10 bar décrit la version ; il ne documente pas la pression d’essai du FAD. La courbe de calcul reste vide.",
			"Le code de commande identifie la configuration malgré les appellations AX et AIRBLOK. Le taux de marche et la disponibilité restent à confirmer.",
			"Pour lever la réserve, obtenir une fiche révisée du code 4152026242 associant le débit, sa pression de mesure et le protocole d’essai, puis clarifier l’écart entre les deux valeurs publiées."
		]
	},
	"specifications": [
		{
			"label": "Débits publiés et conflit documentaire",
			"value": "Code 4152026242 : 2 100 L/min sur le web contre 2 110 L/min au catalogue, page 35. Le maximum de fonctionnement de 10 bar est distinct de la pression d’essai; aucun point FAD n’est retenu.",
			"evidenceIds": [
				"review-20261025-s027",
				"review-20261025-s028-p35",
				"reserved-20261025-fiac-current10"
			]
		},
		{
			"label": "Équipement",
			"value": "Sans cuve intégrée. Version DRY avec sécheur intégré.",
			"evidenceIds": [
				"fiac-4152026242-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1065 × 615 × 1070 mm (L × l × H)",
			"evidenceIds": [
				"fiac-4152026242-20260926"
			]
		},
		{
			"label": "Comparaison documentée et limite de choix",
			"value": "Éviter de sélectionner une version 10 bar pour un débit de calcul issu d’une association implicite ; distinguer les codes 4152026242 et 4152026243.",
			"evidenceIds": [
				"review-20261025-s027",
				"review-20261025-s028-p35",
				"review-20261025-s029"
			]
		}
	],
	"evidence": [
		{
			"id": "fiac-4152026242-20260926",
			"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026242/ax-203bd-dry-10-40050-ce",
			"sourceLabel": "FIAC, fiche officielle 4152026242, réf. 4152026242",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche individuelle 4152026242 publie un FAD de 2100 L/min pour cette version de 10 bar. Débit restitué fabricant, pas débit aspiré."
		},
		{
			"id": "fiac-4152026242-20260926-oiltype-1",
			"sourceUrl": "https://web.fiac.it/content/dam/brands/fiac/website/documents/Fiac_Cat%20S226-R1-062026%20-%20screen__compressed.pdf#page=35",
			"sourceLabel": "FIAC, catalogue S226-R1-062026, p. 35",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Mode lubrifié documenté par les huiles prévues pour cette famille."
		},
		{
			"id": "review-20261025-s027",
			"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026242/ax-203bd-dry-10-40050-ce",
			"sourceLabel": "FIAC, relecture primaire du 25 octobre 2026, s027",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 26826c9b338b56ddeb7ea30e9f76881ee96af368fcbe9ee7b80b7138cf4cf623. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s028-p35",
			"sourceUrl": "https://web.fiac.it/content/dam/brands/fiac/website/documents/Fiac_Cat%20S226-R1-062026%20-%20screen__compressed.pdf#page=35",
			"sourceLabel": "FIAC, relecture primaire du 25 octobre 2026, s028, page PDF 35",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 55421a11ceb9c201bd873f1d0e4596ea6682b7fd68fc5e03e0c380ddf879ac85. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s029",
			"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026243/ax-203bd-dry-13-40050-ce",
			"sourceLabel": "FIAC, relecture primaire du 25 octobre 2026, s029",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 a60b25d18496e4d9a1db8ec68fe5698a890cab94d4b1dbb2ce0bc039f7bd1ec3. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		},
		{
			"id": "reserved-20261025-fiac-current10",
			"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026242/ax-203bd-dry-10-40050-ce",
			"sourceLabel": "Relecture primaire du 25 octobre 2026 : fiac-current10",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps complet SHA-256 1290a729ca6a052910dc22cc9bc4dbf42fc670c593886e97425c12a0f8242588. Code 4152026242, maximum 10 bar et FAD capacity 2100 L/min présentés séparément; aucune pression d’essai explicitement associée au débit dans le bloc lu. Données déclarées, aucun essai physique CompatAir."
		},
		{
			"id": "reserved-20261025-fiac-current13",
			"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026243/ax-203bd-dry-13-40050-ce",
			"sourceLabel": "Relecture primaire du 25 octobre 2026 : fiac-current13",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps complet SHA-256 4766d6cbdcd939270ad096d8979b620b2a8c15822d4d790b1ea04c060c3cf908. Code 4152026243, maximum 13 bar et débit 1690 L/min; aucune pression d’essai explicitement associée dans le bloc lu. Données déclarées, aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiac-4152026242-20260926"
		],
		"tankLiters": [
			"fiac-4152026242-20260926"
		],
		"maxPressureBar": [
			"fiac-4152026242-20260926"
		],
		"oilType": [
			"fiac-4152026242-20260926-oiltype-1"
		],
		"powerKw": [
			"fiac-4152026242-20260926"
		],
		"weightKg": [
			"fiac-4152026242-20260926"
		],
		"voltage": [
			"fiac-4152026242-20260926"
		],
		"phase": [
			"fiac-4152026242-20260926"
		],
		"fadCurve": [
			"review-20261025-s027",
			"review-20261025-s028-p35",
			"review-20261025-s029"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 15,
	"weightKg": 297,
	"voltage": "400 V, 50 Hz",
	"phase": "three-phase"
};

export default product;
