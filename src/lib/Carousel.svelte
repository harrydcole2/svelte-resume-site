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

  function handleKeydown(event, action) {
    if (event.key === "Enter" || event.key === " ") {
      action();
    }
  }
</script>

<div class="carousel" role="region" aria-label="Image Carousel">
  {#each images as image, index}
    <div
      class="carousel-item"
      class:active={index === currentIndex}
      role="group"
      aria-roledescription="slide"
      aria-label={`Slide ${index + 1} of ${images.length}`}
    >
      <button
        class="carousel-image-button"
        on:click={() => openModal(image)}
        on:keydown={(event) => handleKeydown(event, () => openModal(image))}
        aria-label={`View slide ${index + 1}`}
      >
        <img src={`${dir}/${image}`} alt={`Slide ${index + 1}`} />
      </button>
    </div>
  {/each}
  <button
    class="carousel-control prev"
    on:click={prevSlide}
    on:keydown={(event) => handleKeydown(event, prevSlide)}
    aria-label="Previous slide">&lt;</button
  >
  <button
    class="carousel-control next"
    on:click={nextSlide}
    on:keydown={(event) => handleKeydown(event, nextSlide)}
    aria-label="Next slide">&gt;</button
  >
</div>

{#if isModalOpen}
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions a11y-click-events-have-key-events a11y-no-static-element-interactions-->
  <div class="modal" on:click={closeModal} role="dialog" aria-modal="true">
    <div class="modal-content" on:click|stopPropagation>
      <button class="modal-close" on:click={closeModal} aria-label="Close modal"
        >✖</button
      >
      <img src={modalImage} alt="Enlarged view" />
    </div>
  </div>
{/if}

<style>
  .carousel {
    position: relative;
    width: 100%;
    height: 450px;
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

  .carousel-image-button {
    width: 100%;
    height: 100%;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
  }

  .carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: contain;
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
    position: relative;
  }

  .modal-content img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .modal-close {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
  }
</style>
