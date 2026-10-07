import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "elgi-eg-18-60-hz-vitesse-variable-groupe-fixe-au-sol-sans-secheur-vitesse-variable",
	"slug": "elgi-eg-18-60-hz-vitesse-variable-groupe-fixe-au-sol-sans-secheur-vitesse-variable",
	"brand": "ELGi",
	"model": "EG 18",
	"variant": {
		"familyId": "elgi-eg-18",
		"label": "groupe fixe au sol, sans sécheur ; vitesse variable, 60 Hz, 12,6 bar",
		"distinguishingAttributes": {
			"équipement": "groupe fixe au sol, sans sécheur ; vitesse variable",
			"pressionMaximale": "12,6 bar",
			"cuve": "0 L",
			"régulation": "vitesse variable",
			"fréquence": "60 Hz"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 12.6,
	"fadCurve": [
		{
			"pressureBar": 6.9,
			"litersPerMinute": 3280
		},
		{
			"pressureBar": 8.6,
			"litersPerMinute": 3030
		},
		{
			"pressureBar": 10.3,
			"litersPerMinute": 2580
		},
		{
			"pressureBar": 12.1,
			"litersPerMinute": 2270
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 18,
	"weightKg": 710,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/elgi-eg-18-60-hz-vitesse-variable-groupe-fixe-au-sol-sans-secheur-vitesse-variable.webp",
		"alt": "Repères techniques : ELGi EG 18, 60 Hz, vitesse variable",
		"sourceUrl": "https://www.elgi.com/eu/wp-content/uploads/2019/10/eg-series-11-75-60hz.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "groupe fixe au sol, sans sécheur ; vitesse variable",
			"evidenceIds": [
				"october2b-elgi-eg11-75-eu-p11"
			]
		},
		{
			"label": "Pression maximale du tableau constructeur",
			"value": "12,6 bar relatifs",
			"evidenceIds": [
				"october2b-elgi-eg11-75-eu-p11"
			]
		},
		{
			"label": "FAD à 6,9 bar",
			"value": "1,56 à 3,28 m³/min",
			"evidenceIds": [
				"october2b-elgi-eg11-75-eu-p11"
			]
		},
		{
			"label": "FAD à 8,6 bar",
			"value": "1,42 à 3,03 m³/min",
			"evidenceIds": [
				"october2b-elgi-eg11-75-eu-p11"
			]
		},
		{
			"label": "FAD à 10,3 bar",
			"value": "1,19 à 2,58 m³/min",
			"evidenceIds": [
				"october2b-elgi-eg11-75-eu-p11"
			]
		},
		{
			"label": "FAD à 12,1 bar",
			"value": "1,02 à 2,27 m³/min",
			"evidenceIds": [
				"october2b-elgi-eg11-75-eu-p11"
			]
		},
		{
			"label": "Fréquence de la documentation",
			"value": "60 Hz",
			"evidenceIds": [
				"october2b-elgi-eg11-75-eu-p11"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "International",
			"evidenceIds": [
				"october2b-elgi-eg11-75-eu-p11"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Groupe seul ; réservoir de stockage externe non inclus",
			"evidenceIds": [
				"october2b-elgi-eg11-75-eu-p11"
			]
		}
	],
	"editorial": {
		"overview": "ELGi EG 18, 60 Hz, vitesse variable. 3 280 L/min à 6,9 bar ; 3 030 L/min à 8,6 bar ; 2 580 L/min à 10,3 bar ; 2 270 L/min à 12,1 bar. Moteur 18 kW ; groupe fixe au sol, sans sécheur ; vitesse variable.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 12,6 bar ; le point FAD conserve sa pression publiée."
		],
		"limitations": [
			"Les points de vitesse variable sont regroupés dans une seule courbe. Le maximum de chaque plage publié est retenu ; la stabilité à faible charge n’est pas simulée.",
			"Fonctionnement continu déclaré pour la série ; refroidissement, installation et entretien conditionnent ce service.",
			"Documentation à 60 Hz ; elle ne démontre pas les performances de la version 50 Hz. Alimentation et marché local à confirmer avant achat.",
			"Les seules pressions FAD retenues sont celles du document. Aucun débit aspiré, extrapolation ou essai d’utilisation CompatAir.",
			"Documentation et disponibilité de la configuration à confirmer avec le constructeur."
		]
	},
	"evidence": [
		{
			"id": "october2b-elgi-eg11-75-eu-p11",
			"sourceUrl": "https://www.elgi.com/eu/wp-content/uploads/2019/10/eg-series-11-75-60hz.pdf#page=11",
			"sourceLabel": "ELGi EG 11–75 kW, brochure 60 Hz, page PDF 11",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 8bc82033cb7674d7a38e6b598e3a87555db6aab7601604f39a955080e166aa66 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october2b-elgi-eg-duty",
			"sourceUrl": "https://www.elgi.com/eu/11-250-kw-eg-series-screw-compressors/",
			"sourceLabel": "Déclaration fabricant de fonctionnement continu",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 f95dd586e25e8dc2b4a11721c3af24735d08261bb95588268dbd8e4b3bc8f97c de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october2b-elgi-eg-duty",
			"sourceUrl": "https://www.elgi.com/eu/11-250-kw-eg-series-screw-compressors/",
			"sourceLabel": "Déclaration fabricant de fonctionnement continu",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 f95dd586e25e8dc2b4a11721c3af24735d08261bb95588268dbd8e4b3bc8f97c de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2b-elgi-eg11-75-eu-p11"
		],
		"maxPressureBar": [
			"october2b-elgi-eg11-75-eu-p11"
		],
		"fadCurve": [
			"october2b-elgi-eg11-75-eu-p11"
		],
		"powerKw": [
			"october2b-elgi-eg11-75-eu-p11"
		],
		"oilType": [
			"october2b-elgi-eg-duty"
		],
		"weightKg": [
			"october2b-elgi-eg11-75-eu-p11"
		],
		"dutyCycle": [
			"october2b-elgi-eg-duty"
		]
	},
	"notes": [
		"Les unités bar(g) et psig désignent des pressions relatives lorsque le document les précise ; les autres valeurs en bar sont reprises telles qu’imprimées, sans conversion en pression absolue. Conditions ISO et pression de restitution restent celles du document constructeur."
	]
};

export default product;
