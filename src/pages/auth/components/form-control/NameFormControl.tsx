import Form from '@components/form-compound/Form';

export default function NameFormControl(props: any) {
  return (
    <Form.Control value={{ ...props }}>
      <Form.Layout>
        <Form.Control.Label>이름</Form.Control.Label>
        <Form.Control.Input placeholder="이름을 입력해주세요" />
        <Form.Control.ErrorMessage />
      </Form.Layout>
    </Form.Control>
  );
}
