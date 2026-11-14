import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "marteau-a-river-zipp-zrh-131s",
	"slug": "marteau-a-river-zipp-zrh-131s",
	"categoryId": "marteau-a-river",
	"category": "marteau-a-river",
	"label": "ZIPP ZRH-131S",
	"brand": "ZIPP",
	"model": "ZRH-131S",
	"mpn": "ZRH-131S",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 180,
		"typical": 180,
		"max": 180
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/marteau-a-river-zipp-zrh-131s-technical-20261112-followup.svg",
		"alt": "Repères techniques : ZIPP ZRH-131S",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 12 novembre 2026"
	},
	"variant": {
		"familyId": "zipp-zrh-131s",
		"label": "Référence ZRH-131S",
		"distinguishingAttributes": {
			"reference": "ZRH-131S",
			"Cadence": "2850 coups/min",
			"Masse": "0.86 kg"
		}
	},
	"editorial": {
		"overview": "ZRH131S : marteau à river droit à queue 0,401 pouce, 2 850 coups/min, 160 mm et 0,86 kg. Les capacités publiées sont 3,2 mm dans l’acier et 4 mm dans l’aluminium, énergie déclarée 2,61 J. Le 131P est un pistolet de 115 mm et 1 kg ; le 195P utilise une queue 0,498 pouce. La moyenne de 180 L/min reste documentaire.",
		"verifiedFacts": [
			"Cadence : 2850 coups/min.",
			"Masse : 0.86 kg.",
			"Référence constructeur : ZRH-131S."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Cadence",
			"value": "2850 coups/min",
			"evidenceIds": [
				"october-b-zipp-tools-p90"
			]
		},
		{
			"label": "Masse",
			"value": "0.86 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p90"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZRH-131S",
			"evidenceIds": [
				"october-b-zipp-tools-p90"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90psi/6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p90"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 90",
			"evidenceIds": [
				"october-b-zipp-tools-p90"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p90",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=90",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 90",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-12-technical:marteau-a-river-zipp-zrh-131s:0",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
			"sourceLabel": "ZIPP, document fabricant, pages PDF 90",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "131S droit,2850coups/min160mm0,86kg,queue.401, capacitéacier3,2/aluminium4mm,2,61J.131Ppistolet115mm1kg ;195Pqueue.4981560coups/min2,1kg. Ajouter forme/longueur/queue, moyenne180L/min reste non dimensionnante. GET complet : SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p90"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p90"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p90"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p90"
		]
	},
	"notes": [
		"Consommation moyenne : 180 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
