import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {
    const [value1, setvalue1] = useState('')
    const [value2, setvalue2] = useState('')
    const count = useRef(0)

    useEffect(function () {
        count.current++
    }, [value1])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title='Exercicio 01' />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{value1} [ </span>
                    <span className="text red">{count.current} </span>
                    <span className="text">]</span>
                </div>
                <input type="text" className='input'
                    value={value1} onChange={e => setvalue1(e.target.value)} />
            </div>

            <SectionTitle title='Exercicio 02' />

            <div className="center">
                <input type="text" className='input'
                    value={value2} onChange={e => setvalue2(e.target.value)} />
            </div>
        </div>
    )
}

export default UseRef
