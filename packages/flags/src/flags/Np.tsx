import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Np = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1285)"><path fill="white" fillRule="evenodd" d="M0 2C0 0.895431 0.89543 -1.06478e-09 2 0L2.46482 4.56679e-10C2.59643 5.84276e-10 2.7251 0.0389587 2.83462 0.111966L15.0026 8.22393C16.1002 8.9557 15.5822 10.6667 14.263 10.6667H8L15.9961 17.6632C16.9226 18.474 16.3492 20 15.1181 20H2C0.895428 20 0 19.1046 0 18V2Z" clipRule="evenodd" /><path fill="#F63030" stroke="#0EA6FB" strokeLinejoin="round" strokeWidth={1.33333} d="M15.1181 19.3333H0.666667V0.666667L2.46482 0.666667L14.6328 8.77863C15.1816 9.14452 14.9226 10 14.263 10H8C7.72226 10 7.47362 10.1722 7.37593 10.4322C7.27824 10.6922 7.35198 10.9855 7.561 11.1684L15.5571 18.1649C16.0203 18.5703 15.7336 19.3333 15.1181 19.3333Z" /><path fill="white" fillRule="evenodd" d="M6.8511 7.80079C7.23521 7.69552 7.58932 7.55155 7.90252 7.37616C7.59187 8.50453 6.55836 9.33336 5.33126 9.33336C4.10417 9.33336 3.07066 8.50453 2.76001 7.37616C3.07407 7.55204 3.42928 7.69632 3.81462 7.80166L4.33334 7.33335L3.48558 6.56799L4.62624 6.62625L4.56798 5.4856L5.33334 6.33335L6.09871 5.4856L6.04045 6.62625L7.1811 6.56799L6.33334 7.33335L6.8511 7.80079Z" clipRule="evenodd" /><path fill="white" d="M6.43416 15.7736L6.57484 16.6387C6.61771 16.9024 6.43874 17.1509 6.17509 17.1937C6.07011 17.2108 5.96242 17.1928 5.86871 17.1425L5.09643 16.7279C5.03938 16.6973 4.9709 16.6967 4.91332 16.7263L4.13398 17.1275C3.89648 17.2497 3.60486 17.1563 3.48261 16.9188C3.43394 16.8242 3.41779 16.7162 3.43668 16.6116L3.59233 15.749C3.60383 15.6852 3.58323 15.6199 3.53725 15.5743L2.91491 14.9571C2.72526 14.769 2.724 14.4628 2.91209 14.2731C2.98699 14.1976 3.0847 14.1489 3.19009 14.1345L4.05856 14.016C4.12272 14.0072 4.17847 13.9674 4.20763 13.9096L4.60235 13.127C4.72263 12.8885 5.01348 12.7927 5.25197 12.913C5.34694 12.9609 5.42347 13.0387 5.46971 13.1345L5.85081 13.9239C5.87896 13.9822 5.93402 14.0229 5.99802 14.0328L6.86431 14.1663C7.1283 14.207 7.30931 14.454 7.26861 14.718C7.25241 14.8231 7.202 14.92 7.12519 14.9936L6.49225 15.5999C6.44549 15.6447 6.42376 15.7097 6.43416 15.7736Z" /></g><defs><clipPath id="clip0_5_1285"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Np;