



const PaisesItem = ({paises}) => {
    return (
        <>
        <h1>{paises.name}</h1>
        <h2>{paises.name === "Brasil" ? 'Patria Amada' : "Não"}</h2>
        
        </>
    )
};

export default PaisesItem;