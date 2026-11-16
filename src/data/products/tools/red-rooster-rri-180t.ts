import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rri-180t",
	"slug": "red-rooster-rri-180t",
	"brand": "Red Rooster",
	"model": "RRI-180T",
	"mpn": "RRI-180T",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Red Rooster RRI-180T",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rri-180t-technical-20261116-reviews.svg",
		"alt": "Repères techniques Red Rooster RRI-180T, référence RRI-180T",
		"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "La RRI-180T est une visseuse hydrotension de 3,8 kg pour une plage indicative de 180–255 Nm, à 2 700 tr/min. La RRI-150T vise 165–210 Nm avec 3,1 kg ; la RRI-200T couvre 230–450 Nm et demande un raccord 3/8 pouce. Les 12,2 L/s du catalogue restent documentaires sans régime ni pression de mesure associés. Les couples indicatifs ne remplacent pas la qualification de l’assemblage.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 12.2 L/s, convertis en 732 L/min par multiplication par 60.",
			"Référence fabricant : RRI-180T.",
			"Couple indicatif publié : 180 à 255 Nm.",
			"Vitesse à vide : 2700 tr/min.",
			"Entraînement : 3/4\" carré."
		],
		"limitations": [
			"Les couples indiqués sont des valeurs indicatives, sensibles à l’assemblage et à l’accessoire.",
			"La pression doit être vérifiée pendant le fonctionnement ; la pression statique du réservoir ne suffit pas.",
			"La pression de service n’atteste pas la pression de mesure de consommation. Le régime ou l’appariement documentaire reste non qualifié ; aucune consommation dimensionnante n’est conservée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"evidenceIds": [
				"red-rooster-rri-180t-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 12.2 L/s, convertis en 732 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rri-180t-20260926"
			]
		},
		{
			"label": "Couple indicatif publié",
			"value": "180 à 255 Nm",
			"evidenceIds": [
				"red-rooster-rri-180t-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2700 tr/min",
			"evidenceIds": [
				"red-rooster-rri-180t-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "3/4\" carré",
			"evidenceIds": [
				"red-rooster-rri-180t-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "3,8 kg",
			"evidenceIds": [
				"red-rooster-rri-180t-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "11 mm",
			"evidenceIds": [
				"red-rooster-rri-180t-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rri-180t-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=21",
			"sourceLabel": "Rami Yokota, catalogue assemblage 2026, p. 21, réf. RRI-180T",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 12.2 L/s, convertis en 732 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rri-180t-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review:2026-11-16-reviews:red-rooster-rri-180t:0",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf",
			"sourceLabel": "Red Rooster, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La RRI-180T est une visseuse hydrotension de 3,8 kg pour une plage indicative de 180–255 Nm, à 2 700 tr/min. La RRI-150T vise 165–210 Nm avec 3,1 kg ; la RRI-200T couvre 230–450 Nm et demande un raccord 3/8 pouce. Les 12,2 L/s du catalogue restent documentaires sans régime ni pression de mesure associés. Les couples indicatifs ne remplacent pas la qualification de l’assemblage. GET complet SHA-256 6b7dca4923bfef1dbe2c7f6691e91e07f92fec5c1fa3b8d56f211ecbdb5e4845. Pages PDF lues : 21."
		},
		{
			"id": "review:2026-11-16-reviews:red-rooster-rri-180t:1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
			"sourceLabel": "Red Rooster, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La RRI-180T est une visseuse hydrotension de 3,8 kg pour une plage indicative de 180–255 Nm, à 2 700 tr/min. La RRI-150T vise 165–210 Nm avec 3,1 kg ; la RRI-200T couvre 230–450 Nm et demande un raccord 3/8 pouce. Les 12,2 L/s du catalogue restent documentaires sans régime ni pression de mesure associés. Les couples indicatifs ne remplacent pas la qualification de l’assemblage. GET complet SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Pages PDF lues : 106."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rri-180t-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rri-180t-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rri-180t-20260926"
		],
		"recommendedHose": [
			"red-rooster-rri-180t-20260926"
		],
		"airflowBasis": [
			"review:2026-11-16-reviews:red-rooster-rri-180t:0"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 732,
		"typical": 732,
		"max": 732
	},
	"recommendedHose": {
		"innerDiameterMm": 11
	},
	"airflowBasis": "unqualified"
};

export default product;
