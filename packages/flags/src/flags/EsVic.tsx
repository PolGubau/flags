import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsVic = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_27_1000)"><rect width={28} height={20} fill="#FFDA27" /><path fill="#F63030" fillRule="evenodd" d="M15.5264 -3.46802L15.5264 23.4678L18.4894 23.4678L18.4894 -3.46802L15.5264 -3.46802Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M9.51081 -3.46802L9.51081 23.4678L12.4738 23.4678L12.4738 -3.46802L9.51081 -3.46802Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M3.49494 -3.46802L3.49494 23.4678L6.45788 23.4678L6.45789 -3.46802L3.49494 -3.46802Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M21.5422 -3.46802L21.5422 23.4678L24.5051 23.4678L24.5051 -3.46802L21.5422 -3.46802Z" clipRule="evenodd" /><path fill="white" d="M28.0001 0L14.0001 10L28.0001 20V0Z" /><path fill="#F63030" fillRule="evenodd" d="M21.9842 10.9684H20.1654C20.074 10.9684 20 10.8944 20 10.8031V9.14956C20 9.05824 20.074 8.98421 20.1654 8.98421H21.9842V7.16535C21.9842 7.07403 22.0582 7 22.1496 7H23.8031C23.8944 7 23.9684 7.07403 23.9684 7.16535V8.98421H25.7873C25.8786 8.98421 25.9526 9.05824 25.9526 9.14956V10.8031C25.9526 10.8944 25.8786 10.9684 25.7873 10.9684H23.9684V12.7873C23.9684 12.8786 23.8944 12.9526 23.8031 12.9526H22.1496C22.0582 12.9526 21.9842 12.8786 21.9842 12.7873V10.9684Z" clipRule="evenodd" /><path fill="white" d="M0 0L14 10L0 20V0Z" /><path fill="#F63030" fillRule="evenodd" d="M3.98421 10.9684H2.16535C2.07403 10.9684 2 10.8944 2 10.8031V9.14956C2 9.05824 2.07403 8.98421 2.16535 8.98421H3.98421V7.16535C3.98421 7.07403 4.05824 7 4.14956 7H5.80307C5.89439 7 5.96842 7.07403 5.96842 7.16535V8.98421H7.78729C7.87861 8.98421 7.95264 9.05824 7.95264 9.14956V10.8031C7.95264 10.8944 7.87861 10.9684 7.78729 10.9684H5.96842V12.7873C5.96842 12.8786 5.89439 12.9526 5.80307 12.9526H4.14956C4.05824 12.9526 3.98421 12.8786 3.98421 12.7873V10.9684Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_27_1000"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsVic;