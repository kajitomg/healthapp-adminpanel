import {cn} from '@bem-react/classname';
import {ReactNode} from "react";
import './styles.scss';

interface PageLayoutProps {
  
  header?:ReactNode,
  
  children?:ReactNode,
  
  footer?:ReactNode,
  
  className?:string
  
}

const cnPageLayout = cn('PageLayout')
const PageLayout = (props:PageLayoutProps) => {
  return (
    <div className={cnPageLayout({},[props.className])}>
      <div className={cnPageLayout('header')}>{props.header}</div>
      <div className={cnPageLayout('content')}>{props.children}</div>
      <div className={cnPageLayout('footer')}>{props.footer}</div>
    </div>
  );
};

export {PageLayout};