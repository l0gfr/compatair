import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-uryu-urw-12n-21512",
	"slug": "cle-a-cliquet-uryu-urw-12n-21512",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "URYU URW-12N (réf. 21512)",
	"brand": "URYU",
	"model": "URW-12N",
	"mpn": "21512",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 4,
		"typical": 4,
		"max": 4
	},
	"airflowLpm": {
		"min": 700,
		"typical": 700,
		"max": 700
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-uryu-urw-12n-21512.webp",
		"alt": "Repères techniques : URYU URW-12N (réf. 21512)",
		"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P35.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "uryu-urw-12n",
		"label": "Code constructeur 21512",
		"distinguishingAttributes": {
			"codeCatalogue": "21512",
			"reference": "21512"
		}
	},
	"editorial": {
		"overview": "URYU URW-12N. La URW-12N annonce 59 Nm indicatifs à 0,6 MPa et environ 145 tr/min ; les URW-12NA et 12NB donnent 78/93 Nm et 105/90 tr/min. La pression recommandée de 0,4 MPa appartient à une autre ligne documentaire que la condition du couple.",
		"verifiedFacts": [
			"Référence complète imprimée : 21512, page PDF 1.",
			"Consommation moyenne publiée : 700 L/min après conversion de l’unité originale.",
			"SPECIFICATIONS                                        Recommended Air Pressure : 0.4MPa (57 psi)",
			"Couple maximal indicatif à 0,6 MPa : 59 Nm.",
			"Vitesse à vide approximative : 145 tr/min.",
			"Longueur totale : 397 mm.",
			"Masse publiée : 2,70 kg.",
			"Pression recommandée publiée séparément : 0,4 MPa (4 bar)."
		],
		"limitations": [
			"Une moyenne ne permet pas de conclure sur le débit continu ou la pointe : le moteur conserve insufficient_data tant que le régime de consommation n’est pas documenté.",
			"La disponibilité actuelle, les accessoires inclus et les conditions de sécurité doivent être confirmés sur la notice de cette référence.",
			"La note de couple est à 0,6 MPa ; les 59 Nm ne sont pas attribués à la pression recommandée de 0,4 MPa."
		]
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 1",
			"evidenceIds": [
				"documented-20260930-uryu-p35"
			]
		},
		{
			"label": "Code URYU du tableau",
			"value": "21512",
			"evidenceIds": [
				"documented-20260930-uryu-p35"
			]
		},
		{
			"label": "Consommation moyenne originale",
			"value": "0.7 m³/min ; 25.0 ft³/min",
			"evidenceIds": [
				"documented-20260930-uryu-p35"
			]
		},
		{
			"label": "Pression recommandée dans le tableau",
			"value": "0.4 MPa",
			"evidenceIds": [
				"documented-20260930-uryu-p35"
			]
		},
		{
			"label": "Couple maximal indicatif à 0,6 MPa",
			"value": "59 Nm",
			"evidenceIds": [
				"cle-a-cliquet-uryu-urw-12n-21512-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide approximative",
			"value": "145 tr/min",
			"evidenceIds": [
				"cle-a-cliquet-uryu-urw-12n-21512-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur totale",
			"value": "397 mm",
			"evidenceIds": [
				"cle-a-cliquet-uryu-urw-12n-21512-reserved-20261103-1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2,70 kg",
			"evidenceIds": [
				"cle-a-cliquet-uryu-urw-12n-21512-reserved-20261103-1"
			]
		},
		{
			"label": "Pression recommandée publiée séparément",
			"value": "0,4 MPa (4 bar)",
			"evidenceIds": [
				"cle-a-cliquet-uryu-urw-12n-21512-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-20260930-uryu-p35",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P35.pdf",
			"sourceLabel": "URYU, catalogue 2020 : uryu-P35",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "Document constructeur consulté le 2026-09-30. SHA-256 4ef07a7843585c8812e74e00d36b3d928ce3793e180ffa30a9ea530ffaa7ab17. La transcription et les pages PDF sont versionnées dans le lot documentaire. Le lieu d’hébergement ne constitue pas une validation indépendante."
		},
		{
			"id": "cle-a-cliquet-uryu-urw-12n-21512-reserved-20261103-1",
			"sourceUrl": "https://www.uryu.co.jp/wordpress/wp-content/themes/uryu-new/assets/pdf/product/en/2020/P35.pdf",
			"sourceLabel": "URYU : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 4ef07a7843585c8812e74e00d36b3d928ce3793e180ffa30a9ea530ffaa7ab17. La URW-12N annonce 59 Nm indicatifs à 0,6 MPa et environ 145 tr/min ; les URW-12NA et 12NB donnent 78/93 Nm et 105/90 tr/min. La pression recommandée de 0,4 MPa appartient à une autre ligne documentaire que la condition du couple."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-20260930-uryu-p35"
		],
		"airflowLpm": [
			"documented-20260930-uryu-p35"
		],
		"workingPressureBar": [
			"documented-20260930-uryu-p35"
		],
		"airflowBasis": [
			"documented-20260930-uryu-p35"
		],
		"editorial": [
			"cle-a-cliquet-uryu-urw-12n-21512-reserved-20261103-1"
		],
		"specifications": [
			"cle-a-cliquet-uryu-urw-12n-21512-reserved-20261103-1"
		]
	},
	"notes": [
		"consommation moyenne ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en MPa : 0.4."
	]
};

export default product;
