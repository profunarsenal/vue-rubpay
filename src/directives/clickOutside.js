export const clickOutside = {
    mounted(element, { value }) {
        element.vClickOutside = (event) => {
            if (!(element === event.target || element.contains(event.target) || event.target.closest('.mx-datepicker-main'))) {
                value(event);
            }
        };

        document.body.addEventListener('click', element.vClickOutside);
    },

    unmounted(element) {
        document.body.removeEventListener('click', element.vClickOutside);
    },
};