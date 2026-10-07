import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "elgi-eg-250-50-hz-9-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe",
	"slug": "elgi-eg-250-50-hz-9-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe",
	"brand": "ELGi",
	"model": "EG 250",
	"variant": {
		"familyId": "elgi-eg-250",
		"label": "groupe fixe au sol, sans sécheur ; vitesse fixe, 50 Hz, 9 bar",
		"distinguishingAttributes": {
			"équipement": "groupe fixe au sol, sans sécheur ; vitesse fixe",
			"pressionMaximale": "9 bar",
			"cuve": "0 L",
			"régulation": "vitesse fixe",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 9,
	"fadCurve": [
		{
			"pressureBar": 8,
			"litersPerMinute": 41770
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 250,
	"weightKg": 5655,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/elgi-eg-250-50-hz-9-bar-groupe-fixe-au-sol-sans-secheur-vitesse-fixe.webp",
		"alt": "Repères techniques : ELGi EG 250, 50 Hz, 9 bar",
		"sourceUrl": "https://www.elgi.com/eu/wp-content/uploads/2019/04/EG-200-250-50hz-catalogue.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "groupe fixe au sol, sans sécheur ; vitesse fixe",
			"evidenceIds": [
				"october2b-elgi-eg200-250-50-p8"
			]
		},
		{
			"label": "Pression maximale du tableau constructeur",
			"value": "9 bar relatifs",
			"evidenceIds": [
				"october2b-elgi-eg200-250-50-p8"
			]
		},
		{
			"label": "FAD à 8 bar",
			"value": "41,77 m³/min",
			"evidenceIds": [
				"october2b-elgi-eg200-250-50-p8"
			]
		},
		{
			"label": "Fréquence de la documentation",
			"value": "50 Hz",
			"evidenceIds": [
				"october2b-elgi-eg200-250-50-p8"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "Europe",
			"evidenceIds": [
				"october2b-elgi-eg200-250-50-p8"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Groupe seul ; réservoir de stockage externe non inclus",
			"evidenceIds": [
				"october2b-elgi-eg200-250-50-p8"
			]
		}
	],
	"editorial": {
		"overview": "ELGi EG 250, 50 Hz, 9 bar. 41 770 L/min à 8 bar. Moteur 250 kW ; groupe fixe au sol, sans sécheur ; vitesse fixe.",
		"verifiedFacts": [
			"Débit restitué relié à une pression et aux unités originales de la fiche fabricant.",
			"Périmètre retenu : groupe seul ; réservoir de stockage externe exclu.",
			"Limite de pression documentée : 9 bar ; le point FAD conserve sa pression publiée."
		],
		"limitations": [
			"Page 8, Unités FAD m³/min et cfm incohérentes au-delà de leur arrondi imprimé.",
			"Cette entrée correspond à une configuration constructeur de pression maximale ; aucun nouveau produit n’est créé à partir d’un simple point de test.",
			"Fonctionnement continu déclaré pour la série ; refroidissement, installation et entretien conditionnent ce service.",
			"Les seules pressions FAD retenues sont celles du document. Aucun débit aspiré, extrapolation ou essai d’utilisation CompatAir.",
			"Documentation et disponibilité de la configuration à confirmer avec le constructeur."
		]
	},
	"evidence": [
		{
			"id": "october2b-elgi-eg200-250-50-p8",
			"sourceUrl": "https://www.elgi.com/eu/wp-content/uploads/2019/04/EG-200-250-50hz-catalogue.pdf#page=8",
			"sourceLabel": "ELGi EG 200–250 kW, brochure Europe 50 Hz, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 c98dd169a26bda8d103939ed72d845e3ca32294bed972a1c8d1f4f209de13064 de la réponse originale. Données fabricant ; aucun essai physique CompatAir."
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
			"october2b-elgi-eg200-250-50-p8"
		],
		"maxPressureBar": [
			"october2b-elgi-eg200-250-50-p8"
		],
		"fadCurve": [
			"october2b-elgi-eg200-250-50-p8"
		],
		"powerKw": [
			"october2b-elgi-eg200-250-50-p8"
		],
		"oilType": [
			"october2b-elgi-eg-duty"
		],
		"weightKg": [
			"october2b-elgi-eg200-250-50-p8"
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
