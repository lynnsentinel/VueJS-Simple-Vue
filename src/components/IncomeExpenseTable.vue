<template>
  <div align= center style="margin-top:30px">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>ชื่อรายการ</th>
          <th>รายรับ( บาท )</th>
          <th>รายจ่าย( บาท )</th>
          <th>วันที่</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(poke, index) in IncomeExpense" :key="index">
          <td>{{ index + 1 }}</td>
          <td v-if="index !== editIndex">{{ poke.info }}</td>
          <td v-if="index === editIndex">
            <input type="text" v-model="form.info" />
          </td>

          <td v-if="index !== editIndex">{{ poke.income }}</td>
          <td v-if="index === editIndex">
            <input type="text" v-model="form.income" />
          </td>

          <td v-if="index !== editIndex">{{ poke.expenses }}</td>
          <td v-if="index === editIndex">
            <input type="text" v-model="form.expenses" />
          </td>
          <td v-if="index !== editIndex">{{ poke.date }}</td>
          <td v-if="index === editIndex">
            <input type="date" v-model="form.date" />
          </td>

          
        </tr>
        <tr class=total>
          <th></th>
          <th>รวมรายรับ</th>
          <th >{{ sumField('income') }}</th>

          <th>รวมรายจ่าย</th>
          <th >{{ sumField('expenses') }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import IncomeExpenseStore from '@/store/IncomeExpense'
export default {
  data() {
    return {
      IncomeExpense: [], // list เอาไว้แสดง
      // สำหรับฟอร์มแก้ไข
      editIndex: -1,
      form: {
                info: "",
                date: "",
                income: 0,
                expenses: 0,
                
      },
    }
  },
  created() {
    // ใช้ this เรียก methods ใน component ตัวเอง
    this.fetchIncomeExpense()
  },
  methods: {
    async fetchIncomeExpense(){
            await IncomeExpenseStore.dispatch('fetchIncomeExpense')
            this.IncomeExpense = IncomeExpenseStore.getters.incomeExpense
            console.log(this.IncomeExpense);
    },
    openForm(index, IncomeExpense) {
      this.editIndex = index
    },
    closeForm() {
      this.editIndex = -1
      this.form = {
        
                info: "",
                date: "",
                income: 0,
                expenses: 0,
      }
    },
    editIncomeAndExpense() {
      let payload = {
        info: this.info,
        date: this.date,
        income: parseInt(this.income),
        expenses: parseInt(this.expenses)
      }
      console.log(payload)
      IncomeExpenseStore.dispatch("editIncomeAndExpense", payload)
      this.closeForm()
    },
    sumField(key) {
        // sum data in give key (property)
        return this.IncomeExpense.reduce((a, b) => a + (b[key] || 0), 0)
    }
  },
}
</script>

<style>
th,td{
  border: solid black 2px
}
.total{
  color: red
}
</style>