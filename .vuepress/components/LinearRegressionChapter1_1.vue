<template>
  <div>
    <h1>Chart</h1>

    <el-table :data="tableData" style="width: 100%" empty-text="ডেটা নেই">
      <el-table-column prop="income" label="আয় (1000 BDT)"></el-table-column>
      <el-table-column prop="eating" label="প্রতি মাসে কয়বার বাইরে খেতে গিয়েছেন"></el-table-column>
    </el-table>
    <button @click="randomize">Randomize</button>
    <input @keyup="setTheta1">Set theta value</input>
    <v-chart :options="viz"></v-chart>
  </div>
</template>

<script>
import "echarts/lib/chart/line";
import "echarts/lib/chart/scatter";

export default {
  data() {
    
    let tableData = [];
    let regressionData = [];

    this.getData();

    let theta_0 = 0;
    let theta_1 = 0;

    return {
      tableData: tableData,
      regressionData: regressionData,
      parameters: { theta_0, theta_1 }
    };
  },

  computed: {
    viz() {
      return {
        yAxis: {
          // type: "value"
        },
        xAxis: {},
        series: [
          {
            data: this.tableData.map(d => [d.income, d.eating]),
            type: "scatter"
          },
          {
            data: this.regressionData.map(d => [d.income, d.eating]),
            type: "line"
          }
        ]
      };
    }
  },

  methods: {
    setTheta1(event) {
      this.parameters.theta_1 = +event.target.value;
      this.getRegressionLine();
    },

    getRegressionLine() {
      this.regressionData = [];
      for (let i = 0; i < this.tableData.length; i++){
        this.regressionData.push({
          income: this.tableData[i].income,
          eating: this.tableData[i].income * this.parameters.theta_1 + this.parameters.theta_0
        })
      }

      console.table(this.regressionData)
      console.log({parameters: this.parameters})
    },

    async getData() {
      this.regressionData = [];
      this.tableData = [];

      for (let i = 0; i < 10; i++) {
        let income = Math.round(Math.random() * 100);
        let noise = await tf.randomNormal([1]).data();
        noise = Math.abs(noise[0]);
        let eating = Math.abs(Math.round(income * 0.5 - noise * 5));


        this.tableData.push({
          income,
          eating
        });

        // // This is regression line
        
      }

      this.tableData.sort((a, b) => {
        if (a.income < b.income) return -1;
        return a.income > b.income ? 1 : 0;
      });

      this.getRegressionLine();
    },

    randomize(event) {
      this.getData();
    }
  }
};
</script>
