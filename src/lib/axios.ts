import axios from "axios";

export const Api = axios.create({
    baseURL: 'https://api.github.com'
})

//https://api.github.com/search/issues?q=divrepo:aguiarisaac/github-blog
//link para pesquisa de post

//https://api.github.com/repos/aguiarisaac/github-blog/issues
// link que lista todas as issues

//https://api.github.com/repos/aguiarisaac/github-blog/issues/1
// issue especifica

//https://api.github.com/users/aguiarisaac
//link que pega usuarios