/* declare html constants */
const strengthMeter = document.getElementById('strength-meter');
const passInp = document.getElementById('passInp');
const reasonsContainer = document.getElementById('reasons');

passInp.addEventListener('input', updateStrengthMeter);

function updateStrengthMeter() {
    const weaknesses = calculatePasswordStrength(passInp.value);
    let strength = 100;
    weaknesses.forEach(weakness => strength -= weakness.deduction);
    strengthMeter.style.setProperty('--strength', strength);
} //updateStrengthMeter bracket

function calculatePasswordStrength(pass) {
    const weaknesses = [];
    weaknesses.push(lengthWeakness(pass));
    return weaknesses;
} //calculatePasswordStrength bracket

function lengthWeakness(pass) {
    const length = pass.length;
    if (length <= 6) {
        return {
            massage: 'Too short',
            deduction: 10
        } //return bracket
    } //if bracket
    else if (length <= 12) {
        return {
            massage: 'could be longer',
            deduction: 5
        } //return bracket
    } //else if bracket
} //lengthWeakness bracket