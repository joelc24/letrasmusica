import { useState } from 'react'
import useLetras from '../hooks/useLetras';

const Formulario = () => {

    const { setAlerta } = useLetras();

    const [busquedaLetra, setBusquedaLetra] = useState({
        artista: '',
        cancion: ''
    })

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(busquedaLetra).includes('')){
            setAlerta('Coloca Nombre de Artista y Canción')
            return
        }

        setAlerta('')
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
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