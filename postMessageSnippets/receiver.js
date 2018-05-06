window.addEventListener('message', event => {
    if(event.origin === 'file://') {
        console.log(event);
        const source = event.source;
        source.postMessage('yeah, i got it', event.origin);   
    }
})
