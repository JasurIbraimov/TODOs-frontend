import { ReactNode } from "react";
import "./Page.css";
interface IPage {
  header?: ReactNode;
  children: ReactNode;
}

const Page = ({ header, children: content }: IPage) => {
  return (
    <main className="page">
      <div className="page-header">{header}</div>
      <div className="page-content">{content}</div>
    </main>
  );
};

export default Page;
