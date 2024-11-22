import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const CuFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 63 51" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_2089_1989)"><rect width={55.996} height={43.9981} x={3.26172} y={3.85938} fill="white" /><path fill="#0EA6FB" fillRule="evenodd" d="M58.2953 21.4258V30.4258H5.02734L5.02734 21.4258H58.2953Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M58.2953 37.4414V46.4414H5.02734L5.02734 37.4414H58.2953Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M58.2953 5.40625V14.4062H5.02734L5.02734 5.40625H58.2953Z" clipRule="evenodd" /><path fill="#F63030" d="M4.932 46.4813C4.26762 45.8924 3.71435 45.189 3.28234 44.3812C2.56285 43.0359 2.17969 41.7014 2.17969 38.0214V13.6981C2.17969 10.0182 2.56285 8.68373 3.28234 7.33839C3.71435 6.5306 4.26762 5.82718 4.932 5.23828L31.6636 25.8598L4.932 46.4813Z" /><path fill="white" d="M14.8673 28.9527L13.6434 30.1824C13.234 30.5937 12.5692 30.5925 12.1586 30.1798C11.9945 30.0148 11.8891 29.8002 11.8589 29.5693L11.628 27.8064C11.5959 27.5608 11.4463 27.3461 11.2275 27.2315L9.66989 26.4159C9.15074 26.144 8.9478 25.5015 9.21662 24.9807C9.32271 24.7751 9.49284 24.6103 9.70112 24.5112L11.2648 23.7673C11.4892 23.6606 11.6464 23.4493 11.685 23.2026L11.9558 21.469C12.0457 20.8942 12.5824 20.5029 13.1548 20.5951C13.3852 20.6322 13.5969 20.7453 13.7566 20.9166L14.953 22.2002C15.1232 22.3829 15.3718 22.4697 15.6175 22.4322L17.3293 22.1714C17.9071 22.0834 18.448 22.4829 18.5375 23.0638C18.5728 23.293 18.5327 23.5273 18.4232 23.731L17.5908 25.2797C17.4738 25.4973 17.4704 25.7589 17.5814 25.9803L18.3787 27.5694C18.6401 28.0904 18.4325 28.7243 17.9149 28.9853C17.7081 29.0895 17.4725 29.122 17.2449 29.0777L15.542 28.7457C15.2965 28.6978 15.0437 28.7754 14.8673 28.9527Z" /></g><rect width={56} height={44} x={3.26172} y={3.92188} strokeWidth={3} rx={9} /><defs><clipPath id="clip0_2089_1989"><rect width={56} height={44} x={3.26172} y={3.92188} fill="white" rx={9} /></clipPath></defs></svg>;
export default CuFlag;