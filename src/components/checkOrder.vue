<template>
  <div>
    <this-dialog :is-show="isShowCheckDialog" @on-close="checkStatus">
      请检查你的支付状态！
      <div class="button" @click="checkStatus">
        支付成功
      </div>
      <div class="button" @click="checkStatus">
        支付失败
      </div>
    </this-dialog>
    <this-dialog :is-show="isShowSuccessDialog" @on-close="toOrderlist">
      购买成功！
    </this-dialog>
    <this-dialog :is-show="isShowFailDialog">
      购买失败！
    </this-dialog>
  </div>
</template>

<script>
import Dialog from './dialog'
export default {
  components: {
    thisDialog: Dialog
  },
  props: {
    isShowCheckDialog: {
      type: Boolean,
      default: false
    },
    orderId: {
      type: [String, Number]
    }
  },
  data () {
    return {
      isShowSuccessDialog: false,
      isShowFailDialog: false
    }
  },
  methods: {
    checkStatus () {
      this.$http.get('/api/checkOrder', {
        orderId: this.orderId
      })
        .then((res) => {
          this.isShowSuccessDialog = true
          this.$emit('on-close-check-dialog')
        }, (err) => {
          this.isShowFailDialog = true
          this.$emit('on-close-check-dialog')
        })
    },
    toOrderlist(){
        this.$router.push({path:'/orderlist'})
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
