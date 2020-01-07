<template>
  <div class='custom-footer-container' @click="itemContent.notOperation ? '' : footClick()">
    <!-- <img class='custom-footer-icon' style='margin-left: 10px;' src="../../../../assets/images/icon_arrow.png"  mode='aspectFill'/> -->
    <span class='custom-footer-text'>{{itemContent.footText}}</span>
  </div>
</template>
<script>
export default{
  name: 'textIcon',
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