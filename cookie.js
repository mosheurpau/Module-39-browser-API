const getCookie = name => {
    const cookie = document.cookie;
    const allCookie = cookie.split('; ');
    const findCookie = allCookie.find(c => c.includes(name));
    if (findCookie) {
        'contry=US'
        const cookiNameValue = findCookie.split('=');
        return cookiNameValue[1];
    }
}