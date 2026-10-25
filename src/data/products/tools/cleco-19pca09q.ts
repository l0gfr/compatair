import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cleco-19pca09q",
	"slug": "cleco-19pca09q",
	"brand": "Cleco",
	"model": "19PCA09Q",
	"mpn": "19PCA09Q",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Cleco 19PCA09Q",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cleco-19pca09q.webp",
		"alt": "Repères techniques Cleco 19PCA09Q, référence 19PCA09Q",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=69",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "La Cleco 19PCA09Q privilégie la plage de couple : 1,7 à 8,9 Nm à 470 tr/min, contre 1,7 à 6,8 Nm et 660 tr/min pour la 19PCA07Q. Son corps mesure 248 mm au lieu de 216 mm. La note de série donne 310 L/min à 6,2 bar, sans préciser un maximum ou une consommation en charge.",
		"verifiedFacts": [
			"19PCA09Q contre 19PCA07Q : 470 contre 660 tr/min, couple 1,7–8,9 contre 1,7–6,8 Nm, longueur 248 contre 216 mm. Les deux partagent la mention générale de 310 L/min ; le régime n’est pas qualifié.",
			"Le régime de la consommation publiée n’est pas précisé ; cette valeur n’est pas assimilée à un maximum de travail."
		],
		"limitations": [
			"Le régime de consommation n’est pas qualifié : aucun verdict de compatibilité ne se déduit de cette seule valeur.",
			"La mention générale de 310 L/min ne devient ni une moyenne ni un maximum.",
			"Catalogue GI-1250-EU : identifier la révision effectivement livrée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Performances publiées à 6,2 bar à l’entrée de l’outil, note de la page 69.",
			"evidenceIds": [
				"cleco-19pca09q-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation générale publiée de 310 L/min pour la série 19 ; le catalogue ne la qualifie pas de maximum ou de moyenne.",
			"evidenceIds": [
				"cleco-19pca09q-20260926"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "1.7 à 8.9 Nm",
			"evidenceIds": [
				"cleco-19pca09q-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "470 tr/min",
			"evidenceIds": [
				"cleco-19pca09q-20260926"
			]
		},
		{
			"label": "Série et commande",
			"value": "19P ; appui et gâchette",
			"evidenceIds": [
				"cleco-19pca09q-20260926"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "248 mm",
			"evidenceIds": [
				"cleco-19pca09q-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.7 kg",
			"evidenceIds": [
				"cleco-19pca09q-20260926"
			]
		},
		{
			"label": "Sortie",
			"value": "Porte-embout rapide 1/4 pouce",
			"evidenceIds": [
				"cleco-19pca09q-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "cleco-19pca09q-20260926",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=69",
			"sourceLabel": "Cleco et Master Power, catalogue GI-1250-EU, p. 69, réf. 19PCA09Q",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation générale publiée de 310 L/min pour la série 19 ; le catalogue ne la qualifie pas de maximum ou de moyenne."
		},
		{
			"id": "review-20261025-cleco-19pca09q-s031",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=69",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s031, pages PDF 69",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:28.474428+00:00, SHA-256 8668d5e77a6b2469dc9b9012841e65bbfb947234a8087faa6fdd90384b3babac. 19PCA09Q contre 19PCA07Q : 470 contre 660 tr/min, couple 1,7–8,9 contre 1,7–6,8 Nm, longueur 248 contre 216 mm. Les deux partagent la mention générale de 310 L/min ; le régime n’est pas qualifié. Limite : Ajouter airflowBasis=unqualified ; le texte de réserve seul laisse actuellement le moteur produire un verdict."
		}
	],
	"fieldSources": {
		"mpn": [
			"cleco-19pca09q-20260926"
		],
		"workingPressureBar": [
			"cleco-19pca09q-20260926"
		],
		"airflowLpm": [
			"cleco-19pca09q-20260926",
			"review-20261025-cleco-19pca09q-s031"
		],
		"airflowBasis": [
			"review-20261025-cleco-19pca09q-s031"
		],
		"connectorSize": [
			"review-20261025-cleco-19pca09q-s031"
		],
		"recommendedHose": [
			"review-20261025-cleco-19pca09q-s031"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : Ajouter airflowBasis=unqualified ; le texte de réserve seul laisse actuellement le moteur produire un verdict."
	],
	"airflowLpm": {
		"min": 310,
		"typical": 310,
		"max": 310
	},
	"airflowBasis": "unqualified",
	"connectorSize": "1/4\" NPT",
	"recommendedHose": {
		"innerDiameterMm": 9.525
	}
};

export default product;
