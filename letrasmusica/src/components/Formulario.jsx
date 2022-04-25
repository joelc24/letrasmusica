import { useState } from 'react'

const Formulario = () => {

    const [busquedaLetra, setBusquedaLetra] = useState({
        artista: '',
        cancion: ''
    })

    return ( 
        <form>
            <legend>Busca por Artista y Cancion</legend>

            <div className="form-grid">
                <div>
                    <label>Artista</label>
                    <input 
                        type="text" 
                        name="artista" placeholder="Nombre Artista"
                        value={busquedaLetra.artista}
                        onChange={e => setBusquedaLetra({
                            ...busquedaLetra,
                            [e.target.name]: e.target.value
                        })}
                    />
                </div>
                <div>
                    <label>Canción</label>
                    <input 
                        type="text" 
                        name="cancion" placeholder="Nombre Cancion"
                        value={busquedaLetra.cancion}
                        onChange={e => setBusquedaLetra({
                            ...busquedaLetra,
                            [e.target.name]: e.target.value
                        })}
                    />
                </div>
                    <input 
                        type="submit" value="Buscar"
                    />
            </div>
        </form>
    );
}
 
export default Formulario;