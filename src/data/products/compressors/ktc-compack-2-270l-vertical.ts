import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "ktc-compack-2-270l-vertical",
	"slug": "ktc-compack-2-270l-vertical",
	"brand": "KTC",
	"model": "COMPACK 2 270L vertical",
	"mpn": "1850120513",
	"variant": {
		"familyId": "ktc-compack-2-270l-vertical",
		"label": "COMPACK sur réservoir 270 L",
		"distinguishingAttributes": {
			"équipement": "COMPACK sur réservoir 270 L",
			"pressionDeConfiguration": "10 bar",
			"cuve": "270 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 270,
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
		"src": "/images/products/ktc-compack-2-270l-vertical.svg",
		"alt": "Repères techniques : KTC COMPACK 2 270L vertical",
		"sourceUrl": "https://www.ktc-air.com/uploaded_files/attachments/202511171763374769/ktc_compack_2_3_smart_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "COMPACK sur réservoir 270 L",
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
			"value": "270 L",
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
		"overview": "COMPACK 2 sur cuve verticale de 270 L, code 1850120513 : moteur de 2,7 kW en 230 V monophasé à 50 Hz, avec 270 L/min à 10 bar. Le montage 90 L 1850120508 conserve ces caractéristiques de groupe, avec un réservoir horizontal.",
		"verifiedFacts": [
			"Configuration de pression documentée : 10 bar.",
			"Cuve de stockage documentée : 270 L.",
			"FAD sous pression identifié séparément des valeurs d’aspiration : 270 L/min déclarés à 10 bar."
		],
		"limitations": [
			"Le 270 L mesure 64 × 67 × 170 cm et indique 123 kg dans la colonne kg ; le 90 L mesure 117 × 46 × 96 cm et indique 75 kg. Les colonnes lb affichent respectivement 275 et 176, valeurs non équivalentes aux masses en kg : faire confirmer la masse avant manutention.",
			"La version 400 V triphasée porte le code 1850223513, avec 3 kW et 300 L/min. Ses performances ne sont pas transférées au code 1850120513.",
			"Le débit est associé à ISO 1217 annexe C. Le taux de marche demeure inconnu ; la mention d’usage non continu ne permet pas de renseigner un taux de 100 %.",
			"Implantation, alimentation et contenu de la commande restent à confirmer pour la référence exacte."
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
