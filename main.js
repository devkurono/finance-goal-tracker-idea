Object.freeze(Object.prototype);

function addData(data) {
  // todo: Find a way to secure this.
  return { ...default_value, ...data };
}

function getSalaryReceived(salary, salary_received) {
  const salary_percentage = salary / 100;
  return (salary_received / salary_percentage) | 0;
}

function getTotalSalaryReceived() {
  let total_salary_received = 0;
  for (const financeListElement of finance_list) {
    total_salary_received += financeListElement.salary_received;
  }
  return total_salary_received;
}

function getTotalSalary() {
  let total_salary = 0;
  for (const financeListElement of finance_list) {
    total_salary += financeListElement.salary;
  }
  return total_salary;
}

function getSalaryReceivedPercentage() {
  return (getTotalSalaryReceived() / (getTotalSalary() / 100)) | 0;
}

function getDate() {
  return new Date().toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'short',
  });
}

function getTime() {
  return new Date().toLocaleTimeString();
}

const default_value = {
  id: 1,
  title: '',
  description: '',
  salary: 0,
  salary_received: 0,
  salary_progress: 0,
  balance: 0,
  received_logs: [
    {
      salary_received: this.salary_received,
      date: getDate(),
      time: getTime(),
    },
  ],
};

const finance_list = [];

let received = 40_000;

finance_list.push(
  addData({
    id: 1,
    title: 'Work 1',
    salary: 43_000,
    salary_received: received,
    balance: 43_000 - received,
    salary_progress: getSalaryReceived(43_000, received) + '%',
  })
);

finance_list.push(
  addData({
    id: 2,
    title: 'Work 2',
    salary: 80_000,
    salary_received: received,
    balance: 80_000 - received,
    salary_progress: getSalaryReceived(80_000, received) + '%',
  })
);

console.table(finance_list);
console.log('Total Salary: ', getTotalSalary());
console.log('Total Salary Received: ', getTotalSalaryReceived());
console.log('Total Salary Received Percentage:', getSalaryReceivedPercentage());
