import { useForm, SubmitHandler } from "react-hook-form";
import { SearchFormComponent } from "./styles";

interface Input {
    search: string
}

export function SearchForm() {

    const { register, handleSubmit} = useForm<Input>()
    const SearchPost: SubmitHandler<Input> = data => console.log(data)


    return (
        <SearchFormComponent onChange={handleSubmit(SearchPost)}>
            <div className="titleForm">
                <h5>Publicações</h5>
                <span>6 publicações</span>
            </div>

            <input 
              type="text" 
              placeholder="Buscar Conteúdo"
              {...register('search')}
            />
        </SearchFormComponent>
    )
}