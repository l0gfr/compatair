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
		"overview": "R45n Nirvana Standard 50 Hz : la brochure de 2012 annonce une plage de 6,46 à 7,42 m³/min à 7 bar, pour 45 kW. La courbe CompatAir conserve le maximum de 7 420 L/min. Le R37ne voisin annonce de 5,83 à 6,63 m³/min au même point de pression.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 10 bar ; le point FAD conserve sa pression publiée."
		],
		"limitations": [
			"Les limites de fonctionnement de la ligne R45n sont 4,5 à 10 bar ; sa plage de capacité est mesurée à 7 bar selon ISO 1217:2009 annexe C.",
			"Le R45n TAS possède sa propre plage de 6,46 à 7,39 m³/min ; ses équipements et capacités restent distincts du Standard.",
			"La capacité maximale ne décrit pas la production à tout régime. Le taux de marche reste inconnu.",
			"La brochure de 2012 ne démontre pas une disponibilité actuelle. Vérifier génération, équipement, refroidissement, alimentation et lubrification du bloc."
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
