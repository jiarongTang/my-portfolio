import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("/github.jpeg", "GitHub","https://github.com/jiarongTang")}
${Button("/linkelin.jpeg", "LinkedIn","https://www.linkedin.com/in/jiarong-tang-859757160/")}
</div>
`;