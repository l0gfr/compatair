import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rodcraft-rc6700",
	"slug": "rodcraft-rc6700",
	"brand": "Rodcraft",
	"model": "RC6700",
	"mpn": "8951074001",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "Rodcraft RC6700",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rodcraft-rc6700.webp",
		"alt": "Repères techniques Rodcraft RC6700, référence 8951074001",
		"sourceUrl": "https://www.rodcraft.com/en/products/8951074001",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Rodcraft RC6700. La fiche Rodcraft qualifie le débit « Air consumption at load », mais son champ de pression est « Max dynamic air working pressure ». Le plafond de 6,3 bar ne constitue pas une pression de mesure ; les deux données sont conservées séparément. Référence fabricant : 8951074001. Masse : 1.6 kg. Longueur : 225 mm. Diamètre intérieur du tuyau (longueur 5 m) : 8 mm.",
		"verifiedFacts": [
			"Pression dynamique de travail maximale publiée : 6.3 bar, retenue comme point de fonctionnement. Respecter cette limite à l’entrée de l’outil.",
			"Référence fabricant : 8951074001.",
			"Masse : 1.6 kg.",
			"Longueur : 225 mm.",
			"Diamètre intérieur du tuyau (longueur 5 m) : 8 mm.",
			"Valeur documentaire conservée : 102 L/min. La fiche Rodcraft qualifie le débit « Air consumption at load », mais son champ de pression est « Max dynamic air working pressure ». Le plafond de 6,3 bar ne constitue pas une pression de mesure ; les deux données sont conservées séparément."
		],
		"limitations": [
			"Caractéristiques déclarées par le constructeur ; aucune mesure physique réalisée par CompatAir.",
			"La présence au catalogue fabricant ne prouve ni le stock d’un distributeur, ni un volume de ventes.",
			"La fiche Rodcraft qualifie le débit « Air consumption at load », mais son champ de pression est « Max dynamic air working pressure ». Le plafond de 6,3 bar ne constitue pas une pression de mesure ; les deux données sont conservées séparément."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression dynamique de travail maximale publiée : 6.3 bar, retenue comme point de fonctionnement. Respecter cette limite à l’entrée de l’outil.",
			"evidenceIds": [
				"rodcraft-8951074001-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Valeur documentaire conservée : 102 L/min. La fiche Rodcraft qualifie le débit « Air consumption at load », mais son champ de pression est « Max dynamic air working pressure ». Le plafond de 6,3 bar ne constitue pas une pression de mesure ; les deux données sont conservées séparément.",
			"evidenceIds": [
				"rodcraft-rc6700-reserved-20261031-1"
			]
		},
		{
			"label": "Masse",
			"value": "1.6 kg",
			"evidenceIds": [
				"rodcraft-8951074001-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "225 mm",
			"evidenceIds": [
				"rodcraft-8951074001-20260927"
			]
		},
		{
			"label": "Diamètre intérieur du tuyau (longueur 5 m)",
			"value": "8 mm",
			"evidenceIds": [
				"rodcraft-8951074001-20260927"
			]
		},
		{
			"label": "Filetage d’entrée d’air",
			"value": "1/4",
			"evidenceIds": [
				"rodcraft-8951074001-20260927"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":102,\"typical\":102,\"max\":102},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"rodcraft-8951074001-20260927",
				"rodcraft-rc6700-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "rodcraft-8951074001-20260927",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951074001",
			"sourceLabel": "Rodcraft, fiche technique officielle RC6700, réf. 8951074001",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 1.7 L/s. Valeur retenue : 102 L/min (maximum des régimes documentés, L/s × 60)."
		},
		{
			"id": "rodcraft-rc6700-reserved-20261031-1",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951074001",
			"sourceLabel": "Rodcraft RC6700 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 a49fe782740d7b1531848b7c0e62187d5690092b5972da20f204bb3e027538f4. La fiche Rodcraft qualifie le débit « Air consumption at load », mais son champ de pression est « Max dynamic air working pressure ». Le plafond de 6,3 bar ne constitue pas une pression de mesure ; les deux données sont conservées séparément."
		}
	],
	"fieldSources": {
		"mpn": [
			"rodcraft-8951074001-20260927"
		],
		"workingPressureBar": [
			"rodcraft-rc6700-reserved-20261031-1"
		],
		"demandModel": [
			"rodcraft-rc6700-reserved-20261031-1"
		],
		"demandExplanation": [
			"rodcraft-rc6700-reserved-20261031-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La fiche Rodcraft qualifie le débit « Air consumption at load », mais son champ de pression est « Max dynamic air working pressure ». Le plafond de 6,3 bar ne constitue pas une pression de mesure ; les deux données sont conservées séparément."
};

export default product;
