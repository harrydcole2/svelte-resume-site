<script>
  import api from "/src/utils/api";

  const resources = api.get("/resources");
</script>

<main class="container my-5">
  <section class="mb-5">
    <h2>Additional Web Resources</h2>
    <p>
      This tab documents some helpful technologies and packages I've used. I
      tried to organize them according to their role in the tech stack. Most of
      them will apply primarily to a React and C# stack, which is where I am
      most comfortable, but I tried to find a couple analogs where possible. The
      idea is to not reinvent the wheel when it comes to web development.
      Eventually may convert this to a more practical NPM package and
      documentation or create a boilerplate based on these technologies.
    </p>
  </section>

  {#each resources as category}
    <div class="card mb-4 outer-card">
      <div class="card-body">
        <h3 class="card-title">{category.title}</h3>
        <p class="card-text">{category.description}</p>
        <div class="row">
          {#each category.items as item}
            <div class="col-12 mb-3">
              <div class="card h-100 inner-card">
                <div class="card-body">
                  <h4 class="card-title">{item.title}</h4>
                  <p class="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/each}
</main>

<style>
  p {
    font-size: 1.25rem;
  }
  .outer-card {
    background-color: #f8f9fa;
  }
  .inner-card {
    background-color: #e9ecef63;
  }
</style>
