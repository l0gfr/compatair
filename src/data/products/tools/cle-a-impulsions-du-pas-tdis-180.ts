const product = {
	"id": "cle-a-impulsions-du-pas-tdis-180",
	"slug": "cle-a-impulsions-du-pas-tdis-180",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Du-Pas TDIS-180",
	"brand": "Du-Pas",
	"model": "TDIS-180",
	"mpn": "TDIS-180",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le couple et les vitesses libres sont publiés à leurs conditions originales. Ils ne donnent pas la demande d’air maximale en charge à une pression de consommation explicitement définie.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-du-pas-tdis-180.webp",
		"alt": "Repères techniques : Du-Pas TDIS-180",
		"sourceUrl": "https://ss-client-website.s3-ap-northeast-1.amazonaws.com/tranmax/2023_01_09_113341_220907-Industrial-Assembly-Tools-Du-Pas.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "du-pas-tdis-180",
		"label": "Référence TDIS-180",
		"distinguishingAttributes": {
			"reference": "TDIS-180",
			"Plage de couple publiée à 5–6 kg/cm²": "180–255 N·m (132–188 ft·lb)",
			"Vitesses libres publiées à 5 puis 6 kg/cm²": "2500 / 2700 rpm"
		}
	},
	"editorial": {
		"overview": "Du-Pas TDIS-180. Le couple et les vitesses libres sont publiés à leurs conditions originales. Ils ne donnent pas la demande d’air maximale en charge à une pression de consommation explicitement définie. Plage de couple publiée à 5–6 kg/cm² : 180–255 N·m (132–188 ft·lb). Vitesses libres publiées à 5 puis 6 kg/cm² : 2500 / 2700 rpm.",
		"verifiedFacts": [
			"Plage de couple publiée à 5–6 kg/cm² : 180–255 N·m (132–188 ft·lb).",
			"Vitesses libres publiées à 5 puis 6 kg/cm² : 2500 / 2700 rpm."
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
			"value": "180–255 N·m (132–188 ft·lb)",
			"evidenceIds": [
				"october2b-tools-oct2b-tranmax-dupas-pdf-p6"
			]
		},
		{
			"label": "Vitesses libres publiées à 5 puis 6 kg/cm²",
			"value": "2500 / 2700 rpm",
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
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-tranmax-dupas-pdf-p6"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-tranmax-dupas-pdf-p6"
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
