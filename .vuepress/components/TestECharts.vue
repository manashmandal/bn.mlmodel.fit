<template>
  <div>
    <v-chart :options="line" />
    <button @click="addData">ADD</button>
  </div>
</template>

<script>
import "echarts/lib/chart/line";

export default {
  data() {
    this.xvalues = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    this.yvalues = [820, 932, 901, 934, 1290, 1330, 1320];

    return {
      line: {
        xAxis: {
          type: "category",
          data: this.xvalues,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: this.yvalues,
            type: "line",
          },
        ],
      },
    };
  },

  methods: {
    addData() {
      this.yvalues.push(Math.round(Math.random() * 100));
      this.xvalues.push("Mon");
      console.log("ADDING");
      console.log(Math.round(Math.random() * 5000));
    },
  },
};
</script>
