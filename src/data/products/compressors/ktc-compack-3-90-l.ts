import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "ktc-compack-3-90-l",
	"slug": "ktc-compack-3-90-l",
	"brand": "KTC",
	"model": "COMPACK 3 90 L",
	"mpn": "1860323508",
	"variant": {
		"familyId": "ktc-compack-3-90-l",
		"label": "COMPACK sur réservoir 90 L",
		"distinguishingAttributes": {
			"équipement": "COMPACK sur réservoir 90 L",
			"pressionDeConfiguration": "10 bar",
			"cuve": "90 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 90,
	"maxPressureBar": 10,
	"fadCurve": [],
	"powerKw": 4,
	"oilType": "unknown",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/ktc-compack-3-90-l.svg",
		"alt": "Repères techniques : KTC COMPACK 3 90 L",
		"sourceUrl": "https://www.ktc-air.com/uploaded_files/attachments/202511171763374769/ktc_compack_2_3_smart_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Code",
			"value": "1860323508",
			"evidenceIds": [
				"ktc-compack-3-90-l-reserved-20261103-1"
			]
		},
		{
			"label": "Configuration",
			"value": "Cuve 90 L, sans sécheur",
			"evidenceIds": [
				"ktc-compack-3-90-l-reserved-20261103-1"
			]
		},
		{
			"label": "Débit publié",
			"value": "380 L/min selon ISO 1217 annexe C ; pression de mesure non explicitée",
			"evidenceIds": [
				"ktc-compack-3-90-l-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "4 kW",
			"evidenceIds": [
				"ktc-compack-3-90-l-reserved-20261103-1"
			]
		},
		{
			"label": "Alimentation",
			"value": "400 V / 50 Hz / 3 phases",
			"evidenceIds": [
				"ktc-compack-3-90-l-reserved-20261103-1"
			]
		},
		{
			"label": "Masse de la colonne kg",
			"value": "75 kg",
			"evidenceIds": [
				"ktc-compack-3-90-l-reserved-20261103-1"
			]
		},
		{
			"label": "Dimensions L×W×H",
			"value": "117 × 46 × 96 cm",
			"evidenceIds": [
				"ktc-compack-3-90-l-reserved-20261103-1"
			]
		}
	],
	"editorial": {
		"overview": "KTC COMPACK 3 90 L. Le code 1860323508 correspond à la COMPACK 3 sur 90 L sans sécheur. Les codes 1860323508 et 1860323509 conservent le même débit publié mais annoncent 75 et 107 kg et des encombrements distincts. La colonne Pressure max 10 bar ne prouve pas la pression de mesure des 380 L/min ; le point est retiré du calcul.",
		"verifiedFacts": [
			"Code : 1860323508.",
			"Configuration : Cuve 90 L, sans sécheur.",
			"Débit publié : 380 L/min selon ISO 1217 annexe C ; pression de mesure non explicitée.",
			"Puissance : 4 kW.",
			"Alimentation : 400 V / 50 Hz / 3 phases.",
			"Masse de la colonne kg : 75 kg.",
			"Dimensions L×W×H : 117 × 46 × 96 cm."
		],
		"limitations": [
			"Pression maximale 10 bar séparée de la pression de mesure FAD non explicitée.",
			"Les colonnes kg et lbs contiennent des écarts de conversion ; les valeurs kg sont reproduites comme déclarations, sans les convertir depuis lbs."
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
			"id": "ktc-compack-3-90-l-reserved-20261103-1",
			"sourceUrl": "https://www.ktc-air.com/uploaded_files/attachments/202511171763374769/ktc_compack_2_3_smart_en.pdf#page=3",
			"sourceLabel": "KTC : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 fb8e9e3d886333a85e6b0fd720cf06c451a2fc0826c8f816c536109d9bcb06ea. Le code 1860323508 correspond à la COMPACK 3 sur 90 L sans sécheur. Les codes 1860323508 et 1860323509 conservent le même débit publié mais annoncent 75 et 107 kg et des encombrements distincts. La colonne Pressure max 10 bar ne prouve pas la pression de mesure des 380 L/min ; le point est retiré du calcul."
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
			"ktc-compack-3-90-l-reserved-20261103-1"
		],
		"powerKw": [
			"october4-ktc-download-0-p3"
		],
		"mpn": [
			"october4-ktc-download-0-p3"
		],
		"weightKg": [
			"ktc-compack-3-90-l-reserved-20261103-1"
		],
		"phase": [
			"ktc-compack-3-90-l-reserved-20261103-1"
		],
		"voltage": [
			"ktc-compack-3-90-l-reserved-20261103-1"
		],
		"editorial": [
			"ktc-compack-3-90-l-reserved-20261103-1"
		],
		"specifications": [
			"ktc-compack-3-90-l-reserved-20261103-1"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	],
	"weightKg": 75,
	"phase": "three-phase",
	"voltage": "400 V / 50 Hz"
};

export default product;
