// STEP 1 ___ DEFINITIONS :

// QU'EST CE QUE L'HERITAGE EN POO :
// Héritage en programmation orientée objet (POO) est un mécanisme qui permet à une classe (appelée classe dérivée ou sous-classe) de hériter des propriétés et des méthodes d'une autre classe (appelée classe de base ou super-classe).

// Métaphore de l'Héritage
// Imaginez une recette de gâteau de base que vous utilisez pour faire un gâteau simple. Cette recette comprend les ingrédients de base et les étapes de préparation.

// Recette de Gâteau de Base :
// Ingrédients : farine, sucre, œufs, beurre
// Étapes : mélanger les ingrédients, cuire au four
// Maintenant, vous voulez faire des variantes de ce gâteau, comme un gâteau au chocolat ou un gâteau aux fruits.

// Recette de Gâteau au Chocolat :
// Hérite de la recette de base
// Ajoute du chocolat
// Modifie certaines étapes pour incorporer le chocolat

// Recette de Gâteau aux Fruits :
// Hérite de la recette de base
// Ajoute des fruits
// Modifie certaines étapes pour incorporer les fruits
// Ces nouvelles recettes héritent des ingrédients et des étapes de la recette de base mais peuvent aussi ajouter leurs propres ingrédients et modifier certaines étapes.

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------

// QU'EST CE QUE LE POLYMORPHISME EN POO :
// Polymorphisme vient du grec et signifie "plusieurs formes". En programmation orientée objet (POO), il désigne la capacité d'une méthode ou d'un objet à se comporter de différentes manières selon le contexte.

// Métaphore du Polymorphisme
// Imaginez une télécommande universelle. Une télécommande peut contrôler plusieurs appareils différents comme une télévision, un lecteur DVD et un système de son. Selon l'appareil que vous souhaitez contrôler, la télécommande enverra des signaux différents, même si vous appuyez sur le même bouton.

// Bouton "Power" :
// Si vous pointez la télécommande vers la télévision et appuyez sur "Power", la télévision s'allume ou s'éteint.
// Si vous pointez la télécommande vers le lecteur DVD et appuyez sur "Power", le lecteur DVD s'allume ou s'éteint.
// Si vous pointez la télécommande vers le système de son et appuyez sur "Power", le système de son s'allume ou s'éteint.
// Le bouton "Power" est polymorphe : il a la même apparence et la même interface, mais il effectue des actions différentes selon l'appareil contrôlé.

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------

// STEP 2 ___ EXERCICE :

// Objectif : Utiliser l'héritage pour créer des sous-classes Teacher et Student basées sur une classe parent Person.

// Instructions :
// Créez une classe Person avec des propriétés name et age, et une méthode introduce qui renvoie une présentation qui contient name & age.
// Créez une sous-classe Teacher qui hérite de Person et ajoute une propriété subject et une méthode introduce (qui reprend celle de person et) qui inclut le sujet enseigné.
// Créez une sous-classe Student qui hérite de Person et ajoute une propriété grade et une méthode introduce qui inclut le grade (année scolaire).
// Créez des instances de Teacher et Student et appelez leur méthode introduce.

