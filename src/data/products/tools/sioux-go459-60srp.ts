import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sioux-go459-60srp",
	"slug": "sioux-go459-60srp",
	"brand": "Sioux",
	"model": "GO459-60SRP",
	"mpn": "GO459-60SRP",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Sioux GO459-60SRP",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/sioux-go459-60srp-20261106.svg",
		"alt": "Repères techniques Sioux GO459-60SRP, référence GO459-60SRP",
		"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=64",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Sioux GO459-60SRP, référence GO459-60SRP. Le dimensionnement utilise 420 L/min à 6,2 bar, selon les régimes publiés par le fabricant. Vitesse à vide : 900 tr/min. Diamètre du plateau : 150 mm. Masse : 2.0 kg.",
		"verifiedFacts": [
			"Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur.",
			"Consommation publiée : 7.0 L/s (15.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 420 L/min (L/s × 60).",
			"Référence fabricant : GO459-60SRP.",
			"Vitesse à vide : 900 tr/min.",
			"Diamètre du plateau : 150 mm.",
			"Masse : 2.0 kg."
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
				"sioux-go459-60srp-20260927-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 7.0 L/s (15.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 420 L/min (L/s × 60).",
			"evidenceIds": [
				"sioux-go459-60srp-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "900 tr/min",
			"evidenceIds": [
				"sioux-go459-60srp-20260927"
			]
		},
		{
			"label": "Diamètre du plateau",
			"value": "150 mm",
			"evidenceIds": [
				"sioux-go459-60srp-20260927"
			]
		},
		{
			"label": "Masse",
			"value": "2.0 kg",
			"evidenceIds": [
				"sioux-go459-60srp-20260927"
			]
		},
		{
			"label": "Hauteur",
			"value": "127 mm",
			"evidenceIds": [
				"sioux-go459-60srp-20260927"
			]
		},
		{
			"label": "Fixation du plateau",
			"value": "PSA, adhésive",
			"evidenceIds": [
				"sioux-go459-60srp-20260927"
			]
		},
		{
			"label": "Aspiration",
			"value": "Aspiration distante",
			"evidenceIds": [
				"sioux-go459-60srp-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "sioux-go459-60srp-20260927",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=64",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 64, réf. GO459-60SRP",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 7.0 L/s (15.0 scfm). Le guide du catalogue (page PDF 10) définit ces débits comme de l’air détendu à pression atmosphérique et des consommations maximales, sauf indication contraire. La plus grande valeur publiée est retenue : 420 L/min (L/s × 60)."
		},
		{
			"id": "sioux-go459-60srp-20260927-workingpressurebar-1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=64",
			"sourceLabel": "Sioux Tools, catalogue industriel actuellement relié au site Snap-on, p. 64",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Performances déclarées à 90 psig (6,2 bar), pression de référence indiquée sous le tableau constructeur."
		},
		{
			"id": "review:2026-11-06-followup:sioux-go459-60srp:1",
			"sourceUrl": "https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx#page=64",
			"sourceLabel": "Sioux, revue documentaire du 6 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "P64 :GO45960SRPplateauPSA150mm/900rpm/aspirationdistante/2kg,voisineSNH autreaspiration/fixation.7Ls sans régime de consommation:420Lmin nonmaximaux même avec performance6,2bar. SHA-256 du document complet : 2a5030b584ce6f8bd5613ebbee0b33b66a620e82e26c83d2524cbbf055dd8bf8."
		}
	],
	"fieldSources": {
		"mpn": [
			"sioux-go459-60srp-20260927"
		],
		"workingPressureBar": [
			"sioux-go459-60srp-20260927-workingpressurebar-1"
		],
		"airflowLpm": [
			"sioux-go459-60srp-20260927"
		],
		"airflowBasis": [
			"review:2026-11-06-followup:sioux-go459-60srp:1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 420,
		"typical": 420,
		"max": 420
	},
	"airflowBasis": "unqualified"
};

export default product;
