# NextJS-Tutorial
Learning NextJS


---

Tutorial 12 - Private Groups  
you can use %5F instead of undeerscore in the _lib name as it also works same as the underscore and still make the folder private

Private Folder Contd.  
Private folder are super userful for a bunch of things:
- keeping the UI logic seperated from routing logic
- Having a consistent wa to organize internal file in your project
- Making it easier to group realted files in your code editor
- Avoding potential naming conflicts with future Next.js file naming covenctions 

---

Tutorial 13 - Route Groups  
we are using () for auth because it tell the nextjs to treat this folder as organixatial folder only and exculing it from the url path

---

Tutorial 14 - Layouts  
Pages are routes-specific UI components
A layout is UI that is shared between multiple pages in your app

How to create Layouts 
Default export the React component from a layout.js or layout.tsx file

---

Tutorial 15 - Nested Layouts    

First the layout gets render and then the page.tsx component gets render

---

Tutorial 16 - Multiple Root Layouts  
In Next.js App Router, multiple root layouts let you create different UI structures for different parts of your app (like /admin and /shop). Each folder can have its own layout.tsx, which acts as the "main layout" for all pages inside that folder. This helps keep sections of your app separate and organized.

---