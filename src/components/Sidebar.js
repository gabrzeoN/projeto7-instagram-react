const usuario = {
    imagem: "assets/img/catanacomics.svg",
    nomeUnico: "catanacomics",
    nome: "Catana"
};

const sugestoes = [
    {
        imagem: "assets/img/bad.vibes.memes.svg",
        nome: "bad.vibes.memes",
        razao: "Segue você",
        seguir: "Seguir"
    },
    {
        imagem: "assets/img/chibirdart.svg",
        nome: "chibirdart",
        razao: "Segue você",
        seguir: "Seguir"
    },
    {
        imagem: "assets/img/razoesparaacreditar.svg",
        nome: "razoesparaacreditar",
        razao: "Novo no Instagram",
        seguir: "Seguir"
    },
    {
        imagem: "assets/img/adorable_animals.svg",
        nome: "adorable_animals",
        razao: "Segue você",
        seguir: "Seguir"
    },
    {
        imagem: "assets/img/smallcutecats.svg",
        nome: "smallcutecats",
        razao: "Segue você",
        seguir: "Seguir"
    }
];

export default function Sidebar() {
    return (
        <div class="sidebar">
            <Usuario
                imagem={usuario.imagem}
                nomeUnico={usuario.nomeUnico}
                nome={usuario.nome}
            />

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {
                    sugestoes.map((sugestao) => {
                        const {imagem, nome, razao, seguir} = sugestao;
                        return (
                            <Sugestao 
                                imagem={imagem}
                                nome={nome}
                                razao={razao}
                                seguir={seguir}    
                            />
                        );
                    })
                }
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}

function Usuario(props) {
    const {imagem, nomeUnico, nome} = props;
    return (
        <div class="usuario">
            <img src={imagem} />
            <div class="texto">
                <strong>{nomeUnico}</strong>
                {nome}
            </div>
        </div>
    );
}

function Sugestao(props) {
    const {imagem, nome, razao, seguir} = props;
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={imagem} />
                <div class="texto">
                    <div class="nome">{nome}</div>
                    <div class="razao">{razao}</div>
                </div>
            </div>

            <div class="seguir">{seguir}</div>
        </div>
    );
}