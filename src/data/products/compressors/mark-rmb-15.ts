import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "mark-rmb-15",
	"slug": "mark-rmb-15",
	"brand": "MARK",
	"model": "RMB 15",
	"variant": {
		"familyId": "mark-rmb-15",
		"label": "Groupe sur socle sans réservoir de stockage intégré",
		"distinguishingAttributes": {
			"équipement": "Groupe sur socle sans réservoir de stockage intégré",
			"pressionMaximale": "13 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 13,
	"fadCurve": [
		{
			"pressureBar": 12.5,
			"litersPerMinute": 1946
		}
	],
	"oilType": "oil",
	"powerKw": 15,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/mark-rmb-15-technical-20261116-reviews.svg",
		"alt": "Repères techniques : MARK RMB 15",
		"sourceUrl": "https://www.mark-compressors.com/content/dam/brands/Mark/products-bp-structure/oil-injected-screw-compressor/fixed-speed/rmb-15-25/leaflets/Mark_RMA-RMB%207.5-25%20FS-IVR_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe sur socle sans réservoir de stockage intégré",
			"evidenceIds": [
				"october3d-mark-pdf-new-04-p7"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "13 bar relatifs",
			"evidenceIds": [
				"october3d-mark-family-04"
			]
		},
		{
			"label": "Air livré à 12,5 bar",
			"value": "1 950 L/min",
			"evidenceIds": [
				"october3d-mark-family-04",
				"october3d-mark-pdf-new-04-p7"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "0 L",
			"evidenceIds": [
				"october3d-mark-pdf-new-04-p7"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "Alimentation non précisée dans les extraits retenus",
			"evidenceIds": [
				"october3d-mark-family-04"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "non précisée",
			"evidenceIds": [
				"october3d-mark-family-04"
			]
		},
		{
			"label": "FAD à12,5 bar, unités publiées",
			"value": "117 m³/h ; 1946 L/min dans la colonne alternative",
			"evidenceIds": [
				"review:2026-11-16-reviews:mark-rmb-15:0"
			]
		},
		{
			"label": "Groupe sur socle",
			"value": "330 kg ; 1200 × 835 × 1220 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:mark-rmb-15:0"
			]
		},
		{
			"label": "Groupe avec sécheur",
			"value": "375 kg ; 1450 × 835 × 1220 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:mark-rmb-15:0"
			]
		}
	],
	"editorial": {
		"overview": "La RMB 15 fixe publie 1 946 L/min à la pression de référence de 12,5 bar pour 15 kW ; 13 bar est la pression maximale de la version. Le tableau arrondit séparément ce débit à 117 m³/h. La RMB 15 IVR annonce 2 138 L/min à ce point, et la RMB 18 IVR 2 435 L/min. Le montage sur socle mesure 1 200 × 835 × 1 220 mm ; le sécheur allonge cette configuration à 1 450 mm. Le taux de marche reste indéterminé.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 0 L.",
			"Pression maximale de fonctionnement publiée : 13 bar.",
			"FAD à12,5 bar, unités publiées : 117 m³/h ; 1946 L/min dans la colonne alternative.",
			"Groupe sur socle : 330 kg ; 1200 × 835 × 1220 mm.",
			"Groupe avec sécheur : 375 kg ; 1450 × 835 × 1220 mm."
		],
		"limitations": [
			"Un seul modèle/configuration retenu ; aucune multiplication des pressions ou réservoirs.",
			"Cycle de service non établi ; la tenue permanente reste indéterminée.",
			"Fréquence non publiée dans la fiche retenue ; aucune transposition des performances à 50 Hz.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Installation et disponibilité en France à confirmer selon l’alimentation et le raccordement publiés."
		]
	},
	"evidence": [
		{
			"id": "october3d-mark-pdf-new-04-p7",
			"sourceUrl": "https://www.mark-compressors.com/content/dam/brands/Mark/products-bp-structure/oil-injected-screw-compressor/fixed-speed/rmb-15-25/leaflets/Mark_RMA-RMB%207.5-25%20FS-IVR_EN.pdf#page=7",
			"sourceLabel": "MARK, documentation constructeur, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 7939b1c035eed5ecdfbbded352a6de075e9eeadd429dd7f7fb59d6f66f4d5e83 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-mark-pdf-new-04-p2",
			"sourceUrl": "https://www.mark-compressors.com/content/dam/brands/Mark/products-bp-structure/oil-injected-screw-compressor/fixed-speed/rmb-15-25/leaflets/Mark_RMA-RMB%207.5-25%20FS-IVR_EN.pdf#page=2",
			"sourceLabel": "MARK, documentation constructeur, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 7939b1c035eed5ecdfbbded352a6de075e9eeadd429dd7f7fb59d6f66f4d5e83 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-mark-family-04",
			"sourceUrl": "https://www.mark-compressors.com/en-int/products/screw-compressors/fixed-speed/gear-driven-rmb",
			"sourceLabel": "MARK, documentation constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 fd358d4e6b4689d2fd7fb27ac6a5079c89ca5d4f7fc1cd1e16b1a639885a9ccc de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:mark-rmb-15:0",
			"sourceUrl": "https://www.mark-compressors.com/content/dam/brands/Mark/products-bp-structure/oil-injected-screw-compressor/fixed-speed/rmb-15-25/leaflets/Mark_RMA-RMB%207.5-25%20FS-IVR_EN.pdf",
			"sourceLabel": "MARK, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La RMB 15 fixe publie 1 946 L/min à la pression de référence de 12,5 bar pour 15 kW ; 13 bar est la pression maximale de la version. Le tableau arrondit séparément ce débit à 117 m³/h. La RMB 15 IVR annonce 2 138 L/min à ce point, et la RMB 18 IVR 2 435 L/min. Le montage sur socle mesure 1 200 × 835 × 1 220 mm ; le sécheur allonge cette configuration à 1 450 mm. Le taux de marche reste indéterminé. GET complet SHA-256 7939b1c035eed5ecdfbbded352a6de075e9eeadd429dd7f7fb59d6f66f4d5e83. Pages PDF lues : 7."
		},
		{
			"id": "review:2026-11-16-reviews:mark-rmb-15:1",
			"sourceUrl": "https://www.mark-compressors.com/en-int/products/screw-compressors/fixed-speed/gear-driven-rmb",
			"sourceLabel": "MARK, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La RMB 15 fixe publie 1 946 L/min à la pression de référence de 12,5 bar pour 15 kW ; 13 bar est la pression maximale de la version. Le tableau arrondit séparément ce débit à 117 m³/h. La RMB 15 IVR annonce 2 138 L/min à ce point, et la RMB 18 IVR 2 435 L/min. Le montage sur socle mesure 1 200 × 835 × 1 220 mm ; le sécheur allonge cette configuration à 1 450 mm. Le taux de marche reste indéterminé. GET complet SHA-256 39bb605cd709e0925d0b78554fa7887fb8158c225a23b4830027574cee3329ba. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october3d-mark-pdf-new-04-p7"
		],
		"oilType": [
			"october3d-mark-pdf-new-04-p2"
		],
		"maxPressureBar": [
			"october3d-mark-family-04"
		],
		"fadCurve": [
			"review:2026-11-16-reviews:mark-rmb-15:0"
		],
		"powerKw": [
			"october3d-mark-family-04"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
