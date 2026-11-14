import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-zipp-zir0922",
	"slug": "riveteuse-zipp-zir0922",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "ZIPP ZIR0922",
	"brand": "ZIPP",
	"model": "ZIR0922",
	"mpn": "ZIR0922",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-zipp-zir0922-technical-20261112-followup.svg",
		"alt": "Repères techniques : ZIPP ZIR0922",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 12 novembre 2026"
	},
	"variant": {
		"familyId": "zipp-zir0922",
		"label": "Référence ZIR0922",
		"distinguishingAttributes": {
			"reference": "ZIR0922",
			"Masse": "1.9 kg",
			"Course publiée": "22 mm"
		}
	},
	"editorial": {
		"overview": "ZIR0922 : riveteuse hydropneumatique en ligne avec collecte des mandrins par aspiration, course 22 mm et masse 1,9 kg. La capacité publiée atteint 6,4 mm pour les rivets aluminium et acier. La ZAR0921 est un pistolet de course 19 mm et 1,4 kg. Le tableau présente 2 000 lbf et 920 kgf, contre-valeurs discordantes, et ne donne pas de consommation pour la ZIR0922.",
		"verifiedFacts": [
			"Masse : 1.9 kg.",
			"Course publiée : 22 mm.",
			"Référence constructeur : ZIR0922."
		],
		"limitations": [
			"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "1.9 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p49"
			]
		},
		{
			"label": "Course publiée",
			"value": "22 mm",
			"evidenceIds": [
				"october-b-zipp-tools-p49"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZIR0922",
			"evidenceIds": [
				"october-b-zipp-tools-p49"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90PSI/6.2bar",
			"evidenceIds": [
				"october-b-zipp-tools-p49"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 49",
			"evidenceIds": [
				"october-b-zipp-tools-p49"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p49",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=49",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 49",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-12-technical:riveteuse-zipp-zir0922:0",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
			"sourceLabel": "ZIPP, document fabricant, pages PDF 49",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "ZIR0922riveteuse en lignehydropneumatique avec collecte des mandrins par aspiration,course22mm1,9kg,capacité6,4mmalu/acier ;ZAR0921pistoletcourse19mm1,4kg.2000lbf/920kgf n’est pas une conversion exacte ; conserver unités originales si citées. Consommation absente pourZIR, ne pas importer0,03cuft/strokeZAR. GET complet : SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p49"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p49"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p49"
		]
	},
	"notes": [
		"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance."
	]
};

export default product;
