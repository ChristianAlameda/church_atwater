function openEmailClient() {
    const email = 'atwaternazarene@gmail.com';
    const subject = 'I would like to be baptized';
    const body = 'My name is _____ and I want to be baptized.';
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}