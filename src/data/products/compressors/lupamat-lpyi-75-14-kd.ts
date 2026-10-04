const product: unknown = {
	"id": "lupamat-lpyi-75-14-kd",
	"slug": "lupamat-lpyi-75-14-kd",
	"brand": "Lupamat",
	"model": "LPYI 75/14 KD",
	"variant": {
		"familyId": "lupamat-lpyi-75-14-kd",
		"label": "Receiver Mounted Cabinet Type",
		"distinguishingAttributes": {
			"équipement": "Receiver Mounted Cabinet Type",
			"pressionDeConfiguration": "14 bar",
			"cuve": "387 L"
		}
	},
	"tankLiters": 387,
	"maxPressureBar": 14,
	"fadCurve": [
		{
			"pressureBar": 14,
			"litersPerMinute": 720
		}
	],
	"intakeFlowLpm": 1016,
	"powerKw": 7.5,
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/lupamat-lpyi-75-14-kd.svg",
		"alt": "Repères techniques : Lupamat LPYI 75/14 KD",
		"sourceUrl": "https://lupamat.com/pdf/Lupamat-EN-Katalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Receiver Mounted Cabinet Type",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p22"
			]
		},
		{
			"label": "Pression maximale de fonctionnement publiée",
			"value": "14 bar",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p22"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "387 L",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p22"
			]
		},
		{
			"label": "Air livré à 14 bar",
			"value": "720 L/min",
			"evidenceIds": [
				"october4-lupamat-current-catalog-p22"
			]
		},
		{
			"label": "Débit aspiré / déplacement publié, distinct du FAD",
			"value": "1 016 L/min",
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
		"overview": "Lupamat LPYI 75/14 KD. 720 L/min déclarés à 14 bar. Receiver Mounted Cabinet Type.",
		"verifiedFacts": [
			"Configuration de pression documentée : 14 bar.",
			"Cuve de stockage documentée : 387 L.",
			"FAD sous pression identifié séparément des valeurs d’aspiration : 720 L/min déclarés à 14 bar."
		],
		"limitations": [
			"Le FAD est déclaré dans le tableau à côté de la pression de fonctionnement. Aucune norme ISO ni méthode d’essai supplémentaire n’est ajoutée.",
			"Une seule version de pression par puissance et montage est retenue.",
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
