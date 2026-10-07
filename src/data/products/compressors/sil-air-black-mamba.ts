import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "sil-air-black-mamba",
	"slug": "sil-air-black-mamba",
	"brand": "SIL-AIR",
	"model": "Black Mamba",
	"variant": {
		"familyId": "sil-air-black-mamba",
		"label": "Compresseur sur cuve 3.5 L",
		"distinguishingAttributes": {
			"équipement": "Compresseur sur cuve 3.5 L",
			"pressionDeConfiguration": "7 bar",
			"cuve": "3,5 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 3.5,
	"maxPressureBar": 7,
	"fadCurve": [
		{
			"pressureBar": 5,
			"litersPerMinute": 52
		}
	],
	"dutyCycle": 1,
	"powerKw": 0.501,
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/sil-air-black-mamba.svg",
		"alt": "Repères techniques : SIL-AIR Black Mamba",
		"sourceUrl": "https://cdn.prod.website-files.com/5ef4a20d28c31157474872b0/6a4fceb90145c46f2acc6262_SILAIR%202025.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Compresseur sur cuve 3.5 L",
			"evidenceIds": [
				"october4-silair-current-catalog-p43"
			]
		},
		{
			"label": "Pression maximale de fonctionnement publiée",
			"value": "7 bar",
			"evidenceIds": [
				"october4-silair-current-catalog-p43"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "3,5 L",
			"evidenceIds": [
				"october4-silair-current-catalog-p43"
			]
		},
		{
			"label": "Air livré à 5 bar",
			"value": "52 L/min",
			"evidenceIds": [
				"october4-silair-current-catalog-p43",
				"october4-silair-current-catalog-p5"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0,501 kW",
			"evidenceIds": [
				"october4-silair-current-catalog-p43"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "100 %",
			"evidenceIds": [
				"october4-silair-current-catalog-p43"
			]
		},
		{
			"label": "Fréquence de la configuration retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october4-silair-current-catalog-p43"
			]
		}
	],
	"editorial": {
		"overview": "SIL-AIR Black Mamba. 52 L/min déclarés à 5 bar. Compresseur sur cuve 3.5 L.",
		"verifiedFacts": [
			"Configuration de pression documentée : 7 bar.",
			"Cuve de stockage documentée : 3,5 L.",
			"FAD sous pression identifié séparément des valeurs d’aspiration : 52 L/min déclarés à 5 bar."
		],
		"limitations": [
			"Colonne 50 Hz retenue. La ligne 60 Hz n’est pas utilisée pour augmenter le FAD.",
			"La pression du FAD est inférieure au maximum mécanique ; aucun FAD n’est extrapolé jusqu’à ce maximum.",
			"Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer."
		]
	},
	"evidence": [
		{
			"id": "october4-silair-current-catalog-p43",
			"sourceUrl": "https://cdn.prod.website-files.com/5ef4a20d28c31157474872b0/6a4fceb90145c46f2acc6262_SILAIR%202025.pdf#page=43",
			"sourceLabel": "Werther International / SIL-AIR, catalogue constructeur, page PDF 43",
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
			"october4-silair-current-catalog-p43"
		],
		"maxPressureBar": [
			"october4-silair-current-catalog-p43"
		],
		"tankLiters": [
			"october4-silair-current-catalog-p43"
		],
		"fadCurve": [
			"october4-silair-current-catalog-p43",
			"october4-silair-current-catalog-p5"
		],
		"powerKw": [
			"october4-silair-current-catalog-p43"
		],
		"oilType": [
			"october4-silair-current-catalog-p43"
		],
		"dutyCycle": [
			"october4-silair-current-catalog-p43"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
