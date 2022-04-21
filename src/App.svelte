<script>
  import Bio from './Bio.svelte';
  import Social from './Social.svelte';
  import Projects from './Projects.svelte';
  import Webring from './Webring.svelte';
  //  import Image from './Image.svelte';
  import Image from 'svelte-image';
</script>

<div class="circle-pink" />
<div class="circle-blue" />

<main>
  <img alt="photo of freda" src="/pic.png" ratio="70%" />
  <Social />
  <h2>freda suyi ding</h2>
  <Bio />
  <Projects />
  <Webring />
</main>

<style>
  main {
    max-width: 80vw;
    font-size: 1rem;
    margin: 0 auto;
  }

  img {
    max-width: 40vw;
  }

  .bar {
    height: 10px;
    width: 100%;
    margin-bottom: 1em;
  }

  .grey {
    background-color: lightgrey;
  }

  .black {
    background-color: black;
  }

  .circle-pink {
    position: absolute;
    margin: 0;
    bottom: -80%;
    right: 10%;
    height: 70%;
    width: 30%;
    background-color: pink;
    border-radius: 50%;
    filter: blur(80px);
    z-index: -1;
    opacity: 35%;
  }

  .circle-blue {
    position: absolute;
    margin: 0;
    height: 100%;
    bottom: -10%;
    width: 33%;
    background-color: blue;
    border-radius: 50%;
    filter: blur(100px);
    z-index: -1;
    opacity: 15%;
  }

  /*
  @keyframes blob {
    0% {
      height: 50%;
      left: 30%;
    }
    30% {
      height: 40%;
      left: 30%;
    }
    68% {
      height: 60%;
      left: 35%;
    }
    72% {
      height: 50%;
      left: 30%;
    }
    100% {
      height: 80%;
      left: 65%;
    }
  }
  h2 {
    color: #333;
  }
  h1 {
    font-size: 4em;
    font-weight: 100;
  }
  h2 {
    font-size: 1em;
  }

  h4 {
    color: black;
    font-weight: normal;
  }
  */

  @media (min-width: 640px) {
    main {
      max-width: 40vw;
    }
  }
</style>
