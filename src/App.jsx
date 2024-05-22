import './App.css';
import './Style.css'

function App() {
  return (
    <div className="App">

      <img className='img-avatar' src="./assets/img/gps.png" alt="" />

      {/*
      <div className='icons'>

        <a href="https://www.instagram.com/one.local7church/" target='blank'>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
          </svg>
        </a>

        <a href="https://open.spotify.com/playlist/1H6ZTU6Nk0sa50o6ZSaD3V" target='blank'>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288" />
          </svg>
        </a>

        <a href="https://www.youtube.com/channel/UC6_AEpB7jRNMeV9_io3ruWg" target='blank'>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
          </svg>
        </a>

      </div>
*/}
      <h1>Encontre o GPS mais próximo a você!</h1>

      <iframe src="https://www.google.com/maps/d/embed?mid=1nb7p7qKbJuM2LJW-smc4A0RLs6LcpDw&ehbc=2E312F&noprof=1" width="350" height="480"></iframe>


      {/* Accordion 

      <div class="accordion d-flex flex-column align-items-center" id="accordionExample">


        <div class="accordion-item">
          <h2 class="accordion-header" id="headingUm">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseUm" aria-expanded="false" aria-controls="collapseUm">
              Água Limpa - Volta Redonda
            </button>
          </h2>
          <div id="collapseUm" class="accordion-collapse collapse" aria-labelledby="headingUm" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div className='d-flex flex-column align-items-start'>
                <p><strong>Líderes:</strong> Avelino e Mariana</p>
                <p><strong>Horário:</strong> 20:00</p>
                <p><strong>GPS Para:</strong> Homens e Mulheres</p>
                <p><strong>Grupo do Whats:</strong> <a className='' href="https://chat.whatsapp.com/CF8w7rOzJ7RDAfPnj189nZ" target='blank'>Clique Aqui!</a></p>
                <p className='d-flex'><strong>Endereço:</strong> Rua Rio Preto Nº 338, Água Limpa, Volta Redonda.  27250-210</p>
              </div>

              <p className='location'><strong>Como Chegar?</strong></p>

              <iframe className='' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58974.12672292316!2d-44.12625481843871!3d-22.508575511318806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9ebd2c594d74a5%3A0xe14d7304b8a93108!2sR.%20Rio%20Preto%2C%20338%20-%20%C3%81gua%20Limpa%2C%20Volta%20Redonda%20-%20RJ%2C%2027250-210!5e0!3m2!1spt-BR!2sbr!4v1715792282607!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>



            </div>
          </div>
        </div>


      </div>
      */}



    </div>
  );
}

export default App;
