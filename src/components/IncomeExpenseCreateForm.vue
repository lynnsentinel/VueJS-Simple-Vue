<template>
  <div>
      บันทึกรายรับรายจ่าย
      <div>
          <div>
              <label for="info">ชื่อรายการ :</label>
              <input type="text" v-model="form.info">
          </div>

          <div>
              <label for="income">รายรับ :</label>
              <input type="text" v-model="form.income">
          </div>

          <div>
              <label for="expense">รายจ่าย :</label>
              <input type="text" v-model="form.expenses">
          </div>
          <div>
              <label for="date">วันที่ :</label>
              <input type="date" v-model="form.date">
          </div>

          <div>
              <button @click="addIncomeAndExpense">Add</button>
          </div>
      </div>
  </div>
</template>

<script>
import IncomeExpenseStore from '@/store/IncomeExpense'
export default {
    data() {
        return {
            IncomeExpense:[],
            form: {
                info: "",
                date: "",
                income: 0,
                expenses: 0,
                }
            }
        },
    methods: {
        async fetchIncomeExpense() {
      
      // เรียก action ใน Store ใช้ ชื่อStore.dispatch('ชื่อaction')
      // เรียก getter ใน Store
      this.IncomeExpense = IncomeExpenseStore.getters.incomeExpense
        },
        clearForm() {
            this.form = {
                info: "",
                date: "",
                income: 0,
                expenses: 0,
                }
            },
        addIncomeAndExpense() {
            let payload = {
                info: this.form.info,
                date: this.form.date,
                income: parseInt(this.form.income),
                expenses: parseInt(this.form.expenses)
            }
            console.log(payload)
            IncomeExpenseStore.dispatch('addIncomeAndExpense', payload)
            this.clearForm()
        }
    }
}
</script>

<style>

</style>