# 📰 News - Your Go-To News Aggregator

**News** is a modern and dynamic news aggregator website, fetching the latest headlines from across the globe using the [NewsAPI](https://newsapi.org/). With a clean user interface and features like dark mode, responsive design, and easy navigation, News provides a great experience for users to stay updated with current affairs.

## 🚀 Features

### 1. **Real-Time News Fetching**
   - The website leverages **NewsAPI** to fetch the most up-to-date articles based on user search queries or default categories like "India."
   - Users can search for news by typing in their desired topics using the search bar.

### 2. **Responsive Design**
   - Fully optimized for both mobile and desktop users.
   - Features a responsive navigation bar that adapts to various screen sizes, ensuring seamless browsing on any device.

### 3. **Dark Mode Toggle**
   - Users can switch between **light** and **dark mode** for a more comfortable reading experience in different lighting conditions.
   - The dark mode preference is saved using **localStorage**, so your preference stays intact across sessions.

### 4. **Category-Based News**
   - You can explore news articles based on categories like **Technology, Health, Sports**, etc., by clicking the category navigation links.
   - The active category is highlighted for easy navigation.

### 5. **Search Functionality**
   - Users can search for specific topics using the search bar.
   - The search works by clicking the **search button** or pressing the **Enter key**.

### 6. **Glassmorphism and Modern UI**
   - The site uses a glassmorphism effect for the UI to provide a modern, sleek appearance.
   - Smooth transitions and interactive buttons enhance the overall user experience.

## 🛠️ Technologies Used
- **HTML5**
- **CSS3** with custom properties (CSS variables) for theming.
- **JavaScript** for client-side scripting and interaction.
- **NewsAPI** for fetching news articles dynamically.
- **LocalStorage** for persisting dark mode state across sessions.
  
## 🌟 Demo/Preview
You can view a live Demo of the site here: [Live Demo](https://priyanshu-priya.github.io/NEWS-Website/)

## 📚 How to Use
1. Clone the repository:
   ```bash
   git clone https://github.com/Priyanshu-Priya/NEWS-Website.git
   cd news
   ```
2. Replace the `API_KEY` in `script.js` with your own [NewsAPI Key](https://newsapi.org/).
   ```js
   const API_KEY = "your_newsapi_key";
   ```

3. Open `index.html` in a browser to view the website locally.
4. Use a **Live Server** to view the website on mobile devices (find your IP address to access it from other devices on the same network).



## 📌 Future Features (Planned)
- **Pagination** for larger result sets.
- **User Authentication** for saving favorite articles.
- **News Notifications** for real-time updates on specific topics.

## 🧑‍💻 Contributions
Contributions are welcome! Feel free to open an issue or submit a pull request to enhance the site or fix bugs.
