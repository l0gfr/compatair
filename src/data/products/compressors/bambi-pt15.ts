import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "bambi-pt15",
	"slug": "bambi-pt15",
	"brand": "Bambi",
	"model": "PT15",
	"mpn": "PT15",
	"variant": {
		"familyId": "bambi-pt15",
		"label": "Groupe avec cuve 15 L",
		"distinguishingAttributes": {
			"équipement": "Groupe avec cuve 15 L",
			"pressionMaximale": "8 bar",
			"cuve": "15 L"
		}
	},
	"tankLiters": 15,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 1,
			"litersPerMinute": 105
		},
		{
			"pressureBar": 2,
			"litersPerMinute": 95
		},
		{
			"pressureBar": 3,
			"litersPerMinute": 87.5
		},
		{
			"pressureBar": 4,
			"litersPerMinute": 80
		},
		{
			"pressureBar": 5,
			"litersPerMinute": 75
		},
		{
			"pressureBar": 6,
			"litersPerMinute": 70
		},
		{
			"pressureBar": 7,
			"litersPerMinute": 60
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 50
		}
	],
	"dutyCycle": 0.6,
	"oilType": "oil-free",
	"powerKw": 0.75,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/bambi-pt15.svg",
		"alt": "Repères techniques : Bambi PT15",
		"sourceUrl": "https://bambi-air.co.uk/product/pt15/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe avec cuve 15 L",
			"evidenceIds": [
				"october3d-bambi-product-22"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "8 bar relatifs",
			"evidenceIds": [
				"october3d-bambi-product-22"
			]
		},
		{
			"label": "Air livré à 1 bar",
			"value": "105 L/min",
			"evidenceIds": [
				"october3d-bambi-product-22"
			]
		},
		{
			"label": "Air livré à 2 bar",
			"value": "95 L/min",
			"evidenceIds": [
				"october3d-bambi-product-22"
			]
		},
		{
			"label": "Air livré à 3 bar",
			"value": "87,5 L/min",
			"evidenceIds": [
				"october3d-bambi-product-22"
			]
		},
		{
			"label": "Air livré à 4 bar",
			"value": "80 L/min",
			"evidenceIds": [
				"october3d-bambi-product-22"
			]
		},
		{
			"label": "Air livré à 5 bar",
			"value": "75 L/min",
			"evidenceIds": [
				"october3d-bambi-product-22"
			]
		},
		{
			"label": "Air livré à 6 bar",
			"value": "70 L/min",
			"evidenceIds": [
				"october3d-bambi-product-22"
			]
		},
		{
			"label": "Air livré à 7 bar",
			"value": "60 L/min",
			"evidenceIds": [
				"october3d-bambi-product-22"
			]
		},
		{
			"label": "Air livré à 8 bar",
			"value": "50 L/min",
			"evidenceIds": [
				"october3d-bambi-product-22"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "15 L",
			"evidenceIds": [
				"october3d-bambi-product-22"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "60 %, fenêtre non précisée",
			"evidenceIds": [
				"october3d-bambi-product-22"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "240v or 110v",
			"evidenceIds": [
				"october3d-bambi-product-22"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "non précisée",
			"evidenceIds": [
				"october3d-bambi-product-22"
			]
		},
		{
			"label": "Comparaison documentée et limite de choix",
			"value": "Distinguer stockage 15/24 L et débit sous pression identique à 5 bar ; montrer la limitation 60 % sans inventer la durée des cycles.",
			"evidenceIds": [
				"review-20261025-s105"
			]
		}
	],
	"editorial": {
		"overview": "Le PT 15 sans huile publie 75 L/min à 5 bar, 70 L/min à 6 bar et 50 L/min à 8 bar, avec une cuve 15 L. Le PT 24 présenté sur la même page annonce lui aussi 75 L/min à 5 bar, mais avec 24 L. Le plus grand réservoir augmente le stockage, sans hausse du débit publié à cette pression. Le PT 15 reste limité au cycle maximal 60 % annoncé par Bambi ; un usage permanent ne se déduit pas de la courbe de débit.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 15 L.",
			"Pression maximale de fonctionnement publiée : 8 bar."
		],
		"limitations": [
			"La page ne définit pas la fenêtre de temps du cycle 60 % : aucun nombre de minutes de marche ou de repos n’est calculé.",
			"La comparaisonPT24 se limite à la vignette primaire actuellement lue :75 L/min à 5 bar, 1 HP,24 L. Sa courbe complète et son cycle ne sont pas revalidés par cette vignette.",
			"Les conditions ISO 1217 et la fréquence ne sont pas précisées. Aucun passage implicite à 50 Hz ni extrapolation au-delà de 8 bar.",
			"Les points de débit conservés concernent le PT 15 ; disponibilité et raccordement local à confirmer."
		]
	},
	"evidence": [
		{
			"id": "october3d-bambi-product-22",
			"sourceUrl": "https://bambi-air.co.uk/product/pt15/",
			"sourceLabel": "Bambi, PT15, fiche constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 a6b714e0fd45cefb73a70b4d49bad44642dd109884190dcabc6e3180c596ccda de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s105",
			"sourceUrl": "https://bambi-air.co.uk/product/pt15/",
			"sourceLabel": "Bambi, relecture primaire du 25 octobre 2026, s105",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 d5c5a9521453b98d58e23ef5f742a0157b1ca88e0fd8264b27b252358f58cd53. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-bambi-product-22"
		],
		"tankLiters": [
			"october3d-bambi-product-22"
		],
		"fadCurve": [
			"october3d-bambi-product-22"
		],
		"dutyCycle": [
			"october3d-bambi-product-22"
		],
		"oilType": [
			"october3d-bambi-product-22"
		],
		"powerKw": [
			"october3d-bambi-product-22"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
