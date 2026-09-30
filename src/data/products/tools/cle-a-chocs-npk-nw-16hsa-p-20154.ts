const product = {
	"id": "cle-a-chocs-npk-nw-16hsa-p-20154",
	"slug": "cle-a-chocs-npk-nw-16hsa-p-20154",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "NPK NW-16HSA(P) (réf. 20154)",
	"brand": "NPK",
	"model": "NW-16HSA(P)",
	"mpn": "20154",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 450,
		"typical": 450,
		"max": 450
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-npk-nw-16hsa-p-20154.webp",
		"alt": "Repères techniques : NPK NW-16HSA(P) (réf. 20154)",
		"sourceUrl": "https://www.npk-en.com/app/download/10804376570/NPK_air_tool_catologue_apr2026.pdf?t=1777353985",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "npk-nw-16hsa-p",
		"label": "Code constructeur 20154",
		"distinguishingAttributes": {
			"codeCatalogue": "20154",
			"reference": "20154"
		}
	},
	"editorial": {
		"overview": "NPK NW-16HSA(P), code 20154. Le tableau publie une consommation moyenne de 0,45 m³/min, soit 450 L/min. Pression de référence retenue : 6 bar.",
		"verifiedFacts": [
			"Référence complète imprimée : 20154, page PDF 5.",
			"Consommation moyenne publiée : 450 L/min après conversion de l’unité originale.",
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
			"value": "20154",
			"evidenceIds": [
				"documented-20260930-npk-2026"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.45 m³/min ; 15.9 ft³/min",
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
