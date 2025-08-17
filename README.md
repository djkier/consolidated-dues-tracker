# Consolidated Dues Tracker

A small React app for tracking expenses and cash balance.
It provides a simple table where you can input expenses, see the total, enter available cash, and check whether there is an excess or a deficit. The form is limited to the items I need monthly, but the app is intended to be adaptable to any kind of description required by the user.

The app also includes a **screenshot button** that captures the table (with today’s date) as an image, useful for sending updates.

## Live Demo
To view the app, click here: [Consolidated Dues Tracker](https://djkier.github.io/consolidated-dues-tracker/)

---

## Features
- Add expenses with inputs  
- Automatic total calculation  
- Input available cash manually  
- Last row shows whether cash is **Excess** or **Deficit**  
- Take a screenshot of the table (date included)  

---

## Planned Improvements
- Format numbers:  
  - Add commas for thousands (e.g. `1,234.56`)  
  - Always show two decimal places  
  - Add currency symbols  
- Persist data in **localStorage** (keep inputs after refresh)  
- Support reading/writing a JSON file:  
  - Generate the form from JSON  
  - Save recent chart as JSON for retrieval  
- More polished UI and text formatting  

---

## Tech Stack
- **React** – component-based UI  
- **Tailwind CSS** – styling with utility classes  
- **Vite** – fast development and build tool  