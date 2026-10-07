import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "mark-rmp-8-ivr",
	"slug": "mark-rmp-8-ivr",
	"brand": "MARK",
	"model": "RMP 8 IVR",
	"variant": {
		"familyId": "mark-rmp-8-ivr",
		"label": "Groupe sur socle sans réservoir de stockage intégré",
		"distinguishingAttributes": {
			"équipement": "Groupe sur socle sans réservoir de stockage intégré",
			"pressionMaximale": "10 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 9.5,
			"litersPerMinute": 1103.333
		}
	],
	"oilType": "unknown",
	"powerKw": 7,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/mark-rmp-8-ivr.svg",
		"alt": "Repères techniques : MARK RMP 8 IVR",
		"sourceUrl": "https://www.mark-compressors.com/en-int/products/screw-compressors/variable-speed/direct-drive-rmp-ivr-pm",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe sur socle sans réservoir de stockage intégré",
			"evidenceIds": [
				"october3d-mark-pdf-new-15-p4"
			]
		},
		{
			"label": "Plafond de la plage de fonctionnement",
			"value": "10 bar relatifs",
			"evidenceIds": [
				"october3d-mark-family-13"
			]
		},
		{
			"label": "Air livré à 9,5 bar",
			"value": "1 103,333 L/min",
			"evidenceIds": [
				"october3d-mark-family-13"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "0 L",
			"evidenceIds": [
				"october3d-mark-pdf-new-15-p4"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "Alimentation non précisée dans les extraits retenus",
			"evidenceIds": [
				"october3d-mark-family-13"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "non précisée",
			"evidenceIds": [
				"october3d-mark-family-13"
			]
		}
	],
	"editorial": {
		"overview": "MARK RMP 8 IVR. 1 103,333 L/min à 9,5 bar. Groupe sur socle sans réservoir de stockage intégré.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 0 L.",
			"Plafond conservateur de la plage de fonctionnement : 10 bar."
		],
		"limitations": [
			"Points FAD supérieurs au plafond de fonctionnement excluants, y compris lorsque le tableau présente une colonne 12,5 bar pour une famille limitée à 10 bar.",
			"Version sur socle retenue ; réservoir externe exclu.",
			"Capacité catalogue nominale/maximale de la version à régulation VSD ; minimum de débit à ce point non documenté.",
			"Cycle de service non établi ; la tenue permanente reste indéterminée.",
			"Fréquence non publiée dans la fiche retenue ; aucune transposition des performances à 50 Hz.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Installation et disponibilité en France à confirmer selon l’alimentation et le raccordement publiés."
		]
	},
	"evidence": [
		{
			"id": "october3d-mark-family-13",
			"sourceUrl": "https://www.mark-compressors.com/en-int/products/screw-compressors/variable-speed/direct-drive-rmp-ivr-pm",
			"sourceLabel": "MARK, documentation constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 51ca19dd1be6cf85742c461fb74a1679caa23e7b1d7cfe4d851528d3c846d8b5 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-mark-pdf-new-15-p4",
			"sourceUrl": "https://www.mark-compressors.com/content/dam/brands/Mark/products-bp-structure/oil-injected-screw-compressor/ivr/rmp-8-22-ivr/product-leaflets/MARK%20RMB%2015-25%20-%20RMP%208-22%20IVR%20Sales%20Leaflet%20EN%206999200640_LR.pdf#page=4",
			"sourceLabel": "MARK, documentation constructeur, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 02697ffe3b3b910294688733e700860c56011c61ffad42d200989a1f28672b10 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october3d-mark-pdf-new-15-p4"
		],
		"maxPressureBar": [
			"october3d-mark-family-13",
			"october3d-mark-family-13"
		],
		"fadCurve": [
			"october3d-mark-family-13"
		],
		"powerKw": [
			"october3d-mark-family-13"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
