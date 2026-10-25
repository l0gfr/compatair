import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "ktc-compack-2-90-l",
	"slug": "ktc-compack-2-90-l",
	"brand": "KTC",
	"model": "COMPACK 2 90 L",
	"mpn": "1850120508",
	"variant": {
		"familyId": "ktc-compack-2-90-l",
		"label": "COMPACK sur réservoir 90 L",
		"distinguishingAttributes": {
			"équipement": "COMPACK sur réservoir 90 L",
			"cuve": "90 L",
			"fréquence": "50 Hz",
			"pressionMaximale": "10 bar"
		}
	},
	"tankLiters": 90,
	"maxPressureBar": 10,
	"fadCurve": [],
	"powerKw": 2.7,
	"oilType": "unknown",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/ktc-compack-2-90-l.svg",
		"alt": "Repères techniques : KTC COMPACK 2 90 L",
		"sourceUrl": "https://www.ktc-air.com/uploaded_files/attachments/202511171763374769/ktc_compack_2_3_smart_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "COMPACK sur réservoir 90 L",
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
			"label": "Débit publié selon ISO 1217, annexe C",
			"value": "270 L/min ; pression de mesure à confirmer.",
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
		"overview": "Le COMPACK 2 90 L, référence 1850120508, réunit un réservoir de 90 L, un moteur de 2,7 kW et une alimentation monophasée de 230 V à 50 Hz. La version verticale 1850120513 porte le stockage à 270 L et conserve les 270 L/min publiés. Leurs dimensions sont de 117 × 46 × 96 cm et 64 × 67 × 170 cm : le choix dépend du stockage et de la hauteur disponible. Le catalogue qualifie le débit selon ISO 1217, annexe C ; il donne séparément un maximum de 10 bar. La pression de mesure du débit reste à confirmer avant un verdict de compatibilité.",
		"verifiedFacts": [
			"Pression maximale publiée : 10 bar.",
			"Cuve de stockage documentée : 90 L.",
			"Débit publié selon ISO 1217, annexe C : 270 L/min ; pression de mesure à confirmer."
		],
		"limitations": [
			"Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
			"Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
			"Pression de mesure du débit non explicitée dans la source relue ; la pression maximale reste distincte du point de mesure. Compatibilité dépendante du débit indéterminée."
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
		"powerKw": [
			"october4-ktc-download-0-p2"
		],
		"mpn": [
			"october4-ktc-download-0-p2"
		],
		"editorial": [
			"october4-ktc-download-0-p2"
		],
		"specifications": [
			"october4-ktc-download-0-p2"
		],
		"fadCurve": [
			"october4-ktc-download-0-p2"
		]
	},
	"notes": [
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
