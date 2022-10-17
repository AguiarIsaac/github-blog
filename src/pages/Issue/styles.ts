import styled from "styled-components";

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 2rem 2rem 2.5rem;
  border-radius: 10px;
  height: 10.5rem;
  background: ${props => props.theme.colors.baseProfile};

  h4 {
    font-size: 24px;
    color: ${props => props.theme.colors.baseTitle};
  }

  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;

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

        #arrow {
            width: 0.4rem;
        }
      }
  }

  .moreInfos {
    display: flex;
    align-items: center;
    gap: 1.625rem;
    /* margin-top: 1.9rem; */
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

export const PostContent = styled.div`
 
`