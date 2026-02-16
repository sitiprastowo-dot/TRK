# Tepi Raja Kopi POS ☕

A modern, offline-first Point of Sale (POS) system built for coffee shops. This application runs entirely in the browser using LocalStorage, making it fast, secure, and internet-independent.

## 🚀 Features

### 1. **Modern POS Interface**
   - Clean, touch-friendly UI.
   - Real-time cart calculation with change return logic.
   - Professional **Thermal Receipt Printing** with date, time, and transaction ID.

### 2. **Inventory Management (Smart Logic)**
   - **Recipe Integration:** Automatically deducts ingredients (grams/ml) when a menu item is sold.
   - **Smart Reversal:** If a sale is deleted, the ingredients are automatically returned to stock.
   - **Unit Conversion:** Buys in Kg/Liters, consumes in Grams/Milliliters.

### 3. **Financial Analytics**
   - **Real-time Dashboard:** Revenue, COGS (HPP), Overhead (BOP), and Net Profit.
   - **Overhead Tracking:** Track fixed monthly bills (Rent/WiFi) and asset depreciation (Machines).
   - **Excel Exports:**
     - **Sales Report:** Detailed row-by-row breakdown for Pivot Tables.
     - **Menu Analysis:** Exploded view of recipe costs and margins.

## 🛠️ Installation

No server installation required!

1.  Download this repository.
2.  Open `index.html` in any modern web browser (Chrome, Edge, Safari).
3.  Start selling!

## 📦 Data Management

-   **Backup:** Click "Backup Data" in the sidebar to download your database as a `.json` file.
-   **Restore:** Use the "Restore Data" button to load a previous backup file.
-   **Persistence:** All data is saved automatically to your browser's Local Storage.

## 📄 License
Private Property of Tepi Raja Kopi.
