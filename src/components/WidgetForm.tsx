import { CloseButton } from "./CloseButton";
import bugImgUrl from "../assets/bug.svg";
import ideaImgUrl from "../assets/idea.svg";
import thoughtImgUrl from "../assets/thought.svg";

export function WidgetForm() {
  const feedbacksTypes = {
    BUG: {
      title: "Problema",
      image: {
        source: bugImgUrl,
        alt: "Imagem de um inseto",
      },
    },
    IDEA: {
      title: "Ideia",
      image: {
        source: ideaImgUrl,
        alt: "Imagem de uma lampada",
      },
    },
    OTHER: {
      title: "Outro",
      image: {
        source: thoughtImgUrl,
        alt: "Imagem de uma nuvem de pensamento",
      },
    },
  };

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbacksTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              type="button"
              // onClick={}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
      <footer className="text-xs text-neutral-400">
        Feito com s2 por
        <a
          className="underline underline-offeset-2"
          href="https://renatamacedo.vercel.app"
        >
          Renata
        </a>
      </footer>
    </div>
  );
}
