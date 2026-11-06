import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "ktc-compack-3",
	"slug": "ktc-compack-3",
	"brand": "KTC",
	"model": "COMPACK 3",
	"mpn": "1860323507",
	"variant": {
		"familyId": "ktc-compack-3",
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
	"fadCurve": [],
	"powerKw": 4,
	"oilType": "unknown",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/ktc-compack-3-20261106.svg",
		"alt": "Repères techniques : KTC COMPACK 3",
		"sourceUrl": "https://www.ktc-air.com/uploaded_files/attachments/202511171763374769/ktc_compack_2_3_smart_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "COMPACK sur réservoir 2.5 L",
			"evidenceIds": [
				"october4-ktc-download-0-p3"
			]
		},
		{
			"label": "Pression maximale de fonctionnement publiée",
			"value": "10 bar",
			"evidenceIds": [
				"october4-ktc-download-0-p3"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "2,5 L",
			"evidenceIds": [
				"october4-ktc-download-0-p3"
			]
		},
		{
			"label": "Air livré à 10 bar",
			"value": "380 L/min",
			"evidenceIds": [
				"october4-ktc-download-0-p3"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "4 kW",
			"evidenceIds": [
				"october4-ktc-download-0-p3"
			]
		},
		{
			"label": "Fréquence de la configuration retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october4-ktc-download-0-p3"
			]
		},
		{
			"label": "Débit historiquement apparié, mesure à confirmer",
			"value": "380 L/min ; pression associée antérieurement 10 bar",
			"evidenceIds": [
				"review:2026-11-06-followup:ktc-compack-3:1"
			]
		}
	],
	"editorial": {
		"overview": "KTC COMPACK 3. Le débit déclaré reste conservé dans les spécifications. La pression maximale ne prouve pas la pression de mesure du FAD ; compatibilité indéterminée.",
		"verifiedFacts": [
			"Configuration de pression documentée : 10 bar.",
			"Cuve de stockage documentée : 2,5 L."
		],
		"limitations": [
			"La petite cuve de 2,5 L est explicitement publiée, y compris pour la version grounded. Elle n’est pas remplacée par zéro.",
			"Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
			"Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
			"Table p3 : code1860323507,4 kW400V50Hz,2,5 L,48 kg,67 ×40 ×50 cm. Airflow380 L/min et pressionmax10 bar sont publiés côteàcôte sans note de mesure explicite ; garder380 documentaire et suspendre le point moteur."
		]
	},
	"evidence": [
		{
			"id": "october4-ktc-download-0-p3",
			"sourceUrl": "https://www.ktc-air.com/uploaded_files/attachments/202511171763374769/ktc_compack_2_3_smart_en.pdf#page=3",
			"sourceLabel": "KTC, COMPACK 2 et 3 SMART, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-04",
			"confidence": "B",
			"notes": "SHA-256 fb8e9e3d886333a85e6b0fd720cf06c451a2fc0826c8f816c536109d9bcb06ea de la réponse HTTP originale. Données constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-06-followup:ktc-compack-3:1",
			"sourceUrl": "https://www.ktc-air.com/uploaded_files/attachments/202511171763374769/ktc_compack_2_3_smart_en.pdf#page=3",
			"sourceLabel": "KTC, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Table p3 : code1860323507,4 kW400V50Hz,2,5 L,48 kg,67 ×40 ×50 cm. Airflow380 L/min et pressionmax10 bar sont publiés côteàcôte sans note de mesure explicite ; garder380 documentaire et suspendre le point moteur. SHA-256 du document complet : fb8e9e3d886333a85e6b0fd720cf06c451a2fc0826c8f816c536109d9bcb06ea."
		}
	],
	"fieldSources": {
		"model": [
			"october4-ktc-download-0-p3"
		],
		"maxPressureBar": [
			"october4-ktc-download-0-p3"
		],
		"tankLiters": [
			"october4-ktc-download-0-p3"
		],
		"fadCurve": [
			"review:2026-11-06-followup:ktc-compack-3:1"
		],
		"powerKw": [
			"october4-ktc-download-0-p3"
		],
		"mpn": [
			"october4-ktc-download-0-p3"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
