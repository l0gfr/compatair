import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "atlas-copco-ga-11-50-hz-8-5-bar-pack-au-sol",
	"slug": "atlas-copco-ga-11-50-hz-8-5-bar-pack-au-sol",
	"brand": "Atlas Copco",
	"model": "GA 11",
	"variant": {
		"familyId": "atlas-copco-ga-11",
		"label": "Pack au sol, 8,5 bar",
		"distinguishingAttributes": {
			"équipement": "Pack au sol",
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
			"litersPerMinute": 1710
		}
	],
	"oilType": "oil",
	"powerKw": 11,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/atlas-copco-ga-11-50-hz-8-5-bar-pack-au-sol-technical-20261115-followup.svg",
		"alt": "Repères techniques : Atlas Copco GA 11, Pack au sol, 8,5 bar",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/kazakhstan/documents/aii-materials-for-exhibition-2024/compressors/GA5-11_antwerp_leaflet_EN_2935087547.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
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
			"value": "8,5 bar relatifs",
			"evidenceIds": [
				"october3c-atlas-ga5-11-p6"
			]
		},
		{
			"label": "Air livré à 8 bar",
			"value": "28,5 L/s",
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
			"label": "Périmètre documentaire",
			"value": "Documentation constructeur européenne ; commercialisation actuelle à confirmer",
			"evidenceIds": [
				"october3c-atlas-ga5-11-p6"
			]
		}
	],
	"editorial": {
		"overview": "Atlas Copco GA 11 Pack au sol, 50 Hz : groupe de 11 kW donné pour 253 kg et 965 × 655 × 1 045 mm. Le tableau distingue ce montage des versions sur cuve et Full Feature avec sécheur. La configuration maximale de 8,5 bar fournit 28,5 L/s, soit 1 710 L/min, mesurés à 8 bar effectifs. Les réservoirs de 270/500 L et le sécheur sont des configurations distinctes ; le taux de marche du groupe ne se déduit pas du moteur IE3.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Configuration de stockage documentée : groupe au sol sans réservoir de stockage intégré.",
			"Pression maximale de fonctionnement publiée : 8,5 bar."
		],
		"limitations": [
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Configuration publiée dans la documentation citée ; disponibilité commerciale actuelle à confirmer.",
			"Le débit publié est conservé. La déclaration générale de service de la série ne fournit pas le taux de marche du groupe complet exact ; ce taux reste indéterminé.",
			"Le blog G/GA décrit un entraînement par engrenages ; le GA5–11 de la notice est à courroie. Le taux de service ne lui est pas attribué par analogie."
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
		},
		{
			"id": "review:2026-11-12-technical:atlas-copco-ga-11-50-hz-8-5-bar-pack-au-sol:0",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/kazakhstan/documents/aii-materials-for-exhibition-2024/compressors/GA5-11_antwerp_leaflet_EN_2935087547.pdf",
			"sourceLabel": "Atlas Copco, document fabricant, pages PDF 1, 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "Atlas Copco GA 11, Pack au sol, 8,5 bar. 1 710 L/min à 8 bar. GET complet : SHA-256 83df92251704597bda4b770f01badd351183571a3adf687e70cc3b50e9ef1de4. Historique conservé."
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
		]
	},
	"notes": [
		"Pression de mesure, pression maximale relative et pression absolue à l’entrée restent distinctes. ISO 1217 n’est revendiquée que pour les sources qui le citent."
	]
};

export default product;
