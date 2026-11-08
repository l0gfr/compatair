import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-sc80910al-c",
	"slug": "sioux-sc80910al-c",
	"brand": "Sioux",
	"model": "SC80910AL-C",
	"mpn": "SC80910AL-C",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Sioux SC80910AL-C",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-sc80910al-c-20261106.svg",
		"alt": "Repères techniques Sioux SC80910AL-C, référence SC80910AL-C",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=75",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux SC80910AL-C, référence SC80910AL-C. Consommation publiée de régime non précisé ; le dimensionnement reste indéterminé. Cadence de frappe : 4300 coups/min. Course : 25 mm. Masse : 1.7 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 6.0 L/s (12.0 scfm). Le régime de cette consommation n’est pas précisé dans la ligne propre à la référence. Conversion documentaire : 360 L/min (L/s × 60) ; hors dimensionnement en charge.",
			"Référence fabricant : SC80910AL-C.",
			"Cadence de frappe : 4300 coups/min.",
			"Course : 25 mm.",
			"Masse : 1.7 kg."
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
				"sioux-sc80910al-c-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 6.0 L/s (12.0 scfm). Le régime de cette consommation n’est pas précisé dans la ligne propre à la référence. Conversion documentaire : 360 L/min (L/s × 60) ; hors dimensionnement en charge.",
			"evidenceIds": [
				"sioux-sc80910al-c-20260927"
			]
		},
		{
			"label": "Cadence de frappe",
			"value": "4300 coups/min",
			"evidenceIds": [
				"sioux-sc80910al-c-20260927"
			]
		},
		{
			"label": "Course",
			"value": "25 mm",
			"evidenceIds": [
				"sioux-sc80910al-c-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "1.7 kg",
			"evidenceIds": [
				"sioux-sc80910al-c-20260927"
			]
		},
		{
			"label": "Longueur",
			"value": "375 mm",
			"evidenceIds": [
				"sioux-sc80910al-c-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-sc80910al-c-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=75",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 75, réf. SC80910AL-C",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 6.0 L/s (12.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 360 L/min (L/s × 60)."
		},
		{
			"id": "sioux-sc80910al-c-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=75",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 75",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		},
		{
			"id": "review:2026-11-06-followup:sioux-sc80910al-c:1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=75",
			"sourceLabel": "Sioux, revue documentaire du 6 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "P75 :suffixeCburinhexoctogonal,4300coupsmin/course25mm/1,7kg/375mm. N5 estdesrouilleuraiguillespluslourd, même6Ls nonqualifiés.360Lmin ne doivent pas dimensionner sans régime. SHA-256 du document complet : 2a5030b584ce6f8bd5613ebbee0b33b66a620e82e26c83d2524cbbf055dd8bf8."
		},
		{
			"id": "review:2026-11-06-copy:sioux-sc80910al-c",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=75",
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
			"sioux-sc80910al-c-20260927"
		],
		"workingPressureBar": [
			"sioux-sc80910al-c-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-sc80910al-c-20260927"
		],
		"airflowBasis": [
			"review:2026-11-06-followup:sioux-sc80910al-c:1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 360,
		"typical": 360,
		"max": 360
	},
	"airflowBasis": "unqualified"
};

export default product;
