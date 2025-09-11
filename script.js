const turno = 'tarde'
const dia = 'quarta-feira'

//mudar dia para data atual
const cardapio = {
    data: '2025-09-10T00:00:00-03:00',
    turno: 'noturno',
    refeicao: {
        titulo: 'janta',
        itens: ['Feijoada', 'arroz', 'farofa', 'couve'],
        bebida: 'Suco de laranja',
        img: ["https://i.pinimg.com/236x/5c/4c/c7/5c4cc7aa84e7b969255533a4c77952ee.jpg", 'https://cdn0.umcomo.com.br/pt/posts/6/8/2/como_fazer_limonada_286_600.jpg'],
    },
    lanche: {
        titulo: 'cafe da tarde',
        itens: ['pão com manteiga', 'broa de fubá'],
        bebida: 'café com leite',
        img: ['https://blog.unicpharma.com.br/wp-content/uploads/2019/06/manteiga_1.jpg', 'https://hubdocafe.cooxupe.com.br/wp-content/uploads/2024/05/beneficios-do-cafe-com-leite-510x337.jpg'],
    }
}
//tratar data
function organizarRotina(cardapio) {
    const hoje = new Date(cardapio.data)


    return {
        dia: hoje.toLocaleDateString('pt-BR', { weekday: 'long' }),
        data: hoje.toLocaleDateString('pt-BR'),
        turno: cardapio.turno
    }

}

function verificarTurnoAtual() {
    const agora = new Date().getHours() * 60 + new Date().getMinutes()
    if (agora <= 570) return 'manha' // 9h30}
    if (agora > 570 && agora < 720) return 'integral' // 12h
    if (agora >= 720 && agora < 840) return 'tarde' // 14h
    if (agora >= 840 && agora < 1215) return 'integral'
    return 'noturno' // 20h
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

function mostrarPesquisa() {
    const aside = document.createElement('aside')

    const h2 = document.createElement('h2')
    h2.textContent = 'Pesquisa sobre Cardápio Escolar'
    aside.appendChild(h2)

    const p = document.createElement('p')
    p.textContent = 'Queremos saber o que você achou da refeição de hoje! Participe da pesquisa e nos ajude a melhorar!'
    aside.appendChild(p)


    const button = document.createElement('button')
    button.textContent = 'Responder Pesquisa'
    button.type = 'button'
    button.id = 'botaoMostrarFormulario'
    aside.appendChild(button)

    main.appendChild(aside)
}


function iniciarSite() {

    const h2 = document.createElement('h2')
    main.appendChild(h2)

    const { dia, data, turno } = organizarRotina(cardapio)
    if (turno !== verificarTurnoAtual() || !dia) {
        h2.textContent = 'Cardápio Indisponivel'    
    } else {
        h2.textContent = 'Cardápio do Dia'

        
        const titulo = `${data} ${dia} - turno: ${turno}`
        

        main.appendChild(mostrarRefeicao(cardapio.refeicao, titulo))

        if (turno === 'noturno') {
            const titulo = `${data} ${dia} - turno: ${turno}`
            main.appendChild(mostrarRefeicao(cardapio.lanche, titulo))
        }

        mostrarPesquisa()

    }

}
const main = document.querySelector('main')

iniciarSite()