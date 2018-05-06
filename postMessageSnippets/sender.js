const url = 'https://developer.mozilla.org';
const link = window.open(url);

link.postMessage('Some fascinating message','https://developer.mozilla.org');

window.addEventListener('message', event => {
    console.log(event.data);
})
