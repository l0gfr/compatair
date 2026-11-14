import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-impulsions-zipp-pn062",
	"slug": "cle-a-impulsions-zipp-pn062",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "ZIPP PN062",
	"brand": "ZIPP",
	"model": "PN062",
	"mpn": "PN062",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-zipp-pn062-technical-20261112-followup.svg",
		"alt": "Repères techniques : ZIPP PN062",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 12 novembre 2026"
	},
	"variant": {
		"familyId": "zipp-pn062",
		"label": "Référence PN062",
		"distinguishingAttributes": {
			"reference": "PN062",
			"Vitesse à vide": "6000 tr/min",
			"Masse": "0.94 kg"
		}
	},
	"editorial": {
		"overview": "PN062 : outil à impulsions sans arrêt automatique, hexagone 1/4 pouce, capacité M6–M8, 6 000 tr/min et 0,94 kg. La PN052 publie une moyenne de 0,40 m³/min contre 0,43 pour la PN062 ; la PN042 est à 5 600 tr/min. La plage de service 60–90 psi reste distincte des courbes de pression d’huile et du point de mesure d’air, non qualifié.",
		"verifiedFacts": [
			"Vitesse à vide : 6000 tr/min.",
			"Masse : 0.94 kg.",
			"Référence constructeur : PN062."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "6000 tr/min",
			"evidenceIds": [
				"october-b-zipp-tools-p34"
			]
		},
		{
			"label": "Masse",
			"value": "0.94 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p34"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "PN062",
			"evidenceIds": [
				"october-b-zipp-tools-p34"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Recommended Gauge Air Pressure: 60~90psi; consumption measurement point is not uniquely stated.",
			"evidenceIds": [
				"october-b-zipp-tools-p34"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 34",
			"evidenceIds": [
				"october-b-zipp-tools-p34"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p34",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=34",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 34",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-12-technical:cle-a-impulsions-zipp-pn062:0",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
			"sourceLabel": "ZIPP, document fabricant, pages PDF 34",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "PN062 sans arrêt auto,hex1/4,M6–M8,0,43m³/minmoyenne contrePN0520,4 à6000tr/min etPN0425600tr/min. Plage60–90psi sans point unique ; ne pas importer une courbe couple/pression d’huile comme pression d’air ou débit en charge. GET complet : SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p34"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:cle-a-impulsions-zipp-pn062:0"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p34"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
