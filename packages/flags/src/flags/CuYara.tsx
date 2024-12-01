import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const CuYara = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_27_1152)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} /><path fill="#0EA6FB" fillRule="evenodd" d="M0 20H28V9.33337H0V20Z" clipRule="evenodd" /><rect width={9.33333} height={9.33333} fill="#F63030" /><path fill="white" d="M4.51429 6.4878L3.79032 6.88197C3.54817 7.01381 3.24559 6.92322 3.1145 6.67962C3.06213 6.58228 3.04322 6.47026 3.06074 6.36099L3.19446 5.52693C3.21309 5.41072 3.17405 5.29269 3.08993 5.21086L2.49112 4.6284C2.29154 4.43426 2.28618 4.11414 2.47916 3.91339C2.55532 3.83416 2.65513 3.78213 2.7634 3.76523L3.5763 3.63833C3.69295 3.62012 3.79316 3.5452 3.84413 3.4381L4.20237 2.68532C4.32115 2.43571 4.61861 2.33025 4.86675 2.44976C4.96665 2.49788 5.04776 2.5781 5.09727 2.67776L5.46817 3.42439C5.52094 3.53062 5.6224 3.60383 5.73934 3.62007L6.55426 3.73323C6.82928 3.77141 7.02147 4.02664 6.98354 4.30328C6.96856 4.41246 6.91854 4.51373 6.84107 4.59167L6.25219 5.18416C6.16946 5.2674 6.13242 5.38608 6.15301 5.50195L6.3008 6.33364C6.34925 6.60631 6.16879 6.86684 5.89772 6.91555C5.78942 6.93502 5.67775 6.9179 5.58012 6.86686L4.8496 6.48497C4.74427 6.42991 4.61867 6.43097 4.51429 6.4878Z" /></g><defs><clipPath id="clip0_27_1152"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default CuYara;