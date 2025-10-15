// src/App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { seedPosts } from "./data/posts";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Composer from "./components/Composer";
import Profile from "./components/Profile"; // we will create this next

export default function App() {
  const [posts, setPosts] = useState(seedPosts);

  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Composer setPosts={setPosts} />
                <Feed posts={posts} setPosts={setPosts} />
              </>
            }
          />
          <Route
            path="/u/:handle"
            element={<Profile posts={posts} setPosts={setPosts} />}
          />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </main>
    </>
  );
}
