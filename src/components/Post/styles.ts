import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ReactMarkdown from 'react-markdown';

export const PostComponent = styled(NavLink)`
    background: ${props => props.theme.colors.basePost};
    max-width: 26rem;
    max-height: 16.25rem;
    padding: 2rem;
    border-radius: 10px;
    cursor: pointer;
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    justify-content: space-between;


    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      margin: -1px;
      border-radius: inherit;
      transition: 0.8s;
    }

    &:hover::after {
      background: ${props => props.theme.colors.baseLabel};
    }
    
    .title {
        display: flex;
        justify-content: space-between;
        h5 {
          color: ${props => props.theme.colors.baseTitle};
          font-weight: bold;
          font-size: 18px;
          width: 17rem;
        }

        small {
          color: ${props => props.theme.colors.baseSpan};
          text-align: center;
          font-size: 12px;
        }
    }

    p {
      margin-top: 1.25rem;
      font-size: 16px;
      color:${props => props.theme.colors.baseText};
      line-height: 160%;
    }
`

export const MarkDown = styled(ReactMarkdown)`

  pre,
  img,
  h1,
  h2,
  h3,
  h4,
  a,
  p {
    display: none;
  }

  p:nth-child(1) {
    display: initial;
  }
`