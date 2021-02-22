import React from "react";
import styled from "styled-components";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CloseIcon from "@material-ui/icons/Close";

const Content = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  padding: 20px;
  font-size: 1.2rem;
`;

const Icon = styled.div`
  float: left;
  color: ${(props) => props.theme.colors.primary};
  margin-right: 20px;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const Close = styled.div`
  float: right;
  cursor: pointer;
`;

const Image = styled.img`
  max-height: 600px;
`;

const ModalImage = ({ url, title, close }) => {
  return (
    <Content>
      <Title>
        {title}
        <Icon>
          <FavoriteIcon />
        </Icon>
        <Close onClick={close}>
          <CloseIcon />
        </Close>
      </Title>
      <Image src={url} alt={title} />
    </Content>
  );
};

export default ModalImage;
