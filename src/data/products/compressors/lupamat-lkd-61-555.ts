const product: unknown = {
	"id": "lupamat-lkd-61-555",
	"slug": "lupamat-lkd-61-555",
	"brand": "Lupamat",
	"model": "LKD 61-555",
	"variant": {
		"familyId": "lupamat-lkd-61-555",
		"label": "Groupe sur cuve 548 L",
		"distinguishingAttributes": {
			"équipement": "Groupe sur cuve 548 L",
			"pressionDeConfiguration": "8 bar",
			"cuve": "548 L"
		}
	},
	"tankLiters": 548,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 8,
			"litersPerMinute": 950
		}
	],
	"intakeFlowLpm": 1454,
	"powerKw": 7.5,
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/lupamat-lkd-61-555.svg",
		"alt": "Repères techniques : Lupamat LKD 61-555",
		"sourceUrl": "https://lupamat.com/pdf/Lupamat-EN-Katalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe sur cuve 548 L",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p22"
			]
		},
		{
			"label": "Pression maximale de fonctionnement publiée",
			"value": "8 bar",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p22"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "548 L",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p22"
			]
		},
		{
			"label": "Air livré à 8 bar",
			"value": "950 L/min",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p22"
			]
		},
		{
			"label": "Débit aspiré / déplacement publié, distinct du FAD",
			"value": "1 454 L/min",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p22"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "7,5 kW",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p22"
			]
		}
	],
	"editorial": {
		"overview": "Lupamat LKD 61-555. 950 L/min déclarés à 8 bar. Groupe sur cuve 548 L.",
		"verifiedFacts": [
			"Configuration de pression documentée : 8 bar.",
			"Cuve de stockage documentée : 548 L.",
			"FAD sous pression identifié séparément des valeurs d’aspiration : 950 L/min déclarés à 8 bar."
		],
		"limitations": [
			"Le cycle de service n’est pas indiqué. Le contrôle en usine décrit dans le catalogue ne constitue pas un essai CompatAir.",
			"Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
			"Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil."
		]
	},
	"evidence": [
		{
			"id": "october4-lupamat-current-catalog-p22",
			"sourceUrl": "https://lupamat.com/pdf/Lupamat-EN-Katalog.pdf#page=22",
			"sourceLabel": "Lupamat, catalogue anglais actuellement relié à la page Documents, page PDF 22",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-04",
			"confidence": "B",
			"notes": "SHA-256 3330cc258da3e7cf4f293c5af0da2ae3ced11d881237b550687f50e1f01fd978 de la réponse HTTP originale. Données constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october4-lupamat-current-catalog-p22"
		],
		"maxPressureBar": [
			"october4-lupamat-current-catalog-p22"
		],
		"tankLiters": [
			"october4-lupamat-current-catalog-p22"
		],
		"fadCurve": [
			"october4-lupamat-current-catalog-p22"
		],
		"intakeFlowLpm": [
			"october4-lupamat-current-catalog-p22"
		],
		"powerKw": [
			"october4-lupamat-current-catalog-p22"
		],
		"oilType": [
			"october4-lupamat-current-catalog-p22"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
