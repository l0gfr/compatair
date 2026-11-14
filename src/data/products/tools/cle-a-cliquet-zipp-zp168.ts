import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-zipp-zp168",
	"slug": "cle-a-cliquet-zipp-zp168",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "ZIPP ZP168",
	"brand": "ZIPP",
	"model": "ZP168",
	"mpn": "ZP168",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 70,
		"typical": 70,
		"max": 70
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-zipp-zp168-technical-20261112-followup.svg",
		"alt": "Repères techniques : ZIPP ZP168",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 12 novembre 2026"
	},
	"variant": {
		"familyId": "zipp-zp168",
		"label": "Référence ZP168",
		"distinguishingAttributes": {
			"reference": "ZP168",
			"Vitesse à vide": "260 tr/min",
			"Masse": "0.45 kg"
		}
	},
	"editorial": {
		"overview": "ZP168 : cliquet à carré 1/4 pouce, 27 Nm maximum, 260 tr/min et corps de 133 mm pour 0,45 kg. Les ZP161 et ZP163 sont en carrés 1/2 et 3/8 pouce, 68 Nm maximum et 265 mm. La moyenne de 70 L/min ne donne pas la demande continue en charge.",
		"verifiedFacts": [
			"Vitesse à vide : 260 tr/min.",
			"Masse : 0.45 kg.",
			"Référence constructeur : ZP168."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "260 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p19"
			]
		},
		{
			"label": "Masse",
			"value": "0.45 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p19"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZP168",
			"evidenceIds": [
				"october-b-zipp-tools-p19"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Operating Air Pressure: 90(6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p19"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 19",
			"evidenceIds": [
				"october-b-zipp-tools-p19"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p19",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=19",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-12-technical:cle-a-cliquet-zipp-zp168:0",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
			"sourceLabel": "ZIPP, document fabricant, pages PDF 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "Ajouter carré1/4,27Nmmax133mm contre1611/2et1633/8à68Nm265mm.260tr/min0,45kg et70L/minmoyenne confirmés, pas dimensionnants. GET complet : SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p19"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p19"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p19"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p19"
		]
	},
	"notes": [
		"Consommation moyenne : 70 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
