# ⏳ Countdown Timer

> A simple, responsive, and visually engaging countdown timer built with HTML, CSS, and vanilla JavaScript.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-Design-success?style=for-the-badge)](#)

---

## 📌 About the Project

**Countdown Timer** is a browser-based countdown application that allows users to select a future date and time and then displays the remaining time in real time.

The application calculates and displays:

```text
Days
Hours
Minutes
Seconds
```

The project is intentionally built with **vanilla web technologies**, making it a useful project for understanding DOM manipulation, JavaScript timing functions, date calculations, validation, and responsive CSS.

---

# ✨ Features

## 📅 Date & Time Selection

Users can select a target date and time using the native browser:

```html
<input type="datetime-local">
```

The selected time becomes the countdown target.

---

## ▶️ Start Countdown

Clicking **Start Countdown** begins the timer.

The countdown updates once every second using JavaScript.

---

## ⏱️ Live Countdown

The remaining time is calculated dynamically and displayed as:

```text
┌────────┬────────┬──────────┬──────────┐
│  Days  │ Hours  │ Minutes  │ Seconds  │
└────────┴────────┴──────────┴──────────┘
```

Example:

```text
12 Days   04 Hours   35 Minutes   18 Seconds
```

---

## ✅ Input Validation

The application checks whether:

- A valid date and time was selected
- The selected date is in the future

Invalid input produces an appropriate message.

Examples:

```text
Please select a valid date and time.
```

```text
Please select a future date and time.
```

---

## 🎉 Countdown Completion

When the target time is reached:

```text
Countdown finished!
```

The countdown display is hidden and the completion message is shown.

---

## 📱 Responsive Design

The interface includes responsive CSS for smaller screens.

On mobile devices:

- Container padding is reduced
- Heading size scales down
- Countdown typography adapts
- Button dimensions adjust
- Layout remains usable on smaller displays

---

# 🎨 UI Design

The project uses a **dark neon / cyber-style visual design**.

### Visual characteristics

- Dark gradient background
- Cyan neon accents
- Glowing buttons
- Glowing countdown cards
- Rounded containers
- Modern typography
- Hover effects
- Responsive layout

The interface uses the **Montserrat** font through Google Fonts.

---

# 🧠 How It Works

The application follows a simple flow:

```text
User selects Date & Time
          ↓
Validate Input
          ↓
Create Target Date
          ↓
Start JavaScript Timer
          ↓
Calculate Time Difference
          ↓
Convert Milliseconds
          ↓
Days / Hours / Minutes / Seconds
          ↓
Update UI Every Second
          ↓
Countdown Reaches Zero
          ↓
Display Completion Message
```

---

# 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure |
| **CSS3** | Layout, styling and responsive design |
| **JavaScript** | Countdown calculations and DOM interactions |
| **Date API** | Target date/time calculations |
| **setInterval()** | One-second countdown updates |
| **Google Fonts** | Montserrat typography |

---

# 📂 Project Structure

```text
countdown-timer/
│
├── index.html
├── script.js
└── styles.css
```

---

# 📄 File Overview

## `index.html`

Defines the structure of the application including:

- Application heading
- Date/time picker
- Start button
- Countdown display
- Status message area

The countdown elements are identified using:

```text
days
hours
minutes
seconds
```

The message container uses accessibility-aware live regions to announce important changes.

---

## `script.js`

Contains the complete countdown logic.

Main responsibilities include:

```javascript
DOMContentLoaded
```

```javascript
startCountdown()
```

Input validation:

```text
Valid date check
Future date check
```

Time calculations:

```text
Days
Hours
Minutes
Seconds
```

Timer management:

```javascript
setInterval()
clearInterval()
```

---

## `styles.css`

Controls the application's visual presentation.

It includes:

- Global reset
- Gradient background
- Neon effects
- Countdown cards
- Button styling
- Input styling
- Hover interactions
- Mobile media query

---

# 🔢 Countdown Calculation

The timer calculates the difference between the target date and the current date:

```javascript
const distance = targetDate.getTime() - now;
```

The difference is then converted into separate time units.

### Days

```javascript
Math.floor(distance / (1000 * 60 * 60 * 24))
```

### Hours

```javascript
Math.floor(
  (distance % (1000 * 60 * 60 * 24))
  / (1000 * 60 * 60)
)
```

### Minutes

```javascript
Math.floor(
  (distance % (1000 * 60 * 60))
  / (1000 * 60)
)
```

### Seconds

```javascript
Math.floor(
  (distance % (1000 * 60))
  / 1000
)
```

---

# ♿ Accessibility

The project includes accessible status announcements using:

```html
aria-live="polite"
```

and:

```html
aria-live="assertive"
```

This allows assistive technologies to receive important countdown and error-state updates.

---

# ⚙️ Installation

No external package installation is required.

## 1. Clone the repository

```bash
git clone https://github.com/Naveenkumar291205/countdown-timer.git
```

## 2. Enter the project directory

```bash
cd countdown-timer
```

## 3. Open the application

Open:

```text
index.html
```

in a modern web browser.

For development, you can also use VS Code Live Server or another local static server.

---

# ▶️ Usage

### Step 1

Open the application.

### Step 2

Select a future date and time.

### Step 3

Click:

```text
Start Countdown
```

### Step 4

Watch the remaining time update every second.

### Step 5

When the target time is reached, the application displays:

```text
Countdown finished!
```

---

# 🔄 Application Lifecycle

```text
Page Loaded
    ↓
DOM Initialized
    ↓
Wait for User Input
    ↓
Start Button Clicked
    ↓
Validate Target Time
    ↓
Start Timer
    ↓
Update Countdown Every 1 Second
    ↓
Target Reached
    ↓
Stop Timer
    ↓
Display Completion Message
```

---

# 💡 Learning Outcomes

This project demonstrates practical understanding of:

- JavaScript DOM manipulation
- Event listeners
- Date and time handling
- JavaScript timers
- Conditional logic
- Input validation
- Dynamic UI updates
- CSS transitions
- Responsive design
- Basic web accessibility

---

# 🔮 Future Improvements

Possible improvements for a more advanced version include:

- Pause and resume countdown
- Reset button
- Multiple countdown timers
- Custom countdown titles
- Sound notification when timer finishes
- Browser notification support
- LocalStorage persistence
- Countdown presets
- Dark/light theme switching
- Progress ring or circular timer
- Shareable countdown links
- Timezone selection
- Days-only / hours-only timer modes

---

# 🚀 Advanced Version Concept

The project can be extended into a complete event countdown platform:

```text
                 COUNTDOWN PLATFORM
                         │
          ┌──────────────┼──────────────┐
          │              │              │
       Create          Manage         Share
      Countdown      Countdown       Countdown
          │              │              │
          ↓              ↓              ↓
       Title          Pause/Reset     URL Link
       Date           Save State      Social Share
       Time           Multiple        Embed
       Theme          Timers
          │              │
          └──────────────┼──────────────┘
                         ↓
                  Real-Time Timer
```

---

# 🌐 Deployment

Because this is a static frontend project, it can be deployed easily using:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

No backend server is required for the current implementation.

---

# 👨‍💻 Author

**Naveen Kumar M**

GitHub:  
https://github.com/Naveenkumar291205

---

# ⭐ Project Highlights

- Pure HTML, CSS and JavaScript
- No framework dependency
- No backend required
- Real-time countdown
- Date/time validation
- Responsive design
- Neon-inspired UI
- Accessible status messaging
- Simple and easy-to-understand architecture

---

## 🎯 Project Goal

> **Build a clean and interactive countdown application while strengthening core JavaScript, DOM manipulation, date/time calculations, and responsive web development skills.**

Made with **HTML + CSS + JavaScript**.
