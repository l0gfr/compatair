import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cleco-19pca03q",
	"slug": "cleco-19pca03q",
	"brand": "Cleco",
	"model": "19PCA03Q",
	"mpn": "19PCA03Q",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Cleco 19PCA03Q",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cleco-19pca03q.webp",
		"alt": "Repères techniques Cleco 19PCA03Q, référence 19PCA03Q",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=69",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "19PCA03Q : 1 900 tr/min et 0,6 à 2,9 Nm, contre 2 800 tr/min et 0,6 à 2,1 Nm pour la 19PCA02Q. Le choix porte sur la vitesse et le couple de l’assemblage ; la série déclare les mêmes 310 L/min à 6,2 bar.",
		"verifiedFacts": [
			"Performances publiées à 6,2 bar à l’entrée de l’outil, note de la page 69.",
			"Consommation générale publiée de 310 L/min pour la série 19 ; le catalogue ne la qualifie pas de maximum ou de moyenne.",
			"Référence fabricant : 19PCA03Q.",
			"Plage de couple publiée : 0.6 à 2.9 Nm.",
			"Vitesse à vide publiée : 1900 tr/min.",
			"Série et commande : 19P ; appui et gâchette."
		],
		"limitations": [
			"La consommation générale n’est qualifiée ni de maximum, ni de moyenne, ni de débit en charge. Le dimensionnement reste indéterminé.",
			"La plage de couple publiée ne remplace pas le réglage et la validation sur l’assemblage exact."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Performances publiées à 6,2 bar à l’entrée de l’outil, note de la page 69.",
			"evidenceIds": [
				"cleco-19pca03q-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation générale publiée de 310 L/min pour la série 19 ; le catalogue ne la qualifie pas de maximum ou de moyenne.",
			"evidenceIds": [
				"cleco-19pca03q-20260926"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "0.6 à 2.9 Nm",
			"evidenceIds": [
				"cleco-19pca03q-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "1900 tr/min",
			"evidenceIds": [
				"cleco-19pca03q-20260926"
			]
		},
		{
			"label": "Série et commande",
			"value": "19P ; appui et gâchette",
			"evidenceIds": [
				"cleco-19pca03q-20260926"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "211 mm",
			"evidenceIds": [
				"cleco-19pca03q-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.7 kg",
			"evidenceIds": [
				"cleco-19pca03q-20260926"
			]
		},
		{
			"label": "Sortie",
			"value": "Porte-embout rapide 1/4 pouce",
			"evidenceIds": [
				"cleco-19pca03q-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "cleco-19pca03q-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=69",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 69, réf. 19PCA03Q",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation générale publiée de 310 L/min pour la série 19 ; le catalogue ne la qualifie pas de maximum ou de moyenne."
		}
	],
	"fieldSources": {
		"mpn": [
			"cleco-19pca03q-20260926"
		],
		"workingPressureBar": [
			"cleco-19pca03q-20260926"
		],
		"airflowLpm": [
			"cleco-19pca03q-20260926"
		],
		"airflowBasis": [
			"cleco-19pca03q-20260926"
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
