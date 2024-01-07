import styled from "styled-components";
//extension: vscode-styled-components
import Button from "./ui/Button";
import GlobalStyles from "./styles/GlobalStyles";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
  background-color: #1f2937;
  height: 100vh;
`;
export default function App() {
  return (
    <StyledApp>
      <GlobalStyles />
      <Row type="vertical">
        <Row type="horizontal">
          <Heading as={"h1"}>The wild oasis</Heading>
          <div>
            <Heading as={"h2"}>Checkin Checkout</Heading>
            <Button
              variation="primary"
              size="medium"
              onClick={() => alert("CHeck-In")}
            >
              Check-In
            </Button>
            <Button
              variation="secondary"
              size="small"
              onClick={() => alert("CHeck-Out")}
            >
              Check-Out
            </Button>
          </div>
        </Row>
        <Row type="vertical">
          <Heading as={"h3"}>Form</Heading>
          <form>
            <Input type="number" placeholder="Number of guests" />
            <Input type="number" placeholder="Number of guests" />
          </form>
        </Row>
      </Row>
    </StyledApp>
  );
}

// About styled-components

// It is used to make components with custom styles which can be reused at different places and every component can be tracked at a single place
// for that npm i styled-components and import styled from it which contain name of html elements and styles can be written in `` after that. For autocompletion of styles install vscode-styled-components.
// components created by styled components are react components only hence naming should be start with capital letter
//for global styles create a js file in styles folder and import createGlobalStyles which will contain all global styles inside `` and export it. This component will be sibling of all other component hence we place it in app.js as sibling

// as prop in styled component will convert that component to the html we will provide in as prop
