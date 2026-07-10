export function button(href,text,variante) {
    return `
        <a href="${href}" class="a-btn a-btn--${variante}">
            ${text}
        </a>
    `;
}