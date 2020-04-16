import styled from 'styled-components';

export const Header = styled.div`
  min-width: 1024px;
  height: 64px;
  background: #4a90e2;
  padding: 15px 30px;
  color: #fff;
  box-shadow: inset 0px 1px 3px rgba(100, 100, 100, 0.5);

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    width: 500;
    height: 500;
    align-self: center;
  }

  h1 {
    font-size: 15px;
    color: #fff;
    font-family: Helvetica;
    font-weight: bold;
    align-self: center;
  }
`;

export const PostArea = styled.div`
  max-width: 700px;
  height: 250px;
  background: #fff;
  padding: 20px 20px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.13);
  margin: 0px auto;
  margin-top: 30px;
  margin-bottom: 20px;
  overflow: hidden;

  img {
    margin-right: 20px;
  }

  h1 {
    font-size: 14px;
    font-weight: bold;
    color: #4a4a4a;
    font-family: Helvetica;
  }

  h4 {
    font-size: 11px;
    color: #9a9a9a;
    font-family: Helvetica;
  }
`;

export const Info = styled.div`
  width: 100px;
  height: 32px;
  margin-left: 40px;
  margin-top: -30px;
  line-height: 16px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
`;

export const Post = styled.h1`
  font-size: 14px;
  font-family: Helvetica;
  font-weight: 100px;
  color: #3e3e3e;
  flex: 1;
  margin-bottom: 20px;
`;

export const CommentArea = styled.div`
  width: 660px;
  height: 60px;
  margin-top: 20px;
  align-items: center;

  display: flex;
  flex-direction: row;
`;

export const Comment = styled.div`
  width: 622px;
  height: 50px;
  border-radius: 20px;
  background: #eee;
  padding: 20px 20px;
  display: flex;
  flex-direction: row;

  h1 {
    font-size: 13px;
    color: #3e3e3e;
    align-self: center;
    font-family: Helvetica;
  }
`;
