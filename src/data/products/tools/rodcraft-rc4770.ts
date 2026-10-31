import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rodcraft-rc4770",
	"slug": "rodcraft-rc4770",
	"brand": "Rodcraft",
	"model": "RC4770",
	"mpn": "8951000427",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Rodcraft RC4770",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rodcraft-rc4770.webp",
		"alt": "Repères techniques Rodcraft RC4770, référence 8951000427",
		"sourceUrl": "https://www.rodcraft.com/en/products/8951000427",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Rodcraft RC4770. La fiche Rodcraft qualifie le débit « Air consumption at load », mais son champ de pression est « Max dynamic air working pressure ». Le plafond de 6,3 bar ne constitue pas une pression de mesure ; les deux données sont conservées séparément. Référence fabricant : 8951000427. Vitesse à vide : 2000 rpm. Masse : 1.69 kg. Longueur : 258 mm.",
		"verifiedFacts": [
			"Pression dynamique de travail maximale publiée : 6.3 bar, retenue comme point de fonctionnement. Respecter cette limite à l’entrée de l’outil.",
			"Référence fabricant : 8951000427.",
			"Vitesse à vide : 2000 rpm.",
			"Masse : 1.69 kg.",
			"Longueur : 258 mm.",
			"Valeur documentaire conservée : 660 L/min. La fiche Rodcraft qualifie le débit « Air consumption at load », mais son champ de pression est « Max dynamic air working pressure ». Le plafond de 6,3 bar ne constitue pas une pression de mesure ; les deux données sont conservées séparément."
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
				"rodcraft-8951000427-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Valeur documentaire conservée : 660 L/min. La fiche Rodcraft qualifie le débit « Air consumption at load », mais son champ de pression est « Max dynamic air working pressure ». Le plafond de 6,3 bar ne constitue pas une pression de mesure ; les deux données sont conservées séparément.",
			"evidenceIds": [
				"rodcraft-rc4770-reserved-20261031-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2000 rpm",
			"evidenceIds": [
				"rodcraft-8951000427-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "1.69 kg",
			"evidenceIds": [
				"rodcraft-8951000427-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "258 mm",
			"evidenceIds": [
				"rodcraft-8951000427-20260927"
			]
		},
		{
			"label": "Diamètre intérieur du tuyau (longueur 5 m)",
			"value": "10 mm",
			"evidenceIds": [
				"rodcraft-8951000427-20260927"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "1/4",
			"evidenceIds": [
				"rodcraft-8951000427-20260927"
			]
		},
		{
			"label": "Filetage d’entrée d’air",
			"value": "1/4",
			"evidenceIds": [
				"rodcraft-8951000427-20260927"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":660,\"typical\":660,\"max\":660},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"rodcraft-8951000427-20260927",
				"rodcraft-rc4770-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "rodcraft-8951000427-20260927",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951000427",
			"sourceLabel": "Rodcraft, fiche technique officielle RC4770, réf. 8951000427",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 11 L/s. Consommation à vide publiée : 10 L/s. Valeur retenue : 660 L/min (maximum des régimes documentés, L/s × 60)."
		},
		{
			"id": "rodcraft-rc4770-reserved-20261031-1",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951000427",
			"sourceLabel": "Rodcraft RC4770 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 cc73c90ecc2f102efcfb73076a0e31e8c2f2f254c2c66e358dc306add16acf72. La fiche Rodcraft qualifie le débit « Air consumption at load », mais son champ de pression est « Max dynamic air working pressure ». Le plafond de 6,3 bar ne constitue pas une pression de mesure ; les deux données sont conservées séparément."
		}
	],
	"fieldSources": {
		"mpn": [
			"rodcraft-8951000427-20260927"
		],
		"workingPressureBar": [
			"rodcraft-rc4770-reserved-20261031-1"
		],
		"demandModel": [
			"rodcraft-rc4770-reserved-20261031-1"
		],
		"demandExplanation": [
			"rodcraft-rc4770-reserved-20261031-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La fiche Rodcraft qualifie le débit « Air consumption at load », mais son champ de pression est « Max dynamic air working pressure ». Le plafond de 6,3 bar ne constitue pas une pression de mesure ; les deux données sont conservées séparément."
};

export default product;
