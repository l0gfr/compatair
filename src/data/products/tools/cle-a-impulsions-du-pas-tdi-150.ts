import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-impulsions-du-pas-tdi-150",
	"slug": "cle-a-impulsions-du-pas-tdi-150",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Du-Pas TDI-150",
	"brand": "Du-Pas",
	"model": "TDI-150",
	"mpn": "TDI-150",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le couple et les vitesses libres sont publiés à leurs conditions originales. Ils ne donnent pas la demande d’air maximale en charge à une pression de consommation explicitement définie.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-du-pas-tdi-150-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Du-Pas TDI-150",
		"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113341_220907-Industrial-Assembly-Tools-Du-Pas.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "du-pas-tdi-150",
		"label": "Référence TDI-150",
		"distinguishingAttributes": {
			"reference": "TDI-150",
			"Plage de couple publiée à 5–6 kg/cm²": "145–210 N·m (106.8–154.6 ft·lb)",
			"Vitesses libres publiées à 5 puis 6 kg/cm²": "3500 / 3700 rpm"
		}
	},
	"editorial": {
		"overview": "Du-Pas TDI-150 : clé à impulsions pistolet sans coupure automatique, carré 3/4 pouce, 239 mm et 3,05 kg. La TDIS-150 possède la coupure et pèse 3,10 kg ; la TDI-130 utilise un carré 1/2. Les 145–210 Nm et vitesses 3 500/3 700 tr/min sont rattachés aux pressions indiquées, pas la consommation moyenne.",
		"verifiedFacts": [
			"Plage de couple publiée à 5–6 kg/cm² : 145–210 N·m (106.8–154.6 ft·lb).",
			"Vitesses libres publiées à 5 puis 6 kg/cm² : 3500 / 3700 rpm.",
			"Capacité / carré : M16 / 3/4 pouce.",
			"Couple à 5–6 kg/cm² : 145–210 Nm.",
			"Vitesse à 5 puis 6 kg/cm² : 3 500 / 3 700 tr/min.",
			"Longueur / masse : 239 mm / 3,05 kg.",
			"Consommation moyenne : 0,73 m³/min / 25,6 ft³/min."
		],
		"limitations": [
			"Le couple et les vitesses libres sont publiés à leurs conditions originales. Ils ne donnent pas la demande d’air maximale en charge à une pression de consommation explicitement définie.",
			"Référence individuellement imprimée dans le tableau Du-Pas du fabricant Tranmax ; aucune combinaison de suffixes générée.",
			"La paire impériale/métrique de couple et les deux vitesses publiées servent à contrôler la transcription ; aucun débit n’en est déduit.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Plage de couple publiée à 5–6 kg/cm²",
			"value": "145–210 N·m (106.8–154.6 ft·lb)",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-dupas-pdf-p6"
			]
		},
		{
			"label": "Vitesses libres publiées à 5 puis 6 kg/cm²",
			"value": "3500 / 3700 rpm",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-dupas-pdf-p6"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Les pressions du tableau concernent les mesures de couple et de vitesse ; aucune transposition à la consommation.",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-dupas-pdf-p6"
			]
		},
		{
			"label": "Capacité / carré",
			"value": "M16 / 3/4 pouce",
			"evidenceIds": [
				"review:2026-11-16-reviews:cle-a-impulsions-du-pas-tdi-150:0"
			]
		},
		{
			"label": "Couple à 5–6 kg/cm²",
			"value": "145–210 Nm",
			"evidenceIds": [
				"review:2026-11-16-reviews:cle-a-impulsions-du-pas-tdi-150:0"
			]
		},
		{
			"label": "Vitesse à 5 puis 6 kg/cm²",
			"value": "3 500 / 3 700 tr/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:cle-a-impulsions-du-pas-tdi-150:0"
			]
		},
		{
			"label": "Longueur / masse",
			"value": "239 mm / 3,05 kg",
			"evidenceIds": [
				"review:2026-11-16-reviews:cle-a-impulsions-du-pas-tdi-150:0"
			]
		},
		{
			"label": "Consommation moyenne",
			"value": "0,73 m³/min / 25,6 ft³/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:cle-a-impulsions-du-pas-tdi-150:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-tranmax-dupas-pdf-p6",
			"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113341_220907-Industrial-Assembly-Tools-Du-Pas.pdf#page=6",
			"sourceLabel": "Du-Pas, catalogue pneumatique officiel publié par Tranmax, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 3e3749757c14c7ee18541f6ebe65c09228de1c585b55366dc23a97860a65a840. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:cle-a-impulsions-du-pas-tdi-150:0",
			"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113341_220907-Industrial-Assembly-Tools-Du-Pas.pdf",
			"sourceLabel": "Du-Pas, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Du-Pas TDI-150 : clé à impulsions pistolet sans coupure automatique, carré 3/4 pouce, 239 mm et 3,05 kg. La TDIS-150 possède la coupure et pèse 3,10 kg ; la TDI-130 utilise un carré 1/2. Les 145–210 Nm et vitesses 3 500/3 700 tr/min sont rattachés aux pressions indiquées, pas la consommation moyenne. GET complet SHA-256 3e3749757c14c7ee18541f6ebe65c09228de1c585b55366dc23a97860a65a840. Pages PDF lues : 6."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-tranmax-dupas-pdf-p6"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:cle-a-impulsions-du-pas-tdi-150:0"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-tranmax-dupas-pdf-p6"
		]
	},
	"notes": [
		"Le couple et les vitesses libres sont publiés à leurs conditions originales. Ils ne donnent pas la demande d’air maximale en charge à une pression de consommation explicitement définie."
	]
};

export default product;
