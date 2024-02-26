"use client";
import Searchbar from "./components/Searchbar";
import Slider from "./components/Slider";
import Steps from "./components/Steps";
import ProfileView from "./components/ProfileView";

export default function Home() {
  return (
    <main className="">
      <Slider />
      <Searchbar />
      <Steps />
      <ProfileView />
    </main>
  );
}
