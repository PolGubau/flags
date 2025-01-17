import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Ca = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_283)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} rx={1.75} /><rect width={8} height={20} x={20} fill="#F63030" /><path fill="#F63030" fillRule="evenodd" d="M0 20H8V0H0V20Z" clipRule="evenodd" /><path fill="#F63030" d="M14.2668 13.0152C14.9925 13.0994 15.6431 13.1752 16.3682 13.2581L16.1834 12.6512C16.1538 12.5446 16.1962 12.4283 16.2798 12.3628L18.3872 10.6461L17.9511 10.4408C17.759 10.3723 17.8117 10.2639 17.8814 10.0034L18.203 8.83066L16.9788 9.08932C16.8595 9.1075 16.7801 9.03178 16.7619 8.95908L16.6038 8.40724L15.6358 9.49397C15.4983 9.66843 15.2197 9.66843 15.3063 9.2662L15.72 7.06488L15.1646 7.35261C15.0089 7.43984 14.8532 7.45438 14.7666 7.2987L14.0003 5.86548L13.234 7.2987C13.1468 7.45438 12.9911 7.43984 12.8354 7.35261L12.2806 7.06488L12.6943 9.2662C12.7815 9.66843 12.5023 9.66843 12.3648 9.49397L11.3968 8.40784L11.2393 8.95969C11.2211 9.03238 11.1411 9.1081 11.0218 9.08993L9.79755 8.83127L10.1192 10.004C10.1877 10.2645 10.241 10.3729 10.0489 10.4414L9.61279 10.6467L11.7202 12.3634C11.8038 12.4283 11.8462 12.5452 11.8159 12.6518L11.6312 13.2588L13.7332 13.0158L13.7124 15.0796C13.7108 15.2391 13.8397 15.3692 13.9992 15.3692C14.1586 15.3692 14.2874 15.2392 14.286 15.0798L14.2668 13.0152Z" /></g><defs><clipPath id="clip0_5_283"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Ca;