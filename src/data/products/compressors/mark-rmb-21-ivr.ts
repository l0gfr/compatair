const product = {
	"id": "mark-rmb-21-ivr",
	"slug": "mark-rmb-21-ivr",
	"brand": "MARK",
	"model": "RMB 21 IVR",
	"variant": {
		"familyId": "mark-rmb-21-ivr",
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
			"litersPerMinute": 3033.333
		}
	],
	"oilType": "oil",
	"powerKw": 22,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/mark-rmb-21-ivr.svg",
		"alt": "Repères techniques : MARK RMB 21 IVR",
		"sourceUrl": "https://www.mark-compressors.com/en-int/products/screw-compressors/variable-speed/direct-driven-rmb-ivr",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
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
				"october3d-mark-family-16"
			]
		},
		{
			"label": "Air livré à 12,5 bar",
			"value": "3 033,333 L/min",
			"evidenceIds": [
				"october3d-mark-family-16"
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
				"october3d-mark-family-16"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "non précisée",
			"evidenceIds": [
				"october3d-mark-family-16"
			]
		}
	],
	"editorial": {
		"overview": "MARK RMB 21 IVR. 3 033,333 L/min à 12,5 bar. Groupe sur socle sans réservoir de stockage intégré.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 0 L.",
			"Pression maximale de fonctionnement publiée : 13 bar."
		],
		"limitations": [
			"Un seul modèle/configuration retenu ; aucune multiplication des pressions ou réservoirs.",
			"Capacité catalogue nominale/maximale de la version à régulation VSD ; minimum de débit à ce point non documenté.",
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
			"id": "october3d-mark-family-16",
			"sourceUrl": "https://www.mark-compressors.com/en-int/products/screw-compressors/variable-speed/direct-driven-rmb-ivr",
			"sourceLabel": "MARK, documentation constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 cb2aba05ae75e3d81dc8e56f34d4e870dea82aa8ed727ad454f44c19085b49ab de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
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
			"october3d-mark-family-16"
		],
		"fadCurve": [
			"october3d-mark-family-16"
		],
		"powerKw": [
			"october3d-mark-family-16"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
