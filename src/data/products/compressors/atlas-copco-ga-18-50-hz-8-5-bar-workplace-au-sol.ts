const product = {
	"id": "atlas-copco-ga-18-50-hz-8-5-bar-workplace-au-sol",
	"slug": "atlas-copco-ga-18-50-hz-8-5-bar-workplace-au-sol",
	"brand": "Atlas Copco",
	"model": "GA 18",
	"variant": {
		"familyId": "atlas-copco-ga-18",
		"label": "WorkPlace au sol, 8,5 bar",
		"distinguishingAttributes": {
			"équipement": "WorkPlace au sol",
			"pressionMaximale": "8,5 bar",
			"cuve": "0 L",
			"régulation": "vitesse fixe",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 8.5,
	"fadCurve": [
		{
			"pressureBar": 8,
			"litersPerMinute": 3420
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 18,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/atlas-copco-ga-18-50-hz-8-5-bar-workplace-au-sol.webp",
		"alt": "Repères techniques : Atlas Copco GA 18, WorkPlace au sol, 8,5 bar",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/compressor-technique/industrial-air/documents/leaflets/compressors/ga11-30/ga-15-30-%282023%29/GA15-30-Brendola-datasheet-EN-2935081941.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "WorkPlace au sol",
			"evidenceIds": [
				"october3c-atlas-ga15-30-2023-p2"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "8,5 bar relatifs",
			"evidenceIds": [
				"october3c-atlas-ga15-30-2023-p2"
			]
		},
		{
			"label": "Air livré à 8 bar",
			"value": "57 L/s",
			"evidenceIds": [
				"october3c-atlas-ga15-30-2023-p2"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Groupe au sol ; réservoir externe exclu",
			"evidenceIds": [
				"october3c-atlas-ga15-30-2023-p2"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "100%, famille constructeur citée",
			"evidenceIds": [
				"october3c-atlas-ga15-30-2023-p1"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "Documentation constructeur européenne ; commercialisation actuelle à confirmer",
			"evidenceIds": [
				"october3c-atlas-ga15-30-2023-p2"
			]
		}
	],
	"editorial": {
		"overview": "Atlas Copco GA 18, WorkPlace au sol, 8,5 bar. 3 420 L/min à 8 bar.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Configuration de stockage documentée : groupe au sol sans réservoir de stockage intégré.",
			"Pression maximale de fonctionnement publiée : 8,5 bar."
		],
		"limitations": [
			"Service continu déclaré pour cette famille ; installation, refroidissement et entretien conformes au constructeur restent nécessaires.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Configuration publiée dans la documentation citée ; disponibilité commerciale actuelle à confirmer.",
			"Le point de la configuration GA 18 à 10 bar est exclu de ce lot : 49,5 L/s et 178,5 m³/h ne concordent pas aux arrondis imprimés."
		]
	},
	"evidence": [
		{
			"id": "october3c-atlas-ga15-30-2023-p2",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/compressor-technique/industrial-air/documents/leaflets/compressors/ga11-30/ga-15-30-%282023%29/GA15-30-Brendola-datasheet-EN-2935081941.pdf#page=2",
			"sourceLabel": "Atlas Copco GA 15–30, fiche 2935 0819 41 (2023), page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 7bda6b5672104176d447cd4a203b2b7258ca06ee4f4bcc6588bdcd646faf82c0 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3c-atlas-ga15-30-2023-p1",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/compressor-technique/industrial-air/documents/leaflets/compressors/ga11-30/ga-15-30-%282023%29/GA15-30-Brendola-datasheet-EN-2935081941.pdf#page=1",
			"sourceLabel": "Atlas Copco GA 15–30, fiche 2935 0819 41 (2023), page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 7bda6b5672104176d447cd4a203b2b7258ca06ee4f4bcc6588bdcd646faf82c0 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october3c-atlas-ga15-30-2023-p2"
		],
		"maxPressureBar": [
			"october3c-atlas-ga15-30-2023-p2"
		],
		"fadCurve": [
			"october3c-atlas-ga15-30-2023-p2"
		],
		"powerKw": [
			"october3c-atlas-ga15-30-2023-p2"
		],
		"oilType": [
			"october3c-atlas-ga15-30-2023-p1"
		],
		"dutyCycle": [
			"october3c-atlas-ga15-30-2023-p1"
		]
	},
	"notes": [
		"Pression de mesure, pression maximale relative et pression absolue à l’entrée restent distinctes. ISO 1217 n’est revendiquée que pour les sources qui le citent."
	]
};

export default product;
