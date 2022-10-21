import { PostsComponent, Profile } from "./styles";
import git from "../../assets/Type=github-brands.svg";
import corp from "../../assets/corp.svg";
import personas from "../../assets/personas.svg";
import up from "../../assets/up.svg";
import { Post } from "../../components/Post";
import { SearchForm } from "./components/SearchForm";
import { useContext } from "react";
import { SearchFormContext } from "../../contexts/SearchFormContext";

export function Home() {
  const data = useContext(SearchFormContext)
  const profile = data.profile
  const posts = data.posts
  const foundPosts = data.foundPosts

  return (
    <>
      <Profile>
        <div className="avatar">
          <img src={profile.avatar_url} alt="foto de perfil" />
        </div>

        <div className="description">
          <div className="title">
            <h4>{profile.name}</h4>
            <a href={profile.html_url} target="_blanck">Github <img src={up} /></a>
          </div>

          <p>{profile.bio}</p>

          <div className="moreInfos">
            <span><img src={git} /> <p>{profile.login}</p></span>
            <span><img src={corp} /> <p>{profile.company}</p></span>
            <span><img src={personas} /> <p>{profile.followers} seguidores</p></span>
          </div>
        </div>
      </Profile>

      <SearchForm />

      <PostsComponent>
        {
          !foundPosts.length && posts.map(post => {
            return (
              <Post
                key={post.number}
                title={post.title}
                created_at={post.created_at}
                body={post.url}
                id={post.number}
              />
            )
          })
        }

        {foundPosts.length > 0 && foundPosts.map(post => {
          return (
            <Post
              key={post.number}
              title={post.title}
              created_at={post.created_at}
              body={post.url}
              id={post.number}
            />
          )
        })}
        
      </PostsComponent>
    </>
  )
}