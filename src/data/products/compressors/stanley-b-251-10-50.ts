const product = {
	"id": "stanley-b-251-10-50",
	"slug": "stanley-b-251-10-50",
	"brand": "Stanley",
	"model": "B 251/10/50",
	"mpn": "28DC404STN086",
	"tankLiters": 50,
	"maxPressureBar": 10,
	"fadCurve": [],
	"oilType": "oil",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/stanley-b-251-10-50.webp",
		"alt": "Repères techniques Stanley B 251/10/50, référence 28DC404STN086",
		"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_STANLEY_2020_EN_9990220_LR.pdf#page=17",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Stanley B 251/10/50, référence 28DC404STN086 : cuve de 50 L, pression maximale publiée de 10 bar. Aucun débit FAD avec conditions de mesure complètes n’est établi dans les sources retenues ; la compatibilité pneumatique reste indéterminée. Groupe de compression publié : B2800. Groupe de compression : B2800. Nombre de cylindres : 2.",
		"verifiedFacts": [
			"Débit FAD exploitable pour un verdict : non établi dans les sources retenues.",
			"Compresseur à pistons. Puissance moteur publiée : 1,5 kW.",
			"Débit aspiré : 255 L/min, distinct du débit restitué.",
			"Alimentation publiée : 230 V / 50 Hz.",
			"Groupe de compression : B2800.",
			"Nombre de cylindres : 2.",
			"Vitesse de rotation : 1250 tr/min."
		],
		"limitations": [
			"Une valeur de débit sans pression de mesure associée ne permet pas de construire une courbe FAD. Aucun point n’est estimé.",
			"Le taux de marche continu n’est pas établi dans cette fiche. La disponibilité commerciale reste à confirmer.",
			"Données issues du stanley, catalogue compresseurs 2020, encore accessible sur le site du fabricant. La commercialisation actuelle de cette référence n’est pas confirmée.",
			"La masse et les dimensions de ce tableau concernent l’emballage, pas la machine nue."
		]
	},
	"specifications": [
		{
			"label": "Conditions du débit",
			"value": "Le tableau Stanley, catalogue compresseurs 2020 indique « Air displacement » : 255 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne.",
			"evidenceIds": [
				"stanley-28dc404stn086-20260927"
			]
		},
		{
			"label": "Équipement",
			"value": "Groupe de compression publié : B2800.",
			"evidenceIds": [
				"stanley-28dc404stn086-20260927"
			]
		},
		{
			"label": "Groupe de compression",
			"value": "B2800",
			"evidenceIds": [
				"stanley-28dc404stn086-20260927"
			]
		},
		{
			"label": "Nombre de cylindres",
			"value": "2",
			"evidenceIds": [
				"stanley-28dc404stn086-20260927"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "1250 tr/min",
			"evidenceIds": [
				"stanley-28dc404stn086-20260927"
			]
		},
		{
			"label": "Masse brute avec emballage",
			"value": "55 kg",
			"evidenceIds": [
				"stanley-28dc404stn086-20260927"
			]
		},
		{
			"label": "Dimensions de l’emballage (L × P × H)",
			"value": "800x390x750 mm",
			"evidenceIds": [
				"stanley-28dc404stn086-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "stanley-28dc404stn086-20260927",
			"sourceUrl": "https://www.nuair.pl/images/katalogi/Catalogo_STANLEY_2020_EN_9990220_LR.pdf#page=17",
			"sourceLabel": "Stanley, catalogue compresseurs 2020, p. 17, réf. 28DC404STN086",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Le tableau Stanley, catalogue compresseurs 2020 indique « Air displacement » : 255 L/min aspirés. Aucun débit restitué à une pression de mesure n’est fourni dans cette ligne."
		}
	],
	"fieldSources": {
		"mpn": [
			"stanley-28dc404stn086-20260927"
		],
		"tankLiters": [
			"stanley-28dc404stn086-20260927"
		],
		"maxPressureBar": [
			"stanley-28dc404stn086-20260927"
		],
		"fadCurve": [
			"stanley-28dc404stn086-20260927"
		],
		"oilType": [
			"stanley-28dc404stn086-20260927"
		],
		"intakeFlowLpm": [
			"stanley-28dc404stn086-20260927"
		],
		"powerKw": [
			"stanley-28dc404stn086-20260927"
		],
		"voltage": [
			"stanley-28dc404stn086-20260927"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant. Les comparaisons dépendent des conditions de débit et de pression documentées."
	],
	"intakeFlowLpm": 255,
	"powerKw": 1.5,
	"voltage": "230 V / 50 Hz"
};

export default product;
