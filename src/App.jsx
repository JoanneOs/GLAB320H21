import React from "react";

//Inline styling

const divStyle = {
  margin: '40px',
  border: '5px solid pink'
};
const pStyle = {
  fontSize: '15px',
  textAlign: 'center'
};

// this is the header component
function Header() {
  return (
    // <header>
    //   <h1>Simple React Application</h1>
    // </header>

   // <h1>Simple React Application</h1>

   //want to center it
   <h1 style={{ textAlign: "center" }}>simple react application</h1>

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

  return (<p style={{ color: props.color , textAlign: "center"}}>{props.text}</p>);

}

function Footer() {
  return (
    // <footer>
    //   <h1>Created by Me, of course.</h1>
    // </footer>
    <h1>Created by Joanne, of course.</h1>
  );
}

function App() { //add Inline styling
  return (
    <>
   <Header />

   <div style={divStyle}>
    <p style={pStyle}>Get started with inline style</p>
  </div>
   <Content color="blue" text="this is my first react application!" />
   <Content color="red" text="Wish me luck..." />
   <Content color="green" text="I think I've got it!" />
      <Footer />
    </>
  );
}

export default App;
