import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "sil-air-baby-s",
	"slug": "sil-air-baby-s",
	"brand": "SIL-AIR",
	"model": "BABY S",
	"variant": {
		"familyId": "sil-air-baby-s",
		"label": "Compresseur sur cuve 0.25 L",
		"distinguishingAttributes": {
			"équipement": "Compresseur sur cuve 0.25 L",
			"pressionDeConfiguration": "2,5 bar",
			"cuve": "0,25 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 0.25,
	"maxPressureBar": 2.5,
	"fadCurve": [
		{
			"pressureBar": 1,
			"litersPerMinute": 5
		}
	],
	"powerKw": 0.06,
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/sil-air-baby-s.svg",
		"alt": "Repères techniques : SIL-AIR BABY S",
		"sourceUrl": "https://cdn.prod.website-files.com/5ef4a20d28c31157474872b0/6a4fceb90145c46f2acc6262_SILAIR%202025.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Compresseur sur cuve 0.25 L",
			"evidenceIds": [
				"october4-silair-current-catalog-p36"
			]
		},
		{
			"label": "Pression maximale de fonctionnement publiée",
			"value": "2,5 bar",
			"evidenceIds": [
				"october4-silair-current-catalog-p36"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "0,25 L",
			"evidenceIds": [
				"october4-silair-current-catalog-p36"
			]
		},
		{
			"label": "Air livré à 1 bar",
			"value": "5 L/min",
			"evidenceIds": [
				"october4-silair-current-catalog-p36",
				"october4-silair-current-catalog-p5"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0,06 kW",
			"evidenceIds": [
				"october4-silair-current-catalog-p36"
			]
		},
		{
			"label": "Fréquence de la configuration retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october4-silair-current-catalog-p36"
			]
		}
	],
	"editorial": {
		"overview": "SIL-AIR BABY S. 5 L/min déclarés à 1 bar. Compresseur sur cuve 0.25 L.",
		"verifiedFacts": [
			"Configuration de pression documentée : 2,5 bar.",
			"Cuve de stockage documentée : 0,25 L.",
			"FAD sous pression identifié séparément des valeurs d’aspiration : 5 L/min déclarés à 1 bar."
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
			"id": "october4-silair-current-catalog-p36",
			"sourceUrl": "https://cdn.prod.website-files.com/5ef4a20d28c31157474872b0/6a4fceb90145c46f2acc6262_SILAIR%202025.pdf#page=36",
			"sourceLabel": "Werther International / SIL-AIR, catalogue constructeur, page PDF 36",
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
			"october4-silair-current-catalog-p36"
		],
		"maxPressureBar": [
			"october4-silair-current-catalog-p36"
		],
		"tankLiters": [
			"october4-silair-current-catalog-p36"
		],
		"fadCurve": [
			"october4-silair-current-catalog-p36",
			"october4-silair-current-catalog-p5"
		],
		"powerKw": [
			"october4-silair-current-catalog-p36"
		],
		"oilType": [
			"october4-silair-current-catalog-p36"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
