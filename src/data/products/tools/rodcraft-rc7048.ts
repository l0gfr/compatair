import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rodcraft-rc7048",
	"slug": "rodcraft-rc7048",
	"brand": "Rodcraft",
	"model": "RC7048",
	"mpn": "8951000276",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Rodcraft RC7048",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rodcraft-rc7048.webp",
		"alt": "Repères techniques Rodcraft RC7048, référence 8951000276",
		"sourceUrl": "https://www.rodcraft.com/en/products/8951000276",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Rodcraft RC7048. La RC7048 est la meuleuse droite de 250 mm, 400 W et 27 000 tr/min ; la même famille comprend aussi des versions à tête 90 degrés, à ne pas fusionner. Le débit 3,8 L/s est annoncé en charge. Le maximum dynamique d’entrée de 6,3 bar n’établit pas à lui seul sa pression de mesure.",
		"verifiedFacts": [
			"Type : Meuleuse droite, sortie arrière.",
			"Pince maximale : 6 mm, libellé constructeur 15/64 pouce.",
			"Vitesse : 27 000 tr/min.",
			"Puissance maximale : 400 W.",
			"Longueur : 250 mm.",
			"Masse : 0,8 kg.",
			"Débit en charge publié : 3,8 L/s (228 L/min)."
		],
		"limitations": [
			"Pression de mesure de consommation non explicitement appariée au débit en charge. Le calcul demeure indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Type",
			"value": "Meuleuse droite, sortie arrière",
			"evidenceIds": [
				"rodcraft-rc7048-reserved-20261103-1"
			]
		},
		{
			"label": "Pince maximale",
			"value": "6 mm, libellé constructeur 15/64 pouce",
			"evidenceIds": [
				"rodcraft-rc7048-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse",
			"value": "27 000 tr/min",
			"evidenceIds": [
				"rodcraft-rc7048-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance maximale",
			"value": "400 W",
			"evidenceIds": [
				"rodcraft-rc7048-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "250 mm",
			"evidenceIds": [
				"rodcraft-rc7048-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,8 kg",
			"evidenceIds": [
				"rodcraft-rc7048-reserved-20261103-1"
			]
		},
		{
			"label": "Débit en charge publié",
			"value": "3,8 L/s (228 L/min)",
			"evidenceIds": [
				"rodcraft-rc7048-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "rodcraft-8951000276-20260927",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951000276",
			"sourceLabel": "Rodcraft, fiche technique officielle RC7048, réf. 8951000276",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 3.8 L/s. Valeur retenue : 228 L/min (maximum des régimes documentés, L/s × 60)."
		},
		{
			"id": "rodcraft-rc7048-reserved-20261103-1",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951000276",
			"sourceLabel": "Rodcraft : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 cb870300cec5e34b591cf43a7835961d7fec3a88598cf4dfbaff8d63117377f6. La RC7048 est la meuleuse droite de 250 mm, 400 W et 27 000 tr/min ; la même famille comprend aussi des versions à tête 90 degrés, à ne pas fusionner. Le débit 3,8 L/s est annoncé en charge. Le maximum dynamique d’entrée de 6,3 bar n’établit pas à lui seul sa pression de mesure."
		}
	],
	"fieldSources": {
		"mpn": [
			"rodcraft-8951000276-20260927"
		],
		"workingPressureBar": [
			"rodcraft-rc7048-reserved-20261103-1"
		],
		"demandModel": [
			"rodcraft-rc7048-reserved-20261103-1"
		],
		"demandExplanation": [
			"rodcraft-rc7048-reserved-20261103-1"
		],
		"editorial": [
			"rodcraft-rc7048-reserved-20261103-1"
		],
		"specifications": [
			"rodcraft-rc7048-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Le débit en charge est conservé dans les spécifications ; la fiche indique séparément le plafond de pression, sans appariement explicite de la mesure."
};

export default product;
