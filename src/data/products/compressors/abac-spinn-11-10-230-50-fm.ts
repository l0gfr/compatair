import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "abac-spinn-11-10-230-50-fm",
	"slug": "abac-spinn-11-10-230-50-fm",
	"brand": "ABAC",
	"model": "SPINN 11 10 230/50 FM",
	"mpn": "4152022532",
	"tankLiters": 0,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/abac-spinn-11-10-230-50-fm.webp",
		"alt": "Repères techniques ABAC SPINN 11 10 230/50 FM, référence 4152022532",
		"sourceUrl": "https://shop.abacaircompressors.com/en-INT/products/4152022532/spinn-11-10-23050-fm-ce",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "ABAC SPINN 11 10 230/50 FM. Les passages cités décrivent le fonctionnement continu de la gamme ou le service du moteur. Ils ne définissent pas un taux de marche chiffré du groupe complet pour cette configuration ; le champ dutyCycle reste non documenté. La fiche exacte du SPINN 11 remplace la fiche SPINN 2.2 mal rattachée. Elle donne 1 416 L/min FAD et 10 bar maximum, sans pression de mesure explicitement appariée.",
		"verifiedFacts": [
			"Compresseur rotatif à vis lubrifié, famille SPINN. Puissance moteur publiée : 11,2 kW.",
			"Masse nette publiée : 185 kg.",
			"Alimentation publiée : 230 V, 50 Hz, triphasée."
		],
		"limitations": [
			"Un seul point de débit restitué est documenté. Aucune mesure aux autres pressions n’est inventée.",
			"Le fonctionnement continu est une déclaration de gamme ; respecter les conditions de la notice. La disponibilité commerciale reste à confirmer.",
			"Version électrique exacte à vérifier à la commande ; une alimentation 230 V peut être triphasée.",
			"Le débit publié appartient à cette référence et à sa version de pression. Il ne définit pas une courbe complète.",
			"Les passages cités décrivent le fonctionnement continu de la gamme ou le service du moteur. Ils ne définissent pas un taux de marche chiffré du groupe complet pour cette configuration ; le champ dutyCycle reste non documenté.",
			"La fiche exacte du SPINN 11 remplace la fiche SPINN 2.2 mal rattachée. Elle donne 1 416 L/min FAD et 10 bar maximum, sans pression de mesure explicitement appariée."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "FAD capacity (l/min) : 1416 ; Max Working Pressure (bar) : 10, dans le tableau fabricant de la variante 4152022532. Valeur restituée, pas aspirée.",
			"evidenceIds": [
				"abac-4152022532-20260926"
			]
		},
		{
			"label": "Équipement",
			"value": "Version sur châssis sans cuve intégrée.",
			"evidenceIds": [
				"abac-4152022532-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "850 × 720 × 980 mm (L × l × H)",
			"evidenceIds": [
				"abac-4152022532-20260926"
			]
		},
		{
			"label": "Relevé historique FAD, pression de mesure à confirmer",
			"value": "[{\"pressureBar\":10,\"litersPerMinute\":1416}]",
			"evidenceIds": [
				"abac-4152022532-20260926",
				"abac-spinn-11-10-230-50-fm-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "abac-4152022532-20260926",
			"sourceUrl": "https://shop.abacaircompressors.com/en-INT/products/4152054944/spinn22-8-40050k-e-ce",
			"sourceLabel": "ABAC, tableau officiel des variantes SPINN, réf. 4152022532",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "FAD capacity (l/min) : 1416 ; Max Working Pressure (bar) : 10, dans le tableau fabricant de la variante 4152022532. Valeur restituée, pas aspirée."
		},
		{
			"id": "abac-spinn-11-10-230-50-fm-continuous-duty-20260927",
			"sourceUrl": "https://www.abacaircompressors.com/en-international/products/screw-compressors",
			"sourceLabel": "ABAC, gamme de compresseurs à vis SPINN, FORMULA et GENESIS",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Déclaration de la gamme ABAC à vis ; uniquement les références SPINN, FORMULA et GENESIS revues individuellement dans ce lot."
		},
		{
			"id": "abac-spinn-11-10-230-50-fm-reserved-20261031-1",
			"sourceUrl": "https://shop.abacaircompressors.com/en-INT/products/4152022532/spinn-11-10-23050-fm-ce",
			"sourceLabel": "ABAC SPINN 11 10 230/50 FM : relecture documentaire du 31 octobre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 a5375dc56da99b90bdb5af826e9512c3e93d8eaec5ddfe68b7ac1e262aec5886. Les passages cités décrivent le fonctionnement continu de la gamme ou le service du moteur. Ils ne définissent pas un taux de marche chiffré du groupe complet pour cette configuration ; le champ dutyCycle reste non documenté. La fiche exacte du SPINN 11 remplace la fiche SPINN 2.2 mal rattachée. Elle donne 1 416 L/min FAD et 10 bar maximum, sans pression de mesure explicitement appariée."
		}
	],
	"fieldSources": {
		"mpn": [
			"abac-4152022532-20260926"
		],
		"tankLiters": [
			"abac-4152022532-20260926"
		],
		"maxPressureBar": [
			"abac-4152022532-20260926"
		],
		"oilType": [
			"abac-4152022532-20260926"
		],
		"powerKw": [
			"abac-4152022532-20260926"
		],
		"weightKg": [
			"abac-4152022532-20260926"
		],
		"voltage": [
			"abac-4152022532-20260926"
		],
		"phase": [
			"abac-4152022532-20260926"
		],
		"fadCurve": [
			"abac-spinn-11-10-230-50-fm-reserved-20261031-1"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"powerKw": 11.2,
	"weightKg": 185,
	"voltage": "230 V, 50 Hz",
	"phase": "three-phase"
};

export default product;
