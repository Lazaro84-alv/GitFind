import { Header } from '../../components/Header';
import background from '../../assets/background.png';

import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="" />
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username" className="input" />
            <button className="button">Buscar</button>
          </div>
          <div className="perfil">
            <img
              src="https://avatars.githubusercontent.com/u/75143575?v=4"
              className="profile"
              alt="imagem de perfil"
            />
            <div>
              <h3>Lázaro Alves</h3>
              <span>@Lazaro84-alv</span>
              <p>Descrição</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default App;
