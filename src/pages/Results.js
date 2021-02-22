import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Search from "../components/Home/Search/Search";
import styled from "styled-components";
import GridComponent from "../components/Results/GridComponent";
import Modal from "../components/shared/Modal";
import ModalImage from "../components/Results/ModalImage";

import { StateContext } from "../context";
import Header from "../layout/Header";

// necessario para que tenha espaço pro scroll
const Container = styled.div`
  min-height: 110vh;
`;

const Content = styled.div`
  position: relative;
  top: 100px;
`;

const Results = () => {
  const { palavra } = useParams();
  const { state } = useContext(StateContext);
  const [palavraPesquisada, setPalavraPesquisada] = React.useState(palavra);
  const [open, setOpen] = useState(false);

  const handlePesquisa = (word) => {
    setPalavraPesquisada(word);
  };

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  console.log(state);

  return (
    <Container>
      <Header>
        <Search pesquisar={handlePesquisa} />
      </Header>
      <Content>
        <GridComponent
          palavraPesquisada={palavraPesquisada}
          onGifClick={handleModalOpen}
        />
      </Content>
      <Modal state={open} open={handleModalOpen} close={handleModalClose}>
        <ModalImage
          url={state.modalInfo.images.original.url}
          title={state.modalInfo.title}
          close={handleModalClose}
        />
      </Modal>
    </Container>
  );
};

export default Results;
