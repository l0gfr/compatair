import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-zipp-zpr1016t",
	"slug": "riveteuse-zipp-zpr1016t",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "ZIPP ZPR1016T",
	"brand": "ZIPP",
	"model": "ZPR1016T",
	"mpn": "ZPR1016T",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-zipp-zpr1016t-technical-20261116-reviews.svg",
		"alt": "Repères techniques : ZIPP ZPR1016T",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "zipp-zpr1016t",
		"label": "Référence ZPR1016T",
		"distinguishingAttributes": {
			"reference": "ZPR1016T",
			"Masse": "1.48 kg",
			"Référence constructeur": "ZPR1016T"
		}
	},
	"editorial": {
		"overview": "La ZPR1016T est la riveteuse de 16 mm de course et 1,48 kg, équipée de buses 2,4 à 4,8 mm. La ZPR1116T-3J ajoute notamment la capacité aluminium/acier 1/4 pouce ; la ZT1918T augmente course et traction. Le tableau donne 0,125 pied cube par course avec 3,5 entre parenthèses, à côté d’une pression de service de 90 psi. Cette donnée documentaire ne devient pas un débit par minute sans cadence ni convention de mesure établies.",
		"verifiedFacts": [
			"Masse : 1.48 kg.",
			"Référence constructeur : ZPR1016T."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé.",
			"Catalogue daté et données déclarées, sans essai physique. Vérifier la disponibilité actuelle, les accessoires et la notice de sécurité de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "1.48 kg",
			"evidenceIds": [
				"october-b-zipp-tools-p50"
			]
		},
		{
			"label": "Référence constructeur",
			"value": "ZPR1016T",
			"evidenceIds": [
				"october-b-zipp-tools-p50"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Model Traction Power Stroke Length Net Weight Air Pressure Min. Hose Size Noise Level Vibration Equipped",
			"evidenceIds": [
				"october-b-zipp-tools-p50"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "ZIPP, catalogue général pneumatique, page PDF 50",
			"evidenceIds": [
				"october-b-zipp-tools-p50"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p50",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=50",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 50",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:riveteuse-zipp-zpr1016t:0",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
			"sourceLabel": "ZIPP, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La ZPR1016T est la riveteuse de 16 mm de course et 1,48 kg, équipée de buses 2,4 à 4,8 mm. La ZPR1116T-3J ajoute notamment la capacité aluminium/acier 1/4 pouce ; la ZT1918T augmente course et traction. Le tableau donne 0,125 pied cube par course avec 3,5 entre parenthèses, à côté d’une pression de service de 90 psi. Cette donnée documentaire ne devient pas un débit par minute sans cadence ni convention de mesure établies. GET complet SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. Pages PDF lues : 50."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p50"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p50"
		],
		"demandExplanation": [
			"october-b-zipp-tools-p50"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie sur cette page. Aucun point de fonctionnement n’est inventé."
	]
};

export default product;
