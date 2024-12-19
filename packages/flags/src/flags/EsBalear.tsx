import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsBalear = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_8_46)"><rect width={28} height={20} fill="#FFDA27" /><path fill="#F63030" fillRule="evenodd" d="M0 8.86663H28V6.66663H0V8.86663Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 13.3333H28V11.1333H0V13.3333Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 17.8001H28V15.6001H0V17.8001Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 4.39995H28V2.19995H0V4.39995Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M7.24792e-05 -0.56128L7.20176e-05 10L13.2178 10L13.2178 -0.561279L7.24792e-05 -0.56128Z" clipRule="evenodd" /><rect width={7.92786} height={3.98242} x={2.64478} y={2.72815} fill="white" rx={1} /></g><defs><clipPath id="clip0_8_46"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsBalear;