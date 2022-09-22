import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
}

function parImpar(y) {
    if (y % 2 === 0) {
        return ('par')
    } else {
        return ('impar')
    }
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(0)
    const [fatorial, setFatorial] = useState(0)

    const [ale, setAle] = useState(0)
    const [yes, setYes] = useState('par')

    useEffect(function () {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function () {
        setYes(parImpar(ale))
    }, [ale])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title='Exercicio #1' />
            <div className='center'>
                <span className='text'>Fatorial: </span>
                <span className='text red'>{fatorial === -1 ? 'Not found' : fatorial}</span>
                <input type='number' className="input"
                    value={number} onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title='Exercicio #2' />
            <div className='center'>
                <span className='text'>Par ou Impar</span>
                <span className="text red">{yes}</span>
                <input type='number' className="input"
                    value={ale} onChange={e => setAle(e.target.value)} />
            </div>
        </div>
    )
}

export default UseEffect
