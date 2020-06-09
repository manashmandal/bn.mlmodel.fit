<template>
  <div>
    <h1>Chart</h1>

    <el-table :data="tableData" style="width: 100%" empty-text="ডেটা নেই">
      <el-table-column prop="income" label="আয় (1000 BDT)"></el-table-column>
      <el-table-column prop="eating" label="প্রতি মাসে কয়বার বাইরে খেতে গিয়েছেন"></el-table-column>
    </el-table>
    <button @click="randomize">Randomize</button>
    <v-chart :options="viz"></v-chart>
  </div>
</template>

<script>
import "echarts/lib/chart/line";
import "echarts/lib/chart/scatter";

export default {
  data() {
    this.getData();
    let tableData = [];
    return {
      tableData: tableData
    };
  },

  computed: {
    viz() {
      return {
        yAxis: {
          type: "value"
        },
        xAxis: {
          data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        },
        series: [
          {
            data: this.tableData.map(d => d.income),
            type: "line"
          }
        ]
      };
    }
  },

  methods: {
    async getData() {
      this.tableData = [];
      for (let i = 0; i < 10; i++) {
        let income = Math.round(Math.random() * 100);
        let noise = await tf.randomNormal([1]).data();
        noise = Math.abs(noise[0]);
        let eating = Math.round(income * 0.5 - noise);
        this.tableData.push({
          income,
          eating
        });
      }

      this.tableData.sort((a, b) => {
        if (a.income < b.income) return -1;
        return a.income > b.income ? 1 : 0;
      });
      // console.log(await tf.randomNormal([1]).data());
    },

    randomize(event) {
      this.getData();
    }
  }
};
</script>
