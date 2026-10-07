import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "atlas-copco-g-18-50-hz-7-5-bar-pack-au-sol",
	"slug": "atlas-copco-g-18-50-hz-7-5-bar-pack-au-sol",
	"brand": "Atlas Copco",
	"model": "G 18",
	"variant": {
		"familyId": "atlas-copco-g-18",
		"label": "Pack au sol, 7,5 bar",
		"distinguishingAttributes": {
			"équipement": "Pack au sol",
			"pressionMaximale": "7,5 bar",
			"cuve": "0 L",
			"régulation": "vitesse fixe",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 7.5,
	"fadCurve": [
		{
			"pressureBar": 7,
			"litersPerMinute": 3126
		}
	],
	"oilType": "oil",
	"powerKw": 18,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/atlas-copco-g-18-50-hz-7-5-bar-pack-au-sol.webp",
		"alt": "Repères techniques : Atlas Copco G 18, Pack au sol, 7,5 bar",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/mexico/compressor-technique/files-and-pdf/g-15-22-ga-15-26-ga-11-plus-30-ga-15-37-vsd-plus-11-37-kw.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Pack au sol",
			"evidenceIds": [
				"october3c-atlas-ga11-37-p10"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "7,5 bar relatifs",
			"evidenceIds": [
				"october3c-atlas-ga11-37-p10"
			]
		},
		{
			"label": "Air livré à 7 bar",
			"value": "52,1 L/s",
			"evidenceIds": [
				"october3c-atlas-ga11-37-p10"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "Groupe au sol ; réservoir externe exclu",
			"evidenceIds": [
				"october3c-atlas-ga11-37-p10"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "Documentation constructeur européenne ; commercialisation actuelle à confirmer",
			"evidenceIds": [
				"october3c-atlas-ga11-37-p10"
			]
		}
	],
	"editorial": {
		"overview": "Atlas Copco G 18, Pack au sol, 7,5 bar. 3 126 L/min à 7 bar.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Configuration de stockage documentée : groupe au sol sans réservoir de stockage intégré.",
			"Pression maximale de fonctionnement publiée : 7,5 bar."
		],
		"limitations": [
			"La brochure déclare 100% pour l’élément de compression ; le régime continu du moteur et du groupe complet n’est pas établi par cette phrase.",
			"Cycle de service du groupe complet non établi ; la tenue permanente reste indéterminée.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Configuration publiée dans la documentation citée ; disponibilité commerciale actuelle à confirmer."
		]
	},
	"evidence": [
		{
			"id": "october3c-atlas-ga11-37-p10",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/mexico/compressor-technique/files-and-pdf/g-15-22-ga-15-26-ga-11-plus-30-ga-15-37-vsd-plus-11-37-kw.pdf#page=10",
			"sourceLabel": "Atlas Copco G/GA 11–37 kW, brochure constructeur, page PDF 10",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 63bb4fa8cc0498a37b3a933e321f84c21083c38352164c32964ca12df5a8e49a de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3c-atlas-ga11-37-p1",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/mexico/compressor-technique/files-and-pdf/g-15-22-ga-15-26-ga-11-plus-30-ga-15-37-vsd-plus-11-37-kw.pdf#page=1",
			"sourceLabel": "Atlas Copco G/GA 11–37 kW, brochure constructeur, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 63bb4fa8cc0498a37b3a933e321f84c21083c38352164c32964ca12df5a8e49a de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october3c-atlas-ga11-37-p10"
		],
		"maxPressureBar": [
			"october3c-atlas-ga11-37-p10"
		],
		"fadCurve": [
			"october3c-atlas-ga11-37-p10"
		],
		"powerKw": [
			"october3c-atlas-ga11-37-p10"
		],
		"oilType": [
			"october3c-atlas-ga11-37-p1"
		]
	},
	"notes": [
		"Pression de mesure, pression maximale relative et pression absolue à l’entrée restent distinctes. ISO 1217 n’est revendiquée que pour les sources qui le citent."
	]
};

export default product;
