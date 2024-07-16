<script>
  export let images = [];
  export let dir = "";

  let currentIndex = 0;
  let isModalOpen = false;
  let modalImage = "";

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  function openModal(image) {
    modalImage = `${dir}/${image}`;
    isModalOpen = true;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    isModalOpen = false;
    document.body.style.overflow = "";
  }
</script>

<div class="carousel">
  {#each images as image, index}
    <div class="carousel-item" class:active={index === currentIndex}>
      <img
        src={`${dir}/${image}`}
        alt={`Slide ${index + 1}`}
        on:click={() => openModal(image)}
      />
    </div>
  {/each}
  <button class="carousel-control prev" on:click={prevSlide}>&lt;</button>
  <button class="carousel-control next" on:click={nextSlide}>&gt;</button>
</div>

{#if isModalOpen}
  <div class="modal" on:click={closeModal}>
    <div class="modal-content" on:click|stopPropagation>
      <img src={modalImage} alt="Enlarged view" />
    </div>
  </div>
{/if}

<style>
  .carousel {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
  }

  .carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .carousel-item.active {
    opacity: 1;
  }

  .carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    cursor: pointer;
  }

  .carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }

  .prev {
    left: 10px;
  }

  .next {
    right: 10px;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
</style>
