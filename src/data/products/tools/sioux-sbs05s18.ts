import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-sbs05s18",
	"slug": "sioux-sbs05s18",
	"brand": "Sioux",
	"model": "SBS05S18",
	"mpn": "SBS05S18",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "Sioux SBS05S18",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-sbs05s18-20261106.svg",
		"alt": "Repères techniques Sioux SBS05S18, référence SBS05S18",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=65",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux SBS05S18, référence SBS05S18. Consommation publiée de régime non précisé ; le dimensionnement reste indéterminé. Vitesse de broche : 18000 tr/min. Dimensions de bande : 3/4 x 18 pouces. Masse : 1.3 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 11.0 L/s (23.0 scfm). Le régime de cette consommation n’est pas précisé dans la ligne propre à la référence. Conversion documentaire : 660 L/min (L/s × 60) ; hors dimensionnement en charge.",
			"Référence fabricant : SBS05S18.",
			"Vitesse de broche : 18000 tr/min.",
			"Dimensions de bande : 3/4 x 18 pouces.",
			"Masse : 1.3 kg."
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
				"sioux-sbs05s18-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 11.0 L/s (23.0 scfm). Le régime de cette consommation n’est pas précisé dans la ligne propre à la référence. Conversion documentaire : 660 L/min (L/s × 60) ; hors dimensionnement en charge.",
			"evidenceIds": [
				"sioux-sbs05s18-20260927"
			]
		},
		{
			"label": "Vitesse de broche",
			"value": "18000 tr/min",
			"evidenceIds": [
				"sioux-sbs05s18-20260927"
			]
		},
		{
			"label": "Dimensions de bande",
			"value": "3/4 x 18 pouces",
			"evidenceIds": [
				"sioux-sbs05s18-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "1.3 kg",
			"evidenceIds": [
				"sioux-sbs05s18-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "360 mm",
			"evidenceIds": [
				"sioux-sbs05s18-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-sbs05s18-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=65",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 65, réf. SBS05S18",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 11.0 L/s (23.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 660 L/min (L/s × 60)."
		},
		{
			"id": "sioux-sbs05s18-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=65",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 65",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		},
		{
			"id": "review:2026-11-06-followup:sioux-sbs05s18:1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=65",
			"sourceLabel": "Sioux, revue documentaire du 6 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "P65 :SBS05S18bande3/4×18pouces/18000rpm/1,3kg/360mm;S18-4bande1/2.11Ls de régime non précisé:660Lmin documentaires, pas maximum malgré noteperformance6,2bar. SHA-256 du document complet : 2a5030b584ce6f8bd5613ebbee0b33b66a620e82e26c83d2524cbbf055dd8bf8."
		},
		{
			"id": "review:2026-11-06-copy:sioux-sbs05s18",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=65",
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
			"sioux-sbs05s18-20260927"
		],
		"workingPressureBar": [
			"sioux-sbs05s18-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-sbs05s18-20260927"
		],
		"airflowBasis": [
			"review:2026-11-06-followup:sioux-sbs05s18:1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 660,
		"typical": 660,
		"max": 660
	},
	"airflowBasis": "unqualified"
};

export default product;
