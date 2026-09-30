const product = {
	"id": "almig-v-drive-t-24-water-cooled",
	"slug": "almig-v-drive-t-24-water-cooled",
	"brand": "ALMiG",
	"model": "V-DRIVE T 24 water-cooled",
	"variant": {
		"familyId": "almig-v-drive-t-24-water-cooled",
		"label": "Water cooled ; 13 bar",
		"distinguishingAttributes": {
			"configuration": "Water cooled",
			"pression": "13 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 13,
	"fadCurve": [
		{
			"pressureBar": 8,
			"litersPerMinute": 23360
		}
	],
	"dutyCycle": 1,
	"oilType": "unknown",
	"powerKw": 110,
	"weightKg": 3800,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/almig-v-drive-t-24-water-cooled.webp",
		"alt": "Repères techniques : ALMiG V-DRIVE T 24 water-cooled",
		"sourceUrl": "https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 20",
			"evidenceIds": [
				"documented-d-almig-2026-p20"
			]
		},
		{
			"label": "Configuration",
			"value": "Water cooled",
			"evidenceIds": [
				"documented-d-almig-2026-p20"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "2400 × 1800 × 2000 mm",
			"evidenceIds": [
				"documented-d-almig-2026-p20"
			]
		},
		{
			"label": "Conditions du débit",
			"value": "V-DRIVE T: explicitly stated operating point at 8 bar; 50 Hz",
			"evidenceIds": [
				"documented-d-almig-2026-p20"
			]
		},
		{
			"label": "Débit minimal de modulation publié",
			"value": "8 670 L/min ; condition du tableau conservée séparément",
			"evidenceIds": [
				"documented-d-almig-2026-p20"
			]
		},
		{
			"label": "Puissance cumulée des deux moteurs",
			"value": "110 kW ; somme des deux puissances de la ligne, pas une mesure électrique en fonctionnement",
			"evidenceIds": [
				"documented-d-almig-2026-p20"
			]
		}
	],
	"editorial": {
		"overview": "ALMiG V-DRIVE T 24 water-cooled. Water cooled. Débit restitué : 23 360 L/min à 8 bar.",
		"verifiedFacts": [
			"Dimensions publiées : 2400 × 1800 × 2000 mm.",
			"Puissance cumulée des moteurs publiée : 110 kW.",
			"La documentation constructeur de cette série prévoit le service continu, sous ses conditions d’installation et d’entretien."
		],
		"limitations": [
			"La disponibilité actuelle et le contenu de la configuration livrée restent à confirmer.",
			"Aucun débit n’est extrapolé au-delà des pressions publiées ; les minima de modulation ne sont pas des débits moyens d’atelier.",
			"Le mode de lubrification n’est pas établi ici. Aucun niveau de qualité d’air n’en est déduit.",
			"La classe de qualité d’air du réseau, les pertes de pression et le refroidissement nécessitent une vérification sur l’installation."
		]
	},
	"evidence": [
		{
			"id": "documented-d-almig-2026-p20",
			"sourceUrl": "https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf#page=20",
			"sourceLabel": "almig-2026, page PDF 20",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 f5ca167dedaab25352808dc5001ba9badc7acffb2c37168c6d9f89182b752a0e. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "documented-d-almig-screw-duty",
			"sourceUrl": "https://www.almig.de/en/products/compressed-air-generation/screw-compressors",
			"sourceLabel": "almig-screw-duty, page constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 a42ca92be39e4a81a11cf3e4ec6bb3ce237552363c3b0a7d16a43761d852266f. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"documented-d-almig-2026-p20"
		],
		"maxPressureBar": [
			"documented-d-almig-2026-p20"
		],
		"powerKw": [
			"documented-d-almig-2026-p20"
		],
		"fadCurve": [
			"documented-d-almig-2026-p20"
		],
		"weightKg": [
			"documented-d-almig-2026-p20"
		],
		"dutyCycle": [
			"documented-d-almig-screw-duty"
		]
	},
	"notes": [
		"Configuration et unités vérifiées dans la ligne de la page 20."
	]
};

export default product;
