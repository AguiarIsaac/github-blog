import { Container, Profile, SearchForm } from "./styles";
import git from "../../assets/Type=github-brands.svg";
import corp from "../../assets/corp.svg";
import personas from "../../assets/personas.svg";
import up from "../../assets/up.svg";

export function DefaultLayout() {
    return (
        <Container>
            <Profile>
                <div className="avatar">
                    <img src="https://avatars.githubusercontent.com/u/37755163?v=4" alt="foto de perfil" />
                </div>

                <div className="description">
                    <div className="title">
                        <h4>Isaac Aguiar</h4>
                        <a href="#">Github <img src={up}/></a>
                    </div>

                    <p>
                      Tristique volutpat pulvinar vel massa, pellentesque 
                      egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. 
                      Nunc, volutpat pulvinar vel mass.
                    </p>

                    <div className="moreInfos">
                        <span><img src={git}/> <p>AguiarIsaac</p></span>
                        <span><img src={corp}/> <p>Miranda Computação</p></span>
                        <span><img src={personas}/> <p>6 seguidores</p></span>
                    </div>
                </div>
            </Profile>
            
            <SearchForm>
                <div className="titleForm">
                    <h5>Publicações</h5>
                    <span>6 publicações</span>
                </div>

                <input type="text" placeholder="Buscar Conteúdo"/>
            </SearchForm>
        </Container>
    )
}