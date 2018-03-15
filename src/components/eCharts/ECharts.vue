<template>
  <div>
    <h1> ECharts </h1>
    <b-row>
      <b-col></b-col>
      <b-col>
        <div id="e_chart" style="width: 600px; height: 400px;"></div>
      </b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'e-charts',
  data() {
    return {
      bar_data: [3, 30, 12, 27, 14],
    };
  },
  watch: {
    bar_data() {
      // console.log(newData);
      // console.log(oldData);
      // console.log('Data Change Detected');
      this.draw_bar();
    },
  },
  methods: {
    draw_bar() {
      const eChart = this.$echarts.init(document.getElementById('e_chart'));
      const option = {
        title: {
          text: 'First Examples for ECharts',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {
          data: ['Sales Volume'],
        },
        xAxis: {
          data: ['Shirts', 'Socks', 'Pants', 'Sneakers', 'Jackets'],
        },
        yAxis: {},
        series: [{
          name: 'Sales Volume',
          type: 'bar',
          data: this.bar_data,
          label: {
            normal: {
              show: true,
              position: 'inside',
            },
          },
        }],
      };
      eChart.setOption(option);
    },
    changeData() {
      const that = this;
      setInterval(() => {
        for (let i = 0; i < that.bar_data.length; i += 1) {
          that.$set(this.bar_data, i, that.bar_data[i] -= 1);
          // that.bar_data[i] -= 1;
          // console.log(`Data: ${that.bar_data[i]}, Count: ${i}`);
        }
      }, 5000);
    },
  },
  mounted() {
    this.draw_bar();
    this.changeData();
  },
};
</script>

<style scoped>

</style>
