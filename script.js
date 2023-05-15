/* Stappenplannetje
1. create 3 arrays with different options
    1.1 een kleur
    1.2 je lijkt op / je ruikt naar / ...
    1.3 een dier
2. create a function which takes a random index of the array and returns it
3. link it to GitHub
*/
const kleur = ['rood', 'blauw', 'geel', 'paars', 'zwart', 'bruin', 'wit'];
const vergelijking = ['je lijkt op', 'je ruikt naar', 'je gedraagt je als', 'je zoent', 'je beste vriend is', 'je kan niet zonder'];
const dier = ['paard', 'varken', 'ezel', 'olifant', 'mier', 'mug', 'stinkdier', 'schildpad', 'hond'];

let bericht = () => {
   let randomKleur = Math.floor(Math.random() * kleur.length)
   let gekozenKleur = kleur[randomKleur];

   let randomVergelijking = Math.floor(Math.random() * vergelijking.length)
   let gekozenVergelijking = vergelijking[randomVergelijking];

   let randomDier = Math.floor(Math.random() * dier.length)
   let gekozenDier = dier[randomDier];

   return `Je kleur is ${gekozenKleur}. ${gekozenVergelijking} een ${gekozenDier}.`
};

console.log(bericht())
