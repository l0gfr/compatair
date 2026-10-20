import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "ktc-compack-2-2-5l-trolley",
	"slug": "ktc-compack-2-2-5l-trolley",
	"brand": "KTC",
	"model": "COMPACK 2 2.5L Trolley",
	"mpn": "1850120520",
	"variant": {
		"familyId": "ktc-compack-2-2-5l-trolley",
		"label": "COMPACK sur réservoir 2.5 L",
		"distinguishingAttributes": {
			"équipement": "COMPACK sur réservoir 2.5 L",
			"pressionDeConfiguration": "10 bar",
			"cuve": "2,5 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 2.5,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 270
		}
	],
	"powerKw": 2.7,
	"oilType": "unknown",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/ktc-compack-2-2-5l-trolley.svg",
		"alt": "Repères techniques : KTC COMPACK 2 2.5L Trolley",
		"sourceUrl": "https://www.ktc-air.com/uploaded_files/attachments/202511171763374769/ktc_compack_2_3_smart_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "COMPACK sur réservoir 2.5 L",
			"evidenceIds": [
				"october4-ktc-download-0-p2"
			]
		},
		{
			"label": "Pression maximale de fonctionnement publiée",
			"value": "10 bar",
			"evidenceIds": [
				"october4-ktc-download-0-p2"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "2,5 L",
			"evidenceIds": [
				"october4-ktc-download-0-p2"
			]
		},
		{
			"label": "Air livré à 10 bar",
			"value": "270 L/min",
			"evidenceIds": [
				"october4-ktc-download-0-p2"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "2,7 kW",
			"evidenceIds": [
				"october4-ktc-download-0-p2"
			]
		},
		{
			"label": "Fréquence de la configuration retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october4-ktc-download-0-p2"
			]
		},
		{
			"label": "Alimentation de cette référence",
			"value": "230 V, 50 Hz, monophasé",
			"evidenceIds": [
				"october4-ktc-download-0-p2"
			]
		}
	],
	"editorial": {
		"overview": "COMPACK 2 2.5 L Trolley, code 1850120520 : groupe à vis de 2,7 kW, cuve 2,5 L et 270 L/min à 10 bar, en 230 V monophasé à 50 Hz. La version grounded 1850120507 conserve ces caractéristiques, avec 48 kg contre 52 kg pour le Trolley.",
		"verifiedFacts": [
			"Configuration de pression documentée : 10 bar.",
			"Cuve de stockage documentée : 2,5 L.",
			"FAD sous pression identifié séparément des valeurs d’aspiration : 270 L/min déclarés à 10 bar."
		],
		"limitations": [
			"Le Trolley mesure 68 × 55 × 92 cm ; le grounded, 67 × 40 × 50 cm. La mobilité et l’encombrement distinguent les deux codes.",
			"Pour le grounded, le tableau associe 48 kg à 101,4 lb, deux valeurs non équivalentes. Sa masse doit être confirmée avant manutention ; la colonne kg est reprise telle quelle dans la comparaison.",
			"La version triphasée 400 V porte un autre code et publie 300 L/min ; ses performances ne sont pas transférées au 1850120520.",
			"Le débit est associé à la note ISO 1217 annexe C. Le taux de marche reste inconnu ; la possibilité d’un usage non continu décrite dans la brochure ne qualifie pas un service 100 %.",
			"Référence et volume 2,5 L explicites du tableau ; disponibilité et raccordement à confirmer avant commande."
		]
	},
	"evidence": [
		{
			"id": "october4-ktc-download-0-p2",
			"sourceUrl": "https://www.ktc-air.com/uploaded_files/attachments/202511171763374769/ktc_compack_2_3_smart_en.pdf#page=2",
			"sourceLabel": "KTC, COMPACK 2 et 3 SMART, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-04",
			"confidence": "B",
			"notes": "SHA-256 fb8e9e3d886333a85e6b0fd720cf06c451a2fc0826c8f816c536109d9bcb06ea de la réponse HTTP originale. Données constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october4-ktc-download-0-p2"
		],
		"maxPressureBar": [
			"october4-ktc-download-0-p2"
		],
		"tankLiters": [
			"october4-ktc-download-0-p2"
		],
		"fadCurve": [
			"october4-ktc-download-0-p2"
		],
		"powerKw": [
			"october4-ktc-download-0-p2"
		],
		"mpn": [
			"october4-ktc-download-0-p2"
		],
		"voltage": [
			"october4-ktc-download-0-p2"
		],
		"phase": [
			"october4-ktc-download-0-p2"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	],
	"voltage": "230 V, 50 Hz",
	"phase": "single-phase"
};

export default product;
