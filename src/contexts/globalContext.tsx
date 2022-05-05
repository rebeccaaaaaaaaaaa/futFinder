import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface Time {
    escudo: string;
    nome: string;
    estado: string;
    pais: string;
    mascote: string;
    titulos: {},
}

interface TimesProps{
    children: ReactNode;
}

interface TimesPropsContextData {

}

export const TimeContext = createContext<TimesPropsContextData>({} as TimesPropsContextData);

export function TimeProvider ({ children }: TimesProps) {

    useEffect(() => {
        console.log('Carregando times...');
    }, []);
        

    return (
        <TimeContext.Provider value={{}}>
            {children}
        </TimeContext.Provider>
    )

}

