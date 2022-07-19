//////// ВАРИАНТ РЕШЕНИЯ №1

// function Hamburger(name){
//     this.name = name;
//     this.topping = [];
    
//     if (this.name === 'SIZE_SMALL') {
//         this.price = 50;
//         this.kcall = 20
//     }

//     if (this.name === 'SIZE_MEDIUM') {
//         this.price = 75;
//         this.kcall = 30
//     }

//     if (this.name === 'SIZE_BIG') {
//         this.price = 100;
//         this.kcall = 40
//     }

//     this.addTopping = (topping) => {
//         if (topping === 'TOPPING_CHEESE') {
//             this.topping.push('CHEESE');
//             this.price = this.price + 10;
//             this.kcall = this.kcall + 20
//         }
        
//         if (topping === 'TOPPING_SALAD') {
//             this.topping.push('SALAD');
//             this.price = this.price + 20;
//             this.kcall = this.kcall + 5
//         }

//         if (topping === 'TOPPING_POTATO') {
//             this.topping.push('POTATO');
//             this.price = this.price + 15;
//             this.kcall = this.kcall + 10
//         }

//         if (topping === 'TOPPING_SEASONING') {
//             this.topping.push('SEASONING');
//             this.price = this.price + 15;
//             this.kcall = this.kcall
//         }

//         if (topping === 'TOPPING_MAYO') {
//             this.topping.push('MAYO');
//             this.price = this.price + 20;
//             this.kcall = this.kcall + 5
//         }
//     };

//     this.getCheck = () => {
//         console.log(`
//         --------------
//         Hamburger: ${this.name}
//         Topping: ${this.topping}
//         Kcall: ${this.kcall}

//         PRICE: ${this.price}$
//         --------------
//         `);
//     };
// }

// const newHamburger = new Hamburger('SIZE_SMALL');

// newHamburger.addTopping('TOPPING_CHEESE');
// newHamburger.getCheck();

//////// ВАРИАНТ РЕШЕНИЯ №2 

function Hamburger(size, topping = []){
    this.size = size;
    this.topping = topping;

    this.getPrice = () => {
        return price = this.topping.reduce((price, topping) => price + topping.price, this.size.price);        
    };

    this.getKCal = () => {
        return this.topping.reduce((kcall, topping) => kcall + topping.kcall, this.size.kcall);
    };

    this.addTopping = (topping) => {
        this.topping.push(topping);
    };

    this.getCheck = () => {
        console.log(`
        --------------
        Hamburger: ${this.size.label}
        Topping: ${this.topping.map(e => e.label).join(' , ')}
        Kcall: ${this.getKCal()}

        PRICE: ${this.getPrice()}$
        --------------
        `);
    };
}

Hamburger.SIZE = {
    SMALL: {
        label: 'SMALL',
        price: 50,
        kcall: 20
    },
    MEDIUM: {
        label: 'MEDIUM',
        price: 75,
        kcall: 30
    },
    BIG: {
        label: 'BIG',
        price: 100,
        kcall: 40
    }
};

Hamburger.TOPPINGS = {
    CHEESE: {
        label: 'CHEESE',
        price: 10,
        kcall: 20
    },
    SALAD: {
        label: 'SALAD',
        price: 20,
        kcall: 5
    },
    POTATO: {
        label: 'POTATO',
        price: 15,
        kcall: 10
    },
    SEASONING: {
        label: 'SEASONING',
        price: 15,
        kcall: 0
    },
    MAYO: {
        label: 'MAYO',
        price: 20,
        kcall: 5
    }
};

const newHamburger = new Hamburger(Hamburger.SIZE.SMALL);

newHamburger.addTopping(Hamburger.TOPPINGS.CHEESE);
newHamburger.addTopping(Hamburger.TOPPINGS.MAYO);
newHamburger.addTopping(Hamburger.TOPPINGS.SALAD);

newHamburger.getCheck();