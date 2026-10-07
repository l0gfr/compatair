import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "worthington-creyssensac-rollair-26-v-frequence-non-precisee-10-bar-groupe-au-sol",
	"slug": "worthington-creyssensac-rollair-26-v-frequence-non-precisee-10-bar-groupe-au-sol",
	"brand": "Worthington Creyssensac",
	"model": "Rollair 26 V",
	"variant": {
		"familyId": "worthington-creyssensac-rollair-26-v",
		"label": "Groupe au sol, 10 bar",
		"distinguishingAttributes": {
			"équipement": "Groupe au sol",
			"pressionMaximale": "10 bar",
			"cuve": "0 L",
			"régulation": "vitesse variable"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 5.5,
			"litersPerMinute": 3650
		},
		{
			"pressureBar": 7,
			"litersPerMinute": 3666.667
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 3400
		},
		{
			"pressureBar": 9.5,
			"litersPerMinute": 3133.333
		}
	],
	"oilType": "oil",
	"powerKw": 18.5,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/worthington-creyssensac-rollair-26-v-frequence-non-precisee-10-bar-groupe-au-sol.webp",
		"alt": "Repères techniques : Worthington Creyssensac Rollair 26 V, Groupe au sol, 10 bar",
		"sourceUrl": "https://www.worthington-creyssensac.com/content/dam/brands/Worthington%20Creyssensac/new-website-content-/documentations-leaflets/ROLLAIR_16-31.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe au sol",
			"evidenceIds": [
				"october3c-worthington-rollair16-31-p11"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "10 bar relatifs",
			"evidenceIds": [
				"october3c-worthington-rollair16-31-p11"
			]
		},
		{
			"label": "Air livré à 5,5 bar",
			"value": "219 m³/h",
			"evidenceIds": [
				"october3c-worthington-rollair16-31-p11"
			]
		},
		{
			"label": "Air livré à 7 bar",
			"value": "220 m³/h",
			"evidenceIds": [
				"october3c-worthington-rollair16-31-p11"
			]
		},
		{
			"label": "Air livré à 8 bar",
			"value": "204 m³/h",
			"evidenceIds": [
				"october3c-worthington-rollair16-31-p11"
			]
		},
		{
			"label": "Air livré à 9,5 bar",
			"value": "188 m³/h",
			"evidenceIds": [
				"october3c-worthington-rollair16-31-p11"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Groupe au sol ; réservoir externe exclu",
			"evidenceIds": [
				"october3c-worthington-rollair16-31-p11"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "Documentation constructeur européenne ; commercialisation actuelle à confirmer",
			"evidenceIds": [
				"october3c-worthington-rollair16-31-p11"
			]
		}
	],
	"editorial": {
		"overview": "Worthington Creyssensac Rollair 26 V, Groupe au sol, 10 bar. 3 650 L/min à 5,5 bar ; 3 666,667 L/min à 7 bar ; 3 400 L/min à 8 bar ; 3 133,333 L/min à 9,5 bar.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Configuration de stockage documentée : groupe au sol sans réservoir de stockage intégré.",
			"Pression maximale de fonctionnement publiée : 10 bar."
		],
		"limitations": [
			"Cycle de service du groupe complet non établi ; la tenue permanente reste indéterminée.",
			"Les points de vitesse variable sont regroupés dans une courbe. Le maximum publié à chaque pression est conservé ; le comportement à faible charge n’est pas simulé.",
			"Fréquence de ces performances non précisée par la source retenue ; aucune transposition 50/60 Hz.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Configuration publiée dans la documentation citée ; disponibilité commerciale actuelle à confirmer."
		]
	},
	"evidence": [
		{
			"id": "october3c-worthington-rollair16-31-p11",
			"sourceUrl": "https://www.worthington-creyssensac.com/content/dam/brands/Worthington%20Creyssensac/new-website-content-/documentations-leaflets/ROLLAIR_16-31.pdf#page=11",
			"sourceLabel": "Worthington Creyssensac ROLLAIR 16–31 / V, page PDF 11",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 d5bb68c7803de2b2c97591c778edd05fd9f0193d5eb536bee0e72b7ff33d8bec de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3c-worthington-rollair16-31-p5",
			"sourceUrl": "https://www.worthington-creyssensac.com/content/dam/brands/Worthington%20Creyssensac/new-website-content-/documentations-leaflets/ROLLAIR_16-31.pdf#page=5",
			"sourceLabel": "Worthington Creyssensac ROLLAIR 16–31 / V, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 d5bb68c7803de2b2c97591c778edd05fd9f0193d5eb536bee0e72b7ff33d8bec de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october3c-worthington-rollair16-31-p11"
		],
		"maxPressureBar": [
			"october3c-worthington-rollair16-31-p11"
		],
		"fadCurve": [
			"october3c-worthington-rollair16-31-p11"
		],
		"powerKw": [
			"october3c-worthington-rollair16-31-p11"
		],
		"oilType": [
			"october3c-worthington-rollair16-31-p5"
		]
	},
	"notes": [
		"Pression de mesure, pression maximale relative et pression absolue à l’entrée restent distinctes. ISO 1217 n’est revendiquée que pour les sources qui le citent."
	]
};

export default product;
