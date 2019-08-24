<template>
    <div>
        <div id="myChart" :style="{width: '500px', height: '300px'}"></div>
        <div id="sanxing" :style="{width: '500px', height: '300px'}"></div>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted() {
            this.drawLine();
            this.drawSanxing();
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    title: { text: '在Vue中使用echarts' },
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                });
            },


            drawSanxing() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('sanxing'))
                // 绘制图表
                myChart.setOption({
                    backgroundColor: '#2c343c',
                    visualMap: {
                        show: false,
                        min: 80,
                        max: 600,
                        inRange: {
                            colorLightness: [0, 1]
                        }
                    },
                    series: [
                        {
                            name: '访问来源',
                            //饼图类型
                            type: 'pie',
                            radius: '55%',
                            data: [
                                { value: 235, name: '视频广告' },
                                { value: 274, name: '联盟广告' },
                                { value: 310, name: '邮件营销' },
                                { value: 335, name: '直接访问' },
                                { value: 400, name: '搜索引擎' }
                            ],
                            //让每个伞形的半径不一样
                            roseType: 'angle',
                            label: {
                                normal: {
                                    textStyle: {
                                        color: 'rgba(255, 255, 255, 0.3)'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    lineStyle: {
                                        color: 'rgba(255, 255, 255, 0.3)'
                                    }
                                }
                            },
                            // 中有一些通用的样式，诸如阴影、透明度、颜色、边框颜色、边框宽度等
                            itemStyle: {
                                normal: {
                                    color: '#c23531',
                                    shadowBlur: 200,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                })
            }
        }
    }


</script>