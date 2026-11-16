import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rodcraft-rc6758",
	"slug": "rodcraft-rc6758",
	"brand": "Rodcraft",
	"model": "RC6758",
	"mpn": "8951000410",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "Rodcraft RC6758",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/rodcraft-rc6758-technical-20261116-reviews.svg",
		"alt": "Repères techniques Rodcraft RC6758, référence 8951000410",
		"sourceUrl": "https://www.rodcraft.com/en/products/8951000410",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "Rodcraft RC6758 : sertisseuse pour écrous à riveter M3–M12, course maximale 7 mm et sept embouts livrés. Elle se distingue des RC6738 et RC6748 pour rivets aveugles. Les 2,8 L/s en charge restent documentaires ; le plafond dynamique de service de 6,3 bar n’est pas une pression de mesure démontrée.",
		"verifiedFacts": [
			"Usage / capacités : Écrous à riveter M3–M12.",
			"Course maximale / embouts : 7 mm / 7.",
			"Masse / longueur : 2,2 kg / 280 mm.",
			"Consommation en charge : 2,8 L/s.",
			"Pression dynamique maximale : 6,3 bar.",
			"Raccord / flexible minimal sur 5 m : 1/4 BSP / 10 mm."
		],
		"limitations": [
			"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Usage / capacités",
			"value": "Écrous à riveter M3–M12",
			"evidenceIds": [
				"review:2026-11-16-reviews:rodcraft-rc6758:0"
			]
		},
		{
			"label": "Course maximale / embouts",
			"value": "7 mm / 7",
			"evidenceIds": [
				"review:2026-11-16-reviews:rodcraft-rc6758:0"
			]
		},
		{
			"label": "Masse / longueur",
			"value": "2,2 kg / 280 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:rodcraft-rc6758:0"
			]
		},
		{
			"label": "Consommation en charge",
			"value": "2,8 L/s",
			"evidenceIds": [
				"review:2026-11-16-reviews:rodcraft-rc6758:0"
			]
		},
		{
			"label": "Pression dynamique maximale",
			"value": "6,3 bar",
			"evidenceIds": [
				"review:2026-11-16-reviews:rodcraft-rc6758:0"
			]
		},
		{
			"label": "Raccord / flexible minimal sur 5 m",
			"value": "1/4 BSP / 10 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:rodcraft-rc6758:0"
			]
		}
	],
	"evidence": [
		{
			"id": "rodcraft-8951000410-20260927",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951000410",
			"sourceLabel": "Rodcraft, fiche technique officielle RC6758, réf. 8951000410",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 2.8 L/s. Valeur retenue : 168 L/min (maximum des régimes documentés, L/s × 60)."
		},
		{
			"id": "review:2026-11-16-reviews:rodcraft-rc6758:0",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951000410",
			"sourceLabel": "Rodcraft, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Rodcraft RC6758 : sertisseuse pour écrous à riveter M3–M12, course maximale 7 mm et sept embouts livrés. Elle se distingue des RC6738 et RC6748 pour rivets aveugles. Les 2,8 L/s en charge restent documentaires ; le plafond dynamique de service de 6,3 bar n’est pas une pression de mesure démontrée. GET complet SHA-256 8a91123ef44be558fe10791253159ae02e9cfb3f8e9a25984d1b4fdc6becf532. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reviews:rodcraft-rc6758:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:rodcraft-rc6758:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:rodcraft-rc6758:0"
		]
	},
	"notes": [
		"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
	],
	"demandExplanation": "La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
};

export default product;
