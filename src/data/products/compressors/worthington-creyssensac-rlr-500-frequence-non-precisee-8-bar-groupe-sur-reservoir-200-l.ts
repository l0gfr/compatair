import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "worthington-creyssensac-rlr-500-frequence-non-precisee-8-bar-groupe-sur-reservoir-200-l",
	"slug": "worthington-creyssensac-rlr-500-frequence-non-precisee-8-bar-groupe-sur-reservoir-200-l",
	"brand": "Worthington Creyssensac",
	"model": "RLR 500",
	"variant": {
		"familyId": "worthington-creyssensac-rlr-500",
		"label": "Groupe sur réservoir 200 L, 8 bar",
		"distinguishingAttributes": {
			"équipement": "Groupe sur réservoir 200 L",
			"pressionMaximale": "8 bar",
			"cuve": "200 L",
			"régulation": "vitesse fixe"
		}
	},
	"tankLiters": 200,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 7.5,
			"litersPerMinute": 578.333
		}
	],
	"dutyCycle": 1,
	"oilType": "oil",
	"powerKw": 4,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/worthington-creyssensac-rlr-500-frequence-non-precisee-8-bar-groupe-sur-reservoir-200-l.webp",
		"alt": "Repères techniques : Worthington Creyssensac RLR 500, Groupe sur réservoir 200 L, 8 bar",
		"sourceUrl": "https://www.worthington-creyssensac.com/content/dam/brands/Worthington%20Creyssensac/products-bp-structure/oil-injected-screw-compressor/ivr/rlr-300-850-v-%282024%29/leaflets/wco-rollair-300-850v-leaflet-en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe sur réservoir 200 L",
			"evidenceIds": [
				"october3c-worthington-rollair300-850v-p7"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "8 bar relatifs",
			"evidenceIds": [
				"october3c-worthington-rollair300-850v-p7"
			]
		},
		{
			"label": "Air livré à 7,5 bar",
			"value": "34,7 m³/h",
			"evidenceIds": [
				"october3c-worthington-rollair300-850v-p7"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "200 L intégrés à cette configuration",
			"evidenceIds": [
				"october3c-worthington-rollair300-850v-p7"
			]
		},
		{
			"label": "Cycle de service déclaré",
			"value": "100%, famille constructeur citée",
			"evidenceIds": [
				"october3c-worthington-rollair300-850v-p2",
				"october3c-worthington-rollair300-850v-p4"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "Documentation constructeur européenne ; commercialisation actuelle à confirmer",
			"evidenceIds": [
				"october3c-worthington-rollair300-850v-p7"
			]
		}
	],
	"editorial": {
		"overview": "Worthington Creyssensac RLR 500, Groupe sur réservoir 200 L, 8 bar. 578,333 L/min à 7,5 bar.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Configuration de stockage documentée : 200 L.",
			"Pression maximale de fonctionnement publiée : 8 bar."
		],
		"limitations": [
			"Service continu déclaré pour cette famille ; installation, refroidissement et entretien conformes au constructeur restent nécessaires.",
			"Fréquence de ces performances non précisée par la source retenue ; aucune transposition 50/60 Hz.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Configuration publiée dans la documentation citée ; disponibilité commerciale actuelle à confirmer."
		]
	},
	"evidence": [
		{
			"id": "october3c-worthington-rollair300-850v-p7",
			"sourceUrl": "https://www.worthington-creyssensac.com/content/dam/brands/Worthington%20Creyssensac/products-bp-structure/oil-injected-screw-compressor/ivr/rlr-300-850-v-%282024%29/leaflets/wco-rollair-300-850v-leaflet-en.pdf#page=7",
			"sourceLabel": "Worthington Creyssensac RLR 300–850 / V (2024), page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 fc96ac4c7a23ed8065ac82b266379038faaba9d570f7d4718c6ad8af112fc2ef de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3c-worthington-rollair300-850v-p1",
			"sourceUrl": "https://www.worthington-creyssensac.com/content/dam/brands/Worthington%20Creyssensac/products-bp-structure/oil-injected-screw-compressor/ivr/rlr-300-850-v-%282024%29/leaflets/wco-rollair-300-850v-leaflet-en.pdf#page=1",
			"sourceLabel": "Worthington Creyssensac RLR 300–850 / V (2024), page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 fc96ac4c7a23ed8065ac82b266379038faaba9d570f7d4718c6ad8af112fc2ef de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3c-worthington-rollair300-850v-p2",
			"sourceUrl": "https://www.worthington-creyssensac.com/content/dam/brands/Worthington%20Creyssensac/products-bp-structure/oil-injected-screw-compressor/ivr/rlr-300-850-v-%282024%29/leaflets/wco-rollair-300-850v-leaflet-en.pdf#page=2",
			"sourceLabel": "Worthington Creyssensac RLR 300–850 / V (2024), page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 fc96ac4c7a23ed8065ac82b266379038faaba9d570f7d4718c6ad8af112fc2ef de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3c-worthington-rollair300-850v-p4",
			"sourceUrl": "https://www.worthington-creyssensac.com/content/dam/brands/Worthington%20Creyssensac/products-bp-structure/oil-injected-screw-compressor/ivr/rlr-300-850-v-%282024%29/leaflets/wco-rollair-300-850v-leaflet-en.pdf#page=4",
			"sourceLabel": "Worthington Creyssensac RLR 300–850 / V (2024), page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 fc96ac4c7a23ed8065ac82b266379038faaba9d570f7d4718c6ad8af112fc2ef de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october3c-worthington-rollair300-850v-p7"
		],
		"maxPressureBar": [
			"october3c-worthington-rollair300-850v-p7"
		],
		"fadCurve": [
			"october3c-worthington-rollair300-850v-p7"
		],
		"powerKw": [
			"october3c-worthington-rollair300-850v-p7"
		],
		"oilType": [
			"october3c-worthington-rollair300-850v-p1"
		],
		"dutyCycle": [
			"october3c-worthington-rollair300-850v-p2",
			"october3c-worthington-rollair300-850v-p4"
		]
	},
	"notes": [
		"Pression de mesure, pression maximale relative et pression absolue à l’entrée restent distinctes. ISO 1217 n’est revendiquée que pour les sources qui le citent."
	]
};

export default product;
