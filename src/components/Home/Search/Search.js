import React, { useState } from "react";
import { Button, Container, Input } from "./Search.styles";
import { useHistory, useParams } from "react-router-dom";

export default function Search({ pesquisar }) {
  const { palavra } = useParams();
  const [text, setText] = useState(palavra || "");
  const history = useHistory();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    let novaPesquisa = encodeURI(text);
    if (pesquisar) {
      pesquisar(novaPesquisa);
    }
    if (text) {
      history.push("/pesquisa/" + novaPesquisa);
    }
  };

  return (
    <Container>
      <Input
        data-testid="search-input"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Pesquisar gifs"
        type="text"
        value={text}
      />
      <Button data-testid="search-button" onClick={handleSearch}>
        Pesquisar
      </Button>
    </Container>
  );
}
