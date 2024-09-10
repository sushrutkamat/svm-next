import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
import logo from "../public/Skvm.png";
import GridSmallBackground from "@/components/ui/GridSmallBackground";
import { FlipWords } from "@/components/ui/FlipWords";
import { FocusCards } from "@/components/ui/FocusCards";

export default function Home() {
  const words = ["Leaders", "Innovators", "Scientists", "Doctors", "Athletes"];
  const cards = [
    {
      title: "Forest Adventure",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Valley of life",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sala behta hi jayega",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Camping is for pros",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          <div className="lvl-1data place-items-start w-full">
            <div className="justify-start flex items-center m-10">
              <FocusCards cards={cards} />
              <div className="text-4xl mx-auto font-normal justify-center h-32 text-neutral-600 dark:text-neutral-400">
                Building
                <FlipWords words={words} /> <br />
                with Heart and Soul.
              </div>
            </div>
          </div>
        </GridSmallBackground>
      </main>
    </>
  );
}
