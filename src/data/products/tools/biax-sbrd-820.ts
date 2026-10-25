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
		"overview": "SBRD 820 : meuleuse deux mains à valve rotative, double palier et vitesse de 20 000 tr/min. La SBRD 8-12/2 voisine tourne à 12 000 tr/min. Pour la 150021135, la fiche produit annonce 500 L/min et 300 W ; le catalogue PDF affiche 310 W. Cette divergence de puissance est conservée explicitement.",
		"verifiedFacts": [
			"SBRD 820, réf. 150021135, est une meuleuse deux mains à 20 000 tr/min ; la SBRD 8-12/2 voisine est donnée à 12 000 tr/min dans le même catalogue. La fiche HTML de la 820 annonce 300 W, tandis que le PDF page 24 annonce 310 W pour la même référence.",
			"Le régime de la consommation publiée n’est pas précisé ; cette valeur n’est pas assimilée à un maximum de travail."
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
