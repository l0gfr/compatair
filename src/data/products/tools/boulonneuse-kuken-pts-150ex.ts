import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-kuken-pts-150ex",
	"slug": "boulonneuse-kuken-pts-150ex",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "KUKEN PTS-150EX",
	"brand": "KUKEN",
	"model": "PTS-150EX",
	"mpn": "PTS-150EX",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation est publiée en m³/min « Normal » sans régime de charge explicite ni état de référence détaillé. Elle reste documentaire et la compatibilité demeure indéterminée.",
	"confidence": "B",
	"image": {
		"src": "/images/products/boulonneuse-kuken-pts-150ex-technical-20261115-followup.svg",
		"alt": "Repères techniques : KUKEN PTS-150EX",
		"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"variant": {
		"familyId": "kuken-pts-150ex",
		"label": "Référence PTS-150EX",
		"distinguishingAttributes": {
			"reference": "PTS-150EX",
			"Masse publiée": "2.5 kg (5.5 lb)",
			"Longueur publiée": "277.0 mm"
		}
	},
	"editorial": {
		"overview": "KUKEN PTS-150EX : outil à arrêt automatique, carré 1/2 pouce, plage 50–150 Nm par pas de 1 Nm. Son corps de 277 mm pèse 2,5 kg ; la version L s’allonge à 317 mm et 2,7 kg pour la même plage. La PTS-50EX couvre 20–50 Nm avec un réglage par pas de 0,1 Nm.",
		"verifiedFacts": [
			"Carré : 1/2 pouce.",
			"Plage de couple : 50–150 Nm, pas de 1 Nm.",
			"Vitesse à vide : 120 tr/min.",
			"Longueur, sans douille ni reprise de réaction : 277 mm.",
			"Masse, sans douille ni reprise de réaction : 2,5 kg.",
			"Consommation documentaire : 0,23 m³/min Normal ; 8,1 cfm.",
			"Condition générale de performance : 0,62 MPa selon le pied de tableau."
		],
		"limitations": [
			"La consommation est publiée en m³/min « Normal » sans régime de charge explicite ni état de référence détaillé. Elle reste documentaire et la compatibilité demeure indéterminée.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer.",
			"Douille et dispositif de reprise de réaction exclus des mesures de longueur et de masse."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "1/2 pouce",
			"evidenceIds": [
				"review:2026-11-12-technical:boulonneuse-kuken-pts-150ex:0"
			]
		},
		{
			"label": "Plage de couple",
			"value": "50–150 Nm, pas de 1 Nm",
			"evidenceIds": [
				"review:2026-11-12-technical:boulonneuse-kuken-pts-150ex:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "120 tr/min",
			"evidenceIds": [
				"review:2026-11-12-technical:boulonneuse-kuken-pts-150ex:0"
			]
		},
		{
			"label": "Longueur, sans douille ni reprise de réaction",
			"value": "277 mm",
			"evidenceIds": [
				"review:2026-11-12-technical:boulonneuse-kuken-pts-150ex:0"
			]
		},
		{
			"label": "Masse, sans douille ni reprise de réaction",
			"value": "2,5 kg",
			"evidenceIds": [
				"review:2026-11-12-technical:boulonneuse-kuken-pts-150ex:0"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "0,23 m³/min Normal ; 8,1 cfm",
			"evidenceIds": [
				"review:2026-11-12-technical:boulonneuse-kuken-pts-150ex:0"
			]
		},
		{
			"label": "Condition générale de performance",
			"value": "0,62 MPa selon le pied de tableau",
			"evidenceIds": [
				"review:2026-11-12-technical:boulonneuse-kuken-pts-150ex:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-kuken-best-selection-pdf-p5",
			"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf#page=5",
			"sourceLabel": "KUKEN, Best Selection, catalogue constructeur, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 0da76488e568242877887f713ecd81203eaa9f2322c20eb65648d25bb7e71cc7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-12-technical:boulonneuse-kuken-pts-150ex:0",
			"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf",
			"sourceLabel": "KUKEN, document fabricant, pages PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "KUKEN PTS-150EX : outil à arrêt automatique, carré 1/2 pouce, plage 50–150 Nm par pas de 1 Nm. Son corps de 277 mm pèse 2,5 kg ; la version L s’allonge à 317 mm et 2,7 kg pour la même plage. La PTS-50EX couvre 20–50 Nm avec un réglage par pas de 0,1 Nm. GET complet : SHA-256 0da76488e568242877887f713ecd81203eaa9f2322c20eb65648d25bb7e71cc7. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-12-technical:boulonneuse-kuken-pts-150ex:0"
		],
		"demandExplanation": [
			"review:2026-11-12-technical:boulonneuse-kuken-pts-150ex:0"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:boulonneuse-kuken-pts-150ex:0"
		]
	},
	"notes": [
		"La consommation est publiée en m³/min « Normal » sans régime de charge explicite ni état de référence détaillé. Elle reste documentaire et la compatibilité demeure indéterminée."
	]
};

export default product;
