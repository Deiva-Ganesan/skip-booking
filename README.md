📦 We Want Waste – Skip Selector
This is a responsive React component designed to help users select skip sizes for waste disposal, inspired by the layout and user flow in the provided design. The component fetches real-time skip data from a remote API and includes intuitive UI/UX for selection, pricing, and order confirmation.

✨ Features
✅ Live data fetch via API (axios)

✅ Fully responsive layout (mobile & desktop)

✅ Visual skip cards with:

Size

Price

Hire period

Road and heavy waste eligibility

✅ Click-to-select toggle

✅ Sticky footer with:

Disclaimer

Summary info

Back / Continue actions

✅ “Order Placed Successfully” confirmation dialog

🚀 Getting Started

1. Clone the Repository
git clone https://github.com/yourusername/wewantwaste-skip-selector.git
cd wewantwaste-skip-selector

2. Install Dependencies
npm install

3. Start the Development Server
npm start
🌐 API Source

Data is pulled from:
https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft
This returns all available skip options based on location.

🧪 How to Use
Select a skip by clicking any card.

A summary footer will appear.

Click Back to unselect or Continue to confirm the booking.

A modal confirms the booking success.

🛠 Tech Stack
React (Functional components + hooks)

Axios (API fetching)

Tailwind CSS (Styling and responsive layout)

No external libraries for modal or routing

📁 File Structure

src/
  ├── components/
  │   └── SkipSelector.js      # Main component
  ├── pages/
  │   └── Home.js              # Page using SkipSelector
  ├── index.css                # Tailwind CSS directives
  ├── App.js / index.js        # App entry
public/
  └── [skip images].jpg        # Images (named as {size}-yarder-skip.jpg)

📦 Deployment
Deployed this app using: CodeSandbox
Link: https://wmlvtj-3000.csb.app/

📃 License
This project is for demonstration/testing purposes and is not production-certified. Customize and reuse freely.

🙋‍♀️ Contact
For questions or help integrating this into your application:

Deiva Ganesan
📧 deiva.ganesan.2000@gmail.com
🔗 https://github.com/Deiva-Ganesan