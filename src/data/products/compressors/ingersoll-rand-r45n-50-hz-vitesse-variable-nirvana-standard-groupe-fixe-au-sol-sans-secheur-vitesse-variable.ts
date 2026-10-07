import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "ingersoll-rand-r45n-50-hz-vitesse-variable-nirvana-standard-groupe-fixe-au-sol-sans-secheur-vitesse-variable",
	"slug": "ingersoll-rand-r45n-50-hz-vitesse-variable-nirvana-standard-groupe-fixe-au-sol-sans-secheur-vitesse-variable",
	"brand": "Ingersoll Rand",
	"model": "R45n",
	"variant": {
		"familyId": "ingersoll-rand-r45n",
		"label": "Nirvana Standard, groupe fixe au sol, sans sécheur ; vitesse variable, 50 Hz, 10 bar",
		"distinguishingAttributes": {
			"équipement": "Nirvana Standard, groupe fixe au sol, sans sécheur ; vitesse variable",
			"pressionMaximale": "10 bar",
			"cuve": "0 L",
			"régulation": "vitesse variable",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 7,
			"litersPerMinute": 7420
		}
	],
	"oilType": "unknown",
	"powerKw": 45,
	"weightKg": 776,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/ingersoll-rand-r45n-50-hz-vitesse-variable-nirvana-standard-groupe-fixe-au-sol-sans-secheur-vitesse-variable.webp",
		"alt": "Repères techniques : Ingersoll Rand R45n, 50 Hz, vitesse variable",
		"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta3c1d56420975795/blt422566be800a9844/67b74ddbdd97b168fddbe2df/IRP-En-Data-sheet-oil-flooded-ac-r-series-37-45-kw-50hz.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "Nirvana Standard, groupe fixe au sol, sans sécheur ; vitesse variable",
			"evidenceIds": [
				"october2b-ir-r37-45-p2"
			]
		},
		{
			"label": "Pression maximale du tableau constructeur",
			"value": "10 bar relatifs",
			"evidenceIds": [
				"october2b-ir-r37-45-p2"
			]
		},
		{
			"label": "FAD à 7 bar",
			"value": "6,46 à 7,42 m³/min",
			"evidenceIds": [
				"october2b-ir-r37-45-p2"
			]
		},
		{
			"label": "Fréquence de la documentation",
			"value": "50 Hz",
			"evidenceIds": [
				"october2b-ir-r37-45-p2"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "International",
			"evidenceIds": [
				"october2b-ir-r37-45-p2"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Groupe seul ; réservoir de stockage externe non inclus",
			"evidenceIds": [
				"october2b-ir-r37-45-p2"
			]
		}
	],
	"editorial": {
		"overview": "Ingersoll Rand R45n, 50 Hz, vitesse variable. 7 420 L/min à 7 bar. Moteur 45 kW ; Nirvana Standard, groupe fixe au sol, sans sécheur ; vitesse variable.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 10 bar ; le point FAD conserve sa pression publiée."
		],
		"limitations": [
			"Documentation constructeur © 2012 ; disponibilité actuelle et variante électrique à confirmer.",
			"Le fluide de refroidissement publié ne permet pas, à lui seul, de qualifier la lubrification du bloc de cette génération.",
			"Les points de vitesse variable sont regroupés dans une seule courbe. Le maximum de chaque plage publié est retenu ; la stabilité à faible charge n’est pas simulée.",
			"Cycle de service non établi par les sources retenues ; la tenue permanente reste indéterminée.",
			"Les seules pressions FAD retenues sont celles du document. Aucun débit aspiré, extrapolation ou essai d’utilisation CompatAir.",
			"Documentation et disponibilité de la configuration à confirmer avec le constructeur."
		]
	},
	"evidence": [
		{
			"id": "october2b-ir-r37-45-p2",
			"sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta3c1d56420975795/blt422566be800a9844/67b74ddbdd97b168fddbe2df/IRP-En-Data-sheet-oil-flooded-ac-r-series-37-45-kw-50hz.pdf#page=2",
			"sourceLabel": "Ingersoll Rand, R 37–45 kW, fiche RCA-12-013-04, 50 Hz, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 4d90648a08c1174787dbe96d91281ed9abce17bece4b7c870ddb78c0d86dd148 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2b-ir-r37-45-p2"
		],
		"maxPressureBar": [
			"october2b-ir-r37-45-p2"
		],
		"fadCurve": [
			"october2b-ir-r37-45-p2"
		],
		"powerKw": [
			"october2b-ir-r37-45-p2"
		],
		"oilType": [
			"october2b-ir-r37-45-p2"
		],
		"weightKg": [
			"october2b-ir-r37-45-p2"
		]
	},
	"notes": [
		"Les unités bar(g) et psig désignent des pressions relatives lorsque le document les précise ; les autres valeurs en bar sont reprises telles qu’imprimées, sans conversion en pression absolue. Conditions ISO et pression de restitution restent celles du document constructeur."
	]
};

export default product;
