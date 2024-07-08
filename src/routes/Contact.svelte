<script>
  import {
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
  } from "@sveltestrap/sveltestrap";
</script>

<br />
<br />
<div class="message-container">
  <p class="info-message">
    This contact form is currently disabled. Please email me directly at <a
      href="mailto:harrison.colelmstech@gmail.com"
      >harrison.colelmstech@gmail.com</a
    >.
  </p>
</div>
<Form>
  <FormGroup>
    <Label for="name">Name</Label>
    <Input type="text" id="name" placeholder="Enter your name" disabled />
  </FormGroup>
  <FormGroup>
    <Label for="email">Email</Label>
    <Input type="email" id="email" placeholder="Enter your email" disabled />
  </FormGroup>
  <FormGroup>
    <Label for="message">Message</Label>
    <Input
      type="textarea"
      id="message"
      rows="4"
      placeholder="Enter your message"
      disabled
    />
  </FormGroup>
  <Button color="primary" disabled hidden>Submit</Button>
</Form>

<style>
  .message-container {
    margin-bottom: 1rem;
    background-color: #fdf395; /* Yellow background to highlight the message */
    padding: 1rem;
    border-radius: 0.25rem;
  }

  .info-message {
    margin: 0;
    font-weight: bold;
    color: #333;
  }

  .info-message a {
    color: #007bff; /* Bootstrap primary color for the link */
    text-decoration: none;
  }

  .info-message a:hover {
    text-decoration: underline;
  }
</style>
