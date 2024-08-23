import { ReactNode, createContext, useContext, useState } from "react";

export interface PageDataModel {
  title: string
  setTitle: (_title: string) => void
}

const PageData = createContext<PageDataModel>({
  title: "",
  setTitle: () => { },
});

const usePageDate = () => {
  return useContext(PageData);
};

const PageContext = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState<string>("");
  return (
    <PageData.Provider value={{ title, setTitle }}>
      {children}
    </PageData.Provider>
  );
};

export { PageContext, usePageDate };