import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../consts";
import { invoicesAction } from "../../store";
import { Button } from "../button";
import { Container } from "../container/container";
import {
  InvoiceItem,
  InvoiceListDue,
  InvoiceListID,
  InvoiceListPrice,
  InvoiceListTo,
  InvoiceListWrapper,
} from "./invoce-list.styled";

export const InvoiceList = () => {
  const { invoicesList } = useSelector((state) => state.invoices);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        dispatch(invoicesAction.setInvoicesList(data));
      });
  }, []);

  return (
    <div>
      <Container>
        <InvoiceItem>
          {invoicesList?.map((item) => (
            <li key={item.id}>
              <InvoiceListWrapper>
                <InvoiceListID>
                  <span>#</span>
                  {item?.id}
                </InvoiceListID>
                <InvoiceListDue>{item?.dueDate}</InvoiceListDue>
                <InvoiceListTo>{item?.to}</InvoiceListTo>
                <InvoiceListPrice>${item?.price}</InvoiceListPrice>
                <Button className={"paid " + (item?.paid ? "paid" : "peding")}>
                  {item?.paid ? "Paid" : "Pending"}
                </Button>
              </InvoiceListWrapper>
            </li>
          ))}
        </InvoiceItem>
      </Container>
    </div>
  );
};
