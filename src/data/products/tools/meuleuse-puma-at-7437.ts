import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-puma-at-7437",
	"slug": "meuleuse-puma-at-7437",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "PUMA AT-7437",
	"brand": "PUMA",
	"model": "AT-7437",
	"mpn": "AT-7437",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-puma-at-7437.webp",
		"alt": "Repères techniques : PUMA AT-7437",
		"sourceUrl": "https://www.pumaair.com/product-Air-Die-Grinder-AirDieGrinder-.html",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "puma-at-7437",
		"label": "Référence AT-7437",
		"distinguishingAttributes": {
			"reference": "AT-7437"
		}
	},
	"editorial": {
		"overview": "PUMA AT-7437. La table fabricant présente des cellules décalées et des unités incompatibles. Les valeurs sont conservées comme transcription brute ; dimensions, vitesse, pince et masse restent à confirmer.",
		"verifiedFacts": [
			"Référence fabricant AT-7437 identifiée ; tableau technique incohérent.",
			"La table AT-7437 imprime Free SpeedRPM = 1/4”, Collet Size/inch = 25000 et Net Weight/lb = 283 ; ces cellules restent non interprétées."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée.",
			"Les cellules ne sont pas réordonnées par supposition. Confirmation de la fiche fabricant nécessaire avant sélection de la pince ou dimensionnement."
		]
	},
	"specifications": [
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure du débit n’est pas explicitée dans cette fiche.",
			"evidenceIds": [
				"october2-tools-puma-cat-41-pdp-263-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "10 L/min",
			"evidenceIds": [
				"october2-tools-puma-cat-41-pdp-263-p1"
			]
		},
		{
			"label": "Cellules fabricant non interprétables",
			"value": "Free SpeedRPM = 1/4” ; Collet Size / inch = 25000 ; Collet Size / mm = 0.4 ; Overall Length / inch = 300 ; Overall Length / mm = 6.3 ; AirInlet (PT) = 160 ; Air Hose (ID) = 1/4” ; Net Weight / lb = 283 ; Net Weight / kg = 0.9",
			"evidenceIds": [
				"review:2026-11-06-followup:meuleuse-puma-at-7437:1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-puma-cat-41-pdp-263-p1",
			"sourceUrl": "https://www.pumaair.com/product-Air-Die-Grinder-AirDieGrinder-.html",
			"sourceLabel": "PUMA Industrial, tableau fabricant de la famille product-Air-Die-Grinder-AirDieGrinder-.html",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 08b9f9c7d1898261da064b9521bc097278817d20a1ebb50c4f75c23188e0a7c7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-06-followup:meuleuse-puma-at-7437:1",
			"sourceUrl": "https://www.pumaair.com/product-Air-Die-Grinder-AirDieGrinder-.html",
			"sourceLabel": "PUMA, revue documentaire du 6 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "La table fabricantAT7437 elle-même est décalée :FreeSpeedRPM=1/4pouce,Colletinch=25000,AirInlet=160,masse283lb. Ne pas conserver ces cellules comme caractéristiques interprétées ni réordonner àl’intuition. Remplacer les affirmations absurdes par la lignebrute et la demande de confirmation, moteur nonconclusif. SHA-256 du document complet : 08b9f9c7d1898261da064b9521bc097278817d20a1ebb50c4f75c23188e0a7c7."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-puma-cat-41-pdp-263-p1"
		],
		"workingPressureBar": [
			"october2-tools-puma-cat-41-pdp-263-p1"
		],
		"demandExplanation": [
			"october2-tools-puma-cat-41-pdp-263-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
