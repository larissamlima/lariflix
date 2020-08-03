import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const[categorias, setCategorias] = useState(['Teste']);
  const [nomeDaCategoria,setNomeDaCategoria] = useState('Valor inicial');

    return (
    <PageDefault> 
      <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        console.log('Você tentou enviar o form né?')
        setCategorias([
          ...categorias,
          nomeDaCategoria
        ]);
      }}>
      {/*state*/}
        <label>
          Nome da Categoria:
          <input
            type="text"
            value={nomeDaCategoria}
            onChange={function funcaoHandler(infosDoEvento){
              setNomeDaCategoria(infosDoEvento.target.value);
            }}
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map( (categoria) => {
          return(
            <li key = {categoria}>
              {categoria}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;