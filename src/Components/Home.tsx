import { useState } from 'react'
import { NewTransaction } from './NewTransaction/NewTransaction'
import { TransactionCard } from './TransactionCard/TransactionCard'

export type Category = {
  id: string
  label: string
}

export type Transaction = {
  id: string
  label: string
  date: string
  amount: number
  category: string
}

export function Home() {
  const [categories, setCategories] = useState<Category[]>([
    { id: 'food', label: 'Food' },
    { id: 'salary', label: 'Salary' },
    { id: 'going-out', label: 'Going out' },
    { id: 'commute', label: 'Commuting' },
  ])

  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: '1',
      label: 'Lunch',
      date: '1.1.2022',
      amount: 1000,
      category: 'salary',
    },
    {
      id: '2',
      label: 'Lunch',
      date: '3.1.2022',
      amount: -10,
      category: 'commute',
    },
    {
      id: '3',
      label: 'Lunch',
      date: '3.1.2022',
      amount: -1,
      category: 'commute',
    },
  ])

  return (
    <>
      <div>Home</div>
      <NewTransaction categories={categories} />
      <div>List of transactions</div>
      <div>
        {transactions.map((transaction) => (
          <TransactionCard {...transaction} key={transaction.id} />
        ))}
      </div>
    </>
  )
}
