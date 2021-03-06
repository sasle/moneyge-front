import { Component, OnInit, Input } from '@angular/core';

interface Expense {
  name: string;
  date: number;
  value: number;
}


@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.css']
})


export class NewExpenseComponent implements OnInit {
  @Input() name: string;
  @Input() date: number;
  @Input() value: number;
  // amount; -> aqui vou pegar direto do .length do vetor que vier do backend.
  expense: Expense = {
    name: this.name,
    date: this.date,
    value: this.value
  };

  expenses: Expense[] = [];

  constructor() { }

  ngOnInit() { }

  clique() {
    this.expense.name = this.name;
    this.expense.date = this.date;
    this.expense.value = this.value;
    this.expenses.push(this.expense);
    console.log(this.expense);
    console.log(this.expenses);
    alert('Registrado com sucesso!');
  }
}
