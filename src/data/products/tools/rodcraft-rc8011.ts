import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rodcraft-rc8011",
	"slug": "rodcraft-rc8011",
	"brand": "Rodcraft",
	"model": "RC8011",
	"mpn": "8951070040",
	"categoryId": "pistolet-nettoyage",
	"category": "pistolet-nettoyage",
	"label": "Rodcraft RC8011",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rodcraft-rc8011.webp",
		"alt": "Repères techniques Rodcraft RC8011, référence 8951070040",
		"sourceUrl": "https://www.rodcraft.com/en/products/8951070040",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Rodcraft RC8011. La fiche Rodcraft qualifie le débit « Air consumption at load », mais son champ de pression est « Max dynamic air working pressure ». Le plafond de 6,3 bar ne constitue pas une pression de mesure ; les deux données sont conservées séparément. Référence fabricant : 8951070040. Masse : 0.8 kg. Longueur : 200 mm. Diamètre intérieur du tuyau (longueur 5 m) : 8 mm.",
		"verifiedFacts": [
			"Pression dynamique de travail maximale publiée : 6.3 bar, retenue comme point de fonctionnement. Respecter cette limite à l’entrée de l’outil.",
			"Référence fabricant : 8951070040.",
			"Masse : 0.8 kg.",
			"Longueur : 200 mm.",
			"Diamètre intérieur du tuyau (longueur 5 m) : 8 mm.",
			"Valeur documentaire conservée : 300 L/min. La fiche Rodcraft qualifie le débit « Air consumption at load », mais son champ de pression est « Max dynamic air working pressure ». Le plafond de 6,3 bar ne constitue pas une pression de mesure ; les deux données sont conservées séparément."
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
				"rodcraft-8951070040-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Valeur documentaire conservée : 300 L/min. La fiche Rodcraft qualifie le débit « Air consumption at load », mais son champ de pression est « Max dynamic air working pressure ». Le plafond de 6,3 bar ne constitue pas une pression de mesure ; les deux données sont conservées séparément.",
			"evidenceIds": [
				"rodcraft-rc8011-reserved-20261031-1"
			]
		},
		{
			"label": "Masse",
			"value": "0.8 kg",
			"evidenceIds": [
				"rodcraft-8951070040-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "200 mm",
			"evidenceIds": [
				"rodcraft-8951070040-20260927"
			]
		},
		{
			"label": "Diamètre intérieur du tuyau (longueur 5 m)",
			"value": "8 mm",
			"evidenceIds": [
				"rodcraft-8951070040-20260927"
			]
		},
		{
			"label": "Filetage d’entrée d’air",
			"value": "1/4",
			"evidenceIds": [
				"rodcraft-8951070040-20260927"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":300,\"typical\":300,\"max\":300},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"rodcraft-8951070040-20260927",
				"rodcraft-rc8011-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "rodcraft-8951070040-20260927",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951070040",
			"sourceLabel": "Rodcraft, fiche technique officielle RC8011, réf. 8951070040",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 5 L/s. Valeur retenue : 300 L/min (maximum des régimes documentés, L/s × 60)."
		},
		{
			"id": "rodcraft-rc8011-reserved-20261031-1",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951070040",
			"sourceLabel": "Rodcraft RC8011 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 7f462690bd92884583ff444c5d6fc5993a211a7d482f3863d92b011fb897b568. La fiche Rodcraft qualifie le débit « Air consumption at load », mais son champ de pression est « Max dynamic air working pressure ». Le plafond de 6,3 bar ne constitue pas une pression de mesure ; les deux données sont conservées séparément."
		}
	],
	"fieldSources": {
		"mpn": [
			"rodcraft-8951070040-20260927"
		],
		"workingPressureBar": [
			"rodcraft-rc8011-reserved-20261031-1"
		],
		"demandModel": [
			"rodcraft-rc8011-reserved-20261031-1"
		],
		"demandExplanation": [
			"rodcraft-rc8011-reserved-20261031-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La fiche Rodcraft qualifie le débit « Air consumption at load », mais son champ de pression est « Max dynamic air working pressure ». Le plafond de 6,3 bar ne constitue pas une pression de mesure ; les deux données sont conservées séparément."
};

export default product;
