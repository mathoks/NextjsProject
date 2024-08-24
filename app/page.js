import "@/app/globals.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);
gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: {scrub: 0.3}
})

export default async function Home() {
  return null;
}
