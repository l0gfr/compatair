import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "worthington-creyssensac-rlr-1000-50-hz-8-bar-full-feature-sur-reservoir-500-l",
	"slug": "worthington-creyssensac-rlr-1000-50-hz-8-bar-full-feature-sur-reservoir-500-l",
	"brand": "Worthington Creyssensac",
	"model": "RLR 1000",
	"variant": {
		"familyId": "worthington-creyssensac-rlr-1000",
		"label": "Full Feature sur réservoir 500 L, 8 bar",
		"distinguishingAttributes": {
			"équipement": "Full Feature sur réservoir 500 L",
			"pressionMaximale": "8 bar",
			"cuve": "500 L",
			"régulation": "vitesse fixe",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 500,
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
		"src": "/images/products/worthington-creyssensac-rlr-1000-50-hz-8-bar-full-feature-sur-reservoir-500-l.webp",
		"alt": "Repères techniques : Worthington Creyssensac RLR 1000, Full Feature sur réservoir 500 L, 8 bar",
		"sourceUrl": "https://www.worthington-creyssensac.com/content/dam/brands/Worthington%20Creyssensac/products-bp-structure/oil-injected-screw-compressor/fixed-speed/rlr-750-2000-%282022%29/leaflets/wco-rollair-750-2000-leaflet-en.pdf.coredownload.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Full Feature sur réservoir 500 L",
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
			"value": "500 L intégrés à cette configuration",
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
		"overview": "RLR 1000 Full Feature sur 500 L, 50 Hz, version 8 bar : le débit publié reste de 75 m³/h à 7,5 bar, soit 1 250 L/min, comme sur la station 270 L. Le choix du 500 L change le stockage et l’implantation : 420 kg et 1 940 × 665 × 1 665 mm, contre 355 kg et 1 625 × 665 × 1 535 mm pour le 270 L avec sécheur.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Configuration de stockage documentée : 500 L.",
			"Pression maximale de fonctionnement publiée : 8 bar.",
			"Comparaison des stations Full Feature avec sécheur : 500 L contre 270 L, soit 230 L de stockage supplémentaires ; masses publiées de 420 et 355 kg.",
			"Encombrement publié du 500 L avec sécheur : 1 940 × 665 × 1 665 mm. Par rapport au 270 L avec sécheur : 315 mm de longueur et 130 mm de hauteur supplémentaires, même largeur de 665 mm.",
			"La ligne 50 Hz, pression maximale 8 bar, donne une pression de référence de 7,5 bar et 75 m³/h ; performances du groupe mesurées selon ISO 1217, annexe C."
		],
		"limitations": [
			"Cycle de service du groupe complet non établi ; la tenue permanente reste indéterminée.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Configuration publiée dans la documentation citée ; disponibilité commerciale actuelle à confirmer.",
			"Les 230 L supplémentaires sont un volume de cuve, pas 230 L/min de production. Ils ne comblent pas un déficit de débit soutenu.",
			"Le cycle de service du groupe complet reste non établi ; aucune durée d’autonomie ou conclusion de service permanent n’est ajoutée à partir de la taille de cuve."
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
		},
		{
			"id": "review-20261030-worthington-creyssensac-rlr-1000-50-hz-8-bar-full-feature-sur-reservoir-500-l-1",
			"sourceUrl": "https://www.worthington-creyssensac.com/content/dam/brands/Worthington%20Creyssensac/products-bp-structure/oil-injected-screw-compressor/fixed-speed/rlr-750-2000-%282022%29/leaflets/wco-rollair-750-2000-leaflet-en.pdf.coredownload.pdf#page=6",
			"sourceLabel": "Relecture du modèle et de son voisin, 30 octobre 2026, pages PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-30",
			"confidence": "B",
			"notes": "Réponse primaire complète relue le 30 octobre 2026 ; SHA-256 453e287507815373993e3d0c796c82836a43fbc822fe0f2117a56f7b9635ba9d. Comparaison documentaire, sans essai physique CompatAir."
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
		],
		"editorial": [
			"review-20261030-worthington-creyssensac-rlr-1000-50-hz-8-bar-full-feature-sur-reservoir-500-l-1"
		]
	},
	"notes": [
		"Pression de mesure, pression maximale relative et pression absolue à l’entrée restent distinctes. ISO 1217 n’est revendiquée que pour les sources qui le citent."
	]
};

export default product;
