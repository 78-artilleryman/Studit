import Form from '@components/form-compound/Form';

export default function EmailFormControl(props: any) {
  return (
    <Form.Control value={{ ...props }}>
      <Form.Layout>
        <Form.Control.Label>이메일</Form.Control.Label>
        <Form.Control.Input placeholder="your@email.com" />
        <Form.Control.ErrorMessage />
      </Form.Layout>
    </Form.Control>
  );
}
