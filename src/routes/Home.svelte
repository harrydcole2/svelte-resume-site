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

  let isOpen = false;
</script>

<main>
  <Nav pills>
    <NavItem>
      <NavLink href="#" active>Home</NavLink>
    </NavItem>
    <Dropdown nav {isOpen} toggle={() => (isOpen = !isOpen)}>
      <DropdownToggle nav caret>Dropdown</DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <NavItem>
      <NavLink href="#">Link</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#">Another Link</NavLink>
    </NavItem>
    <NavItem>
      <NavLink disabled href="#">Disabled Link</NavLink>
    </NavItem>
  </Nav>
  <header>
    <h1>Harrison Cole</h1>
    <img src="src/assets/HarrisonPhoto.jpg" alt="me" width="350" height="350" />
  </header>
  <section>
    <h2>About me</h2>
    <p>
      Hi! My name is Harrison Cole and I am from Camas, Washington. I am the
      oldest of four kids and have a dog and two birds at home. Growing up in
      the great northwest, I love doing anything outdoors especially hiking and
      climbing. In high school I played tennis and basketball and participated
      in choir as well.
    </p>
    <p>
      I am an aspiring web programmer, developer, and entrepreneur. Currently, I
      am finishing up my computer science degree and business minor here at BYU.
      My goal for my education is to learn about new perspectives and ideas that
      will inform how I see the world and what I can add to it; to be as
      prepared as I can be to support a family and manage effective
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
      introductory CS class, but as I still own the domain and virtual server, I
      wanted to (a) get some basic practice with Svelte, and (b) document some
      packages, technologies, and ideas about web development. Check out some of
      the content below and on other tabs! A lot of this site is just web
      development ideas.
    </p>
    <p>
      At first, I imagined annotating and creating different subdomain projects
      with different frameworks under this domain, and I may come back to that,
      but my attention has mostly been on other independent projects. You can
      check out some of my public repos and project boards on my GitHub:
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
  </div>
</main>

<style>
  .card-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
</style>
