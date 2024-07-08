<script>
  import { onMount, onDestroy } from "svelte";
  import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from "@sveltestrap/sveltestrap";

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

<div class:scrolled={isScrolled} class:not-scrolled={!isScrolled}>
  <Navbar
    expand="md"
    light
    container
    scrolled={isScrolled}
    style="transition: all 0.3s ease; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);"
  >
    <div class="navbar-content navbar-brand">
      <NavbarBrand href="/">
        <img
          src="/src/assets/HarrisonPhoto.jpg"
          alt="Avatar"
          class:avatar-shrunk={isScrolled}
          class="avatar"
        />
        {#if !isScrolled}
          <div class="page-title">Harrison Cole</div>
        {/if}
      </NavbarBrand>
      <div class:align-bottom={!isScrolled}>
        <Nav navbar pills>
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
      </div>
    </div>
  </Navbar>
</div>

<style>
  :root {
    --navbar-bg: #76d3c0;
    --navbar-bg-scrolled: #c4ffea;
  }

  .avatar {
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  .avatar-shrunk {
    width: 2rem;
    height: 2rem;
  }

  .scrolled {
    background-color: var(--navbar-bg-scrolled) !important;
  }

  .not-scrolled {
    background-color: var(--navbar-bg) !important;
  }

  .navbar-content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
  }

  .navbar-brand {
    display: flex;
    align-items: center;
  }

  .page-title {
    font-weight: bold;
    margin-left: 1rem;
  }

  .align-bottom {
    align-self: flex-end;
  }
</style>
