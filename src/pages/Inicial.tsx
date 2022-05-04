import { CardGrid } from "../components/CardGrid";
import {Header} from "../components/Header";
import { SearchInput } from "../components/Input";
import { Pagination } from "../components/Pagination";

export function Inicial() {
  return (
    <>
      <Header />
      <SearchInput />
      <CardGrid />
      <Pagination />
    </>
  )
}
