import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "graveur-sealey-sa96",
	"slug": "graveur-sealey-sa96",
	"categoryId": "graveur",
	"category": "graveur",
	"label": "Sealey SA96",
	"brand": "Sealey",
	"model": "SA96",
	"mpn": "SA96",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 4.137
	},
	"demandExplanation": "La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué.",
	"confidence": "B",
	"image": {
		"src": "/images/products/graveur-sealey-sa96.webp",
		"alt": "Repères techniques : Sealey SA96",
		"sourceUrl": "https://www.sealey.co.uk/air-engraver-sa96/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sealey-sa96",
		"label": "Référence SA96",
		"distinguishingAttributes": {
			"reference": "SA96",
			"Champ fabricant : Air Consumption": "4cfm",
			"Champ fabricant : Air Inlet Size": "1/4\"BSP"
		}
	},
	"editorial": {
		"overview": "Sealey SA96. Le SA96 est un stylet de gravure pour métaux et plastiques, pointe carbure SA96/03 et flexible fin de 1,5 m. Il pèse 0,2 kg et sa pression de service est 60 psi. La cadence de 3 000 coups/min et les 4 CFM ne documentent pas une consommation maximale appariée à une pression mesurée.",
		"verifiedFacts": [
			"Champ fabricant : Air Consumption : 4 cfm.",
			"Champ fabricant : Air Inlet Size : 1/4\"BSP.",
			"Champ fabricant : Free Speed : 3000spm.",
			"Champ fabricant : Noise Power/Pressure : 84/73 dB(A).",
			"Champ fabricant : Operating Pressure : 60 psi.",
			"Champ fabricant : Vibration/Uncertainty : 3.89/0.88m/s².",
			"Champ fabricant : Nett Weight : 0.2 kg.",
			"Pointe : Carbure de tungstène, rechange SA96/03.",
			"Matériaux annoncés : Métaux et plastiques.",
			"Flexible fourni : 1,5 m."
		],
		"limitations": [
			"La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué.",
			"Fiche produit constructeur, caractéristiques déclaratives ; aucun essai physique CompatAir.",
			"Les pressions recommandées ou limites d’alimentation restent distinctes des points de mesure de consommation.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Champ fabricant : Air Consumption",
			"value": "4 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa96-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet Size",
			"value": "1/4\"BSP",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa96-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Free Speed",
			"value": "3000spm",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa96-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Noise Power/Pressure",
			"value": "84/73 dB(A)",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa96-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Operating Pressure",
			"value": "60 psi",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa96-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Vibration/Uncertainty",
			"value": "3.89/0.88m/s²",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa96-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Nett Weight",
			"value": "0.2 kg",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa96-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 60 psi",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa96-html-p1"
			]
		},
		{
			"label": "Pointe",
			"value": "Carbure de tungstène, rechange SA96/03",
			"evidenceIds": [
				"graveur-sealey-sa96-reserved-20261103-1"
			]
		},
		{
			"label": "Matériaux annoncés",
			"value": "Métaux et plastiques",
			"evidenceIds": [
				"graveur-sealey-sa96-reserved-20261103-1"
			]
		},
		{
			"label": "Flexible fourni",
			"value": "1,5 m",
			"evidenceIds": [
				"graveur-sealey-sa96-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-sealey-sa96-html-p1",
			"sourceUrl": "https://www.sealey.co.uk/air-engraver-sa96/",
			"sourceLabel": "Sealey, fiche technique constructeur SA96",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 7a0cc797255ec037fd76254064a03542260d0f13f44357fca4259f15bd022f3b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "graveur-sealey-sa96-reserved-20261103-1",
			"sourceUrl": "https://www.sealey.co.uk/air-engraver-sa96/",
			"sourceLabel": "Sealey : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 2619e6d5aff68fb95c0eef681083e88c2108e299ebff2b7e2a8e86c847e34f8b. Le SA96 est un stylet de gravure pour métaux et plastiques, pointe carbure SA96/03 et flexible fin de 1,5 m. Il pèse 0,2 kg et sa pression de service est 60 psi. La cadence de 3 000 coups/min et les 4 CFM ne documentent pas une consommation maximale appariée à une pression mesurée."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-sealey-sa96-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-sealey-sa96-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-sealey-sa96-html-p1"
		],
		"editorial": [
			"graveur-sealey-sa96-reserved-20261103-1"
		],
		"specifications": [
			"graveur-sealey-sa96-reserved-20261103-1"
		]
	},
	"notes": [
		"La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué."
	]
};

export default product;
