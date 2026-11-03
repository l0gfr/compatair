import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-15c2ap-2cs",
	"slug": "fiam-15c2ap-2cs",
	"brand": "Fiam",
	"model": "15C2AP-2CS",
	"mpn": "112509895",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Fiam 15C2AP-2CS",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-15c2ap-2cs.webp",
		"alt": "Repères techniques Fiam 15C2AP-2CS, référence 112509895",
		"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/15c2ap-2cs/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam 15C2AP-2CS. La 15C2AP-2CS est la version pistolet à double signal pneumatique, code 112509895, dimensions 37 × 209 × 157 mm. La 15C2APA-2CS partage couple et débit mais mesure 31 × 178 × 156 mm. Les six litres par seconde restent une consommation de régime non précisé ; le signal pneumatique ne qualifie pas le débit à lui seul.",
		"verifiedFacts": [
			"Fonction : Visseuse pistolet à double signal pneumatique.",
			"Couple indicatif : 0,6–2,2 Nm.",
			"Vitesse à vide : 2 200 tr/min.",
			"Masse : 0,70 kg.",
			"Dimensions : 37 × 209 × 157 mm.",
			"Consommation, régime non précisé : 6 L/s."
		],
		"limitations": [
			"Le régime de consommation n’est pas précisé ; la valeur reste non dimensionnante et le verdict demeure insufficient_data."
		]
	},
	"specifications": [
		{
			"label": "Fonction",
			"value": "Visseuse pistolet à double signal pneumatique",
			"evidenceIds": [
				"fiam-15c2ap-2cs-reserved-20261103-1"
			]
		},
		{
			"label": "Couple indicatif",
			"value": "0,6–2,2 Nm",
			"evidenceIds": [
				"fiam-15c2ap-2cs-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2 200 tr/min",
			"evidenceIds": [
				"fiam-15c2ap-2cs-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,70 kg",
			"evidenceIds": [
				"fiam-15c2ap-2cs-reserved-20261103-1"
			]
		},
		{
			"label": "Dimensions",
			"value": "37 × 209 × 157 mm",
			"evidenceIds": [
				"fiam-15c2ap-2cs-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation, régime non précisé",
			"value": "6 L/s",
			"evidenceIds": [
				"fiam-15c2ap-2cs-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-112509895-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/15c2ap-2cs/",
			"sourceLabel": "Fiam, fiche technique 15C2AP-2CS, réf. 112509895",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 6 L/s, soit 360 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-112509895-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-85.pdf#page=15",
			"sourceLabel": "Fiam, brochure technique en-85, p. 15",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		},
		{
			"id": "fiam-15c2ap-2cs-reserved-20261103-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-85.pdf#page=15",
			"sourceLabel": "Fiam : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 e1c8db38588668ff2347c0005a43ac3067609b0b280d80dc3548f0d8043dccce. La 15C2AP-2CS est la version pistolet à double signal pneumatique, code 112509895, dimensions 37 × 209 × 157 mm. La 15C2APA-2CS partage couple et débit mais mesure 31 × 178 × 156 mm. Les six litres par seconde restent une consommation de régime non précisé ; le signal pneumatique ne qualifie pas le débit à lui seul."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-112509895-20260926"
		],
		"workingPressureBar": [
			"fiam-112509895-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-112509895-20260926"
		],
		"airflowBasis": [
			"fiam-15c2ap-2cs-reserved-20261103-1"
		],
		"editorial": [
			"fiam-15c2ap-2cs-reserved-20261103-1"
		],
		"specifications": [
			"fiam-15c2ap-2cs-reserved-20261103-1"
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
