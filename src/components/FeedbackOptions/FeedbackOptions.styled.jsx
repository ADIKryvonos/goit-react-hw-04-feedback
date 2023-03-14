import styled from '@emotion/styled';

export const WrapBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 80px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  :not(:last-child) {
    margin-right: 15px;
  }
  :hover {
    border-color: ${props => {
      switch (props.color) {
        case 'Good':
          return 'green';

        case 'Neutral':
          return 'blue';

        case 'Bad':
          return 'red';

        default:
          return 'black';
      }
    }};
  }
`;
