import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const PrFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 63 51" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_2089_2002)"><rect width={55.996} height={43.9981} x={3.26172} y={3.03125} fill="white" /><path fill="#F63030" fillRule="evenodd" d="M58.2914 20.5977V29.5977H5.02344L5.02344 20.5977H58.2914Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M58.2914 36.6133V45.6133H5.02344L5.02344 36.6133H58.2914Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M58.2914 4.57812V13.5781H5.02344L5.02344 4.57812H58.2914Z" clipRule="evenodd" /><path fill="#0EA6FB" d="M4.9281 45.6532C4.26371 45.0643 3.71045 44.3609 3.27844 43.5531C2.55894 42.2077 2.17578 40.8733 2.17578 37.1933V12.87C2.17578 9.19005 2.55894 7.8556 3.27844 6.51026C3.71045 5.70247 4.26371 4.99906 4.9281 4.41016L31.6597 25.0317L4.9281 45.6532Z" /><path fill="white" d="M14.8634 28.1245L13.6395 29.3542C13.2301 29.7655 12.5653 29.7644 12.1547 29.3516C11.9906 29.1867 11.8852 28.9721 11.855 28.7411L11.6241 26.9783C11.592 26.7327 11.4424 26.518 11.2236 26.4034L9.66599 25.5878C9.14684 25.3159 8.9439 24.6733 9.21271 24.1525C9.3188 23.947 9.48894 23.7821 9.69721 23.6831L11.2609 22.9392C11.4853 22.8324 11.6425 22.6211 11.6811 22.3745L11.9519 20.6409C12.0418 20.066 12.5785 19.6748 13.1508 19.7669C13.3812 19.804 13.593 19.9172 13.7527 20.0885L14.9491 21.3721C15.1193 21.5547 15.3679 21.6415 15.6135 21.6041L17.3254 21.3433C17.9032 21.2553 18.4441 21.6548 18.5336 22.2356C18.5689 22.4649 18.5287 22.6992 18.4193 22.9029L17.5869 24.4516C17.4699 24.6692 17.4665 24.9308 17.5775 25.1522L18.3748 26.7413C18.6362 27.2623 18.4285 27.8962 17.911 28.1572C17.7041 28.2614 17.4686 28.2939 17.241 28.2495L15.5381 27.9176C15.2926 27.8697 15.0398 27.9473 14.8634 28.1245Z" /></g><rect width={56} height={44} x={3.26172} y={3.09375} strokeWidth={3} rx={9} /><defs><clipPath id="clip0_2089_2002"><rect width={56} height={44} x={3.26172} y={3.09375} fill="white" rx={9} /></clipPath></defs></svg>;
export default PrFlag;