<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
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
  } from "@sveltestrap/sveltestrap";
</script>

<main>
  <Container>
    <header>
      <h1>Harrison Cole</h1>
      <img src="HarrisonPhoto.jpg" alt="me" width="350" height="350" />

      <nav class="navbar navbar-dark">
        <ul>
          <li class="nav-item">
            <a class="btn btn-primary" href="index.html">Home</a>
          </li>
          <li class="nav-item"><a href="assignments.html">Assignments</a></li>
          <li class="nav-item"><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    </header>
    <section>
      <h2>About me</h2>
      <p>
        Hi! My name is Harrison Cole and I am from Camas, Washington. I am the
        oldest of four kids and have a dog and two birds at home. Growing up in
        the great northwest, I love doing anything outdoors especially hiking
        and climbing. In high school I played tennis and basketball and
        participated in choir as well.
      </p>
      <p>
        I am an aspiring web programmer, developer, and entrepreneur. Currently,
        I am finishing up my computer science degree and business minor here at
        BYU. My goal for my education is to learn about new perspectives and
        ideas that will inform how I see the world and what I can add to it; to
        be as prepared as I can be to support a family and manage effective
        relationships with others; and to find things I am passionate about
        learning and doing in my work and my leisure time. I am discovering that
        computer science is where these joint goals intersect. And I continue to
        learn a lot about myself every day.
      </p>
    </section>
    <section>
      <h2>About this website</h2>
      <p>
        Frankly, this website is probably more for me than it is for you.
        Originally, it was an static HTML site that I created as part of an
        introductory CS class, but as I still own the domain and virtual server,
        I wanted to (a) get some basic practice with Svelte, and (b) document
        some packages, technologies, and ideas about web development. Check out
        some of the content below and on other tabs! A lot of this site is just
        web development ideas.
      </p>
      <p>
        At first, I imagined annotating and creating different subdomain
        projects with different frameworks under this domain, and I may come
        back to that, but my attention has mostly been on other independent
        projects. You can check out some of my public repos and project boards
        on my GitHub:
        <a href="https://github.com/harrydcole2"
          >https://github.com/harrydcole2</a
        >
      </p>
    </section>
    <div class="card-grid">
      <Card>
        <CardHeader>
          <CardTitle>Blackjack Game ♠</CardTitle>
        </CardHeader>
        <CardBody>
          <CardSubtitle>Tech Stack: "Vanilla" JS/CSS/HTML</CardSubtitle>
          <CardText
            >This is a vanilla JS/CSS/HTML project I used to learn about web
            development and get exposure to different kinds of web technologies
            from the ground up. As the name suggests, the business logic is a
            blackjack simulator that you can bet pseudo money against. It taught
            me a lot about the DOM and events in the browser. You can
            login/register, see others earnings online (via websockets), look at
            a scoreboard, and play blackjack (of course).
          </CardText>
          <CardLink href="https://startup.harrisondcole.click"
            >Take a look!</CardLink
          >
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Simon Game</CardTitle>
        </CardHeader>
        <CardBody>
          <CardSubtitle>Tech Stack: React.js</CardSubtitle>
          <CardText
            >This is a React.js project that mimics the classic Simon game. It
            was my first exposure to React, and actually started as a vanilla
            project so that we could understand its roots. More than anything,
            it act as a great resource for understanding how projects are built
            and deployed and the elements that go into a good web application.
            While Simon is a simple concept, there are a lot of features in the
            site that are added as examples of something more scalable, e.g.
            working with sound, making requests to an API, communication between
            users, etc.
          </CardText>
          <CardLink href="https://simon.harrisondcole.click"
            >Take a look!</CardLink
          >
        </CardBody>
      </Card>
    </div>
  </Container>
</main>

<style>
  .card-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
</style>
