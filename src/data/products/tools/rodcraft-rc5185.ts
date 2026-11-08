import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rodcraft-rc5185",
	"slug": "rodcraft-rc5185",
	"brand": "Rodcraft",
	"model": "RC5185",
	"mpn": "8951000152",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Rodcraft RC5185",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rodcraft-rc5185-20261106.svg",
		"alt": "Repères techniques Rodcraft RC5185, référence 8951000152",
		"sourceUrl": "https://www.rodcraft.com/en/products/8951000152",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Rodcraft RC5185, référence 8951000152. Consommations documentaires conservées séparément ; pression de mesure à confirmer avant dimensionnement. Masse : 1.7 kg. Longueur : 169 mm. Diamètre intérieur du tuyau (longueur 5 m) : 9.5 mm.",
		"verifiedFacts": [
			"Pression dynamique de travail maximale publiée : 6.3 bar. La pression de mesure de consommation reste à confirmer. Respecter cette limite à l’entrée de l’outil.",
			"Consommation en charge publiée : 6.2 L/s. Consommation à vide publiée : 3 L/s. Conversion documentaire : 372 L/min (maximum des régimes documentés, L/s × 60) ; hors dimensionnement.",
			"Référence fabricant : 8951000152.",
			"Masse : 1.7 kg.",
			"Longueur : 169 mm.",
			"Diamètre intérieur du tuyau (longueur 5 m) : 9.5 mm."
		],
		"limitations": [
			"Caractéristiques déclarées par le constructeur ; aucune mesure physique réalisée par CompatAir.",
			"La présence au catalogue fabricant ne prouve ni le stock d’un distributeur, ni un volume de ventes.",
			"La pression de mesure de la consommation publiée reste à documenter. Les valeurs et leur régime sont conservés dans les spécifications, hors calcul de compatibilité."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression dynamique de travail maximale publiée : 6.3 bar. La pression de mesure de consommation reste à confirmer. Respecter cette limite à l’entrée de l’outil.",
			"evidenceIds": [
				"rodcraft-8951000152-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation en charge publiée : 6.2 L/s. Consommation à vide publiée : 3 L/s. Conversion documentaire : 372 L/min (maximum des régimes documentés, L/s × 60) ; hors dimensionnement.",
			"evidenceIds": [
				"rodcraft-8951000152-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "1.7 kg",
			"evidenceIds": [
				"rodcraft-8951000152-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "169 mm",
			"evidenceIds": [
				"rodcraft-8951000152-20260927"
			]
		},
		{
			"label": "Diamètre intérieur du tuyau (longueur 5 m)",
			"value": "9.5 mm",
			"evidenceIds": [
				"rodcraft-8951000152-20260927"
			]
		},
		{
			"label": "Filetage d’entrée d’air",
			"value": "1/4",
			"evidenceIds": [
				"rodcraft-8951000152-20260927"
			]
		},
		{
			"label": "Consommation publiée, hors dimensionnement",
			"value": "372 L/min ; La pression de mesure de la consommation publiée reste à documenter. Les valeurs et leur régime sont conservés dans les spécifications, hors calcul de compatibilité.",
			"evidenceIds": [
				"review:2026-11-06-followup:rodcraft-rc5185:1"
			]
		}
	],
	"evidence": [
		{
			"id": "rodcraft-8951000152-20260927",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951000152",
			"sourceLabel": "Rodcraft, fiche technique officielle RC5185, réf. 8951000152",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 6.2 L/s. Consommation à vide publiée : 3 L/s. Valeur retenue : 372 L/min (maximum des régimes documentés, L/s × 60)."
		},
		{
			"id": "review:2026-11-06-followup:rodcraft-rc5185:1",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951000152",
			"sourceLabel": "Rodcraft, revue documentaire du 6 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Fiche actuelle 8951000152 : marteau hexagonal 11 mm ; la pression dynamique maximale utilisée comme pression de mesure n'est pas justifiée. Conserver 6,2 L/s en charge et 3 L/s à vide documentaires, hors calcul tant que le point de mesure n'est pas établi. SHA-256 du document complet : 31e17e4c10553ef9e9bbdfea7d269a2f3b69ae2595b19e6eda6f36d79f9ae2ec."
		},
		{
			"id": "review:2026-11-06-copy:rodcraft-rc5185",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951000152",
			"sourceLabel": "Rodcraft, clarification des conditions de dimensionnement",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Alignement des textes sur le régime non dimensionnant déjà utilisé par le moteur. Valeurs documentaires et conditions de service conservées ; SHA-256 31e17e4c10553ef9e9bbdfea7d269a2f3b69ae2595b19e6eda6f36d79f9ae2ec."
		}
	],
	"fieldSources": {
		"mpn": [
			"rodcraft-8951000152-20260927"
		],
		"workingPressureBar": [
			"rodcraft-8951000152-20260927"
		],
		"demandExplanation": [
			"review:2026-11-06-followup:rodcraft-rc5185:1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La pression de mesure de la consommation publiée reste à documenter. Les valeurs et leur régime sont conservés dans les spécifications, hors calcul de compatibilité."
};

export default product;
