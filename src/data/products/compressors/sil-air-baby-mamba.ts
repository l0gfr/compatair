import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "sil-air-baby-mamba",
	"slug": "sil-air-baby-mamba",
	"brand": "SIL-AIR",
	"model": "Baby Mamba",
	"variant": {
		"familyId": "sil-air-baby-mamba",
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
			"litersPerMinute": 49
		}
	],
	"powerKw": 0.45,
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/sil-air-baby-mamba-technical-20261116-reviews.svg",
		"alt": "Repères techniques : SIL-AIR Baby Mamba",
		"sourceUrl": "https://cdn.prod.website-files.com/5ef4a20d28c31157474872b0/6a4fceb90145c46f2acc6262_SILAIR%202025.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Compresseur sur cuve 3.5 L",
			"evidenceIds": [
				"october4-silair-current-catalog-p44"
			]
		},
		{
			"label": "Pression maximale de fonctionnement publiée",
			"value": "7 bar",
			"evidenceIds": [
				"october4-silair-current-catalog-p44"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "3,5 L",
			"evidenceIds": [
				"october4-silair-current-catalog-p44"
			]
		},
		{
			"label": "Air livré à 5 bar",
			"value": "49 L/min",
			"evidenceIds": [
				"october4-silair-current-catalog-p44",
				"october4-silair-current-catalog-p5"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0,45 kW",
			"evidenceIds": [
				"october4-silair-current-catalog-p44"
			]
		},
		{
			"label": "Fréquence de la configuration retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october4-silair-current-catalog-p44"
			]
		}
	],
	"editorial": {
		"overview": "Le Baby Mamba 230 V/50 Hz utilise un réservoir 3,5 L et annonce 49 L/min FAD à 5 bar, pour 450 W et un maximum de 7 bar. Les 92 L/min de déplacement sont séparés du débit restitué. Les autres petits modèles de la gamme ont des motorisations et points différents ; la version 115 V/60 Hz ne reprend pas automatiquement le même débit. Aucun cycle de service numérique n’est ajouté.",
		"verifiedFacts": [
			"Configuration de pression documentée : 7 bar.",
			"Cuve de stockage documentée : 3,5 L.",
			"FAD sous pression identifié séparément des valeurs d’aspiration : 49 L/min déclarés à 5 bar."
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
			"id": "october4-silair-current-catalog-p44",
			"sourceUrl": "https://cdn.prod.website-files.com/5ef4a20d28c31157474872b0/6a4fceb90145c46f2acc6262_SILAIR%202025.pdf#page=44",
			"sourceLabel": "Werther International / SIL-AIR, catalogue constructeur, page PDF 44",
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
			"id": "review:2026-11-16-reviews:sil-air-baby-mamba:0",
			"sourceUrl": "https://cdn.prod.website-files.com/5ef4a20d28c31157474872b0/6a4fceb90145c46f2acc6262_SILAIR%202025.pdf",
			"sourceLabel": "SIL-AIR, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le Baby Mamba 230 V/50 Hz utilise un réservoir 3,5 L et annonce 49 L/min FAD à 5 bar, pour 450 W et un maximum de 7 bar. Les 92 L/min de déplacement sont séparés du débit restitué. Les autres petits modèles de la gamme ont des motorisations et points différents ; la version 115 V/60 Hz ne reprend pas automatiquement le même débit. Aucun cycle de service numérique n’est ajouté. GET complet SHA-256 d93f1024b6fa89f01eaacc77c199f3d2f5deb296b92dedf6081ab8568854468a. Pages PDF lues : 44, 5."
		}
	],
	"fieldSources": {
		"model": [
			"october4-silair-current-catalog-p44"
		],
		"maxPressureBar": [
			"october4-silair-current-catalog-p44"
		],
		"tankLiters": [
			"october4-silair-current-catalog-p44"
		],
		"fadCurve": [
			"october4-silair-current-catalog-p44",
			"october4-silair-current-catalog-p5"
		],
		"powerKw": [
			"october4-silair-current-catalog-p44"
		],
		"oilType": [
			"october4-silair-current-catalog-p44"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
