import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "atlas-copco-ga-26-50-hz-10-bar-workplace-sur-reservoir-500-l",
	"slug": "atlas-copco-ga-26-50-hz-10-bar-workplace-sur-reservoir-500-l",
	"brand": "Atlas Copco",
	"model": "GA 26",
	"variant": {
		"familyId": "atlas-copco-ga-26",
		"label": "WorkPlace sur réservoir 500 L, 10 bar",
		"distinguishingAttributes": {
			"équipement": "WorkPlace sur réservoir 500 L",
			"pressionMaximale": "10 bar",
			"cuve": "500 L",
			"régulation": "vitesse fixe",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 500,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 9.5,
			"litersPerMinute": 3858
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 26,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/atlas-copco-ga-26-50-hz-10-bar-workplace-sur-reservoir-500-l.webp",
		"alt": "Repères techniques : Atlas Copco GA 26, WorkPlace sur réservoir 500 L, 10 bar",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/compressor-technique/industrial-air/documents/leaflets/compressors/ga11-30/ga-15-30-%282023%29/GA15-30-Brendola-datasheet-EN-2935081941.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "WorkPlace sur réservoir 500 L",
			"evidenceIds": [
				"october3c-atlas-ga11-37-p4",
				"october3c-atlas-ga11-37-p11"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "10 bar relatifs",
			"evidenceIds": [
				"october3c-atlas-ga15-30-2023-p2"
			]
		},
		{
			"label": "Air livré à 9,5 bar",
			"value": "64,3 L/s",
			"evidenceIds": [
				"october3c-atlas-ga15-30-2023-p2"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "500 L intégrés à cette configuration",
			"evidenceIds": [
				"october3c-atlas-ga11-37-p4",
				"october3c-atlas-ga11-37-p11"
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
		"overview": "Atlas Copco GA 26, WorkPlace sur réservoir 500 L, 10 bar. 3 858 L/min à 9,5 bar.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Configuration de stockage documentée : 500 L.",
			"Pression maximale de fonctionnement publiée : 10 bar."
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
			"id": "october3c-atlas-ga11-37-p4",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/mexico/compressor-technique/files-and-pdf/g-15-22-ga-15-26-ga-11-plus-30-ga-15-37-vsd-plus-11-37-kw.pdf#page=4",
			"sourceLabel": "Atlas Copco G/GA 11–37 kW, brochure constructeur, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 63bb4fa8cc0498a37b3a933e321f84c21083c38352164c32964ca12df5a8e49a de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3c-atlas-ga11-37-p11",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/mexico/compressor-technique/files-and-pdf/g-15-22-ga-15-26-ga-11-plus-30-ga-15-37-vsd-plus-11-37-kw.pdf#page=11",
			"sourceLabel": "Atlas Copco G/GA 11–37 kW, brochure constructeur, page PDF 11",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 63bb4fa8cc0498a37b3a933e321f84c21083c38352164c32964ca12df5a8e49a de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
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
			"october3c-atlas-ga11-37-p4",
			"october3c-atlas-ga11-37-p11"
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
