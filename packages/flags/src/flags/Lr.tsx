import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Lr = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1001)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} rx={1.75} /><path fill="#F63030" fillRule="evenodd" d="M28 0H13.3333V2.66667H28V0ZM28 5.33333H13.3333V8H28V5.33333ZM13.3333 10.6667H28V13.3333H13.3333V10.6667ZM28 16H0V18.6667H28V16Z" clipRule="evenodd" /><rect width={13.3333} height={13.3333} fill="#0EA6FB" /><path fill="white" d="M6.64117 9.08457L5.53245 9.70187C5.19458 9.88999 4.76819 9.76859 4.58007 9.43072C4.50517 9.29618 4.4767 9.1407 4.49908 8.98835L4.68351 7.73284C4.69713 7.64008 4.66424 7.54655 4.59555 7.48274L3.66585 6.61904C3.38254 6.35584 3.36623 5.9128 3.62943 5.62949C3.73424 5.51667 3.87331 5.44155 4.02513 5.41576L5.27618 5.20319C5.36861 5.18748 5.4474 5.1273 5.48686 5.04225L6.02099 3.89115C6.18376 3.54037 6.60007 3.38796 6.95086 3.55073C7.09054 3.61554 7.20496 3.7246 7.2764 3.86101L7.86517 4.98514C7.90867 5.0682 7.99025 5.12453 8.08333 5.13578L9.34314 5.28806C9.72706 5.33447 10.0007 5.68331 9.95425 6.06722C9.93577 6.22009 9.86741 6.36261 9.75976 6.47271L8.87258 7.38004C8.80703 7.44707 8.77867 7.54207 8.79673 7.63407L9.04121 8.87928C9.11571 9.25874 8.86849 9.62675 8.48903 9.70126C8.33793 9.73092 8.18126 9.70995 8.04328 9.64158L6.90621 9.07821C6.8222 9.03658 6.72308 9.03896 6.64117 9.08457Z" /></g><defs><clipPath id="clip0_5_1001"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Lr;