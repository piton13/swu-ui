<template>
  <div class="home">
    <div class="event">
      <div class="event_picture">
        <img alt="Event 1 picture" src="../assets/herb_velykyi.avif" class="event_picture_img">
      </div>
      <div class="event_description">Description Event 1</div>
    </div>
<!--    <div v-for="(event, ind) in events" :key="ind">
      <EventComponent
          :description="event.description"
          :pictureAlt="event.pictureAlt"
          :pictureLink="event.picturePath"
      />
    </div>-->
<!--    <EventComponent description="Description Event 2" picture-alt="Event 2 picture" picture-link="herb_velykyi.avif"/>-->
<!--    <div>
      <div>
        <img alt="Event 2 picture" src="../assets/Tryzub.png" class="event_picture_img">
      </div>
      <div>Description Event 2</div>
    </div>
    <div>
      <div>
        <img alt="Event 3 picture" src="../assets/Kalyna.jpg" class="event_picture_img">
      </div>
      <div>Description Event 3</div>
    </div>-->
  </div>
</template>

<script>
// import EventComponent from './Event';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    // EventComponent,
  },
  data: () => ({
    // height: 640,
    // width: 640,
    events: [{
      description: 'Description Event 2',
      pictureAlt: 'Event 2 picture',
      picturePath: require("../assets/Kalyna.jpg"),
      // picturePath: '../assets/herb_velykyi.avif'
    }],
  }),
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  /*align-items: baseline;*/
  align-items: center;
}
.event_picture,
.event_description {}
.event_picture {
  height: 540px;
  width: 540px;
}
.event_picture_img {
  width: 100%;
  height: 100%;
}
</style>
