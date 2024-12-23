import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsCanarias = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_8_159)"><rect width={28} height={20} fill="white" rx={2} /><rect width={9.33329} height={20} x={18.6667} fill="#FFDA27" /><path fill="white" fillRule="evenodd" d="M0 20H9.33333V0H0V20Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M9.33325 20H18.6666V0H9.33325V20Z" clipRule="evenodd" /><path fill="#FFDA27" d="M13.892 12.0082L12.9762 12.4897C12.6972 12.6364 12.352 12.5291 12.2053 12.25C12.1469 12.1389 12.1267 12.0116 12.1479 11.8879L12.3228 10.8682C12.3357 10.7928 12.3108 10.716 12.256 10.6626L11.5152 9.94046C11.2894 9.72039 11.2848 9.35897 11.5048 9.1332C11.5925 9.0433 11.7073 8.9848 11.8315 8.96674L12.8554 8.81797C12.931 8.80698 12.9964 8.75947 13.0302 8.69092L13.4881 7.76317C13.6277 7.48045 13.97 7.36437 14.2527 7.5039C14.3653 7.55946 14.4564 7.65059 14.5119 7.76317L14.9698 8.69092C15.0037 8.75947 15.069 8.80698 15.1447 8.81797L16.1685 8.96674C16.4805 9.01208 16.6967 9.30176 16.6514 9.61376C16.6333 9.738 16.5748 9.85282 16.4849 9.94046L15.744 10.6626C15.6893 10.716 15.6643 10.7928 15.6773 10.8682L15.8521 11.8879C15.9054 12.1986 15.6967 12.4937 15.386 12.547C15.2623 12.5683 15.135 12.5481 15.0239 12.4897L14.1081 12.0082C14.0404 11.9727 13.9596 11.9727 13.892 12.0082Z" /></g><defs><clipPath id="clip0_8_159"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsCanarias;