import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Kg = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_906)"><rect width={28} height={20} fill="white" rx={2} /><rect width={28} height={20} fill="#F63030" /><path fill="#FFDA27" fillRule="evenodd" d="M14 13.3334C15.8409 13.3334 17.3333 11.841 17.3333 10.0001C17.3333 8.15913 15.8409 6.66675 14 6.66675C12.159 6.66675 10.6666 8.15913 10.6666 10.0001C10.6666 11.841 12.159 13.3334 14 13.3334Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M12.3681 17.1495L14 14.7137L15.6318 17.1495L16.0451 14.2469L18.5722 15.7335L17.6852 12.9389L20.6071 13.1819L18.5954 11.0489L21.3333 10.0001L18.5954 8.95118L20.6071 6.81824L17.6852 7.06117L18.5722 4.26663L16.0451 5.75324L15.6318 2.85059L14 5.28644L12.3681 2.85059L11.9548 5.75324L9.4277 4.26663L10.3147 7.06117L7.39285 6.81824L9.40453 8.95118L6.66663 10.0001L9.40453 11.0489L7.39285 13.1819L10.3147 12.9389L9.4277 15.7335L11.9548 14.2469L12.3681 17.1495ZM18.6666 10.0001C18.6666 12.5774 16.5773 14.6667 14 14.6667C11.4226 14.6667 9.33329 12.5774 9.33329 10.0001C9.33329 7.42273 11.4226 5.33339 14 5.33339C16.5773 5.33339 18.6666 7.42273 18.6666 10.0001Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_906"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Kg;