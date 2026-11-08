import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-srw07-38",
	"slug": "sioux-srw07-38",
	"brand": "Sioux",
	"model": "SRW07-38",
	"mpn": "SRW07-38",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Sioux SRW07-38",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-srw07-38-20261106.svg",
		"alt": "Repères techniques Sioux SRW07-38, référence SRW07-38",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=37",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux SRW07-38, référence SRW07-38. Consommation publiée de régime non précisé ; le dimensionnement reste indéterminé. Vitesse à vide : 260 tr/min. Couple publié : 88 Nm. Carré : 10 mm.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 14.0 L/s (30.0 scfm). Le régime de cette consommation n’est pas précisé dans la ligne propre à la référence. Conversion documentaire : 840 L/min (L/s × 60) ; hors dimensionnement en charge.",
			"Référence fabricant : SRW07-38.",
			"Vitesse à vide : 260 tr/min.",
			"Couple publié : 88 Nm.",
			"Carré : 10 mm."
		],
		"limitations": [
			"Caractéristiques déclarées par le constructeur ; aucune mesure physique réalisée par CompatAir.",
			"La présence au catalogue fabricant ne prouve ni le stock d’un distributeur, ni un volume de ventes.",
			"Le régime de consommation publié est non précisé. Cette valeur reste documentaire et le moteur renvoie insufficient_data."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"evidenceIds": [
				"sioux-srw07-38-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 14.0 L/s (30.0 scfm). Le régime de cette consommation n’est pas précisé dans la ligne propre à la référence. Conversion documentaire : 840 L/min (L/s × 60) ; hors dimensionnement en charge.",
			"evidenceIds": [
				"sioux-srw07-38-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "260 tr/min",
			"evidenceIds": [
				"sioux-srw07-38-20260927"
			]
		},
		{
			"label": "Couple publié",
			"value": "88 Nm",
			"evidenceIds": [
				"sioux-srw07-38-20260927"
			]
		},
		{
			"label": "Carré",
			"value": "10 mm",
			"evidenceIds": [
				"sioux-srw07-38-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "1.3 kg",
			"evidenceIds": [
				"sioux-srw07-38-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-srw07-38-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=37",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 37, réf. SRW07-38",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 14.0 L/s (30.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 840 L/min (L/s × 60)."
		},
		{
			"id": "sioux-srw07-38-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=37",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 37",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		},
		{
			"id": "review:2026-11-06-followup:sioux-srw07-38:1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=37",
			"sourceLabel": "Sioux, revue documentaire du 6 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "P37 :SRW0738carré3/8/88Nm/260rpm/1,3kg,version50carré1/2.14Ls de régime non précisé:840Lmin ne constituent pas un maximum encharge. Préserver la distinction de carré. SHA-256 du document complet : 2a5030b584ce6f8bd5613ebbee0b33b66a620e82e26c83d2524cbbf055dd8bf8."
		},
		{
			"id": "review:2026-11-06-copy:sioux-srw07-38",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=37",
			"sourceLabel": "Sioux, clarification des conditions de dimensionnement",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Alignement des textes sur le régime non dimensionnant déjà utilisé par le moteur. Valeurs documentaires et conditions de service conservées ; SHA-256 2a5030b584ce6f8bd5613ebbee0b33b66a620e82e26c83d2524cbbf055dd8bf8."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-srw07-38-20260927"
		],
		"workingPressureBar": [
			"sioux-srw07-38-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-srw07-38-20260927"
		],
		"airflowBasis": [
			"review:2026-11-06-followup:sioux-srw07-38:1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 840,
		"typical": 840,
		"max": 840
	},
	"airflowBasis": "unqualified"
};

export default product;
