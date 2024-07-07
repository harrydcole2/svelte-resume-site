<script>
  import { Container } from "@sveltestrap/sveltestrap";
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import About from "./routes/About.svelte";
</script>

<div class="wrapper">
  <Container>
    <div class="custom-container">
      <Router>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Router>
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
      #f0f0f0 20%,
      #ffffff 20%,
      #ffffff 80%,
      #f0f0f0 80%
    ); */
    background: none;
    background-image: url(./assets/y-so-serious-white.png),
      url(./assets/y-so-serious-white.png);
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
