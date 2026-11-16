import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-suhner-llc-23-top-1-4-usa-100046898",
	"slug": "meuleuse-suhner-llc-23-top-1-4-usa-100046898",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Suhner LLC 23-TOP (1/4\" USA) (réf. 100046898)",
	"brand": "Suhner",
	"model": "LLC 23-TOP (1/4\" USA)",
	"mpn": "100046898",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-suhner-llc-23-top-1-4-usa-100046898-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Suhner LLC 23-TOP (1/4\" USA) (réf. 100046898)",
		"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "suhner-llc-23-top-1-4-usa",
		"label": "Référence 100046898",
		"distinguishingAttributes": {
			"reference": "100046898",
			"Vitesse à vide": "24 000 tr/min",
			"Puissance publiée": "330 W"
		}
	},
	"editorial": {
		"overview": "La LLC23-TOP USA100046898 est la version à broche allongée et pince1/4 pouce à24000 tr/min. La LSC23 est droite courte ; la LLC4-TOP limite sa vitesse à4000 tr/min pour les non-tissés et disques de polissage. La consommation0,790 m³/min est à vide, sans débit en charge déduit.",
		"verifiedFacts": [
			"Vitesse à vide : 24 000 tr/min.",
			"Puissance publiée : 330 W.",
			"Configuration : Broche allongée à palier élastique ; pince standard1/4 pouce.",
			"Commande et échappement : Levier ; échappement arrière avec silencieux intégré.",
			"Livraison indiquée : Pince, clés SW11/SW14, tuyaux d’alimentation et d’échappement."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "24 000 tr/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p19"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "330 W",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p19"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression numérique de mesure dans le catalogue 10/2024 EN.",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p19"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "0.790 m3/min",
			"evidenceIds": [
				"october2-tools-suhner-pneumatic-p19"
			]
		},
		{
			"label": "Configuration",
			"value": "Broche allongée à palier élastique ; pince standard1/4 pouce",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-suhner-llc-23-top-1-4-usa-100046898:0"
			]
		},
		{
			"label": "Commande et échappement",
			"value": "Levier ; échappement arrière avec silencieux intégré",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-suhner-llc-23-top-1-4-usa-100046898:0"
			]
		},
		{
			"label": "Livraison indiquée",
			"value": "Pince, clés SW11/SW14, tuyaux d’alimentation et d’échappement",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-suhner-llc-23-top-1-4-usa-100046898:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-suhner-pneumatic-p19",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf#page=19",
			"sourceLabel": "Pneumatic power tools, catalogue fabricant EN 10/2024, page PDF 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:meuleuse-suhner-llc-23-top-1-4-usa-100046898:0",
			"sourceUrl": "https://www.suhner-abrasive.com/fileadmin/user_upload/Abrasive/04_Einzelkatalog_Druckluftwerkzeuge_EN.pdf",
			"sourceLabel": "Suhner, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La LLC23-TOP USA100046898 est la version à broche allongée et pince1/4 pouce à24000 tr/min. La LSC23 est droite courte ; la LLC4-TOP limite sa vitesse à4000 tr/min pour les non-tissés et disques de polissage. La consommation0,790 m³/min est à vide, sans débit en charge déduit. GET complet SHA-256 355401bdbabe6cb5a7bfa85064961b89eabb84f7ebad27a03b193f57bc12f7dd. Pages PDF lues : 14, 18, 19."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-suhner-pneumatic-p19"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:meuleuse-suhner-llc-23-top-1-4-usa-100046898:0"
		],
		"demandExplanation": [
			"october2-tools-suhner-pneumatic-p19"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
