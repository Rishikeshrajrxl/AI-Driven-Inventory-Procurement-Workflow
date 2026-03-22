# 🚀 AI-Driven Inventory & Procurement Workflow  
### *(Google Sheets + Apps Script + Appian + AI Agent)*  

<p align="center">
  <img src="./unnamed (1).png" width="800"/>
</p>
---

## 📌 Overview  

This project is a **learning-driven exploration** of how modern tools can be integrated to simulate a **real-world inventory and procurement workflow system**—without using a traditional backend server.  

The system combines **Google Sheets, Apps Script, and Appian**, enhanced with an **AI Agent** to introduce intelligent decision-making in workflows.  

> 💡 Built purely for experimentation, curiosity, and hands-on learning.

---

## 🧩 Architecture  
User → Google Sheets → Apps Script → Appian → AI Agent → Workflow → Callback → Sheet Update


---

## 🏗️ System Design  


            ┌────────────────────────────┐
            │        User (UI)           │
            │   (Google Sheet Button)   │
            └────────────┬───────────────┘
                         │
                         ▼
    ┌──────────────────────────────────────────┐
    │ Google Apps Script (Trigger Layer)       │
    │ - Captures user actions (onEdit)         │
    │ - Sends API request                      │
    └──────────────┬───────────────────────────┘
                   ▼
    ┌──────────────────────────────────────────┐
    │        Appian Workflow Engine            │
    │                                          │
    │   ┌──────────────────────────────────┐   │
    │   │   AI Agent (Decision Layer)      │   │
    │   │ - Uses knowledge center          │   │
    │   │ - Applies business rules         │   │
    │   │ - Decides approval flow          │   │
    │   └──────────────────────────────────┘   │
    │                                          │
    │ - Dynamic approvals                      │
    │ - Task routing                           │
    └──────────────┬───────────────────────────┘
                   │
                   ▼
    ┌──────────────────────────────────────────┐
    │ Google Apps Script (Callback API)        │
    │ - Receives workflow response             │
    │ - Updates inventory                      │
    └──────────────┬───────────────────────────┘
                   ▼
    ┌──────────────────────────────────────────┐
    │ Google Sheets (Data Layer)               │
    │ - Inventory updated                      │
    │ - Request status synced                  │
    └──────────────────────────────────────────┘


    
---

## ⚙️ Tech Stack  

- **Google Sheets** → UI + Data Layer  
- **Google Apps Script** → Backend + API Layer  
- **Appian** → Workflow Engine  
- **Appian AI Agent** → Intelligent decision-making  

---

## 🔄 Workflow  

### 🟢 Request Flow
1. User clicks **REQUEST** button in Google Sheet  
2. Apps Script captures the event (`onEdit`)  
3. Sends request to Appian  

### 🧠 Decision Flow
4. AI Agent evaluates request using knowledge rules  
5. Determines approval type:
   - Auto  
   - Manager  
   - Finance  

### 🔵 Response Flow
6. Appian completes workflow  
7. Calls Apps Script API (`doPost`)  
8. Sheet updates:
   - Inventory quantity  
   - Request status  
   - Button reset  

---

## ✨ Key Features  

- ✔️ Fully **serverless architecture**  
- ✔️ Real-time data synchronization  
- ✔️ Workflow-driven automation  
- ✔️ AI-assisted decision-making  
- ✔️ Google Sheets as interactive UI  
- ✔️ End-to-end API integration  

---

## 🧠 Learning Outcomes  

- Integration of low-code platforms with scripting tools  
- Designing workflow-based systems  
- Building API-driven automation  
- Implementing AI-based decision layers  
- Handling real-time data updates  

---

## 📊 Sample Use Case  

A user requests inventory directly from Google Sheets →  
AI decides approval → workflow runs →  
Inventory updates automatically after approval  

---

## ⚠️ Disclaimer  

This project is built for **learning and experimentation purposes only**.  
It is not production-ready and does not include full security or scalability considerations.  

---

## 🚀 Future Enhancements  

- 🔐 Secure API authentication (API keys / OAuth)  
- 📊 Dashboard & analytics layer  
- 📦 Bulk request handling  
- 🤖 Advanced AI decision models  
- 📈 Notification system (email/slack)  

---

## 🙌 Why This Project?  

To explore how **AI + Workflow Automation + Serverless tools** can come together to create **lightweight yet powerful enterprise-like systems**.  

---

## ⭐ Support  

If you like this project, feel free to ⭐ the repository and share your feedback!
