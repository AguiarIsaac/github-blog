import { createContext, ReactNode, useEffect, useState } from "react";
import { Api } from "../lib/axios";

interface ContextProps {
  children: ReactNode
}

interface profileProps {
  avatar_url: string,
  html_url: string,
  login: string,
  name: string,
  bio: string
  company: string,
  followers: number,
  following: number
}

interface postsListProps {
  title: string,
  url: string,
  html_url: string,
  login: string,
  created_at: string,
  comments: number,
  number: number

}

interface SearchFormConextProps {
  profile: profileProps,
  posts: postsListProps[],
  searchPost: string,
  foundPosts: postsListProps[]
  HandletSearchPost: (post: string) => void;
}

export const SearchFormContext = createContext({} as SearchFormConextProps)

export function SearchFormContextProvider({ children }: ContextProps) {
  const [ profile, setProfile ] = useState({} as profileProps)
  const [ posts, setPostList ] = useState<postsListProps[]>([])
  const [ searchPost, setSearchPost ] = useState('')
  const [ foundPosts, setFoundPosts ] = useState<postsListProps[]>([])

  async function GetProfile() {
    await Api.get('users/aguiarisaac')
      .then((response) => {
        const data = response.data
        const dataFormated = {
          avatar_url: data.avatar_url,
          html_url: data.html_url,
          login: data.login,
          name: data.name,
          bio: data.bio,
          company: data.company,
          followers: data.followers,
          following: data.folowings
        }

        setProfile(dataFormated)
      })
  }

  async function GetPosts() {
    await Api.get('repos/aguiarisaac/github-blog/issues')
      .then((response) => {
        const data = response.data
        const dataFormated = data.map((item: any) => {
          const post = {
            title: item.title,
            url: item.url,
            html_url: item.html_url,
            login: item.user.login,
            created_at: item.created_at,
            comments: item.comments,
            number: item.number
          }
          return post
        })

        setPostList(dataFormated)
      })

  }

  async function GetSearchPost(post: string) {
    await Api.get(`search/issues?q=${post}repo:aguiarisaac/github-blog`)
    .then(response => {
      const data = response.data.items
      
      if (data.length > 0) {
        const dataFormated = data.map((item: any) => {
          const post = {
            title: item.title,
            url: item.url,
            html_url: item.html_url,
            login: item.user.login,
            created_at: item.created_at,
            comments: item.comments,
            number: item.number
          }
          return post
        })
        setFoundPosts(dataFormated)
      } else {
        window.alert('Tema não encontrado =/')
      }
    })
  }

  function HandletSearchPost(post: string) {
    setSearchPost(post)
  }

  useEffect(() => {
    GetProfile()
    GetPosts()
  },[])

  useEffect(() => {
    GetSearchPost(searchPost)
  },[searchPost])

  return (
    <SearchFormContext.Provider value={{ profile, posts, searchPost, HandletSearchPost, foundPosts }}>
      {children}
    </SearchFormContext.Provider>
  )
}