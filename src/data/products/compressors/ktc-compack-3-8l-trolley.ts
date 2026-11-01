import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
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
	"fadCurve": [],
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
			"label": "Débit déclaré, pression de mesure non appariée",
			"value": "380 L/min",
			"evidenceIds": [
				"ktc-compack-3-8l-trolley-reserved-20261101-1"
			]
		}
	],
	"editorial": {
		"overview": "KTC COMPACK 3 8L Trolley. La table distingue une pression maximale ou de configuration et le débit déclaré, sans convention explicite qui apparie le FAD à ce point. Retrait du point calculé ; conservation des chiffres documentaires et des unités.",
		"verifiedFacts": [
			"Configuration de pression documentée : 10 bar.",
			"Cuve de stockage documentée : 8 L."
		],
		"limitations": [
			"Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
			"Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
			"La table distingue une pression maximale ou de configuration et le débit déclaré, sans convention explicite qui apparie le FAD à ce point. Retrait du point calculé ; conservation des chiffres documentaires et des unités."
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
			"id": "ktc-compack-3-8l-trolley-reserved-20261101-1",
			"sourceUrl": "https://www.ktc-air.com/uploaded_files/attachments/202511171763374769/ktc_compack_2_3_smart_en.pdf#page=3",
			"sourceLabel": "KTC : revue factuelle du 1 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 fb8e9e3d886333a85e6b0fd720cf06c451a2fc0826c8f816c536109d9bcb06ea. Passage page=3. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
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
			"ktc-compack-3-8l-trolley-reserved-20261101-1"
		],
		"powerKw": [
			"october4-ktc-download-0-p3"
		],
		"mpn": [
			"october4-ktc-download-0-p3"
		],
		"editorial": [
			"ktc-compack-3-8l-trolley-reserved-20261101-1"
		],
		"specifications": [
			"ktc-compack-3-8l-trolley-reserved-20261101-1"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
