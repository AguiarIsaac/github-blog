import { createContext, ReactNode } from "react";

interface ContextProps {
    children: ReactNode
}

interface SearchFormConextProps {
    profile: {
        avatar_url: string,
        html_url: string,
        login: string,
        name: string,
        bio: string
        company: string,
        folowers: number,
        following: number
    },
    postlist: {
        title: string,
        body: string
        html_url: string,
        login: string,
        created_at: string,
        comments: number,

    }[]
}

export const SearchFormContext = createContext({} as SearchFormConextProps)

export function SearchFormContextProvider({children}: ContextProps) {

    const profile = {
        avatar_url: 'https://avatars.githubusercontent.com/u/37755163?v=4',
        html_url: 'https://github.com/AguiarIsaac',
        login: 'AguiarIsaac',
        name: 'Isaac Aguiar',
        bio: 'front end engineer',
        company: 'Miranda Computação',
        folowers: 6,
        following: 6
    }

    const postlist = [{
        title: 'Centralizar elementos com CSS',
        body: "# teste",
        html_url: 'https://github.com/AguiarIsaac/github-blog/issues/1',
        login: 'AguiarIsaac',
        created_at: '2022-10-14T18:58:22Z',
        comments: 5,
    }]
    
    return (
        <SearchFormContext.Provider value={{profile, postlist}}>
            {children}
        </SearchFormContext.Provider>
    )
}

//https://api.github.com/search/issues?q=divrepo:aguiarisaac/github-blog
//link para pesquisa de post

//https://api.github.com/repos/aguiarisaac/github-blog/issues
// link que lista todas as issues

//https://api.github.com/repos/aguiarisaac/github-blog/issues/1
// issue especifica

//https://api.github.com/users/aguiarisaac
//link que pega usuarios