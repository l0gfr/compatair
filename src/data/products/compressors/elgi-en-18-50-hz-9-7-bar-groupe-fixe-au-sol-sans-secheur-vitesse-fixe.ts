import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "elgi-en-18-50-hz-9-7-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe",
	"slug": "elgi-en-18-50-hz-9-7-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe",
	"brand": "ELGi",
	"model": "EN 18",
	"variant": {
		"familyId": "elgi-en-18",
		"label": "groupe fixe au sol, sans sécheur ; vitesse fixe, 50 Hz, 9,7 bar",
		"distinguishingAttributes": {
			"équipement": "groupe fixe au sol, sans sécheur ; vitesse fixe",
			"pressionMaximale": "9,7 bar",
			"cuve": "0 L",
			"régulation": "vitesse fixe",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 9.7,
	"fadCurve": [
		{
			"pressureBar": 9.5,
			"litersPerMinute": 2630
		}
	],
	"oilType": "oil",
	"powerKw": 18.5,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/elgi-en-18-50-hz-9-7-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe.webp",
		"alt": "Repères techniques : ELGi EN 18, 50 Hz, 9,7 bar",
		"sourceUrl": "https://www.elgi.com/eu/wp-content/uploads/2020/07/EN-Series-50Hz-Europe-EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "groupe fixe au sol, sans sécheur ; vitesse fixe",
			"evidenceIds": [
				"october2b-elgi-en50-eu-p8"
			]
		},
		{
			"label": "Pression maximale du tableau constructeur",
			"value": "9,7 bar relatifs",
			"evidenceIds": [
				"october2b-elgi-en50-eu-p8"
			]
		},
		{
			"label": "FAD à 9,5 bar",
			"value": "2,63 m³/min",
			"evidenceIds": [
				"october2b-elgi-en50-eu-p8"
			]
		},
		{
			"label": "Fréquence de la documentation",
			"value": "50 Hz",
			"evidenceIds": [
				"october2b-elgi-en50-eu-p8"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "Europe",
			"evidenceIds": [
				"october2b-elgi-en50-eu-p8"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Groupe seul ; réservoir de stockage externe non inclus",
			"evidenceIds": [
				"october2b-elgi-en50-eu-p8"
			]
		}
	],
	"editorial": {
		"overview": "ELGi EN 18, 50 Hz, 9,7 bar. 2 630 L/min à 9,5 bar. Moteur 18,5 kW ; groupe fixe au sol, sans sécheur ; vitesse fixe.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 9,7 bar ; le point FAD conserve sa pression publiée."
		],
		"limitations": [
			"Cette entrée correspond à une configuration constructeur de pression maximale ; aucun nouveau produit n’est créé à partir d’un simple point de test.",
			"Cycle de service non établi par les sources retenues ; la tenue permanente reste indéterminée.",
			"Les seules pressions FAD retenues sont celles du document. Aucun débit aspiré, extrapolation ou essai d’utilisation CompatAir.",
			"Documentation et disponibilité de la configuration à confirmer avec le constructeur."
		]
	},
	"evidence": [
		{
			"id": "october2b-elgi-en50-eu-p8",
			"sourceUrl": "https://www.elgi.com/eu/wp-content/uploads/2020/07/EN-Series-50Hz-Europe-EN.pdf#page=8",
			"sourceLabel": "ELGi EN, brochure Europe 50 Hz, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 21f1c6be68db54dd75d5baf5f425267ac5a5f2c1cb572cf44ce5bab5f111a4ec de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "october2b-elgi-en50-oil-p4",
			"sourceUrl": "https://www.elgi.com/eu/wp-content/uploads/2020/07/EN-Series-50Hz-Europe-EN.pdf#page=4",
			"sourceLabel": "ELGi EN, brochure Europe 50 Hz ; lubrification du bloc de compression, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 21f1c6be68db54dd75d5baf5f425267ac5a5f2c1cb572cf44ce5bab5f111a4ec de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october2b-elgi-en50-eu-p8"
		],
		"maxPressureBar": [
			"october2b-elgi-en50-eu-p8"
		],
		"fadCurve": [
			"october2b-elgi-en50-eu-p8"
		],
		"powerKw": [
			"october2b-elgi-en50-eu-p8"
		],
		"oilType": [
			"october2b-elgi-en50-oil-p4"
		]
	},
	"notes": [
		"Les unités bar(g) et psig désignent des pressions relatives lorsque le document les précise ; les autres valeurs en bar sont reprises telles qu’imprimées, sans conversion en pression absolue. Conditions ISO et pression de restitution restent celles du document constructeur."
	]
};

export default product;
