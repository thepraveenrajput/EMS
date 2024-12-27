const employees = [
  {
    "id": "E001",
    "firstName": "Aarav",  // Added first name
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Finish Project Report",
        "description": "Complete the final report for the client project.",
        "date": "2024-12-26",
        "category": "Work",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Update Website",
        "description": "Update the homepage with the latest news.",
        "date": "2024-12-25",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Team Meeting",
        "description": "Attend the weekly team meeting to discuss progress.",
        "date": "2024-12-24",
        "category": "Work",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 3,
      "completed": 1,
      "failed": 0,
      "newTask": 2
    }
  },
  {
    "id": "E002",
    "firstName": "Isha",  // Added first name
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Prepare Marketing Campaign",
        "description": "Create content and strategy for the new product launch.",
        "date": "2024-12-30",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Social Media Update",
        "description": "Schedule and post daily content on company social media.",
        "date": "2024-12-28",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Client Call",
        "description": "Call client to discuss new requirements.",
        "date": "2024-12-24",
        "category": "Client Interaction",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCount": {
      "active": 2,
      "completed": 1,
      "failed": 1,
      "newTask": 1
    }
  },
  {
    "id": "E003",
    "firstName": "Ravi",  // Added first name
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Write Blog Post",
        "description": "Write a blog post about the upcoming software release.",
        "date": "2024-12-29",
        "category": "Content",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "SEO Optimization",
        "description": "Optimize blog for SEO using targeted keywords.",
        "date": "2024-12-27",
        "category": "Content",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "completed": 1,
      "failed": 0,
      "newTask": 1
    }
  },
  {
    "id": "E004",
    "firstName": "Priya",  // Added first name
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Product Testing",
        "description": "Test new features of the product for bugs.",
        "date": "2024-12-26",
        "category": "Quality Assurance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "User Feedback",
        "description": "Collect user feedback after product testing.",
        "date": "2024-12-28",
        "category": "Quality Assurance",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCount": {
      "active": 1,
      "completed": 0,
      "failed": 1,
      "newTask": 1
    }
  },
  {
    "id": "E005",
    "firstName": "Anjali",  // Added first name
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Create Invoice",
        "description": "Generate invoices for the completed orders.",
        "date": "2024-12-23",
        "category": "Finance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Monthly Budget Review",
        "description": "Review the financial budget for the month.",
        "date": "2024-12-30",
        "category": "Finance",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Payroll Processing",
        "description": "Process employee payroll for the month.",
        "date": "2024-12-22",
        "category": "Finance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 3,
      "completed": 1,
      "failed": 0,
      "newTask": 1
    }
  },
  {
    "id": "E006",
    "firstName": "Anuj",  // Added first name
    "email": "employee6@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Create Invoice",
        "description": "Generate invoices for the completed orders.",
        "date": "2024-12-23",
        "category": "Finance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Monthly Budget Review",
        "description": "Review the financial budget for the month.",
        "date": "2024-12-30",
        "category": "Finance",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Payroll Processing",
        "description": "Process employee payroll for the month.",
        "date": "2024-12-22",
        "category": "Finance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 3,
      "completed": 1,
      "failed": 0,
      "newTask": 1
    }
  },
  {
    "id": "E007",
    "firstName": "Ankit",  // Added first name
    "email": "employee7@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Create Invoice",
        "description": "Generate invoices for the completed orders.",
        "date": "2024-12-23",
        "category": "Finance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Monthly Budget Review",
        "description": "Review the financial budget for the month.",
        "date": "2024-12-30",
        "category": "Finance",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Payroll Processing",
        "description": "Process employee payroll for the month.",
        "date": "2024-12-22",
        "category": "Finance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 3,
      "completed": 1,
      "failed": 0,
      "newTask": 1
    }
  }
];

const admin = [
  {
    "id": "A001",
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));

}
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  return { employees, admin }








}