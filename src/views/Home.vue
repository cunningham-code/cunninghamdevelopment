<template>
  <div class="home">
    <div id=header>
      <div class="image-mobile">
          <img alt="Image of John Cunningham" src="/background/skills.jpg" />
      </div>
      <div class="header fadeIn header-fadeIn">
        <img alt="John Cunningham Header" src="/header/0.png" />
      </div>
    </div>
    <div class="main">
      <div class="image">
        <img alt="Image of John Cunningham" src="/background/skills.jpg" />
      </div>
      <div class="pages" style="text-align: left">
        <router-link to="/experience">
          <div class="page fadeIn skills">
            <h2>I have experience in...</h2>
            <div class="pills">
                <p v-for="skill in skills" :key="skill">{{ skill }}</p>
            </div>
          </div>
        </router-link>
        <router-link to="/growth">
          <div class="page fadeIn opportunities">
            <h2>I'm learning about...</h2>
            <div class="pills">
              <p v-for="op in opportunities" :key="op">{{ op }}</p>
            </div>
          </div>
        </router-link>
        <router-link to="/work">
          <div class="page fadeIn work">
            <h2>I'm working at...</h2>
            <div class="pills">
              <p>{{ currentWork }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="footer">
      <div class="footer-section">
        <div class="footer-item">
          <h1>Let's Talk</h1>
          <a href="mailto:hello@johncunningham.co">hello@johncunningham.co</a>
        </div>
        <div class="footer-item">
          <h1>Resume</h1>
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">See My Current Resume</a> 
        </div>
        <div class="footer-item">
          <div class="icons">
            <a rel=" me" href="https://techhub.social/@cunningham_code" target="_blank"><i class="bi bi-mastodon"></i></a>
            <a href="https://github.com/cunningham-code" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i></a>
            <a href="https://www.linkedin.com/in/cunningham1212/" target="_blank" rel="noopener noreferrer"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        
      </div>
      <div class="copyright-text">
        <p>My pronouns are he/him/his</p>
        <p>John Cunningham © 2022</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  /*
  components: {
    HelloWorld
  }
  */
  data: function() {
    return {
      test: "Contact Me",
      skills: [
        "App Dev.",
        "Web Dev.",
        "Cloud",
        "Design Patterns",
        "Startups"
      ],
      opportunities: [
        "Machine Learning",
        "ESG Investing"
      ],
      currentWork: "American Century Investments",
      contact: "Reach me by Twitter, email or text.",
      sections: [
        {
          id: "skills",
          img: "background-image: url('background/skills-min.jpg');",
          headline: "I bring CS + business together.",
          description:
            "My websites' cash flow statements would be barren if I didn't know how to integrate Google AdSense - and it wouldn't matter how many hours I spent developing an app if I never marketed it to its target audience. That's why I have worked hard to have a rich understanding of both development and business.",
          links: [
            {
              title: "Add Me On LinkedIn",
              link: "https://linkedin.com/in/cunningham1212",
            },
            {
              title: "See My Code On GitHub",
              link: "https://github.com/cunningham-code",
            },
          ],
        },
        {
          id: "venture",
          img: "background-image: url('background/venture.jpg');",
          headline: "I'm a founder and an app developer.",
          description:
            "Creating a startup requires constant iteration. The Flutter and Node.js codebases were never 'done'. Both apps I built, Preff and Niteful, taught me to keep trying new things.",
          links: [
            {
              title: "Learn More About Niteful",
              link:
                "https://github.com/cunningham-code/niteful",
            },
            {
              title: "Learn About Preff",
              link: "https://thebrownandwhite.com/2019/05/13/lehigh-students-create-preff-app-socializing-meals/",
            }
          ],
        },
        {
          id: "industry",
          img: "background-image: url('background/industry-min.jpg');",
          headline: "I leave behind quality work.",
          description:
            "Working at both my own college and the American Red Cross taught me about the importance of legacy - the code I wrote could very well be used a decade from now. I learned that everything from marketing plans to Python programs need to be able to scale.",
        },
      ],
      sociallinks: [
        {
          title: "Email",
          url: "mailto:hello@johncunningham.co",
        },
        {
          title: "LinkedIn",
          url: "https://linkedin.com/in/cunningham1212",
        },
        {
          title: "Twitter",
          url: "https://twitter.com/cunningham_code",
        },
        {
          title: "Text",
          url: "sms:+19179701050",
        },
      ]
    }
  }
}

