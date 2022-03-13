export default function Esquerda() {
    return (
        <div class="esquerda">
            <div class="stories">
                <Story imagem="assets/img/9gag.svg" usuario="9gag" />
                <Story imagem="assets/img/meowed.svg" usuario="meowed" />
                <Story imagem="assets/img/barked.svg" usuario="barked" />
                <Story imagem="assets/img/nathanwpylestrangeplanet.svg" usuario="nathanwpylestrangeplanet" />
                <Story imagem="assets/img/wawawicomics.svg" usuario="wawawicomics" />
                <Story imagem="assets/img/respondeai.svg" usuario="respondeai" />
                <Story imagem="assets/img/filomoderna.svg" usuario="filomoderna" />
                <Story imagem="assets/img/memeriagourmet.svg" usuario="memeriagourmet" />

                <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>
            
            <div class="posts">
                <Post
                    imagemUsuario="assets/img/meowed.svg"
                    nomeUsuario="meowed"
                    imagemConteudo="assets/img/gato-telefone.svg"
                    imagemQuemCurtiu="assets/img/respondeai.svg"
                    quemCurtiu="respondeai"
                    quantidadeCurtidas="101.523"
                />
                <Post
                    imagemUsuario="assets/img/barked.svg"
                    nomeUsuario="barked"
                    imagemConteudo="assets/img/dog.svg"
                    imagemQuemCurtiu="assets/img/adorable_animals.svg"
                    quemCurtiu="adorable_animals"
                    quantidadeCurtidas="99.159"
                />
            </div>
        </div>
    );
}

function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.imagem} />
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </div>
    );
}

function Post(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imagemUsuario} />
                    {props.nomeUsuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imagemConteudo} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imagemQuemCurtiu} />
                    <div class="texto">
                        Curtido por <strong>{props.quemCurtiu}</strong> e <strong>outras {props.quantidadeCurtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}