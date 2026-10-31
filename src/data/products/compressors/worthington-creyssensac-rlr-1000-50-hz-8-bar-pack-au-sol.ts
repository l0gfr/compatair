import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "worthington-creyssensac-rlr-1000-50-hz-8-bar-pack-au-sol",
	"slug": "worthington-creyssensac-rlr-1000-50-hz-8-bar-pack-au-sol",
	"brand": "Worthington Creyssensac",
	"model": "RLR 1000",
	"variant": {
		"familyId": "worthington-creyssensac-rlr-1000",
		"label": "Pack au sol, 8 bar",
		"distinguishingAttributes": {
			"équipement": "Pack au sol",
			"pressionMaximale": "8 bar",
			"cuve": "0 L",
			"régulation": "vitesse fixe",
			"fréquence": "50 Hz"
		}
	},
	"tankLiters": 0,
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
		"src": "/images/products/worthington-creyssensac-rlr-1000-50-hz-8-bar-pack-au-sol.webp",
		"alt": "Repères techniques : Worthington Creyssensac RLR 1000, Pack au sol, 8 bar",
		"sourceUrl": "https://www.worthington-creyssensac.com/content/dam/brands/Worthington%20Creyssensac/products-bp-structure/oil-injected-screw-compressor/fixed-speed/rlr-750-2000-%282022%29/leaflets/wco-rollair-750-2000-leaflet-en.pdf.coredownload.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Pack au sol",
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
			"value": "Groupe au sol ; réservoir externe exclu",
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
		"overview": "RLR 1000 Pack au sol, 50 Hz, version 8 bar : 1 250 L/min publiés à 7,5 bar, sans cuve de stockage intégrée. La brochure donne 225 kg pour le Pack et 260 kg pour le Full Feature. Le montage au sol sans sécheur mesure 1 210 × 665 × 1 045 mm, contre 1 460 × 665 × 1 045 mm avec sécheur. Le choix porte sur le traitement et l’implantation, pas sur une production d’air supplémentaire.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Configuration de stockage documentée : groupe au sol sans réservoir de stockage intégré.",
			"Pression maximale de fonctionnement publiée : 8 bar.",
			"La brochure distingue les montages au sol, au sol avec sécheur, sur cuve et sur cuve avec sécheur. Le réservoir externe ne fait pas partie du Pack au sol retenu.",
			"Pour le RLR 1000, les colonnes Pack et Full Feature indiquent 225 et 260 kg, soit 35 kg d’écart. Les cotes des montages au sol diffèrent de 250 mm en longueur, à largeur et hauteur identiques.",
			"Le point retenu vient de la ligne 50 Hz : pression maximale 8 bar, pression de référence 7,5 bar et 75 m³/h, soit 1 250 L/min. ISO 1217, annexe C est cité dans la note du tableau."
		],
		"limitations": [
			"Cycle de service du groupe complet non établi ; la tenue permanente reste indéterminée.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Configuration publiée dans la documentation citée ; disponibilité commerciale actuelle à confirmer.",
			"Le Pack au sol laisse le stockage et le traitement requis à définir dans le projet d’installation. La présence d’un sécheur sur une autre configuration ne garantit pas la qualité d’air de ce Pack."
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
			"id": "review-20261031-worthington-creyssensac-rlr-1000-50-hz-8-bar-pack-au-sol-1",
			"sourceUrl": "https://www.worthington-creyssensac.com/content/dam/brands/Worthington%20Creyssensac/products-bp-structure/oil-injected-screw-compressor/fixed-speed/rlr-750-2000-%282022%29/leaflets/wco-rollair-750-2000-leaflet-en.pdf.coredownload.pdf#page=3",
			"sourceLabel": "Relecture du modèle et de son voisin, 31 octobre 2026, pages PDF 3, 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "Réponse primaire complète reçue le 31 octobre 2026 ; passages déterminants relus. SHA-256 453e287507815373993e3d0c796c82836a43fbc822fe0f2117a56f7b9635ba9d. Comparaison documentaire, sans essai physique CompatAir."
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
			"review-20261031-worthington-creyssensac-rlr-1000-50-hz-8-bar-pack-au-sol-1"
		]
	},
	"notes": [
		"Pression de mesure, pression maximale relative et pression absolue à l’entrée restent distinctes. ISO 1217 n’est revendiquée que pour les sources qui le citent."
	]
};

export default product;
