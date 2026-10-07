import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-facom-v-445f",
	"slug": "meuleuse-facom-v-445f",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "FACOM V.445F",
	"brand": "FACOM",
	"model": "V.445F",
	"mpn": "V.445F",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La fiche établit les dimensions ou caractéristiques mécaniques du modèle. Aucun débit d’air n’est déduit du couple, de la vitesse ni de la puissance.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-facom-v-445f.webp",
		"alt": "Repères techniques : FACOM V.445F",
		"sourceUrl": "https://www.facom.com/product/v445f/6mm-straight-die-grinder-collet-front-exhaust?tid=610786",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "facom-v-445f",
		"label": "Référence V.445F",
		"distinguishingAttributes": {
			"reference": "V.445F",
			"Champ fabricant : Power Source": "Pneumatic",
			"Champ fabricant : Product Height [mm]": "80"
		}
	},
	"editorial": {
		"overview": "FACOM V.445F. La fiche établit les dimensions ou caractéristiques mécaniques du modèle. Aucun débit d’air n’est déduit du couple, de la vitesse ni de la puissance. Champ fabricant : Power Source : Pneumatic. Champ fabricant : Product Height [mm] : 80.",
		"verifiedFacts": [
			"Champ fabricant : Power Source : Pneumatic.",
			"Champ fabricant : Product Height [mm] : 80.",
			"Champ fabricant : Product Length [mm] : 207.",
			"Champ fabricant : Product Weight [Kg] : 0.96.",
			"Champ fabricant : Product Width [mm] : 6."
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
				"october2b-tools-oct2b-facom-v445f-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Height [mm]",
			"value": "80",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-v445f-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Length [mm]",
			"value": "207",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-v445f-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Weight [Kg]",
			"value": "0.96",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-v445f-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Width [mm]",
			"value": "6",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-v445f-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La fiche ne rattache pas un débit à une pression de mesure.",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-v445f-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-facom-v445f-html-p1",
			"sourceUrl": "https://www.facom.com/product/v445f/6mm-straight-die-grinder-collet-front-exhaust?tid=610786",
			"sourceLabel": "FACOM, fiche constructeur V.445F",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 269a355ea21b413bd18db385e424d9149aebf24590d6673939157164e3f10c93. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-facom-v445f-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-facom-v445f-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-facom-v445f-html-p1"
		]
	},
	"notes": [
		"La fiche établit les dimensions ou caractéristiques mécaniques du modèle. Aucun débit d’air n’est déduit du couple, de la vitesse ni de la puissance."
	]
};

export default product;
