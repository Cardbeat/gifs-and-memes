import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Search from "./Search";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

afterEach(cleanup);

const search = (param) => {
  // wrapper pro useParams do react-router nao quebrar nos testes
  const history = createMemoryHistory();
  const route = `/pesquisa/${param}`;
  history.push = jest.fn();
  const utils = render(
    <Router history={history}>
      <Search />
    </Router>
  );
  const input = utils.getByTestId("search-input");
  const button = utils.getByTestId("search-button");

  return {
    param,
    route,
    history,
    input,
    button,
    ...utils,
  };
};

describe("Pesquisa", () => {
  it("Verifica se o componente de pesquisa existe com input e botao", () => {
    const { input, button } = search("/");
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("Verifica se o componente muda de valor pelo input registrando em estado", () => {
    const { input } = search("/");

    const novoValor = "teste";
    expect(input.value).toBe("");
    fireEvent.change(input, { target: { value: novoValor } });

    expect(input.value).toBe(novoValor);
  });

  it("verifica se o component muda de rota clickando no botao de pesquisa", () => {
    const history = createMemoryHistory();
    history.push = jest.fn();
    const { getByTestId } = render(
      <Router history={history}>
        <Search />
      </Router>
    );

    const novoValor = "teste";
    fireEvent.change(getByTestId("search-input"), {
      target: { value: novoValor },
    });
    expect(getByTestId("search-input").value).toBe(novoValor);
    fireEvent.click(getByTestId("search-button"));

    expect(history.push).toHaveBeenCalledWith(`/pesquisa/${novoValor}`);
  });

  it("verifica se o component muda de rota apertando enter", () => {
    const history = createMemoryHistory();
    history.push = jest.fn();
    const { getByTestId } = render(
      <Router history={history}>
        <Search />
      </Router>
    );

    const novoValor = "teste";
    fireEvent.change(getByTestId("search-input"), {
      target: { value: novoValor },
    });
    fireEvent.keyDown(getByTestId("search-input"), {
      key: "Enter",
      code: "Enter",
    });

    expect(history.push).toHaveBeenCalledWith(`/pesquisa/${novoValor}`);
  });

  // digitar texto
  // verificar estado do texto
  // localizar botao
  // clickar no botao
  // verificar resultado  no recoil vindo do servidor
});
