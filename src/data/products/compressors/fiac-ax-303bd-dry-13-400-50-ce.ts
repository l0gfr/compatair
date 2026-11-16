import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "fiac-ax-303bd-dry-13-400-50-ce",
	"slug": "fiac-ax-303bd-dry-13-400-50-ce",
	"brand": "FIAC",
	"model": "AX 303BD DRY 13 400/50 CE",
	"mpn": "4152026249",
	"tankLiters": 0,
	"maxPressureBar": 13,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/fiac-ax-303bd-dry-13-400-50-ce-technical-20261116-reserves.svg",
		"alt": "Repères techniques FIAC AX 303BD DRY 13 400/50 CE, référence 4152026249",
		"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026249/ax-303bd-dry-13-40050-ce",
		"sourceLabel": "Carte technique CompatAir, documents constructeur relus le 16 novembre 2026"
	},
	"editorial": {
		"overview": "Le FIAC AX 303BD DRY 13 400/50 CE (4152026249) est la configuration à sécheur intégré et pression maximale de 13 bar, sans cuve intégrée. La fiche publie un FAD de 2770 L/min. Les versions 8 et 13 bar ne délivrent pas la même capacité déclarée : 3 650 contre 2 770 L/min. Le catalogue et la fiche diffèrent sur la puissance, 22 et 22,4 kW ; la puissance normalisée et la courbe FAD restent absentes en attendant leurs conditions applicables.",
		"verifiedFacts": [
			"Référence 4152026249 : 13 bar maximum et sécheur DRY.",
			"Ligne AIRBLOK 303 BD DRY du catalogue p35 appariée par le code article.",
			"Dimensions 1585 × 780 × 1220 mm et masse 464 kg déclarées dans cette table."
		],
		"limitations": [
			"La pression maximale de service ne devient pas une pression de mesure du FAD par hypothèse.",
			"La divergence de puissance 22/22,4 kW reste visible ; aucune des deux valeurs n’est choisie comme donnée moteur.",
			"Un taux de marche du groupe complet n’est pas déduit de la désignation industrielle.",
			"Données des documents identifiés, sans essai physique CompatAir ni garantie de disponibilité de la configuration livrée."
		]
	},
	"specifications": [
		{
			"label": "Capacité FAD déclarée, hors calcul",
			"value": "2770 L/min ; pression de mesure non qualifiée dans les documents relus",
			"evidenceIds": [
				"review:2026-11-16-reserves:fiac-ax-303bd-dry-13-400-50-ce:0"
			]
		},
		{
			"label": "Pression de service maximale",
			"value": "13 bar",
			"evidenceIds": [
				"review:2026-11-16-reserves:fiac-ax-303bd-dry-13-400-50-ce:0"
			]
		},
		{
			"label": "Équipement",
			"value": "Sans cuve intégrée, sécheur DRY intégré",
			"evidenceIds": [
				"review:2026-11-16-reserves:fiac-ax-303bd-dry-13-400-50-ce:0"
			]
		},
		{
			"label": "Puissances documentaires divergentes",
			"value": "22,4 kW dans la fiche individuelle ; 22 kW dans le catalogue p35. Aucune valeur normalisée retenue.",
			"evidenceIds": [
				"review:2026-11-16-reserves:fiac-ax-303bd-dry-13-400-50-ce:0",
				"review:2026-11-16-reserves:fiac-ax-303bd-dry-13-400-50-ce:1"
			]
		},
		{
			"label": "Dimensions et masse du tableau de gamme",
			"value": "1585 × 780 × 1220 mm ; 464 kg",
			"evidenceIds": [
				"review:2026-11-16-reserves:fiac-ax-303bd-dry-13-400-50-ce:1"
			]
		},
		{
			"label": "Alimentation du tableau de gamme",
			"value": "400/50/3 ; configurations alternatives listées séparément",
			"evidenceIds": [
				"review:2026-11-16-reserves:fiac-ax-303bd-dry-13-400-50-ce:1"
			]
		}
	],
	"evidence": [
		{
			"id": "fiac-4152026249-20260926",
			"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026249/ax-303bd-dry-13-40050-ce",
			"sourceLabel": "FIAC, fiche officielle 4152026249, réf. 4152026249",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche individuelle 4152026249 publie un FAD de 2770 L/min pour cette version de 13 bar. Débit restitué fabricant, pas débit aspiré."
		},
		{
			"id": "fiac-4152026249-20260926-oiltype-1",
			"sourceUrl": "https://web.fiac.it/content/dam/brands/fiac/website/documents/Fiac_Cat%20S226-R1-062026%20-%20screen__compressed.pdf#page=35",
			"sourceLabel": "FIAC, catalogue S226-R1-062026, p. 35",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Mode lubrifié documenté par les huiles prévues pour cette famille."
		},
		{
			"id": "review:2026-11-16-reviews:fiac-ax-303bd-dry-13-400-50-ce:0",
			"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026249/ax-303bd-dry-13-40050-ce",
			"sourceLabel": "FIAC, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "L’AX303BD DRY 13 400/50 CE 4152026249 correspond à la configuration avec sécheur, 13 bar maximum et capacité FAD déclarée 2 770 L/min. La version 8 bar 4152026247 annonce 3 650 L/min. Le PDF porte 22 kW, la fiche individuelle 22,4 : cet écart constructeur reste visible. La pression maximale n’établit pas une pression de mesure distincte du FAD ; la courbe est retirée en attendant une preuve exacte. GET complet SHA-256 e6fc4050efb8e9bf52e7444de83c5dc7abf2f46662648140436cee104c5d16cf. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		},
		{
			"id": "review:2026-11-16-reviews:fiac-ax-303bd-dry-13-400-50-ce:1",
			"sourceUrl": "https://web.fiac.it/content/dam/brands/fiac/website/documents/Fiac_Cat%20S226-R1-062026%20-%20screen__compressed.pdf",
			"sourceLabel": "FIAC, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "L’AX303BD DRY 13 400/50 CE 4152026249 correspond à la configuration avec sécheur, 13 bar maximum et capacité FAD déclarée 2 770 L/min. La version 8 bar 4152026247 annonce 3 650 L/min. Le PDF porte 22 kW, la fiche individuelle 22,4 : cet écart constructeur reste visible. La pression maximale n’établit pas une pression de mesure distincte du FAD ; la courbe est retirée en attendant une preuve exacte. GET complet SHA-256 55421a11ceb9c201bd873f1d0e4596ea6682b7fd68fc5e03e0c380ddf879ac85. Pages PDF lues : 35."
		},
		{
			"id": "review:2026-11-16-reserves:fiac-ax-303bd-dry-13-400-50-ce:0",
			"sourceUrl": "https://shop.fiac.it/en-IT/products/4152026249/ax-303bd-dry-13-40050-ce",
			"sourceLabel": "FIAC, document relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Fiche exacte 4152026249 et tableau p35 relus, avec la version voisine 8/13 bar. Retrait de powerKw ambigu, conservation des deux puissances et des FAD déclarés dans les spécifications ; fadCurve vide et dutyCycle absent. Apport : distinguer les deux variantes DRY sans proposer de verdict sur un point FAD non qualifié. GET complet SHA-256 e6fc4050efb8e9bf52e7444de83c5dc7abf2f46662648140436cee104c5d16cf."
		},
		{
			"id": "review:2026-11-16-reserves:fiac-ax-303bd-dry-13-400-50-ce:1",
			"sourceUrl": "https://web.fiac.it/content/dam/brands/fiac/website/documents/Fiac_Cat%20S226-R1-062026%20-%20screen__compressed.pdf#page=35",
			"sourceLabel": "FIAC, document relu le 16 novembre 2026 (pages PDF 35)",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Fiche exacte 4152026249 et tableau p35 relus, avec la version voisine 8/13 bar. Retrait de powerKw ambigu, conservation des deux puissances et des FAD déclarés dans les spécifications ; fadCurve vide et dutyCycle absent. Apport : distinguer les deux variantes DRY sans proposer de verdict sur un point FAD non qualifié. GET complet SHA-256 55421a11ceb9c201bd873f1d0e4596ea6682b7fd68fc5e03e0c380ddf879ac85."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reserves:fiac-ax-303bd-dry-13-400-50-ce:0"
		],
		"tankLiters": [
			"review:2026-11-16-reserves:fiac-ax-303bd-dry-13-400-50-ce:0"
		],
		"maxPressureBar": [
			"review:2026-11-16-reserves:fiac-ax-303bd-dry-13-400-50-ce:0"
		],
		"fadCurve": [
			"review:2026-11-16-reserves:fiac-ax-303bd-dry-13-400-50-ce:0"
		],
		"oilType": [
			"fiac-4152026249-20260926-oiltype-1"
		],
		"weightKg": [
			"review:2026-11-16-reserves:fiac-ax-303bd-dry-13-400-50-ce:1"
		],
		"voltage": [
			"review:2026-11-16-reserves:fiac-ax-303bd-dry-13-400-50-ce:1"
		],
		"phase": [
			"review:2026-11-16-reserves:fiac-ax-303bd-dry-13-400-50-ce:1"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées.",
		"Fiche exacte 4152026249 et tableau p35 relus, avec la version voisine 8/13 bar. Retrait de powerKw ambigu, conservation des deux puissances et des FAD déclarés dans les spécifications ; fadCurve vide et dutyCycle absent. Apport : distinguer les deux variantes DRY sans proposer de verdict sur un point FAD non qualifié."
	],
	"weightKg": 464,
	"voltage": "400 V, 50 Hz",
	"phase": "three-phase"
};

export default product;
