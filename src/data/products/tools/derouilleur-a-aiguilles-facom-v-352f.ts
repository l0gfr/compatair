import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-facom-v-352f",
	"slug": "derouilleur-a-aiguilles-facom-v-352f",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "FACOM V.352F",
	"brand": "FACOM",
	"model": "V.352F",
	"mpn": "V.352F",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La fiche établit les dimensions ou caractéristiques mécaniques du modèle. Aucun débit d’air n’est déduit du couple, de la vitesse ni de la puissance.",
	"confidence": "B",
	"image": {
		"src": "/images/products/derouilleur-a-aiguilles-facom-v-352f.webp",
		"alt": "Repères techniques : FACOM V.352F",
		"sourceUrl": "https://www.facom.com/product/v352f/pneumatic-needle-scaler?tid=610786",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "facom-v-352f",
		"label": "Référence V.352F",
		"distinguishingAttributes": {
			"reference": "V.352F",
			"Champ fabricant : Power Source": "Pneumatic",
			"Champ fabricant : Product Height [mm]": "75"
		}
	},
	"editorial": {
		"overview": "FACOM V.352F. La fiche établit les dimensions ou caractéristiques mécaniques du modèle. Aucun débit d’air n’est déduit du couple, de la vitesse ni de la puissance. Champ fabricant : Power Source : Pneumatic. Champ fabricant : Product Height [mm] : 75.",
		"verifiedFacts": [
			"Champ fabricant : Power Source : Pneumatic.",
			"Champ fabricant : Product Height [mm] : 75.",
			"Champ fabricant : Product Length [mm] : 360.",
			"Champ fabricant : Product Weight [Kg] : 1.7.",
			"Champ fabricant : Product Width [mm] : 36."
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
				"october2b-tools-oct2b-facom-v352f-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Height [mm]",
			"value": "75",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-v352f-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Length [mm]",
			"value": "360",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-v352f-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Weight [Kg]",
			"value": "1.7",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-v352f-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Width [mm]",
			"value": "36",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-v352f-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La fiche ne rattache pas un débit à une pression de mesure.",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-v352f-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-facom-v352f-html-p1",
			"sourceUrl": "https://www.facom.com/product/v352f/pneumatic-needle-scaler?tid=610786",
			"sourceLabel": "FACOM, fiche constructeur V.352F",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b2690fb8d45486338799026d2c6bf3a6348c7bead0d7be89aca70d3020252d4e. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-facom-v352f-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-facom-v352f-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-facom-v352f-html-p1"
		]
	},
	"notes": [
		"La fiche établit les dimensions ou caractéristiques mécaniques du modèle. Aucun débit d’air n’est déduit du couple, de la vitesse ni de la puissance."
	]
};

export default product;
