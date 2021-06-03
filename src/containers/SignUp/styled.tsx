import styled from "styled-components";

export const StyledFormSignUp = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px 40px;
  border: 1px solid #eee;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f3f3f3;
  border-radius: 10px;

  .logo {
    width: 150px;
    display: block;
    margin: 20px auto 10px;
    border-radius: 10px;
  }

  .subtitle {
    text-align: center;
    border-bottom: 1px solid #ddd;
    padding-bottom: 15px;
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 600;
  }

  .block-info {
    margin-top: 20px;
  }

  .info-inner {
    padding: 15px 0 0;
  }

  .submit-wrap {
    padding-top: 30px;
    button {
      width: 130px;
    }
  }

  .ant-picker {
    width: 100%;
  }
`;