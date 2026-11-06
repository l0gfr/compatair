import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "alup-evoluto-14",
	"slug": "alup-evoluto-14",
	"brand": "ALUP",
	"model": "EVOLUTO 14",
	"variant": {
		"familyId": "alup-evoluto-14",
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
			"litersPerMinute": 1991.667
		}
	],
	"oilType": "oil",
	"powerKw": 15,
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/alup-evoluto-14.svg",
		"alt": "Repères techniques : ALUP EVOLUTO 14",
		"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/fixed-speed/largo-15-25/leaflets/Alup_Largo_15-25_Evoluto_8-22_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
	},
	"specifications": [
		{
			"label": "Configuration constructeur",
			"value": "Groupe sur socle sans réservoir de stockage intégré",
			"evidenceIds": [
				"review:2026-11-06-followup:alup-evoluto-14:2"
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
			"value": "1 991,667 L/min",
			"evidenceIds": [
				"review:2026-11-06-followup:alup-evoluto-14:2"
			]
		},
		{
			"label": "Cuve de stockage",
			"value": "0 L",
			"evidenceIds": [
				"review:2026-11-06-followup:alup-evoluto-14:2"
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
		}
	],
	"editorial": {
		"overview": "ALUP EVOLUTO 14. 1 991,667 L/min à 9,5 bar. Groupe sur socle sans réservoir de stockage intégré.",
		"verifiedFacts": [
			"Air livré rattaché à une pression et aux unités originales du constructeur.",
			"Cuve de stockage documentée : 0 L.",
			"Plafond conservateur de la plage de fonctionnement : 10 bar."
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
			"id": "review:2026-11-06-followup:alup-evoluto-14:1",
			"sourceUrl": "https://www.alup.com/en-international/products/screw-compressors/variable-speed/evoluto-8-22",
			"sourceLabel": "ALUP, revue documentaire du 6 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Tableau PDF7 : EVOLUTO14,119,5 m³/h à9,5 bar,15 kW,base223 kg. Contrairement au11,réserve de débit supérieure surmêmegabarit1165 ×655 ×1045. Corriger le repère page4 vers7. SHA-256 du document complet : 40a44d98f5fff13d612812f4e6b5bead465e1606a9bc7fb749b07d2556e1f5c8."
		},
		{
			"id": "review:2026-11-06-followup:alup-evoluto-14:2",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/fixed-speed/largo-15-25/leaflets/Alup_Largo_15-25_Evoluto_8-22_EN.pdf#page=7",
			"sourceLabel": "ALUP, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Tableau PDF7 : EVOLUTO14,119,5 m³/h à9,5 bar,15 kW,base223 kg. Contrairement au11,réserve de débit supérieure surmêmegabarit1165 ×655 ×1045. Corriger le repère page4 vers7. SHA-256 du document complet : 88850343508a5a38e98557b7e0229f393825f76cfdf4daa350b9ef9f9f6359a3."
		},
		{
			"id": "review:2026-11-06-followup:alup-evoluto-14:3",
			"sourceUrl": "https://www.alup.com/content/dam/brands/Alup/products-bp-structure/oil-injected-screw-compressor/fixed-speed/largo-15-25/leaflets/Alup_Largo_15-25_Evoluto_8-22_EN.pdf#page=1",
			"sourceLabel": "ALUP, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Tableau PDF7 : EVOLUTO14,119,5 m³/h à9,5 bar,15 kW,base223 kg. Contrairement au11,réserve de débit supérieure surmêmegabarit1165 ×655 ×1045. Corriger le repère page4 vers7. SHA-256 du document complet : 88850343508a5a38e98557b7e0229f393825f76cfdf4daa350b9ef9f9f6359a3."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"review:2026-11-06-followup:alup-evoluto-14:2"
		],
		"oilType": [
			"october3d-alup-pdf-extra-04-p1"
		],
		"maxPressureBar": [
			"october3d-alup-extra-98",
			"october3d-alup-extra-98"
		],
		"fadCurve": [
			"review:2026-11-06-followup:alup-evoluto-14:2"
		],
		"powerKw": [
			"review:2026-11-06-followup:alup-evoluto-14:2"
		]
	},
	"notes": [
		"Pression FAD, plage de fonctionnement et pression de soupape restent distinctes. ISO 1217 n’est pas ajoutée à une source qui ne la revendique pas."
	]
};

export default product;
