import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "gentilin-ac200-05",
	"slug": "gentilin-ac200-05",
	"brand": "Gentilin",
	"model": "AC200/05",
	"mpn": "814003001",
	"tankLiters": 5,
	"maxPressureBar": 9,
	"fadCurve": [
		{
			"pressureBar": 5,
			"litersPerMinute": 115
		},
		{
			"pressureBar": 8,
			"litersPerMinute": 60
		}
	],
	"oilType": "oil-free",
	"confidence": "A",
	"status": "unknown",
	"image": {
		"src": "/images/products/gentilin-ac200-05.webp",
		"alt": "Repères techniques Gentilin AC200/05, référence 814003001",
		"sourceUrl": "https://www.gentilinair.com/en/products/ac200-05",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Le Gentilin AC200/05 privilégie un petit ensemble de 5 L sous 230 V. Pour choisir son usage, conserver les deux productions documentées : 115 L/min à 5 bar et 60 L/min à 8 bar. La cuve plus grande que celle du C330/03 ne lui donne pas davantage de débit. La fiche et la notice divergent sur le régime de service et la masse ; aucune valeur unique n’est retenue pour ces deux champs.",
		"verifiedFacts": [
			"Débit restitué publié : 115 L/min à 5 bar ; 60 L/min à 8 bar.",
			"Compresseur à pistons sans huile. Puissance moteur publiée : 0,9 kW.",
			"Débit aspiré : 185 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V, 50 Hz.",
			"À pression égale de 8 bar, la fiche C330/03 (réf. 810201001) publie 165 L/min avec une cuve de 3 L et 2,2 kW, contre 60 L/min, 5 L et 0,9 kW pour l’AC200/05. La comparaison porte sur la production et les contraintes électriques, pas sur une autonomie déduite du seul volume de cuve.",
			"La fiche AC200/05 annonce S3 70 % et 9 kg ; la notice EVO 41024001, édition 04/2026, page 6, annonce un cycle de travail de 100 % et 10,5 kg pour AC 200/05. La référence et la révision de la machine livrée doivent être confirmées par Gentilin avant de retenir un taux de marche ou une masse."
		],
		"limitations": [
			"Débits déclarés par Gentilin, sans essai physique CompatAir. Les 185 L/min de la fiche sont un débit aspiré. La notice emploie aussi le libellé FAD pour 185 L/min, sans pression associée, tout en indiquant séparément 115 L/min d’air rendu à 5 bar : cette valeur de 185 n’est donc pas ajoutée à la courbe de débit restitué.",
			"Le régime de service est indéterminé tant que la divergence S3 70 % / 100 % n’est pas arbitrée pour la révision livrée. Aucun débit continu soutenable n’est calculé à partir d’un taux choisi entre les deux sources.",
			"La masse reste indéterminée entre 9 et 10,5 kg. Vérifier la masse et la configuration livrées avant de dimensionner un support ou un transport.",
			"Pour un besoin supérieur à 60 L/min à 8 bar, ce point constructeur ne suffit pas à une alimentation permanente. Le réservoir peut modifier la durée d’une séquence, mais cette autonomie demande la consommation et la plage de pression utilisable. Disponibilité et installation électrique à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct.",
			"evidenceIds": [
				"gentilin-814003001-20260926"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "33x26x41 cm",
			"evidenceIds": [
				"gentilin-814003001-20260926"
			]
		},
		{
			"label": "Régime de service : divergence documentaire",
			"value": "Fiche : S3 70 % ; notice EVO 41024001 (04/2026), p. 6 : 100 %. Aucun taux unique retenu.",
			"evidenceIds": [
				"gentilin-814003001-20260926",
				"gentilin-814003001-notice-20261014"
			]
		},
		{
			"label": "Cylindres",
			"value": "2",
			"evidenceIds": [
				"gentilin-814003001-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1.705,00 tr/min",
			"evidenceIds": [
				"gentilin-814003001-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "gentilin-814003001-20260926",
			"sourceUrl": "https://www.gentilinair.com/en/products/ac200-05",
			"sourceLabel": "Gentilin, fiche technique AC200/05, réf. 814003001",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Débits restitués publiés séparément à 5.0 bar, 8.0 bar. Le débit aspiré est conservé dans un champ distinct."
		},
		{
			"id": "gentilin-814003001-20260926-oiltype-1",
			"sourceUrl": "https://www.gentilinair.com/docs/41024001-compressed_1775720906.pdf#page=6",
			"sourceLabel": "Gentilin, notice de la famille DC100/05, p. 6",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La notice liée à cette fiche déclare la compression sans huile : Tipologia Oil-free (utilizzo intensivo)"
		},
		{
			"id": "gentilin-814003001-notice-20261014",
			"sourceUrl": "https://www.gentilinair.com/docs/41024001-compressed_1775720906.pdf#page=6",
			"sourceLabel": "Gentilin, notice EVO 41024001, édition 04/2026, tableau AC 200/05, p. 6",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-14",
			"confidence": "A",
			"notes": "Notice relue : 115 L/min à 5 bar et sans huile confirmés ; cycle 100 % et masse 10,5 kg en désaccord avec la fiche S3 70 % et 9 kg. Ligne FAD 185 sans pression exclue de la courbe."
		},
		{
			"id": "gentilin-c330-comparison-20261014",
			"sourceUrl": "https://www.gentilinair.com/en/products/c330-03",
			"sourceLabel": "Gentilin, C330/03 réf. 810201001, comparaison de sélection",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-10-14",
			"confidence": "A",
			"notes": "Voisin comparé uniquement : 3 L, 2,2 kW et 165 L/min à 8 bar. Aucune valeur du C330/03 transférée aux caractéristiques AC200/05."
		}
	],
	"fieldSources": {
		"mpn": [
			"gentilin-814003001-20260926"
		],
		"tankLiters": [
			"gentilin-814003001-20260926"
		],
		"maxPressureBar": [
			"gentilin-814003001-20260926"
		],
		"fadCurve": [
			"gentilin-814003001-20260926"
		],
		"oilType": [
			"gentilin-814003001-20260926-oiltype-1"
		],
		"intakeFlowLpm": [
			"gentilin-814003001-20260926"
		],
		"powerKw": [
			"gentilin-814003001-20260926"
		],
		"voltage": [
			"gentilin-814003001-20260926"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 185,
	"powerKw": 0.9,
	"voltage": "230 V, 50 Hz"
};

export default product;
