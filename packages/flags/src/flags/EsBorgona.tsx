import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EsBorgona = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_8_1044)"><rect width={28} height={20} fill="white" /><path fill="#F63030" fillRule="evenodd" d="M27.092 21.2887L-0.797363 1.28507L0.951132 -1.15271L28.8405 18.851L27.092 21.2887Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0.951172 21.2886L28.8406 1.28495L27.0921 -1.15283L-0.797325 18.8508L0.951172 21.2886Z" clipRule="evenodd" /><path fill="#F63030" d="M10.019 4.50652L11.3556 5.44837V9.5758L10.019 8.63395V4.50652Z" /><path fill="#F63030" d="M7.65576 2.92009L8.99236 3.86194V7.98938L7.65576 7.04753V2.92009Z" /><path fill="#F63030" d="M5.64355 1.40581L6.98015 2.34766V6.47509L5.64355 5.53324V1.40581Z" /><path fill="#F63030" d="M10.0205 15.6159L11.3571 14.6741V10.5466L10.0205 11.4885V15.6159Z" /><path fill="#F63030" d="M7.65723 17.2023L8.99383 16.2605V12.1331L7.65723 13.0749V17.2023Z" /><path fill="#F63030" d="M5.64502 18.7166L6.98162 17.7748V13.6473L5.64502 14.5892V18.7166Z" /><path fill="#F63030" d="M20.304 8.2897L18.9846 9.25543L15.0734 7.93703L16.3928 6.9713L20.304 8.2897Z" /><path fill="#F63030" d="M22.5623 6.55679L21.2429 7.52252L17.3317 6.20412L18.6511 5.23839L22.5623 6.55679Z" /><path fill="#F63030" d="M24.64 5.13369L23.3205 6.09942L19.4093 4.78103L20.7288 3.8153L24.64 5.13369Z" /><path fill="#F63030" d="M19.4094 15.2891L20.7288 16.2548L24.64 14.9364L23.3206 13.9707L19.4094 15.2891Z" /><path fill="#F63030" d="M17.1511 13.5562L18.4705 14.5219L22.3817 13.2035L21.0623 12.2378L17.1511 13.5562Z" /><path fill="#F63030" d="M15.0734 12.1331L16.3929 13.0988L20.3041 11.7804L18.9846 10.8147L15.0734 12.1331Z" /><path fill="#F63030" d="M7.8781 8.2897L9.19755 9.25543L13.1088 7.93703L11.7893 6.9713L7.8781 8.2897Z" /><path fill="#F63030" d="M5.6198 6.55679L6.93925 7.52252L10.8505 6.20412L9.53101 5.23839L5.6198 6.55679Z" /><path fill="#F63030" d="M3.54217 5.13369L4.86161 6.09942L8.77282 4.78103L7.45337 3.8153L3.54217 5.13369Z" /><path fill="#F63030" d="M8.77302 15.2891L7.45357 16.2548L3.54236 14.9364L4.86181 13.9707L8.77302 15.2891Z" /><path fill="#F63030" d="M11.0313 13.5562L9.71187 14.5219L5.80066 13.2035L7.12011 12.2378L11.0313 13.5562Z" /><path fill="#F63030" d="M13.109 12.1331L11.7895 13.0988L7.8783 11.7804L9.19775 10.8147L13.109 12.1331Z" /><path fill="#F63030" d="M21.0244 6.47517L22.361 5.53332V1.40589L21.0244 2.34774V6.47517Z" /><path fill="#F63030" d="M18.6611 8.0616L19.9977 7.11975V2.99231L18.6611 3.93416V8.0616Z" /><path fill="#F63030" d="M16.6489 9.57588L17.9855 8.63403V4.5066L16.6489 5.44844V9.57588Z" /><path fill="#F63030" d="M17.9854 15.6159L16.6488 14.6741V10.5466L17.9854 11.4885V15.6159Z" /><path fill="#F63030" d="M20.3486 17.2023L19.012 16.2605V12.1331L20.3486 13.0749V17.2023Z" /><path fill="#F63030" d="M22.3608 18.7166L21.0242 17.7748V13.6473L22.3608 14.5892V18.7166Z" /></g><defs><clipPath id="clip0_8_1044"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EsBorgona;