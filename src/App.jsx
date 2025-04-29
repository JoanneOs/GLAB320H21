import React from "react";

// this is the header component
function Header() {
  return (
    // <header>
    //   <h1>Simple React Application</h1>
    // </header>

    <h1>Simple React Application</h1>
  );
}

// this is the content component that uses props for text and color

function Content(props) {
  // return (
  //   // <main>
  //   //   <p>This is my first React Application</p>
  //   // </main>
  //   <p>This is my first React Application, wish me luck!</p>
  // );

  return (<p style={{ color: props.color }}>{props.text}</p>);

}

function Footer() {
  return (
    // <footer>
    //   <h1>Created by Me, of course.</h1>
    // </footer>
    <h1>Created by Me, of course.</h1>
  );
}

function App() {
  return (
    <>
   <Header />
   <Content color="blue" text="this is my first react application!" />
   <Content color="red" text="Wish me luck..." />
   <Content color="green" text="I think I've got it!" />
      <Footer />
    </>
  );
}

export default App;
