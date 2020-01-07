<template>
  <div class='custom-detail-array'>
    <div class='label-view' v-for="(value, key, index) in itemContent.contentLabel" :key="index">
      <span class='label-title-text'>{{key}}</span>
      <span>{{value}}</span>
    </div>
  </div>
</template>
<script>

export default{
  name: 'customLabel',
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
