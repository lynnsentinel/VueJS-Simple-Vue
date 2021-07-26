<template>
  <div class=home>
      Income(s) & Expenses
      <income-expense-create-form></income-expense-create-form>
      <incomeExpense-table></incomeExpense-table>

  </div>


</template>

<script>
import IncomeExpenseTable from '@/components/IncomeExpenseTable.vue'
import IncomeExpenseCreateForm from '@/components/IncomeExpenseCreateForm.vue'
export default {
  components: { 
      IncomeExpenseCreateForm, 
      IncomeExpenseTable
   },

}
</script>

<style>

</style>