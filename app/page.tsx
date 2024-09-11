import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
import logo from "../public/Skvm.png";
import GridSmallBackground from "@/components/ui/GridSmallBackground";
import { FlipWords } from "@/components/ui/FlipWords";
import { FocusCards } from "@/components/ui/FocusCards";
import { Globe } from "@/components/ui/Globe";

export default function Home() {
  const words = ["Leaders", "Innovators", "Scientists", "Doctors", "Athletes"];
  const cards = [
    {
      title: "Nurturing Individual Potential.",
      src: "https://plus.unsplash.com/premium_photo-1687987358158-f6a3ccc18e40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Providing Holistic Education.",
      src: "https://plus.unsplash.com/premium_photo-1663047551367-a47365e55907?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Encouraging Critical Thinking.",
      src: "https://plus.unsplash.com/premium_photo-1721169724076-ebe2a84ed567?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Building Leadership and Compassion.",
      src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      <main>
        <GridSmallBackground>
          <div className="navigationAndHeader min-w-full">
            <Navbar>
              <div className="flex justify-center">
                <Image
                  src={logo}
                  width={400}
                  height={150}
                  alt="Vidya Mandir Logo"
                  priority={true}
                />
              </div>
            </Navbar>
          </div>
          <div className="justify-start flex items-center m-10">
            <div className="w-1/2">
              <FocusCards cards={cards} />
            </div>
            <div className="text-4xl mx-auto font-normal justify-center h-32 text-neutral-600 dark:text-neutral-400">
              Building
              <FlipWords words={words} /> <br />
              with Heart and Soul.
            </div>
          </div>
        </GridSmallBackground>
      </main>
    </>
  );
}
