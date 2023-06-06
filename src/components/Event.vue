<template>
  <div class="event">
    <div class="event_picture">
<!--      <img :alt="pictureAlt" src="../assets/herb_velykyi.avif" class="event_picture_img">-->
      <img :alt="pictureAlt" :src="image" class="event_picture_img">
<!--      <img :alt="pictureAlt" :src="picturePath" class="event_picture_img">-->
    </div>
    <div class="event_description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Event',
  data: () => ({
    image: 'src/assets/herb_velykyi.avif',
  }),
  computed: {
    picturePath() {
      console.error(`test error: `, this.pictureLink);

      return `../assets/${this.pictureLink}`;
    },
  },
  props: {
    description: String,
    pictureLink: String,
    pictureAlt: String,
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
.event_description {

}
.event_picture {
  height: 540px;
  width: 540px;
}
.event_picture_img {
  width: 100%;
  height: 100%;
}
</style>
