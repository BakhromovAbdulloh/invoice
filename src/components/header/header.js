import plus from "../../assets/img/plus.svg";
import { Container } from "../container/container";
import { ButtonAdd, Text, Title, Wrapper } from "./header.styled";

export const Header = () => {
  return (
    <header>
      <Container>
        <Wrapper>
          <div>
            <Title>Invoices</Title>
            <Text>There are 6 total invoices</Text>
          </div>

          <from>
            <select>
              <option value="all">All</option>
              <option value="false">Pending</option>
              <option value="true">Paid</option>
            </select>
          </from>

          <ButtonAdd>
            <img className="plus" src={plus} alt="plus foto" />
            New Invoice
          </ButtonAdd>
        </Wrapper>
      </Container>
    </header>
  );
};
