<template>
  <div class="page">
    <img class="header" alt="John Cunningham Header" src="/header/white-clear.png" />
    <div class="card">
      <h1>Experience</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales turpis nec risus ornare ornare. Sed ultricies quam felis, id eleifend ante faucibus volutpat. Cras eu turpis sed sem pharetra porta eget id mi. Vivamus congue malesuada massa. Vestibulum est nibh, ultricies ac iaculis eget, accumsan nec ipsum. Suspendisse eu nunc in odio dictum placerat vitae non tortor. Praesent sit amet congue neque. Nullam neque urna, faucibus vitae augue non, semper congue dui. Proin vel lobortis ante. Mauris dignissim id massa ac congue. Maecenas in ultrices nulla.

Sed ligula metus, elementum vitae ante at, accumsan finibus augue. Duis rhoncus vitae augue sed rhoncus. Fusce non blandit ligula, et egestas elit. Quisque consectetur sit amet metus ut porta. Ut iaculis lorem nec sapien imperdiet volutpat. Nullam molestie sapien quis turpis ultrices efficitur. Praesent eget neque cursus, egestas risus sagittis, interdum velit. Donec porttitor ultrices ipsum sit amet rhoncus. Cras sed sapien ligula. Donec sit amet elit nibh. Mauris tempus elit nunc, id ullamcorper augue tempor non.

Pellentesque hendrerit erat non metus dapibus, ac fermentum neque efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras malesuada ante tortor, laoreet dignissim leo consectetur vel. Donec aliquam tempor vulputate. Maecenas ut suscipit mi. Suspendisse consequat tempor dui, ut accumsan nibh consectetur vel. Aenean volutpat dui in eros cursus pellentesque eget nec ex.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris pellentesque, sapien ac facilisis sollicitudin, justo augue malesuada risus, ac tristique sem sapien sed quam. Aliquam erat volutpat. Ut vel ipsum erat. Aenean vitae rutrum ipsum. Phasellus ex ex, suscipit vitae maximus id, pharetra vehicula ligula. Praesent a lorem ultricies magna consequat ultricies.

Mauris ipsum felis, aliquam non magna nec, rhoncus ornare diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse nunc massa, lacinia ut est ac, varius hendrerit sem. Etiam euismod sed sapien sit amet dignissim. Vivamus nunc mauris, eleifend vel sapien nec, tempor pretium ligula. Fusce non sem feugiat erat venenatis vulputate. Aenean nec augue quis ipsum ullamcorper interdum ut porttitor risus. Mauris non nibh cursus, rutrum mauris et, fringilla orci. Suspendisse interdum est eu lacus porta, in sollicitudin nulla dictum. Donec finibus sapien ut ex condimentum molestie. Morbi vel dolor lacus. Aliquam lectus nulla, euismod sit amet enim sed, auctor sollicitudin diam. Fusce consectetur posuere est, et ullamcorper nunc faucibus et. Aenean ut leo sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam luctus orci sed ante rutrum, sed finibus diam pulvinar.</p>
    </div>
  </div>
</template>

<style scoped>
.header { 
  width: 80%; 
  max-width: 400px;
  margin: 20px;
}
.page { 
  /*
  background-color: #000000;
  opacity: 0.85;
  background-image:  linear-gradient(30deg,  12%, transparent 12.5%, transparent 87%, #003251 87.5%, #003251), linear-gradient(150deg, #003251 12%, transparent 12.5%, transparent 87%, #003251 87.5%, #003251), linear-gradient(30deg, #003251 12%, transparent 12.5%, transparent 87%, #003251 87.5%, #003251), linear-gradient(150deg, #003251 12%, transparent 12.5%, transparent 87%, #003251 87.5%, #003251), linear-gradient(60deg, #00325177 25%, transparent 25.5%, transparent 75%, #00325177 75%, #00325177), linear-gradient(60deg, #00325177 25%, transparent 25.5%, transparent 75%, #00325177 75%, #00325177);
  background-size: 74px 130px;
  background-position: 0 0, 0 0, 37px 65px, 37px 65px, 0 0, 37px 65px;
  */
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(0,74,121);
background: linear-gradient(180deg, rgba(0,74,121,1) 0%, rgba(0,28,46,1) 100%);
}

.card {
  background-color: #fff;
  max-width: 1000px;
  border-radius: 10px;
  text-align: left;
  padding: 50px;
  color: #000;
}
</style>
