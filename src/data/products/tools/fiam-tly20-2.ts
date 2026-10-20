import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-tly20-2",
	"slug": "fiam-tly20-2",
	"brand": "Fiam",
	"model": "TLY20-2",
	"mpn": "166350103",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "Fiam TLY20-2",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-tly20-2.webp",
		"alt": "Repères techniques Fiam TLY20-2, référence 166350103",
		"sourceUrl": "https://www.fiamgroup.com/en/products/air-tools-for-cutting/tly20-2/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "TLY20-2 166350103 : cisaille pour tôle, capacité publiée de 1,8 mm et vitesse de 3 500 tr/min. La TLS12 voisine publie 1,2 mm et 6 500 tr/min. La TLY20-2 demande 13 L/s à 6,3 bar, soit 780 L/min, contre 540 pour la TLS12. Le type de tôle et le jeu de coupe doivent accompagner cette comparaison de capacité et d’air.",
		"verifiedFacts": [
			"La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"La fiche fabricant publie 13 L/s, soit 780 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"Référence fabricant : 166350103.",
			"Vitesse à vide : 3500 tr/min.",
			"Masse publiée : 1.55 kg.",
			"Dimensions publiées : Ø 46 x L 290 mm."
		],
		"limitations": [
			"La capacité de tôle ne couvre pas toute nuance ni toute géométrie. Le régime de consommation n’est pas précisé et ne permet pas un verdict positif en charge.",
			"Le couple éventuel est indicatif : l’assemblage, l’accessoire et la pression dynamique influencent le résultat.",
			"Consommation déclarée par le fabricant, sans essai indépendant ni garantie d’un maximum à tous les régimes."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La brochure associée à cette fiche indique une pression de mesure et d’utilisation recommandée de 6,3 bar (ISO 2787).",
			"evidenceIds": [
				"fiam-166350103-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie 13 L/s, soit 780 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML.",
			"evidenceIds": [
				"fiam-166350103-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3500 tr/min",
			"evidenceIds": [
				"fiam-166350103-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.55 kg",
			"evidenceIds": [
				"fiam-166350103-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "Ø 46 x L 290 mm",
			"evidenceIds": [
				"fiam-166350103-20260926"
			]
		},
		{
			"label": "Démarrage",
			"value": "Lever start",
			"evidenceIds": [
				"fiam-166350103-20260926"
			]
		},
		{
			"label": "Puissance",
			"value": "400 W",
			"evidenceIds": [
				"fiam-166350103-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-166350103-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-tools-for-cutting/tly20-2/",
			"sourceLabel": "Fiam, fiche technique TLY20-2, réf. 166350103",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 13 L/s, soit 780 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-166350103-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-1.pdf#page=4",
			"sourceLabel": "Fiam, brochure technique en-1, p. 4",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		},
		{
			"id": "fiam-164650102-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-tools-for-cutting/tls12/",
			"sourceLabel": "Fiam, fiche technique TLS12, réf. 164650102",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 9 L/s, soit 540 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-164650102-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-1.pdf#page=4",
			"sourceLabel": "Fiam, brochure technique en-1, p. 4",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-166350103-20260926"
		],
		"workingPressureBar": [
			"fiam-166350103-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-166350103-20260926"
		],
		"airflowBasis": [
			"fiam-166350103-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 780,
		"typical": 780,
		"max": 780
	},
	"airflowBasis": "unqualified"
};

export default product;
