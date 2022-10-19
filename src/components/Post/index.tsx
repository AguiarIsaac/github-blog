import { PostComponent } from "./styles";

interface PostProps {
    
}

export function Post() {
    return (
        <PostComponent to="/q">
            <div className="title">
                <h5>JavaScript data types and data structures</h5>
                <span>Há 1 dia</span>
            </div>

            <p>
              Programming languages all have built-in data structures, but 
              these often differ from one language to another. This article 
              attempts to list the built-in data structures available in
            </p>
        </PostComponent>
    )
}