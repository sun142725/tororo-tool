<template>
  <div class="custom-text">
    <span>{{itemContent.contentText}}</span>
  </div>
</template>
<script>

export default{
  name: 'customText',
  props: {
    itemContent: {
      type: Object,
      default: ()=>{
        return {}
      }
    }
  }
}
</script>