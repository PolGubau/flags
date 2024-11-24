import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Sy = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1475)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} rx={1.75} /><path fill="#4C4C4C" fillRule="evenodd" d="M0 19.9999H28V13.3333H0V19.9999Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 6.66667H28V0H0V6.66667Z" clipRule="evenodd" /><path fill="#50B500" d="M18.3551 11.557L17.593 11.9576C17.3608 12.0797 17.0735 11.9904 16.9514 11.7582C16.9028 11.6657 16.886 11.5598 16.9037 11.4568L17.0492 10.6082C17.06 10.5455 17.0392 10.4815 16.9937 10.4371L16.3771 9.83615C16.1892 9.65301 16.1854 9.35223 16.3685 9.16435C16.4414 9.08954 16.537 9.04085 16.6404 9.02582L17.4924 8.90201C17.5554 8.89287 17.6098 8.85333 17.638 8.79629L18.019 8.0242C18.1351 7.78892 18.42 7.69232 18.6553 7.80844C18.749 7.85468 18.8248 7.93051 18.871 8.0242L19.2521 8.79629C19.2802 8.85333 19.3347 8.89287 19.3976 8.90201L20.2496 9.02582C20.5093 9.06355 20.6892 9.30462 20.6515 9.56427C20.6364 9.66767 20.5878 9.76322 20.5129 9.83615L19.8964 10.4371C19.8508 10.4815 19.8301 10.5455 19.8408 10.6082L19.9864 11.4568C20.0307 11.7154 19.857 11.961 19.5984 12.0053C19.4955 12.023 19.3895 12.0062 19.2971 11.9576L18.535 11.557C18.4787 11.5274 18.4114 11.5274 18.3551 11.557Z" /><path fill="#50B500" d="M9.46507 11.557L8.70298 11.9576C8.47074 12.0797 8.1835 11.9904 8.06141 11.7582C8.01279 11.6657 7.99601 11.5598 8.01368 11.4568L8.15922 10.6082C8.16998 10.5455 8.14919 10.4815 8.10364 10.4371L7.48709 9.83615C7.29921 9.65301 7.29537 9.35223 7.47851 9.16435C7.55144 9.08954 7.64699 9.04085 7.75039 9.02582L8.60243 8.90201C8.66538 8.89287 8.7198 8.85333 8.74795 8.79629L9.129 8.0242C9.24511 7.78892 9.52998 7.69232 9.76526 7.80844C9.85895 7.85468 9.93478 7.93051 9.98102 8.0242L10.3621 8.79629C10.3902 8.85333 10.4446 8.89287 10.5076 8.90201L11.3596 9.02582C11.6193 9.06355 11.7992 9.30462 11.7615 9.56427C11.7464 9.66767 11.6977 9.76322 11.6229 9.83615L11.0064 10.4371C10.9608 10.4815 10.94 10.5455 10.9508 10.6082L11.0963 11.4568C11.1407 11.7154 10.967 11.961 10.7084 12.0053C10.6054 12.023 10.4995 12.0062 10.407 11.9576L9.64495 11.557C9.58864 11.5274 9.52138 11.5274 9.46507 11.557Z" /></g><defs><clipPath id="clip0_5_1475"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Sy;