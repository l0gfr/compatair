import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-facom-vr-r127pb",
	"slug": "cle-a-cliquet-facom-vr-r127pb",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "FACOM VR.R127PB",
	"brand": "FACOM",
	"model": "VR.R127PB",
	"mpn": "VR.R127PB",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La fiche établit les dimensions ou caractéristiques mécaniques du modèle. Aucun débit d’air n’est déduit du couple, de la vitesse ni de la puissance.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-facom-vr-r127pb.webp",
		"alt": "Repères techniques : FACOM VR.R127PB",
		"sourceUrl": "https://www.facom.com/product/vrr127pb/14-palm-control-ratchet?tid=610786",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "facom-vr-r127pb",
		"label": "Référence VR.R127PB",
		"distinguishingAttributes": {
			"reference": "VR.R127PB",
			"Champ fabricant : Power Source": "Pneumatic",
			"Champ fabricant : Product Height [mm]": "36"
		}
	},
	"editorial": {
		"overview": "FACOM VR.R127PB. La fiche établit les dimensions ou caractéristiques mécaniques du modèle. Aucun débit d’air n’est déduit du couple, de la vitesse ni de la puissance. Champ fabricant : Power Source : Pneumatic. Champ fabricant : Product Height [mm] : 36.",
		"verifiedFacts": [
			"Champ fabricant : Power Source : Pneumatic.",
			"Champ fabricant : Product Height [mm] : 36.",
			"Champ fabricant : Product Length [mm] : 136.",
			"Champ fabricant : Product Weight [Kg] : 0.5.",
			"Champ fabricant : Product Width [mm] : 56."
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
				"october2b-tools-oct2b-facom-vrr127pb-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Height [mm]",
			"value": "36",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-vrr127pb-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Length [mm]",
			"value": "136",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-vrr127pb-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Weight [Kg]",
			"value": "0.5",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-vrr127pb-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Width [mm]",
			"value": "56",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-vrr127pb-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La fiche ne rattache pas un débit à une pression de mesure.",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-vrr127pb-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-facom-vrr127pb-html-p1",
			"sourceUrl": "https://www.facom.com/product/vrr127pb/14-palm-control-ratchet?tid=610786",
			"sourceLabel": "FACOM, fiche constructeur VR.R127PB",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 35c5abf512b187d50245b3cd498bc4b993b89b706879156da31fb16c541f95a2. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-facom-vrr127pb-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-facom-vrr127pb-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-facom-vrr127pb-html-p1"
		]
	},
	"notes": [
		"La fiche établit les dimensions ou caractéristiques mécaniques du modèle. Aucun débit d’air n’est déduit du couple, de la vitesse ni de la puissance."
	]
};

export default product;
