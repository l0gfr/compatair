import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "boge-s-271-3-10-bar-insonorisation-standard",
	"slug": "boge-s-271-3-10-bar-insonorisation-standard",
	"brand": "BOGE",
	"model": "S 271-3",
	"variant": {
		"familyId": "boge-s-271-3",
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
	"powerKw": 200,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/boge-s-271-3-10-bar-insonorisation-standard.webp",
		"alt": "Repères techniques : BOGE S 271-3, 10 bar, insonorisation standard",
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
			"value": "30 690 L/min ; aucun point FAD attribué à la pression maximale",
			"evidenceIds": [
				"documented-d-boge-s3-current-p1"
			]
		}
	],
	"editorial": {
		"overview": "S 271-3, version 10 bar avec insonorisation standard : groupe industriel de 200 kW, livraison effective publiée de 30,69 m³/min et raccordDN100. La masse indiquée est de 4600 kg. La version 7,5 bar annonce 33,97 m³/min pour la même puissance.",
		"verifiedFacts": [
			"Dimensions publiées : 3100 × 1910 × 2140 mm.",
			"Puissance moteur publiée : 200 kW.",
			"La documentation constructeur de cette série prévoit le service continu, sous ses conditions d’installation et d’entretien."
		],
		"limitations": [
			"La pression de mesure de la livraison effective n’est pas séparément établie ; la courbe FAD demeure vide.",
			"Les dimensions sont 3100 × 1910 × 2140 mm en largeur × profondeur × hauteur. Le montage à insonorisation renforcée indique 4700 kg.",
			"La série S-3 de cette puissance est prévue pour le service continu sous ses conditions. Implantation, refroidissement et raccordement demandent une étude industrielle."
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
