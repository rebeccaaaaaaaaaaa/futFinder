import { useContext } from "react";
import { TimeContext } from "../contexts/globalContext";

export function useTransactions () {
    const context = useContext(TimeContext);
    return context;
}