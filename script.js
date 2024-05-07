document.addEventListener('DOMContentLoaded', function() {
    const output = document.forms.output;
    const buttons = document.querySelectorAll('input[type="button"]');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.value;
            if (value === '=') {
                output.value = eval(output.value);
            } else if (value === 'C') {
                output.value = '';
            } else {
                output.value += value;
            }
        });
    });
});
