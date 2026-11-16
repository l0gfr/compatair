import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "airpol-srkt-2",
	"slug": "airpol-srkt-2",
	"brand": "Airpol",
	"model": "SRKT 2",
	"variant": {
		"familyId": "airpol-srkt-2",
		"label": "Groupe scroll Airpol sur réservoir 500 L avec sécheur et filtres",
		"distinguishingAttributes": {
			"équipement": "Groupe scroll Airpol sur réservoir 500 L avec sécheur et filtres",
			"pressionMaximale": "10 bar",
			"cuve": "500 L",
			"fréquence": "50 Hz"
		}
	},
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil-free",
	"powerKw": 2.2,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/airpol-srkt-2-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Airpol SRKT 2",
		"sourceUrl": "https://airpol.com.pl/en/knowledge-base/qa-frequently-asked-questions-about-airpol-sr-scroll-compressors/",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
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
			"label": "Débit documentaire, hors calcul",
			"value": "213,333 L/min ; pression de mesure non qualifiée. Les anciens points sont conservés dans l’historique.",
			"evidenceIds": [
				"review:2026-11-16-reviews:airpol-srkt-2:0"
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
		"overview": "Le SRKT2 ajoute traitement d’air et réservoir au scroll 2,2 kW. Le SRK2 n’intègre pas le même traitement ; le SRKT4 passe à 3,7 kW. Le catalogue donne 12,8 m³/h à 10 bar mais ne qualifie pas explicitement cette capacité comme FAD. Les réservoirs 240 et 500 L sont proposés : la référence non configurée ne justifie pas 500 L par défaut. Le calcul reste non conclusif.",
		"verifiedFacts": [
			"Le SRKT2 ajoute traitement d’air et réservoir au scroll 2,2 kW.",
			"Le SRK2 n’intègre pas le même traitement ; le SRKT4 passe à 3,7 kW."
		],
		"limitations": [
			"Conditions de référence FAD non précisées dans la fiche ; aucun AnnexC ni température/humidité ajouté.",
			"Une seule configuration par modèle est retenue ; aucune fusion de pressions de fabrication différentes.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Installation et disponibilité en France à confirmer selon l’alimentation et le raccordement publiés.",
			"La courbe dimensionnante a été retirée après revue : la mesure FAD et son appariement à une pression ne sont pas suffisamment établis. Les valeurs documentaires restent conservées.",
			"Le taux de marche du groupe complet n’est pas chiffré par les passages retenus ; aucune valeur numérique n’est déduite du service du moteur ou d’une promesse générale."
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
		},
		{
			"id": "review:2026-11-16-reviews:airpol-srkt-2:0",
			"sourceUrl": "https://airpol.com.pl/en/knowledge-base/qa-frequently-asked-questions-about-airpol-sr-scroll-compressors/",
			"sourceLabel": "Airpol, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le SRKT2 ajoute traitement d’air et réservoir au scroll 2,2 kW. Le SRK2 n’intègre pas le même traitement ; le SRKT4 passe à 3,7 kW. Le catalogue donne 12,8 m³/h à 10 bar mais ne qualifie pas explicitement cette capacité comme FAD. Les réservoirs 240 et 500 L sont proposés : la référence non configurée ne justifie pas 500 L par défaut. Le calcul reste non conclusif. GET complet SHA-256 4f3211cf1b5b31aa3d8c12cbdb56180fad371709afcd8598d22c716f683286e8. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		},
		{
			"id": "review:2026-11-16-reviews:airpol-srkt-2:1",
			"sourceUrl": "https://airpol.com.pl/wp-content/uploads/2022/05/Catalogue_Scroll-compressors.pdf",
			"sourceLabel": "Airpol, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le SRKT2 ajoute traitement d’air et réservoir au scroll 2,2 kW. Le SRK2 n’intègre pas le même traitement ; le SRKT4 passe à 3,7 kW. Le catalogue donne 12,8 m³/h à 10 bar mais ne qualifie pas explicitement cette capacité comme FAD. Les réservoirs 240 et 500 L sont proposés : la référence non configurée ne justifie pas 500 L par défaut. Le calcul reste non conclusif. GET complet SHA-256 67a30acdba6ecb84d085b8a7e469c5c4803f40edb843a5045634e22fdb8ed494. Pages PDF lues : 10."
		}
	],
	"fieldSources": {
		"maxPressureBar": [
			"october3d-airpol-scroll-max"
		],
		"fadCurve": [
			"review:2026-11-16-reviews:airpol-srkt-2:0"
		],
		"oilType": [
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
