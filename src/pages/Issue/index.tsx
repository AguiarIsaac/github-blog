import { NavLink, useParams } from "react-router-dom";

import remarkGfm from 'remark-gfm';
import { MarkDown, PostContent, PostInfo } from "./styles";
import arrow from "../../assets/arrow.svg";
import up from "../../assets/up.svg";
import git from "../../assets/Type=github-brands.svg";
import calendar from "../../assets/calendar.svg";
import commit from "../../assets/commit.svg";
import { useContext, useEffect, useState } from "react";
import { Api } from "../../lib/axios";
import { SearchFormContext } from "../../contexts/SearchFormContext";

interface postProps {
  title: string,
  url: string,
  html_url: string,
  login: string,
  created_at: string,
  comments: number,
  number: number,
  body: any
}

export function Issue() {
  const { id } = useParams();
  const [post, setPost] = useState({} as postProps)

  useEffect(() => {
    Api.get(`repos/aguiarisaac/github-blog/issues/${id}`)
      .then(response => {
        const dataFormated: any = {
          title: response.data.title,
          url: response.data.url,
          html_url: response.data.html_url,
          login: response.data.user.login,
          created_at: response.data.created_at,
          comments: response.data.comments,
          number: response.data.number,
          body: response.data.body
        }
        setPost(dataFormated)
      })

    // const dataFormated = data.posts.find(element => element.number === idFormated)
  }, [])

  return (
    <>
      <PostInfo>
        <div className="links">
          <NavLink to="/">
            <img src={arrow} id="arrow" />
            Voltar
          </NavLink>

          <a href={post.html_url} target="_blanck">
            Ver no GitHub
            <img src={up} />
          </a>
        </div>

        <h4>{post.title}</h4>

        <div className="moreInfos">
          <span><img src={git} /> <p>{post.login}</p></span>
          <span><img src={calendar} /><p>{new Date(post.created_at).toLocaleDateString('pt-BR')}</p></span>
          <span><img src={commit} /> <p>{post.comments}</p></span>
        </div>
      </PostInfo>

      <PostContent>
        <MarkDown children={post.body} remarkPlugins={[remarkGfm]} />
      </PostContent>
    </>
  )
}