import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "sil-air-50-15",
	"slug": "sil-air-50-15",
	"brand": "SIL-AIR",
	"model": "50/15",
	"variant": {
		"familyId": "sil-air-50-15",
		"label": "Compresseur sur cuve 15 L",
		"distinguishingAttributes": {
			"équipement": "Compresseur sur cuve 15 L",
			"pressionDeConfiguration": "8 bar",
			"cuve": "15 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 15,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 5,
			"litersPerMinute": 37
		}
	],
	"powerKw": 0.34,
	"oilType": "unknown",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/sil-air-50-15.svg",
		"alt": "Repères techniques : SIL-AIR 50/15",
		"sourceUrl": "https://cdn.prod.website-files.com/5ef4a20d28c31157474872b0/6a4fceb90145c46f2acc6262_SILAIR%202025.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Compresseur sur cuve 15 L",
			"evidenceIds": [
				"october4-silair-current-catalog-p22"
			]
		},
		{
			"label": "Pression maximale de fonctionnement publiée",
			"value": "8 bar",
			"evidenceIds": [
				"october4-silair-current-catalog-p22"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "15 L",
			"evidenceIds": [
				"october4-silair-current-catalog-p22"
			]
		},
		{
			"label": "Air livré à 5 bar",
			"value": "37 L/min",
			"evidenceIds": [
				"october4-silair-current-catalog-p22",
				"october4-silair-current-catalog-p5"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0,34 kW",
			"evidenceIds": [
				"october4-silair-current-catalog-p22"
			]
		},
		{
			"label": "Fréquence de la configuration retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october4-silair-current-catalog-p22"
			]
		}
	],
	"editorial": {
		"overview": "SIL-AIR 50/15. 37 L/min déclarés à 5 bar. Compresseur sur cuve 15 L.",
		"verifiedFacts": [
			"Configuration de pression documentée : 8 bar.",
			"Cuve de stockage documentée : 15 L.",
			"FAD sous pression identifié séparément des valeurs d’aspiration : 37 L/min déclarés à 5 bar."
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
			"id": "october4-silair-current-catalog-p22",
			"sourceUrl": "https://cdn.prod.website-files.com/5ef4a20d28c31157474872b0/6a4fceb90145c46f2acc6262_SILAIR%202025.pdf#page=22",
			"sourceLabel": "Werther International / SIL-AIR, catalogue constructeur, page PDF 22",
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
			"october4-silair-current-catalog-p22"
		],
		"maxPressureBar": [
			"october4-silair-current-catalog-p22"
		],
		"tankLiters": [
			"october4-silair-current-catalog-p22"
		],
		"fadCurve": [
			"october4-silair-current-catalog-p22",
			"october4-silair-current-catalog-p5"
		],
		"powerKw": [
			"october4-silair-current-catalog-p22"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
