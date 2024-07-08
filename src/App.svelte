<script>
  import { Container } from "@sveltestrap/sveltestrap";
  import { Router, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import About from "./routes/About.svelte";
  import Navbar from "./lib/Navigation.svelte";
  import { onMount } from "svelte";

  let isScrolled = false;

  const handleScroll = () => {
    isScrolled = window.scrollY > 0;
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<div class="top-fixed">
  <Navbar />
</div>
<div
  class="wrapper"
  class:scrolled={isScrolled}
  class:not-scrolled={!isScrolled}
>
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
  .top-fixed {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
  }
  .wrapper {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    background: none;
    background-image: url(./assets/y-so-serious-white.png),
      url(./assets/y-so-serious-white.png);
    background-position: left, right;
    background-size: 20%, 20%;
  }

  .custom-container {
    background: white;
    padding: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    min-height: 100vh;
  }

  .scrolled {
    margin-top: 4rem;
  }

  .not-scrolled {
    margin-top: 16rem;
  }
</style>
