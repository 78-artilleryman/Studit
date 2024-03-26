import { Button } from '@Components/UI/Button.style';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ButtonList = styled.div`
  display: flex;
  width: 1280px;
  margin: 0 auto;
  gap: 20px;
`;

function ActionButtons() {

  const navigator = useNavigate();

  return (
    <ButtonList>
      <Button
        $width={305}
        $height={60}
        onClick={() => {
          navigator(-1);
        }}
      >
        작성한거 취소할래요.
      </Button>
      <Button $width={305} $height={60} type="submit">
        발행 할래요.
      </Button>
    </ButtonList>
  );
}

export default ActionButtons;
