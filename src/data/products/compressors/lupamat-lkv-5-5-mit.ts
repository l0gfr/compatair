const product: unknown = {
	"id": "lupamat-lkv-5-5-mit",
	"slug": "lupamat-lkv-5-5-mit",
	"brand": "Lupamat",
	"model": "LKV 5.5 MIT",
	"variant": {
		"familyId": "lupamat-lkv-5-5-mit",
		"label": "Groupe sur cuve 548 L",
		"distinguishingAttributes": {
			"équipement": "Groupe sur cuve 548 L",
			"pressionDeConfiguration": "13 bar",
			"cuve": "548 L"
		}
	},
	"tankLiters": 548,
	"maxPressureBar": 13,
	"fadCurve": [
		{
			"pressureBar": 13,
			"litersPerMinute": 590
		}
	],
	"powerKw": 5.5,
	"oilType": "unknown",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/lupamat-lkv-5-5-mit.svg",
		"alt": "Repères techniques : Lupamat LKV 5.5 MIT",
		"sourceUrl": "https://lupamat.com/pdf/Lupamat-EN-Katalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe sur cuve 548 L",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p13"
			]
		},
		{
			"label": "Pression maximale de fonctionnement publiée",
			"value": "13 bar",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p13"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "548 L",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p13"
			]
		},
		{
			"label": "Air livré à 13 bar",
			"value": "590 L/min",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p13"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "5,5 kW",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p13"
			]
		}
	],
	"editorial": {
		"overview": "Lupamat LKV 5.5 MIT. 590 L/min déclarés à 13 bar. Groupe sur cuve 548 L.",
		"verifiedFacts": [
			"Configuration de pression documentée : 13 bar.",
			"Cuve de stockage documentée : 548 L.",
			"FAD sous pression identifié séparément des valeurs d’aspiration : 590 L/min déclarés à 13 bar."
		],
		"limitations": [
			"Configuration de pression 13 bar retenue dans le triplet 7 / 10 / 13. La version 15 bar sur demande ne fournit pas de FAD dans ce tableau.",
			"Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
			"Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil."
		]
	},
	"evidence": [
		{
			"id": "october4-lupamat-current-catalog-p13",
			"sourceUrl": "https://lupamat.com/pdf/Lupamat-EN-Katalog.pdf#page=13",
			"sourceLabel": "Lupamat, catalogue anglais actuellement relié à la page Documents, page PDF 13",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-04",
			"confidence": "B",
			"notes": "SHA-256 3330cc258da3e7cf4f293c5af0da2ae3ced11d881237b550687f50e1f01fd978 de la réponse HTTP originale. Données constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october4-lupamat-current-catalog-p13"
		],
		"maxPressureBar": [
			"october4-lupamat-current-catalog-p13"
		],
		"tankLiters": [
			"october4-lupamat-current-catalog-p13"
		],
		"fadCurve": [
			"october4-lupamat-current-catalog-p13"
		],
		"powerKw": [
			"october4-lupamat-current-catalog-p13"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
