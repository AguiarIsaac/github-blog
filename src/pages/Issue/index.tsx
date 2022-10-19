import { NavLink } from "react-router-dom";

import remarkGfm from 'remark-gfm';
import { MarkDown, PostContent, PostInfo } from "./styles";
import arrow from "../../assets/arrow.svg";
import up from "../../assets/up.svg";
import git from "../../assets/Type=github-brands.svg";
import calendar from "../../assets/calendar.svg";
import commit from "../../assets/commit.svg";
import { useContext, useEffect, useState } from "react";
import { SearchFormContext } from "../../contexts/SearchFormContext";
import axios from "axios";

export function Issue() {
    const data = useContext(SearchFormContext)
    const Post = data.postlist[0]
    const [bodyPost, setBodyPost] = useState('')

    useEffect(() => {
        axios.get(Post.url).then(response => {setBodyPost(response.data.body)})
    },[])

    return (
        <>
            <PostInfo>
                <div className="links">
                    <NavLink to="/">
                        <img src={arrow} id="arrow"/>
                        Voltar
                    </NavLink>

                    <a href="#">
                        Ver no GitHub
                        <img src={up}/>
                    </a>
                </div>

                <h4>JavaScript data types and data structures</h4>

                <div className="moreInfos">
                    <span><img src={git}/> <p>AguiarIsaac</p></span>
                    <span><img src={calendar}/> <p>Miranda Computação</p></span>
                    <span><img src={commit}/> <p>Comentários</p></span>
                </div>
            </PostInfo>

            <PostContent>
                <MarkDown children={bodyPost} remarkPlugins={[remarkGfm]} />
            </PostContent>
        </>
    )
}