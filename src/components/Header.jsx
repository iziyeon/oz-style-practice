import styled from "styled-components";

function Header() {
  return (
    <StyledHeader>
      <h1>OZ코딩스쿨</h1>
      <ul>
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  flex-wrap: nowrap;
  padding: 20px 20px;
  background-color: black;

  ul{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: nowrap;

    li{
      font-size: 16px;
      font-weight: 400;
      list-style: none;}}
  
`
export default Header;
