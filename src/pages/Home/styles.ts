import styled from "styled-components"

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
    width: 100%;
    justify-content: space-between;
    
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
        text-transform: uppercase;
        position:relative;
        
        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 1px;
          bottom: 0;
          transition: 0.8s;
        }

        &:hover::after {
          background: ${props => props.theme.colors.blue};
        }
        
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

export const PostsComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 3rem 0;
  justify-content: center;
`