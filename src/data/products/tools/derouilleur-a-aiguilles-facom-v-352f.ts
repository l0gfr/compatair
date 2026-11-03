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
		"overview": "FACOM V.352F. Le V.352F est livré avec 27 aiguilles de 2 mm. Passer aux 12 aiguilles de 3 mm impose aussi le plateau V.352FSAV16B, pas seulement le jeu V.352FA1D3. La page publie 24 L/min moyens et une pression de service 6,2 bar ; l’ancienne formule de débit absent était trop générale, mais la moyenne ne permet toujours pas le calcul continu.",
		"verifiedFacts": [
			"Champ fabricant : Power Source : Pneumatic.",
			"Champ fabricant : Product Height [mm] : 75.",
			"Champ fabricant : Product Length [mm] : 360.",
			"Champ fabricant : Product Weight [Kg] : 1.7.",
			"Champ fabricant : Product Width [mm] : 36.",
			"Montage livré : 27 aiguilles de 2 mm avec plateau correspondant.",
			"Autre montage : 12 aiguilles de 3 mm, plateau spécifique.",
			"Cadence : 4 200 coups/min.",
			"Consommation moyenne publiée : 24 L/min ; 0,9 CFM."
		],
		"limitations": [
			"Le débit moyen 24 L/min et la pression de service 6,2 bar ne prouvent pas une consommation maximale en charge à pression de mesure appariée.",
			"Fiche constructeur, sans essai physique CompatAir."
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
		},
		{
			"label": "Montage livré",
			"value": "27 aiguilles de 2 mm avec plateau correspondant",
			"evidenceIds": [
				"derouilleur-a-aiguilles-facom-v-352f-reserved-20261103-1"
			]
		},
		{
			"label": "Autre montage",
			"value": "12 aiguilles de 3 mm, plateau spécifique",
			"evidenceIds": [
				"derouilleur-a-aiguilles-facom-v-352f-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "4 200 coups/min",
			"evidenceIds": [
				"derouilleur-a-aiguilles-facom-v-352f-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne publiée",
			"value": "24 L/min ; 0,9 CFM",
			"evidenceIds": [
				"derouilleur-a-aiguilles-facom-v-352f-reserved-20261103-1"
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
		},
		{
			"id": "derouilleur-a-aiguilles-facom-v-352f-reserved-20261103-1",
			"sourceUrl": "https://www.facom.com/product/v352f/pneumatic-needle-scaler?tid=610786",
			"sourceLabel": "FACOM : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 fea2b0c1f8075c66283a46b4a6e6f5cfbd7923c62547f7636eb9eeedfb1ecc9c. Le V.352F est livré avec 27 aiguilles de 2 mm. Passer aux 12 aiguilles de 3 mm impose aussi le plateau V.352FSAV16B, pas seulement le jeu V.352FA1D3. La page publie 24 L/min moyens et une pression de service 6,2 bar ; l’ancienne formule de débit absent était trop générale, mais la moyenne ne permet toujours pas le calcul continu."
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
		],
		"editorial": [
			"derouilleur-a-aiguilles-facom-v-352f-reserved-20261103-1"
		],
		"specifications": [
			"derouilleur-a-aiguilles-facom-v-352f-reserved-20261103-1"
		]
	},
	"notes": [
		"La fiche établit les dimensions ou caractéristiques mécaniques du modèle. Aucun débit d’air n’est déduit du couple, de la vitesse ni de la puissance."
	]
};

export default product;
