import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rri-t6250-5cv",
	"slug": "red-rooster-rri-t6250-5cv",
	"brand": "Red Rooster",
	"model": "RRI-T6250-5CV",
	"mpn": "RRI-T6250-5CV",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Red Rooster RRI-T6250-5CV",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rri-t6250-5cv-technical-20261115-followup.svg",
		"alt": "Repères techniques Red Rooster RRI-T6250-5CV, référence RRI-T6250-5CV",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"editorial": {
		"overview": "Red Rooster RRI-T6250-5CV : plateau 150 mm, course 5 mm et raccordement à une aspiration centrale. La T6250-5NV utilise le même plateau sans aspiration ; la 5125-2CV réduit le plateau à 125 mm et la course à 2,5 mm. La table conserve 12 000 tr/min et 4,9 L/s pour ces trois configurations.",
		"verifiedFacts": [
			"Plateau : 150 mm.",
			"Course : 5 mm.",
			"Aspiration : Centrale, suffixe CV.",
			"Vitesse à vide : 12 000 tr/min.",
			"Masse : 1 kg.",
			"Consommation documentaire : 4,9 L/s, régime non précisé."
		],
		"limitations": [
			"Le régime et la pression de mesure de la consommation ne sont pas établis par cette table. Les consignes de service restent séparées ; la compatibilité demeure indéterminée.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Plateau",
			"value": "150 mm",
			"evidenceIds": [
				"review:2026-11-12-technical:red-rooster-rri-t6250-5cv:0"
			]
		},
		{
			"label": "Course",
			"value": "5 mm",
			"evidenceIds": [
				"review:2026-11-12-technical:red-rooster-rri-t6250-5cv:0"
			]
		},
		{
			"label": "Aspiration",
			"value": "Centrale, suffixe CV",
			"evidenceIds": [
				"review:2026-11-12-technical:red-rooster-rri-t6250-5cv:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"review:2026-11-12-technical:red-rooster-rri-t6250-5cv:0"
			]
		},
		{
			"label": "Masse",
			"value": "1 kg",
			"evidenceIds": [
				"review:2026-11-12-technical:red-rooster-rri-t6250-5cv:0"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "4,9 L/s, régime non précisé",
			"evidenceIds": [
				"review:2026-11-12-technical:red-rooster-rri-t6250-5cv:0"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rri-t6250-5cv-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=47",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 47, réf. RRI-T6250-5CV",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 4.9 L/s, convertis en 294 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rri-t6250-5cv-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review:2026-11-12-technical:red-rooster-rri-t6250-5cv:0",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
			"sourceLabel": "Red Rooster, document fabricant, pages PDF 47",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "Red Rooster RRI-T6250-5CV : plateau 150 mm, course 5 mm et raccordement à une aspiration centrale. La T6250-5NV utilise le même plateau sans aspiration ; la 5125-2CV réduit le plateau à 125 mm et la course à 2,5 mm. La table conserve 12 000 tr/min et 4,9 L/s pour ces trois configurations. GET complet : SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-12-technical:red-rooster-rri-t6250-5cv:0"
		],
		"demandExplanation": [
			"review:2026-11-12-technical:red-rooster-rri-t6250-5cv:0"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:red-rooster-rri-t6250-5cv:0"
		]
	},
	"notes": [
		"Le régime et la pression de mesure de la consommation ne sont pas établis par cette table. Les consignes de service restent séparées ; la compatibilité demeure indéterminée."
	],
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\"",
	"demandExplanation": "Le régime et la pression de mesure de la consommation ne sont pas établis par cette table. Les consignes de service restent séparées ; la compatibilité demeure indéterminée."
};

export default product;
