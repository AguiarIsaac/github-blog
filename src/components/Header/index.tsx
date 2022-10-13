import { HeaderComp } from "./styles";
import logo from "../../assets/logo.svg"
export function Header() {
    return (
        <HeaderComp>
            <img src={logo} alt="github blog" />
        </HeaderComp>
    )
}