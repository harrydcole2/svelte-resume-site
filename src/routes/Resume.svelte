<script>
  let imageLoaded = false;
  // Update this path to match your image location
  const imagePath = "/hdc_resume.jpg";
</script>

<div class="resume-container">
  {#if !imageLoaded}
    <div class="loading">
      <div class="spinner"></div>
      <p>Loading resume...</p>
    </div>
  {/if}

  <img
    src={imagePath}
    alt="Resume"
    class="resume-image"
    on:load={() => (imageLoaded = true)}
  />
</div>

<style>
  .resume-container {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    position: relative;
  }

  .resume-image {
    width: 100%;
    height: auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: block;
  }

  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .spinner {
    width: 40px;
    height: 40px;
    margin: 0 auto;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
