<template>
    <div class="chooser-component">
        <ul class="chooser-list">
          <li
            :class="{active:index===nowIndex}"
            v-for="(item,index) in selections"
            @click="changenowindex(index)">{{item.label}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            nowIndex:0
        }
    },
    props:{
      selections:{
            type:String,
            default:[
              {
                lable: '红色版',
                value: 0
              }
            ]
        }
    },
    methods:{
      changenowindex(index){
          this.nowIndex=index;
          this.$emit('on-change', this.selections[index])
        }
    }

}
</script>

<style scoped>
.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li{
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
