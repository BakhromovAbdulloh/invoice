import styled from "styled-components";
import { Button } from "../button";

export const Title = styled.h1`
  color: #0c0e16;
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  margin: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  & > from {
    margin-left: auto;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #888eb0;
  margin: 8px 0 0 0;
`;

export const ButtonAdd = styled(Button)`
  margin-left: 48px;
  display: flex;
  align-items: center;
  background: #7c5dfa;
  border-radius: 24px;
  padding: 8px 15px 8px 8px;
  border: none;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
  text-decoration: none;
  & > .plus {
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }
`;
