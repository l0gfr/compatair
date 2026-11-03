import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cleco-19pta05q",
	"slug": "cleco-19pta05q",
	"brand": "Cleco",
	"model": "19PTA05Q",
	"mpn": "19PTA05Q",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Cleco 19PTA05Q",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cleco-19pta05q.webp",
		"alt": "Repères techniques Cleco 19PTA05Q, référence 19PTA05Q",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=69",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Cleco 19PTA05Q. La 19PTA05Q est la visseuse pistolet à gâchette, 1,1–5,1 Nm et 660 tr/min. La 19PTA06Q garde la même plage de couple à 260 tr/min ; la 19PTA04Q donne 1,1–4,5 Nm à 1 100 tr/min. Les 310 L/min sont publiés pour la série sans régime défini, malgré les conditions de pression 6,2 bar : ils cessent de fournir une demande maximale.",
		"verifiedFacts": [
			"Commande : Pistolet à gâchette, série 19P.",
			"Plage de couple : 1,1–5,1 Nm.",
			"Vitesse à vide : 660 tr/min.",
			"Longueur : 214 mm.",
			"Masse : 0,7 kg.",
			"Consommation de série, régime non précisé : 310 L/min."
		],
		"limitations": [
			"La vitesse, la puissance et la cadence ne remplacent pas une consommation maximale/en charge documentée avec ses conditions. Les données insuffisantes restent hors calcul conclusif."
		]
	},
	"specifications": [
		{
			"label": "Commande",
			"value": "Pistolet à gâchette, série 19P",
			"evidenceIds": [
				"cleco-19pta05q-reserved-20261103-1"
			]
		},
		{
			"label": "Plage de couple",
			"value": "1,1–5,1 Nm",
			"evidenceIds": [
				"cleco-19pta05q-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "660 tr/min",
			"evidenceIds": [
				"cleco-19pta05q-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "214 mm",
			"evidenceIds": [
				"cleco-19pta05q-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,7 kg",
			"evidenceIds": [
				"cleco-19pta05q-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation de série, régime non précisé",
			"value": "310 L/min",
			"evidenceIds": [
				"cleco-19pta05q-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "cleco-19pta05q-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=69",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 69, réf. 19PTA05Q",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation générale publiée de 310 L/min pour la série 19 ; le catalogue ne la qualifie pas de maximum ou de moyenne."
		},
		{
			"id": "cleco-19pta05q-reserved-20261103-1",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=69",
			"sourceLabel": "Cleco : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 8668d5e77a6b2469dc9b9012841e65bbfb947234a8087faa6fdd90384b3babac. La 19PTA05Q est la visseuse pistolet à gâchette, 1,1–5,1 Nm et 660 tr/min. La 19PTA06Q garde la même plage de couple à 260 tr/min ; la 19PTA04Q donne 1,1–4,5 Nm à 1 100 tr/min. Les 310 L/min sont publiés pour la série sans régime défini, malgré les conditions de pression 6,2 bar : ils cessent de fournir une demande maximale."
		}
	],
	"fieldSources": {
		"mpn": [
			"cleco-19pta05q-20260926"
		],
		"workingPressureBar": [
			"cleco-19pta05q-20260926"
		],
		"airflowLpm": [
			"cleco-19pta05q-20260926"
		],
		"airflowBasis": [
			"cleco-19pta05q-reserved-20261103-1"
		],
		"editorial": [
			"cleco-19pta05q-reserved-20261103-1"
		],
		"specifications": [
			"cleco-19pta05q-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 310,
		"typical": 310,
		"max": 310
	},
	"airflowBasis": "unqualified"
};

export default product;
