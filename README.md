Mini-Instagram
Student: Bijay Kumar Chaudhary
Deployed Link: https://bijaychaudhary99.github.io/Lab-2-web-technologies/#/

Table of Contents
Overview
Project Goals
Technologies Used
Project Setup & Installation
Application Structure
Features Implemented
Routing & Persistence (Graduate Focus)
Polish & Accessibility
Screenshots
Challenges & Learning Outcomes
References

Overview

In this lab, I built a minimal Instagram-like application using React 18 called Mini-Insta. This app demonstrates a feed of posts with avatars, images, captions, likes, comments, and a simple composer for creating new posts. As a graduate student, I extended the assignment to include profile routing using react-router-dom. This app demonstrates real-world frontend patterns: component decomposition, state management, event handling, list rendering, controlled forms, and also I have implemented all components from scratch and ensured accessibility, keyboard support, and proper state management.

Project Goals
React project using Vite.
Building a reusable components: Navbar, Feed, PostCard, Composer, CommentList, CommentForm, Profile.
Implementing the client-side routing for profile pages (/u/:handle).
and Enhancing UX with accessibility and light styling.

Technologies Used 
Frontend: React 18, JSX, CSS
Build Tool: Vite
Routing: react-router-dom
State Management: React useState, useEffect
Deployment: GitHub Pages

Project Setup & Installation

Clone the repository:
git clone https://github.com/bijaychaudhary99/Lab-2-web-technologies.git
cd Lab-2-web-technologies

Install dependencies:
npm install

Run development server:
npm run dev

The browser will open at the provided localhost URL for example http://localhost:5173/

Application Structure
App.jsx: I have manage the central state of the app here, storing all my posts and also handling the routes between different pages.
Feed.jsx: Here, I have also taken all the posts and map over them to display each one using a PostCard.
PostCard.jsx: This is where I have showed each post’s avatar, image, caption, likes, and comments in a clean, organized way.
Composer.jsx: Here, I let users or myself create and also add a new post from here.
Profile.jsx: I have filtered all posts by a user’s handle so I can see only that person’s posts.
CommentList.jsx & CommentForm.jsx: I have used these to display existing comments and have also allow users to add new comments to a post.

As per Lab Assignment,

Part 0 — Project Setup

I used Vite to scaffold my React project. I ran the following commands to set everything up:

npm create vite@latest mini-insta -- --template react
cd mini-insta
npm i
npm run dev

Screenshot: https://github.com/BijayChaudhary99/Lab-2-web-technologies/blob/main/src/images/Screenshot%20(1).png

Part 1 Data Model

I have created src/data/posts.js with seed posts. Each post includes: id, author, avatar, imageUrl, caption, likedByMe, likeCount, and comments.

Screenshot: https://github.com/BijayChaudhary99/Lab-2-web-technologies/blob/main/src/images/Screenshot%20(2).png


Part 2 App State & Feed

I have also used useState in App.jsx to hold all posts. Then I passed posts and setPosts down to <Feed />.

Inside <Feed />, I map over all posts and render <PostCard /> components with stable keys. This way, the feed updates smoothly whenever I like a post or add a comment.

Screenshot: https://github.com/BijayChaudhary99/Lab-2-web-technologies/blob/main/src/images/Screenshot%20(3).png

Part 3 PostCard Component

<PostCard /> shows each post’s avatar, author, image, caption, like button, and like count.

I implemented like toggling so each post’s likedByMe state updates independently, and the count reflects changes immediately.

Screenshot: https://github.com/BijayChaudhary99/Lab-2-web-technologies/blob/main/src/images/Screenshot%20(4).png

https://github.com/BijayChaudhary99/Lab-2-web-technologies/blob/main/src/images/Screenshot%20(4).png

https://github.com/BijayChaudhary99/Lab-2-web-technologies/blob/main/src/images/Screenshot%20(5).png


Part 4 Comments

I have also added <CommentList /> to display existing comments, or a placeholder if there are none. Here, the <CommentForm /> lets users add a new comment, which appears instantly below the post.

I also used defensive coding (post.comments ?? []) to avoid crashes when a post has no comments yet.

https://github.com/BijayChaudhary99/Lab-2-web-technologies/blob/main/src/images/Screenshot%20(7).png

Screenshot: https://github.com/BijayChaudhary99/Lab-2-web-technologies/blob/main/src/images/Screenshot%20(8).png



Part 5 Composer

I built <Composer /> to let users create new posts. An image URL is required, and a caption is optional.

New posts are prepended to the top of the feed, and the form resets after submission. This keeps the app intuitive and responsive.

Screenshot: https://github.com/BijayChaudhary99/Lab-2-web-technologies/blob/main/src/images/Screenshot%20(9).png

https://github.com/BijayChaudhary99/Lab-2-web-technologies/blob/main/src/images/Screenshot%20(11).png

https://github.com/BijayChaudhary99/Lab-2-web-technologies/blob/main/src/images/Screenshot%20(12).png


Part 6 Routing & Persistence

A. Routing
I have also implemented /u/:handle to filter the feed by author. Author names are clickable <Link> components that take you to their profile page.

Screenshot:

B. Persistence
I saved posts to localStorage so that likes, comments, and new posts persist even after a page reload.

Screenshot:
https://github.com/BijayChaudhary99/Lab-2-web-technologies/blob/main/src/images/Screenshot%20(10).png

https://github.com/BijayChaudhary99/Lab-2-web-technologies/blob/main/src/images/Screenshot%20(17).png


Polish & Accessibility

Styling:
I applied a system font stack, centered the main container, and added hover effects on buttons. Verified layout in DevTools.

Keyboard accessibility:
Pressing Enter in Composer submits the form. Like buttons use aria-pressed to indicate their state.

Alt text:
I added meaningful alt text for all images, including avatars and post images.

Screenshot: https://github.com/BijayChaudhary99/Lab-2-web-technologies/blob/main/src/images/Screenshot%20(13).png 

https://github.com/BijayChaudhary99/Lab-2-web-technologies/blob/main/src/images/Screenshot%20(14).png

https://github.com/BijayChaudhary99/Lab-2-web-technologies/blob/main/src/images/Screenshot%20(15).png

https://github.com/BijayChaudhary99/Lab-2-web-technologies/blob/main/src/images/Screenshot%20(16).png

https://github.com/BijayChaudhary99/Lab-2-web-technologies/blob/main/src/images/Screenshot%20(17).png




