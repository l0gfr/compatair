import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "sil-air-100-50-v",
	"slug": "sil-air-100-50-v",
	"brand": "SIL-AIR",
	"model": "100/50 V",
	"variant": {
		"familyId": "sil-air-100-50-v",
		"label": "Compresseur sur cuve 50 L avec ventilateurs de refroidissement",
		"distinguishingAttributes": {
			"équipement": "Compresseur sur cuve 50 L avec ventilateurs de refroidissement",
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
		"src": "/images/products/sil-air-100-50-v.svg",
		"alt": "Repères techniques : SIL-AIR 100/50 V",
		"sourceUrl": "https://cdn.prod.website-files.com/5ef4a20d28c31157474872b0/6a4fceb90145c46f2acc6262_SILAIR%202025.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Compresseur sur cuve 50 L avec ventilateurs de refroidissement",
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
		},
		{
			"label": "Comparaison documentée et limite de choix",
			"value": "Éviter de transformer la présence de ventilateurs en preuve de service continu ou de débit supérieur par rapport au 100/50.",
			"evidenceIds": [
				"review-20261025-s116-p5",
				"review-20261025-s116-p26"
			]
		}
	],
	"editorial": {
		"overview": "Le 100/50 V ajoute des ventilateurs de refroidissement au 100/50 sur cuve 50 L. Le tableau commun publie 74 L/min à 5 bar et 680 W en 230 V/50 Hz ; il ne chiffre aucun supplément de débit pour la version V. Le choix de cette version porte sur l’équipement de refroidissement. Les ventilateurs ne permettent pas, à eux seuls, de conclure à un cycle de service 100 %.",
		"verifiedFacts": [
			"Configuration de pression documentée : 8 bar.",
			"Cuve de stockage documentée : 50 L.",
			"FAD sous pression identifié séparément des valeurs d’aspiration : 74 L/min déclarés à 5 bar."
		],
		"limitations": [
			"Lecture visuelle du tableau :74 L/min et 680 W correspondent à 230 V/50 Hz ;88 L/min appartient à 115 V/60 Hz et reste exclu.",
			"Les 100 L/min d’aspiration ne remplacent pas les 74 L/min livrés à 5 bar. Le maximum 8 bar ne crée pas un point de FAD à 8 bar.",
			"Le cycle de service n’est pas documenté. Aucun gain de tenue thermique chiffré ni de débit n’est attribué aux ventilateurs.",
			"La version V et la version standard partagent les valeurs du tableau ; disponibilité et configuration livrée à confirmer."
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
			"id": "review-20261025-s116-p5",
			"sourceUrl": "https://cdn.prod.website-files.com/5ef4a20d28c31157474872b0/6a4fceb90145c46f2acc6262_SILAIR%202025.pdf#page=5",
			"sourceLabel": "SIL-AIR, relecture primaire du 25 octobre 2026, s116, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 d93f1024b6fa89f01eaacc77c199f3d2f5deb296b92dedf6081ab8568854468a. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s116-p26",
			"sourceUrl": "https://cdn.prod.website-files.com/5ef4a20d28c31157474872b0/6a4fceb90145c46f2acc6262_SILAIR%202025.pdf#page=26",
			"sourceLabel": "SIL-AIR, relecture primaire du 25 octobre 2026, s116, page PDF 26",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 d93f1024b6fa89f01eaacc77c199f3d2f5deb296b92dedf6081ab8568854468a. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
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
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
