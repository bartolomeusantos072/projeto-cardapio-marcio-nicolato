const turno = 'tarde'

const cardapio = {
    dia:'terça-feira',
    turno:'integral',
    refeicao:{
        titulo: 'almoco',
        itens:['Feijoada', 'arroz', 'farofa', 'couve'],
        bebida:'Suco de laranja',
        img:["https://i.pinimg.com/236x/5c/4c/c7/5c4cc7aa84e7b969255533a4c77952ee.jpg",'https://cdn0.umcomo.com.br/pt/posts/6/8/2/como_fazer_limonada_286_600.jpg'],
    },
    lanche:{
        titulo: 'cafe da tarde',
        itens:['pão com manteiga','broa de fubá'],
        bebida:'café com leite',
        img:['https://blog.unicpharma.com.br/wp-content/uploads/2019/06/manteiga_1.jpg','https://hubdocafe.cooxupe.com.br/wp-content/uploads/2024/05/beneficios-do-cafe-com-leite-510x337.jpg'],
    }
}

const main = document.querySelector('main')

const h2 = document.createElement('h2')
h2.textContent = 'Cardápio do Dia'
main.appendChild(h2)


const h3 = document.createElement('h3')
h3.textContent = `${cardapio.dia} - ${cardapio.turno}`
main.appendChild(h3)


const section = document.createElement('section')

const h4 = document.createElement('h4')
h4.textContent = cardapio.refeicao.titulo
section.appendChild(h4)

const div = document.createElement('div')
section.appendChild(div)

const ul = document.createElement('ul')
div.appendChild(ul)

const li0 = document.createElement('li')
li0.textContent = `Prato Principal: ${cardapio.refeicao.itens}`
ul.appendChild(li0)

const li1 = document.createElement('li')
li1.textContent = `Bebida: ${cardapio.refeicao.bebida}`
ul.appendChild(li1)



const figure = document.createElement('figure')
div.appendChild(figure)

const img0 = document.createElement('img')
img0.src = cardapio.refeicao.img[0]
img0.alt = cardapio.refeicao.itens
img0.style.padding='5px'
figure.appendChild(img0)

const img1 = document.createElement('img')
img1.src = cardapio.refeicao.img[1]
img1.alt = cardapio.refeicao.bebida
img1.style.padding='5px'
figure.appendChild(img1)

main.appendChild(section)


if (turno === 'tarde') {
    const section = document.createElement('section')

    const h4 = document.createElement('h4')
    h4.textContent = cardapio.lanche.titulo
    section.appendChild(h4)

    const div = document.createElement('div')
    section.appendChild(div)


    const ul = document.createElement('ul')
    div.appendChild(ul)

    const li0 = document.createElement('li')
    li0.textContent = cardapio.lanche.itens[0]
    ul.appendChild(li0)

    const li1 = document.createElement('li')
    li1.textContent = `Sobremesa: ${cardapio.lanche.itens[1]}`
    ul.appendChild(li1)

    const li2 = document.createElement('li')
    li2.textContent = `Bebida: ${cardapio.lanche.bebida}`
    ul.appendChild(li2)

    const figure = document.createElement('figure')
    div.appendChild(figure)

    const img0 = document.createElement('img')
    img0.src = cardapio.lanche.img[0]
    img0.alt = `foto ${cardapio.lanche.itens}`
    img0.style.padding='5px'
    figure.appendChild(img0)

    const img1 = document.createElement('img')
    img1.src = cardapio.lanche.img[1]
    img1.alt = cardapio.lanche.bebida
    img1.style.padding='5px'
    figure.appendChild(img1)

    main.appendChild(section)
}

const aside = document.createElement('aside')

const h2Aside = document.createElement('h2')
h2Aside.textContent = 'Pesquisa sobre Cardápio Escolar'
aside.appendChild(h2Aside)

const p = document.createElement('p')
p.textContent = 'Queremos saber o que você achou da refeição de hoje! Participe da pesquisa e nos ajude a melhorar!'
aside.appendChild(p)

const button = document.createElement('button')
button.textContent = 'Responder Pesquisa'
button.type = 'button'
button.id = 'botaoMostrarFormulario'
aside.appendChild(button)

main.appendChild(aside)
