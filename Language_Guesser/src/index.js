import {franc, francAll} from 'franc'
import {langs} from 'langs'



console.log(franc('Alle menslike wesens word vry'))
let code = franc('Alle menslike wesens word vry')

let language = langs.where('3', code)
console.log(language)
