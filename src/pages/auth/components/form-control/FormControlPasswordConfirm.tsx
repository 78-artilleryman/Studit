import Form from '@components/form-compound/Form';
import useToggle from '../../../../hooks/useToggle';

export default function FormControlPasswordConfirm(props: any) {
  const { isToggle, handleToggle } = useToggle(true);
  return (
    <Form.Control value={{ ...props, isShowPasswordComponent: isToggle, handleToggle }}>
      <Form.Layout>
        <Form.Control.Label>비밀번호 확인</Form.Control.Label>
        <Form.Control.Input placeholder="비밀번호를 다시 입력해주세요.">
          <Form.Control.ShowPasswordButton />
        </Form.Control.Input>

        <Form.Control.ErrorMessage />
      </Form.Layout>
    </Form.Control>
  );
}
