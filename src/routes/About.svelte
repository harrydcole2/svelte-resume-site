<script>
  import {
    Container,
    Form,
    FormGroup,
    Label,
    Input,
  } from "@sveltestrap/sveltestrap";
</script>

<Form>
  <FormGroup>
    <Label for="name">Name</Label>
    <Input type="text" id="name" placeholder="Enter your name" />
  </FormGroup>
  <FormGroup>
    <Label for="email">Email</Label>
    <Input type="email" id="email" placeholder="Enter your email" />
  </FormGroup>
  <FormGroup>
    <Label for="message">Message</Label>
    <Input
      type="textarea"
      id="message"
      rows="4"
      placeholder="Enter your message"
    />
  </FormGroup>
</Form>

<style>
</style>
