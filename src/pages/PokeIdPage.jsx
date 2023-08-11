import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import { useParams } from "react-router-dom"

const PokeIdPage = () => {

    const { id } = useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    const [ pokemon, getSinglePokemon ] = useFetch(url)

    useEffect(() => {
        getSinglePokemon()
    }, [id])

  return (
    <article>
      <img src={pokemon?.sprites.other['official-artwork']} alt="" />
      <h2>{pokemon?.name}</h2>
    </article>
  )
}

export default PokeIdPage
