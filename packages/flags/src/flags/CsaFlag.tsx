import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const CsaFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1911)"><rect width={28} height={20} fill="white" rx={2} /><rect width={28} height={20} fill="#18BDBD" /><path fill="white" fillRule="evenodd" d="M10 16.041C10 16.0137 10.0034 15.9866 10.01 15.9601L10.6667 13.3333L11.3098 10.7608C11.3252 10.6993 11.3227 10.6347 11.3027 10.5745L10.7104 8.79761C10.6824 8.71374 10.6223 8.64441 10.5432 8.60488L9.51764 8.09209C9.40471 8.03563 9.33337 7.92021 9.33337 7.79395V5.41198C9.33337 5.36023 9.34542 5.3092 9.36856 5.26291L10 3.99996L10.5746 2.85089C10.631 2.73796 10.7465 2.66663 10.8727 2.66663H14.3334C14.5175 2.66663 14.6667 2.81586 14.6667 2.99996V3.66663C14.6667 3.85072 14.8159 3.99996 15 3.99996H15.6667C15.8508 3.99996 16 4.1492 16 4.33329V5.12728C16 5.25354 16.0714 5.36896 16.1843 5.42542L18.4824 6.57449C18.5954 6.63096 18.6667 6.74638 18.6667 6.87264V7.92127C18.6667 7.97302 18.6547 8.02406 18.6315 8.07034L18.0396 9.25412C18.0137 9.306 17.9747 9.35022 17.9264 9.3824L16.0737 10.6175C16.0254 10.6497 15.9864 10.6939 15.9605 10.7458L14.7063 13.2541C14.6804 13.306 14.6413 13.3502 14.5931 13.3824L12.7404 14.6175C12.6921 14.6497 12.6531 14.6939 12.6271 14.7458L11.4255 17.149C11.369 17.262 11.2536 17.3333 11.1274 17.3333H10.3334C10.1493 17.3333 10 17.1841 10 17V16.041Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1911"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default CsaFlag;