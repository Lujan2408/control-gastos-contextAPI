export type Expense = {
  id: string, 
  amount: number, 
  expenseName: string,
  category: string,
  date: Value
}

export type DraftExpense = Omit<Expense, 'id'> // Utility type para evitar repetir a definición de id de expense 

type ValuePiece = Date | null; 
export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type Category = {
    id: string;
    name: string;
    icon: string;
}