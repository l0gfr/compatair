import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rodcraft-rc7028",
	"slug": "rodcraft-rc7028",
	"brand": "Rodcraft",
	"model": "RC7028",
	"mpn": "8951000275",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Rodcraft RC7028",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rodcraft-rc7028.webp",
		"alt": "Repères techniques Rodcraft RC7028, référence 8951000275",
		"sourceUrl": "https://www.rodcraft.com/en/products/8951000275",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Rodcraft RC7028. La fiche Rodcraft qualifie le débit « Air consumption at load », mais son champ de pression est « Max dynamic air working pressure ». Le plafond de 6,3 bar ne constitue pas une pression de mesure ; les deux données sont conservées séparément. Référence fabricant : 8951000275. Vitesse à vide : 27000 rpm. Masse : 0.72 kg. Longueur : 191 mm.",
		"verifiedFacts": [
			"Pression dynamique de travail maximale publiée : 6.3 bar, retenue comme point de fonctionnement. Respecter cette limite à l’entrée de l’outil.",
			"Référence fabricant : 8951000275.",
			"Vitesse à vide : 27000 rpm.",
			"Masse : 0.72 kg.",
			"Longueur : 191 mm.",
			"Valeur documentaire conservée : 228 L/min. La fiche Rodcraft qualifie le débit « Air consumption at load », mais son champ de pression est « Max dynamic air working pressure ». Le plafond de 6,3 bar ne constitue pas une pression de mesure ; les deux données sont conservées séparément."
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
				"rodcraft-8951000275-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Valeur documentaire conservée : 228 L/min. La fiche Rodcraft qualifie le débit « Air consumption at load », mais son champ de pression est « Max dynamic air working pressure ». Le plafond de 6,3 bar ne constitue pas une pression de mesure ; les deux données sont conservées séparément.",
			"evidenceIds": [
				"rodcraft-rc7028-reserved-20261031-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "27000 rpm",
			"evidenceIds": [
				"rodcraft-8951000275-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "0.72 kg",
			"evidenceIds": [
				"rodcraft-8951000275-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "191 mm",
			"evidenceIds": [
				"rodcraft-8951000275-20260927"
			]
		},
		{
			"label": "Diamètre intérieur du tuyau (longueur 5 m)",
			"value": "8 mm",
			"evidenceIds": [
				"rodcraft-8951000275-20260927"
			]
		},
		{
			"label": "Filetage d’entrée d’air",
			"value": "1/4",
			"evidenceIds": [
				"rodcraft-8951000275-20260927"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":228,\"typical\":228,\"max\":228},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"rodcraft-8951000275-20260927",
				"rodcraft-rc7028-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "rodcraft-8951000275-20260927",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951000275",
			"sourceLabel": "Rodcraft, fiche technique officielle RC7028, réf. 8951000275",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 3.8 L/s. Valeur retenue : 228 L/min (maximum des régimes documentés, L/s × 60)."
		},
		{
			"id": "rodcraft-rc7028-reserved-20261031-1",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951000275",
			"sourceLabel": "Rodcraft RC7028 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 3da003865317c79db34b7f6d63b2748dcd192b39149cbc94969d53a904a52ac9. La fiche Rodcraft qualifie le débit « Air consumption at load », mais son champ de pression est « Max dynamic air working pressure ». Le plafond de 6,3 bar ne constitue pas une pression de mesure ; les deux données sont conservées séparément."
		}
	],
	"fieldSources": {
		"mpn": [
			"rodcraft-8951000275-20260927"
		],
		"workingPressureBar": [
			"rodcraft-rc7028-reserved-20261031-1"
		],
		"demandModel": [
			"rodcraft-rc7028-reserved-20261031-1"
		],
		"demandExplanation": [
			"rodcraft-rc7028-reserved-20261031-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La fiche Rodcraft qualifie le débit « Air consumption at load », mais son champ de pression est « Max dynamic air working pressure ». Le plafond de 6,3 bar ne constitue pas une pression de mesure ; les deux données sont conservées séparément."
};

export default product;
