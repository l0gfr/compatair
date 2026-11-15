import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "ktc-kme-c-4-270-e",
	"slug": "ktc-kme-c-4-270-e",
	"brand": "KTC",
	"model": "KME C 4 270 E",
	"mpn": "161032304",
	"variant": {
		"familyId": "ktc-kme-c-4-270-e",
		"label": "on tank with dryer ; cuve 270 L",
		"distinguishingAttributes": {
			"équipement": "on tank with dryer ; cuve 270 L",
			"pressionDeConfiguration": "10 bar",
			"cuve": "270 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 270,
	"maxPressureBar": 10,
	"maxPressureBasis": "selected-working-pressure-ceiling",
	"fadCurve": [],
	"powerKw": 4,
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/ktc-kme-c-4-270-e-technical-20261115-followup.svg",
		"alt": "Repères techniques : KTC KME C 4 270 E",
		"sourceUrl": "https://www.ktc-air.com/uploaded_files/attachments/202511171763376673/ktc_kme_c_plus_4_55_en.pdf?track_download=true",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "on tank with dryer ; cuve 270 L",
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
			"value": "270 L",
			"evidenceIds": [
				"october4-ktc-download-4-p4"
			]
		},
		{
			"label": "Débit documentaire, pression de mesure non qualifiée",
			"value": "490 L/min",
			"evidenceIds": [
				"october4-ktc-download-4-p4"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "4 kW",
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
		"overview": "KTC KME C 4 270 E, code 161032304 : ensemble de 4 kW sur cuve de 270 L avec sécheur, alimenté en 400 V triphasé 50 Hz. Le modèle 4 270 sans E conserve la cuve mais pas le sécheur ; le 4 E est sur socle, sans cette cuve. Le séchage et l’encombrement sont à choisir séparément du débit. Les 490 L/min de la ligne 10 bar restent documentaires, sans point FAD de mesure suffisamment qualifié.",
		"verifiedFacts": [
			"Configuration de pression documentée : 10 bar.",
			"Cuve de stockage documentée : 270 L."
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
			"id": "review:2026-11-12-technical:ktc-kme-c-4-270-e:0",
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
			"review:2026-11-12-technical:ktc-kme-c-4-270-e:0"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
