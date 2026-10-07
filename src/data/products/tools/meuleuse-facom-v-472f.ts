import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-facom-v-472f",
	"slug": "meuleuse-facom-v-472f",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "FACOM V.472F",
	"brand": "FACOM",
	"model": "V.472F",
	"mpn": "V.472F",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La fiche établit les dimensions ou caractéristiques mécaniques du modèle. Aucun débit d’air n’est déduit du couple, de la vitesse ni de la puissance.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-facom-v-472f.webp",
		"alt": "Repères techniques : FACOM V.472F",
		"sourceUrl": "https://www.facom.com/product/v472f/125mm-angle-grinder?tid=610786",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "facom-v-472f",
		"label": "Référence V.472F",
		"distinguishingAttributes": {
			"reference": "V.472F",
			"Champ fabricant : Power Source": "Pneumatic",
			"Champ fabricant : Product Height [mm]": "85"
		}
	},
	"editorial": {
		"overview": "FACOM V.472F. La fiche établit les dimensions ou caractéristiques mécaniques du modèle. Aucun débit d’air n’est déduit du couple, de la vitesse ni de la puissance. Champ fabricant : Power Source : Pneumatic. Champ fabricant : Product Height [mm] : 85.",
		"verifiedFacts": [
			"Champ fabricant : Power Source : Pneumatic.",
			"Champ fabricant : Product Height [mm] : 85.",
			"Champ fabricant : Product Length [mm] : 220.",
			"Champ fabricant : Product Weight [Kg] : 2.",
			"Champ fabricant : Product Width [mm] : 205."
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
				"october2b-tools-oct2b-facom-v472f-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Height [mm]",
			"value": "85",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-v472f-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Length [mm]",
			"value": "220",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-v472f-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Weight [Kg]",
			"value": "2",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-v472f-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Width [mm]",
			"value": "205",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-v472f-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La fiche ne rattache pas un débit à une pression de mesure.",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-v472f-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-facom-v472f-html-p1",
			"sourceUrl": "https://www.facom.com/product/v472f/125mm-angle-grinder?tid=610786",
			"sourceLabel": "FACOM, fiche constructeur V.472F",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 0681ec49e90696600b9e98f25beff3d68afdd26775e89863a78ca76d0c910807. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-facom-v472f-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-facom-v472f-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-facom-v472f-html-p1"
		]
	},
	"notes": [
		"La fiche établit les dimensions ou caractéristiques mécaniques du modèle. Aucun débit d’air n’est déduit du couple, de la vitesse ni de la puissance."
	]
};

export default product;
