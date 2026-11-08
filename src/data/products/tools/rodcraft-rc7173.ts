import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rodcraft-rc7173",
	"slug": "rodcraft-rc7173",
	"brand": "Rodcraft",
	"model": "RC7173",
	"mpn": "8951000212",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Rodcraft RC7173",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rodcraft-rc7173-20261106.svg",
		"alt": "Repères techniques Rodcraft RC7173, référence 8951000212",
		"sourceUrl": "https://www.rodcraft.com/en/products/8951000212",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Rodcraft RC7173, référence 8951000212. Consommations documentaires conservées séparément ; pression de mesure à confirmer avant dimensionnement. Vitesse à vide : 12000 rpm. Masse : 1.5 kg. Longueur : 245 mm.",
		"verifiedFacts": [
			"Pression dynamique de travail maximale publiée : 6.3 bar. La pression de mesure de consommation reste à confirmer. Respecter cette limite à l’entrée de l’outil.",
			"Consommation en charge publiée : 9 L/s. Conversion documentaire : 540 L/min (maximum des régimes documentés, L/s × 60) ; hors dimensionnement.",
			"Référence fabricant : 8951000212.",
			"Vitesse à vide : 12000 rpm.",
			"Masse : 1.5 kg.",
			"Longueur : 245 mm."
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
				"rodcraft-8951000212-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation en charge publiée : 9 L/s. Conversion documentaire : 540 L/min (maximum des régimes documentés, L/s × 60) ; hors dimensionnement.",
			"evidenceIds": [
				"rodcraft-8951000212-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "12000 rpm",
			"evidenceIds": [
				"rodcraft-8951000212-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "1.5 kg",
			"evidenceIds": [
				"rodcraft-8951000212-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "245 mm",
			"evidenceIds": [
				"rodcraft-8951000212-20260927"
			]
		},
		{
			"label": "Diamètre intérieur du tuyau (longueur 5 m)",
			"value": "10 mm",
			"evidenceIds": [
				"rodcraft-8951000212-20260927"
			]
		},
		{
			"label": "Filetage d’entrée d’air",
			"value": "1/4",
			"evidenceIds": [
				"rodcraft-8951000212-20260927"
			]
		},
		{
			"label": "Consommation publiée, hors dimensionnement",
			"value": "540 L/min ; La pression de mesure de la consommation publiée reste à documenter. Les valeurs et leur régime sont conservés dans les spécifications, hors calcul de compatibilité.",
			"evidenceIds": [
				"review:2026-11-06-followup:rodcraft-rc7173:1"
			]
		}
	],
	"evidence": [
		{
			"id": "rodcraft-8951000212-20260927",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951000212",
			"sourceLabel": "Rodcraft, fiche technique officielle RC7173, réf. 8951000212",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 9 L/s. Valeur retenue : 540 L/min (maximum des régimes documentés, L/s × 60)."
		},
		{
			"id": "review:2026-11-06-followup:rodcraft-rc7173:1",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951000212",
			"sourceLabel": "Rodcraft, revue documentaire du 6 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Meuleuse 125 mm, M14, article 8951000212 ; les 9 L/s en charge restent distincts du plafond dynamique 6,3 bar. Le moteur ne doit pas appairer ces champs sans preuve de mesure. SHA-256 du document complet : b77ef6bca9d2dd4f32eb8d1f20ddeef844cb08f0d738b485cf92929dd7c7781a."
		},
		{
			"id": "review:2026-11-06-copy:rodcraft-rc7173",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951000212",
			"sourceLabel": "Rodcraft, clarification des conditions de dimensionnement",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Alignement des textes sur le régime non dimensionnant déjà utilisé par le moteur. Valeurs documentaires et conditions de service conservées ; SHA-256 b77ef6bca9d2dd4f32eb8d1f20ddeef844cb08f0d738b485cf92929dd7c7781a."
		}
	],
	"fieldSources": {
		"mpn": [
			"rodcraft-8951000212-20260927"
		],
		"workingPressureBar": [
			"rodcraft-8951000212-20260927"
		],
		"demandExplanation": [
			"review:2026-11-06-followup:rodcraft-rc7173:1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "La pression de mesure de la consommation publiée reste à documenter. Les valeurs et leur régime sont conservés dans les spécifications, hors calcul de compatibilité."
};

export default product;
