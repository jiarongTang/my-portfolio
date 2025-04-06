import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("/public/github.jpeg", "GitHub")}
${Button("/public/linkelin.jpeg", "LinkedIn")}
</div>
`;