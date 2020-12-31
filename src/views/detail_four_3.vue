<template>
  <div class="detail">
    <el-row :gutter="30">
      <el-col :span="8">
        <div class="back2" style="margin-bottom: 20px">
          <template>
            <div class="val_body" v-for="item in list_1" :key="item.tagname">
              <div class="name">{{ item.var_name }}</div>
              <div class="value">
                {{ item.pv }}
                <div>{{ unit[item.tagname] }}</div>
              </div>
            </div>
          </template>
        </div>
        <div class="back2">
          <template>
            <div class="val_body" v-for="item in list_2" :key="item.tagname">
              <div class="name">{{ item.var_name }}</div>
              <div class="value">
                {{ item.pv }}
                <div>{{ unit[item.tagname] }}</div>
              </div>
            </div>
          </template>
        </div>
      </el-col>
      <el-col :span="8" class="back1"
        ><img src="../assets/images/ksdlianjieq.png" width="100%" alt=""
      /></el-col>
      <el-col :span="8"
        ><div class="back2" style="margin-bottom: 20px">
          <template>
            <div class="val_body" v-for="item in list_3" :key="item.tagname">
              <div class="name">{{ item.var_name }}</div>
              <div class="value">
                {{ item.pv }}
                <div>{{ unit[item.tagname] }}</div>
              </div>
            </div>
          </template>
        </div>
        <div class="back2">
          <template>
            <div class="val_body" v-for="item in list_4" :key="item.tagname">
              <div class="name">{{ item.var_name }}</div>
              <div class="value">
                {{ item.pv }}
                <div>{{ unit[item.tagname] }}</div>
              </div>
            </div>
          </template>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
const { four_zhizaoxian_only } = require("../../api/index.js");
export default {
  name: "detail_four_1",
  data() {
    return {
      list_1: [],
      list_2: [],
      list_3: [],
      list_4: [],
      filterList_1: ["state", "snm", "prd_no", "mono", "people"],
      filterList_2: ["plan_qty", "qty", "total_qty", "takt", "time_crop_rate"],
      filterList_3: [
        "item_run",
        "totaltime_run",
        "item_eqp",
        "totaltime_eqp",
        "item_alarm",
        "totaltime_alarm",
      ],
      filterList_4: [
        "num_gramforce",
        "num_badcontact",
        "num_beforejump",
        "num_voltage",
      ],
    };
  },
  async mounted() {
    const { data } = await four_zhizaoxian_only({ num: this.$route.params.id });

    data.data.forEach((val) => {
      val.tagname = val.tagname.split("\\")[3];
      this.nameFilter(val);
    });

    this.list_1 = this.OrderFilter(this.filterList_1, data.data);
    this.list_2 = this.OrderFilter(this.filterList_2, data.data);
    this.list_3 = this.OrderFilter(this.filterList_3, data.data);
    this.list_4 = this.OrderFilter(this.filterList_4, data.data);
  },
  computed: {
    ...mapState(["unit"]),
  },
};
</script>

<style lang="scss" scoped>
.detail {
  padding: 20px 50px 0 50px;
  .back2 {
    height: 400px;
    background: url("../assets/images/detail_back1.png");
    background-size: 100% 400px;
    padding: 20px;
    .val_body {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      color: white;
      padding-bottom: 5px;
      .name {
      }
      .value {
        width: 170px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .back1 {
    height: 820px;
    background: url("../assets/images/detail_back2.png");
    background-size: 100% 820px;
    display: flex;
    align-items: center;
  }
}
</style>
