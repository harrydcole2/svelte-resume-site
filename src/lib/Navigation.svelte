<script>
  import { onMount, onDestroy } from "svelte";
  import { Navbar, NavbarBrand, Nav, NavItem } from "@sveltestrap/sveltestrap";
  import { link } from "svelte-routing";
  import Photo from "/src/assets/HarrisonPhoto.jpg";

  export let isScrolled;

  let location = window.location;

  function recalculateLocation() {
    location = window.location;
  }
</script>

<div class:scrolled={isScrolled} class:not-scrolled={!isScrolled}>
  <Navbar
    expand="md"
    light
    container
    style="transition: all 0.3s ease; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);"
  >
    <div class="navbar-content">
      <NavbarBrand>
        <div class="avatar-container" use:link href="/">
          <img
            src={Photo}
            alt="Avatar"
            class:avatar-shrunk={isScrolled}
            class="avatar"
          />
          {#if !isScrolled}
            <div>
              <div class="page-title">
                <h1>Harrison</h1>
                <h1>Cole</h1>
              </div>
              <p style="margin-left: 1rem; margin-top: 1rem">
                🏠 Provo | 🎓 BYU 2025 | 💼 3jlabs
              </p>
            </div>
          {/if}
        </div>
      </NavbarBrand>
      <div class:align-bottom={!isScrolled} class="nav-container">
        <Nav navbar>
          <NavItem>
            <a
              use:link
              class="nav-link nav-link-custom"
              on:click={recalculateLocation}
              class:active={location.pathname === "/"}
              href="/">Home</a
            >
          </NavItem>
          <NavItem>
            <a
              use:link
              class="nav-link nav-link-custom"
              on:click={recalculateLocation}
              class:active={location.pathname === "/projects"}
              href="/projects">Projects</a
            >
          </NavItem>
          <NavItem>
            <a
              use:link
              class="nav-link nav-link-custom"
              on:click={recalculateLocation}
              class:active={location.pathname === "/ideas"}
              href="/ideas">Ideas</a
            >
          </NavItem>
          <NavItem>
            <a
              use:link
              class="nav-link nav-link-custom"
              on:click={recalculateLocation}
              class:active={location.pathname === "/resources"}
              href="/resources">Other Resources</a
            >
          </NavItem>
          <NavItem>
            <a
              use:link
              class="nav-link nav-link-custom"
              on:click={recalculateLocation}
              class:active={location.pathname === "/contact"}
              href="/contact">Contact</a
            >
          </NavItem>
        </Nav>
      </div>
    </div>
  </Navbar>
</div>

<style>
  :root {
    --navbar-bg: #9de2d5;
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

  .avatar-container {
    display: flex;
    align-items: center;
  }

  .page-title {
    font-size: 2rem;
    font-weight: bold;
    margin-left: 1rem;
  }

  .nav-container {
    display: flex;
    align-items: flex-end;
  }

  .align-bottom {
    align-self: flex-end;
  }

  .nav-link-custom {
    font-size: 1.2em;
  }

  .nav-link-custom.active {
    font-weight: bold;
  }
</style>
