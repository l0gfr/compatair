import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "alup-evoluto-22",
	"slug": "alup-evoluto-22",
	"brand": "ALUP",
	"model": "EVOLUTO 22",
	"variant": {
		"familyId": "alup-evoluto-22",
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
			"litersPerMinute": 3480
		}
	],
	"oilType": "oil",
	"powerKw": 22,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/alup-evoluto-22-technical-20261116-followup.svg",
		"alt": "Repères techniques : ALUP EVOLUTO 22",
		"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/fixed-speed/largo-15-25/leaflets/Alup_Largo_15-25_Evoluto_8-22_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe sur socle sans réservoir de stockage intégré",
			"evidenceIds": [
				"review:2026-11-16-technical:alup-evoluto-22:0"
			]
		},
		{
			"label": "Plafond de la plage de fonctionnement",
			"value": "10 bar relatifs",
			"evidenceIds": [
				"october3d-alup-extra-98"
			]
		},
		{
			"label": "Air livré à 9,5 bar",
			"value": "3 480 L/min",
			"evidenceIds": [
				"review:2026-11-16-technical:alup-evoluto-22:0"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "0 L",
			"evidenceIds": [
				"review:2026-11-16-technical:alup-evoluto-22:0"
			]
		},
		{
			"label": "Alimentation publiée",
			"value": "Alimentation non précisée dans les extraits retenus",
			"evidenceIds": [
				"october3d-alup-extra-98"
			]
		},
		{
			"label": "Fréquence retenue",
			"value": "non précisée",
			"evidenceIds": [
				"october3d-alup-extra-98"
			]
		},
		{
			"label": "Localisation corrigée des performances",
			"value": "Page PDF7, tableau EVOLUTO8–22 ; page4 : équipements",
			"evidenceIds": [
				"review:2026-11-16-technical:alup-evoluto-22:0"
			]
		},
		{
			"label": "FAD maximal à9,5 bar, unité originale",
			"value": "208,8 m³/h",
			"evidenceIds": [
				"review:2026-11-16-technical:alup-evoluto-22:0"
			]
		}
	],
	"editorial": {
		"overview": "L’EVOLUTO 22 sur socle est le groupe 22 kW de 1 395 × 835 × 1 220 mm ; l’EVOLUTO 11 utilise le châssis 1 165 × 655 × 1 045 mm. À 9,5 bar, leurs maxima publiés sont respectivement 208,8 et 95,8 m³/h. La colonne 12,5 bar du catalogue dépasse le plafond de 10 bar retenu et reste exclue du moteur. Le débit minimal de modulation ne représente pas une moyenne d’atelier.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 0 L.",
			"Plafond conservateur de la plage de fonctionnement : 10 bar.",
			"Localisation corrigée des performances : Page PDF7, tableau EVOLUTO8–22 ; page 4 : équipements.",
			"FAD maximal à9,5 bar, unité originale : 208,8 m³/h."
		],
		"limitations": [
			"Points FAD supérieurs au plafond de fonctionnement excluants, y compris lorsque le tableau présente une colonne 12,5 bar pour une famille limitée à 10 bar.",
			"Version sur socle retenue ; réservoir externe exclu.",
			"Cycle de service non établi ; la tenue permanente reste indéterminée.",
			"Fréquence non publiée dans la fiche retenue ; aucune transposition des performances à 50 Hz.",
			"Seules les pressions documentées sont utilisées. Aucun débit aspiré, prolongement de courbe ou essai physique CompatAir.",
			"Installation et disponibilité en France à confirmer selon l’alimentation et le raccordement publiés."
		]
	},
	"evidence": [
		{
			"id": "october3d-alup-extra-98",
			"sourceUrl": "https://www.alup.com/en-international/products/screw-compressors/variable-speed/evoluto-8-22",
			"sourceLabel": "ALUP, documentation constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 2c433f335301fbeef40d2a45f4a7971d66c419e2c7c6bf05d38721f39f920775 de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-alup-pdf-extra-04-p4",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/fixed-speed/largo-15-25/leaflets/Alup_Largo_15-25_Evoluto_8-22_EN.pdf#page=4",
			"sourceLabel": "ALUP, documentation constructeur, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 540244da3736cbd33c8e75661aef4d490cc81e0cec51bf7d62ce02237a7261dd de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "october3d-alup-pdf-extra-04-p1",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/fixed-speed/largo-15-25/leaflets/Alup_Largo_15-25_Evoluto_8-22_EN.pdf#page=1",
			"sourceLabel": "ALUP, documentation constructeur, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 540244da3736cbd33c8e75661aef4d490cc81e0cec51bf7d62ce02237a7261dd de la réponse originale. Documentation constructeur ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-technical:alup-evoluto-22:0",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/fixed-speed/largo-15-25/leaflets/Alup_Largo_15-25_Evoluto_8-22_EN.pdf",
			"sourceLabel": "ALUP, document constructeur vérifié le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "L’EVOLUTO 22 sur socle est le groupe 22 kW de 1 395 × 835 × 1 220 mm ; l’EVOLUTO 11 utilise le châssis 1 165 × 655 × 1 045 mm. À 9,5 bar, leurs maxima publiés sont respectivement 208,8 et 95,8 m³/h. La colonne 12,5 bar du catalogue dépasse le plafond de 10 bar retenu et reste exclue du moteur. Le débit minimal de modulation ne représente pas une moyenne d’atelier. GET complet SHA-256 88850343508a5a38e98557b7e0229f393825f76cfdf4daa350b9ef9f9f6359a3. Pages PDF lues : 1, 7."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"review:2026-11-16-technical:alup-evoluto-22:0"
		],
		"oilType": [
			"october3d-alup-pdf-extra-04-p1"
		],
		"maxPressureBar": [
			"october3d-alup-extra-98"
		],
		"fadCurve": [
			"review:2026-11-16-technical:alup-evoluto-22:0"
		],
		"powerKw": [
			"review:2026-11-16-technical:alup-evoluto-22:0"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
