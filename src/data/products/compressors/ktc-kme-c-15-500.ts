import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "ktc-kme-c-15-500",
	"slug": "ktc-kme-c-15-500",
	"brand": "KTC",
	"model": "KME C 15 500",
	"mpn": "162072305",
	"variant": {
		"familyId": "ktc-kme-c-15-500",
		"label": "on tank ; cuve 500 L",
		"distinguishingAttributes": {
			"équipement": "on tank ; cuve 500 L",
			"pressionDeConfiguration": "10 bar",
			"cuve": "500 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 500,
	"maxPressureBar": 10,
	"maxPressureBasis": "selected-working-pressure-ceiling",
	"fadCurve": [],
	"powerKw": 15,
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/ktc-kme-c-15-500-technical-20261115-followup.svg",
		"alt": "Repères techniques : KTC KME C 15 500",
		"sourceUrl": "https://www.ktc-air.com/uploaded_files/attachments/202511171763376673/ktc_kme_c_plus_4_55_en.pdf?track_download=true",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "on tank ; cuve 500 L",
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
			"value": "500 L",
			"evidenceIds": [
				"october4-ktc-download-4-p4"
			]
		},
		{
			"label": "Débit documentaire, pression de mesure non qualifiée",
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
		"overview": "KTC KME C 15 500, code 162072305 : groupe de 15 kW sur cuve de 500 L, sans le suffixe E du sécheur intégré. Son encombrement publié est de 190 × 69 × 161 cm, contre 149 × 69 × 152 cm sur cuve de 270 L. Le tableau ISO 1217 publie 2 040 L/min sur la ligne de configuration 10 bar ; faute de pression de mesure identifiée séparément, aucun point FAD n’est utilisé pour le calcul.",
		"verifiedFacts": [
			"Configuration de pression documentée : 10 bar.",
			"Cuve de stockage documentée : 500 L."
		],
		"limitations": [
			"La version constructeur 10 bar est conservée avec son code. Les variantes 8 et 13 bar ne constituent pas de nouveaux modèles CompatAir.",
			"Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
			"Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
			"Le plafond CompatAir correspond à la pression de travail de la version retenue. Il ne décrit ni la soupape ni le maximum de toutes les versions de la famille.",
			"Le tableau donne un débit ISO 1217 et une colonne de pression de configuration, sans identifier explicitement la pression de mesure du débit. Aucun point FAD apparié n’est retenu."
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
		},
		{
			"id": "review:2026-11-12-technical:ktc-kme-c-15-500:0",
			"sourceUrl": "https://www.ktc-air.com/uploaded_files/attachments/202511171763376673/ktc_kme_c_plus_4_55_en.pdf?track_download=true",
			"sourceLabel": "KTC, document fabricant, pages PDF 2, 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "Le tableau donne un débit ISO 1217 et une colonne de pression de configuration, sans identifier explicitement la pression de mesure du débit. Aucun point FAD apparié n’est retenu. GET complet : SHA-256 90262fa5be288a704088e70f800049ab76cec4331e237b1b7d65d338ea95d4ac. Transcriptions historiques conservées."
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
		"powerKw": [
			"october4-ktc-download-4-p4"
		],
		"oilType": [
			"october4-ktc-download-4-p2"
		],
		"mpn": [
			"october4-ktc-download-4-p4"
		],
		"fadCurve": [
			"review:2026-11-12-technical:ktc-kme-c-15-500:0"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
