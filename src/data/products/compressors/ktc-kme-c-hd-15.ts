import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "ktc-kme-c-hd-15",
	"slug": "ktc-kme-c-hd-15",
	"brand": "KTC",
	"model": "KME C HD 15",
	"mpn": "162072301",
	"variant": {
		"familyId": "ktc-kme-c-hd-15",
		"label": "grounded",
		"distinguishingAttributes": {
			"équipement": "grounded",
			"pressionDeConfiguration": "10 bar",
			"cuve": "0 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10,
	"maxPressureBasis": "selected-working-pressure-ceiling",
	"fadCurve": [
		{
			"pressureBar": 10,
			"litersPerMinute": 2040
		}
	],
	"powerKw": 15,
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/ktc-kme-c-hd-15.svg",
		"alt": "Repères techniques : KTC KME C HD 15",
		"sourceUrl": "https://www.ktc-air.com/uploaded_files/attachments/202511171763376673/ktc_kme_c_plus_4_55_en.pdf?track_download=true",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "grounded",
			"evidenceIds": [
				"october4-ktc-download-4-p4"
			]
		},
		{
			"label": "Pression de la configuration retenue",
			"value": "10 bar",
			"evidenceIds": [
				"october4-ktc-download-4-p4"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Stockage intégré absent, montage constructeur documenté",
			"evidenceIds": [
				"october4-ktc-download-4-p4"
			]
		},
		{
			"label": "Air livré à 10 bar",
			"value": "2 040 L/min",
			"evidenceIds": [
				"october4-ktc-download-4-p4"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "15 kW",
			"evidenceIds": [
				"october4-ktc-download-4-p4"
			]
		},
		{
			"label": "Fréquence de la configuration retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october4-ktc-download-4-p4"
			]
		}
	],
	"editorial": {
		"overview": "KTC KME C HD 15. 2 040 L/min déclarés à 10 bar. grounded.",
		"verifiedFacts": [
			"Configuration de pression documentée : 10 bar.",
			"Montage sans réservoir de stockage intégré explicitement documenté.",
			"FAD sous pression identifié séparément des valeurs d’aspiration : 2 040 L/min déclarés à 10 bar."
		],
		"limitations": [
			"La version constructeur 10 bar est conservée avec son code. Les variantes 8 et 13 bar ne constituent pas de nouveaux modèles CompatAir.",
			"Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
			"Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
			"Le plafond CompatAir correspond à la pression de travail de la version retenue. Il ne décrit ni la soupape ni le maximum de toutes les versions de la famille."
		]
	},
	"evidence": [
		{
			"id": "october4-ktc-download-4-p4",
			"sourceUrl": "https://www.ktc-air.com/uploaded_files/attachments/202511171763376673/ktc_kme_c_plus_4_55_en.pdf?track_download=true#page=4",
			"sourceLabel": "KTC, KME C PLUS 4–55, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-04",
			"confidence": "B",
			"notes": "SHA-256 90262fa5be288a704088e70f800049ab76cec4331e237b1b7d65d338ea95d4ac de la réponse HTTP originale. Données constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october4-ktc-download-4-p2",
			"sourceUrl": "https://www.ktc-air.com/uploaded_files/attachments/202511171763376673/ktc_kme_c_plus_4_55_en.pdf?track_download=true#page=2",
			"sourceLabel": "KTC, KME C PLUS 4–55, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-04",
			"confidence": "B",
			"notes": "SHA-256 90262fa5be288a704088e70f800049ab76cec4331e237b1b7d65d338ea95d4ac de la réponse HTTP originale. Données constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"maxPressureBasis": [
			"october4-ktc-download-4-p4"
		],
		"model": [
			"october4-ktc-download-4-p4"
		],
		"maxPressureBar": [
			"october4-ktc-download-4-p4"
		],
		"tankLiters": [
			"october4-ktc-download-4-p4"
		],
		"fadCurve": [
			"october4-ktc-download-4-p4"
		],
		"powerKw": [
			"october4-ktc-download-4-p4"
		],
		"oilType": [
			"october4-ktc-download-4-p2"
		],
		"mpn": [
			"october4-ktc-download-4-p4"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
