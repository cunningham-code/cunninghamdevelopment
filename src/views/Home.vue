<template>
  <div class="home">
    <div class="header">
      <img
        alt="John Cunningham Header"
                src="/header/4.png"
              />
    </div>
    <div class="main">
      <div class="image">
        <img
        alt="Image of John Cunningham"
                src="/background/skills.jpg"
              />
      </div>
      <div class="pages" style="text-align: left">
        <div class="page">
          <h2>I have experience in...</h2>
           <div class="pills">
              <p v-for="skill in skills" :key="skill">{{ skill }}</p>
          </div>
        </div>
        <div class="page">
          <h2>I'm exploring opportunities in...</h2>
         <div class="pills">
              <p v-for="op in opportunities" :key="op">{{ op }}</p>
          </div>
        </div>
        <div class="page">
          <h2>I'm currently working at...</h2>
          <div class="pills">
            <p>{{ currentWork }}</p>
          </div>
        </div>
        <!--
        <div class="page">
          
        </div>
        -->
      </div>
    </div>
    <div class="footer">
      <h1>Let's Talk</h1>
      <p>contact@johnacunningham.com</p>
      <div class="icons">
        <i class="bi bi-twitter"></i>
        <i class="bi bi-github"></i>
        <i class="bi bi-linkedin"></i>
      </div>
    </div>
  </div>
  <!--
    <div id="main" style="display: flex; height: 100%">
      <div class="main-content" style="overflow-y: scroll">
        <section
          class="section top-section"
          id="screen1"
          style="background-color: #003251; color: #fff"
        >
          <div class="content" style="max-width: 875px; padding: 25px">
            <img
              alt="John Cunningham Logo"
              style="
                width: 35%;
                height: auto;
                max-height: 100px;
                max-width: 100px;
              "
              src="logo.svg"
            />
            <h1 id="main-text" class="header center-align top">
              <b>I'm John Cunningham</b>
            </h1>
            <a id="main-resume" onclick="window.open('resume.html');"
              >See My Resume</a
            >
          </div>
        </section>
        <nav>
          <ul>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#venture">Venture</a></li>
            <li><a href="#industry">Industry</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div id="main-dynamic">
          <section class="dynamic-blocks" v-for="sec in sections" :key="sec.id">
            <div class="main-block-left" :style="sec.img"></div>
            <div class="main-block-right">
              <div>
                <h1 class="main-block-title">{{sec.headline}}</h1>
                <p>{{sec.description}}</p>
                <div class="all-links">
                  <div v-for="link in sec.links" :key="link.link">
                    <a :href="link.link" target="_blank" rel="noopener"
                      >{{ link.title }}</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section
          class="section"
          id="contact"
          style="background-color: #eff2f4; color: #000"
        >
          <div
            class="content"
            style="
              max-width: 100%;
              width: 750px;
              padding: 50px;
              font-size: 1.45rem;
              line-height: 2rem;
            "
          >
            <h1 style="font-weight: 700; margin-bottom: 30px">Contact Me</h1>
            <div id="social-pills-co">
              
              <div class="social-pills" v-for="link in sociallinks" :key="link.url">
                <a
                  :href="link.link"
                  target="_blank"
                  rel="noopener"
                  style="color: #fff"
                  >{{ link.title }}</a
                >
              </div>
              
            </div>
            <div
              style="
                margin: 20px;
                font-size: 0.8rem;
                color: #0f0f0f;
                line-height: 1.5;
              "
            >
              <p>Designed and built by John Cunningham</p>
              <p>The code for this website is available on GitHub</p>
              <p>© Copyright John Cunningham 2020</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  -->
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
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4",
        "Option 5"
      ],
      opportunities: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4",
        "Option 5"
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
              title: "See Preff Live",
              link: "https://www.preff.menu",
            },
            {
              title: "Learn More About Niteful",
              link:
                "https://play.google.com/store/apps/details?id=com.cunningham.niteful&hl=en_US",
            },
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
          url: "mailto:cunningjc10@gmail.com",
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
  width: 100%;
  height: 100%;
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
  flex: 3
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

.page {
  padding: 0px 20px;
  margin: 30px;
  position: relative;
  border-left: 2px #88A0A8 dotted;
}

.pills {
    display: flex;
    margin-bottom: 20px;
    margin-top:10px;
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
  background-color: #003251;
  color: #fff;
  width: 100%;
  padding: 50px;
}

.footer p {
  font-size: 2rem;
  padding: 5px;
}

.footer .icons i {
  height: 2em;
  width: 2em;
  padding: 1em 0.25em;
}
</style>

<style>
#app {
  max-height: 100% !important;
  width: 100%;
}

html {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
body {
  overflow: auto;
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
}
</style>