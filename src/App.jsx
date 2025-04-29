import React from "react";

function Header() {
  return (
    <header>
      <h1>Simple React Application</h1>
    </header>
  );
}

function Content() {
  return (
    <main>
      <p>This is my first React Application</p>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <h1>Created by Me, of course.</h1>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
