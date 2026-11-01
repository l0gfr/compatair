import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-npk-naw-1200-s-20026",
	"slug": "cle-a-chocs-npk-naw-1200-s-20026",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "NPK NAW-1200(S) (réf. 20026)",
	"brand": "NPK",
	"model": "NAW-1200(S)",
	"mpn": "20026",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 100,
		"typical": 100,
		"max": 100
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-npk-naw-1200-s-20026.webp",
		"alt": "Repères techniques : NPK NAW-1200(S) (réf. 20026)",
		"sourceUrl": "https://www.npk-en.com/app/download/10804376570/NPK_air_tool_catologue_apr2026.pdf?t=1777353985",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "npk-naw-1200-s",
		"label": "Code constructeur 20026",
		"distinguishingAttributes": {
			"codeCatalogue": "20026",
			"reference": "20026"
		}
	},
	"editorial": {
		"overview": "NPK NAW-1200(S). NAW-1600HA(S) publie capacité 14 mm,5000 tr/min,282 mm et 3,6 kg. NAW-1200(S) est plus long et plus léger dans cette table ; aucun couple absent n’est déduit de la capacité de boulon. Carré de sortie : 12,7 mm (1/2\"). Capacité de boulon publiée : 12 mm. Vitesse à vide : 6 500 tr/min.",
		"verifiedFacts": [
			"Référence complète imprimée : 20026, page PDF 6.",
			"Consommation moyenne publiée : 100 L/min après conversion de l’unité originale.",
			"Use appropriate air pressure (0.6 MPa at the tool), impact-wrench instructions, PDF page 4.",
			"Carré de sortie : 12,7 mm (1/2\").",
			"Capacité de boulon publiée : 12 mm.",
			"Vitesse à vide : 6 500 tr/min.",
			"Longueur totale : 364 mm.",
			"Masse : 3,0 kg."
		],
		"limitations": [
			"Une moyenne ne permet pas de conclure sur le débit continu ou la pointe : le moteur conserve insufficient_data tant que le régime de consommation n’est pas documenté.",
			"La disponibilité actuelle, les accessoires inclus et les conditions de sécurité doivent être confirmés sur la notice de cette référence."
		]
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 6",
			"evidenceIds": [
				"documented-20260930-npk-2026"
			]
		},
		{
			"label": "Code NPK",
			"value": "20026",
			"evidenceIds": [
				"documented-20260930-npk-2026"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.1 m³/min ; 3.5 ft³/min",
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
		},
		{
			"label": "Carré de sortie",
			"value": "12,7 mm (1/2\")",
			"evidenceIds": [
				"cle-a-chocs-npk-naw-1200-s-20026-reserved-20261101-1"
			]
		},
		{
			"label": "Capacité de boulon publiée",
			"value": "12 mm",
			"evidenceIds": [
				"cle-a-chocs-npk-naw-1200-s-20026-reserved-20261101-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "6 500 tr/min",
			"evidenceIds": [
				"cle-a-chocs-npk-naw-1200-s-20026-reserved-20261101-1"
			]
		},
		{
			"label": "Longueur totale",
			"value": "364 mm",
			"evidenceIds": [
				"cle-a-chocs-npk-naw-1200-s-20026-reserved-20261101-1"
			]
		},
		{
			"label": "Masse",
			"value": "3,0 kg",
			"evidenceIds": [
				"cle-a-chocs-npk-naw-1200-s-20026-reserved-20261101-1"
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
		},
		{
			"id": "cle-a-chocs-npk-naw-1200-s-20026-reserved-20261101-1",
			"sourceUrl": "https://www.npk-en.com/app/download/10804376570/NPK_air_tool_catologue_apr2026.pdf?t=1777353985",
			"sourceLabel": "NPK : revue factuelle du 1 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 bd5e6718ea1d625e053449706fd6e72b801cd772ef6c74826614889dfb8ca90c. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
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
		],
		"editorial": [
			"cle-a-chocs-npk-naw-1200-s-20026-reserved-20261101-1"
		],
		"specifications": [
			"cle-a-chocs-npk-naw-1200-s-20026-reserved-20261101-1"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.6."
	]
};

export default product;
