import React, { useState, useEffect, useCallback } from "react";
import StackGrid from "react-stack-grid";
import useInfiniteScroll from "../../helpers/hooks/useInfiniteScroll";
import Card from "./Card";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";
import { getSearch } from "../../services/SearchService";

const Loading = styled.div`
  margin-top: 30px;
  display: grid;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.primary};
`;

export default function GridComponent({ onGifClick, palavraPesquisada }) {
  const [listItems, setListItems] = useState([]);
  const [search, setSearch] = useState("");

  const fetchGifs = useCallback(async () => {
    let offsetValor = listItems.length < 10 ? 0 : listItems.length + 10;

    const response = await getSearch(search, offsetValor, 10);

    if (response) {
      setListItems((prevState) => {
        return [...prevState, ...response.data];
      });
    }

    setIsFetching(false);
  }, [search]);

  const newFetch = async (palavra) => {
    setSearch(palavra);
    const response = await getSearch(palavra, 0, 20);
    if (response) {
      setListItems(response.data);
    }
  };

  const [isFetching, setIsFetching] = useInfiniteScroll(fetchGifs);

  useEffect(() => {
    console.log("nova palavra ", palavraPesquisada);

    newFetch(palavraPesquisada);
  }, [palavraPesquisada]);

  return (
    <Container>
      <StackGrid monitorImagesLoaded={true} columnWidth={400}>
        {listItems.map((listItem, index) => (
          <div onClick={onGifClick}>
            <Card key={index} data={listItem} />
          </div>
        ))}
      </StackGrid>

      {isFetching && (
        <Loading>
          <CircularProgress />
        </Loading>
      )}
    </Container>
  );
}
