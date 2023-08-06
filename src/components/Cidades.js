const Cidades = ({city}) => {
    return (
        <>
        <h1>{city.name}</h1>
        <p>{city.region === "Norte" ? "Lugar Quente" : "Lugar menos quente"}</p>
        </>
    )
}

export default Cidades