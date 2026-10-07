import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-facom-vr-s3136pb",
	"slug": "cle-a-cliquet-facom-vr-s3136pb",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "FACOM VR.S3136PB",
	"brand": "FACOM",
	"model": "VR.S3136PB",
	"mpn": "VR.S3136PB",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La fiche établit les dimensions ou caractéristiques mécaniques du modèle. Aucun débit d’air n’est déduit du couple, de la vitesse ni de la puissance.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-facom-vr-s3136pb.webp",
		"alt": "Repères techniques : FACOM VR.S3136PB",
		"sourceUrl": "https://www.facom.com/product/vrs3136pb/12-ratchet?tid=610786",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "facom-vr-s3136pb",
		"label": "Référence VR.S3136PB",
		"distinguishingAttributes": {
			"reference": "VR.S3136PB",
			"Champ fabricant : Power Source": "Pneumatic",
			"Champ fabricant : Product Height [mm]": "43"
		}
	},
	"editorial": {
		"overview": "FACOM VR.S3136PB. La fiche établit les dimensions ou caractéristiques mécaniques du modèle. Aucun débit d’air n’est déduit du couple, de la vitesse ni de la puissance. Champ fabricant : Power Source : Pneumatic. Champ fabricant : Product Height [mm] : 43.",
		"verifiedFacts": [
			"Champ fabricant : Power Source : Pneumatic.",
			"Champ fabricant : Product Height [mm] : 43.",
			"Champ fabricant : Product Length [mm] : 261.",
			"Champ fabricant : Product Weight [Kg] : 1.2.",
			"Champ fabricant : Product Width [mm] : 58."
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
				"october2b-tools-oct2b-facom-vrs3136pb-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Height [mm]",
			"value": "43",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-vrs3136pb-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Length [mm]",
			"value": "261",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-vrs3136pb-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Weight [Kg]",
			"value": "1.2",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-vrs3136pb-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Width [mm]",
			"value": "58",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-vrs3136pb-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La fiche ne rattache pas un débit à une pression de mesure.",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-vrs3136pb-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-facom-vrs3136pb-html-p1",
			"sourceUrl": "https://www.facom.com/product/vrs3136pb/12-ratchet?tid=610786",
			"sourceLabel": "FACOM, fiche constructeur VR.S3136PB",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : fe082f005d4fb3b767c77962e3af570301376b0fb0c5fb8528f61220bda87ade. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-facom-vrs3136pb-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-facom-vrs3136pb-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-facom-vrs3136pb-html-p1"
		]
	},
	"notes": [
		"La fiche établit les dimensions ou caractéristiques mécaniques du modèle. Aucun débit d’air n’est déduit du couple, de la vitesse ni de la puissance."
	]
};

export default product;
