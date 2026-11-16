import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "renner-rsd-pro-11-0-310265",
	"slug": "renner-rsd-pro-11-0-310265",
	"brand": "RENNER",
	"model": "RSD-PRO 11.0",
	"mpn": "310265",
	"variant": {
		"familyId": "renner-rsd-pro-11-0",
		"label": "Cuve publiée : 250 L ; 13 bar",
		"distinguishingAttributes": {
			"reference": "310265",
			"pression": "13 bar",
			"cuve": "250 L",
			"configuration": "Cuve publiée : 250 L"
		}
	},
	"tankLiters": 250,
	"maxPressureBar": 13,
	"fadCurve": [
		{
			"pressureBar": 13,
			"litersPerMinute": 1290
		}
	],
	"oilType": "oil",
	"powerKw": 11,
	"weightKg": 302,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/renner-rsd-pro-11-0-310265-technical-20261116-reviews.svg",
		"alt": "Repères techniques : RENNER RSD-PRO 11.0, article 310265",
		"sourceUrl": "https://shop.hbg-kompressoren.de/wp-content/uploads/2018/11/Prospekt_RS-PRO_RSF-PRO_30-110_DE.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 26",
			"evidenceIds": [
				"documented-20260930-renner-2026"
			]
		},
		{
			"label": "Configuration publiée",
			"value": "Cuve publiée : 250 L",
			"evidenceIds": [
				"documented-20260930-renner-2026"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "1397 × 612 × 1624 mm",
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
		}
	],
	"editorial": {
		"overview": "La RSD-PRO 11,0 référence 310265 est la version 13 bar sur réservoir de 250 L, sans le sécheur de la RSDK. Le catalogue donne 1,29 m³/min selon ISO 1217 annexe C, pour 11 kW. La 310266 porte le même stockage avec 15 bar et 1,11 m³/min ; la version à cuve de 500 L change la longueur. Le taux de marche numérique du groupe n’étant pas établi par la table, il reste inconnu.",
		"verifiedFacts": [
			"Puissance moteur publiée : 11 kW ; poids de cette configuration : 302 kg.",
			"Débit restitué documenté : 1 290 L/min à 13 bar."
		],
		"limitations": [
			"La disponibilité commerciale actuelle n’a pas été confirmée.",
			"Les débits des autres versions de pression ne sont pas ajoutés à la courbe de cet article.",
			"Le service continu documenté ne dispense pas du contrôle du refroidissement, du traitement d’air et des pertes du réseau.",
			"Le taux de marche du groupe complet n’est pas chiffré par les passages retenus ; aucune valeur numérique n’est déduite du service du moteur ou d’une promesse générale."
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
			"id": "review:2026-11-16-reviews:renner-rsd-pro-11-0-310265:0",
			"sourceUrl": "https://shop.hbg-kompressoren.de/wp-content/uploads/2018/11/Prospekt_RS-PRO_RSF-PRO_30-110_DE.pdf",
			"sourceLabel": "RENNER, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La RSD-PRO 11,0 référence 310265 est la version 13 bar sur réservoir de 250 L, sans le sécheur de la RSDK. Le catalogue donne 1,29 m³/min selon ISO 1217 annexe C, pour 11 kW. La 310266 porte le même stockage avec 15 bar et 1,11 m³/min ; la version à cuve de 500 L change la longueur. Le taux de marche numérique du groupe n’étant pas établi par la table, il reste inconnu. GET complet SHA-256 9c0fb8f947202b1d1f0a04ceef4d26ed8863e8b6cbfe9d1f1451bf603a1f0ae8. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		},
		{
			"id": "review:2026-11-16-reviews:renner-rsd-pro-11-0-310265:1",
			"sourceUrl": "https://www.renner-kompressoren.de/fileadmin/DATA/Medien/Newsletter/Deutsch/03_2026/RENNER_-_Produktkatalog_-_2026_-_DE_3.pdf",
			"sourceLabel": "RENNER, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La RSD-PRO 11,0 référence 310265 est la version 13 bar sur réservoir de 250 L, sans le sécheur de la RSDK. Le catalogue donne 1,29 m³/min selon ISO 1217 annexe C, pour 11 kW. La 310266 porte le même stockage avec 15 bar et 1,11 m³/min ; la version à cuve de 500 L change la longueur. Le taux de marche numérique du groupe n’étant pas établi par la table, il reste inconnu. GET complet SHA-256 35bd2421c2cc333bc6a0d6cd20c09bbf6b3c2af621021cb6cd2a254d23e74f8a. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
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
		]
	},
	"notes": [
		"Tableau de configuration : page PDF 26.",
		"Code d’article constructeur 310265, colonne 3."
	]
};

export default product;
