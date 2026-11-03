import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rodcraft-rc6738",
	"slug": "rodcraft-rc6738",
	"brand": "Rodcraft",
	"model": "RC6738",
	"mpn": "8951000408",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "Rodcraft RC6738",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rodcraft-rc6738.webp",
		"alt": "Repères techniques Rodcraft RC6738, référence 8951000408",
		"sourceUrl": "https://www.rodcraft.com/en/products/8951000408",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Rodcraft RC6738. La RC6738 est la riveteuse pour rivets aveugles 3,2–5 mm, course 19 mm et trois embouts livrés. La gamme distingue aussi les riveteuses pour écrous à sertir ; une capacité M12 de la gamme ne s’applique pas à ce modèle. Les 4 L/s sont annoncés en charge, sans pression de mesure explicitement appariée : le plafond dynamique 6,3 bar reste une limite de service.",
		"verifiedFacts": [
			"Usage : Rivets aveugles 3,2–5 mm.",
			"Course maximale : 19 mm.",
			"Embouts livrés : 3.",
			"Masse : 1,7 kg.",
			"Débit en charge publié : 4 L/s (240 L/min).",
			"Flexible minimal pour 5 m : 10 mm."
		],
		"limitations": [
			"Pression de mesure de consommation non explicitement appariée au débit en charge. Le calcul demeure indéterminé."
		]
	},
	"specifications": [
		{
			"label": "Usage",
			"value": "Rivets aveugles 3,2–5 mm",
			"evidenceIds": [
				"rodcraft-rc6738-reserved-20261103-1"
			]
		},
		{
			"label": "Course maximale",
			"value": "19 mm",
			"evidenceIds": [
				"rodcraft-rc6738-reserved-20261103-1"
			]
		},
		{
			"label": "Embouts livrés",
			"value": "3",
			"evidenceIds": [
				"rodcraft-rc6738-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,7 kg",
			"evidenceIds": [
				"rodcraft-rc6738-reserved-20261103-1"
			]
		},
		{
			"label": "Débit en charge publié",
			"value": "4 L/s (240 L/min)",
			"evidenceIds": [
				"rodcraft-rc6738-reserved-20261103-1"
			]
		},
		{
			"label": "Flexible minimal pour 5 m",
			"value": "10 mm",
			"evidenceIds": [
				"rodcraft-rc6738-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "rodcraft-8951000408-20260927",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951000408",
			"sourceLabel": "Rodcraft, fiche technique officielle RC6738, réf. 8951000408",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 4 L/s. Valeur retenue : 240 L/min (maximum des régimes documentés, L/s × 60)."
		},
		{
			"id": "rodcraft-rc6738-reserved-20261103-1",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951000408",
			"sourceLabel": "Rodcraft : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 c5fb4ff72f682861fe015b6eb5f0d7f8d28b0c40c63cb516f6f380e143199f64. La RC6738 est la riveteuse pour rivets aveugles 3,2–5 mm, course 19 mm et trois embouts livrés. La gamme distingue aussi les riveteuses pour écrous à sertir ; une capacité M12 de la gamme ne s’applique pas à ce modèle. Les 4 L/s sont annoncés en charge, sans pression de mesure explicitement appariée : le plafond dynamique 6,3 bar reste une limite de service."
		}
	],
	"fieldSources": {
		"mpn": [
			"rodcraft-8951000408-20260927"
		],
		"workingPressureBar": [
			"rodcraft-rc6738-reserved-20261103-1"
		],
		"demandModel": [
			"rodcraft-rc6738-reserved-20261103-1"
		],
		"demandExplanation": [
			"rodcraft-rc6738-reserved-20261103-1"
		],
		"editorial": [
			"rodcraft-rc6738-reserved-20261103-1"
		],
		"specifications": [
			"rodcraft-rc6738-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Le débit en charge est conservé dans les spécifications ; la fiche indique séparément le plafond de pression, sans appariement explicite de la mesure."
};

export default product;
