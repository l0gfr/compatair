import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "elgi-en-11-60-hz-vitesse-variable-groupe-fixe-au-sol-sans-secheur-vitesse-variable",
	"slug": "elgi-en-11-60-hz-vitesse-variable-groupe-fixe-au-sol-sans-secheur-vitesse-variable",
	"brand": "ELGi",
	"model": "EN 11",
	"variant": {
		"familyId": "elgi-en-11",
		"label": "groupe fixe au sol, sans sécheur ; vitesse variable, 60 Hz, 12,342 bar",
		"distinguishingAttributes": {
			"équipement": "groupe fixe au sol, sans sécheur ; vitesse variable",
			"pressionMaximale": "12,342 bar",
			"cuve": "0 L",
			"régulation": "vitesse variable",
			"fréquence": "60 Hz"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 12.341616,
	"fadCurve": [
		{
			"pressureBar": 8.618447,
			"litersPerMinute": 1557.427
		}
	],
	"oilType": "oil",
	"powerKw": 11,
	"weightKg": 284.856,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/elgi-en-11-60-hz-vitesse-variable-groupe-fixe-au-sol-sans-secheur-vitesse-variable.webp",
		"alt": "Repères techniques : ELGi EN 11, 60 Hz, vitesse variable",
		"sourceUrl": "https://www.elgi.com/us/wp-content/uploads/2019/09/EN-2.2-37kW-60Hz-USA.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "groupe fixe au sol, sans sécheur ; vitesse variable",
			"evidenceIds": [
				"october2b-elgi-en60-us-p5"
			]
		},
		{
			"label": "Pression maximale du tableau constructeur",
			"value": "179 psig, soit 12,342 bar relatifs",
			"evidenceIds": [
				"october2b-elgi-en60-us-p5"
			]
		},
		{
			"label": "FAD à 125 psig",
			"value": "21 à 55 cfm",
			"evidenceIds": [
				"october2b-elgi-en60-us-p5"
			]
		},
		{
			"label": "Fréquence de la documentation",
			"value": "60 Hz",
			"evidenceIds": [
				"october2b-elgi-en60-us-p5"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "États-Unis",
			"evidenceIds": [
				"october2b-elgi-en60-us-p5"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Groupe seul ; réservoir de stockage externe non inclus",
			"evidenceIds": [
				"october2b-elgi-en60-us-p5"
			]
		}
	],
	"editorial": {
		"overview": "ELGi EN 11, 60 Hz, vitesse variable. 1 557,427 L/min à 8,618 bar. Moteur 11 kW ; groupe fixe au sol, sans sécheur ; vitesse variable.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 12,342 bar ; le point FAD conserve sa pression publiée."
		],
		"limitations": [
			"Les points de vitesse variable sont regroupés dans une seule courbe. Le maximum de chaque plage publié est retenu ; la stabilité à faible charge n’est pas simulée.",
			"Cycle de service non établi par les sources retenues ; la tenue permanente reste indéterminée.",
			"Documentation à 60 Hz ; elle ne démontre pas les performances de la version 50 Hz. Alimentation et marché local à confirmer avant achat.",
			"Les seules pressions FAD retenues sont celles du document. Aucun débit aspiré, extrapolation ou essai d’utilisation CompatAir.",
			"Documentation et disponibilité de la configuration à confirmer avec le constructeur."
		]
	},
	"evidence": [
		{
			"id": "october2b-elgi-en60-us-p5",
			"sourceUrl": "https://www.elgi.com/us/wp-content/uploads/2019/09/EN-2.2-37kW-60Hz-USA.pdf#page=5",
			"sourceLabel": "ELGi EN, brochure États-Unis 60 Hz, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 97b08b30e2733029a666a80d244b714fa9f77e26028056a5ec131af2a1768552 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october2b-elgi-en60-oil-p3",
			"sourceUrl": "https://www.elgi.com/us/wp-content/uploads/2019/09/EN-2.2-37kW-60Hz-USA.pdf#page=3",
			"sourceLabel": "ELGi EN, brochure États-Unis 60 Hz ; lubrification du bloc de compression, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 97b08b30e2733029a666a80d244b714fa9f77e26028056a5ec131af2a1768552 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2b-elgi-en60-us-p5"
		],
		"maxPressureBar": [
			"october2b-elgi-en60-us-p5"
		],
		"fadCurve": [
			"october2b-elgi-en60-us-p5"
		],
		"powerKw": [
			"october2b-elgi-en60-us-p5"
		],
		"oilType": [
			"october2b-elgi-en60-oil-p3"
		],
		"weightKg": [
			"october2b-elgi-en60-us-p5"
		]
	},
	"notes": [
		"Les unités bar(g) et psig désignent des pressions relatives lorsque le document les précise ; les autres valeurs en bar sont reprises telles qu’imprimées, sans conversion en pression absolue. Conditions ISO et pression de restitution restent celles du document constructeur."
	]
};

export default product;
