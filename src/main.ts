import './style.css'

import { setupCounter } from './counter.ts'
import './topics/01-basic-types.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola mundo</h1>

    
    
  </div>
`
console.log("Hola Mundo")

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
