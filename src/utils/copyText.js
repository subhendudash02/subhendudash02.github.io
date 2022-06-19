export default async function copy(query) {
    const text = document.querySelector(query);
    await navigator.clipboard.writeText(text.textContent);
}