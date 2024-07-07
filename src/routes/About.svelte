<script>
  import {
    Container,
    Form,
    FormGroup,
    Label,
    Input,
  } from "@sveltestrap/sveltestrap";
</script>

<div class="wrapper">
  <Container>
    <div class="custom-container">
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
    </div>
  </Container>
</div>

<style>
  .wrapper {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    min-height: 100vh;
    /* background-image: linear-gradient(
      90deg,
      url({gray}) 20%,
      #ffffff 20%,
      #ffffff 80%,
      url({gray}) 80%
    ); */
    background: none;
    background-image: url(../assets/gray.jpg), url(../assets/gray.jpg);
    background-position: left, right;
    /* background-repeat: no-repeat; */
    background-size: 20%, 20%;
  }

  .custom-container {
    background: white;
    padding: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    /* border-radius: 3px; */
    min-height: 100vh;

    /* max-width: 600px; */
    /* width: 100%; */
  }
</style>
