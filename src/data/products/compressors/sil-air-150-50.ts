import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "sil-air-150-50",
	"slug": "sil-air-150-50",
	"brand": "SIL-AIR",
	"model": "150/50",
	"variant": {
		"familyId": "sil-air-150-50",
		"label": "Compresseur sur cuve 50 L",
		"distinguishingAttributes": {
			"équipement": "Compresseur sur cuve 50 L",
			"pressionDeConfiguration": "8 bar",
			"cuve": "50 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 50,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 5,
			"litersPerMinute": 111
		}
	],
	"powerKw": 1.02,
	"oilType": "unknown",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/sil-air-150-50.svg",
		"alt": "Repères techniques : SIL-AIR 150/50",
		"sourceUrl": "https://cdn.prod.website-files.com/5ef4a20d28c31157474872b0/6a4fceb90145c46f2acc6262_SILAIR%202025.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Compresseur sur cuve 50 L",
			"evidenceIds": [
				"october4-silair-current-catalog-p27"
			]
		},
		{
			"label": "Pression maximale de fonctionnement publiée",
			"value": "8 bar",
			"evidenceIds": [
				"october4-silair-current-catalog-p27"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "50 L",
			"evidenceIds": [
				"october4-silair-current-catalog-p27"
			]
		},
		{
			"label": "Air livré à 5 bar",
			"value": "111 L/min",
			"evidenceIds": [
				"october4-silair-current-catalog-p27",
				"october4-silair-current-catalog-p5"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "1,02 kW",
			"evidenceIds": [
				"october4-silair-current-catalog-p27"
			]
		},
		{
			"label": "Fréquence de la configuration retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october4-silair-current-catalog-p27"
			]
		},
		{
			"label": "Configuration",
			"value": "3 moteurs, cuve 50 L",
			"evidenceIds": [
				"sil-air-150-50-reserved-20261103-1"
			]
		},
		{
			"label": "FAD à 5 bar, 50 Hz",
			"value": "111 L/min",
			"evidenceIds": [
				"sil-air-150-50-reserved-20261103-1"
			]
		},
		{
			"label": "Alimentation",
			"value": "230 V / 50 Hz",
			"evidenceIds": [
				"sil-air-150-50-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "1020 W",
			"evidenceIds": [
				"sil-air-150-50-reserved-20261103-1"
			]
		}
	],
	"editorial": {
		"overview": "SIL-AIR 150/50. La 150/50 utilise trois moteurs et donne 111 L/min à 5 bar sur 50 L ; la 200/100 utilise quatre moteurs et donne 148 L/min sur 100 L. Les versions V ajoutent des ventilateurs ; les lignes 115 V / 60 Hz donnent d’autres débits, non repris pour cette version. Le maximum 8 bar ne fournit pas de FAD à 8 bar.",
		"verifiedFacts": [
			"Configuration de pression documentée : 8 bar.",
			"Cuve de stockage documentée : 50 L.",
			"FAD sous pression identifié séparément des valeurs d’aspiration : 111 L/min déclarés à 5 bar.",
			"Configuration : 3 moteurs, cuve 50 L.",
			"FAD à 5 bar, 50 Hz : 111 L/min.",
			"Alimentation : 230 V / 50 Hz.",
			"Puissance publiée : 1020 W."
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
			"id": "october4-silair-current-catalog-p27",
			"sourceUrl": "https://cdn.prod.website-files.com/5ef4a20d28c31157474872b0/6a4fceb90145c46f2acc6262_SILAIR%202025.pdf#page=27",
			"sourceLabel": "Werther International / SIL-AIR, catalogue constructeur, page PDF 27",
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
		},
		{
			"id": "sil-air-150-50-reserved-20261103-1",
			"sourceUrl": "https://cdn.prod.website-files.com/5ef4a20d28c31157474872b0/6a4fceb90145c46f2acc6262_SILAIR%202025.pdf#page=27",
			"sourceLabel": "SIL-AIR : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 d93f1024b6fa89f01eaacc77c199f3d2f5deb296b92dedf6081ab8568854468a. La 150/50 utilise trois moteurs et donne 111 L/min à 5 bar sur 50 L ; la 200/100 utilise quatre moteurs et donne 148 L/min sur 100 L. Les versions V ajoutent des ventilateurs ; les lignes 115 V / 60 Hz donnent d’autres débits, non repris pour cette version. Le maximum 8 bar ne fournit pas de FAD à 8 bar."
		}
	],
	"fieldSources": {
		"model": [
			"october4-silair-current-catalog-p27"
		],
		"maxPressureBar": [
			"october4-silair-current-catalog-p27"
		],
		"tankLiters": [
			"october4-silair-current-catalog-p27"
		],
		"fadCurve": [
			"october4-silair-current-catalog-p27",
			"october4-silair-current-catalog-p5"
		],
		"powerKw": [
			"october4-silair-current-catalog-p27"
		],
		"voltage": [
			"sil-air-150-50-reserved-20261103-1"
		],
		"editorial": [
			"sil-air-150-50-reserved-20261103-1"
		],
		"specifications": [
			"sil-air-150-50-reserved-20261103-1"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	],
	"voltage": "230 V / 50 Hz"
};

export default product;
