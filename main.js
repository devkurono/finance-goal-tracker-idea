function addData(data) {
  // todo: Find a way to secure this.
  return { ...default_value, ...data };
}

function salaryStatus(salary, salary_received) {
  const salary_percentage = salary / 100;
  return (salary_received / salary_percentage) | 0;
}

const default_value = {
  title: '',
  salary: 0,
  salary_received: 0,
  salary_status: 0,
  date: new Date(),
};

const finance_list = [];

let received = 2_000;
const add_finance_data = addData({
  title: 'Work 2',
  salary: 43_000,
  salary_received: received,
  salary_status: salaryStatus(43_000, received),
});

// Push data to finance list array
finance_list.push(add_finance_data);

console.log(finance_list);
