import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App () {

    const [name, setName] = useState('midudev')

    return (
        <section className='App'>
            <TwitterFollowCard 
            userName={name}>
            Miguel Ángel Durán
            </TwitterFollowCard>
            <TwitterFollowCard 
            userName="monda">
            Pablito Escobar
            </TwitterFollowCard>


            <button onClick={() => setName('pedrochel')}> 
                Cambio Nombre
            </button>
        </section>
    )
}