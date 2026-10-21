import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "boge-s-271-3-7-5-bar-insonorisation-standard",
	"slug": "boge-s-271-3-7-5-bar-insonorisation-standard",
	"brand": "BOGE",
	"model": "S 271-3",
	"variant": {
		"familyId": "boge-s-271-3",
		"label": "7.5 bar, insonorisation standard ; 7,5 bar",
		"distinguishingAttributes": {
			"configuration": "S-3, insonorisation standard",
			"pression": "7,5 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 7.5,
	"fadCurve": [],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 200,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/boge-s-271-3-7-5-bar-insonorisation-standard.webp",
		"alt": "Repères techniques : BOGE S 271-3, 7.5 bar, insonorisation standard",
		"sourceUrl": "https://www.boge.com/f/287325279136465/x/55679246a0/boge-datenblatt-schraubenkompressor-s-3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 1",
			"evidenceIds": [
				"documented-d-boge-s3-current-p1"
			]
		},
		{
			"label": "Configuration",
			"value": "S-3, insonorisation standard",
			"evidenceIds": [
				"documented-d-boge-s3-current-p1"
			]
		},
		{
			"label": "Dimensions (largeur × profondeur × hauteur)",
			"value": "3100 × 1910 × 2140 mm",
			"evidenceIds": [
				"documented-d-boge-s3-current-p1"
			]
		},
		{
			"label": "Conditions du débit",
			"value": "Livraison effective associée au maximum de la version dans le tableau ; pression de mesure non séparément établie.",
			"evidenceIds": [
				"documented-d-boge-s3-current-p1"
			]
		},
		{
			"label": "Débit effectif publié, pression de mesure à confirmer",
			"value": "33 970 L/min ; aucun point FAD attribué à la pression maximale",
			"evidenceIds": [
				"documented-d-boge-s3-current-p1"
			]
		}
	],
	"editorial": {
		"overview": "S 271-3, version de 7,5 bar avec insonorisation standard : groupe industriel de 200 kW, raccord DN 100 et masse publiée de 4 600 kg. Le tableau annonce une livraison effective de 33,97 m³/min, contre 30,69 m³/min pour la version 10 bar.",
		"verifiedFacts": [
			"Dimensions publiées : 3100 × 1910 × 2140 mm.",
			"Puissance moteur publiée : 200 kW.",
			"La documentation constructeur de cette série prévoit le service continu, sous ses conditions d’installation et d’entretien."
		],
		"limitations": [
			"La pression de mesure du débit n’est pas séparément établie dans le tableau. La courbe FAD reste vide et le verdict de compatibilité demeure indéterminé.",
			"L’encombrement est de 3100 × 1910 × 2140 mm en largeur × profondeur × hauteur. L’insonorisation renforcée porte la masse à 4 700 kg et constitue un autre équipement.",
			"La page constructeur prévoit le fonctionnement continu pour la série S-3 à partir de 132 kW. Refroidissement, alimentation et traitement d’air doivent être dimensionnés pour l’installation."
		]
	},
	"evidence": [
		{
			"id": "documented-d-boge-s3-current-p1",
			"sourceUrl": "https://www.boge.com/f/287325279136465/x/55679246a0/boge-datenblatt-schraubenkompressor-s-3.pdf#page=1",
			"sourceLabel": "boge-s3-current, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 516b7e8e9ad6af00cbdea1444d9394ba099b039f5d01c72db9c295211d69ef27. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "documented-d-boge-s3-duty",
			"sourceUrl": "https://www.boge.com/en-us/products/compressors/screw-compressors/",
			"sourceLabel": "boge-s3-duty, page constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 721b071d19957929d82543cb2851fa494476c228f6440fe41e5ee21bcc5e038c. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"documented-d-boge-s3-current-p1"
		],
		"maxPressureBar": [
			"documented-d-boge-s3-current-p1"
		],
		"powerKw": [
			"documented-d-boge-s3-current-p1"
		],
		"fadCurve": [
			"documented-d-boge-s3-current-p1"
		],
		"oilType": [
			"documented-d-boge-s3-current-p1"
		],
		"dutyCycle": [
			"documented-d-boge-s3-duty"
		]
	},
	"notes": [
		"Configuration et unités vérifiées dans la ligne de la page 1."
	]
};

export default product;
