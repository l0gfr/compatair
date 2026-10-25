import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "gentilin-clinic-3-40",
	"slug": "gentilin-clinic-3-40",
	"brand": "Gentilin",
	"model": "CLINIC 3/40",
	"mpn": "812108010",
	"tankLiters": 40,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 8,
			"litersPerMinute": 125
		}
	],
	"oilType": "oil-free",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/gentilin-clinic-3-40.webp",
		"alt": "Repères techniques Gentilin CLINIC 3/40, référence 812108010",
		"sourceUrl": "https://www.gentilinair.com/en/products/clinic-3-40",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Le CLINIC 3/40 sans sécheur et le CLINIC DRY 3/40 H avec sécheur à membrane ont une cuve de 40 L et un moteur de 1,8 kW. À 8 bar, leurs fiches annoncent respectivement 125 et 80 L/min. Le dimensionnement de la version sans sécheur retient le point publié de 125 L/min à 8 bar ; son débit aspiré de 240 L/min ne représente pas l’air livré. À 5 bar, la fiche web donne 155 L/min et la notice 150 L/min : ce point contradictoire reste hors de la courbe de calcul.",
		"verifiedFacts": [
			"Débit restitué retenu :125 L/min à 8 bar. Le point 5 bar est exclu en raison de la divergence entre la fiche et la notice.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 1,8 kW.",
			"Débit aspiré : 240 L/min, distinct du débit restitué.",
			"Masse publiée : 39 kg.",
			"Alimentation publiée : 230 V, 50 Hz."
		],
		"limitations": [
			"Divergence primaire à 5 bar : CLINIC 155 L/min sur la fiche web et 150 dans la notice ; DRY 120 sur le web et 130 dans la notice. Aucune moyenne ni préférence de révision non démontrée.",
			"Le point 125 L/min à 8 bar est explicitement publié pour 812108010 ; il n’est pas remplacé par une valeur de la DRY ni par le débit aspiré.",
			"Le régime 100 % porte sur la machine dans la notice, avec les conditions d’ambiance 0–40 °C du tableau. Cela ne supprime pas la limite de débit de la configuration.",
			"Documents constructeur uniquement ; aucun essai physique CompatAir."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Point 125 L/min à 8 bar de la fiche 812108010 retenu. À5 bar, 155 L/min web et 150 L/min notice divergent ; ce point est exclu du calcul. Débit aspiré 240 L/min distinct.",
			"evidenceIds": [
				"review-20261025-s037",
				"review-20261025-s038-p19"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "65,2x46,3x65,2 cm",
			"evidenceIds": [
				"gentilin-812108010-20260926"
			]
		},
		{
			"label": "Régime de service déclaré",
			"value": "S1 100%",
			"evidenceIds": [
				"gentilin-812108010-20260926"
			]
		},
		{
			"label": "Revêtement de la cuve",
			"value": "Acciaio Inox AISI 304",
			"evidenceIds": [
				"gentilin-812108010-20260926"
			]
		},
		{
			"label": "Cylindres",
			"value": "2",
			"evidenceIds": [
				"gentilin-812108010-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1.400,00 tr/min",
			"evidenceIds": [
				"gentilin-812108010-20260926"
			]
		},
		{
			"label": "Comparaison documentée et limite de choix",
			"value": "Comparer le débit de la version sans sécheur et de la DRY à 8 bar,  en rendant visibles les divergences à 5 bar ; ne pas substituer le débit aspiré 240 L/min.",
			"evidenceIds": [
				"review-20261025-s037",
				"review-20261025-s038-p15",
				"review-20261025-s038-p19",
				"review-20261025-s039"
			]
		}
	],
	"evidence": [
		{
			"id": "gentilin-812108010-20260926",
			"sourceUrl": "https://www.gentilinair.com/en/products/clinic-3-40",
			"sourceLabel": "Gentilin, fiche technique CLINIC 3/40, réf. 812108010",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct."
		},
		{
			"id": "gentilin-812108010-20260926-oiltype-1",
			"sourceUrl": "https://www.gentilinair.com/docs/41010702_1778060664.pdf#page=15",
			"sourceLabel": "Gentilin, notice de la famille CLINIC DRY 3/40 HS, p. 15",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La notice liée à cette fiche déclare la compression sans huile : CLINIC 3.40 • Oil-free air compressor with 40 litres tank without dryer. / CLINIC DRY 3.40 H • Oil free air compressor with 40 litres tank with membrane dryer. / • Oil-free air compressor with 40 litres tank with membrane dryer"
		},
		{
			"id": "review-20261025-s037",
			"sourceUrl": "https://www.gentilinair.com/en/products/clinic-3-40",
			"sourceLabel": "Gentilin, relecture primaire du 25 octobre 2026, s037",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 64019eb783dc4b535779701df2e409f9189580b64814c4574609da8ff42804db. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s038-p15",
			"sourceUrl": "https://www.gentilinair.com/docs/41010702_1778060664.pdf#page=15",
			"sourceLabel": "Gentilin, relecture primaire du 25 octobre 2026, s038, page PDF 15",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 d81d8d081f0c564ccce7b8b7809805c215763d3a12247c44c35acd8f35dec3ea. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s038-p19",
			"sourceUrl": "https://www.gentilinair.com/docs/41010702_1778060664.pdf#page=19",
			"sourceLabel": "Gentilin, relecture primaire du 25 octobre 2026, s038, page PDF 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 d81d8d081f0c564ccce7b8b7809805c215763d3a12247c44c35acd8f35dec3ea. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		},
		{
			"id": "review-20261025-s039",
			"sourceUrl": "https://www.gentilinair.com/en/products/clinic-dry-3-40-h",
			"sourceLabel": "Gentilin, relecture primaire du 25 octobre 2026, s039",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps vérifié SHA-256 451455aa95803ba6597afacef5fab1687c2714e586eb51bf7007ce6b41b20594. Portée limitée aux passages décrits dans la revue de cette URL ; aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"gentilin-812108010-20260926"
		],
		"tankLiters": [
			"gentilin-812108010-20260926"
		],
		"maxPressureBar": [
			"gentilin-812108010-20260926"
		],
		"fadCurve": [
			"review-20261025-s037"
		],
		"oilType": [
			"gentilin-812108010-20260926-oiltype-1"
		],
		"intakeFlowLpm": [
			"gentilin-812108010-20260926"
		],
		"powerKw": [
			"gentilin-812108010-20260926"
		],
		"weightKg": [
			"gentilin-812108010-20260926"
		],
		"voltage": [
			"gentilin-812108010-20260926"
		],
		"dutyCycle": [
			"review-20261025-s037",
			"review-20261025-s038-p19"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 240,
	"powerKw": 1.8,
	"weightKg": 39,
	"voltage": "230 V, 50 Hz",
	"dutyCycle": 1
};

export default product;
