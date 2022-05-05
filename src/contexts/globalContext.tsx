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
  }, []);

  return <TimeContext.Provider value={{
    times,
  }}>
      {children}
  </TimeContext.Provider>;
}
