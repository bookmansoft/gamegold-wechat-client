<!-- 购买成功展示页面，疑并未启用
-->
<template>
  <div class="root">
    <div style="background-color:#f3f3f3">
      <flexbox>
        <flexbox-item :span="12">
          <div style="height:6px;"></div>
        </flexbox-item>
      </flexbox>
    </div>
    <div style="background-color:white">
      <!-- 内容区 -->
      <flexbox class="content">
        <flexbox-item :span="2"></flexbox-item>
        <flexbox-item :span="1">
          <div style="display:block;padding:2px">
            <img
              src="/static/img/stock/pay/buysuccess.png"
              style="width:auto;height:auto;max-width:100%;max-height:100%"
            >
          </div>
        </flexbox-item>
        <flexbox-item :span="5">
          <div style="display:block;margin-left:5px;line-height:30px">
            <span
              style="font-size:21px;font-family:'黑体','Heiti SC','Droidsansfallback';color:rgb(255,113,100);"
            >购买成功！</span>
          </div>
        </flexbox-item>
        <flexbox-item :span="4"></flexbox-item>
      </flexbox>

      <flexbox>
        <flexbox-item :span="1"></flexbox-item>
        <flexbox-item :span="10">
          <div style="display:block;margin-left:10px;margin-right:10px">
            <span style="font-size:14px;font-family:'黑体','Heiti SC','Droidsansfallback';color:rgb(163,163,163);">
              宝箱将送到您的钱包地址，如遇网络波动可能会有延迟，敬请谅解。
            </span>
          </div>
        </flexbox-item>
        <flexbox-item :span="1"></flexbox-item>
      </flexbox>

      <flexbox style="margin-top:60px">
        <flexbox-item :span="1"></flexbox-item>
        <flexbox-item :span="10">
          <div style="display:block;margin-left:10px;margin-right:20px">
          <x-button
            style="border-radius:5px;background-color:rgb(255,113,101)"
            type="warn"
            @click.native="viewBox()"
          >查看我的宝箱</x-button>
          </div>
        </flexbox-item>
        <flexbox-item :span="1"></flexbox-item>
      </flexbox>
      <flexbox style="margin-top:20px">
        <flexbox-item :span="1"></flexbox-item>
        <flexbox-item :span="10">
          <div style="display:block;margin-left:10px;margin-right:20px">
          <x-button
            plain
            style="border-radius:5px;color:rgb(255,113,101)"
            type="warn"
            @click.native="viewBox()"
          >返回众筹列表</x-button>
          </div>
        </flexbox-item>
        <flexbox-item :span="1"></flexbox-item>
      </flexbox>
    </div>
  </div>
</template>
<script>
import {
  XButton,
  XHeader,
  Tab,
  TabItem,
  Flexbox,
  FlexboxItem,
  Group,
  Divider,
  Box,
  InlineXNumber,
  Cell,
  CellBox,
  CellFormPreview,
  Badge
} from "vux";
import Navi from "@/components/Navi.vue";

export default {
  components: {
    Navi,
    Tab,
    XButton,
    XHeader,
    TabItem,
    Flexbox,
    FlexboxItem,
    Group,
    Divider,
    Box,
    InlineXNumber,
    Cell,
    CellBox,
    CellFormPreview,
    Badge
  },
  data() {
    return {};
  },
  methods: {},
  created() {
    if(!this.$store.state.user.auth.uid) {
        this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.root {
  overflow-x: hidden;
  margin-left: 0px;
  margin-right: 0px;
}
.content {
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 60px;
  margin-bottom: 20px;
}
</style>
