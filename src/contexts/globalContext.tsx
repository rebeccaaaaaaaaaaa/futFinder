import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface Time {
  id: number;
  escudo: string;
  nome: string;
  estado: string;
  pais: string;
  mascote: string;
  titulos: {};
}

interface TimesProps {
  children: ReactNode;
}

interface TimesPropsContextData {
  times: Time[];
}

export const TimeContext = createContext<TimesPropsContextData>(
  {} as TimesPropsContextData
);

export function TimeProvider({ children }: TimesProps) {
  const [times, setTimes] = useState<Time[]>([]);

  useEffect(() => {
    console.log("Contexto funcionando");
    setTimes([
      {
        id: 1,
        escudo:
          "https://logodownload.org/wp-content/uploads/2017/02/santos-logo-escudo-9.png",
        nome: "Santos",
        estado: "SP",
        pais: "Brasil",
        mascote:
          "https://i.pinimg.com/originals/94/8e/6f/948e6f7151d62b2313c94e0978d8e778.png",
        titulos: {
          copa: 0,
          copa_do_mundo: 0,
          copa_da_fifa: 0,
        },
      },
      {
        id: 2,
        escudo:
          "https://upload.wikimedia.org/wikipedia/pt/4/4b/S%C3%A3o_Paulo_Futebol_Clube.png",
        nome: "São Paulo",
        estado: "SP",
        pais: "Brasil",
        mascote:
          "https://i.pinimg.com/564x/85/39/58/853958995b313474a4bffff39ac29792--sports.jpg",
        titulos: {
          copa: 0,
          copa_do_mundo: 0,
          copa_da_fifa: 0,
        },
      },
    ]);
  }, []);

  return (
    <TimeContext.Provider
      value={{
        times,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
}
