import React from 'react';

import { Header, PostArea, Info, Post, CommentArea, Comment } from './styles';

import facebookimg from '../../images/facebook.png';
import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';
import icon3 from '../../images/icon3.png';
import icon4 from '../../images/icon4.png';

export default function Main() {
  return (
    <>
      <Header>
        <img alt="Facebook" src={facebookimg} />
        <h1>Meu perfil</h1>
      </Header>

      <PostArea>
        <img src={icon1} alt="Júlio Alcantara icon" />
        <Info>
          <h1>Júlio Alcantara</h1>
          <h4>15 abr 2020</h4>
        </Info>

        <Post>Olá galera do meu Facebook! Uma boa tarde todos , abraços!</Post>
        <hr color="#eee" />

        <CommentArea>
          <img src={icon4} alt="Pepeu Gomes" />
          <Comment>
            <h1>
              Pepeu Gomes - Boa tarde primo, como que está nessa tarde bonita?
              Vem qualquer dia em casa pra a gente jogar aquele viodeogame!
            </h1>
          </Comment>
        </CommentArea>
      </PostArea>

      <PostArea>
        <img src={icon2} alt="Júlio Alcantara icon" />
        <Info>
          <h1>Gabriel Lisboa</h1>
          <h4>15 abr 2020</h4>
        </Info>
        <Post>Olá rapazeada do mal! :P</Post>
        <hr color="#EEE" />

        <CommentArea>
          <img src={icon3} alt="Pepeu Gomes" />
          <Comment>
            <h1>Lívia Andrade - Olá Gabriel, como vai amigo? saudades!</h1>
          </Comment>
        </CommentArea>
      </PostArea>

      <PostArea>
        <img src={icon3} alt="Pepeu" />
        <Info>
          <h1>Lívia Andrade</h1>
          <h4>15 abr 2020</h4>
        </Info>
        <Post>Estou me cadastrando no Facebook pela primeira vez!</Post>
        <hr color="#eee" />

        <CommentArea>
          <img src={icon4} alt="Pepeu Gomes" />
          <Comment>
            <h1>Pepeu Gomes - Seja bem vinda Lívia Andrade!</h1>
          </Comment>
        </CommentArea>
      </PostArea>
    </>
  );
}
