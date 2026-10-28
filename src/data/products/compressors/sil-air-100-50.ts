import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "sil-air-100-50",
	"slug": "sil-air-100-50",
	"brand": "SIL-AIR",
	"model": "100/50",
	"variant": {
		"familyId": "sil-air-100-50",
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
			"litersPerMinute": 74
		}
	],
	"powerKw": 0.68,
	"oilType": "unknown",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/sil-air-100-50.svg",
		"alt": "Repères techniques : SIL-AIR 100/50",
		"sourceUrl": "https://cdn.prod.website-files.com/5ef4a20d28c31157474872b0/6a4fceb90145c46f2acc6262_SILAIR%202025.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Compresseur sur cuve 50 L",
			"evidenceIds": [
				"october4-silair-current-catalog-p26"
			]
		},
		{
			"label": "Pression maximale de fonctionnement publiée",
			"value": "8 bar",
			"evidenceIds": [
				"october4-silair-current-catalog-p26"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "50 L",
			"evidenceIds": [
				"october4-silair-current-catalog-p26"
			]
		},
		{
			"label": "Air livré à 5 bar",
			"value": "74 L/min",
			"evidenceIds": [
				"october4-silair-current-catalog-p26",
				"october4-silair-current-catalog-p5"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0,68 kW",
			"evidenceIds": [
				"october4-silair-current-catalog-p26"
			]
		},
		{
			"label": "Fréquence de la configuration retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october4-silair-current-catalog-p26"
			]
		}
	],
	"editorial": {
		"overview": "SIL-AIR 100/50 en 230 V, 50 Hz : 74 L/min de FAD à 5 bar, deux moteurs et une cuve de 50 L. Le 50/24 publie 37 L/min au même point avec une cuve de 24 L. Le nombre 100 du modèle correspond au débit aspiré affiché de 100 L/min. Le maximum de 8 bar ne fournit aucun nouveau point FAD à 6,3 ou 8 bar.",
		"verifiedFacts": [
			"Configuration de pression documentée : 8 bar.",
			"Cuve de stockage documentée : 50 L.",
			"FAD sous pression identifié séparément des valeurs d’aspiration : 74 L/min déclarés à 5 bar.",
			"Comparaison des colonnes 50 Hz : 100/50, 74 L/min à 5 bar et 680 W publiés ; 50/24, 37 L/min à 5 bar et 340 W.",
			"Les valeurs de 88 et 44 L/min à 5 bar appartiennent aux colonnes 115 V, 60 Hz ; elles restent distinctes de la sélection 50 Hz."
		],
		"limitations": [
			"Colonne 50 Hz retenue. La ligne 60 Hz n’est pas utilisée pour augmenter le FAD.",
			"La pression du FAD est inférieure au maximum mécanique ; aucun FAD n’est extrapolé jusqu’à ce maximum.",
			"Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
			"Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
			"Aucun point de la courbe dessinée n’est estimé à partir des pixels ; seul le point numérique de 5 bar est retenu."
		]
	},
	"evidence": [
		{
			"id": "october4-silair-current-catalog-p26",
			"sourceUrl": "https://cdn.prod.website-files.com/5ef4a20d28c31157474872b0/6a4fceb90145c46f2acc6262_SILAIR%202025.pdf#page=26",
			"sourceLabel": "Werther International / SIL-AIR, catalogue constructeur, page PDF 26",
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
			"id": "review-20261028-sil-air-100-50-1",
			"sourceUrl": "https://cdn.prod.website-files.com/5ef4a20d28c31157474872b0/6a4fceb90145c46f2acc6262_SILAIR%202025.pdf#page=5",
			"sourceLabel": "Relecture du modèle et de son voisin, 28 octobre 2026, pages PDF 5, 23, 26",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-28",
			"confidence": "B",
			"notes": "Réponse primaire complète relue le 28 octobre 2026 ; SHA-256 d93f1024b6fa89f01eaacc77c199f3d2f5deb296b92dedf6081ab8568854468a. Comparaison documentaire, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october4-silair-current-catalog-p26"
		],
		"maxPressureBar": [
			"october4-silair-current-catalog-p26"
		],
		"tankLiters": [
			"october4-silair-current-catalog-p26"
		],
		"fadCurve": [
			"october4-silair-current-catalog-p26",
			"october4-silair-current-catalog-p5"
		],
		"powerKw": [
			"october4-silair-current-catalog-p26"
		],
		"editorial": [
			"review-20261028-sil-air-100-50-1"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
