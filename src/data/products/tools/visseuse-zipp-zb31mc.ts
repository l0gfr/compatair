import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-zipp-zb31mc",
	"slug": "visseuse-zipp-zb31mc",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "ZIPP ZB31MC",
	"brand": "ZIPP",
	"model": "ZB31MC",
	"mpn": "ZB31MC",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le fabricant publie 0,20 m³/min sans préciser le régime de consommation. La pression de service de 6 kg/cm² ne démontre pas un point de mesure du débit ; la demande reste indéterminée.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-zipp-zb31mc-technical-20261112-followup.svg",
		"alt": "Repères techniques : ZIPP ZB31MC",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 12 novembre 2026"
	},
	"variant": {
		"familyId": "zipp-zb31mc",
		"label": "Référence ZB31MC",
		"distinguishingAttributes": {
			"reference": "ZB31MC",
			"Vitesse à vide": "1000 tr/min",
			"Masse": "0.52 kg"
		}
	},
	"editorial": {
		"overview": "ZB31MC : visseuse à plage de couple publiée 1–8 kgf·cm, 1 000 tr/min, longueur 210 mm et masse 0,52 kg. Le tableau indique des vis machine M1,7–M3,3 et autotaraudeuses M1,3–M2,7. Les 21MC et 41MC couvrent respectivement 0,5–2 et 3–17 kgf·cm. La consommation de 0,20 m³/min existe, mais son régime n’est pas nommé ; la pression de service imprimée de 6 kg/cm² reste dans son unité originale.",
		"verifiedFacts": [
			"Vitesse à vide : 1000 tr/min.",
			"Masse : 0.52 kg.",
			"Référence constructeur : ZB31MC."
		],
		"limitations": [
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée.",
			"Le fabricant publie 0,20 m³/min sans préciser le régime de consommation. La pression de service de 6 kg/cm² ne démontre pas un point de mesure du débit ; la demande reste indéterminée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "1000 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p29"
			]
		},
		{
			"label": "Masse",
			"value": "0.52 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p29"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZB31MC",
			"evidenceIds": [
				"october-b-zipp-tools-p29"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 29",
			"evidenceIds": [
				"october-b-zipp-tools-p29"
			]
		},
		{
			"label": "Consommation documentaire, régime non précisé",
			"value": "0,20 m³/min",
			"evidenceIds": [
				"review:2026-11-12-technical:visseuse-zipp-zb31mc:0"
			]
		},
		{
			"label": "Pression de service, unité imprimée",
			"value": "6 kg/cm² ; pression de mesure de consommation non établie",
			"evidenceIds": [
				"review:2026-11-12-technical:visseuse-zipp-zb31mc:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p29",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=29",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 29",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-12-technical:visseuse-zipp-zb31mc:0",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
			"sourceLabel": "ZIPP, document fabricant, pages PDF 29",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "ZB31MC1000tr/minplage1–8kgf-cm,capacitévismachineM1,7–M3,3/autotaraudM1,3–M2,7,210mm0,52kg.21MC0,5–2et41MC3–17à1800tr/min distincts. Table fournit0,20m³/minmaisrégime non nommé,6kg/cm²différentconsignegénérale6,2bar. Remplacer affirmation consommationabsente par point non qualifié sans conversion silencieuse. GET complet : SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p29"
		],
		"demandExplanation": [
			"review:2026-11-12-technical:visseuse-zipp-zb31mc:0"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:visseuse-zipp-zb31mc:0"
		]
	},
	"notes": [
		"Le fabricant publie 0,20 m³/min sans préciser le régime de consommation. La pression de service de 6 kg/cm² ne démontre pas un point de mesure du débit ; la demande reste indéterminée."
	]
};

export default product;
