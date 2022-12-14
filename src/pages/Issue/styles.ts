import styled from "styled-components";
import ReactMarkdown from 'react-markdown';

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 2rem 2rem 2.5rem;
  border-radius: 10px;
  min-height: 10.5rem;
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
    flex-wrap: wrap;
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

export const PostContent = styled.div`
  padding: 2rem;
`

export const MarkDown = styled(ReactMarkdown)`
  
  pre {
    background: ${props => props.theme.colors.basePost};
    color: ${props => props.theme.colors.baseText};
    border-radius: 10px;
    padding: 2rem 1rem;
    margin: 2rem 0;
    width: 100%;
    overflow: auto;
    white-space: break-spaces;
  }

  img {
    border-radius: 10px;
    margin: 2rem 0;
    width: 100%;
  }
`