const stories = [
    {imagem: "assets/img/9gag.svg", usuario: "9gag"},
    {imagem: "assets/img/meowed.svg", usuario: "meowed"},
    {imagem: "assets/img/barked.svg", usuario: "barked"},
    {imagem: "assets/img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet"},
    {imagem: "assets/img/wawawicomics.svg", usuario: "wawawicomics"},
    {imagem: "assets/img/respondeai.svg", usuario: "respondeai"},
    {imagem: "assets/img/filomoderna.svg", usuario: "filomoderna"},
    {imagem: "assets/img/memeriagourmet.svg", usuario: "memeriagourmet"}
];

const posts = [
    {
        imagemUsuario: "assets/img/meowed.svg",
        nomeUsuario: "meowed",
        imagemConteudo: "assets/img/gato-telefone.svg",
        imagemQuemCurtiu: "assets/img/respondeai.svg",
        quemCurtiu: "respondeai",
        quantidadeCurtidas: "101.523"
    },
    {
        imagemUsuario: "assets/img/barked.svg",
        nomeUsuario: "barked",
        imagemConteudo: "assets/img/dog.svg",
        imagemQuemCurtiu: "assets/img/adorable_animals.svg",
        quemCurtiu: "adorable_animals",
        quantidadeCurtidas: "99.159"
    }
];

export default function Esquerda() {
    return (
        <div class="esquerda">
            <div class="stories">
                {
                    stories.map((story) => {
                        const {imagem, usuario} = story;
                        return(
                            <Story imagem={imagem} usuario={usuario} />
                        );
                    })
                }
                <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>

            <div class="posts">      
                {
                    posts.map((post) => {
                        const {
                            imagemUsuario, nomeUsuario, imagemConteudo,
                            imagemQuemCurtiu, quemCurtiu, quantidadeCurtidas
                        } = post;
                        return(
                            <Post
                                imagemUsuario={imagemUsuario}
                                nomeUsuario={nomeUsuario}
                                imagemConteudo={imagemConteudo}
                                imagemQuemCurtiu={imagemQuemCurtiu}
                                quemCurtiu={quemCurtiu}
                                quantidadeCurtidas={quantidadeCurtidas}
                            />
                        );
                    })
                }   
            </div>
        </div>
    );
}

function Story(props) {
    const {imagem, usuario} = props;
    return (
        <div class="story">
            <div class="imagem">
                <img src={imagem} />
            </div>
            <div class="usuario">
                {usuario}
            </div>
        </div>
    );
}

function Post(props) {
    const {
        imagemUsuario, nomeUsuario, imagemConteudo,
        imagemQuemCurtiu, quemCurtiu, quantidadeCurtidas
    } = props;
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={imagemUsuario} />
                    {nomeUsuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={imagemConteudo} />
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
                    <img src={imagemQuemCurtiu} />
                    <div class="texto">
                        Curtido por <strong>{quemCurtiu}</strong> e <strong>outras {quantidadeCurtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}