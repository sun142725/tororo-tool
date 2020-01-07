
<template>
  <div :class="item.content.title ? 'custom-containershadow' : 'custom-container'">
    <div class='custom-title' v-if="item.content.title">
      <span class='custom-title-text'>{{item.content.title}}</span>
      <span>{{item.content.subTitle}}</span>
      <img class='tag-pic' src="https://baidu.png" mode='aspectFill'/>
    </div>
    <div class='custom-detail' :class="item.content.title ? '' : 'no-title'" @click.stop='customClick(item, index)'>
      <custom-text v-if="!item.content.template" :itemContent="{contentText: item.content}"></custom-text>
      <component :is="config[item.content.template]" :itemContent="item.content"></component>
    </div>
    <!-- <div class='custom-footer' v-if="item.content.footText">
      <component @footClick="footClick(item, index)" :is="config[item.content.footTemplate]" :itemContent="item.content"></component>
    </div> -->
  </div>
</template>
<script>
import customText from "./custom-text.vue"
import customLabel from "./custom-label.vue"
import customTextImage from "./custom-textImage.vue"
import customBtn from "./custom-foot-btn.vue"
import customTextIcon from "./custom-foot-textIcon.vue"
import customIconText from "./custom-foot-iconText.vue"
export default{
  name: 'custom',
  components: {customText, customLabel, customTextImage, customBtn, customTextIcon, customIconText},
  props: {
    item: {
      type: Object,
      default: ()=>{
        return {
          content: {}
        }
      }
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data: function(){
    return {
      config: {
        text: customText,
        textImage: customTextImage,
        label: customLabel,
        textIcon: customTextIcon,
        iconText: customIconText,
        btn: customBtn
      }
    }
  },
  methods: {
    customClick(item, index){
      this.$emit('customClick', item, index)
    },
    footClick(item, index){
      this.$emit('footClick', item, index)
    }
  }
}
</script>
<style lang="scss">

/* 自定义消息 */
.custom-container{
    width: 100%;
    border-radius: pxToem(8);
  }
  .custom-containershadow{
     box-shadow: 0 0 pxToem(8) rgba(0,0,0,0.2);
     border-radius: pxToem(8);
    overflow: hidden;
    width: 100%;
  }
  .custom-title{
    font-size: pxToem(14);
    color: #666666;
    position: relative;
    line-height: 1.5;
    box-sizing: border-box;
    border-bottom: pxToem(1) solid#F6F6F6;
    padding: pxToem(10);
    background-color: #fff;
  }
   .custom-title .custom-title-text{
     font-size: pxToem(16);
      color: #4A4A4A;
      margin-right: pxToem(10);
  }
  .custom-title .tag-pic{
    position: absolute;
    right: 0;
    top: 0;
    width: pxToem(40);
    height:pxToem(40);
  }
.custom-container .custom-detail{
  background-color: rgba(0,0,0,0);
  text-align: center;
  color: #999;
}
.custom-detail{
  box-sizing: border-box;
  padding: pxToem(10);
  font-size: pxToem(14);
  color: #666666;
  background-color: #fff;
}
.custom-detail .custom-detail-pic{
  width: 100%;
  margin-top: pxToem(10);
}
.custom-detail .custom-detail-pic img{
  width: pxToem(74);
  height: pxToem(74);
  margin-right: pxToem(10);
}
.custom-detail .label-view{
  font-size: pxToem(14);
  color: #4A4A4A;
  margin-bottom: pxToem(10);
  line-height: 1.5;
  background-color: #fff;
  white-space: pre-wrap;
}
.custom-detail .label-view .label-title-text{
  color: #9B9B9B;
  display: block;
}
 .custom-footer{
    font-size: pxToem(14);
    color: #4A4A4A;
    height: pxToem(40);
    line-height: 1.5;
    border-top: pxToem(1) solid#F6F6F6;
    padding:0 pxToem(18);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #fff;
    
  }
  .custom-footer-container{
    display: flex;
    align-items: center;
  }
  .custom-footer .custom-footer-text{
    line-height: 1;
    color: #4A4A4A;
    font-size:pxToem(14);
    cursor: pointer;
  }
  .custom-footer .custom-footer-icon{
    width: pxToem(16);
    height: pxToem(16);
  }
   .custom-footer .custom-footer-btn{
     background-image: linear-gradient(128deg, #ABD2FF 0%, #4A90E2 100%);
     height: pxToem(30);
     font-size: pxToem(14);
     line-height: pxToem(30);
     border-radius: pxToem(30);
     width: auto;
     padding: 0 pxToem(21);
     color: #fff;
     outline: none;
     border: none;
     cursor: pointer;
   }
</style>