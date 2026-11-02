export function initialize404Interaction(): void {
    const icon = document.getElementById("iconImage");
    const heartsContainer = document.getElementById("heartsContainer");
    if (!(icon instanceof HTMLImageElement) || !heartsContainer) return;

    icon.addEventListener("click", () => {
        const rect = icon.getBoundingClientRect();

        icon.animate(
            [
                { transform: "scale(1)" },
                { transform: "scale(1.3)" },
                { transform: "scale(1)" },
            ],
            { duration: 300, easing: "ease-out" },
        );

        for (let index = 0; index < 5; index += 1) {
            window.setTimeout(() => {
                const heart = document.createElement("img");
                heart.src = "images/heart.png";
                heart.className = "pointer-events-none fixed z-[9999] h-[30px] w-[30px]";
                heart.style.left = `${rect.left + rect.width / 2 + (Math.random() - 0.5) * 50}px`;
                heart.style.top = `${rect.top + rect.height / 2}px`;
                heartsContainer.appendChild(heart);
                const animation = heart.animate(
                    [
                        { opacity: 1, transform: "translateY(0) scale(1)" },
                        { opacity: 0, transform: "translateY(-200px) scale(1.5)" },
                    ],
                    { duration: 3000, easing: "ease-out", fill: "forwards" },
                );
                animation.addEventListener("finish", () => heart.remove(), { once: true });
            }, index * 100);
        }
    });
}
