import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-bande-facom-v-402f",
	"slug": "ponceuse-bande-facom-v-402f",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "FACOM V.402F",
	"brand": "FACOM",
	"model": "V.402F",
	"mpn": "V.402F",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La fiche établit les dimensions ou caractéristiques mécaniques du modèle. Aucun débit d’air n’est déduit du couple, de la vitesse ni de la puissance.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-bande-facom-v-402f.webp",
		"alt": "Repères techniques : FACOM V.402F",
		"sourceUrl": "https://www.facom.com/product/v402f/10-x-330-mm-belt-sander?tid=610786",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "facom-v-402f",
		"label": "Référence V.402F",
		"distinguishingAttributes": {
			"reference": "V.402F",
			"Champ fabricant : Power Source": "Pneumatic",
			"Champ fabricant : Product Height [mm]": "83"
		}
	},
	"editorial": {
		"overview": "FACOM V.402F. La fiche établit les dimensions ou caractéristiques mécaniques du modèle. Aucun débit d’air n’est déduit du couple, de la vitesse ni de la puissance. Champ fabricant : Power Source : Pneumatic. Champ fabricant : Product Height [mm] : 83.",
		"verifiedFacts": [
			"Champ fabricant : Power Source : Pneumatic.",
			"Champ fabricant : Product Height [mm] : 83.",
			"Champ fabricant : Product Length [mm] : 283.",
			"Champ fabricant : Product Weight [Kg] : 0.8.",
			"Champ fabricant : Product Width [mm] : 10."
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
				"october2b-tools-oct2b-facom-v402f-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Height [mm]",
			"value": "83",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-v402f-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Length [mm]",
			"value": "283",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-v402f-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Weight [Kg]",
			"value": "0.8",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-v402f-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Product Width [mm]",
			"value": "10",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-v402f-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La fiche ne rattache pas un débit à une pression de mesure.",
			"evidenceIds": [
				"october2b-tools-oct2b-facom-v402f-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-facom-v402f-html-p1",
			"sourceUrl": "https://www.facom.com/product/v402f/10-x-330-mm-belt-sander?tid=610786",
			"sourceLabel": "FACOM, fiche constructeur V.402F",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : e15817349f422279a381fbca7d9b111141a5a8f02a377aa69f8240774ac745e0. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-facom-v402f-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-facom-v402f-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-facom-v402f-html-p1"
		]
	},
	"notes": [
		"La fiche établit les dimensions ou caractéristiques mécaniques du modèle. Aucun débit d’air n’est déduit du couple, de la vitesse ni de la puissance."
	]
};

export default product;
