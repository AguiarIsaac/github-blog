import styled from "styled-components";

export const SearchFormComponent = styled.form`
  margin-top: 4.5rem;

  .titleForm {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h5 {
      font-size: 18px;
      font-weight: bold;
    }

    span {
      color: ${props => props.theme.colors.baseSpan};
      font-size: 14px;
    }
  }

  input {
    width: 100%;
    margin-top: 0.75rem;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    font-size: 16px;
    border: 1px solid ${props => props.theme.colors.baseBorder};
    background: ${props => props.theme.colors.baseInput};
    color: ${props => props.theme.colors.baseLabel};
    caret-color: ${props => props.theme.colors.blue}; // cor da barrinha do texto

    &::placeholder {
      color: ${props => props.theme.colors.baseLabel};
    }

    &:focus-visible {
      outline: none;
      border: 1px solid ${props => props.theme.colors.blue};
    }
  }
`