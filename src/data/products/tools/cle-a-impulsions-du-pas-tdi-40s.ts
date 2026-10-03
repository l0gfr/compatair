const product = {
	"id": "cle-a-impulsions-du-pas-tdi-40s",
	"slug": "cle-a-impulsions-du-pas-tdi-40s",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Du-Pas TDI-40S",
	"brand": "Du-Pas",
	"model": "TDI-40S",
	"mpn": "TDI-40S",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le couple et les vitesses libres sont publiés à leurs conditions originales. Ils ne donnent pas la demande d’air maximale en charge à une pression de consommation explicitement définie.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-du-pas-tdi-40s.webp",
		"alt": "Repères techniques : Du-Pas TDI-40S",
		"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113341_220907-Industrial-Assembly-Tools-Du-Pas.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "du-pas-tdi-40s",
		"label": "Référence TDI-40S",
		"distinguishingAttributes": {
			"reference": "TDI-40S",
			"Plage de couple publiée à 5–6 kg/cm²": "10–19 N·m (7.4–14 ft·lb)",
			"Vitesses libres publiées à 5 puis 6 kg/cm²": "3900 / 4200 rpm"
		}
	},
	"editorial": {
		"overview": "Du-Pas TDI-40S. Le couple et les vitesses libres sont publiés à leurs conditions originales. Ils ne donnent pas la demande d’air maximale en charge à une pression de consommation explicitement définie. Plage de couple publiée à 5–6 kg/cm² : 10–19 N·m (7.4–14 ft·lb). Vitesses libres publiées à 5 puis 6 kg/cm² : 3900 / 4200 rpm.",
		"verifiedFacts": [
			"Plage de couple publiée à 5–6 kg/cm² : 10–19 N·m (7.4–14 ft·lb).",
			"Vitesses libres publiées à 5 puis 6 kg/cm² : 3900 / 4200 rpm."
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
			"value": "10–19 N·m (7.4–14 ft·lb)",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-dupas-pdf-p9"
			]
		},
		{
			"label": "Vitesses libres publiées à 5 puis 6 kg/cm²",
			"value": "3900 / 4200 rpm",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-dupas-pdf-p9"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Les pressions du tableau concernent les mesures de couple et de vitesse ; aucune transposition à la consommation.",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-dupas-pdf-p9"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-tranmax-dupas-pdf-p9",
			"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113341_220907-Industrial-Assembly-Tools-Du-Pas.pdf#page=9",
			"sourceLabel": "Du-Pas, catalogue pneumatique officiel publié par Tranmax, page PDF 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 3e3749757c14c7ee18541f6ebe65c09228de1c585b55366dc23a97860a65a840. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-tranmax-dupas-pdf-p9"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-tranmax-dupas-pdf-p9"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-tranmax-dupas-pdf-p9"
		]
	},
	"notes": [
		"Le couple et les vitesses libres sont publiés à leurs conditions originales. Ils ne donnent pas la demande d’air maximale en charge à une pression de consommation explicitement définie."
	]
};

export default product;
