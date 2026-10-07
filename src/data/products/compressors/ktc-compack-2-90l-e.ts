import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "ktc-compack-2-90l-e",
	"slug": "ktc-compack-2-90l-e",
	"brand": "KTC",
	"model": "COMPACK 2 90L + E",
	"mpn": "1850120509",
	"variant": {
		"familyId": "ktc-compack-2-90l-e",
		"label": "COMPACK sur réservoir 90 L et sécheur",
		"distinguishingAttributes": {
			"équipement": "COMPACK sur réservoir 90 L et sécheur",
			"pressionDeConfiguration": "10 bar",
			"cuve": "90 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 90,
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
		"src": "/images/products/ktc-compack-2-90l-e.svg",
		"alt": "Repères techniques : KTC COMPACK 2 90L + E",
		"sourceUrl": "https://www.ktc-air.com/uploaded_files/attachments/202511171763374769/ktc_compack_2_3_smart_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "COMPACK sur réservoir 90 L et sécheur",
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
			"value": "90 L",
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
		}
	],
	"editorial": {
		"overview": "KTC COMPACK 2 90L + E. 270 L/min déclarés à 10 bar. COMPACK sur réservoir 90 L et sécheur.",
		"verifiedFacts": [
			"Configuration de pression documentée : 10 bar.",
			"Cuve de stockage documentée : 90 L.",
			"FAD sous pression identifié séparément des valeurs d’aspiration : 270 L/min déclarés à 10 bar."
		],
		"limitations": [
			"Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
			"Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil."
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
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
