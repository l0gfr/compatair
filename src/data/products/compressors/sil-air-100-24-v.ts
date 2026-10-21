import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "sil-air-100-24-v",
	"slug": "sil-air-100-24-v",
	"brand": "SIL-AIR",
	"model": "100/24 V",
	"variant": {
		"familyId": "sil-air-100-24-v",
		"label": "Compresseur sur cuve 24 L avec ventilateurs de refroidissement",
		"distinguishingAttributes": {
			"équipement": "Compresseur sur cuve 24 L avec ventilateurs de refroidissement",
			"pressionDeConfiguration": "8 bar",
			"cuve": "24 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 24,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 5,
			"litersPerMinute": 74
		}
	],
	"powerKw": 0.68,
	"oilType": "unknown",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/sil-air-100-24-v.svg",
		"alt": "Repères techniques : SIL-AIR 100/24 V",
		"sourceUrl": "https://cdn.prod.website-files.com/5ef4a20d28c31157474872b0/6a4fceb90145c46f2acc6262_SILAIR%202025.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Compresseur sur cuve 24 L avec ventilateurs de refroidissement",
			"evidenceIds": [
				"october4-silair-current-catalog-p25"
			]
		},
		{
			"label": "Pression maximale de fonctionnement publiée",
			"value": "8 bar",
			"evidenceIds": [
				"october4-silair-current-catalog-p25"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "24 L",
			"evidenceIds": [
				"october4-silair-current-catalog-p25"
			]
		},
		{
			"label": "Air livré à 5 bar",
			"value": "74 L/min",
			"evidenceIds": [
				"october4-silair-current-catalog-p25",
				"october4-silair-current-catalog-p5"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0,68 kW",
			"evidenceIds": [
				"october4-silair-current-catalog-p25"
			]
		},
		{
			"label": "Fréquence de la configuration retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october4-silair-current-catalog-p25"
			]
		}
	],
	"editorial": {
		"overview": "SIL-AIR 100/24 V : modèle sur chariot avec deux moteurs et ventilateurs de refroidissement, cuve de 24 L. La colonne 230 V à 50 Hz publie 74 L/min à 5 bar pour 680 W. Le 100/24 sans suffixe V figure sur la même page, sans ventilateurs annoncés.",
		"verifiedFacts": [
			"Configuration de pression documentée : 8 bar.",
			"Cuve de stockage documentée : 24 L.",
			"FAD sous pression identifié séparément des valeurs d’aspiration : 74 L/min déclarés à 5 bar."
		],
		"limitations": [
			"Les valeurs de 88 L/min et 800 W appartiennent à la colonne 115 V à 60 Hz. Elles ne sont pas transférées à la version 230 V à 50 Hz.",
			"Le tableau commun indique 50 kg nets et 55 kg emballés. Les dimensions A × B × C sont de 360 × 650 × 550 mm pour la machine et de 370 × 800 × 650 mm pour l’emballage.",
			"Le catalogue n’isole pas une masse ni un gain de débit propre aux ventilateurs du V ; aucun supplément de performance n’en est déduit.",
			"Le FAD connu à 5 bar ne permet pas de conclure pour un outil demandant 6,3 bar. Le taux de marche reste inconnu."
		]
	},
	"evidence": [
		{
			"id": "october4-silair-current-catalog-p25",
			"sourceUrl": "https://cdn.prod.website-files.com/5ef4a20d28c31157474872b0/6a4fceb90145c46f2acc6262_SILAIR%202025.pdf#page=25",
			"sourceLabel": "Werther International / SIL-AIR, catalogue constructeur, page PDF 25",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-04",
			"confidence": "B",
			"notes": "SHA-256 d93f1024b6fa89f01eaacc77c199f3d2f5deb296b92dedf6081ab8568854468a de la réponse HTTP originale. Données constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october4-silair-current-catalog-p5",
			"sourceUrl": "https://cdn.prod.website-files.com/5ef4a20d28c31157474872b0/6a4fceb90145c46f2acc6262_SILAIR%202025.pdf#page=5",
			"sourceLabel": "Werther International / SIL-AIR, catalogue constructeur, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-04",
			"confidence": "B",
			"notes": "SHA-256 d93f1024b6fa89f01eaacc77c199f3d2f5deb296b92dedf6081ab8568854468a de la réponse HTTP originale. Données constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october4-silair-current-catalog-p25"
		],
		"maxPressureBar": [
			"october4-silair-current-catalog-p25"
		],
		"tankLiters": [
			"october4-silair-current-catalog-p25"
		],
		"fadCurve": [
			"october4-silair-current-catalog-p25",
			"october4-silair-current-catalog-p5"
		],
		"powerKw": [
			"october4-silair-current-catalog-p25"
		],
		"voltage": [
			"october4-silair-current-catalog-p25"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	],
	"voltage": "230 V, 50 Hz"
};

export default product;
