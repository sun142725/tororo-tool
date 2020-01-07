<template name="btn">
  <div class='custom-footer-container'>
    <button class='custom-footer-btn' @click.stop="itemContent.notOperation ? '' : footClick()">{{itemContent.footText}}</button>
  </div>
</template>
<script>
export default{
  name: 'btn',
  props: {
    itemContent: {
      type: Object,
      default: ()=>{
        return {}
      }
    }
  },
  methods: {
    footClick(item, index){
      this.$emit('footClick')
    }
  }
}
</script>