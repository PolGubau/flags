import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const RsFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1413)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" strokeWidth={0.5} /><path fill="#0EA6FB" fillRule="evenodd" d="M0 13.3334H28V6.66675H0V13.3334Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" clipRule="evenodd" /><path fill="white" fillRule="evenodd" d="M6 10.0001C6 9.35503 6.34366 7.91793 6.5375 7.15865C6.61181 6.8676 6.87495 6.66675 7.17534 6.66675H10.1592C10.459 6.66675 10.7218 6.86679 10.7964 7.15719C10.9903 7.91204 11.3333 9.34028 11.3333 10.0001C11.3333 10.7451 10.833 12.7008 10.6992 13.2105C10.6777 13.2925 10.6412 13.3677 10.5872 13.4331C10.3317 13.7426 9.49918 14.6667 8.66667 14.6667C7.83364 14.6667 7.00061 13.7415 6.74565 13.4325C6.69202 13.3675 6.65559 13.2928 6.63405 13.2113C6.50018 12.7053 6 10.7635 6 10.0001Z" clipRule="evenodd" /><mask id="mask0_5_1413" width={6} height={9} x={6} y={6} maskUnits="userSpaceOnUse" style={{
      maskType: "luminance"
    }}><path fill="white" fillRule="evenodd" d="M6 10.0001C6 9.35503 6.34366 7.91793 6.5375 7.15865C6.61181 6.8676 6.87495 6.66675 7.17534 6.66675H10.1592C10.459 6.66675 10.7218 6.86679 10.7964 7.15719C10.9903 7.91204 11.3333 9.34028 11.3333 10.0001C11.3333 10.7451 10.833 12.7008 10.6992 13.2105C10.6777 13.2925 10.6412 13.3677 10.5872 13.4331C10.3317 13.7426 9.49918 14.6667 8.66667 14.6667C7.83364 14.6667 7.00061 13.7415 6.74565 13.4325C6.69202 13.3675 6.65559 13.2928 6.63405 13.2113C6.50018 12.7053 6 10.7635 6 10.0001Z" clipRule="evenodd" /></mask><g mask="url(#mask0_5_1413)"><path strokeLinecap="square" strokeWidth={1.33333} d="M11.3333 7.33341L5.99992 14.0001" /><path strokeLinecap="square" strokeWidth={1.33333} d="M6 7.33341L11.3333 14.0001" /></g></g><defs><clipPath id="clip0_5_1413"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default RsFlag;