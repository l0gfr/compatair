import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rodcraft-rc5100",
	"slug": "rodcraft-rc5100",
	"brand": "Rodcraft",
	"model": "RC5100",
	"mpn": "8951071022",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Rodcraft RC5100",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rodcraft-rc5100.webp",
		"alt": "Repères techniques Rodcraft RC5100, référence 8951071022",
		"sourceUrl": "https://www.rodcraft.com/en/products/8951071022",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Rodcraft RC5100. La fiche Rodcraft qualifie le débit « Air consumption at load », mais son champ de pression est « Max dynamic air working pressure ». Le plafond de 6,3 bar ne constitue pas une pression de mesure ; les deux données sont conservées séparément. Référence fabricant : 8951071022. Masse : 1.5 kg. Longueur : 200 mm. Diamètre intérieur du tuyau (longueur 5 m) : 8 mm.",
		"verifiedFacts": [
			"Pression dynamique de travail maximale publiée : 6.3 bar, retenue comme point de fonctionnement. Respecter cette limite à l’entrée de l’outil.",
			"Référence fabricant : 8951071022.",
			"Masse : 1.5 kg.",
			"Longueur : 200 mm.",
			"Diamètre intérieur du tuyau (longueur 5 m) : 8 mm.",
			"Valeur documentaire conservée : 402 L/min. La fiche Rodcraft qualifie le débit « Air consumption at load », mais son champ de pression est « Max dynamic air working pressure ». Le plafond de 6,3 bar ne constitue pas une pression de mesure ; les deux données sont conservées séparément."
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
				"rodcraft-8951071022-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Valeur documentaire conservée : 402 L/min. La fiche Rodcraft qualifie le débit « Air consumption at load », mais son champ de pression est « Max dynamic air working pressure ». Le plafond de 6,3 bar ne constitue pas une pression de mesure ; les deux données sont conservées séparément.",
			"evidenceIds": [
				"rodcraft-rc5100-reserved-20261031-1"
			]
		},
		{
			"label": "Masse",
			"value": "1.5 kg",
			"evidenceIds": [
				"rodcraft-8951071022-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "200 mm",
			"evidenceIds": [
				"rodcraft-8951071022-20260927"
			]
		},
		{
			"label": "Diamètre intérieur du tuyau (longueur 5 m)",
			"value": "8 mm",
			"evidenceIds": [
				"rodcraft-8951071022-20260927"
			]
		},
		{
			"label": "Filetage d’entrée d’air",
			"value": "1/4",
			"evidenceIds": [
				"rodcraft-8951071022-20260927"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":402,\"typical\":402,\"max\":402},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"rodcraft-8951071022-20260927",
				"rodcraft-rc5100-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "rodcraft-8951071022-20260927",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951071022",
			"sourceLabel": "Rodcraft, fiche technique officielle RC5100, réf. 8951071022",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 6.7 L/s. Consommation à vide publiée : 3.3 L/s. Valeur retenue : 402 L/min (maximum des régimes documentés, L/s × 60)."
		},
		{
			"id": "rodcraft-rc5100-reserved-20261031-1",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951071022",
			"sourceLabel": "Rodcraft RC5100 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 dd73aa34e1f59dc065ae513922a8d5eaf37bdae7ad2b457a7ce35094d7bc60ca. La fiche Rodcraft qualifie le débit « Air consumption at load », mais son champ de pression est « Max dynamic air working pressure ». Le plafond de 6,3 bar ne constitue pas une pression de mesure ; les deux données sont conservées séparément."
		}
	],
	"fieldSources": {
		"mpn": [
			"rodcraft-8951071022-20260927"
		],
		"workingPressureBar": [
			"rodcraft-rc5100-reserved-20261031-1"
		],
		"demandModel": [
			"rodcraft-rc5100-reserved-20261031-1"
		],
		"demandExplanation": [
			"rodcraft-rc5100-reserved-20261031-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La fiche Rodcraft qualifie le débit « Air consumption at load », mais son champ de pression est « Max dynamic air working pressure ». Le plafond de 6,3 bar ne constitue pas une pression de mesure ; les deux données sont conservées séparément."
};

export default product;
