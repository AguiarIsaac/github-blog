import styled from "styled-components";

export const PostComponent = styled.div`
    background: ${props => props.theme.colors.basePost};
    max-width: 26rem;
    max-height: 16.25rem;
    padding: 2rem;
    border-radius: 10px;
    cursor: pointer;
    
    .title {
        display: flex;
        justify-content: space-between;
        h5 {
          color: ${props => props.theme.colors.baseTitle};
          font-weight: bold;
          font-size: 18px;
          width: 17rem;
        }

        span {
            color: ${props => props.theme.colors.baseSpan};
        }
    }

    p {
      margin-top: 1.25rem;
      font-size: 16px;
      color:${props => props.theme.colors.baseText};
      line-height: 160%;
    }
`