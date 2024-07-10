<script>
  import api from "/src/utils/api";

  const ideas = api.get("/ideas");
</script>

<br />
<div class="container">
  <div class="masonry">
    {#each ideas as idea}
      <div class="masonry-item">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{idea.title}</h5>
            <p class="card-text">{idea.text}</p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .masonry {
    column-count: 4;
    column-gap: 1rem;
  }
  @media (max-width: 1200px) {
    .masonry {
      column-count: 3;
    }
  }
  @media (max-width: 992px) {
    .masonry {
      column-count: 2;
    }
  }
  @media (max-width: 768px) {
    .masonry {
      column-count: 1;
    }
  }
  .masonry-item {
    display: inline-block;
    width: 100%;
    margin-bottom: 1rem;
  }
  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
  }
  .card-text {
    font-size: 1rem;
  }
</style>
