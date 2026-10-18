import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "mark-msa-15",
	"slug": "mark-msa-15",
	"brand": "MARK",
	"model": "MSA 15",
	"variant": {
		"familyId": "mark-msa-15",
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
			"litersPerMinute": 1616.667
		}
	],
	"oilType": "oil",
	"powerKw": 15,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/mark-msa-15.svg",
		"alt": "Repères techniques : MARK MSA 15",
		"sourceUrl": "https://www.mark-compressors.com/en-int/products/screw-compressors/fixed-speed/belt-driven-msa",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe sur socle sans réservoir de stockage intégré",
			"evidenceIds": [
				"october3d-mark-pdf-new-00-p4"
			]
		},
		{
			"label": "Pression maximale de fonctionnement",
			"value": "13 bar relatifs",
			"evidenceIds": [
				"october3d-mark-pdf-new-00-p4"
			]
		},
		{
			"label": "Air livré à 12,5 bar",
			"value": "1 616,667 L/min",
			"evidenceIds": [
				"october3d-mark-pdf-new-00-p4"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "0 L",
			"evidenceIds": [
				"october3d-mark-pdf-new-00-p4"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "Alimentation non précisée dans les extraits retenus",
			"evidenceIds": [
				"october3d-mark-family-00"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "50 Hz, publié dans le tableau fabricant",
			"evidenceIds": [
				"october3d-mark-pdf-new-00-p4"
			]
		}
	],
	"editorial": {
		"overview": "MSA 15 sur socle, version 13 bar à 50 Hz : 97 m³/h, soit 1 616,667 L/min, à la pression de référence de 12,5 bar. Le MSA 11 de même pression annonce 69 m³/h. Les versions MSA 15 de 8 et 10 bar possèdent leurs propres capacités.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 0 L.",
			"Pression maximale de fonctionnement publiée : 13 bar."
		],
		"limitations": [
			"La conversion des 97 m³/h est conservée ; les 27,0 L/s imprimés sont arrondis et ne sont pas moyennés avec cette valeur.",
			"Le tableau établit 50 Hz ; tension, raccordement et disponibilité sont à confirmer pour la version commandée.",
			"Le taux de marche du groupe complet reste inconnu ; la tenue permanente demeure indéterminée."
		]
	},
	"evidence": [
		{
			"id": "october3d-mark-pdf-new-00-p4",
			"sourceUrl": "https://www.mark-compressors.com/content/dam/brands/Mark/products-bp-structure/oil-injected-screw-compressor/fixed-speed/msa-5-5-15/leaflets/MSA5.5-15_OIS_MARK_6999%202100%201_EN.pdf#page=4",
			"sourceLabel": "MARK, documentation constructeur, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 c2c60eb59b31a287be00c7e2265eec36b29f61dc851447a21b0e9a91b61e19ac de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-mark-pdf-new-00-p1",
			"sourceUrl": "https://www.mark-compressors.com/content/dam/brands/Mark/products-bp-structure/oil-injected-screw-compressor/fixed-speed/msa-5-5-15/leaflets/MSA5.5-15_OIS_MARK_6999%202100%201_EN.pdf#page=1",
			"sourceLabel": "MARK, documentation constructeur, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 c2c60eb59b31a287be00c7e2265eec36b29f61dc851447a21b0e9a91b61e19ac de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-mark-family-00",
			"sourceUrl": "https://www.mark-compressors.com/en-int/products/screw-compressors/fixed-speed/belt-driven-msa",
			"sourceLabel": "MARK, documentation constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 2963f6d52d4c13a8c60ac46b35949c6ea976e8a86c22e400fc693ab62d018d6b de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october3d-mark-pdf-new-00-p4"
		],
		"oilType": [
			"october3d-mark-pdf-new-00-p1"
		],
		"maxPressureBar": [
			"october3d-mark-pdf-new-00-p4"
		],
		"fadCurve": [
			"october3d-mark-pdf-new-00-p4"
		],
		"powerKw": [
			"october3d-mark-pdf-new-00-p4"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
