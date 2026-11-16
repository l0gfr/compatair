import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "sil-air-50-tc",
	"slug": "sil-air-50-tc",
	"brand": "SIL-AIR",
	"model": "50 TC",
	"variant": {
		"familyId": "sil-air-50-tc",
		"label": "Compresseur sur cuve 3.5 L",
		"distinguishingAttributes": {
			"équipement": "Compresseur sur cuve 3.5 L",
			"pressionDeConfiguration": "8 bar",
			"cuve": "3,5 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 3.5,
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
		"src": "/images/products/sil-air-50-tc-technical-20261116-reviews.svg",
		"alt": "Repères techniques : SIL-AIR 50 TC",
		"sourceUrl": "https://cdn.prod.website-files.com/5ef4a20d28c31157474872b0/6a4fceb90145c46f2acc6262_SILAIR%202025.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Compresseur sur cuve 3.5 L",
			"evidenceIds": [
				"october4-silair-current-catalog-p13"
			]
		},
		{
			"label": "Pression maximale de fonctionnement publiée",
			"value": "8 bar",
			"evidenceIds": [
				"october4-silair-current-catalog-p13"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "3,5 L",
			"evidenceIds": [
				"october4-silair-current-catalog-p13"
			]
		},
		{
			"label": "Air livré à 5 bar",
			"value": "37 L/min",
			"evidenceIds": [
				"october4-silair-current-catalog-p13",
				"october4-silair-current-catalog-p5"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0,34 kW",
			"evidenceIds": [
				"october4-silair-current-catalog-p13"
			]
		},
		{
			"label": "Fréquence de la configuration retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october4-silair-current-catalog-p13"
			]
		}
	],
	"editorial": {
		"overview": "Le Sil-Air 50TC 230 V/50 Hz publie 37 L/min FAD à 5 bar, pour 340 W et une cuve 3,5 L. Le 50D augmente la cuve à 6 L ; les versions 115 V/60 Hz ont d’autres débits. Les 50 L/min aspirés restent distincts des 37 restitués. La pression maximale 8 bar ne devient pas un second point de courbe et le cycle du groupe n’est pas supposé.",
		"verifiedFacts": [
			"Configuration de pression documentée : 8 bar.",
			"Cuve de stockage documentée : 3,5 L.",
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
			"id": "october4-silair-current-catalog-p13",
			"sourceUrl": "https://cdn.prod.website-files.com/5ef4a20d28c31157474872b0/6a4fceb90145c46f2acc6262_SILAIR%202025.pdf#page=13",
			"sourceLabel": "Werther International / SIL-AIR, catalogue constructeur, page PDF 13",
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
			"id": "review:2026-11-16-reviews:sil-air-50-tc:0",
			"sourceUrl": "https://cdn.prod.website-files.com/5ef4a20d28c31157474872b0/6a4fceb90145c46f2acc6262_SILAIR%202025.pdf",
			"sourceLabel": "SIL-AIR, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le Sil-Air 50TC 230 V/50 Hz publie 37 L/min FAD à 5 bar, pour 340 W et une cuve 3,5 L. Le 50D augmente la cuve à 6 L ; les versions 115 V/60 Hz ont d’autres débits. Les 50 L/min aspirés restent distincts des 37 restitués. La pression maximale 8 bar ne devient pas un second point de courbe et le cycle du groupe n’est pas supposé. GET complet SHA-256 d93f1024b6fa89f01eaacc77c199f3d2f5deb296b92dedf6081ab8568854468a. Pages PDF lues : 13, 5."
		}
	],
	"fieldSources": {
		"model": [
			"october4-silair-current-catalog-p13"
		],
		"maxPressureBar": [
			"october4-silair-current-catalog-p13"
		],
		"tankLiters": [
			"october4-silair-current-catalog-p13"
		],
		"fadCurve": [
			"october4-silair-current-catalog-p13",
			"october4-silair-current-catalog-p5"
		],
		"powerKw": [
			"october4-silair-current-catalog-p13"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
