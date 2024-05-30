// STEP 1 ___ DEFINITION :

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

// STEP 2 ___ EXERCICE :  Système de paiement

// Objectif : Implémenter le polymorphisme en créant une interface commune pour différentes méthodes de paiement.
// Instructions :
// Créez une classe Payment avec une méthode processPayment.
// (cette méthode renverra une erreur dans ce cas cas elle n'a pas été
// implémentée)
// Créez des sous-classes CreditCardPayment et PayPalPayment qui implémentent la méthode processPayment.
// Créez une fonction processTransaction qui prend un objet Payment (donc ici soit creditcardpayment, soit paypalpayment) en argument et appelle processPayment.

class Payment {
	processPayment(amount) {
		throw new Error("Method not implemented");
	}
}

class CreditCardPayment extends Payment {
	processPayment(amount) {
		console.log(`Processing credit card payment of $${amount}`);
	}
}

class PayPalPayment extends Payment {
	processPayment(amount) {
		console.log(`Processing PayPal payment of $${amount}`);
	}
}

function processTransaction(paymentMethod, amount) {
	paymentMethod.processPayment(amount);
}

const creditCardPayment = new CreditCardPayment();
const payPalPayment = new PayPalPayment();

processTransaction(creditCardPayment, 100);
processTransaction(payPalPayment, 200);
