import { useContext } from "react";
import { TimeContext } from "../contexts/globalContext";

export function useGlobalContext () {
    const context = useContext(TimeContext);
    return context;
}