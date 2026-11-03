import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "boge-s-40-3-13-bar-insonorisation-standard",
	"slug": "boge-s-40-3-13-bar-insonorisation-standard",
	"brand": "BOGE",
	"model": "S 40-3",
	"variant": {
		"familyId": "boge-s-40-3",
		"label": "13 bar, insonorisation standard ; 13 bar",
		"distinguishingAttributes": {
			"configuration": "S-3, insonorisation standard",
			"pression": "13 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 13,
	"fadCurve": [],
	"oilType": "oil",
	"powerKw": 30,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/boge-s-40-3-13-bar-insonorisation-standard.webp",
		"alt": "Repères techniques : BOGE S 40-3, 13 bar, insonorisation standard",
		"sourceUrl": "https://www.boge.com/f/287325279136465/x/55679246a0/boge-datenblatt-schraubenkompressor-s-3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Configuration",
			"value": "S 40-3 standard, version 13 bar",
			"evidenceIds": [
				"boge-s-40-3-13-bar-insonorisation-standard-reserved-20261103-1"
			]
		},
		{
			"label": "Livraison effective publiée",
			"value": "3,86 m³/min ; pression effective de mesure à confirmer",
			"evidenceIds": [
				"boge-s-40-3-13-bar-insonorisation-standard-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance moteur",
			"value": "30 kW",
			"evidenceIds": [
				"boge-s-40-3-13-bar-insonorisation-standard-reserved-20261103-1"
			]
		},
		{
			"label": "Dimensions",
			"value": "1 620 × 990 × 1 450 mm",
			"evidenceIds": [
				"boge-s-40-3-13-bar-insonorisation-standard-reserved-20261103-1"
			]
		},
		{
			"label": "Masse standard",
			"value": "842 kg",
			"evidenceIds": [
				"boge-s-40-3-13-bar-insonorisation-standard-reserved-20261103-1"
			]
		}
	],
	"editorial": {
		"overview": "BOGE S 40-3. La S 40-3 standard à 13 bar publie 3,86 m³/min et 842 kg. Les versions SD avec sécheur et bluekat ont des équipements et masses différents ; les 970 kg du SD ne sont pas ceux du S standard. La table de pression maximale ne documente pas séparément le point FAD ; le moteur reste indéterminé.",
		"verifiedFacts": [
			"Configuration : S 40-3 standard, version 13 bar.",
			"Livraison effective publiée : 3,86 m³/min ; pression effective de mesure à confirmer.",
			"Puissance moteur : 30 kW.",
			"Dimensions : 1 620 × 990 × 1 450 mm.",
			"Masse standard : 842 kg."
		],
		"limitations": [
			"La valeur de livraison reste documentaire ; pression de mesure et taux de marche du groupe non établis."
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
		},
		{
			"id": "boge-s-40-3-13-bar-insonorisation-standard-reserved-20261103-1",
			"sourceUrl": "https://www.boge.com/f/287325279136465/x/55679246a0/boge-datenblatt-schraubenkompressor-s-3.pdf#page=1",
			"sourceLabel": "BOGE : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 516b7e8e9ad6af00cbdea1444d9394ba099b039f5d01c72db9c295211d69ef27. La S 40-3 standard à 13 bar publie 3,86 m³/min et 842 kg. Les versions SD avec sécheur et bluekat ont des équipements et masses différents ; les 970 kg du SD ne sont pas ceux du S standard. La table de pression maximale ne documente pas séparément le point FAD ; le moteur reste indéterminé."
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
		"weightKg": [
			"boge-s-40-3-13-bar-insonorisation-standard-reserved-20261103-1"
		],
		"editorial": [
			"boge-s-40-3-13-bar-insonorisation-standard-reserved-20261103-1"
		],
		"specifications": [
			"boge-s-40-3-13-bar-insonorisation-standard-reserved-20261103-1"
		]
	},
	"notes": [
		"Configuration et unités vérifiées dans la ligne de la page 1."
	],
	"weightKg": 842
};

export default product;
