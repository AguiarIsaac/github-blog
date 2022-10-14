import styled from "styled-components";

export const Container = styled.main`
    max-width: 864px;
    margin: 0 auto;
    margin-top: -75px;
    height: 13.25rem;
    background: ${props => props.theme.colors.baseProfile};
    border-radius: 10px;

    padding: 2rem 2rem 2rem 2.5rem;
`

export const Profile = styled.div`
  display: flex;
  gap: 2rem;

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