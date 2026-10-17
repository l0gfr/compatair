import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "boge-s-221-3-10-bar-insonorisation-standard",
	"slug": "boge-s-221-3-10-bar-insonorisation-standard",
	"brand": "BOGE",
	"model": "S 221-3",
	"variant": {
		"familyId": "boge-s-221-3",
		"label": "10 bar, insonorisation standard ; 10 bar",
		"distinguishingAttributes": {
			"configuration": "S-3, insonorisation standard",
			"pression": "10 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 160,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/boge-s-221-3-10-bar-insonorisation-standard.webp",
		"alt": "Repères techniques : BOGE S 221-3, 10 bar, insonorisation standard",
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
			"value": "Le tableau associe une livraison effective de 24,57 m³/min à la version de pression maximale 10 bar ; la pression de mesure du FAD n’est pas établie séparément.",
			"evidenceIds": [
				"documented-d-boge-s3-current-p1"
			]
		},
		{
			"label": "Débit effectif publié, pression de mesure à confirmer",
			"value": "24 570 L/min ; aucun point FAD attribué à la pression maximale",
			"evidenceIds": [
				"documented-d-boge-s3-current-p1"
			]
		}
	],
	"editorial": {
		"overview": "S 221-3 en version 10 bar : groupe industriel de 160 kW, avec une livraison effective annoncée de 24,57 m³/min. Le tableau donne 3 100 × 1 910 × 2 140 mm en largeur × profondeur × hauteur. La variante 13 bar publie 20,32 m³/min ; chaque valeur reste rattachée à sa configuration.",
		"verifiedFacts": [
			"Dimensions publiées : 3100 × 1910 × 2140 mm.",
			"Puissance moteur publiée : 160 kW.",
			"La documentation constructeur de cette série prévoit le service continu, sous ses conditions d’installation et d’entretien."
		],
		"limitations": [
			"La pression de mesure du débit effectif n’est pas séparée du maximum de la version : la courbe FAD reste vide et les verdicts restent indéterminés.",
			"La capacité annoncée concerne un groupe industriel de 160 kW. Les petites unités d’atelier éventuellement suggérées par pression ou cuve ne sont pas des équivalents de production.",
			"Implantation, refroidissement, raccordement DN100 et pression utile du réseau doivent être étudiés pour la configuration commandée."
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
