import { Container } from "../Container";

export function Message() {
  return (
    <div className="mt-8">
      <h1 className="text-5xl flex gap-2 items-center mb-2">
        Bem vindo ao <span className="text-danger text-5xl">GameGuideHub</span>
      </h1>
      <span className="text-gray/50 text-lg">
        Seu destino definitivo para guias de jogos, análises e as últimas
        notícias do mundo dos games.
      </span>
    </div>
  );
}
