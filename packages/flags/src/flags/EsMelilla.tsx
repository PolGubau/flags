import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsMelilla = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_27_334)"><rect width={28} height={20} fill="#0EA6FB" /><rect width={5.46021} height={0.984619} x={18.9846} y={7} fill="#FFDA27" transform="rotate(90 18.9846 7)" /><rect width={5.46021} height={0.984619} x={10.9846} y={7} fill="#FFDA27" transform="rotate(90 10.9846 7)" /><rect width={1} height={4} x={20} y={8} fill="white" transform="rotate(90 20 8)" /><rect width={1} height={3} x={16} y={14} fill="#50B500" transform="rotate(90 16 14)" /><rect width={1} height={4} x={13} y={8} fill="white" transform="rotate(90 13 8)" /><path fill="#FFDA27" d="M12 5L14.5 4L17 5V6H12V5Z" /><path fill="#0EA6FB" stroke="#F63030" d="M12.5 7.5H16.5V11.5C16.5 12.6046 15.6046 13.5 14.5 13.5C13.3954 13.5 12.5 12.6046 12.5 11.5V7.5Z" /><rect width={1} height={3} x={16} y={9} fill="#F63030" transform="rotate(90 16 9)" /><rect width={1} height={3} x={16} y={11} fill="#F63030" transform="rotate(90 16 11)" /></g><defs><clipPath id="clip0_27_334"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsMelilla;