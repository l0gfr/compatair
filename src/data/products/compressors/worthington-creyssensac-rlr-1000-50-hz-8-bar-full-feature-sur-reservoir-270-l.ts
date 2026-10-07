import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "worthington-creyssensac-rlr-1000-50-hz-8-bar-full-feature-sur-reservoir-270-l",
	"slug": "worthington-creyssensac-rlr-1000-50-hz-8-bar-full-feature-sur-reservoir-270-l",
	"brand": "Worthington Creyssensac",
	"model": "RLR 1000",
	"variant": {
		"familyId": "worthington-creyssensac-rlr-1000",
		"label": "Full Feature sur réservoir 270 L, 8 bar",
		"distinguishingAttributes": {
			"équipement": "Full Feature sur réservoir 270 L",
			"pressionMaximale": "8 bar",
			"cuve": "270 L",
			"régulation": "vitesse fixe",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 270,
	"maxPressureBar": 8,
	"fadCurve": [
		{
			"pressureBar": 7.5,
			"litersPerMinute": 1250
		}
	],
	"oilType": "oil",
	"powerKw": 7.5,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/worthington-creyssensac-rlr-1000-50-hz-8-bar-full-feature-sur-reservoir-270-l.webp",
		"alt": "Repères techniques : Worthington Creyssensac RLR 1000, Full Feature sur réservoir 270 L, 8 bar",
		"sourceUrl": "https://www.worthington-creyssensac.com/content/dam/brands/Worthington%20Creyssensac/products-bp-structure/oil-injected-screw-compressor/fixed-speed/rlr-750-2000-%282022%29/leaflets/wco-rollair-750-2000-leaflet-en.pdf.coredownload.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Full Feature sur réservoir 270 L",
			"evidenceIds": [
				"october3c-worthington-rollair750-2000-p6"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "8 bar relatifs",
			"evidenceIds": [
				"october3c-worthington-rollair750-2000-p6"
			]
		},
		{
			"label": "Air livré à 7,5 bar",
			"value": "75 m³/h",
			"evidenceIds": [
				"october3c-worthington-rollair750-2000-p6"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "270 L intégrés à cette configuration",
			"evidenceIds": [
				"october3c-worthington-rollair750-2000-p6"
			]
		},
		{
			"label": "Périmètre documentaire",
			"value": "Documentation constructeur européenne ; commercialisation actuelle à confirmer",
			"evidenceIds": [
				"october3c-worthington-rollair750-2000-p6"
			]
		}
	],
	"editorial": {
		"overview": "Worthington Creyssensac RLR 1000, Full Feature sur réservoir 270 L, 8 bar. 1 250 L/min à 7,5 bar.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Configuration de stockage documentée : 270 L.",
			"Pression maximale de fonctionnement publiée : 8 bar."
		],
		"limitations": [
			"Cycle de service du groupe complet non établi ; la tenue permanente reste indéterminée.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Configuration publiée dans la documentation citée ; disponibilité commerciale actuelle à confirmer."
		]
	},
	"evidence": [
		{
			"id": "october3c-worthington-rollair750-2000-p6",
			"sourceUrl": "https://www.worthington-creyssensac.com/content/dam/brands/Worthington%20Creyssensac/products-bp-structure/oil-injected-screw-compressor/fixed-speed/rlr-750-2000-%282022%29/leaflets/wco-rollair-750-2000-leaflet-en.pdf.coredownload.pdf#page=6",
			"sourceLabel": "Worthington Creyssensac RLR 750–2000 (2022), page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 453e287507815373993e3d0c796c82836a43fbc822fe0f2117a56f7b9635ba9d de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3c-worthington-rollair750-2000-p1",
			"sourceUrl": "https://www.worthington-creyssensac.com/content/dam/brands/Worthington%20Creyssensac/products-bp-structure/oil-injected-screw-compressor/fixed-speed/rlr-750-2000-%282022%29/leaflets/wco-rollair-750-2000-leaflet-en.pdf.coredownload.pdf#page=1",
			"sourceLabel": "Worthington Creyssensac RLR 750–2000 (2022), page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 453e287507815373993e3d0c796c82836a43fbc822fe0f2117a56f7b9635ba9d de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october3c-worthington-rollair750-2000-p6"
		],
		"maxPressureBar": [
			"october3c-worthington-rollair750-2000-p6"
		],
		"fadCurve": [
			"october3c-worthington-rollair750-2000-p6"
		],
		"powerKw": [
			"october3c-worthington-rollair750-2000-p6"
		],
		"oilType": [
			"october3c-worthington-rollair750-2000-p1"
		]
	},
	"notes": [
		"Pression de mesure, pression maximale relative et pression absolue à l’entrée restent distinctes. ISO 1217 n’est revendiquée que pour les sources qui le citent."
	]
};

export default product;
