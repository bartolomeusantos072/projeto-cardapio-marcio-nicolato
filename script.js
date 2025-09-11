const turno = 'tarde'
const dia = 'quarta-feira'

//mudar dia para data atual
async function fetchCardapios() {
    try {
        const url='https://api-cantina-storage.vercel.app/cardapios'
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json()
        return data

    } catch (error) {
        console.error('Erro ao buscar cardápios:', error);        
    }
}
//tratar data
function organizarRotina(cardapio) {
    console.log(cardapio)
    const hoje = new Date(cardapio.data)


    return {
        dia: hoje.toLocaleDateString('pt-BR', { weekday: 'long' }),
        data: hoje.toLocaleDateString('pt-BR'),
        turno: cardapio.turno
    }

}

function verificarTurnoAtual() {
    const agora = new Date().getHours() * 60 + new Date().getMinutes()

    if (agora > 570 && agora < 720) return 'integral' // 12h
    if (agora >= 720 && agora < 840) return 'tarde' // 14h
    if (agora >= 840 && agora < 1215) return 'noturno' // 20h
    return 'manhã'
}

function mostrarRefeicao(refeicao, titulo) {
    const section = document.createElement('section')

    const h3 = document.createElement('h3')
    h3.textContent = titulo
    main.appendChild(h3)

    const h4 = document.createElement('h4')
    h4.textContent = refeicao.titulo
    section.appendChild(h4)

    const div = document.createElement('div')
    section.appendChild(div)


    const ul = document.createElement('ul')
    div.appendChild(ul)

    for (let i = 0; i < refeicao.itens.length; i++) {
        const li = document.createElement('li')
        li.textContent = refeicao.itens[i]
        ul.appendChild(li)

    }

    const li = document.createElement('li')
    li.textContent = `Bebida: ${refeicao.bebida}`
    ul.appendChild(li)

    const figure = document.createElement('figure')
    div.appendChild(figure)

    for (let i = 0; i < refeicao.img.length; i++) {
        const img = document.createElement('img')
        img.src = refeicao.img[i]
        img.style.padding = '5px'
        figure.appendChild(img)
    }

    return section
}

function fieldsetDados(){
   const fieldset = document.createElement('fieldset');

  fieldset.innerHTML=`<!-- DADOS DO ALUNO -->
  <fieldset>
                    <legend>Informações Pessoais</legend>

                    <label for="nome">Nome completo:</label><br>
                    <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required><br><br>

                    <label for="idade">Idade:</label><br>
                    <input type="number" id="idade" name="idade" min="6" max="20" required><br><br>

                    <label for="email">Email (opcional):</label><br>
                    <input type="email" id="email" name="email" placeholder="email@exemplo.com"><br><br>

                    <label for="data">Data da refeição:</label><br>
                    <input type="date" id="data" name="data" required><br><br>
    </fieldset>
  `
}
function fildsetAvaliarRefeicao(){
const fieldset = document.createElement('fieldset');
    
 return fieldset.innerHTML=`
                <fieldset>
                    <legend>Sobre a refeição de hoje</legend>

                    <p>Você participou da refeição?</p>
                    <input type="radio" id="sim" name="participacao" value="sim" required>
                    <label for="sim">Sim</label><br>
                    <input type="radio" id="nao" name="participacao" value="nao">
                    <label for="nao">Não</label><br><br>

                    <p>Como estava a refeição?</p>
                    <input type="checkbox" id="saborosa" name="avaliacao" value="saborosa">
                    <label for="saborosa">Saborosa</label><br>

                    <input type="checkbox" id="quente" name="avaliacao" value="quente">
                    <label for="quente">Estava quente</label><br>

                    <input type="checkbox" id="pouco-salgada" name="avaliacao" value="pouco-salgada">
                    <label for="pouco-salgada">Pouco salgada</label><br>

                    <input type="checkbox" id="nao-gostei" name="avaliacao" value="nao-gostei">
                    <label for="nao-gostei">Não gostei</label><br><br>

                    <label for="nota">Dê uma nota de 0 a 10:</label><br>
                    <input type="number" id="nota" name="nota" min="0" max="10" step="1"><br><br>

                    <label for="horario">Que horas você almoçou?</label><br>
                    <input type="time" id="horario" name="horario"><br><br>        
                </fieldset>`
}

  function fieldsetComentario(){
      const fieldset = document.createElement('fieldset');

      fieldset.innerHTML=`
      <!-- COMENTÁRIO LIVRE -->
      <fieldset>
      <legend>Comentário livre</legend>
      <label for="assunto">Deixe sua opinião ou sugestão:</label><br>
      <select id="assunto" name="assunto">
      <option value="">-- Escolha uma opção --</option>
      <option value="reclamacao">Reclamação</option>
      <option value="sugestao">Sugestão</option>
      <option value="elogios">Elogios</option>
      <option value="outros-assuntos">Outros Assuntos</option>
      </select><br><br>
      <textarea id="mensagem" name="mensagem" rows="5" cols="40"
      placeholder="Digite aqui..."></textarea><br><br>
      </fieldset>
      
  `
}
function mostrarPesquisa() {
  const aside = document.querySelector('aside');
  aside.innerHTML = ''; // Remove conteúdo anterior
  
  const h2 = document.createElement('h2');
  h2.textContent='Pesquisa sobre Cardápio Escolar'
  aside.appendChild(h2)  
  
  const form = document.createElement('form');

  


    form.appendChild(fieldsetDados());
    form.appendChild(fildsetAvaliarRefeicao());
    form.appendChild(fieldsetComentario());
    const enviar = document.createElement('button');
    enviar.textContent = 'Enviar';
    enviar.type = 'submit';
    form.appendChild(enviar);

  aside.appendChild(form);
}


async function iniciarSite() {
    const h2 = document.createElement('h2');
    main.appendChild(h2);
    const cardapios = await fetchCardapios();
    if (!cardapios) {
        h2.textContent = 'Cardápio Indisponível';
        return;
    }
    

    const hoje = new Date().toISOString().split('T')[0]; // 'YYYY-MM-DD'
    const turnoAtual = verificarTurnoAtual();

    const cardapio = cardapios.find(c =>
        c.turno === turnoAtual &&
        c.data.startsWith(hoje)
    );


    const { dia, data, turno } = organizarRotina(cardapio);
    h2.textContent = 'Cardápio do Dia';

    const titulo = `${data} ${dia} - turno: ${turno}`;
    main.appendChild(mostrarRefeicao(cardapio.refeicao, titulo));

    if (turno === 'tarde' && cardapio.lanche) {
        main.appendChild(mostrarRefeicao(cardapio.lanche, titulo));
    }

    document.getElementById('botaoMostrarFormulario').addEventListener('click', mostrarPesquisa);
}

const main = document.querySelector('main')

iniciarSite()