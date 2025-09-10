const main = document.querySelector('main')
main.innerHTML=`
<h2>Cardápio do Dia</h2>
        <h3>terça-feira - manhã</h3>
        <section>
            <h4>almoço</h4>
            <div>
                <ul>
                    <li>Prato Principal: Feijoada, arroz, farofa, couve</li>
                    <li>Sobremesa: Laranja</li>
                    <li>Bebida: Suco de laranja</li>
                </ul>
                <figure>
                    <img src="https://i.pinimg.com/236x/5c/4c/c7/5c4cc7aa84e7b969255533a4c77952ee.jpg"
                        alt="Imagem de um prato de Feijoada" />
                    <img src="https://cdn0.umcomo.com.br/pt/posts/6/8/2/como_fazer_limonada_286_600.jpg"
                        alt="jarra com suco de limão">
                </figure>
            </div>
        </section>
        <section>
            <h4>Lanche</h4>
            <div>
                <ul>
                    <li>pão com manteiga</li>
                    <li>cafe com leite</li>
                    <li>broa de fubá</li>
                </ul>
                <figure>
                    <img src='https://blog.unicpharma.com.br/wp-content/uploads/2019/06/manteiga_1.jpg'
                        alt='foto de pão com manteiga, broa, café com leite'>
                        <img src="https://hubdocafe.cooxupe.com.br/wp-content/uploads/2024/05/beneficios-do-cafe-com-leite-510x337.jpg" alt="copo de café">
                </figure>
            </div>
        </section>
       <aside>
        <h2>Pesquisa sobre a Cardápio Escolar</h2>
                <p>Queremos saber o que você achou da refeição de hoje! Participe da pesquisa e nos ajude a melhorar!</p>
                <button id="botaoMostrarFormulario" type="button">Responder Pesquisa</button>
       </aside>
`