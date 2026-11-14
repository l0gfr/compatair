import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-zipp-zkj221-29",
	"slug": "derouilleur-a-aiguilles-zipp-zkj221-29",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "ZIPP ZKJ221-29",
	"brand": "ZIPP",
	"model": "ZKJ221-29",
	"mpn": "ZKJ221-29",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/derouilleur-a-aiguilles-zipp-zkj221-29-technical-20261112-followup.svg",
		"alt": "Repères techniques : ZIPP ZKJ221-29",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 12 novembre 2026"
	},
	"variant": {
		"familyId": "zipp-zkj221-29",
		"label": "Référence ZKJ221-29",
		"distinguishingAttributes": {
			"reference": "ZKJ221-29",
			"Cadence": "3700 coups/min",
			"Masse": "2.7 kg"
		}
	},
	"editorial": {
		"overview": "ZKJ22129 : dérouilleur à 29 aiguilles de 2 × 180 mm, 3 700 coups/min, longueur 330 mm et masse 2,7 kg. Le 22119 utilise 19 aiguilles de 3 × 180 mm ; le 322119 est à 2 700 coups/min et 3,9 kg. Les 85 L/min moyens ne sont pas transformés en consommation par coup.",
		"verifiedFacts": [
			"Cadence : 3700 coups/min.",
			"Masse : 2.7 kg.",
			"Référence constructeur : ZKJ221-29."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Cadence",
			"value": "3700 coups/min",
			"evidenceIds": [
				"october-b-zipp-tools-p166"
			]
		},
		{
			"label": "Masse",
			"value": "2.7 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p166"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZKJ221-29",
			"evidenceIds": [
				"october-b-zipp-tools-p166"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended air pressure must equal or below @90psi (6.2 bar). lAir Inlet Size: 1/4 inch-NPT/PT",
			"evidenceIds": [
				"october-b-zipp-tools-p166"
			]
		},
		{
			"label": "Consommation hors calcul, pression non établie",
			"value": "85 L/min",
			"evidenceIds": [
				"october-b-zipp-tools-p166"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 166",
			"evidenceIds": [
				"october-b-zipp-tools-p166"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p166",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=166",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 166",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-12-technical:derouilleur-a-aiguilles-zipp-zkj221-29:0",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
			"sourceLabel": "ZIPP, document fabricant, pages PDF 166",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "29aiguilles2×180mm,3700coups/min2,7kg330mm, contre2211919aiguilles3×180mm et3221192700coups/min3,9kg.85L/minestmoyenne, plafondrecommandé6,2bar. Ajouter la différence d’aiguilles, ne pas déduire per-action. GET complet : SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p166"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:derouilleur-a-aiguilles-zipp-zkj221-29:0"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p166"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
