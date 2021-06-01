import { useContext } from "react";
// context
import { LocaleContext } from "../contexts/locale-context";

const useLocale = () => useContext(LocaleContext);

export default useLocale;
