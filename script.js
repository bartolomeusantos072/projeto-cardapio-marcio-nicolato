const turno = 'tarde'

const main = document.querySelector('main')

const h2 = document.createElement('h2')
h2.textContent = 'Cardápio do Dia'
main.appendChild(h2)

const h3 = document.createElement('h3')
h3.textContent = 'terça-feira - manhã'
main.appendChild(h3)


const section = document.createElement('section')

const h4 = document.createElement('h4')
h4.textContent = 'almoço'
section.appendChild(h4)

const div = document.createElement('div')
section.appendChild(div)


const ul = document.createElement('ul')
div.appendChild(ul)

const li0 = document.createElement('li')
li0.textContent = 'Prato Principal: Feijoada, arroz, farofa, couve'
ul.appendChild(li0)

const li1 = document.createElement('li')
li1.textContent = 'Sobremesa: Laranja'
ul.appendChild(li1)

const li2 = document.createElement('li')
li2.textContent = 'Bebida: Suco de laranja'
ul.appendChild(li2)

const figure = document.createElement('figure')
div.appendChild(figure)

const img0 = document.createElement('img')
img0.src = 'https://i.pinimg.com/236x/5c/4c/c7/5c4cc7aa84e7b969255533a4c77952ee.jpg'
img0.alt = 'Imagem de um prato de Feijoada'
img0.style.padding='5px'
figure.appendChild(img0)

const img1 = document.createElement('img')
img1.src = 'https://cdn0.umcomo.com.br/pt/posts/6/8/2/como_fazer_limonada_286_600.jpg'
img1.alt = 'jarra com suco de limão'
img1.style.padding='5px'
figure.appendChild(img1)

main.appendChild(section)


if (turno === 'tarde') {
    const section = document.createElement('section')

    const h4 = document.createElement('h4')
    h4.textContent = 'lanche'
    section.appendChild(h4)

    const div = document.createElement('div')
    section.appendChild(div)


    const ul = document.createElement('ul')
    div.appendChild(ul)

    const li0 = document.createElement('li')
    li0.textContent = 'pão com manteiga'
    ul.appendChild(li0)

    const li1 = document.createElement('li')
    li1.textContent = 'Sobremesa: broa de fubá'
    ul.appendChild(li1)

    const li2 = document.createElement('li')
    li2.textContent = 'Bebida: café com leite'
    ul.appendChild(li2)

    const figure = document.createElement('figure')
    div.appendChild(figure)

    const img0 = document.createElement('img')
    img0.src = 'https://blog.unicpharma.com.br/wp-content/uploads/2019/06/manteiga_1.jpg'
    img0.alt = 'foto de pão com manteiga, broa, café com leite'
    img0.style.padding='5px'
    figure.appendChild(img0)

    const img1 = document.createElement('img')
    img1.src = 'https://hubdocafe.cooxupe.com.br/wp-content/uploads/2024/05/beneficios-do-cafe-com-leite-510x337.jpg'
    img1.alt = 'copo de café'
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
