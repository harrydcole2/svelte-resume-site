<script>
  import { onMount } from "svelte";
  import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
  } from "@sveltestrap/sveltestrap";

  let isScrolled = false;

  function handleScroll() {
    isScrolled = window.scrollY > 0;
  }

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<Navbar
  scrolled={isScrolled}
  expand="md"
  light
  container
  style="transition: all 0.3s ease; 
  background-color: #5DD9C1; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);"
>
  <NavbarBrand href="/">
    <img src="/src/assets/HarrisonPhoto.jpg" alt="Avatar" class="avatar" />
  </NavbarBrand>
  <Nav class="ml-auto" navbar pills>
    <NavItem>
      <NavLink href="/">Home</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/about">About</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#contact">Contact</NavLink>
    </NavItem>
  </Nav>
</Navbar>

<style>
  .navbar.scrolled {
    padding: 0.5rem 1rem;
    background-color: #acfcd9;
  }

  .avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  .scrolled .avatar {
    width: 2rem;
    height: 2rem;
  }
</style>
