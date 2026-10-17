import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "gentilin-ac600-40",
	"slug": "gentilin-ac600-40",
	"brand": "Gentilin",
	"model": "AC600/40",
	"mpn": "814005001",
	"tankLiters": 40,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 5,
			"litersPerMinute": 234
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 186
		}
	],
	"oilType": "oil-free",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/gentilin-ac600-40.webp",
		"alt": "Repères techniques Gentilin AC600/40, référence 814005001",
		"sourceUrl": "https://www.gentilinair.com/en/products/ac600-40",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "AC600/40 : 234 L/min à 5 bar et 186 L/min à 8 bar, avec 40 L de cuve et une masse publiée de 22 kg. La fiche actuelle indique S3 70 %. À 6,2 bar, le rendu CompatAir compare environ 215 L/min interpolés aux 550 L/min demandés par la Metabo DSX 150 : ce scénario dépasse le débit disponible.",
		"verifiedFacts": [
			"Débit restitué publié : 234 L/min à 5 bar ; 186 L/min à 8 bar.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 2,2 kW.",
			"Débit aspiré : 350 L/min, distinct du débit restitué.",
			"Masse publiée : 22 kg.",
			"Alimentation publiée : 230 V, 50 Hz."
		],
		"limitations": [
			"La fiche produit annonce S3 70 %, alors que la notice 41024001 d’avril 2026 affiche 100 % pour cette famille, y compris AC600/40. Aucun de ces taux contradictoires n’est utilisé comme cycle garanti ; le régime de la machine exacte reste à confirmer avant usage soutenu.",
			"Les 305 L/min intitulés FAD dans la notice ne sont pas associés à une pression. Ils ne remplacent pas les points sous pression publiés sur la fiche.",
			"Le texte commercial de la page mentionne AC660/40 alors que son titre et son tableau portent AC600/40. Vérifier l’article 814005001 sur la plaque et le devis.",
			"Les performances de l’AC400/20 voisin sont distinctes ; sa cuve de 20 L et ses valeurs de débit ne sont pas reportées sur cette référence."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct.",
			"evidenceIds": [
				"gentilin-814005001-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "66x29x59 cm",
			"evidenceIds": [
				"gentilin-814005001-20260926"
			]
		},
		{
			"label": "Revêtement de la cuve",
			"value": "Alluminio",
			"evidenceIds": [
				"gentilin-814005001-20260926"
			]
		},
		{
			"label": "Cylindres",
			"value": "4",
			"evidenceIds": [
				"gentilin-814005001-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1.705,00 tr/min",
			"evidenceIds": [
				"gentilin-814005001-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "gentilin-814005001-20260926",
			"sourceUrl": "https://www.gentilinair.com/en/products/ac600-40",
			"sourceLabel": "Gentilin, fiche technique AC600/40, réf. 814005001",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct."
		},
		{
			"id": "gentilin-814005001-20260926-oiltype-1",
			"sourceUrl": "https://www.gentilinair.com/docs/41024001-compressed_1775720906.pdf#page=6",
			"sourceLabel": "Gentilin, notice EVO 41024001, avril 2026, page PDF 6 : DC100/05, AC200/05, AC400/20 et AC600/40",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La page 6 identifie AC600/40, la compression sans huile et un cycle de 100 %. La fiche produit actuelle indique S3 70 % : divergence conservée dans les limites."
		}
	],
	"fieldSources": {
		"mpn": [
			"gentilin-814005001-20260926"
		],
		"tankLiters": [
			"gentilin-814005001-20260926"
		],
		"maxPressureBar": [
			"gentilin-814005001-20260926"
		],
		"fadCurve": [
			"gentilin-814005001-20260926"
		],
		"oilType": [
			"gentilin-814005001-20260926-oiltype-1"
		],
		"intakeFlowLpm": [
			"gentilin-814005001-20260926"
		],
		"powerKw": [
			"gentilin-814005001-20260926"
		],
		"weightKg": [
			"gentilin-814005001-20260926"
		],
		"voltage": [
			"gentilin-814005001-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 350,
	"powerKw": 2.2,
	"weightKg": 22,
	"voltage": "230 V, 50 Hz"
};

export default product;
