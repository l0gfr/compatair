import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-sbrd-820",
	"slug": "biax-sbrd-820",
	"brand": "BIAX",
	"model": "SBRD 820",
	"mpn": "150021135",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "BIAX SBRD 820",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-sbrd-820.webp",
		"alt": "Repères techniques BIAX SBRD 820, référence 150021135",
		"sourceUrl": "https://biax.de/en/product/sbrd-820-20-000-1-min-zweihandschl/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "La SBRD 820 à 20 000 tr/min et la SBRD 8-12/2 à 12 000 tr/min ne partagent pas le même diamètre maximal de fraise carbure : BIAX publie respectivement 12 et 15 mm. Les deux fiches indiquent une queue maximale de 8 mm mais une pince de 6 mm livrée. Le choix se fait donc sur la vitesse autorisée de l’accessoire et son encombrement, pas seulement sur la puissance : pour la SBRD 820 réf. 150021135, les 300 W du web et les 310 W du catalogue restent contradictoires.",
		"verifiedFacts": [
			"SBRD 820, réf. 150021135, est une meuleuse deux mains à 20 000 tr/min ; la SBRD 8-12/2 voisine est donnée à 12 000 tr/min dans le même catalogue. La fiche HTML de la 820 annonce 300 W, tandis que le PDF page 24 annonce 310 W pour la même référence.",
			"Le régime de la consommation publiée n’est pas précisé ; cette valeur n’est pas assimilée à un maximum de travail.",
			"Diamètre maximal de fraise carbure publié : 12 mm sur SBRD 820, contre 15 mm sur SBRD 8-12/2. Les deux modèles sont livrés avec une pince 6 mm malgré une capacité de queue maximale de 8 mm."
		],
		"limitations": [
			"Les 500 L/min de la fiche constructeur ne sont pas qualifiés de maximum ni de valeur en charge.",
			"Les 300 W HTML et 310 W PDF concernent la même référence ; leur différence reste non résolue, sans choix silencieux d’une révision.",
			"8 mm est le diamètre maximal de queue ; la pince livrée est de 6 mm et ne doit pas être présentée comme une pince 8 mm fournie."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"evidenceIds": [
				"biax-150021135-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150021135-20260926"
			]
		},
		{
			"label": "Puissance sur la fiche produit HTML",
			"value": "300 W",
			"evidenceIds": [
				"biax-150021135-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "20.000 tr/min",
			"evidenceIds": [
				"biax-150021135-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1040 g",
			"evidenceIds": [
				"biax-150021135-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "8 mm",
			"evidenceIds": [
				"biax-150021135-20260926"
			]
		},
		{
			"label": "Puissance dans le catalogue PDF",
			"value": "310 W, SBRD 820, réf. 150 021 135, page 24 ; la fiche HTML publie 300 W.",
			"evidenceIds": [
				"review-20261025-biax-sbrd-820-s041"
			]
		},
		{
			"label": "Comparaison des fraises carbure",
			"value": "SBRD 820 : diamètre maximal 12 mm à 20 000 tr/min. SBRD 8-12/2 : diamètre maximal 15 mm à 12 000 tr/min. Vérifier aussi les limites propres à la fraise.",
			"evidenceIds": [
				"reserved-20261025-biax-sbrd820",
				"reserved-20261025-biax-sbrd812"
			]
		},
		{
			"label": "Pince fournie et capacité de queue",
			"value": "Pince livrée 6 mm; capacité maximale de queue 8 mm. Une pince 8 mm fournie n’est pas documentée.",
			"evidenceIds": [
				"reserved-20261025-biax-sbrd820",
				"reserved-20261025-biax-sbrd812"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150021135-20260926",
			"sourceUrl": "https://biax.de/en/product/sbrd-820-20-000-1-min-zweihandschl/",
			"sourceLabel": "BIAX, fiche technique SBRD 820 – Two hand grinder, réf. 150021135",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150021135-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=24",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 24",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		},
		{
			"id": "review-20261025-biax-sbrd-820-s044",
			"sourceUrl": "https://biax.de/en/product/sbrd-820-20-000-1-min-zweihandschl/",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s044, section technique de la référence",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:35.376458+00:00, SHA-256 d00bcca1f59951040f2cf31f236a42cdcbc6a44cb16248ebe6b2d149f090625e. SBRD 820, réf. 150021135, est une meuleuse deux mains à 20 000 tr/min ; la SBRD 8-12/2 voisine est donnée à 12 000 tr/min dans le même catalogue. La fiche HTML de la 820 annonce 300 W, tandis que le PDF page 24 annonce 310 W pour la même référence. Limite : Ajouter airflowBasis=unqualified : les 500 L/min HTML ne sont pas qualifiés de maximum ni de valeur en charge."
		},
		{
			"id": "review-20261025-biax-sbrd-820-s041",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=24",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s041, pages PDF 24",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:34.380086+00:00, SHA-256 318971fb9ba951f395b81cbca3d1e57938ce23b74db3aef25ff98bb8f0edc6c8. SBRD 820, réf. 150021135, est une meuleuse deux mains à 20 000 tr/min ; la SBRD 8-12/2 voisine est donnée à 12 000 tr/min dans le même catalogue. La fiche HTML de la 820 annonce 300 W, tandis que le PDF page 24 annonce 310 W pour la même référence. Limite : Ajouter airflowBasis=unqualified : les 500 L/min HTML ne sont pas qualifiés de maximum ni de valeur en charge."
		},
		{
			"id": "reserved-20261025-biax-sbrd820",
			"sourceUrl": "https://biax.de/en/product/sbrd-820-20-000-1-min-zweihandschl/",
			"sourceLabel": "Relecture primaire du 25 octobre 2026 : biax-sbrd820",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps complet SHA-256 2586265668faf9870879e983258ccd937a98e6281f171226b1eee3082b7e44b4. Bloc technique SBRD 820, réf. 150021135: 300 W, 500 L/min, 20 000 tr/min, 1040 g, queue maximale 8 mm, fraise carbure maximale 12 mm, pince livrée 6 mm. Consommation sans régime de mesure. Données déclarées, aucun essai physique CompatAir."
		},
		{
			"id": "reserved-20261025-biax-sbrd812",
			"sourceUrl": "https://biax.de/en/product/sbrd-8-12-2-12-000-1-min-zweihandschl/",
			"sourceLabel": "Relecture primaire du 25 octobre 2026 : biax-sbrd812",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps complet SHA-256 f1f3ff8bd35a400b70a06524b29545194c11d737b7e6f4b28cac7b8921ba3b5c. Bloc technique SBRD 8-12/2: 12 000 tr/min, 300 W, 400 L/min, queue maximale 8 mm, fraise carbure maximale 15 mm, pince livrée 6 mm. Données déclarées, aucun essai physique CompatAir."
		},
		{
			"id": "reserved-20261025-biax-catalog-current-p24",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=24",
			"sourceLabel": "Relecture primaire du 25 octobre 2026 : biax-catalog-current, page PDF 24",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Corps complet SHA-256 318971fb9ba951f395b81cbca3d1e57938ce23b74db3aef25ff98bb8f0edc6c8. Page 24: SBRD 820 réf. 150021135, 310 W, conflit avec 300 W HTML conservé. Pages 40–41: BEW 309 E réf. 150800726, 150 L/min, 20 W, 0–900 tr/min; fonctionnement/lubrification à 6 bar, sans qualification de consommation en charge; diamètre maximal du trou 10 mm, conflit avec 11 mm HTML. Ne pas mélanger BEW 309 EL150 ou SBRH avec les références étudiées. Données déclarées, aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150021135-20260926"
		],
		"workingPressureBar": [
			"biax-150021135-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150021135-20260926",
			"review-20261025-biax-sbrd-820-s044",
			"review-20261025-biax-sbrd-820-s041"
		],
		"airflowBasis": [
			"review-20261025-biax-sbrd-820-s044",
			"review-20261025-biax-sbrd-820-s041"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : Ajouter airflowBasis=unqualified : les 500 L/min HTML ne sont pas qualifiés de maximum ni de valeur en charge."
	],
	"airflowLpm": {
		"min": 500,
		"typical": 500,
		"max": 500
	},
	"airflowBasis": "unqualified"
};

export default product;
