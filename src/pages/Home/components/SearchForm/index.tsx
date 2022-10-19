import { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SearchFormContext } from "../../../../contexts/SearchFormContext";
import { SearchFormComponent } from "./styles";

interface Input {
    search: string
}

export function SearchForm() {
    const data = useContext(SearchFormContext)
    const quantityPosts = data.posts.length
    const [searchInput, setSearchInput] = useState('')

    const { register, handleSubmit} = useForm<Input>()
    const SearchPost: SubmitHandler<Input> = data => setSearchInput(data.search.replace(/ /g,'20%'))

    console.log(searchInput)
    
    return (
        <SearchFormComponent onChange={handleSubmit(SearchPost)}>
            <div className="titleForm">
                <h5>Publicações</h5>
                <span>{quantityPosts} publicações</span>
            </div>

            <input 
              type="text" 
              placeholder="Buscar Conteúdo"
              {...register('search')}
            />
        </SearchFormComponent>
    )
}