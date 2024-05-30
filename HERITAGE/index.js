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

// STEP 2 ___ EXERCICE :

// Objectif : Utiliser l'héritage pour créer des sous-classes Teacher et Student basées sur une classe parent Person.

// Instructions :
// Créez une classe Person avec des propriétés name et age, et une méthode introduce qui renvoie une présentation qui contient name & age.
// Créez une sous-classe Teacher qui hérite de Person et ajoute une propriété subject et une méthode introduce (qui reprend celle de person et) qui inclut le sujet enseigné.
// Créez une sous-classe Student qui hérite de Person et ajoute une propriété grade et une méthode introduce qui inclut le grade (année scolaire).
// Créez des instances de Teacher et Student et appelez leur méthode introduce.
