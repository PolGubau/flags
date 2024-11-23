import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const SmFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1538)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" strokeWidth={0.5} /><path fill="#0EA6FB" fillRule="evenodd" d="M0 19.9999H28V9.33325H0V19.9999Z" clipRule="evenodd" /><path fill="#50B500" d="M12 9.33325C12 8.96506 11.7016 8.66659 11.3334 8.66659C10.9652 8.66659 10.6667 8.96506 10.6667 9.33325H12ZM12.3291 12.218C12.6475 12.4028 13.0555 12.2944 13.2403 11.976C13.4251 11.6575 13.3167 11.2496 12.9982 11.0648L12.3291 12.218ZM15.0757 11.0198C14.7655 11.2181 14.6749 11.6304 14.8733 11.9406C15.0716 12.2508 15.4839 12.3414 15.7941 12.143L15.0757 11.0198ZM17.3334 9.33325C17.3334 8.96506 17.0349 8.66659 16.6667 8.66659C16.2985 8.66659 16 8.96506 16 9.33325H17.3334ZM10.6667 9.33325C10.6667 10.5663 11.3366 11.6421 12.3291 12.218L12.9982 11.0648C12.4 10.7176 12 10.0718 12 9.33325H10.6667ZM15.7941 12.143C16.7183 11.5519 17.3334 10.5146 17.3334 9.33325H16C16 10.0409 15.633 10.6633 15.0757 11.0198L15.7941 12.143Z" /><path fill="#FF9600" fillRule="evenodd" d="M14 10.6667C14.7363 10.6667 15.3333 9.77132 15.3333 8.66675C15.3333 7.56218 14.7363 6.66675 14 6.66675C13.2636 6.66675 12.6666 7.56218 12.6666 8.66675C12.6666 9.77132 13.2636 10.6667 14 10.6667Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_1538"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default SmFlag;