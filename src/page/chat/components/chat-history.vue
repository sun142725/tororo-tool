<template>
    <ul class="chat-history">
        <li v-for="(message, index) in messages" :key = index>
            <h6 v-if="message.type != 'system'">{{message.time | formatTime}}</h6>
            <div class="custom" v-if="message.type == 'system'">
                <custom :item="message" :index="index" @customClick="customClick" @footClick="footClick"></custom>
            </div>
            <div class="message-core" v-else>
                <div class="avar" v-if="!message.isSend">
                    <img :src="doctorHeadImg" alt="">
                </div>
                <div class="content" :class="message.isSend ? 'right' : 'left'">
                    <span v-if="message.type=='text'">{{message.content}}</span>
                    <div class="content-image" v-else-if="message.type == 'image'">
                        <img @click.stop="showImg(message)" :src="message.content" alt="" >
                    </div>
                    <div class="content-file" v-else-if="message.type == 'file'">
                        <a href="javascript:void(0)" @click="showPdf(message.content)" target="_blank" download="file">
                            <i>{{message.content.split('/')[message.content.split('/').length-1]}}</i>
                            <img src="../../../assets/img/pdf.png" alt="">
                        </a>
                    </div>
                    <div v-else-if="message.type == 'custom'">
                        <custom :item="message" :index="index" @customClick="customClick" @footClick="footClick"></custom>
                    </div>
                    <!-- <div v-else>{{}}</div> -->
                </div>
                <div class="avar" v-if="message.isSend">
                    <img :src="patientHeadImg" alt="">
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
import { formatTime } from '../js/index'
import { mapState } from 'vuex';
import custom from './templates/custom'
import { ImagePreview } from 'vant'
import { pdf } from '../../../plugin/index'
export default {
    name: 'chat-history',
    filters: { formatTime },
    components: {custom},
    props: {
    },
    data: function(){
        return {
            doctorHeadImg: '',
            patientHeadImg: ''
        
        }
    },
    mounted: function(){
    },
    methods: {
        customClick(item, index){
             console.log('customClick', item, index)
            //  if(item.content)
        },
        footClick(item, index){
            console.log('footClick', item, index)
        },
        showPdf(content){
            pdf(content)
        },
        showImg(message){
            console.log(message)
            //  直接发送的图片 保存其唯一值 uniqueId
            var index = this.imagesArr.findIndex((v)=>{
                if(v.id){
                    return v.id == message.id
                } else {
                    return v.uniqueId == message.uniqueId
                }
            })
            console.log(this.imagesArr, index)
            var images = this.imagesArr.map(v => v.src)
            ImagePreview({
                    images: images,
                    startPosition: index
                });
        }
    },
    computed: {
        ...mapState({
            messages: state => state.chatStore.messages,
            currentVisit: state => state.conversation.currentVisit,
            }),
        imagesArr: function(){
            return this.messages.filter((v)=>{
                return v.type == 'image' && (v.src = v.content)
            })
        }
    },
    destroyed: function(){
        pdf('')
    }
}
</script>
<style lang="scss" scoped>
@import "./chat-history.scss";
</style>


