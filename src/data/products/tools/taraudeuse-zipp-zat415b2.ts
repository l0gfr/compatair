import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "taraudeuse-zipp-zat415b2",
	"slug": "taraudeuse-zipp-zat415b2",
	"categoryId": "taraudeuse",
	"category": "taraudeuse",
	"label": "ZIPP ZAT415B2",
	"brand": "ZIPP",
	"model": "ZAT415B2",
	"mpn": "ZAT415B2",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 141,
		"typical": 141,
		"max": 141
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/taraudeuse-zipp-zat415b2-technical-20261112-followup.svg",
		"alt": "Repères techniques : ZIPP ZAT415B2",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 12 novembre 2026"
	},
	"variant": {
		"familyId": "zipp-zat415b2",
		"label": "Référence ZAT415B2",
		"distinguishingAttributes": {
			"reference": "ZAT415B2",
			"Vitesse à vide": "1000 tr/min",
			"Masse": "0.74 kg"
		}
	},
	"editorial": {
		"overview": "ZAT415B2 : taraudeuse de capacité publiée 1–3 mm dans l’aluminium et le fer, 1 000 tr/min, longueur 280 mm et masse 0,74 kg. La 712AKI couvre 6–12 mm dans l’aluminium et 6–8 mm dans le fer, à 150 tr/min et 1,77 kg. La moyenne de 141 L/min demeure non dimensionnante.",
		"verifiedFacts": [
			"Vitesse à vide : 1000 tr/min.",
			"Masse : 0.74 kg.",
			"Référence constructeur : ZAT415B2."
		],
		"limitations": [
			"Une consommation moyenne ou de régime inconnu reste insufficient_data pour la compatibilité ; demander un maximum ou une consommation en charge à pression explicite.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "1000 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p157"
			]
		},
		{
			"label": "Masse",
			"value": "0.74 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p157"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZAT415B2",
			"evidenceIds": [
				"october-b-zipp-tools-p157"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Specification(air pressure at 90psi, 6.2",
			"evidenceIds": [
				"october-b-zipp-tools-p157"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 157",
			"evidenceIds": [
				"october-b-zipp-tools-p157"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p157",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=157",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 157",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-12-technical:taraudeuse-zipp-zat415b2:0",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
			"sourceLabel": "ZIPP, document fabricant, pages PDF 157",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "TaraudeuseZAT415B2capacitéalu/fer1–3mm1000tr/min280mm0,74kgcontre712AKIalu6–12fer6–8à150tr/min1,77kg. Ajouter capacités matière,141L/minmoyenne au6,2bar de spécification conserve indétermination. GET complet : SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p157"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p157"
		],
		"airflowLpm": [
			"october-b-zipp-tools-p157"
		],
		"airflowBasis": [
			"october-b-zipp-tools-p157"
		]
	},
	"notes": [
		"Consommation moyenne : 141 L/min ; pression publiée : 6,2 bar. Cette valeur n’établit pas un besoin maximal ou en charge."
	]
};

export default product;
