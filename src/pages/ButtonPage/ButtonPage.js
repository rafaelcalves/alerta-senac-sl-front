import './ButtonPage.css';
import FireButton from '../../components/FireButton/FireButton';
import { Outlet } from 'react-router-dom';

function ButtonPage() {

    const handleClick = () => {
    fetch('https://alerta-senac-sl-back.onrender.com/alerta', {
      method: 'POST',
      headers: {
        'Content-Type': 'ButtonPagelication/json'
      },
      body: JSON.stringify({}) // Adicione os dados que deseja enviar no corpo da requisição
    })
    .then(response => {
      // Trate a resposta da requisição aqui
      if (response.ok) {
        console.log('POST bem-sucedido!');
      } else {
        console.error('Erro ao fazer o POST.');
      }
    })
    .catch(error => {
      console.error('Erro ao fazer o POST:', error);
    });
  };

  return (
    <div className="buttonPage">
      <header className="buttonPage-header">
          <FireButton  handleClick={handleClick}></FireButton>
      </header>

      <Outlet />

    </div>
  );
}

export default ButtonPage;
