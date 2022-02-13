<template>
  <div class="side-page">
    <router-link to="/">
      <img class="header" alt="John Cunningham Header" src="/header/white-clear.png" />
    </router-link>
    <div class="card">
      <h1 class="margin-20">Growth</h1>
      <p class="margin-20">I am still learning. Right now, I am most focused on learning about ESG investing because the ongoing climate crisis particularly animates me.</p>
      <p class="margin-20">I am also exploring machine learning implementations to investigate new uses for existing open-source tools. In addition, while I am skeptical about current implementations of blockchain technology, I am captivated by what a publicly provable ownership model will mean for the internet.</p>
      <p class="margin-20">I try to learn in the open on both Twitter and GitHub.</p>
      <a href="https://twitter.com/cunningham_code" target="_blank" rel="noopener noreferrer">
        <div id="main-link">
          <p>Twitter</p>
          <i class="bi bi-arrow-right"></i>
        </div>
      </a>
      <a style="margin-top: 10px" href="https://github.com/cunningham-code" target="_blank" rel="noopener noreferrer">
        <div id="main-link">
          <p>GitHub</p>
          <i class="bi bi-arrow-right"></i>
        </div>
      </a>
    </div>
    <router-link id="continue-link" to="/work">Continue to Work <i class="bi bi-arrow-right"></i></router-link>
  </div>
</template>

