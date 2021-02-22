import axios from "axios";

export async function getGifs() {
  try {
    let response = await axios.get();

    if (retorno) {
      console.log("gifs recebidos com sucesso!");
      return retorno.data;
    }

    return null;
  } catch (error) {
    console.log(error.msg);
  }
}

export async function putGif(gif) {
  try {
    let response = await axios.put("", gif);

    if (retorno) {
      console.log("gif atualizado com sucesso!");
      return retorno.data;
    }

    return null;
  } catch (error) {
    console.log(error.msg);
  }
}

export async function postGif(gif) {
  try {
    let response = await axios.put("", gif);

    if (retorno) {
      console.log("gif salvo com sucesso!");
      return retorno.data;
    }

    return null;
  } catch (error) {
    console.log(error.msg);
  }
}

export async function deleteGif(id) {
  try {
    let response = await axios.delete("", id);

    if (retorno) {
      console.log("gif removido com sucesso!");
      return;
    }

    return null;
  } catch (error) {
    console.log(error.msg);
  }
}
