import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import '../components/PokedexPage/styles/PokedexPage.css'

const PokedexPage = () => {

    const [inputValue, setInputValue] = useState('')
    const [selectValue, setSelectValue] = useState('allPokemons')

    const trainer = useSelector(reducer => reducer.trainer)

    const url='https://pokeapi.co/api/v2/pokemon?offset=0&limit=1200'
    const [ pokemons, getAllPokemons, getPokemonsByType ] = useFetch(url)

    useEffect(() => {
        if (selectValue === 'allPokemons') {
            getAllPokemons()
        } else {
        getPokemonsByType(selectValue)
        }
    }, [selectValue])

    const inputSearch = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        setInputValue(inputSearch.current.value.trim().toLowerCase())
    }

    const cbFilter = poke => poke.name.includes(inputValue)

  return (
    <article className="pp">
        <div className="pp__container__image">
            <img className="pp__image1" src="/imgs/img5.png" alt="" />
        </div>
        <p className="pp__paragraph"><span className="pp__title">Welcome {trainer}</span>, here you could find your favorite pokemon</p>
        <form className="pp__container" onSubmit={handleSubmit}>
            <input className="pp__input" ref={inputSearch} type="text" />
            <button className="pp__button">Search</button>
        </form>
        <SelectType setSelectValue={setSelectValue} />
        <div className="pp__pokelist">
            {
                pokemons?.results.filter(cbFilter).map(poke => (
                    <PokeCard 
                    key={poke.url}
                    url={poke.url}
                    />
                ))
            }
        </div>
    </article>
  )
}

export default PokedexPage
