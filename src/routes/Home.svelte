<script>
  import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardGroup,
    CardHeader,
    CardLink,
    CardSubtitle,
    CardText,
    CardTitle,
    Container,
    Nav,
    NavItem,
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    NavLink,
  } from "@sveltestrap/sveltestrap";

  import api from "/src/utils/api";
  const projectCards = api.get("/projectCards");

  let isOpen = false;

  let placeholderWidths = Array.from({ length: 10 }, () => getRandomWidth());
  function getRandomWidth() {
    return Math.floor(Math.random() * (100 - 85 + 1)) + 85;
  }
</script>

<main>
  <hr />
  <br />
  <section>
    <h2>About Me</h2>
    <p>
      Hi! My name is Harrison Cole and I from Vancouver, WA. I am an aspiring
      web programmer, developer, and entrepreneur, and am currently finishing up
      my degree in Computer Science at BYU. I will be graduating in April which
      is really exciting! I am passionate about learning new technologies and
      thinking critically about the business side of those technologies. Right
      now I work as a web developer for 3jlabs, which has been a great
      experience! In that capacity I develop sites but also manage their Kanban
      boards and work closely with the designer. I might link some of the
      projects I have worked on here in the future.
    </p>
    <p>
      Outside of programming, I enjoy being outdoors and playing sports,
      especially basketball and tennis. I also enjoy reading, playing the piano,
      and singing. I come from a family of 6, and am the oldest of 4 kids with a
      dog and 2 birds, which also has a way of keeping me busy.
    </p>
  </section>
  <br />
  <section>
    <h2>About This Website</h2>
    <p>
      Frankly, this website is probably more for me than it is for you.
      Originally, it was an static HTML site that I created as part of an
      introductory CS class, but as I still own the domain and virtual server, I
      wanted to (a) get some basic practice with Svelte, and (b) document some
      packages, technologies, and ideas about web development. Think of it as my
      waystation for web development. Check out some of the content below and on
      other tabs!
    </p>
    <p>
      At first, I imagined annotating and creating different subdomain projects
      with different frameworks under this domain (listed below), and I may come
      back to that, but my attention has mostly been on other independent
      projects. You can check out some of my public repos and project boards on
      my GitHub:
      <a href="https://github.com/harrydcole2">https://github.com/harrydcole2</a
      >
    </p>
  </section>
  <div class="card-grid">
    {#each projectCards as card}
      <Card>
        <CardHeader>
          <CardTitle>{card.title}</CardTitle>
        </CardHeader>
        <CardBody>
          <CardSubtitle class="py-2">{card.subtitle}</CardSubtitle>
          <CardText>{card.text}</CardText>
          <CardLink href={card.link}>Take a look!</CardLink>
        </CardBody>
      </Card>
    {/each}
    <Card>
      <CardHeader>
        <CardTitle>More to Come!</CardTitle>
      </CardHeader>
      <CardBody>
        <CardSubtitle class="py-2"
          ><div class="placeholder-header"></div></CardSubtitle
        >
        <CardText>
          {#each placeholderWidths as width}
            <div class="placeholder-line" style="width: {width}%;"></div>
          {/each}
        </CardText>
      </CardBody>
    </Card>
  </div>
</main>

<style>
  .card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding-top: 24px;
  }

  p {
    font-size: 1.25rem;
  }

  .placeholder-header {
    width: 40%;
    height: 1.25rem;
    background-color: #dadada;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  .placeholder-line {
    width: 80%;
    height: 1.25rem;
    background-color: #dadada;
    border-radius: 4px;
    margin-bottom: 5px;
  }
</style>
