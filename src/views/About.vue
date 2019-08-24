<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button disabled>默认按钮</el-button>
    <el-button type="primary" disabled>主要按钮</el-button>
    <el-button type="success" disabled>成功按钮</el-button>
    <el-button type="info" disabled>信息按钮</el-button>

    <el-table :data="tableData6" :span-method="cellMerge"   border style="width: 100%">
      <el-table-column fixed prop="id" label="ID" width="80">
      </el-table-column>
      <el-table-column prop="region" label="国家" width="180">
      </el-table-column>
      <el-table-column prop="type" sortable label="类型" width="360">
      </el-table-column>
      <el-table-column prop="name" sortable label="名字" width="360">
      </el-table-column>
      <el-table-column v-for="(item,index) in tableHead" width="360" :key="index" :prop="item.prop" sortable :label="item.label">
        <template slot-scope="scope">
          <el-checkbox v-if="item.prop=='one'" @change="changeOne(scope)" v-model="scope.row.one"></el-checkbox>
          <el-checkbox v-if="item.prop=='two'" v-model="scope.row.two"></el-checkbox>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        tableData: [],
        //拿到后台数据后重新处理了数据
        tableData6: [],
        //id和国家
        spanArr: [],
        //类型
        typeArr: [],
        //后台获取的表头数据
        tableHead: [
          { prop: 'one', label: '判断1' },
          { prop: 'two', label: '判断2' }
        ],
        //传递给后端的数据
        data: []

      }
    },
    methods: {
      getTable() {
        this.tableData = [{
          id: 1,
          region: '中国',
          type: [{
            sortName: '器械',
            sortList: [{
              name: '器械1',
              one: true,
              two: false
            }, {
              name: '器械2',
              one: false,
              two: true
            }]
          }, {
            sortName: '软件',
            sortList: [{
              name: '软件1',
              one: false,
              two: true
            }, {
              name: '软件2',
              one: false,
              two: true
            }, {
              name: '软件3',
              one: false,
              two: true
            }]
          }]
        }, {
          id: 2,
          region: '美国',
          type: [{
            sortName: '器械',
            sortList: [{
              name: '器械1',
              one: false,
              two: true
            }, {
              name: '器械2',
              one: true,
              two: false
            }]
          }, {
            sortName: '软件',
            sortList: [{
              name: '软件1',
              one: true,
              two: true
            }, {
              name: '软件2',
              one: false,
              two: true
            }]
          }]
        }]
        this.dealTable()
      },
      changeOne(scope) {
        console.log('1111', scope)
        // if (this.data.length) {
        //   this.data.find((item, index) => {
        //     if (scope.row.type == item.type) {
        //       return
        //     }
        //   })
        // } else {
        //   this.data.push(scope.row)
        // }
       if( this.data.indexOf(scope.row)==-1){
        this.data.push(scope.row)
       }



      },
      // 处理表格数据
      dealTable() {
        let getDate = [] // 存储新表格数据
        let typeIndex = [0] // 保存id,地区需要合并的值
        let nameIndex = [0] // 保存类型需要合并的值
        let a // id,地区需要合并的行是所有类型的长度
        this.tableData.forEach((v) => {
          if (v.type && v.type.length) {
            a = 0
            v.type.forEach((subV, i, typeData) => {
              if (subV.sortList && subV.sortList.length) {
                subV.sortList.forEach((ss, k, data) => {
                  if (k === data.length - 1) {
                    typeIndex.push(data.length) // 把每一个类型下面数据长度存起来
                    a += data.length // 把所有类型下面的数据长度相加
                    if (i === typeData.length - 1) {
                      nameIndex.push(a) // 类型循环完成后把数据长度存起来
                    }
                  }
                  getDate.push({
                    id: v.id,
                    region: v.region,
                    type: subV.sortName,
                    name: ss.name,
                    one: ss.one,
                    two: ss.two
                  })
                })
              }
            })
          }
        })

        console.log(nameIndex)
        // [0, 5, 4]
        // 看一下打印出来的规律,除去第一项,5是第一次需要合并的行
        // 第二次合并又是从第五行开始合并4行

        console.log(typeIndex)
        // [0, 2, 3, 2, 2]
        // 类型的数据存储规律也是一样,第一次合并2行
        // 第二次从2行开始,合并3行,以此类推

        // 根据这个规则,只需要给数据加上两个额外的属性控制是否合并就OK
        // let k = 0
        // let t = 0
        // nameIndex.forEach((v, i, nameArr) => {
        //   if (nameArr[i + 1]) {
        //     getDate[k].nameIndex = nameArr[i + 1]
        //     k += nameArr[i + 1]
        //   }
        // })

        // typeIndex.forEach((v, i, typeArr) => {
        //   if (typeArr[i + 1]) {
        //     getDate[t].typeIndex = typeArr[i + 1]
        //     t += typeArr[i + 1]
        //   }
        // })
        this.tableData6 = getDate
        console.log(getDate)
        // 0: {id: 1, name: "器械1", nameIndex: 5, region: "中国", type: "器械", typeIndex: 2},
        // 1: {id: 1, name: "器械2", region: "中国", type: "器械"}
        // ....
        // 5: {id: 2, name: "器械1", nameIndex: 4, region: "美国", type: "器械", typeIndex: 2}
      },
      getSpanArr(data) {
        let pos
        //data是后台返回的数据，记录的是每一行的数据
        for (var i = 0; i < data.length; i++) {
          if (i === 0) {
            //spanArr 是记录每一行的合并数的数组（行数）
            //第一行的时候合并数为一【1】
            this.spanArr.push(1);
            //pos 是记录spanArr 的索引
            pos = 0
          } else {
            // 判断当前元素与上一个元素是否相同，如果相等的话，让第一行的合并数累加1，同时向数组添加第二行的需要的合并数为0，以此类推
            if (data[i].id === data[i - 1].id) {
              this.spanArr[pos] += 1;
              this.spanArr.push(0);
            } else {
              //如果不相等在比如在第三行的时候在第三个元素哪里push 1 同时记录此行的对应的索引
              this.spanArr.push(1);
              pos = i;
            }
          }
        }
      },
      getTypeArr(data){
        let pos1
        //data是后台返回的数据，记录的是每一行的数据
        for (var i = 0; i < data.length; i++) {
          if (i === 0) {
            //spanArr 是记录每一行的合并数的数组（行数）
            //第一行的时候合并数为一【1】
            this.typeArr.push(1);
            //pos 是记录spanArr 的索引
            pos1 = 0
          } else {
            // 判断当前元素与上一个元素是否相同，如果相等的话，让第一行的合并数累加1，同时向数组添加第二行的需要的合并数为0，以此类推
            if (data[i].type === data[i - 1].type) {
              this.typeArr[pos1] += 1;
              this.typeArr.push(0);
            } else {
              //如果不相等在比如在第三行的时候在第三个元素哪里push 1 同时记录此行的对应的索引
              this.typeArr.push(1);
              pos1 = i;
            }
          }
        }
      },
      
      cellMerge({ rowIndex, columnIndex }) {
        if (columnIndex === 0 || columnIndex === 1) {
          const _row = this.spanArr[rowIndex];
          const _col = _row > 0 ? 1 : 0;
          return {
            rowspan: _row,
            colspan: _col
          }
        }
        if(columnIndex==2){
          const row = this.typeArr[rowIndex];
          const col = row > 0 ? 1 : 0;
          return {
            rowspan: row,
            colspan: col
          }
        }
      },

    },

    created() {
      console.log(this.spanArr)
      console.log(111,this.typeArr)
      this.getTable()

      this.getSpanArr(this.tableData6)
      this.getTypeArr(this.tableData6)
    },

  }

</script>