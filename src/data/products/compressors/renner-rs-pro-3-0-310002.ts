import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "renner-rs-pro-3-0-310002",
	"slug": "renner-rs-pro-3-0-310002",
	"brand": "RENNER",
	"model": "RS-PRO 3.0",
	"mpn": "310002",
	"variant": {
		"familyId": "renner-rs-pro-3-0",
		"label": "Version standard au sol, sans réservoir intégré ; 13 bar",
		"distinguishingAttributes": {
			"reference": "310002",
			"pression": "13 bar",
			"cuve": "0 L",
			"configuration": "Version standard au sol, sans réservoir intégré"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 13,
	"fadCurve": [
		{
			"pressureBar": 13,
			"litersPerMinute": 290
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 3,
	"weightKg": 153,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/renner-rs-pro-3-0-310002.webp",
		"alt": "Repères techniques : RENNER RS-PRO 3.0, article 310002",
		"sourceUrl": "https://www.renner-kompressoren.de/fileadmin/DATA/Medien/Newsletter/Deutsch/03_2026/RENNER_-_Produktkatalog_-_2026_-_DE_3.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 18",
			"evidenceIds": [
				"documented-20260930-renner-2026"
			]
		},
		{
			"label": "Configuration publiée",
			"value": "Version standard au sol, sans réservoir intégré",
			"evidenceIds": [
				"documented-20260930-renner-2026"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "540 × 553 × 1014 mm",
			"evidenceIds": [
				"documented-20260930-renner-2026"
			]
		},
		{
			"label": "Technologie",
			"value": "Vis lubrifiée à entraînement par courroie",
			"evidenceIds": [
				"documented-20260930-renner-2026"
			]
		},
		{
			"label": "Comparaison documentée et limite de choix",
			"value": "Montrer le compromis entre les configurations 13 bar et 7,5 bar du même 3 kW sans créer une courbe multi-versions.",
			"evidenceIds": [
				"review-20261025-s081-p18",
				"review-20261025-s082-p3"
			]
		}
	],
	"editorial": {
		"overview": "Le RS-PRO 3.0 article 310002 est la configuration 13 bar : le catalogue publie 290 L/min à cette pression, pour 3 kW et 153 kg, sans réservoir intégré. L’article 310000 publie 540 L/min à 7,5 bar avec la même puissance et la même masse. Ces deux points appartiennent à des références distinctes : le choix dépend de la pression nécessaire au poste, et le débit 540 L/min ne doit pas être attribué à l’article 310002.",
		"verifiedFacts": [
			"Puissance moteur publiée : 3 kW ; poids de cette configuration : 153 kg.",
			"Débit restitué documenté : 290 L/min à 13 bar.",
			"La documentation de la série prévoit le fonctionnement continu, sous ses conditions d’installation et d’entretien."
		],
		"limitations": [
			"La pression 13 bar identifie la configuration retenue ; elle ne qualifie pas une soupape ni le réglage d’une autre référence.",
			"Le catalogue revendique ISO 1217 annexeC. Aucun point de l’article 310000 n’est ajouté à la courbe du 310002.",
			"La brochure constructeur RS-PRO décrit le service continu de cette série ; installation, refroidissement et entretien restent à respecter. Disponibilité actuelle non confirmée."
		]
	},
	"evidence": [
		{
			"id": "documented-20260930-renner-2026",
			"sourceUrl": "https://www.renner-kompressoren.de/fileadmin/DATA/Medien/Newsletter/Deutsch/03_2026/RENNER_-_Produktkatalog_-_2026_-_DE_3.pdf",
			"sourceLabel": "RENNER, catalogue 2026 : renner-2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "Document constructeur consulté le 2026-09-30. SHA-256 35bd2421c2cc333bc6a0d6cd20c09bbf6b3c2af621021cb6cd2a254d23e74f8a. La transcription et les pages PDF sont versionnées dans le lot documentaire. Le lieu d’hébergement ne constitue pas une validation indépendante."
		},
		{
			"id": "documented-20260930-renner-belt-hbg",
			"sourceUrl": "https://shop.hbg-kompressoren.de/wp-content/uploads/2018/11/Prospekt_RS-PRO_RSF-PRO_30-110_DE.pdf",
			"sourceLabel": "Brochure constructeur RENNER RS-PRO 3–11 / RSF-PRO 5,5–11, hébergée par HBG",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "Document constructeur consulté le 2026-09-30. SHA-256 9c0fb8f947202b1d1f0a04ceef4d26ed8863e8b6cbfe9d1f1451bf603a1f0ae8. La transcription et les pages PDF sont versionnées dans le lot documentaire. Le lieu d’hébergement ne constitue pas une validation indépendante."
		},
		{
			"id": "review-20261025-s081-p18",
			"sourceUrl": "https://www.renner-kompressoren.de/fileadmin/DATA/Medien/Newsletter/Deutsch/03_2026/RENNER_-_Produktkatalog_-_2026_-_DE_3.pdf#page=18",
			"sourceLabel": "RENNER, relecture primaire du 25 octobre 2026, s081, page PDF 18",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 35bd2421c2cc333bc6a0d6cd20c09bbf6b3c2af621021cb6cd2a254d23e74f8a. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s082-p3",
			"sourceUrl": "https://shop.hbg-kompressoren.de/wp-content/uploads/2018/11/Prospekt_RS-PRO_RSF-PRO_30-110_DE.pdf#page=3",
			"sourceLabel": "RENNER, relecture primaire du 25 octobre 2026, s082, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 9c0fb8f947202b1d1f0a04ceef4d26ed8863e8b6cbfe9d1f1451bf603a1f0ae8. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-20260930-renner-2026"
		],
		"fadCurve": [
			"documented-20260930-renner-2026"
		],
		"tankLiters": [
			"documented-20260930-renner-2026"
		],
		"maxPressureBar": [
			"documented-20260930-renner-2026"
		],
		"oilType": [
			"documented-20260930-renner-2026"
		],
		"powerKw": [
			"documented-20260930-renner-2026"
		],
		"weightKg": [
			"documented-20260930-renner-2026"
		],
		"dutyCycle": [
			"documented-20260930-renner-belt-hbg"
		],
		"maxPressureBasis": [
			"review-20261025-s081-p18"
		]
	},
	"notes": [
		"Tableau de configuration : page PDF 18.",
		"Code d’article constructeur 310002, colonne 3."
	],
	"maxPressureBasis": "selected-working-pressure-ceiling"
};

export default product;
