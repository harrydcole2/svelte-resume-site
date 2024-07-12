<script>
  import { link } from "svelte-routing";
  import Photo from "/src/assets/HarrisonPhoto.jpg";

  export let isScrolled;

  let location = window.location;

  function recalculateLocation() {
    location = window.location;
  }
</script>

<div class:scrolled={isScrolled} class:not-scrolled={!isScrolled}>
  <nav
    class="navbar navbar-expand-md navbar-light container"
    style="transition: all 0.3s ease;"
  >
    <div class="navbar-content">
      <a class="navbar-brand avatar-container" use:link href="/">
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
      </a>
      <div class:align-bottom={!isScrolled} class="nav-container">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a
              use:link
              class="nav-link nav-link-custom"
              on:click={recalculateLocation}
              class:active={location.pathname === "/"}
              href="/">Home</a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle nav-link-custom"
              id="codingDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              class:active={location.pathname.includes("/projects") ||
                location.pathname.includes("/ideas") ||
                location.pathname.includes("/resources")}
            >
              Coding
            </a>
            <ul class="dropdown-menu">
              <li>
                <a
                  use:link
                  class="dropdown-item"
                  on:click={recalculateLocation}
                  class:active={location.pathname === "/projects"}
                  href="/projects">Projects</a
                >
              </li>
              <li>
                <a
                  use:link
                  class="dropdown-item"
                  on:click={recalculateLocation}
                  class:active={location.pathname === "/ideas"}
                  href="/ideas">Ideas</a
                >
              </li>
              <li>
                <a
                  use:link
                  class="dropdown-item"
                  on:click={recalculateLocation}
                  class:active={location.pathname === "/resources"}
                  href="/resources">Other Resources</a
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a
              use:link
              class="nav-link nav-link-custom"
              on:click={recalculateLocation}
              class:active={location.pathname === "/contact"}
              href="/contact">Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
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
    box-shadow: none !important;
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

  .dropdown-item.active {
    font-weight: bold;
  }
</style>
