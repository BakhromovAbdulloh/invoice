import styled from "styled-components";
import { Button } from "../button";

export const InvoiceItem = styled.ul`
  padding: 0;
  & > li {
    list-style: none;
    position: relative;
  }
`;

export const InvoiceListID = styled.span`
  color: #0c0e16;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  & > span {
    color: #7e88c3;
  }
`;

export const InvoiceListDue = styled.p`
  color: #888eb0;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
`;

export const InvoiceListTo = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #858bb2;
`;

export const InvoiceListPrice = styled.span`
  color: #0c0e16;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

export const InvoiceListWrapper = styled.div`
  padding: 16px 24px 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  background: #ffffff;
  border-radius: 8px;
  & > .paid {
    background: rgb(230, 247, 241);
    color: #33d69f;
    padding: 13px 29px 12px 46px;
    border-radius: 6px;
  }
  & > .paid::before {
    content: "";
    background: #33d69f;
    display: block;
    position: absolute;
    height: 7px;
    width: 7px;
    right: 0;
    top: 0;
    transform: translate(-85px, 32px);
    border-radius: 50%;
  }
  & > .peding::before {
    content: "";
    border-radius: 50%;
    background: #ff8f00;
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-95px, 32px);
    height: 7px;
    width: 7px;
  }
  & > .peding {
    border-radius: 6px;
    background: rgb(253, 235, 211);
    color: #ff8f00;
    padding: 13px 17px 12px 34px;
  }
`;

export const InvoiceListButton = styled(Button)``;
