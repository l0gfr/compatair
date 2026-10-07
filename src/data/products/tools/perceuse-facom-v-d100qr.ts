import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-facom-v-d100qr",
	"slug": "perceuse-facom-v-d100qr",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "FACOM V.D100QR",
	"brand": "FACOM",
	"model": "V.D100QR",
	"mpn": "V.D100QR",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La fiche établit les dimensions ou caractéristiques mécaniques du modèle. Aucun débit d’air n’est déduit du couple, de la vitesse ni de la puissance.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-facom-v-d100qr.webp",
		"alt": "Repères techniques : FACOM V.D100QR",
		"sourceUrl": "https://www.facom.com/product/vd100qr/38-drive-10mm-reversible-pneumatic-drill?tid=610786",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "facom-v-d100qr",
		"label": "Référence V.D100QR",
		"distinguishingAttributes": {
			"reference": "V.D100QR",
			"Champ fabricant : Power Source": "Pneumatic",
			"Champ fabricant : Product Height [mm]": "151"
		}
	},
	"editorial": {
		"overview": "FACOM V.D100QR. La fiche établit les dimensions ou caractéristiques mécaniques du modèle. Aucun débit d’air n’est déduit du couple, de la vitesse ni de la puissance. Champ fabricant : Power Source : Pneumatic. Champ fabricant : Product Height [mm] : 151.",
		"verifiedFacts": [
			"Champ fabricant : Power Source : Pneumatic.",
			"Champ fabricant : Product Height [mm] : 151.",
			"Champ fabricant : Product Length [mm] : 195.",
			"Champ fabricant : Product Width [mm] : 42."
		],
		"limitations": [
			"La fiche établit les dimensions ou caractéristiques mécaniques du modèle. Aucun débit d’air n’est déduit du couple, de la vitesse ni de la puissance.",
			"Fiche constructeur FACOM ; données déclaratives sans essai CompatAir.",
			"Les kits, pièces, raccords, consommables et modèles non pneumatiques sont exclus.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Champ fabricant : Power Source",
			"value": "Pneumatic",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-vd100qr-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Height [mm]",
			"value": "151",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-vd100qr-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Length [mm]",
			"value": "195",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-vd100qr-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Width [mm]",
			"value": "42",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-vd100qr-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La fiche ne rattache pas un débit à une pression de mesure.",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-vd100qr-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-facom-vd100qr-html-p1",
			"sourceUrl": "https://www.facom.com/product/vd100qr/38-drive-10mm-reversible-pneumatic-drill?tid=610786",
			"sourceLabel": "FACOM, fiche constructeur V.D100QR",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 61e7c45468b4bdab61e2723d52b7542586f57c9f48c2082b60aa13cd0d09bd52. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-facom-vd100qr-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-facom-vd100qr-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-facom-vd100qr-html-p1"
		]
	},
	"notes": [
		"La fiche établit les dimensions ou caractéristiques mécaniques du modèle. Aucun débit d’air n’est déduit du couple, de la vitesse ni de la puissance."
	]
};

export default product;
