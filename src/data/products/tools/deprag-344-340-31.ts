import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "deprag-344-340-31",
	"slug": "deprag-344-340-31",
	"brand": "DEPRAG",
	"model": "344-340-31",
	"mpn": "389730A",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 344-340-31",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-344-340-31.webp",
		"alt": "Repères techniques DEPRAG 344-340-31, référence 389730A",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3130/D3130en.pdf#page=12",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "DEPRAG 344-340-31. La 344-340-31, code 389730A, est la broche à rotation et coupure à droite, 4–8 Nm et 2 800 tr/min. La version réversible 344-340-31U, code 384210A, donne 3,5–6,5 Nm et 2 400 tr/min. Le tableau relie les performances à 6,3 bar, mais ne nomme pas le régime de consommation : les 1 100 L/min ne deviennent pas un maximum par défaut.",
		"verifiedFacts": [
			"Commande : Rotation et coupure à droite, départ à distance.",
			"Plage de couple : 4–8 Nm.",
			"Vitesse à vide : 2 800 tr/min.",
			"Masse : 2,5 kg.",
			"Entraînement interne : F6,3, 1/4 pouce.",
			"Consommation, régime non précisé : 1,1 m³/min à 6,3 bar."
		],
		"limitations": [
			"Le régime de consommation n’est pas précisé ; la valeur reste non dimensionnante et le verdict demeure insufficient_data."
		]
	},
	"specifications": [
		{
			"label": "Commande",
			"value": "Rotation et coupure à droite, départ à distance",
			"evidenceIds": [
				"deprag-344-340-31-reserved-20261103-1"
			]
		},
		{
			"label": "Plage de couple",
			"value": "4–8 Nm",
			"evidenceIds": [
				"deprag-344-340-31-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2 800 tr/min",
			"evidenceIds": [
				"deprag-344-340-31-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "2,5 kg",
			"evidenceIds": [
				"deprag-344-340-31-reserved-20261103-1"
			]
		},
		{
			"label": "Entraînement interne",
			"value": "F6,3, 1/4 pouce",
			"evidenceIds": [
				"deprag-344-340-31-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation, régime non précisé",
			"value": "1,1 m³/min à 6,3 bar",
			"evidenceIds": [
				"deprag-344-340-31-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-389730a-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3130/D3130en.pdf#page=12",
			"sourceLabel": "DEPRAG, brochure technique D3130en, p. 12, réf. 389730A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		},
		{
			"id": "deprag-344-340-31-reserved-20261103-1",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3130/D3130en.pdf#page=12",
			"sourceLabel": "DEPRAG : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9d445214624acd388e222274452a61e9bc2026c82f3d78fae74d146516a75dbd. La 344-340-31, code 389730A, est la broche à rotation et coupure à droite, 4–8 Nm et 2 800 tr/min. La version réversible 344-340-31U, code 384210A, donne 3,5–6,5 Nm et 2 400 tr/min. Le tableau relie les performances à 6,3 bar, mais ne nomme pas le régime de consommation : les 1 100 L/min ne deviennent pas un maximum par défaut."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-389730a-20260926"
		],
		"workingPressureBar": [
			"deprag-389730a-20260926"
		],
		"airflowLpm": [
			"deprag-389730a-20260926"
		],
		"airflowBasis": [
			"deprag-344-340-31-reserved-20261103-1"
		],
		"editorial": [
			"deprag-344-340-31-reserved-20261103-1"
		],
		"specifications": [
			"deprag-344-340-31-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1100,
		"typical": 1100,
		"max": 1100
	},
	"airflowBasis": "unqualified"
};

export default product;
