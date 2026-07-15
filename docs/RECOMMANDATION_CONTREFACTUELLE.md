# Recommandation contrefactuelle

Le calculateur cherche le plus petit changement **unique** qui fait passer la configuration courante à `continuous` ou `intermittent`. Chaque proposition est recalculée avec le moteur de dimensionnement ; une règle textuelle seule ne peut pas produire une recommandation.

## Variables testées

- pression disponible : uniquement lorsqu’une pression réglée ou mesurée est fournie, et jamais au-delà de la pression maximale publiée de la machine ;
- flexible et réseau : réduction de la chute de pression mesurée en charge, sans déduire une perte depuis le diamètre ou la longueur seuls ;
- simultanéité : passage de l’usage simultané à l’usage successif ;
- fuite : réduction du débit de fuite mesuré ;
- cadence : réduction d’une seule cadence explicite d’outil par action ;
- machine : remplacement par la référence documentée la plus proche qui obtient un verdict utilisable.

Les seuils numériques sont cherchés par dichotomie puis vérifiés à nouveau à la précision affichée. Les changements opérationnels sont classés par variation relative ; un remplacement de machine reçoit une pénalité afin de ne pas masquer une correction plus légère.

## Limites affichées

Une mesure absente rend le scénario correspondant non testable. CompatAir ne transforme pas la longueur d’un flexible en perte de charge, ne suppose pas un débit de fuite et ne combine pas plusieurs changements pour fabriquer un verdict. Le calculateur indique explicitement les familles non testées.

La version de calcul `1.2.0` ajoute le débit de fuite mesuré au besoin de pointe et au besoin moyen, puis ajoute la chute de pression mesurée au besoin de l’outil. Les valeurs restent dans le lien local et le Passeport versionné.
