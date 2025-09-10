const turno = 'tarde'
const dia = 'quarta-feira'

const cardapio = {
    dia: 'quarta-feira',
    turno: 'integral',
    refeicao: {
        titulo: 'almoco',
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


function mostrarRefeicao(refeicao) {
    const section = document.createElement('section')

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
    const main = document.querySelector('main')
    const h2 = document.createElement('h2')
    main.appendChild(h2)
    if (dia === 'domingo') {
        h2.textContent = 'Cardápio Indisponivel'
    } else {
        h2.textContent = 'Cardápio do Dia'

        const h3 = document.createElement('h3')
        h3.textContent = `${cardapio.dia} - turno: ${cardapio.turno}`
        main.appendChild(h3)


        main.appendChild(mostrarRefeicao(cardapio.refeicao))

        if (turno === 'tarde') {
            main.appendChild(mostrarRefeicao(cardapio.lanche))
        }

        mostrarPesquisa()

    }

}

iniciarSite()