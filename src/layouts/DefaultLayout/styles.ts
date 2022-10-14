import styled from "styled-components";

export const Container = styled.main`
  max-width: 864px;
  margin: 0 auto;
  margin-top: -75px;
  
`

export const Profile = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem 2rem 2rem 2.5rem;
  border-radius: 10px;
  max-height: 13.25rem;
  background: ${props => props.theme.colors.baseProfile};

  .avatar img {
    max-width: 9.25rem;
    height: auto;
    border-radius: 10px;
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    .title {

      display: flex;
      justify-content: space-between;
      align-items: center;

      h4 {
        color: ${props => props.theme.colors.baseTitle};
        font-size: 24px;
        font-weight: bold;
        line-height: 130%;
      }

      a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: bold;
        
        img {
            width: 0.6rem;   
        }
      }
    }
  }

  p {
    font-size: 16px;
  }

  .moreInfos {
    display: flex;
    align-items: center;
    gap: 1.625rem;
    margin-top: 1.9rem;
    img {
        width: 1rem;
    }

    span {
        display: flex;
        align-items: center;
        gap:0.5rem;
    }
  }
`

export const SearchForm = styled.form`
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