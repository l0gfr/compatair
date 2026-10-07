import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-facom-v-347f",
	"slug": "meuleuse-facom-v-347f",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "FACOM V.347F",
	"brand": "FACOM",
	"model": "V.347F",
	"mpn": "V.347F",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La fiche établit les dimensions ou caractéristiques mécaniques du modèle. Aucun débit d’air n’est déduit du couple, de la vitesse ni de la puissance.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-facom-v-347f.webp",
		"alt": "Repères techniques : FACOM V.347F",
		"sourceUrl": "https://www.facom.com/product/v347f/6mm-angle-die-grinder?tid=610786",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "facom-v-347f",
		"label": "Référence V.347F",
		"distinguishingAttributes": {
			"reference": "V.347F",
			"Champ fabricant : Power Source": "Pneumatic",
			"Champ fabricant : Product Height [mm]": "347"
		}
	},
	"editorial": {
		"overview": "FACOM V.347F. La fiche établit les dimensions ou caractéristiques mécaniques du modèle. Aucun débit d’air n’est déduit du couple, de la vitesse ni de la puissance. Champ fabricant : Power Source : Pneumatic. Champ fabricant : Product Height [mm] : 347.",
		"verifiedFacts": [
			"Champ fabricant : Power Source : Pneumatic.",
			"Champ fabricant : Product Height [mm] : 347.",
			"Champ fabricant : Product Length [mm] : 160.",
			"Champ fabricant : Product Width [mm] : 27."
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
				"october2b-tools-oct2b-facom-v347f-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Height [mm]",
			"value": "347",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-v347f-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Length [mm]",
			"value": "160",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-v347f-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Width [mm]",
			"value": "27",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-v347f-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La fiche ne rattache pas un débit à une pression de mesure.",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-v347f-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-facom-v347f-html-p1",
			"sourceUrl": "https://www.facom.com/product/v347f/6mm-angle-die-grinder?tid=610786",
			"sourceLabel": "FACOM, fiche constructeur V.347F",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : ede037b5763bff84b88d5f0f188469cd002dc0f569fcacd108b0baa9b93d4df8. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-facom-v347f-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-facom-v347f-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-facom-v347f-html-p1"
		]
	},
	"notes": [
		"La fiche établit les dimensions ou caractéristiques mécaniques du modèle. Aucun débit d’air n’est déduit du couple, de la vitesse ni de la puissance."
	]
};

export default product;
