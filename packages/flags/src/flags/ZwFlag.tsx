import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const ZwFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1866)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#50B500" fillRule="evenodd" d="M0 2.66667H28V0H0V2.66667Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M0 20H28V17.3334H0V20Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M0 8.00004H28V5.33337H0V8.00004Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M0 14.6667H28V12H0V14.6667Z" clipRule="evenodd" /><path fill="#4C4C4C" fillRule="evenodd" d="M0 12H28V8H0V12Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M0 5.33329H28V2.66663H0V5.33329Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M0 17.3333H28V14.6666H0V17.3333Z" clipRule="evenodd" /><path fill="white" strokeWidth={2} d="M12.227 10L-0.950243 19H-1.10547V1H-0.950242L12.227 10Z" /><path fill="#F63030" d="M3.58936 11.8835L2.79214 12.3187C2.54182 12.4553 2.2322 12.3554 2.1006 12.0955C2.04819 11.992 2.03011 11.8734 2.04915 11.7582L2.2014 10.8365C2.21589 10.7488 2.18788 10.6593 2.12651 10.5971L1.48155 9.94439C1.27903 9.73942 1.27488 9.4028 1.47229 9.19252C1.5509 9.10879 1.6539 9.0543 1.76535 9.03749L2.65666 8.90301C2.74148 8.89021 2.8148 8.8349 2.85273 8.7551L3.25134 7.9165C3.3765 7.65317 3.68356 7.54506 3.93717 7.67502C4.03815 7.72677 4.1199 7.81164 4.16974 7.9165L4.56834 8.7551C4.60628 8.8349 4.6796 8.89021 4.76442 8.90301L5.65573 9.03749C5.9356 9.07971 6.12952 9.34951 6.08885 9.64011C6.07266 9.75582 6.02017 9.86277 5.93953 9.94439L5.29457 10.5971C5.23319 10.6593 5.20519 10.7488 5.21968 10.8365L5.37193 11.7582C5.41974 12.0476 5.23253 12.3225 4.95379 12.3721C4.84279 12.3919 4.72861 12.3731 4.62893 12.3187L3.83172 11.8835C3.75585 11.8421 3.66522 11.8421 3.58936 11.8835Z" /></g><defs><clipPath id="clip0_5_1866"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default ZwFlag;