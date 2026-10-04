const product: unknown = {
	"id": "ktc-compack-3-8l-trolley",
	"slug": "ktc-compack-3-8l-trolley",
	"brand": "KTC",
	"model": "COMPACK 3 8L Trolley",
	"mpn": "1860323514",
	"variant": {
		"familyId": "ktc-compack-3-8l-trolley",
		"label": "COMPACK sur réservoir 8 L",
		"distinguishingAttributes": {
			"équipement": "COMPACK sur réservoir 8 L",
			"pressionDeConfiguration": "10 bar",
			"cuve": "8 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 8,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 380
		}
	],
	"powerKw": 4,
	"oilType": "unknown",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/ktc-compack-3-8l-trolley.svg",
		"alt": "Repères techniques : KTC COMPACK 3 8L Trolley",
		"sourceUrl": "https://www.ktc-air.com/uploaded_files/attachments/202511171763374769/ktc_compack_2_3_smart_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "COMPACK sur réservoir 8 L",
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
			"value": "8 L",
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
		}
	],
	"editorial": {
		"overview": "KTC COMPACK 3 8L Trolley. 380 L/min déclarés à 10 bar. COMPACK sur réservoir 8 L.",
		"verifiedFacts": [
			"Configuration de pression documentée : 10 bar.",
			"Cuve de stockage documentée : 8 L.",
			"FAD sous pression identifié séparément des valeurs d’aspiration : 380 L/min déclarés à 10 bar."
		],
		"limitations": [
			"Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
			"Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil."
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
			"october4-ktc-download-0-p3"
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
