export default function Sidebar() {
    return (
        <div class="sidebar">
            <Usuario
                imagem="assets/img/catanacomics.svg"
                nomeUnico="catanacomics"
                nome="Catana"
            />

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                <Sugestao
                    imagem="assets/img/bad.vibes.memes.svg"
                    nome="bad.vibes.memes"
                    razao="Segue você"
                    seguir="Seguir"
                />
                <Sugestao
                    imagem="assets/img/chibirdart.svg"
                    nome="chibirdart"
                    razao="Segue você"
                    seguir="Seguir"
                />
                <Sugestao
                    imagem="assets/img/razoesparaacreditar.svg"
                    nome="razoesparaacreditar"
                    razao="Novo no Instagram"
                    seguir="Seguir"
                />
                <Sugestao
                    imagem="assets/img/adorable_animals.svg"
                    nome="adorable_animals"
                    razao="Segue você"
                    seguir="Seguir"
                />
                <Sugestao
                    imagem="assets/img/smallcutecats.svg"
                    nome="smallcutecats"
                    razao="Segue você"
                    seguir="Seguir"
                />
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
    return (
        <div class="usuario">
            <img src={props.imagem} />
            <div class="texto">
                <strong>{props.nomeUnico}</strong>
                {props.nome}
            </div>
        </div>
    );
}

function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imagem} />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.razao}</div>
                </div>
            </div>

            <div class="seguir">{props.seguir}</div>
        </div>
    );
}