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
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_27_1000)"><rect width={28} height={20} fill="#FFDA27" /><path fill="#F63030" fillRule="evenodd" d="M15.5263 -3.46802L15.5263 23.4678L18.4893 23.4678L18.4893 -3.46802L15.5263 -3.46802Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M9.51069 -3.46802L9.51069 23.4678L12.4736 23.4678L12.4736 -3.46802L9.51069 -3.46802Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M3.49482 -3.46802L3.49482 23.4678L6.45776 23.4678L6.45776 -3.46802L3.49482 -3.46802Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M21.5419 -3.46802L21.5419 23.4678L24.5049 23.4678L24.5049 -3.46802L21.5419 -3.46802Z" clipRule="evenodd" /><path fill="white" d="M28 0L14 10L28 20V0Z" /><path fill="#F63030" fillRule="evenodd" d="M21.984 10.9684H20.1651C20.0738 10.9684 19.9998 10.8944 19.9998 10.8031V9.14956C19.9998 9.05824 20.0738 8.98421 20.1651 8.98421H21.984V7.16535C21.984 7.07403 22.058 7 22.1493 7H23.8028C23.8942 7 23.9682 7.07403 23.9682 7.16535V8.98421H25.787C25.8784 8.98421 25.9524 9.05824 25.9524 9.14956V10.8031C25.9524 10.8944 25.8784 10.9684 25.787 10.9684H23.9682V12.7873C23.9682 12.8786 23.8942 12.9526 23.8028 12.9526H22.1493C22.058 12.9526 21.984 12.8786 21.984 12.7873V10.9684Z" clipRule="evenodd" /><path fill="white" d="M-0.000244141 0L13.9998 10L-0.000244141 20V0Z" /><path fill="#F63030" fillRule="evenodd" d="M3.98397 10.9684H2.16511C2.07379 10.9684 1.99976 10.8944 1.99976 10.8031V9.14956C1.99976 9.05824 2.07379 8.98421 2.16511 8.98421H3.98397V7.16535C3.98397 7.07403 4.058 7 4.14932 7H5.80283C5.89415 7 5.96818 7.07403 5.96818 7.16535V8.98421H7.78704C7.87836 8.98421 7.95239 9.05824 7.95239 9.14956V10.8031C7.95239 10.8944 7.87836 10.9684 7.78704 10.9684H5.96818V12.7873C5.96818 12.8786 5.89415 12.9526 5.80283 12.9526H4.14932C4.058 12.9526 3.98397 12.8786 3.98397 12.7873V10.9684Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_27_1000"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsVic;