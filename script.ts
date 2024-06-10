export function showAlert(message: string, type: string = 'info'): void {
    document.addEventListener('DOMContentLoaded', () => {
        const alertContainer = document.getElementById('alert-container');
        if (!alertContainer) {
            console.error('Alert container not found!');
            return;
        }

        const alertElement = document.createElement('div');
        alertElement.classList.add('alert', `alert-${type}`);
        alertElement.innerText = message;
        alertContainer.appendChild(alertElement);

        setTimeout(() => {
            alertElement.remove();
        }, 5000); // Remove the alert after 5 seconds
    });
}

