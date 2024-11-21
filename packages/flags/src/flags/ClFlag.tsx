import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const ClFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 63 51" stroke="currentColor" aria-hidden="true" width={props.width ?? 50} height={props.height ?? 60} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_2089_1860)"><rect width={55.996} height={43.9981} x={3.21094} y={3.45312} fill="white" /><rect width={57.5508} height={23.2734} x={1.66016} y={25.5156} fill="#F63030" /><rect width={23.6484} height={23.2734} x={1.66016} y={2.17969} fill="#0EA6FB" /><path fill="white" d="M14.3654 19.3616L12.8347 20.1783C12.3227 20.4515 11.6875 20.2555 11.4159 19.7404C11.3074 19.5347 11.2696 19.2985 11.3084 19.0689L11.6047 17.3159C11.6459 17.0716 11.5659 16.8225 11.3903 16.6488L10.1404 15.4123C9.72376 15.0001 9.71817 14.3263 10.1279 13.9072C10.2896 13.7418 10.5006 13.6341 10.7288 13.6005L12.4419 13.3478C12.6877 13.3116 12.8999 13.1557 13.0091 12.9312L13.7765 11.3532C14.0309 10.83 14.6588 10.6133 15.1789 10.8692C15.3883 10.9723 15.5576 11.1425 15.66 11.3532L16.4274 12.9312C16.5366 13.1557 16.7488 13.3116 16.9946 13.3478L18.7077 13.6005C19.2859 13.6857 19.6859 14.2263 19.6011 14.8078C19.5676 15.0374 19.4606 15.2496 19.2961 15.4123L18.0462 16.6488C17.8706 16.8225 17.7906 17.0716 17.8318 17.3159L18.1281 19.0689C18.2252 19.6436 17.8408 20.1888 17.2694 20.2865C17.0411 20.3255 16.8064 20.2875 16.6018 20.1783L15.0711 19.3616C14.8504 19.2439 14.5861 19.2439 14.3654 19.3616Z" /></g><rect width={56} height={44} x={3.21094} y={3.51562} strokeWidth={3} rx={9} /><defs><clipPath id="clip0_2089_1860"><rect width={56} height={44} x={3.21094} y={3.51562} fill="white" rx={9} /></clipPath></defs></svg>;
export default ClFlag;