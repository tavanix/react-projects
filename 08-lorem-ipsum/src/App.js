import React, { useState } from 'react'
import data from './data'
function App() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('it works')
    }
    return (
        <section className='section-center'>
            <h3>tired ob boring lorem ipsum?</h3>
            <form className='lorem-form' onSubmit={handleSubmit}>
                <label htmlFor='amount'>paragraphs:</label>
                <input
                    type='number'
                    name='amount'
                    id='amount'
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                />
                <button type='submit' className='btn'>
                    generate
                </button>
            </form>
            <article className='lorem-text'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error voluptatibus praesentium id aspernatur voluptatem,
                    incidunt eos fugit excepturi alias modi.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio, tempora?
                </p>
            </article>
        </section>
    )
}

export default App
