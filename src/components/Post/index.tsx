import { Api } from "../../lib/axios";
import { MarkDown, PostComponent } from "./styles";
import remarkGfm from 'remark-gfm';
import {  useEffect, useState } from "react";
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostProps {
    title: string
    created_at: string
    body: string
    id: number
}

export function Post({title, created_at, body, id}: PostProps) {
    
    const [bodyPost, setBodyPost] = useState<any>()

    useEffect(()=> {
        Api.get(`repos/aguiarisaac/github-blog/issues/${id}`)
        .then(response => {
            setBodyPost(response.data.body)
        })
    },[])
    
    return (
        <PostComponent onClick={() => {console.log(id)}}>
            <div className="title">
                <h5>{title}</h5>
                <small>{formatDistanceToNow(new Date(created_at), {
                    addSuffix: true,
                    locale: ptBR
                })}</small>
            </div>

            <MarkDown children={bodyPost} remarkPlugins={[remarkGfm]} />
        </PostComponent>
    )
}

//to={`/${id}`}