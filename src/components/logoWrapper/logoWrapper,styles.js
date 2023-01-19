import styled from "styled-components";

export const LogoWrapperEl = styled.div`
  background: #373b53;
  border-radius: 0px 20px 20px 0px;
  width: 103px;
  height: 100%;
  flex-direction: column;
  position: fixed;
  display: flex;
  justify-content: space-between;

  & > .logo {
    width: 40px;
    height: 40px;
    margin: 0 auto;
    padding: 0 0 24px 0;
    &::before {
      content: "";
      display: block;
      width: 103px;
      height: 1px;
      border: 1px solid #494e6e;
    }
  }
`;
