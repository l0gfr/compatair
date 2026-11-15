import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpol-srk-4",
	"slug": "airpol-srk-4",
	"brand": "Airpol",
	"model": "SRK 4",
	"variant": {
		"familyId": "airpol-srk-4",
		"label": "Groupe scroll Airpol sur réservoir 500 L",
		"distinguishingAttributes": {
			"équipement": "Groupe scroll Airpol sur réservoir 500 L",
			"pressionMaximale": "10 bar",
			"cuve": "500 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 500,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil-free",
	"powerKw": 3.7,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpol-srk-4-technical-20261115-followup.svg",
		"alt": "Repères techniques : Airpol SRK 4",
		"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/Catalogue_Scroll-compressors.pdf",
		"sourceLabel": "Carte technique CompatAir, limites documentaires relues le 15 novembre 2026"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe scroll Airpol sur réservoir 500 L",
			"evidenceIds": [
				"october3d-airpol-scroll-p9"
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
			"value": "350 L/min",
			"evidenceIds": [
				"october3d-airpol-scroll-p9",
				"october3d-airpol-scroll-max"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "500 L",
			"evidenceIds": [
				"october3d-airpol-scroll-p9"
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
		},
		{
			"label": "Portée du service continu",
			"value": "Taux de marche du groupe non quantifié dans les documents lus",
			"evidenceIds": [
				"review:2026-11-15-held:airpol-srk-4:0",
				"review:2026-11-15-held:airpol-srk-4:1"
			]
		},
		{
			"label": "Cuve de cette configuration",
			"value": "500 L en option ; 240 L en standard selon la FAQ",
			"evidenceIds": [
				"review:2026-11-15-held:airpol-srk-4:0",
				"review:2026-11-15-held:airpol-srk-4:1"
			]
		}
	],
	"editorial": {
		"overview": "Airpol SRK 4, configuration sur cuve optionnelle de 500 L : la FAQ indique 240 L en standard. Le tableau SRK publie 21 m³/h dans la colonne 10 bar, soit 350 L/min de capacité documentaire. Ce point ne qualifie pas encore un FAD exploitable ni le taux de marche du groupe ; la compatibilité reste indéterminée.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 500 L.",
			"Pression maximale de fonctionnement publiée : 10 bar.",
			"Capacité documentaire : 21 m³/h dans la colonne 10 bar, soit 350 L/min ; aucun point FAD de calcul n’est ajouté."
		],
		"limitations": [
			"Conditions de référence FAD non précisées dans la fiche ; aucun AnnexC ni température/humidité ajouté.",
			"Une seule configuration par modèle est retenue ; aucune fusion de pressions de fabrication différentes.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Installation et disponibilité en France à confirmer selon l’alimentation et le raccordement publiés.",
			"La FAQ décrit un service continu de gamme sans taux de marche chiffré du groupe. La table PDF page 9 publie une capacité selon deux colonnes de pression, sans qualification explicite du FAD de mesure. La cuve 240 L est standard selon la FAQ, 500 L est une option. Ces réserves interdisent une admission aujourd’hui."
		]
	},
	"evidence": [
		{
			"id": "october3d-airpol-scroll-p9",
			"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/Catalogue_Scroll-compressors.pdf#page=9",
			"sourceLabel": "Airpol, manufacturer technical documentation, page PDF 9",
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
		},
		{
			"id": "review:2026-11-15-held:airpol-srk-4:0",
			"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/Catalogue_Scroll-compressors.pdf",
			"sourceLabel": "Airpol, document exact relu le 15 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-15",
			"confidence": "B",
			"notes": "La FAQ décrit un service continu de gamme sans taux de marche chiffré du groupe. La table PDF page 9 publie une capacité selon deux colonnes de pression, sans qualification explicite du FAD de mesure. La cuve 240 L est standard selon la FAQ, 500 L est une option. Ces réserves interdisent une admission aujourd’hui. GET complet : SHA-256 67a30acdba6ecb84d085b8a7e469c5c4803f40edb843a5045634e22fdb8ed494."
		},
		{
			"id": "review:2026-11-15-held:airpol-srk-4:1",
			"sourceUrl": "https://airpol.com.pl/en/knowledge-base/qa-frequently-asked-questions-about-airpol-sr-scroll-compressors/",
			"sourceLabel": "Airpol, document exact relu le 15 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-15",
			"confidence": "B",
			"notes": "La FAQ décrit un service continu de gamme sans taux de marche chiffré du groupe. La table PDF page 9 publie une capacité selon deux colonnes de pression, sans qualification explicite du FAD de mesure. La cuve 240 L est standard selon la FAQ, 500 L est une option. Ces réserves interdisent une admission aujourd’hui. GET complet : SHA-256 fb5078b47095d314438f00f6aaa462671fbd2712d8653893e682f610c187915e."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october3d-airpol-scroll-p9"
		],
		"maxPressureBar": [
			"october3d-airpol-scroll-max"
		],
		"fadCurve": [
			"review:2026-11-15-held:airpol-srk-4:0",
			"review:2026-11-15-held:airpol-srk-4:1"
		],
		"oilType": [
			"october3d-airpol-scroll-max"
		],
		"electrical": [
			"october3d-airpol-scroll-max"
		],
		"powerKw": [
			"october3d-airpol-scroll-p9"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas.",
		"La FAQ décrit un service continu de gamme sans taux de marche chiffré du groupe. La table PDF page 9 publie une capacité selon deux colonnes de pression, sans qualification explicite du FAD de mesure. La cuve 240 L est standard selon la FAQ, 500 L est une option. Ces réserves interdisent une admission aujourd’hui."
	]
};

export default product;
