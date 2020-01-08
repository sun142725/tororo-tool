<template>
<div>
    <input type="file" ref="">
</div>
</template>
<script>
export default{
    name: 'image-to-text',
    data: function(){
        return {
            
        }
    },
    methods: {
        // if (imgBase.split(',')[0].indexOf('base64') >= 0) {
                    // imgBase64 = imgBase.split(',')[1];
                    // getText(imgBase64)
                // }
        getImgBase64(image){
            var reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = function (e) {
                console.log(e)
                return e.target.result; //这个就是base64的编码
            }
        }
    }
}
</script>