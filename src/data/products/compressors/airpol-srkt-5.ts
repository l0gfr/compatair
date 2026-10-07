import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpol-srkt-5",
	"slug": "airpol-srkt-5",
	"brand": "Airpol",
	"model": "SRKT 5",
	"variant": {
		"familyId": "airpol-srkt-5",
		"label": "Groupe scroll Airpol sur réservoir 500 L avec sécheur et filtres",
		"distinguishingAttributes": {
			"équipement": "Groupe scroll Airpol sur réservoir 500 L avec sécheur et filtres",
			"pressionMaximale": "10 bar",
			"cuve": "500 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 500,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 450
		}
	],
	"dutyCycle": 1,
	"oilType": "oil-free",
	"powerKw": 5.5,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpol-srkt-5.svg",
		"alt": "Repères techniques : Airpol SRKT 5",
		"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/Catalogue_Scroll-compressors.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe scroll Airpol sur réservoir 500 L avec sécheur et filtres",
			"evidenceIds": [
				"october3d-airpol-scroll-p10"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "10 bar relatifs",
			"evidenceIds": [
				"october3d-airpol-scroll-max"
			]
		},
		{
			"label": "Air livré à 10 bar",
			"value": "450 L/min",
			"evidenceIds": [
				"october3d-airpol-scroll-p10",
				"october3d-airpol-scroll-max"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "500 L",
			"evidenceIds": [
				"october3d-airpol-scroll-p10"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "Service continu déclaré sous les conditions constructeur",
			"evidenceIds": [
				"october3d-airpol-scroll-max"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "400 V/3 ph/50 Hz",
			"evidenceIds": [
				"october3d-airpol-scroll-max"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october3d-airpol-scroll-max"
			]
		}
	],
	"editorial": {
		"overview": "Airpol SRKT 5. 450 L/min à 10 bar. Groupe scroll Airpol sur réservoir 500 L avec sécheur et filtres.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 500 L.",
			"Pression maximale de fonctionnement publiée : 10 bar."
		],
		"limitations": [
			"Conditions de référence FAD non précisées dans la fiche ; aucun AnnexC ni température/humidité ajouté.",
			"Une seule configuration par modèle est retenue ; aucune fusion de pressions de fabrication différentes.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Installation et disponibilité en France à confirmer selon l’alimentation et le raccordement publiés."
		]
	},
	"evidence": [
		{
			"id": "october3d-airpol-scroll-p10",
			"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/Catalogue_Scroll-compressors.pdf#page=10",
			"sourceLabel": "Airpol, manufacturer technical documentation, page PDF 10",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 67a30acdba6ecb84d085b8a7e469c5c4803f40edb843a5045634e22fdb8ed494 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-airpol-scroll-max",
			"sourceUrl": "https://airpol.com.pl/en/knowledge-base/qa-frequently-asked-questions-about-airpol-sr-scroll-compressors/",
			"sourceLabel": "ALUP, documentation constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 db991b62ee843bc1768841fca82b9e332cf5cf7dbfa247a6aaa0541216b79195 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october3d-airpol-scroll-p10"
		],
		"maxPressureBar": [
			"october3d-airpol-scroll-max"
		],
		"fadCurve": [
			"october3d-airpol-scroll-p10",
			"october3d-airpol-scroll-max"
		],
		"oilType": [
			"october3d-airpol-scroll-max"
		],
		"dutyCycle": [
			"october3d-airpol-scroll-max"
		],
		"electrical": [
			"october3d-airpol-scroll-max"
		],
		"powerKw": [
			"october3d-airpol-scroll-p10"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
