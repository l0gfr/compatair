import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "boge-e-11-fdr-frequence-non-precisee-vitesse-variable-station-sur-cuve-400-l-avec-secheur-insonorisation-standard-vitesse-variable",
	"slug": "boge-e-11-fdr-frequence-non-precisee-vitesse-variable-station-sur-cuve-400-l-avec-secheur-insonorisation-standard-vitesse-variable",
	"brand": "BOGE",
	"model": "E 11 FDR",
	"variant": {
		"familyId": "boge-e-11-fdr",
		"label": "station sur cuve 400 L avec sécheur ; insonorisation standard ; vitesse variable, 13 bar",
		"distinguishingAttributes": {
			"équipement": "station sur cuve 400 L avec sécheur ; insonorisation standard ; vitesse variable",
			"pressionMaximale": "13 bar",
			"cuve": "400 L",
			"régulation": "vitesse variable"
		}
	},
	"tankLiters": 400,
	"maxPressureBar": 13,
	"fadCurve": [
		{
			"pressureBar": 7.5,
			"litersPerMinute": 1650
		},
		{
			"pressureBar": 10,
			"litersPerMinute": 1450
		},
		{
			"pressureBar": 13,
			"litersPerMinute": 1250
		}
	],
	"oilType": "oil",
	"powerKw": 11,
	"weightKg": 539,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/boge-e-11-fdr-frequence-non-precisee-vitesse-variable-station-sur-cuve-400-l-avec-secheur-insonorisation-standard-vitesse-variable.webp",
		"alt": "Repères techniques : BOGE E 11 FDR, vitesse variable",
		"sourceUrl": "https://www.boge.com/f/287325279136465/x/41ce174837/017_e_series_data_en_130526.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "station sur cuve 400 L avec sécheur ; insonorisation standard ; vitesse variable",
			"evidenceIds": [
				"october2b-017-e-series-data-en-130526-p2"
			]
		},
		{
			"label": "Pression maximale du tableau constructeur",
			"value": "13 bar",
			"evidenceIds": [
				"october2b-017-e-series-data-en-130526-p2"
			]
		},
		{
			"label": "FAD à 7,5 bar",
			"value": "0,61 à 1,65 m³/min",
			"evidenceIds": [
				"october2b-017-e-series-data-en-130526-p2"
			]
		},
		{
			"label": "FAD à 10 bar",
			"value": "0,53 à 1,45 m³/min",
			"evidenceIds": [
				"october2b-017-e-series-data-en-130526-p2"
			]
		},
		{
			"label": "FAD à 13 bar",
			"value": "0,46 à 1,25 m³/min",
			"evidenceIds": [
				"october2b-017-e-series-data-en-130526-p2"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "Europe",
			"evidenceIds": [
				"october2b-017-e-series-data-en-130526-p2"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "400 L, intégrée à cette station",
			"evidenceIds": [
				"october2b-boge-e-brochure-p7"
			]
		}
	],
	"editorial": {
		"overview": "BOGE E 11 FDR, vitesse variable. 1 650 L/min à 7,5 bar ; 1 450 L/min à 10 bar ; 1 250 L/min à 13 bar. Moteur 11 kW ; station sur cuve 400 L avec sécheur ; insonorisation standard ; vitesse variable.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Réservoir intégré : 400 L.",
			"Limite de pression documentée : 13 bar ; le point FAD conserve sa pression publiée."
		],
		"limitations": [
			"Les points de vitesse variable sont regroupés dans une seule courbe. Le maximum de chaque plage publié est retenu ; la stabilité à faible charge n’est pas simulée.",
			"Cycle de service non établi par les sources retenues ; la tenue permanente reste indéterminée.",
			"Fréquence du tableau non établie ; aucune transposition des débits entre 50 et 60 Hz.",
			"Les seules pressions FAD retenues sont celles du document. Aucun débit aspiré, extrapolation ou essai d’utilisation CompatAir.",
			"Documentation et disponibilité de la configuration à confirmer avec le constructeur."
		]
	},
	"evidence": [
		{
			"id": "october2b-017-e-series-data-en-130526-p2",
			"sourceUrl": "https://www.boge.com/f/287325279136465/x/41ce174837/017_e_series_data_en_130526.pdf#page=2",
			"sourceLabel": "BOGE, fiche technique E, 4–30 kW, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 c2cffd529c948f718f9b8c5e1b75b806b4c0767e760d21bb7c23be8e9ceb27b6 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october2b-boge-e-brochure-p7",
			"sourceUrl": "https://www.boge.com/f/287325279136465/x/aa75c3f016/017_e_series_en-bi_130526.pdf#page=7",
			"sourceLabel": "BOGE, brochure E, réservoir 400 L, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 f81ad410470774e98db39621be5f4686e0789f5b48cf3432f0873dccd8d1faed de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october2b-boge-e-oil",
			"sourceUrl": "https://www.boge.com/en-uk/products/compressors/screw-compressors/e-series-up-to-30-kw/",
			"sourceLabel": "BOGE, lubrification et configuration de la série",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 0c6f85bc6a31df9d40e3440d259ab36457fa450b886b9e1bf60808f19581e532 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2b-boge-e-brochure-p7"
		],
		"maxPressureBar": [
			"october2b-017-e-series-data-en-130526-p2"
		],
		"fadCurve": [
			"october2b-017-e-series-data-en-130526-p2"
		],
		"powerKw": [
			"october2b-017-e-series-data-en-130526-p2"
		],
		"oilType": [
			"october2b-boge-e-oil"
		],
		"weightKg": [
			"october2b-017-e-series-data-en-130526-p2"
		]
	},
	"notes": [
		"Les unités bar(g) et psig désignent des pressions relatives lorsque le document les précise ; les autres valeurs en bar sont reprises telles qu’imprimées, sans conversion en pression absolue. Conditions ISO et pression de restitution restent celles du document constructeur."
	]
};

export default product;
