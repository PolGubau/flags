import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const EuFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1878)"><rect width={28} height={20} fill="white" rx={2} /><rect width={28} height={20} fill="#0EA6FB" /><path fill="#FFDA27" d="M13.9484 4.1655L13.5124 4.39468C13.3796 4.46452 13.2153 4.41345 13.1454 4.2806C13.1176 4.22771 13.108 4.16711 13.1181 4.10821L13.2014 3.6228C13.2075 3.58693 13.1957 3.55034 13.1696 3.52494L12.8169 3.18117C12.7095 3.07641 12.7073 2.90436 12.812 2.79689C12.8537 2.75409 12.9084 2.72624 12.9675 2.71765L13.4549 2.64683C13.4909 2.6416 13.5221 2.61898 13.5382 2.58635L13.7561 2.14471C13.8225 2.01012 13.9855 1.95487 14.1201 2.02129C14.1737 2.04774 14.217 2.09111 14.2435 2.14471L14.4615 2.58635C14.4776 2.61898 14.5087 2.6416 14.5447 2.64683L15.0321 2.71765C15.1806 2.73923 15.2835 2.87713 15.2619 3.02565C15.2533 3.08479 15.2255 3.13945 15.1827 3.18117L14.83 3.52494C14.804 3.55034 14.7921 3.58693 14.7982 3.6228L14.8815 4.10821C14.9068 4.25613 14.8075 4.39662 14.6596 4.42199C14.6007 4.43209 14.5401 4.42249 14.4872 4.39468L14.0513 4.1655C14.019 4.14857 13.9806 4.14857 13.9484 4.1655Z" /><path fill="#FFDA27" d="M17.2389 5.11057L16.803 5.33975C16.6701 5.40959 16.5058 5.35852 16.436 5.22567C16.4082 5.17277 16.3986 5.11218 16.4087 5.05328L16.4919 4.56787C16.4981 4.532 16.4862 4.49541 16.4601 4.47001L16.1075 4.12624C16 4.02148 15.9978 3.84943 16.1025 3.74196C16.1443 3.69916 16.1989 3.67131 16.2581 3.66272L16.7454 3.5919C16.7815 3.58666 16.8126 3.56405 16.8287 3.53142L17.0467 3.08978C17.1131 2.95519 17.276 2.89993 17.4106 2.96635C17.4642 2.9928 17.5076 3.03618 17.534 3.08978L17.752 3.53142C17.7681 3.56405 17.7992 3.58666 17.8352 3.5919L18.3226 3.66272C18.4711 3.6843 18.574 3.8222 18.5525 3.97072C18.5439 4.02986 18.516 4.08452 18.4732 4.12624L18.1205 4.47001C18.0945 4.49541 18.0826 4.532 18.0888 4.56787L18.172 5.05328C18.1974 5.2012 18.098 5.34168 17.9501 5.36706C17.8912 5.37716 17.8306 5.36756 17.7777 5.33975L17.3418 5.11057C17.3096 5.09364 17.2711 5.09364 17.2389 5.11057Z" /><path fill="#FFDA27" d="M19.7687 7.54331L19.3327 7.77249C19.1999 7.84233 19.0356 7.79126 18.9658 7.65841C18.9379 7.60551 18.9284 7.54492 18.9385 7.48602L19.0217 7.00061C19.0279 6.96474 19.016 6.92815 18.9899 6.90275L18.6372 6.55898C18.5298 6.45422 18.5276 6.28217 18.6323 6.1747C18.674 6.1319 18.7287 6.10405 18.7878 6.09546L19.2752 6.02464C19.3112 6.0194 19.3424 5.99679 19.3585 5.96416L19.5764 5.52251C19.6429 5.38793 19.8058 5.33267 19.9404 5.39909C19.994 5.42554 20.0374 5.46892 20.0638 5.52251L20.2818 5.96416C20.2979 5.99679 20.329 6.0194 20.365 6.02464L20.8524 6.09546C21.0009 6.11704 21.1038 6.25494 21.0822 6.40346C21.0737 6.4626 21.0458 6.51726 21.003 6.55898L20.6503 6.90275C20.6243 6.92815 20.6124 6.96474 20.6185 7.00061L20.7018 7.48602C20.7272 7.63394 20.6278 7.77442 20.4799 7.79979C20.421 7.8099 20.3604 7.8003 20.3075 7.77249L19.8716 7.54331C19.8394 7.52638 19.8009 7.52638 19.7687 7.54331Z" /><path fill="#FFDA27" d="M20.6437 10.9559L20.2077 11.1851C20.0749 11.2549 19.9106 11.2039 19.8408 11.071C19.8129 11.0181 19.8034 10.9575 19.8135 10.8986L19.8967 10.4132C19.9029 10.3773 19.891 10.3407 19.8649 10.3153L19.5122 9.97158C19.4048 9.86682 19.4026 9.69477 19.5073 9.5873C19.549 9.5445 19.6037 9.51665 19.6628 9.50806L20.1502 9.43723C20.1862 9.432 20.2174 9.40939 20.2335 9.37676L20.4514 8.93511C20.5179 8.80053 20.6808 8.74527 20.8154 8.81169C20.869 8.83814 20.9124 8.88152 20.9388 8.93511L21.1568 9.37676C21.1729 9.40939 21.204 9.432 21.24 9.43723L21.7274 9.50806C21.8759 9.52964 21.9788 9.66753 21.9572 9.81606C21.9487 9.8752 21.9208 9.92986 21.878 9.97158L21.5253 10.3153C21.4993 10.3407 21.4874 10.3773 21.4935 10.4132L21.5768 10.8986C21.6022 11.0465 21.5028 11.187 21.3549 11.2124C21.296 11.2225 21.2354 11.2129 21.1825 11.1851L20.7466 10.9559C20.7144 10.939 20.6759 10.939 20.6437 10.9559Z" /><path fill="#FFDA27" d="M19.7687 14.1761L19.3327 14.4053C19.1999 14.4751 19.0356 14.4241 18.9658 14.2912C18.9379 14.2383 18.9284 14.1777 18.9385 14.1188L19.0217 13.6334C19.0279 13.5976 19.016 13.561 18.9899 13.5356L18.6372 13.1918C18.5298 13.087 18.5276 12.915 18.6323 12.8075C18.674 12.7647 18.7287 12.7369 18.7878 12.7283L19.2752 12.6574C19.3112 12.6522 19.3424 12.6296 19.3585 12.597L19.5764 12.1553C19.6429 12.0207 19.8058 11.9655 19.9404 12.0319C19.994 12.0584 20.0374 12.1017 20.0638 12.1553L20.2818 12.597C20.2979 12.6296 20.329 12.6522 20.365 12.6574L20.8524 12.7283C21.0009 12.7499 21.1038 12.8877 21.0822 13.0363C21.0737 13.0954 21.0458 13.1501 21.003 13.1918L20.6503 13.5356C20.6243 13.561 20.6124 13.5976 20.6185 13.6334L20.7018 14.1188C20.7272 14.2668 20.6278 14.4072 20.4799 14.4326C20.421 14.4427 20.3604 14.4331 20.3075 14.4053L19.8716 14.1761C19.8394 14.1592 19.8009 14.1592 19.7687 14.1761Z" /><path fill="#FFDA27" d="M17.2389 16.6089L16.803 16.838C16.6701 16.9079 16.5058 16.8568 16.436 16.724C16.4082 16.6711 16.3986 16.6105 16.4087 16.5516L16.4919 16.0662C16.4981 16.0303 16.4862 15.9937 16.4601 15.9683L16.1075 15.6245C16 15.5198 15.9978 15.3477 16.1025 15.2402C16.1443 15.1975 16.1989 15.1696 16.2581 15.161L16.7454 15.0902C16.7815 15.085 16.8126 15.0623 16.8287 15.0297L17.0467 14.5881C17.1131 14.4535 17.276 14.3982 17.4106 14.4646C17.4642 14.4911 17.5076 14.5345 17.534 14.5881L17.752 15.0297C17.7681 15.0623 17.7992 15.085 17.8352 15.0902L18.3226 15.161C18.4711 15.1826 18.574 15.3205 18.5525 15.469C18.5439 15.5282 18.516 15.5828 18.4732 15.6245L18.1205 15.9683C18.0945 15.9937 18.0826 16.0303 18.0888 16.0662L18.172 16.5516C18.1974 16.6995 18.098 16.84 17.9501 16.8653C17.8912 16.8754 17.8306 16.8659 17.7777 16.838L17.3418 16.6089C17.3096 16.5919 17.2711 16.5919 17.2389 16.6089Z" /><path fill="#FFDA27" d="M13.9484 17.349L13.5124 17.5782C13.3796 17.648 13.2153 17.5969 13.1454 17.4641C13.1176 17.4112 13.108 17.3506 13.1181 17.2917L13.2014 16.8063C13.2075 16.7704 13.1957 16.7338 13.1696 16.7084L12.8169 16.3646C12.7095 16.2599 12.7073 16.0878 12.812 15.9804C12.8537 15.9376 12.9084 15.9097 12.9675 15.9011L13.4549 15.8303C13.4909 15.8251 13.5221 15.8025 13.5382 15.7698L13.7561 15.3282C13.8225 15.1936 13.9855 15.1383 14.1201 15.2048C14.1737 15.2312 14.217 15.2746 14.2435 15.3282L14.4615 15.7698C14.4776 15.8025 14.5087 15.8251 14.5447 15.8303L15.0321 15.9011C15.1806 15.9227 15.2835 16.0606 15.2619 16.2091C15.2533 16.2683 15.2255 16.3229 15.1827 16.3646L14.83 16.7084C14.804 16.7338 14.7921 16.7704 14.7982 16.8063L14.8815 17.2917C14.9068 17.4396 14.8075 17.5801 14.6596 17.6055C14.6007 17.6156 14.5401 17.606 14.4872 17.5782L14.0513 17.349C14.019 17.332 13.9806 17.332 13.9484 17.349Z" /><path fill="#FFDA27" d="M10.6586 16.6089L10.2226 16.838C10.0898 16.9079 9.92549 16.8568 9.85565 16.724C9.82784 16.6711 9.81824 16.6105 9.82835 16.5516L9.9116 16.0662C9.91775 16.0303 9.90586 15.9937 9.87981 15.9683L9.52713 15.6245C9.41966 15.5198 9.41746 15.3477 9.52222 15.2402C9.56394 15.1975 9.6186 15.1696 9.67774 15.161L10.1651 15.0902C10.2011 15.085 10.2323 15.0623 10.2484 15.0297L10.4663 14.5881C10.5328 14.4535 10.6957 14.3982 10.8303 14.4646C10.8839 14.4911 10.9273 14.5345 10.9537 14.5881L11.1717 15.0297C11.1878 15.0623 11.2189 15.085 11.2549 15.0902L11.7423 15.161C11.8908 15.1826 11.9937 15.3205 11.9721 15.469C11.9635 15.5282 11.9357 15.5828 11.8929 15.6245L11.5402 15.9683C11.5142 15.9937 11.5023 16.0303 11.5084 16.0662L11.5917 16.5516C11.6171 16.6995 11.5177 16.84 11.3698 16.8653C11.3109 16.8754 11.2503 16.8659 11.1974 16.838L10.7615 16.6089C10.7293 16.5919 10.6908 16.5919 10.6586 16.6089Z" /><path fill="#FFDA27" d="M8.12854 14.1761L7.69261 14.4053C7.55977 14.4751 7.39546 14.4241 7.32562 14.2912C7.29781 14.2383 7.28822 14.1777 7.29832 14.1188L7.38157 13.6334C7.38772 13.5976 7.37583 13.561 7.34978 13.5356L6.9971 13.1918C6.88963 13.087 6.88743 12.915 6.99219 12.8075C7.03391 12.7647 7.08857 12.7369 7.14771 12.7283L7.63509 12.6574C7.6711 12.6522 7.70223 12.6296 7.71834 12.597L7.9363 12.1553C8.00272 12.0207 8.16567 11.9655 8.30025 12.0319C8.35385 12.0584 8.39722 12.1017 8.42367 12.1553L8.64164 12.597C8.65774 12.6296 8.68887 12.6522 8.72488 12.6574L9.21226 12.7283C9.36078 12.7499 9.46369 12.8877 9.44211 13.0363C9.43352 13.0954 9.40566 13.1501 9.36287 13.1918L9.0102 13.5356C8.98414 13.561 8.97225 13.5976 8.9784 13.6334L9.06165 14.1188C9.08702 14.2668 8.98768 14.4072 8.83975 14.4326C8.78085 14.4427 8.72026 14.4331 8.66736 14.4053L8.23143 14.1761C8.19922 14.1592 8.16075 14.1592 8.12854 14.1761Z" /><path fill="#FFDA27" d="M7.21863 10.9559L6.7827 11.1851C6.64986 11.2549 6.48555 11.2039 6.41571 11.071C6.3879 11.0181 6.3783 10.9575 6.38841 10.8986L6.47166 10.4132C6.47781 10.3773 6.46592 10.3407 6.43987 10.3153L6.08719 9.97158C5.97972 9.86682 5.97752 9.69477 6.08228 9.5873C6.124 9.5445 6.17866 9.51665 6.2378 9.50806L6.72518 9.43723C6.76119 9.432 6.79232 9.40939 6.80842 9.37676L7.02639 8.93511C7.09281 8.80053 7.25576 8.74527 7.39034 8.81169C7.44393 8.83814 7.48731 8.88152 7.51376 8.93511L7.73173 9.37676C7.74783 9.40939 7.77896 9.432 7.81497 9.43723L8.30235 9.50806C8.45087 9.52964 8.55378 9.66753 8.5322 9.81606C8.5236 9.8752 8.49575 9.92986 8.45296 9.97158L8.10028 10.3153C8.07423 10.3407 8.06234 10.3773 8.06849 10.4132L8.15174 10.8986C8.17711 11.0465 8.07776 11.187 7.92984 11.2124C7.87094 11.2225 7.81035 11.2129 7.75745 11.1851L7.32152 10.9559C7.28931 10.939 7.25084 10.939 7.21863 10.9559Z" /><path fill="#FFDA27" d="M8.12854 7.54331L7.69261 7.77249C7.55977 7.84233 7.39546 7.79126 7.32562 7.65841C7.29781 7.60551 7.28822 7.54492 7.29832 7.48602L7.38157 7.00061C7.38772 6.96474 7.37583 6.92815 7.34978 6.90275L6.9971 6.55898C6.88963 6.45422 6.88743 6.28217 6.99219 6.1747C7.03391 6.1319 7.08857 6.10405 7.14771 6.09546L7.63509 6.02464C7.6711 6.0194 7.70223 5.99679 7.71834 5.96416L7.9363 5.52251C8.00272 5.38793 8.16567 5.33267 8.30025 5.39909C8.35385 5.42554 8.39722 5.46892 8.42367 5.52251L8.64164 5.96416C8.65774 5.99679 8.68887 6.0194 8.72488 6.02464L9.21226 6.09546C9.36078 6.11704 9.46369 6.25494 9.44211 6.40346C9.43352 6.4626 9.40566 6.51726 9.36287 6.55898L9.0102 6.90275C8.98414 6.92815 8.97225 6.96474 8.9784 7.00061L9.06165 7.48602C9.08702 7.63394 8.98768 7.77442 8.83975 7.79979C8.78085 7.8099 8.72026 7.8003 8.66736 7.77249L8.23143 7.54331C8.19922 7.52638 8.16075 7.52638 8.12854 7.54331Z" /><path fill="#FFDA27" d="M10.6586 5.11057L10.2226 5.33975C10.0898 5.40959 9.92549 5.35852 9.85565 5.22567C9.82784 5.17277 9.81824 5.11218 9.82835 5.05328L9.9116 4.56787C9.91775 4.532 9.90586 4.49541 9.87981 4.47001L9.52713 4.12624C9.41966 4.02148 9.41746 3.84943 9.52222 3.74196C9.56394 3.69916 9.6186 3.67131 9.67774 3.66272L10.1651 3.5919C10.2011 3.58666 10.2323 3.56405 10.2484 3.53142L10.4663 3.08978C10.5328 2.95519 10.6957 2.89993 10.8303 2.96635C10.8839 2.9928 10.9273 3.03618 10.9537 3.08978L11.1717 3.53142C11.1878 3.56405 11.2189 3.58666 11.2549 3.5919L11.7423 3.66272C11.8908 3.6843 11.9937 3.8222 11.9721 3.97072C11.9635 4.02986 11.9357 4.08452 11.8929 4.12624L11.5402 4.47001C11.5142 4.49541 11.5023 4.532 11.5084 4.56787L11.5917 5.05328C11.6171 5.2012 11.5177 5.34168 11.3698 5.36706C11.3109 5.37716 11.2503 5.36756 11.1974 5.33975L10.7615 5.11057C10.7293 5.09364 10.6908 5.09364 10.6586 5.11057Z" /></g><defs><clipPath id="clip0_5_1878"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default EuFlag;