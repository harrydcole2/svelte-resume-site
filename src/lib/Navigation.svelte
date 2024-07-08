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
</script>

<Navbar
  expand="md"
  light
  container
  style="transition: all 0.3s ease; 
  background-color: #C4FFEA; 
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
  .avatar {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    transition: all 0.3s ease;
  }
</style>
