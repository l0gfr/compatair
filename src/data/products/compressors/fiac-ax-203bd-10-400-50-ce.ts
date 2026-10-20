import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "fiac-ax-203bd-10-400-50-ce",
	"slug": "fiac-ax-203bd-10-400-50-ce",
	"brand": "FIAC",
	"model": "AX 203BD 10 400/50 CE",
	"mpn": "4152026233",
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 2110
		}
	],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/fiac-ax-203bd-10-400-50-ce.webp",
		"alt": "Repères techniques FIAC AX 203BD 10 400/50 CE, référence 4152026233",
		"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026233/ax-203bd-10-40050-ce",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "FIAC 4152026233 : version de base sans sécheur ni cuve, avec 2 110 L/min à 10 bar, moteur de 15 kW et alimentation 400 V triphasée à 50 Hz. Le montage DRY 4152026242 ajoute le sécheur ; les masses publiées sont de 270 et 297 kg.",
		"verifiedFacts": [
			"Débit restitué publié : 2 110 L/min à 10 bar.",
			"Compresseur rotatif à vis lubrifié à vitesse fixe. Puissance moteur publiée : 15 kW.",
			"Masse publiée : 270 kg.",
			"Alimentation publiée : 400 V, 50 Hz, triphasée."
		],
		"limitations": [
			"Le catalogue utilise AIRBLOK 203 BD et l’URL porte AX ; le code commande identifie la version.",
			"Pour le DRY 4152026242, la fiche web publie 2 100 L/min et le catalogue 2 110 L/min à 10 bar. Cet écart reste à faire clarifier ; les profils ne sont pas fusionnés.",
			"Les 270 kg sont une masse publiée dont la base nette reste à confirmer. Le groupe de base conserve 2 110 L/min, concordants entre sa fiche et le catalogue.",
			"Le taux de marche reste inconnu. Réservoir externe, traitement d’air et équipements livrés sont à préciser sur le devis."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "La fiche individuelle 4152026233 publie un FAD de 2110 L/min pour cette version de 10 bar. Débit restitué fabricant, pas débit aspiré.",
			"evidenceIds": [
				"fiac-4152026233-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Sans cuve intégrée. Version de base ; sécheur non intégré.",
			"evidenceIds": [
				"fiac-4152026233-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "1065 × 615 × 1070 mm (L × l × H)",
			"evidenceIds": [
				"fiac-4152026233-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiac-4152026233-20260926",
			"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026233/ax-203bd-10-40050-ce",
			"sourceLabel": "FIAC, fiche officielle 4152026233, réf. 4152026233",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche individuelle 4152026233 publie un FAD de 2110 L/min pour cette version de 10 bar. Débit restitué fabricant, pas débit aspiré."
		},
		{
			"id": "fiac-4152026233-20260926-oiltype-1",
			"sourceUrl": "https://web.fiac.it/content/dam/brands/fiac/website/documents/Fiac_Cat%20S226-R1-062026%20-%20screen__compressed.pdf#page=34",
			"sourceLabel": "FIAC, catalogue S226-R1-062026, p. 34",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Mode lubrifié documenté par les huiles prévues pour cette famille."
		},
		{
			"id": "fiac-4152026242-20260926-review-20261020-for-fiac-ax-203bd-10-400-50-ce",
			"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026242/ax-203bd-dry-10-40050-ce",
			"sourceLabel": "FIAC, fiche officielle 4152026242, réf. 4152026242",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-20",
			"confidence": "A",
			"notes": "Fiche voisine consultée en HTTPS le 19 octobre 2026 ; SHA-256 du corps : 434de8211721ae54fe4683e24c5d926b53212a3e08628b9a3acc4f0ddb583bcd. Configurations comparées séparément."
		},
		{
			"id": "editorial-20261020-fiac-203bd-dry-p35",
			"sourceUrl": "https://web.fiac.it/content/dam/brands/fiac/website/documents/Fiac_Cat%20S226-R1-062026%20-%20screen__compressed.pdf#page=35",
			"sourceLabel": "FIAC, catalogue S226 de juin2026, pagePDF35, AIRBLOK203BDDRY",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-20",
			"confidence": "A",
			"notes": "Code4152026242,10bar :2110L/min dans le catalogue ; la fiche individuelle actuelle indique2100L/min. Écart conservé sans moyenne."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiac-4152026233-20260926"
		],
		"tankLiters": [
			"fiac-4152026233-20260926"
		],
		"maxPressureBar": [
			"fiac-4152026233-20260926"
		],
		"fadCurve": [
			"fiac-4152026233-20260926"
		],
		"oilType": [
			"fiac-4152026233-20260926-oiltype-1"
		],
		"powerKw": [
			"fiac-4152026233-20260926"
		],
		"weightKg": [
			"fiac-4152026233-20260926"
		],
		"voltage": [
			"fiac-4152026233-20260926"
		],
		"phase": [
			"fiac-4152026233-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 15,
	"weightKg": 270,
	"voltage": "400 V, 50 Hz",
	"phase": "three-phase"
};

export default product;
