import { fetchCardData } from '@/app/lib/data';
import { fetchRevenue } from '@/app/lib/data';


export default async function Page() {
  const revenue = await fetchRevenue();
  const {
    totalPaidInvoices,
    totalPendingInvoices,
    numberOfInvoices,
    numberOfCustomers,
  } = await fetchCardData();

  return (
    <main>
      <section>
        <h1>Revenue</h1>
        {revenue.map((item, i) => (
          <p key={i}>Month: {item.month}, Revenue: {item.revenue}</p>
        ))}
      </section>
      <section>
        <h1>Invoice Summary</h1>
        <p>{numberOfInvoices} invoices</p>
        <p>{numberOfCustomers} customers</p>
      </section>
    </main>
  );
}