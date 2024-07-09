<script>
  import { onMount } from "svelte";

  let ideas = [];

  // Fake ideas data
  const fakeIdeas = [
    {
      id: 1,
      title: "Idea 1",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi et, fuga architecto distinctio alias numquam!",
    },
    {
      id: 2,
      title: "Idea 2",
      text: "Lorem ipsum dolor sit amet adipisicing elit. Consequuntur soluta itaque quo reprehenderit corrupti dolores accusamus culpa sunt nam adipisci.",
    },
    {
      id: 3,
      title: "Idea 3",
      text: "Lorem ipsum dolor sit, amet consectetur ad",
    },
    {
      id: 4,
      title: "Idea 4",
      text: "Lorem ipsum dolor",
    },
    {
      id: 5,
      title: "Idea 5",
      text: "sicing elit. Consequuntur soluta itaque quo reprehenderit corrupti dolores accusamus culpa sunt nam adipi",
    },
    {
      id: 6,
      title: "Idea 6",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi et, fuga architecto distinctiLorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi et, fuga architecto distincti",
    },
    {
      id: 7,
      title: "Idea 7",
      text: "Lorem ipsum dolor sit, amet consect",
    },
    {
      id: 8,
      title: "Idea 8",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi et, fuga architecto distincti",
    },
    {
      id: 9,
      title: "Idea 9",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi et, fuga architecto distinctiLorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi et, fuga architecto distinctiLorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi et, fuga architecto distincti",
    },
    {
      id: 10,
      title: "Idea 10",
      text: "amet consectetur adipisicing elit. Nisi et, fuga archiamet consectetur adipisicing elit. Nisi et, fuga archi",
    },
    {
      id: 11,
      title: "Idea 11",
      text: "amet consectetur adipisicing elit. Nisi et, fuga archiamet consectetur adipisicing elit. Nisi et, fuga archiamet consectetur adipisicing elit. Nisi et, fuga archi",
    },
    {
      id: 12,
      title: "Idea 12",
      text: "lorem ipsum",
    },
  ];

  onMount(() => {
    ideas = fakeIdeas;
  });
</script>

<div class="container">
  <div class="masonry">
    {#each ideas as idea}
      <div class="masonry-item">
        <div class="card">
          <img src={idea.picture} class="card-img-top" alt={idea.title} />
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
