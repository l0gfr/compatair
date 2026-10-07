import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "sil-air-tc108-special",
	"slug": "sil-air-tc108-special",
	"brand": "SIL-AIR",
	"model": "TC108 SPECIAL",
	"variant": {
		"familyId": "sil-air-tc108-special",
		"label": "Compresseur sur cuve 1.5 L",
		"distinguishingAttributes": {
			"équipement": "Compresseur sur cuve 1.5 L",
			"pressionDeConfiguration": "3,8 bar",
			"cuve": "1,5 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 1.5,
	"maxPressureBar": 3.8,
	"fadCurve": [
		{
			"pressureBar": 1,
			"litersPerMinute": 15
		}
	],
	"powerKw": 0.115,
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/sil-air-tc108-special.svg",
		"alt": "Repères techniques : SIL-AIR TC108 SPECIAL",
		"sourceUrl": "https://cdn.prod.website-files.com/5ef4a20d28c31157474872b0/6a4fceb90145c46f2acc6262_SILAIR%202025.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Compresseur sur cuve 1.5 L",
			"evidenceIds": [
				"october4-silair-current-catalog-p31"
			]
		},
		{
			"label": "Pression maximale de fonctionnement publiée",
			"value": "3,8 bar",
			"evidenceIds": [
				"october4-silair-current-catalog-p31"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "1,5 L",
			"evidenceIds": [
				"october4-silair-current-catalog-p31"
			]
		},
		{
			"label": "Air livré à 1 bar",
			"value": "15 L/min",
			"evidenceIds": [
				"october4-silair-current-catalog-p31",
				"october4-silair-current-catalog-p5"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0,115 kW",
			"evidenceIds": [
				"october4-silair-current-catalog-p31"
			]
		},
		{
			"label": "Fréquence de la configuration retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october4-silair-current-catalog-p31"
			]
		}
	],
	"editorial": {
		"overview": "SIL-AIR TC108 SPECIAL. 15 L/min déclarés à 1 bar. Compresseur sur cuve 1.5 L.",
		"verifiedFacts": [
			"Configuration de pression documentée : 3,8 bar.",
			"Cuve de stockage documentée : 1,5 L.",
			"FAD sous pression identifié séparément des valeurs d’aspiration : 15 L/min déclarés à 1 bar."
		],
		"limitations": [
			"Colonne 50 Hz retenue. La ligne 60 Hz n’est pas utilisée pour augmenter le FAD.",
			"La pression du FAD est inférieure au maximum mécanique ; aucun FAD n’est extrapolé jusqu’à ce maximum.",
			"Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
			"Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil."
		]
	},
	"evidence": [
		{
			"id": "october4-silair-current-catalog-p31",
			"sourceUrl": "https://cdn.prod.website-files.com/5ef4a20d28c31157474872b0/6a4fceb90145c46f2acc6262_SILAIR%202025.pdf#page=31",
			"sourceLabel": "Werther International / SIL-AIR, catalogue constructeur, page PDF 31",
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
			"october4-silair-current-catalog-p31"
		],
		"maxPressureBar": [
			"october4-silair-current-catalog-p31"
		],
		"tankLiters": [
			"october4-silair-current-catalog-p31"
		],
		"fadCurve": [
			"october4-silair-current-catalog-p31",
			"october4-silair-current-catalog-p5"
		],
		"powerKw": [
			"october4-silair-current-catalog-p31"
		],
		"oilType": [
			"october4-silair-current-catalog-p31"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
