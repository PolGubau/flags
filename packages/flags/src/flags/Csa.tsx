import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Csa = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1911)"><rect width={28} height={20} fill="white" rx={2} /><rect width={28} height={20} fill="#18BDBD" /><path fill="white" fillRule="evenodd" d="M9.99992 16.041C9.99992 16.0137 10.0033 15.9866 10.0099 15.9601L10.6666 13.3333L11.3097 10.7608C11.3251 10.6993 11.3226 10.6347 11.3026 10.5745L10.7102 8.79761C10.6823 8.71374 10.6222 8.64441 10.5431 8.60488L9.51751 8.09209C9.40459 8.03563 9.33325 7.92021 9.33325 7.79395V5.41198C9.33325 5.36023 9.3453 5.3092 9.36844 5.26291L9.99992 3.99996L10.5745 2.85089C10.6309 2.73796 10.7463 2.66663 10.8726 2.66663H14.3333C14.5173 2.66663 14.6666 2.81586 14.6666 2.99996V3.66663C14.6666 3.85072 14.8158 3.99996 14.9999 3.99996H15.6666C15.8507 3.99996 15.9999 4.1492 15.9999 4.33329V5.12728C15.9999 5.25354 16.0713 5.36896 16.1842 5.42542L18.4823 6.57449C18.5953 6.63096 18.6666 6.74638 18.6666 6.87264V7.92127C18.6666 7.97302 18.6545 8.02406 18.6314 8.07034L18.0395 9.25412C18.0136 9.306 17.9745 9.35022 17.9263 9.3824L16.0736 10.6175C16.0253 10.6497 15.9863 10.6939 15.9603 10.7458L14.7062 13.2541C14.6802 13.306 14.6412 13.3502 14.5929 13.3824L12.7402 14.6175C12.692 14.6497 12.6529 14.6939 12.627 14.7458L11.4254 17.149C11.3689 17.262 11.2535 17.3333 11.1272 17.3333H10.3333C10.1492 17.3333 9.99992 17.1841 9.99992 17V16.041Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1911"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Csa;