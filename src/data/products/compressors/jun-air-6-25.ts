const product: unknown = {
	"id": "jun-air-6-25",
	"slug": "jun-air-6-25",
	"brand": "JUN-AIR",
	"model": "6-25",
	"variant": {
		"familyId": "jun-air-6-25",
		"label": "Groupe sur cuve 25 L",
		"distinguishingAttributes": {
			"équipement": "Groupe sur cuve 25 L",
			"pressionDeConfiguration": "8 bar",
			"cuve": "25 L",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 25,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 8,
			"litersPerMinute": 32
		}
	],
	"intakeFlowLpm": 50,
	"dutyCycle": 0.5,
	"powerKw": 0.34,
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/jun-air-6-25.svg",
		"alt": "Repères techniques : JUN-AIR 6-25",
		"sourceUrl": "https://gastmfg.com/wp-content/uploads/2025/07/6-25_1413010_TDS.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe sur cuve 25 L",
			"evidenceIds": [
				"october4-junair-current-p1"
			]
		},
		{
			"label": "Pression maximale de fonctionnement publiée",
			"value": "8 bar",
			"evidenceIds": [
				"october4-junair-current-p1"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "25 L",
			"evidenceIds": [
				"october4-junair-current-p1"
			]
		},
		{
			"label": "Air livré à 8 bar",
			"value": "32 L/min",
			"evidenceIds": [
				"october4-junair-current-p1"
			]
		},
		{
			"label": "Débit aspiré / déplacement publié, distinct du FAD",
			"value": "50 L/min",
			"evidenceIds": [
				"october4-junair-current-p1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0,34 kW",
			"evidenceIds": [
				"october4-junair-current-p1"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "50 %",
			"evidenceIds": [
				"october4-junair-current-p1"
			]
		},
		{
			"label": "Fréquence de la configuration retenue",
			"value": "50 Hz",
			"evidenceIds": [
				"october4-junair-current-p1"
			]
		}
	],
	"editorial": {
		"overview": "JUN-AIR 6-25. 32 L/min déclarés à 8 bar. Groupe sur cuve 25 L.",
		"verifiedFacts": [
			"Configuration de pression documentée : 8 bar.",
			"Cuve de stockage documentée : 25 L.",
			"FAD sous pression identifié séparément des valeurs d’aspiration : 32 L/min déclarés à 8 bar."
		],
		"limitations": [
			"Service intermittent de 50 % déclaré, sans durée de référence précisée.",
			"La fiche prévoit une pression supérieure sur demande ; aucune caractéristique de cette version non chiffrée n’est ajoutée.",
			"Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer."
		]
	},
	"evidence": [
		{
			"id": "october4-junair-current-p1",
			"sourceUrl": "https://gastmfg.com/wp-content/uploads/2025/07/6-25_1413010_TDS.pdf#page=1",
			"sourceLabel": "JUN-AIR, fiche constructeur 6-25, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-04",
			"confidence": "B",
			"notes": "SHA-256 bf181f216ef2ae982f14f8c9e9d979e76c97b1fdefedd4a0b691b06556d406f9 de la réponse HTTP originale. Données constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october4-junair-current-p1"
		],
		"maxPressureBar": [
			"october4-junair-current-p1"
		],
		"tankLiters": [
			"october4-junair-current-p1"
		],
		"fadCurve": [
			"october4-junair-current-p1"
		],
		"intakeFlowLpm": [
			"october4-junair-current-p1"
		],
		"powerKw": [
			"october4-junair-current-p1"
		],
		"oilType": [
			"october4-junair-current-p1"
		],
		"dutyCycle": [
			"october4-junair-current-p1"
		]
	},
	"notes": [
		"Portée de la source : FAD-pressure-qualified.",
		"Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées."
	]
};

export default product;
