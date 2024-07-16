<script>
  import { Container } from "@sveltestrap/sveltestrap";
  import api from "/src/utils/api";
  const projects = api.get("/projects");
</script>

<main>
  <br />
  <br />
  <section>
    <h2>Past Projects</h2>
    <p>
      This tab is dedicated to projects I have worked on that I can't save to a
      public repository because the code is proprietary. It is especially
      dedicated to lessons I learned on these projects and remembering how they
      were built.
    </p>
    <p>
      <a href="https://github.com/harrydcole2">
        See my GitHub for more projects!
      </a>
    </p>
  </section>
  <br />

  <Container>
    {#each projects as project}
      <hr />
      <div class="project">
        <img src={project.picture} alt={project.title} class="project-image" />
        <div class="project-content">
          <h3>{project.title}</h3>
          <p>{project.body}</p>
        </div>
      </div>
      <hr />
    {/each}
  </Container>
</main>

<style>
  p {
    font-size: 1.25rem;
  }

  .project {
    display: flex;
    align-items: center;
    margin: 1rem 0;
  }

  .project-image {
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-right: 1rem;
  }

  .project-content {
    flex: 1;
  }

  hr {
    border: none;
    border-top: 2px solid #ddd;
    margin: 1rem 0;
  }
</style>
