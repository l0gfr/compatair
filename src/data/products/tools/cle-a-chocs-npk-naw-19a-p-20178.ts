const product = {
	"id": "cle-a-chocs-npk-naw-19a-p-20178",
	"slug": "cle-a-chocs-npk-naw-19a-p-20178",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "NPK NAW-19A(P) (réf. 20178)",
	"brand": "NPK",
	"model": "NAW-19A(P)",
	"mpn": "20178",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 500,
		"typical": 500,
		"max": 500
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-npk-naw-19a-p-20178.webp",
		"alt": "Repères techniques : NPK NAW-19A(P) (réf. 20178)",
		"sourceUrl": "https://www.npk-en.com/app/download/10804376570/NPK_air_tool_catologue_apr2026.pdf?t=1777353985",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "npk-naw-19a-p",
		"label": "Code constructeur 20178",
		"distinguishingAttributes": {
			"codeCatalogue": "20178",
			"reference": "20178"
		}
	},
	"editorial": {
		"overview": "NPK NAW-19A(P), code 20178. Le tableau publie une consommation moyenne de 0,5 m³/min, soit 500 L/min. Pression de référence retenue : 6 bar.",
		"verifiedFacts": [
			"Référence complète imprimée : 20178, page PDF 5.",
			"Consommation moyenne publiée : 500 L/min après conversion de l’unité originale.",
			"Use appropriate air pressure (0.6 MPa at the tool), impact-wrench instructions, PDF page 4."
		],
		"limitations": [
			"Une moyenne ne permet pas de conclure sur le débit continu ou la pointe : le moteur conserve insufficient_data tant que le régime de consommation n’est pas documenté.",
			"La disponibilité actuelle, les accessoires inclus et les conditions de sécurité doivent être confirmés sur la notice de cette référence."
		]
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 5",
			"evidenceIds": [
				"documented-20260930-npk-2026"
			]
		},
		{
			"label": "Code NPK",
			"value": "20178",
			"evidenceIds": [
				"documented-20260930-npk-2026"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.5 m³/min ; 17.7 ft³/min",
			"evidenceIds": [
				"documented-20260930-npk-2026"
			]
		},
		{
			"label": "Condition de pression au poste",
			"value": "0,6 MPa à l’outil, consigne pour les clés à chocs",
			"evidenceIds": [
				"documented-20260930-npk-2026"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-20260930-npk-2026",
			"sourceUrl": "https://www.npk-en.com/app/download/10804376570/NPK_air_tool_catologue_apr2026.pdf?t=1777353985",
			"sourceLabel": "NPK, catalogue avril 2026 : npk-2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "Document constructeur consulté le 2026-09-30. SHA-256 bd5e6718ea1d625e053449706fd6e72b801cd772ef6c74826614889dfb8ca90c. La transcription et les pages PDF sont versionnées dans le lot documentaire. Le lieu d’hébergement ne constitue pas une validation indépendante."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-20260930-npk-2026"
		],
		"airflowLpm": [
			"documented-20260930-npk-2026"
		],
		"workingPressureBar": [
			"documented-20260930-npk-2026"
		],
		"airflowBasis": [
			"documented-20260930-npk-2026"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.6."
	]
};

export default product;
