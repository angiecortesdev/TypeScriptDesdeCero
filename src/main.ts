import './style.css'

import { setupCounter } from './counter.ts'
import './topics/01-basic-types.ts'
import './topics/02-object-interface.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola mundo</h1>


  </div>
`
console.log("Hola Mundo")

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
