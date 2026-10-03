const product = {
	"id": "atlas-copco-ga-7-50-hz-10-bar-pack-au-sol",
	"slug": "atlas-copco-ga-7-50-hz-10-bar-pack-au-sol",
	"brand": "Atlas Copco",
	"model": "GA 7",
	"variant": {
		"familyId": "atlas-copco-ga-7",
		"label": "Pack au sol, 10 bar",
		"distinguishingAttributes": {
			"équipement": "Pack au sol",
			"pressionMaximale": "10 bar",
			"cuve": "0 L",
			"régulation": "vitesse fixe",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 9.5,
			"litersPerMinute": 1146
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 7.5,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/atlas-copco-ga-7-50-hz-10-bar-pack-au-sol.webp",
		"alt": "Repères techniques : Atlas Copco GA 7, Pack au sol, 10 bar",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/kazakhstan/documents/aii-materials-for-exhibition-2024/compressors/GA5-11_antwerp_leaflet_EN_2935087547.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Pack au sol",
			"evidenceIds": [
				"october3c-atlas-ga5-11-p6"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "10 bar relatifs",
			"evidenceIds": [
				"october3c-atlas-ga5-11-p6"
			]
		},
		{
			"label": "Air livré à 9,5 bar",
			"value": "19,1 L/s",
			"evidenceIds": [
				"october3c-atlas-ga5-11-p6"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Groupe au sol ; réservoir externe exclu",
			"evidenceIds": [
				"october3c-atlas-ga5-11-p6"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "100%, famille constructeur citée",
			"evidenceIds": [
				"october3c-atlas-ga-duty"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "Documentation constructeur européenne ; commercialisation actuelle à confirmer",
			"evidenceIds": [
				"october3c-atlas-ga5-11-p6"
			]
		}
	],
	"editorial": {
		"overview": "Atlas Copco GA 7, Pack au sol, 10 bar. 1 146 L/min à 9,5 bar.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Configuration de stockage documentée : groupe au sol sans réservoir de stockage intégré.",
			"Pression maximale de fonctionnement publiée : 10 bar."
		],
		"limitations": [
			"Service continu déclaré pour cette famille ; installation, refroidissement et entretien conformes au constructeur restent nécessaires.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Configuration publiée dans la documentation citée ; disponibilité commerciale actuelle à confirmer."
		]
	},
	"evidence": [
		{
			"id": "october3c-atlas-ga5-11-p6",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/kazakhstan/documents/aii-materials-for-exhibition-2024/compressors/GA5-11_antwerp_leaflet_EN_2935087547.pdf#page=6",
			"sourceLabel": "Atlas Copco GA 5–11, brochure 2935 0875 47, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 83df92251704597bda4b770f01badd351183571a3adf687e70cc3b50e9ef1de4 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3c-atlas-ga5-11-p1",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/kazakhstan/documents/aii-materials-for-exhibition-2024/compressors/GA5-11_antwerp_leaflet_EN_2935087547.pdf#page=1",
			"sourceLabel": "Atlas Copco GA 5–11, brochure 2935 0875 47, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 83df92251704597bda4b770f01badd351183571a3adf687e70cc3b50e9ef1de4 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3c-atlas-ga-duty",
			"sourceUrl": "https://www.atlascopco.com/en-eg/compressors/air-compressor-blog/learn-more/g-vs-ga-compressors",
			"sourceLabel": "Atlas Copco, G vs GA Compressors",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 1061fe3edf7c5afd1ede36fd30a1ffd9deb9951ee795cd66a55ceddfc3561a30 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october3c-atlas-ga5-11-p6"
		],
		"maxPressureBar": [
			"october3c-atlas-ga5-11-p6"
		],
		"fadCurve": [
			"october3c-atlas-ga5-11-p6"
		],
		"powerKw": [
			"october3c-atlas-ga5-11-p6"
		],
		"oilType": [
			"october3c-atlas-ga5-11-p1"
		],
		"dutyCycle": [
			"october3c-atlas-ga-duty"
		]
	},
	"notes": [
		"Pression de mesure, pression maximale relative et pression absolue à l’entrée restent distinctes. ISO 1217 n’est revendiquée que pour les sources qui le citent."
	]
};

export default product;