</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  width: 100%;
  height: 100px;
}

.header img {
  width: 700px;
  height: auto;
  max-height: 70px;
  max-width: 80%;
  padding: 30px;
}

.main {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: calc(100% - 100px);
  max-width: 1200px;
}

.pages {
  flex: 3;
  max-width: 100%;
}

.image {
  flex: 2;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.image img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 10px 10px #88A0A8; /*#0032518f;*/
}

.image-mobile {
  display: none
}

@media only screen and (max-aspect-ratio:8/7) {
  .image { display: none; }
  
  .image-mobile {
    padding: 20px;
    display: block;
  }

  .image-mobile img {
    min-width: 300px;
    width: 75%;
    height: 300px;
    border-radius: 20px;
    object-fit: cover;
    box-shadow: 10px 10px #88A0A8; /*#0032518f;*/
  }

  .main {
    padding: 0px 0px 50px 0px !important;
    flex: 1;
  }

  #header {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .header img {
    padding: 20px;
  }

  .footer-section {
    flex-direction: column;
  }

  .footer-section > div:nth-of-type(3) { 
    border-left: none !important;
  }
  .footer-item {
    text-align: center !important;
    padding-left: 0px !important;
  }
  .copyright-text {
    flex-direction: column;
  }
}

.page {
  padding: 0px 20px;
  margin: 30px;
  position: relative;
  border-left: 2px #88A0A8 dotted;
}

@-webkit-keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
         
@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
         
.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

.skills {
  animation-delay: 0.5s;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.opportunities {
  animation-delay: 1s;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.work {
  animation-delay: 1.5s;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.header-fadeIn {
  animation-delay: 0s;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.page:hover {
  padding: 0px 20px;
  margin: 30px;
  position: relative;
  border-left: 7px #88A0A8 solid;
}

.page:active {
  padding: 0px 20px;
  margin: 30px;
  position: relative;
  border-left: 14px #88A0A8 solid;
}

.page h2 {
  color: #000000;
}

.pills {
    display: flex;
    margin-bottom: 20px;
    margin-top:10px;
    flex-wrap: wrap;
}

.pills p {
    background-color: #003251;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    margin: 3px;
    white-space:nowrap;
}
.pages h1 {
    margin: 0px 3px;
}

.main {
  padding: 50px
}

.footer {
  background: rgb(0,74,121);
  background: linear-gradient(180deg, rgba(0,74,121,1) 0%, rgba(0,28,46,1) 100%);
  color: #fff;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-section {
  display: flex;
  width: 100%;
  margin-bottom: 20px;
}

.footer-item {
  flex: 1;
  text-align: left;
  margin: 20px;
  padding-left: 40px;
  /*border-left: 2px solid #fff*/
}

.footer-section > div:nth-of-type(3) { 
    border-left: 2px solid #fff;
    font-size: 5rem;
    display: flex;
    align-items: center;
 }

.footer a {
  font-size: 1.3rem;
  color: #fff;
  text-decoration: underline;
}

.footer .icons {
  display: flex;
  align-content: space-between;
  justify-content: center;
  width: 100%;
}

.footer .icons i {
  padding: 1rem;
  font-size: 2rem
}

.copyright-text {
  display: flex;
}
.copyright-text p {
  margin: 0px 10px;
}

.home {
  background-color: #fff
}

</style>

<style>

html {
  overflow: hidden;
  width: 100%;
  height: 100%;
  overscroll-behavior: none;
  background-color: rgba(0,28,46,1);
}
body {
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  overscroll-behavior: none;
  background-color: rgba(0,28,46,1);
}

#app {
  width: 100%;
  min-height: 100%;
}
</style>