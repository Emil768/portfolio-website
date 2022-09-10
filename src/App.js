import React from "react";

import { Home, About, Projects, Contact } from "./pages/index";
import { Header, Container, Content, Footer } from "./components/index";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Container>
        <Content>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Content>
      </Container>
    </>
  );
}

export default App;
