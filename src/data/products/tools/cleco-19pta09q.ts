import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cleco-19pta09q",
	"slug": "cleco-19pta09q",
	"brand": "Cleco",
	"model": "19PTA09Q",
	"mpn": "19PTA09Q",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Cleco 19PTA09Q",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cleco-19pta09q-technical-20261116-reviews.svg",
		"alt": "Repères techniques Cleco 19PTA09Q, référence 19PTA09Q",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "La 19PTA09Q est la version pistolet à gâchette de 1,7 à 8,9 Nm et 470 tr/min. Les 19PTA02Q et 03Q atteignent 2 800 et 1 900 tr/min avec des plages de couple plus basses. Les 310 L/min communs à la série ne décrivent pas le régime de mesure ; le calcul de débit reste non conclusif.",
		"verifiedFacts": [
			"Performances publiées à 6,2 bar à l’entrée de l’outil, note de la page 69.",
			"Consommation générale publiée de 310 L/min pour la série 19 ; le catalogue ne la qualifie pas de maximum ou de moyenne.",
			"Référence fabricant : 19PTA09Q.",
			"Plage de couple publiée : 1.7 à 8.9 Nm.",
			"Vitesse à vide publiée : 470 tr/min.",
			"Série et commande : 19P ; gâchette."
		],
		"limitations": [
			"Données de catalogue industriel, sans essai physique CompatAir. Disponibilité et révision livrée à confirmer avec le fournisseur.",
			"Source : catalogue GI-1250-EU, édition archivée du fabricant. Vérifier la référence et la notice de la révision effectivement livrée.",
			"Le régime de mesure de la consommation publiée reste non précisé. Cette valeur documentaire ne permet pas de conclure au débit requis en charge."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Performances publiées à 6,2 bar à l’entrée de l’outil, note de la page 69.",
			"evidenceIds": [
				"cleco-19pta09q-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation générale publiée de 310 L/min pour la série 19 ; le catalogue ne la qualifie pas de maximum ou de moyenne.",
			"evidenceIds": [
				"cleco-19pta09q-20260926"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "1.7 à 8.9 Nm",
			"evidenceIds": [
				"cleco-19pta09q-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "470 tr/min",
			"evidenceIds": [
				"cleco-19pta09q-20260926"
			]
		},
		{
			"label": "Série et commande",
			"value": "19P ; gâchette",
			"evidenceIds": [
				"cleco-19pta09q-20260926"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "248 mm",
			"evidenceIds": [
				"cleco-19pta09q-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.7 kg",
			"evidenceIds": [
				"cleco-19pta09q-20260926"
			]
		},
		{
			"label": "Sortie",
			"value": "Porte-embout rapide 1/4 pouce",
			"evidenceIds": [
				"cleco-19pta09q-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "cleco-19pta09q-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=69",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 69, réf. 19PTA09Q",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation générale publiée de 310 L/min pour la série 19 ; le catalogue ne la qualifie pas de maximum ou de moyenne."
		},
		{
			"id": "review:2026-11-16-reviews:cleco-19pta09q:0",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf",
			"sourceLabel": "Cleco, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La 19PTA09Q est la version pistolet à gâchette de 1,7 à 8,9 Nm et 470 tr/min. Les 19PTA02Q et 03Q atteignent 2 800 et 1 900 tr/min avec des plages de couple plus basses. Les 310 L/min communs à la série ne décrivent pas le régime de mesure ; le calcul de débit reste non conclusif. GET complet SHA-256 8668d5e77a6b2469dc9b9012841e65bbfb947234a8087faa6fdd90384b3babac. Pages PDF lues : 69."
		}
	],
	"fieldSources": {
		"mpn": [
			"cleco-19pta09q-20260926"
		],
		"workingPressureBar": [
			"cleco-19pta09q-20260926"
		],
		"airflowLpm": [
			"cleco-19pta09q-20260926"
		],
		"airflowBasis": [
			"review:2026-11-16-reviews:cleco-19pta09q:0"
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
