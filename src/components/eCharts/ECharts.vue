<template>
  <div>
    <h1> ECharts </h1>
    <b-row>
      <b-col></b-col>
      <b-col>
        <div id="bar_chart" style="width: 600px; height: 400px;"></div>
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col>
        <div id="pie_chart" style="width: 650px; height: 400px;"></div>
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
      pie_data: [{
        value: 235, name: 'Software Engineering',
      }, {
        value: 274, name: 'Natural Language Processing',
      }, {
        value: 310, name: 'Web Development',
      }, {
        value: 335, name: 'Big Data',
      }, {
        value: 400, name: 'Machine Learning',
      },
      ],
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
      const eChart = this.$echarts.init(document.getElementById('bar_chart'));
      const option = {
        title: {
          text: 'Bar Chart',
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
    draw_pie() {
      const eChart = this.$echarts.init(document.getElementById('pie_chart'));
      const option = {
        title: {
          text: 'Pie Chart',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          x: 'right',
          data: ['Software Engineering', 'Natural Language Processing', 'Web Development', 'Big Data', 'Machine Learning'],
        },
        series: [{
          name: 'Categories',
          type: 'pie',
          radius: '55%',
          data: this.pie_data,
          roseType: 'angle',
          itemStyle: {
            normal: {
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
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
    this.draw_pie();
    this.changeData();
  },
};
</script>

<style scoped>

</style>
