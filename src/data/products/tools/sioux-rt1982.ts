import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-rt1982",
	"slug": "sioux-rt1982",
	"brand": "Sioux",
	"model": "RT1982",
	"mpn": "RT1982",
	"categoryId": "detoureuse",
	"category": "detoureuse",
	"label": "Sioux RT1982",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-rt1982-technical-20261116-reviews.svg",
		"alt": "Repères techniques Sioux RT1982, référence RT1982",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "La RT1982 est une défonceuse à pince 3/8 pouce, base de 152 mm et hauteur de 211 mm, à 20 000 tr/min. La RT1983 utilise une pince 1/2 pouce dans cette géométrie ; la RT1981 est plus basse et plus légère. Le diamètre de queue de fraise et le gabarit guident le choix. Les 18 L/s du catalogue restent documentaires avec leur convention générale, sans les présenter comme un point en charge propre au modèle.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 18.0 L/s (38.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1080 L/min (L/s × 60).",
			"Référence fabricant : RT1982.",
			"Vitesse à vide : 20000 tr/min.",
			"Pince : 3/8\".",
			"Masse : 3.4 kg."
		],
		"limitations": [
			"Caractéristiques déclarées par le constructeur ; aucune mesure physique réalisée par CompatAir.",
			"La présence au catalogue fabricant ne prouve ni le stock d’un distributeur, ni un volume de ventes.",
			"La pression de service n’atteste pas la pression de mesure de consommation. Le régime ou l’appariement documentaire reste non qualifié ; aucune consommation dimensionnante n’est conservée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"evidenceIds": [
				"sioux-rt1982-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 18.0 L/s (38.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1080 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-rt1982-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "20000 tr/min",
			"evidenceIds": [
				"sioux-rt1982-20260927"
			]
		},
		{
			"label": "Pince",
			"value": "3/8\"",
			"evidenceIds": [
				"sioux-rt1982-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "3.4 kg",
			"evidenceIds": [
				"sioux-rt1982-20260927"
			]
		},
		{
			"label": "Hauteur",
			"value": "211 mm",
			"evidenceIds": [
				"sioux-rt1982-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-rt1982-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=81",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 81, réf. RT1982",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 18.0 L/s (38.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 1080 L/min (L/s × 60)."
		},
		{
			"id": "sioux-rt1982-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=81",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 81",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		},
		{
			"id": "review:2026-11-16-reviews:sioux-rt1982:0",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx",
			"sourceLabel": "Sioux, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La RT1982 est une défonceuse à pince 3/8 pouce, base de 152 mm et hauteur de 211 mm, à 20 000 tr/min. La RT1983 utilise une pince 1/2 pouce dans cette géométrie ; la RT1981 est plus basse et plus légère. Le diamètre de queue de fraise et le gabarit guident le choix. Les 18 L/s du catalogue restent documentaires avec leur convention générale, sans les présenter comme un point en charge propre au modèle. GET complet SHA-256 2a5030b584ce6f8bd5613ebbee0b33b66a620e82e26c83d2524cbbf055dd8bf8. Pages PDF lues : 81."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-rt1982-20260927"
		],
		"workingPressureBar": [
			"sioux-rt1982-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-rt1982-20260927"
		],
		"airflowBasis": [
			"review:2026-11-16-reviews:sioux-rt1982:0"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1080,
		"typical": 1080,
		"max": 1080
	},
	"airflowBasis": "unqualified"
};

export default product;
