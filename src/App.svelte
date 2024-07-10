<script>
  import { onMount } from "svelte";
  import { Container } from "@sveltestrap/sveltestrap";
  import { Router, Route } from "svelte-routing";
  import Navbar from "./lib/Navigation.svelte";
  import Home from "./routes/Home.svelte";
  import Projects from "./routes/Projects.svelte";
  import Ideas from "./routes/Ideas.svelte";
  import Resources from "./routes/Resources.svelte";
  import Contact from "./routes/Contact.svelte";

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

  export let url = "";
</script>

<div class="top-fixed">
  <Navbar {isScrolled} />
</div>
<div
  class="wrapper"
  class:scrolled={isScrolled}
  class:not-scrolled={!isScrolled}
>
  <Container>
    <div class="custom-container">
      <Router {url}>
        <Route path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/ideas" component={Ideas} />
        <Route path="/resources" component={Resources} />
        <Route path="/contact" component={Contact} />
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
    transition: all 0.3s ease;
  }

  .not-scrolled {
    margin-top: 13.5rem;
    transition: all 0.3s ease;
  }
</style>
