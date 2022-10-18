import { PostsComponent, Profile } from "./styles";
import git from "../../assets/Type=github-brands.svg";
import corp from "../../assets/corp.svg";
import personas from "../../assets/personas.svg";
import up from "../../assets/up.svg";
import { Post } from "../../components/Post";
import { SearchForm } from "./components/SearchForm";

export function Home() {
    return (
        <>
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
            
            <SearchForm />

            <PostsComponent>
               <Post />
               <Post /> 
               <Post /> 
               <Post /> 
            </PostsComponent>
        </>
    )
}