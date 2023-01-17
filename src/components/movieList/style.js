import styled from "styled-components";
export const Style = styled.div`
  .movie-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;

    li {
      list-style: none;
      .poster {
        width: 200px;
        height: auto;
      }
    }
  }
`;
export default Style;
