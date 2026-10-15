import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "shinano-si-1305",
	"slug": "shinano-si-1305",
	"brand": "Shinano",
	"model": "SI-1305",
	"mpn": "SI-1305",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Shinano SI-1305",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/shinano-si-1305.webp",
		"alt": "Repères techniques Shinano SI-1305, référence SI-1305",
		"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=4",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "La SI-1305 est une clé à chocs compacte à commande papillon. Sa comparaison avec la SI-1355 montre pourquoi deux outils annoncés à 90 Nm ne demandent pas exactement la même alimentation ni le même accès.",
		"verifiedFacts": [
			"Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"Colonne Max Air Consumption : 16.8 CFM / 7.9 L/s. Conversion du maximum publié : 7.9 × 60 = 474 L/min.",
			"Référence fabricant : SI-1305.",
			"Couple maximal publié : 90 Nm.",
			"Vitesse à vide publiée : 9 000 tr/min.",
			"Masse publiée : 0,94 kg.",
			"Les SI-1305 et SI-1355 partagent un carré de 3/8 pouce, une plage de travail de 0–75 Nm et 9 000 tr/min à vide. Leurs maxima d’air diffèrent : 7,9 et 7,6 L/s, soit 474 et 456 L/min ; l’écart calculé est de 18 L/min.",
			"La SI-1305 pèse 0,94 kg contre 1,12 kg pour la SI-1355. Son entrée d’air orientable et sa commande papillon changent la prise en main ; ces différences doivent accompagner le choix pour une zone encombrée."
		],
		"limitations": [
			"Caractéristiques déclarées par Shinano, sans essai physique CompatAir.",
			"La consommation moyenne, lorsqu’elle est également publiée, n’est pas utilisée à la place de la consommation de référence.",
			"La taille de raccord ne suffit pas à établir son profil de filetage ; vérifier la version livrée.",
			"Ni les 90 Nm maximaux ni les 18 L/min d’écart ne garantissent le même temps de desserrage sur une fixation réelle. Prévoir le contrôle du serrage final et la compatibilité des douilles séparément."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue général 2025, page PDF 43 (page imprimée 83), indique 0,63 MPa, soit 6,3 bar, outil en fonctionnement et commande entièrement actionnée.",
			"evidenceIds": [
				"shinano-si-1305-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Colonne Max Air Consumption : 16.8 CFM / 7.9 L/s. Conversion du maximum publié : 7.9 × 60 = 474 L/min.",
			"evidenceIds": [
				"shinano-si-1305-20260926"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "90 Nm",
			"evidenceIds": [
				"shinano-si-1305-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "9 000 tr/min",
			"evidenceIds": [
				"shinano-si-1305-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,94 kg",
			"evidenceIds": [
				"shinano-si-1305-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "shinano-si-1305-20260926",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=4",
			"sourceLabel": "Shinano, catalogue général 2025, p. 4, réf. SI-1305",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Colonne Max Air Consumption : 16.8 CFM / 7.9 L/s. Conversion du maximum publié : 7.9 × 60 = 474 L/min."
		},
		{
			"id": "shinano-si-1305-20260926-workingpressurebar-1",
			"sourceUrl": "https://shinanoinc.com/wp-content/uploads/SHINANO_General-Catalog_2025.pdf#page=43",
			"sourceLabel": "Shinano, catalogue général 2025, p. 43",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression publiée outil en fonctionnement, tableau Air Supply System. Ce modèle figure dans le même catalogue."
		}
	],
	"fieldSources": {
		"mpn": [
			"shinano-si-1305-20260926"
		],
		"workingPressureBar": [
			"shinano-si-1305-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"shinano-si-1305-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 474,
		"typical": 474,
		"max": 474
	}
};

export default product;
