import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "atlas-copco-ga-11-50-hz-10-bar-pack-sur-reservoir-270-l",
	"slug": "atlas-copco-ga-11-50-hz-10-bar-pack-sur-reservoir-270-l",
	"brand": "Atlas Copco",
	"model": "GA 11",
	"variant": {
		"familyId": "atlas-copco-ga-11",
		"label": "Pack sur réservoir 270 L, 10 bar",
		"distinguishingAttributes": {
			"équipement": "Pack sur réservoir 270 L",
			"pressionMaximale": "10 bar",
			"cuve": "270 L",
			"régulation": "vitesse fixe",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 270,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 9.5,
			"litersPerMinute": 1566
		}
	],
	"oilType": "oil",
	"powerKw": 11,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/atlas-copco-ga-11-50-hz-10-bar-pack-sur-reservoir-270-l.webp",
		"alt": "Repères techniques : Atlas Copco GA 11, Pack sur réservoir 270 L, 10 bar",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/kazakhstan/documents/aii-materials-for-exhibition-2024/compressors/GA5-11_antwerp_leaflet_EN_2935087547.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration",
			"value": "Pack sur cuve 270 L, version 50 Hz 10 bar",
			"evidenceIds": [
				"atlas-copco-ga-11-50-hz-10-bar-pack-sur-reservoir-270-l-reserved-20261103-1"
			]
		},
		{
			"label": "Débit FAD mesuré à 9,5 bar",
			"value": "26,1 L/s (1 566 L/min)",
			"evidenceIds": [
				"atlas-copco-ga-11-50-hz-10-bar-pack-sur-reservoir-270-l-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance moteur",
			"value": "11 kW",
			"evidenceIds": [
				"atlas-copco-ga-11-50-hz-10-bar-pack-sur-reservoir-270-l-reserved-20261103-1"
			]
		},
		{
			"label": "Mesure",
			"value": "ISO 1217 édition 4 annexe C-2009 ; entrée 1 bar absolu, 20 °C",
			"evidenceIds": [
				"atlas-copco-ga-11-50-hz-10-bar-pack-sur-reservoir-270-l-reserved-20261103-1"
			]
		}
	],
	"editorial": {
		"overview": "Atlas Copco GA 11. La version Pack 270 L est distincte de la Full Feature avec sécheur. Passer de 270 à 500 L augmente le stockage, sans modifier les 26,1 L/s à 9,5 bar de cette version 50 Hz. Le blog de gamme GA ne documente pas le cycle de service de cette révision précise.",
		"verifiedFacts": [
			"Configuration : Pack sur cuve 270 L, version 50 Hz 10 bar.",
			"Débit FAD mesuré à 9,5 bar : 26,1 L/s (1 566 L/min).",
			"Puissance moteur : 11 kW.",
			"Mesure : ISO 1217 édition 4 annexe C-2009 ; entrée 1 bar absolu, 20 °C."
		],
		"limitations": [
			"La déclaration générale du blog GA ne suffit pas à attribuer un taux de marche numérique à cette révision.",
			"Masse de la table non ventilée entre les deux volumes de cuve : aucune masse spécifique au volume retenue."
		]
	},
	"evidence": [
		{
			"id": "october3c-atlas-ga5-11-p3",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/kazakhstan/documents/aii-materials-for-exhibition-2024/compressors/GA5-11_antwerp_leaflet_EN_2935087547.pdf#page=3",
			"sourceLabel": "Atlas Copco GA 5–11, brochure 2935 0875 47, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 83df92251704597bda4b770f01badd351183571a3adf687e70cc3b50e9ef1de4 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
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
		},
		{
			"id": "atlas-copco-ga-11-50-hz-10-bar-pack-sur-reservoir-270-l-reserved-20261103-1",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/kazakhstan/documents/aii-materials-for-exhibition-2024/compressors/GA5-11_antwerp_leaflet_EN_2935087547.pdf#page=6",
			"sourceLabel": "Atlas Copco : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 83df92251704597bda4b770f01badd351183571a3adf687e70cc3b50e9ef1de4. La version Pack 270 L est distincte de la Full Feature avec sécheur. Passer de 270 à 500 L augmente le stockage, sans modifier les 26,1 L/s à 9,5 bar de cette version 50 Hz. Le blog de gamme GA ne documente pas le cycle de service de cette révision précise."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october3c-atlas-ga5-11-p3"
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
		"editorial": [
			"atlas-copco-ga-11-50-hz-10-bar-pack-sur-reservoir-270-l-reserved-20261103-1"
		],
		"specifications": [
			"atlas-copco-ga-11-50-hz-10-bar-pack-sur-reservoir-270-l-reserved-20261103-1"
		]
	},
	"notes": [
		"Pression de mesure, pression maximale relative et pression absolue à l’entrée restent distinctes. ISO 1217 n’est revendiquée que pour les sources qui le citent."
	]
};

export default product;
