
<template>
  <div>
    <span>{{itemContent.contentText}}</span>
    <div class='custom-detail-pic'>
      <img v-for="(imageSrc, i) in itemContent.contentImages" :key="i" :src="imageSrc" @click.stop="$imageViewer"/>
    </div>
  </div>
</template>
<script>
export default{
  name: 'textImage',
  props: {
    itemContent: {
      type: Object,
      default: ()=>{
        return {}
      }
    }
  },
  methods: {
    customClick(item, index){
      this.$emit('customClick', item, index)
    }
  }
}
</script>